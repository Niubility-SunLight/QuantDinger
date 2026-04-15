# QuantDinger 后台介绍文档

本文面向有基础 Python 能力、但第一次接触本项目的开发者，帮助你快速理解后端代码如何组织、核心模块分别做什么、数据怎么流动，以及从哪里开始阅读最有效。

## 1. 后端是什么

QuantDinger 的后端是一个基于 **Flask** 的多模块服务，主要负责：

- 用户认证与权限控制
- 市场数据获取与统一封装
- 指标代码管理与执行
- 策略保存、回测、实时运行
- AI 市场分析与分析记忆
- 交易所凭证管理与实盘执行
- 投资组合、告警、监控、通知
- 会员、积分、支付、社区等运营能力

它不是一个只有“几个 API”的简单 Flask 项目，而是一个把 **行情、分析、策略、交易、运营** 放在一起的业务后端。

---

## 2. 后端目录结构

后端主目录在 `backend_api_python/`。

### 2.1 顶层结构

```text
backend_api_python/
├── app/                    # 主应用代码
├── migrations/             # PostgreSQL 初始化 SQL
├── tests/                  # pytest 测试
├── Dockerfile              # 后端镜像构建
├── run.py                  # 本地启动入口
├── gunicorn_config.py      # 生产部署配置
├── requirements.txt        # Python 依赖
├── requirements-windows.txt# Windows 专属依赖（如 MT5）
└── README.md               # 后端说明文档
```

### 2.2 `app/` 目录结构

```text
app/
├── __init__.py         # Flask app 工厂 + 启动阶段副作用
├── config/             # 配置读取层
├── data/               # 静态数据、模板、种子数据
├── data_providers/     # 面向业务聚合的数据提供层
├── data_sources/       # 面向供应商/市场的底层数据源适配层
├── routes/             # Flask 路由层（API 入口）
├── services/           # 业务逻辑核心
└── utils/              # 工具模块（DB、JWT、日志、配置、执行安全等）
```

这套结构可以理解为：

- `routes/` 负责接收 HTTP 请求
- `services/` 负责真正业务处理
- `data_sources/` / `data_providers/` 负责取市场数据
- `utils/` 负责给全局提供基础设施能力

---

## 3. 启动入口与启动流程

### 3.1 入口文件

后端有两个常见入口：

- 本地开发：`backend_api_python/run.py`
- 生产部署：`gunicorn -c gunicorn_config.py "run:app"`

### 3.2 `run.py` 做了什么

`run.py` 不只是简单地 `app.run()`，它还负责：

1. 尽早加载 `.env`
2. 设置 UTF-8 输出，避免 Windows 控制台乱码
3. 根据 `PROXY_URL` 配置全局代理
4. 对部分中国金融数据域名设置 `NO_PROXY`
5. 创建 Flask app
6. 本地模式下启动 Flask 开发服务器

### 3.3 `create_app()` 做了什么

真正关键的启动逻辑在 `app/__init__.py` 的 `create_app()` 中。它会：

- 注册自定义 JSON Provider，把 `NaN` / `Infinity` 自动转成 `null`
- 初始化数据库连接
- 自动创建管理员账号
- 注册所有蓝图（Blueprint）
- 启动多个后台 worker
- 恢复之前运行中的策略

### 3.4 一个重要认知：`create_app()` 有副作用

这个项目里，`create_app()` 不仅仅是“组装应用对象”，它还会触发：

- 数据库初始化
- 管理员检查
- pending order worker 启动
- portfolio monitor 启动
- USDT worker 启动
- Polymarket worker 启动
- AI calibration / reflection worker 启动
- 策略恢复

因此：

- 如果你只是想看某个模块是否可 import，不要轻易调用 `create_app()`
- 如果测试里需要 app，要明确知道这会带来启动副作用

---

## 4. 文件依赖关系怎么理解

如果你是基础 Python 用户，建议用下面这条主线理解依赖关系：

### 4.1 HTTP 请求主链路

```text
前端 / 外部调用
   ↓
routes/*.py
   ↓
services/*.py
   ↓
utils/db.py / data_sources / data_providers / 其他 service
   ↓
PostgreSQL / Redis / 第三方 API / 交易所
```

