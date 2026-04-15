# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 仓库概览

- 这个仓库包含 **Python 后端源码**、Docker 部署栈、文档，以及 **已构建好的前端产物**。
- `frontend/dist/` 是最终构建产物，由 Nginx 直接托管；可编辑的 Vue 前端源码不在本仓库，而是在单独的私有仓库中维护，构建后再同步到这里。
- 默认运行形态是 4 个 Docker Compose 服务：`frontend`（Nginx）、`backend`（Flask + gunicorn）、`postgres`、`redis`。

## 常用命令

### Docker 方式开发 / 运行

- 初始化：
  - `cp backend_api_python/env.example backend_api_python/.env`
  - `./scripts/generate-secret-key.sh`
  - `docker compose up -d --build`
- 查看服务状态：`docker compose ps`
- 查看后端日志：`docker compose logs -f backend`
- 仅重启后端：`docker compose restart backend`
- 前端产物更新后重建前端容器：`docker compose build frontend && docker compose up -d frontend`
- 停止整个栈：`docker compose down`

### 后端本地开发

- 创建虚拟环境并安装依赖：
  - `cd backend_api_python`
  - `python -m venv .venv && source .venv/bin/activate`
  - `pip install -r requirements.txt`
  - `cp env.example .env`
- 本地开发启动：`python run.py`
- 本地以生产方式启动：`gunicorn -c gunicorn_config.py "run:app"`
- Windows 下启用 MT5 依赖：`pip install -r requirements-windows.txt`

### 测试与检查

- 运行全部后端测试：`cd backend_api_python && pytest tests/ -v`
- 运行单个测试文件：`cd backend_api_python && pytest tests/test_health.py -v`
- 按测试名过滤：`cd backend_api_python && pytest tests/test_health.py -k health_endpoint -v`
- CI 风格语法检查：`cd backend_api_python && python -m py_compile run.py && python -m compileall -q app/ scripts/`
- CI 风格导入检查：
  - `cd backend_api_python`
  - `python -c "import sys; sys.path.insert(0, '.'); from app import create_app; from app.config import settings; from app.routes import health; print('ok')"`
- 仓库里 **没有单独配置 lint 命令**；GitHub Actions 目前只做依赖安装、语法检查、导入检查，以及前端构建产物/配置文件存在性检查。

### 前端产物同步

- 从私有 Vue 仓库同步构建结果：
  - `export QUANTDINGER_VUE_SRC=/path/to/QuantDinger-Vue`
  - `./scripts/build-frontend.sh`
- 该脚本会在私有前端仓库中执行 `npm install --legacy-peer-deps`、`npm run build`，然后把 `dist/` 同步到本仓库的 `frontend/dist/`。

## 配置模型

- `backend_api_python/.env` 是后端运行时的主配置文件。
- 仓库根目录 `.env` 是可选的，主要用于 Docker Compose 层的端口和镜像源覆盖，例如 `FRONTEND_PORT`、`BACKEND_PORT`、`DB_PORT`、`IMAGE_PREFIX`。
- `backend_api_python/run.py` 会优先加载 `backend_api_python/.env`，再回退加载仓库根目录 `.env`。
- `run.py` 还会根据 `PROXY_URL` 自动设置标准代理环境变量，并对中国金融数据域名设置 `NO_PROXY` 直连。
- Docker 部署默认要求非示例值的 `SECRET_KEY`；文档和入口脚本都把默认示例密钥视为不安全配置。

## 高层架构

### 部署结构

- `frontend/` 是一个 Nginx 镜像，只负责提供 `frontend/dist/` 静态文件，并把 `/api/` 反向代理到后端容器。
- `backend_api_python/` 是 Flask 应用，既支持本地 `python run.py` 开发，也支持 Docker 中用 gunicorn 运行。
- 数据库层目前只走 PostgreSQL；`app/utils/db.py` 已经是 PostgreSQL 专用门面。
- Redis 在 Docker 形态中承担可选缓存 / 运行时支撑角色；另外部分代码路径也会在本地模式下使用轻量级内存缓存。

### 后端启动模型

- `backend_api_python/app/__init__.py` 中的 `create_app()` 是真正的后端启动中心。
- `create_app()` 不只是注册 Flask blueprint，还会：
  - 安装自定义 JSON provider，把 `NaN` / `Infinity` 转成 `null`
  - 初始化数据库连接
  - 确保管理员账号存在
  - 注册 `app/routes` 下全部 blueprint
  - 启动多个后台 worker：pending order、portfolio monitor、USDT 订单检测、Polymarket、AI calibration、reflection
  - 尝试在启动时恢复之前运行中的策略
