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

## 系统架构（5 层流水线）

```
前端 (Vue SPA)  ──►  [层1] HTTP 路由层  ──►  [层2] 数据服务层
                                                           │
                                                       ▼    ▼
[层5] 交易所直连 REST ◄── [层4] Pending Order Worker ◄── [层3] 策略执行器
                                                           ▲
                                                    [层3] 回测引擎
```

### 层 1 — HTTP 路由层（薄路由，零业务逻辑）
**目录**: `backend_api_python/app/routes/`

接收前端请求，转发至对应 service 层。**每个 blueprint 是独立文件**，主要路由前缀：

| 前缀 | 文件 | 职责 |
|------|------|------|
| `/api/auth` | `auth.py` | JWT 登录/注册/OAuth |
| `/api/users` | `user.py` | 用户管理 |
| `/api/indicator` | `indicator.py`, `kline.py`, `backtest.py` | 指标编辑、K线、回测 |
| `/api/market` | `market.py` | 实时行情 |
| `/api/fast-analysis` | `fast_analysis.py` | AI 分析入口 |
| `/api/portfolio` | `portfolio.py` | 持仓与账户 |
| `/api/billing` | `billing.py` | 积分计费 |
| `/api/quick-trade` | `quick_trade.py` | 快速下单 |
| `/api/ibkr` | `ibkr.py` | IBKR 美股 |
| `/api/mt5` | `mt5.py` | MT5 外汇 |
| `/api/polymarket` | `polymarket.py` | Polymarket 预测市场 |
| `/api/experiment` | `experiment.py` | 策略进化/实验 |
| `/api/dashboard`, `/api/global-market`, `/api/community`, `/api/settings`, `/api/credentials` | 对应文件 | Dashboard / 全局市场 / 社区 / 设置 / 凭证 |

### 层 2 — 数据服务层（数据聚合与缓存）
**上游**: 层 1 调用
**下游**: 层 3（策略、回测）依赖此层数据

此层分为两个子模块：

**2a. K 线数据服务** (`app/services/kline.py` + `app/data_sources/factory.py`)
- `KlineService`: 封装 `DataSourceFactory`，TTL 缓存最新数据（历史数据不缓存）
- `DataSourceFactory.get_source(market)`: 按市场类型返回适配器实例
- `DataSourceFactory.get_data_source(name)`: 兼容旧代码，别名路由到 Crypto

**2b. 聚合数据提供器** (`app/data_providers/`)
- 上层封装，服务 Dashboard / 全局市场：热力图、新闻、情绪、机会扫描
- `crypto.py`, `forex.py`, `indices.py`, `commodities.py`, `heatmap.py`, `news.py`, `sentiment.py`, `opportunities.py`
- 通过 Redis 或内存 `CacheManager` 缓存，默认 TTL 60s–6h 不等

**底层数据源适配器** (`app/data_sources/`)

| 文件 | 底层依赖 | 支持市场 |
|------|----------|----------|
| `crypto.py` | CCXT | Crypto（Binance, OKX, Bybit 等） |
| `us_stock.py` | yfinance | 美股 |
| `cn_stock.py` | 腾讯财经 | A 股 |
| `hk_stock.py` | 腾讯财经 | 港股 |
| `forex.py` | yfinance | 外汇 |
| `futures.py` | CCXT | 期货/大宗商品 |
| `polymarket.py` | Polymarket API | 预测市场 |
| `base.py` | — | 抽象基类，定义 `get_kline` / `get_ticker` 接口 |

关键基础设施：
- `cache_manager.py`: Redis / 内存 LRU 缓存门面
- `rate_limiter.py`: 限流器
- `circuit_breaker.py`: 熔断器
- `tencent.py`: 腾讯财经 HTTP 适配

### 层 3 — 策略层（信号生成）

此层分为**回测**和**实时执行**两条路径：

**3a. 回测引擎** (`app/services/backtest.py`)
- `BacktestService`: 主类
- 从 `DataSourceFactory` 拉取 K 线（含 TTL 缓存）
- 自动多时间周期切换：`1m` 回测 ≤15 天自动提升精度；`5m` 回测 ≤1 年
- 指标计算：`IndicatorParamsParser` + `builtin_indicators.py`
- 策略编译：`strategy_compiler.py`（将结构化配置 JSON 编译为可执行 Python 代码）
- 结果写入 `qd_backtest_runs` 表

**3b. 实时策略执行器** (`app/services/trading_executor.py`)
- `TradingExecutor`: 核心类，按策略 ID 启动独立线程
- `StrategyService`: 策略 CRUD、状态管理
- 策略循环：拉 K 线 → 解析指标参数 → 执行策略代码 → 去重信号 → 写入 `pending_orders` 表
- 支持两种策略模式：
  - `IndicatorStrategy`（DataFrame 脚本，输出 `buy`/`sell`）
  - `ScriptStrategy`（事件驱动脚本，显式生命周期回调）
- 本地价格缓存（TTL 10s）和信号去重缓存防止重复下单
- 启动恢复：只恢复 `IndicatorStrategy`，其他类型跳过

**3c. 策略辅助** (`app/services/`)
- `indicator_params.py`: 解析 `@param` 注解、支持 `call_indicator()` 嵌套调用
- `builtin_indicators.py`: 内置示例指标（RSI 等）
- `strategy_script_runtime.py`: ScriptStrategy 事件驱动运行时
- `strategy_snapshot.py`: 策略快照备份
- `experiment/`: 策略参数空间进化（`evolution.py`）、评分（`scoring.py`）、市场 Regime 检测（`regime.py`）

### 层 4 — 风控与信号通知层