### 4.2 配置依赖主链路

```text
.env / 环境变量
   ↓
run.py 预加载
   ↓
app/config/*.py + app/utils/config_loader.py
   ↓
services / routes / data_sources
```

### 4.3 数据源依赖主链路

```text
data_sources/*.py   # 直接对接供应商或市场
   ↓
DataSourceFactory
   ↓
services/kline.py / market_data_collector.py / routes
   ↓
上层功能：行情、回测、AI 分析、看板
```

### 4.4 策略执行依赖主链路

```text
routes/strategy.py
   ↓
services/strategy.py / backtest.py / trading_executor.py
   ↓
pending_orders 表
   ↓
pending_order_worker.py
   ↓
services/live_trading/*.py
   ↓
真实交易所下单
```

---

## 5. 各目录和文件主要功能

## 5.1 `app/config/`

负责配置抽象。

主要文件：

- `settings.py`：基础运行配置，如 `HOST`、`PORT`、`SECRET_KEY`、日志等
- `api_keys.py`：第三方 API Key 读取
- `data_sources.py`：数据源相关配置
- `database.py`：数据库配置（辅助）

### 重点说明

本项目配置不是简单直接地 everywhere 读 `os.environ`，而是存在一层兼容旧系统的配置映射。

`app/utils/config_loader.py` 会把环境变量转成类似旧 PHP addon 的嵌套结构，例如：

- `OPENROUTER_API_KEY` → `openrouter.api_key`
- `LLM_PROVIDER` → `llm.provider`
- `FINNHUB_API_KEY` → `finnhub.api_key`

所以当你排查“某个服务为什么读到这个配置”时，记得同时查看：

- `app/config/*.py`
- `app/utils/config_loader.py`

## 5.2 `app/utils/`

这是后端的基础设施层。

主要文件：

- `db.py`：数据库门面，统一暴露 PostgreSQL 连接能力
- `db_postgres.py`：真正的 PostgreSQL 连接池实现
- `auth.py`：JWT 生成、校验、登录装饰器、权限装饰器
- `logger.py`：日志初始化与滚动日志文件
- `config_loader.py`：环境变量 → 嵌套配置结构
- `safe_exec.py`：安全执行相关能力
- `strategy_runtime_logs.py`：策略运行日志写入

### 重点说明

#### 1）数据库层是 PostgreSQL 专用

虽然代码里保留了一些兼容旧语法的痕迹，但现在实际是 **PostgreSQL only**。

`db_postgres.py` 提供：

- 连接池 `ThreadedConnectionPool`
- 上下文管理器 `get_pg_connection()`
- `?` 占位符到 `%s` 的兼容转换
- `INSERT ... RETURNING id` 的封装处理
- 返回字典型查询结果（`RealDictCursor`）

#### 2）认证使用 JWT

`utils/auth.py` 负责：

- 生成 JWT Token
- 校验 Token
- 读取当前用户 `g.user_id`
- `login_required` / `admin_required` / `manager_required`
- 基于角色的权限校验

项目还实现了 `token_version` 机制，用来支持“单一客户端登录控制”。

#### 3）日志是全局统一配置

`utils/logger.py` 在应用启动时初始化日志：

- 控制台输出
- `logs/app.log` 文件滚动写入
- 部分 noisy logger（如 werkzeug）会降级，减少日志噪音

## 5.3 `app/routes/`

这一层是 API 入口。每个文件通常对应一个功能域。

### 常见路由文件

- `health.py`：健康检查
- `auth.py`：登录、注册、验证码、OAuth
- `user.py`：用户管理、个人资料、积分、VIP、通知配置
- `market.py`：市场配置、品种搜索、观察列表、价格查询
- `indicator.py`：指标代码管理、校验、AI 生成
- `backtest.py`：回测执行与历史查询
- `strategy.py`：策略模板、策略 CRUD、策略回测
- `fast_analysis.py`：快速 AI 分析
- `portfolio.py`：持仓、监控器、告警、组合分组
- `quick_trade.py`：手工快速下单、查余额、查仓位、平仓
- `billing.py`：会员与 USDT 订单
- `dashboard.py`：概览、pending orders
- `global_market.py`：全球市场总览、热力图、新闻、情绪、机会
- `community.py`：社区指标、评论、购买
- `credentials.py`：交易所凭证
- `ibkr.py`：IBKR 交易能力
- `mt5.py`：MT5 交易能力
- `polymarket.py`：预测市场分析
- `experiment.py`：实验性 AI / 优化能力