- 重点：**调用 `create_app()` 会产生副作用**。不要为了“读配置”或“单纯 import 模块”而随意触发它。

### 路由与服务分层

- HTTP 接口位于 `backend_api_python/app/routes/`，大多作为薄路由层。
- 主要业务逻辑集中在 `backend_api_python/app/services/`。
- 主要 API 面按前缀划分，包括：
  - `/api/auth`
  - `/api/users`
  - `/api/indicator`
  - `/api/market`
  - `/api/fast-analysis`
  - `/api/portfolio`
  - `/api/billing`
  - `/api/quick-trade`
  - `/api/experiment`
  - `/api/ibkr`
  - `/api/mt5`
  - `/api/polymarket`

### 市场数据层

- `app/data_sources/` 是底层市场/供应商适配层，负责不同市场和数据源的原始访问。
- `app/data_sources/factory.py` 通过市场类型选择数据源，是行情和 K 线获取的统一入口；当前支持 `Crypto`、`CNStock`、`HKStock`、`USStock`、`Forex`、`Futures`。
- `app/data_providers/` 位于更上层，服务于 dashboard / global market 这类聚合场景，例如热力图、新闻、情绪、机会扫描等。

### 策略、回测与执行链路

- 仓库文档中约定了两种主要策略模型：
  - `IndicatorStrategy`：DataFrame 风格脚本，输出 `buy` / `sell` 信号
  - `ScriptStrategy`：事件驱动脚本，带显式生命周期回调和下单控制
- `app/services/backtest.py` 是主回测引擎。该文件体量很大，负责回测执行、结果持久化，以及按回测区间自动切换更高精度执行周期（`1m` / `5m`）。
- `app/services/trading_executor.py` 负责实时策略线程，拉取市场数据、计算信号，并把待执行订单写入数据库。
- 实际交易执行与信号生成是分离的：
  - `trading_executor.py` 负责生成 pending orders
  - `app/services/pending_order_worker.py` 负责真正派发订单
  - 各交易所执行适配器位于 `app/services/live_trading/`
- 启动恢复逻辑当前只恢复 `IndicatorStrategy`；其它策略类型在恢复阶段会被跳过。

### AI 分析链路

- `app/services/fast_analysis.py` 是 `/api/fast-analysis/*` 背后的主 AI 分析服务。
- 其结构是明确分层的：
  - 市场数据采集：`market_data_collector`
  - 单次 LLM 分析：`LLMService`
  - 历史记忆检索与写入：`analysis_memory`
  - 阈值调优：`ai_calibration`
- Polymarket 相关上下文也被整合进这条分析链路中。

### 兼容旧系统的配置层

- `app/utils/config_loader.py` 会把环境变量映射成旧 PHP addon 风格的嵌套配置结构。
- 很多服务读取的并不是直接的 `os.environ`，而是这层兼容配置，尤其是 LLM、搜索、数据源相关配置。
- 如果某个行为看起来像是“来自 addon 配置”，优先检查 `config_loader.py`，不要假设项目里还存在数据库驱动或文件驱动的旧配置中心。

## 阅读与定位建议

- 多个核心文件体量很大，例如：
  - `app/services/backtest.py`
  - `app/services/trading_executor.py`
  - `app/services/fast_analysis.py`
  - `app/services/strategy.py`
  - `app/routes/quick_trade.py`
  - `app/routes/strategy.py`
- 处理这些文件时，优先用符号搜索 / 关键字搜索，不要从头到尾通读。
- 想快速理解启动和运行时行为，优先看：
  - `DEVELOPMENT.md`
  - `backend_api_python/README.md`
  - `backend_api_python/app/__init__.py`
  - `backend_api_python/app/routes/__init__.py`
  - `backend_api_python/app/utils/config_loader.py`

## CI 与仓库边界

- `.github/workflows/basic-ci.yml` 不会启动完整应用栈，也不是全量集成测试。
- 它主要验证：后端依赖是否可安装、Python 语法和关键模块导入是否正常、前端构建产物和配置文件是否存在。
- `.github/workflows/update-frontend.yml` 说明了预期的前端交付方式：由私有前端仓库触发，把构建产物同步回本仓库。
- 当前仓库中没有额外的 `AGENTS.md`、Cursor rules 或 Copilot instructions 文件。