**4a. 风控信号通知** (`app/services/signal_notifier.py`)
- `SignalNotifier`: 支持多渠道推送（浏览器通知、Email、Telegram、Discord、Webhook）
- 基于策略的 `notification_config` JSON 配置

**4b. 持仓监控** (`app/services/portfolio_monitor.py`)
- 后台线程轮询用户手动持仓
- AI 驱动价格/盈亏预警通知
- 依赖 `fast_analysis.py` 进行 AI 量化分析

### 层 5 — 实盘执行层（订单派发与交易所对接）

```
层3 signals → pending_orders DB表 ← PendingOrderWorker(轮询)
                                         │
                                    execution_mode:
                                    - signal: 只发通知
                                    - live: 直连交易所 REST
                                         │
                          app/services/live_trading/
                          ├── factory.py          工厂：根据 exchange_id 创建客户端
                          ├── execution.py        信号→订单转换、符号规范化
                          ├── records.py          成交回报写入本地持仓表
                          └── [各交易所适配器]
                              ├── binance.py / binance_spot.py
                              ├── okx.py / bitget.py / bybit.py / gate.py
                              ├── kucoin.py / kraken.py / coinbase_exchange.py
                              ├── deepcoin.py / htx.py
                              ├── ibkr_trading/client.py   (美股，ib_insync)
                              └── mt5_trading/client.py     (外汇，MetaTrader5 SDK)
```

**PendingOrderWorker** (`app/services/pending_order_worker.py`):
- 独立后台线程，每秒轮询 `pending_orders` 表（批量 50 条）
- 状态机：`pending` → `processing` → `filled`/`failed`
- 防重：90s STALE 超时自动释放被废弃的 processing 订单
- 持仓同步：定期对比本地 `qd_strategy_positions` 与交易所实际持仓，消除”幽灵持仓”

**各交易所适配器**（均继承 `BaseRestClient`，纯 `requests` 无 CCXT）：
- `BaseRestClient`: 统一 HTTP 封装，处理 SSL 验证、代理、超时、错误解析
- 每个交易所独立文件，完整实现：下单/市价/止损单、持仓查询、余额查询、费用查询

---

### 各层依赖关系

```
层1(路由) → 层2(数据)    ← 层3(回测路径)
         ↘
          层3(实时路径) → 层4(风控通知)
                            ↓
                       层5(实盘执行)
```

关键原则：
- **层 3 实时路径依赖层 2**：策略线程通过 `KlineService` 获取数据
- **层 3 回测路径独立依赖层 2**：回测引擎直接用 `DataSourceFactory`
- **层 5 只被层 4 触发**：不主动拉取信号，只响应 `pending_orders` 表中的信号

---

### 启动时的后台线程（`create_app()` 启动钩子）

| 线程 | 环境变量 | 依赖层 |
|------|----------|--------|
| `PendingOrderWorker` | `ENABLE_PENDING_ORDER_WORKER` | 层 5 |
| `PortfolioMonitor` | `ENABLE_PORTFOLIO_MONITOR` | 层 4 |
| `USDTOrderWorker` | `USDT_PAY_ENABLED` | 支付层 |
| `PolymarketWorker` | — | 层 2 数据 |
| `AI Calibration` | — | 层 3 策略 |
| `Reflection Worker` | — | 层 3 策略 |
| `restore_running_strategies` | `DISABLE_RESTORE_RUNNING_STRATEGIES` | 层 3 |

### AI 分析链路（与策略层并行）

`app/services/fast_analysis.py` — `/api/fast-analysis/*` 的主服务：

```
MarketDataCollector → LLMService → analysis_memory → ai_calibration → 响应
     (数据采集)       (单次LLM调用)  (历史记忆)     (阈值自调优)
```

- `market_data_collector.py`: 统一封装 K 线（`DataSourceFactory`）、宏观数据（VIX/DXY/TNX 等）、Finnhub 新闻/基本面
- `llm.py`: 多后端统一接口（OpenRouter / OpenAI / Gemini / DeepSeek / Grok）
- `analysis_memory.py`: 检索与写入历史分析记忆
- `ai_calibration.py`: 根据历史命中率自动调优阈值
- `reflection.py`: 定期回溯验证 AI 决策质量

---

## 阅读与定位建议

- **大文件定位**：核心文件体量大，优先用 Grep 搜索关键字而非通读：
  - 回测引擎：`app/services/backtest.py`
  - 实时策略执行：`app/services/trading_executor.py`
  - AI 分析服务：`app/services/fast_analysis.py`
  - 策略管理：`app/services/strategy.py`
  - 订单派发：`app/services/pending_order_worker.py`
  - 交易所适配器：`app/services/live_trading/` 目录
  - 快速下单路由：`app/routes/quick_trade.py`
  - 指标路由：`app/routes/strategy.py`
- **配置问题排查**：优先查 `config_loader.py`，它将环境变量映射为兼容旧 addon 的嵌套配置
- **数据库表结构**：`migrations/init.sql` 包含完整的 PostgreSQL schema，是所有 ORM/DB 操作的源头

## Skills

- `/gen-api-docs` — 扫描 `backend_api_python/app/routes/` 下所有路由，提取接口定义，生成/更新 `interfaceDocs/interface-V{n}.md` 版本化接口文档，并比较与上一版本的差异。

## CI 与仓库边界

- `.github/workflows/basic-ci.yml` 不会启动完整应用栈，也不是全量集成测试。
- 它主要验证：后端依赖是否可安装、Python 语法和关键模块导入是否正常、前端构建产物和配置文件是否存在。
- `.github/workflows/update-frontend.yml` 说明了预期的前端交付方式：由私有前端仓库触发，把构建产物同步回本仓库。
- 当前仓库中没有额外的 `AGENTS.md`、Cursor rules 或 Copilot instructions 文件。