### 这层的特点

- 负责参数接收、基础校验、权限判断
- 尽量把实际业务交给 `services/`
- 统一用 `jsonify()` 返回 JSON
- 大量接口采用如下返回格式：

```json
{
  "code": 1,
  "msg": "success",
  "data": {...}
}
```

失败时一般会返回：

```json
{
  "code": 0,
  "msg": "具体错误信息",
  "data": null
}
```

## 5.4 `app/services/`

这是整个后端的核心。

可以把它理解成“后台真正干活的地方”。

### 重要服务模块

#### 用户与权限

- `user_service.py`：用户 CRUD、密码哈希、角色权限、默认观察列表、登录信息更新
- `oauth_service.py`：第三方登录能力
- `security_service.py`：安全日志、验证码、登录限制相关能力

#### 行情与分析

- `kline.py`：K 线服务
- `market_data_collector.py`：统一收集行情、宏观、新闻等分析上下文
- `fast_analysis.py`：核心 AI 分析服务
- `analysis_memory.py`：分析历史与记忆库
- `ai_calibration.py`：AI 阈值校准
- `search.py`：搜索/资讯相关支持
- `llm.py`：大模型调用封装

#### 指标与策略

- `indicator_params.py`：指标参数解析与调用
- `indicator_code_quality.py`：指标代码质量检查
- `strategy.py`：策略管理服务
- `strategy_compiler.py`：策略编译/处理
- `strategy_snapshot.py`：策略快照解析
- `strategy_script_runtime.py`：脚本策略运行时
- `trading_executor.py`：实时策略执行器
- `backtest.py`：回测引擎

#### 交易执行

- `pending_order_worker.py`：待执行订单 worker
- `exchange_execution.py`：执行通道协调
- `live_trading/*.py`：各交易所具体执行实现
- `ibkr_trading/*`：IBKR 支持
- `mt5_trading/*`：MT5 支持

#### 资产与运营

- `billing_service.py`：积分、会员、订单
- `portfolio_monitor.py`：持仓监控
- `signal_notifier.py`：信号通知
- `usdt_payment_service.py`：USDT 支付相关
- `community_service.py`：社区指标相关
- `email_service.py`：邮件相关

### 阅读建议

`services/` 下有几个超大文件，建议不要一上来通读：

- `backtest.py`
- `trading_executor.py`
- `fast_analysis.py`
- `strategy.py`
- `pending_order_worker.py`
- `portfolio_monitor.py`

更高效的方式是：

1. 先看对应 `routes/*.py` 暴露了哪些接口
2. 再定位 route 调用了哪个 service
3. 最后只跟踪目标函数

## 5.5 `app/data_sources/`

这是底层数据源适配层，接近“供应商对接”层。

典型能力：

- 加密货币数据源
- 美股数据源
- A 股 / 港股数据源
- 外汇数据源
- 期货数据源
- Polymarket 数据源

核心入口是：

- `factory.py`

它根据市场类型返回对应数据源，例如：

- `Crypto`
- `CNStock`
- `HKStock`
- `USStock`
- `Forex`
- `Futures`

## 5.6 `app/data_providers/`

这是比 `data_sources` 更上一层的“业务聚合层”。

它更像“已经能给页面或业务直接用的数据”：

- 热力图
- 新闻
- 情绪
- 指数
- 大宗商品
- 全球市场机会

你可以把它理解为：

- `data_sources` = 原始供应商适配
- `data_providers` = 面向业务页面的数据组装

## 5.7 `app/data/`

主要放静态数据与模板，例如：

- 市场品种种子数据
- 策略模板 JSON

---

## 6. 模块功能总览

为了便于初学者理解，可以把整个后台拆成 8 个大模块：

### 6.1 认证与用户模块

负责：

- 登录 / 登出
- 验证码登录
- 注册 / 重置密码
- OAuth 登录（Google / GitHub）
- 用户资料管理
- 角色权限管理
- 积分 / VIP / 通知配置

相关文件：

- `routes/auth.py`
- `routes/user.py`
- `services/user_service.py`
- `utils/auth.py`

### 6.2 市场数据模块

负责：

- 品种搜索
- 热门品种
- 观察列表
- 价格查询
- K 线获取
- 全球市场总览、新闻、情绪、热力图

相关文件：

- `routes/market.py`
- `routes/global_market.py`
- `routes/kline.py`
- `data_sources/*`
- `data_providers/*`
- `services/kline.py`

### 6.3 指标模块

负责：

- 指标代码保存与删除
- 指标参数解析
- 指标运行
- 代码合法性检查
- AI 生成指标代码

相关文件：

- `routes/indicator.py`
- `services/indicator_params.py`
- `services/indicator_code_quality.py`

### 6.4 策略与回测模块

负责：

- 策略模板
- 策略保存 / 查询 / 详情
- 策略快照
- 策略回测
- 回测结果落库与历史查询

相关文件：

- `routes/strategy.py`
- `routes/backtest.py`
- `services/strategy.py`
- `services/backtest.py`
- `services/strategy_snapshot.py`

### 6.5 AI 分析模块

负责：

- 快速 AI 分析
- 历史分析查询
- 相似模式检索
- 分析记忆与反馈
- 校准模型阈值

相关文件：

- `routes/fast_analysis.py`
- `services/fast_analysis.py`
- `services/analysis_memory.py`
- `services/ai_calibration.py`
- `services/llm.py`

### 6.6 实时执行与交易模块

负责：

- 实时策略线程
- 生成 pending orders
- 订单派发 worker
- 连接具体交易所执行
- Quick Trade 手工下单
- IBKR / MT5 接入

相关文件：

- `services/trading_executor.py`
- `services/pending_order_worker.py`
- `services/live_trading/*`
- `routes/quick_trade.py`
- `routes/ibkr.py`
- `routes/mt5.py`

### 6.7 组合与监控模块

负责：

- 手动持仓管理
- 组合分组
- 持仓告警
- 组合监控器
- 自动运行监控逻辑

相关文件：

- `routes/portfolio.py`
- `services/portfolio_monitor.py`

### 6.8 运营与社区模块

负责：

- 积分消费和退款
- 会员开通
- USDT 支付订单
- 指标社区、评论、购买
- Polymarket 预测市场分析

相关文件：

- `routes/billing.py`
- `routes/community.py`
- `routes/polymarket.py`
- `services/billing_service.py`
- `services/community_service.py`
- `services/usdt_payment_service.py`

---

## 7. 后台架构

如果从系统架构角度看，后台大致可以分成 6 层：

```text
[1] 接口层 routes/
        ↓
[2] 业务层 services/
        ↓
[3] 数据获取层 data_providers/ + data_sources/
        ↓
[4] 基础设施层 utils/
        ↓
[5] 数据持久层 PostgreSQL / Redis
        ↓
[6] 外部系统 交易所 / LLM / 搜索 / 邮件 / OAuth / 支付
```

### 7.1 为什么这样分层

这样设计的好处是：

- 路由层保持轻，接口代码不会过度臃肿
- 业务逻辑可被复用，方便不同 API 共用
- 数据源适配可以解耦，不同市场接入不影响上层接口
- 外部依赖统一集中，便于替换和排错

### 7.2 典型业务流 1：AI 分析

```text
前端请求 /api/fast-analysis/analyze
   ↓
routes/fast_analysis.py
   ↓
services/fast_analysis.py
   ↓
market_data_collector + analysis_memory + llm
   ↓
PostgreSQL + 外部 LLM / 新闻 / 市场数据
   ↓
返回分析结果并写入历史记忆
```

### 7.3 典型业务流 2：策略回测

```text
前端请求策略回测
   ↓
routes/strategy.py 或 routes/backtest.py
   ↓
services/backtest.py
   ↓
DataSourceFactory 获取行情
   ↓
计算回测结果
   ↓
写入 qd_backtest_runs / qd_backtest_trades / qd_backtest_equity_points
   ↓
返回结果
```

### 7.4 典型业务流 3：实时策略执行

```text
策略运行中
   ↓
trading_executor.py 定时拉行情 / 算信号
   ↓
写入 pending_orders
   ↓
pending_order_worker.py 消费 pending_orders
   ↓
live_trading/*.py 调用交易所 API
   ↓
写入成交、仓位、日志、通知
```

---

## 8. 接口情况

接口非常多，不适合逐个死记。更推荐按业务域理解。

## 8.1 健康检查

- `/`
- `/health`
- `/api/health`

用途：

- 服务探活
- Docker 健康检查
- 反向代理检查

## 8.2 认证接口 `/api/auth`

主要包括：

- `/security-config`
- `/login`
- `/login-code`
- `/send-code`
- `/register`
- `/reset-password`
- `/change-password`
- `/oauth/google`
- `/oauth/google/callback`
- `/oauth/github`
- `/oauth/github/callback`
- `/logout`
- `/info`

## 8.3 用户接口 `/api/users`

主要包括：

- 用户列表、详情、创建、更新、删除
- 重置密码
- 获取角色列表
- 设置积分 / VIP
- 个人资料查询与修改
- 个人积分记录
- 邀请关系
- 通知配置读取 / 更新 / 测试
- 后台管理统计类接口

## 8.4 市场接口 `/api/market`

主要包括：

- 市场配置
- 市场类型
- 页脚菜单配置
- 品种搜索
- 热门品种
- 自选列表增删查
- 自选价格批量获取
- 单个价格获取
- 股票名称解析

## 8.5 指标接口 `/api/indicator`

主要包括：

- 指标列表
- 保存指标
- 删除指标
- 解析指标参数
- 验证代码
- AI 生成指标代码
- 代码质量提示
- 解析策略配置
- 直接调用指标

## 8.6 回测接口 `/api/indicator/backtest*`

主要包括：

- 回测精度信息
- 执行回测
- 回测历史
- 获取回测详情
- AI 复盘分析

## 8.7 策略接口 `/api/*`

`routes/strategy.py` 下挂了一批策略相关接口，例如：

- 策略模板
- 策略列表
- 策略详情
- 策略回测
- 策略运行 / 停止 / 查询

它使用的前缀不是单独的 `/api/strategy`，而是直接挂在 `/api` 下，这一点在查路由时要特别注意。

## 8.8 AI 分析接口 `/api/fast-analysis`

主要包括：

- `/analyze`
- `/analyze-legacy`
- `/history`
- `/history/all`
- `/history/<id>` 删除
- `/feedback`
- `/performance`
- `/similar-patterns`

## 8.9 组合与快交易接口

### `/api/portfolio`

- 持仓增删改查
- 组合汇总
- monitor 增删改查
- alerts 增删改查
- 分组查询与重命名

### `/api/quick-trade`

- `/place-order`
- `/balance`
- `/position`
- `/close-position`
- `/history`

## 8.10 其它重要接口域

- `/api/billing`：积分、会员、USDT 支付
- `/api/dashboard`：概览、pending orders
- `/api/community`：社区指标与评论
- `/api/credentials`：交易所凭证管理
- `/api/ibkr`：IBKR 接口
- `/api/mt5`：MT5 接口
- `/api/polymarket`：预测市场分析
- `/api/experiment`：实验性 AI / 优化接口

---

## 9. 数据库情况

## 9.1 数据库类型

当前后端只支持 **PostgreSQL**。

数据库初始化文件：

- `backend_api_python/migrations/init.sql`

Docker 模式下，该 SQL 会在 PostgreSQL 容器首次启动时自动执行。

## 9.2 数据库访问方式

数据库访问统一走：

- `app/utils/db.py`
- `app/utils/db_postgres.py`

典型写法：

```python
with get_db_connection() as db:
    cur = db.cursor()
    cur.execute("SELECT ... WHERE id = ?", (value,))
    row = cur.fetchone()
    db.commit()
    cur.close()
```

虽然写的是 `?` 占位符，底层会自动转换为 PostgreSQL 的 `%s`。

## 9.3 核心数据表分组

可以把数据库理解成下面几类表：

### 一、用户与认证

- `qd_users`
- `qd_verification_codes`
- `qd_login_attempts`
- `qd_oauth_links`
- `qd_security_logs`

### 二、积分与会员

- `qd_credits_log`
- `qd_membership_orders`
- `qd_usdt_orders`

### 三、策略运行

- `qd_strategies_trading`
- `qd_strategy_positions`
- `qd_strategy_trades`
- `pending_orders`
- `qd_strategy_notifications`
- `qd_strategy_logs`

### 四、指标与社区

- `qd_indicator_codes`
- `qd_indicator_purchases`
- `qd_indicator_comments`

### 五、市场与用户操作

- `qd_watchlist`
- `qd_market_symbols`
- `qd_exchange_credentials`

### 六、AI 与回测

- `qd_analysis_tasks`
- `qd_analysis_memory`
- `qd_backtest_runs`
- `qd_backtest_trades`
- `qd_backtest_equity_points`

### 七、组合与监控

- `qd_manual_positions`
- `qd_position_alerts`
- `qd_position_monitors`

### 八、快交易与预测市场

- `qd_quick_trades`
- `qd_polymarket_markets`
- `qd_polymarket_ai_analysis`
- `qd_polymarket_asset_opportunities`

## 9.4 你最值得先理解的几张表

如果你是第一次接手这个项目，最建议先读懂下面这些表：

### `qd_users`

用户主表，存：

- 用户名
- 密码哈希
- 角色
- credits
- VIP 信息
- 时区
- token_version

### `qd_strategies_trading`

策略主表，存：

- 策略名称
- 策略类型
- 市场类型
- 执行模式
- 配置 JSON
- 状态
- 策略代码

### `pending_orders`

待执行订单队列表，是“策略信号”和“实际交易所执行”之间的桥梁。

### `qd_backtest_runs`

回测主表，存：

- 回测目标
- 回测参数
- 回测结果 JSON
- 状态
- 错误信息

### `qd_analysis_memory`

AI 分析记忆表，存：

- 市场与品种
- 决策方向
- 置信度
- 分析摘要
- 评分与原因
- 原始分析结果
- 用户反馈
- 后验验证结果

## 9.5 数据库迁移特点

该项目不是 Alembic 迁移风格，而是：

- 在 `init.sql` 里写大量 `CREATE TABLE IF NOT EXISTS`
- 再配合若干 `DO $$ ... ALTER TABLE ... $$` 做增量补列

优点：

- 部署简单
- 一份 SQL 就能初始化大部分结构

缺点：

- 演进历史不够清晰
- 后期维护时，需要仔细确认某列/某表是“初始定义”还是“后补迁移”

---

## 10. 错误处理模式

这个项目没有统一的大而全异常中间件，主要采用 **各路由/各服务内部 try/except** 的方式处理错误。

## 10.1 路由层错误处理

典型写法：

- 参数缺失 → 返回 `400`
- 未认证 → 返回 `401`
- 权限不足 → 返回 `403`
- 资源不存在 → 返回 `404`
- 服务器内部异常 → 返回 `500`

同时常见返回结构：

```json
{
  "code": 0,
  "msg": "error message",
  "data": null
}
```

## 10.2 服务层错误处理

服务层常见模式：

- 捕获异常并 `logger.error(...)`
- 某些场景返回空列表、`None` 或默认结构，避免整个请求崩掉
- 对于关键流程（例如回测失败、异步分析失败）会把错误信息写入数据库

例如：

- 回测失败时会尽量把失败状态落到 `qd_backtest_runs`
- 异步 AI 分析失败时会尝试退款积分并标记任务失败
- worker 启动失败通常记录日志，但不直接让整个应用退出

## 10.3 JSON 安全处理

项目有一个很重要但容易忽略的错误防护：

- 自定义 JSON Provider 会把 `NaN` / `Infinity` 转成 `null`

这是为了防止前端 `JSON.parse()` 因非法 JSON 崩溃。

对应测试见：

- `tests/test_json_encoder.py`

## 10.4 日志排错方式

如果某个接口行为异常，建议优先看：

- 容器日志：`docker compose logs -f backend`
- 文件日志：`backend_api_python/logs/app.log`

一般排错顺序：

1. 看 route 返回的 `msg`
2. 看后端日志里对应 `logger.error`
3. 看数据库里是否写入了失败记录
4. 再检查外部依赖（API Key、代理、数据库、第三方服务）

---

## 11. 你可能还没想到，但很重要的点

## 11.1 这是“多用户”后端，不是单机脚本集合

很多新同学看到量化项目，容易以为只是：

- 拉行情
- 算指标
- 下单

但这个后端已经包含：

- 用户系统
- 角色权限
- 积分体系
- 会员体系
- 社区交易
- 支付能力
- 通知能力

所以它更像一个完整产品后台，而不是单一策略引擎。

## 11.2 代码里保留了不少“兼容旧系统”的痕迹

例如：

- addon config 风格配置读取
- SQL 中 `?` 占位符兼容
- 某些接口命名沿用旧前端/旧系统约定

这意味着：

- 不要以“这是一个全新纯净架构项目”的标准去理解它
- 很多实现是“在历史系统上逐步本地化、Python 化”的结果

## 11.3 路由文件很多，但不要被数量吓到

建议从这几个入口开始读，最快建立全局认知：

1. `backend_api_python/run.py`
2. `backend_api_python/app/__init__.py`
3. `backend_api_python/app/routes/__init__.py`
4. `backend_api_python/app/utils/db_postgres.py`
5. `backend_api_python/app/utils/auth.py`
6. `backend_api_python/app/services/fast_analysis.py`
7. `backend_api_python/app/services/backtest.py`
8. `backend_api_python/app/services/trading_executor.py`
9. `backend_api_python/migrations/init.sql`

## 11.4 初学者不要试图一次读懂所有大文件

尤其是下面这些文件：

- `services/backtest.py`
- `services/trading_executor.py`
- `services/fast_analysis.py`
- `routes/quick_trade.py`
- `routes/strategy.py`

正确方式是：

- 先选一个业务场景
- 从接口入口开始跟
- 只跟踪当前调用链

比如：

- 想看登录 → 从 `routes/auth.py` 开始
- 想看 AI 分析 → 从 `routes/fast_analysis.py` 开始
- 想看回测 → 从 `routes/backtest.py` 或 `routes/strategy.py` 开始
- 想看实盘执行 → 从 `services/trading_executor.py` 和 `pending_order_worker.py` 开始

## 11.5 这个项目适合按“业务域”而不是按“技术层”上手

对基础 Python 用户来说，最容易入门的方法不是先学完所有 Flask 技巧，而是按业务读：

- 用户登录怎么做？
- 指标保存怎么做？
- 回测怎么做？
- AI 分析怎么做？
- 快速下单怎么做？

这样能更快把项目和代码建立映射关系。

---

## 12. 推荐上手路径（非常实用）

### 第 1 步：先跑起来

先用 Docker 跑完整栈：

```bash
cp backend_api_python/env.example backend_api_python/.env
./scripts/generate-secret-key.sh
docker compose up -d --build
```

### 第 2 步：确认后端健康

访问：

- `http://localhost:5000/api/health`

### 第 3 步：先看 3 个文件

- `backend_api_python/run.py`
- `backend_api_python/app/__init__.py`
- `backend_api_python/app/routes/__init__.py`

目标：知道服务是怎么启动的、有哪些 API 域。

### 第 4 步：选一个业务场景纵向跟踪

推荐顺序：

1. 登录
2. 市场自选列表
3. 快速 AI 分析
4. 指标保存与校验
5. 回测
6. 策略运行
7. Quick Trade

### 第 5 步：最后再看数据库结构

当你已经理解 1~2 条业务链路后，再看 `migrations/init.sql`，你会更容易知道每张表存在的目的。

---

## 13. 总结

如果一句话概括这个后端：

> 它是一个以 Flask 为基础、以 PostgreSQL 为核心存储、以服务层为主业务承载的量化交易产品后台，覆盖了用户、行情、AI、策略、回测、执行、组合、支付与社区等多个模块。

如果你是第一次接手：

- 不要急着读所有代码
- 先建立全局结构
- 再按业务链路逐个击破
- 大文件只做定向阅读

这样上手速度会快很多。