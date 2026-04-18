# API接口文档

- 生成时间：2026-04-18 14:44:41
- 扫描目录：`backend_api_python/app/routes`
- 文档模式：按 Blueprint 拆分（22 个模块）
- 对比基线：首次文档，无历史版本可比较

## 全局变更统计

- 新增接口：199
- 移除接口：0
- 修改接口：0
- 未变化接口：0
- 当前接口总数：199

## 模块文档导航

- ai_chat：`ai_chat.md`
- auth：`auth.md`
- backtest：`backtest.md`
- billing：`billing.md`
- community：`community.md`
- credentials：`credentials.md`
- dashboard：`dashboard.md`
- experiment：`experiment.md`
- fast_analysis：`fast_analysis.md`
- global_market：`global_market.md`
- health：`health.md`
- ibkr：`ibkr.md`
- indicator：`indicator.md`
- kline：`kline.md`
- market：`market.md`
- mt5：`mt5.md`
- polymarket：`polymarket.md`
- portfolio：`portfolio.md`
- quick_trade：`quick_trade.md`
- settings：`settings.md`
- strategy：`strategy.md`
- user_manage：`user_manage.md`

## 全量接口索引

| Blueprint | 方法 | 路径 | 认证 | 描述 |
|---|---|---|---|---|
| ai_chat | GET | `/api/ai/chat/history` | 公开 | Return empty history (compatibility stub). |
| ai_chat | POST | `/api/ai/chat/history/save` | 公开 | No-op save (compatibility stub). |
| ai_chat | POST | `/api/ai/chat/message` | 公开 | 待补充接口说明 |
| auth | GET | `/api/auth/info` | 登录认证 | Get current user info. |
| auth | GET | `/api/auth/oauth/github` | 公开 | Redirect to GitHub OAuth authorization page |
| auth | GET | `/api/auth/oauth/github/callback` | 公开 | Handle GitHub OAuth callback |
| auth | GET | `/api/auth/oauth/google` | 公开 | Redirect to Google OAuth authorization page |
| auth | GET | `/api/auth/oauth/google/callback` | 公开 | Handle Google OAuth callback |
| auth | GET | `/api/auth/security-config` | 公开 | 待补充接口说明 |
| auth | POST | `/api/auth/change-password` | 登录认证 | 待补充接口说明 |
| auth | POST | `/api/auth/login` | 公开 | 待补充接口说明 |
| auth | POST | `/api/auth/login-code` | 公开 | 待补充接口说明 |
| auth | POST | `/api/auth/logout` | 公开 | Logout (client removes token; server is stateless). |
| auth | POST | `/api/auth/register` | 公开 | 待补充接口说明 |
| auth | POST | `/api/auth/reset-password` | 公开 | 待补充接口说明 |
| auth | POST | `/api/auth/send-code` | 公开 | 待补充接口说明 |
| backtest | GET | `/api/indicator/backtest/get` | 登录认证 | 待补充接口说明 |
| backtest | GET | `/api/indicator/backtest/history` | 登录认证 | 待补充接口说明 |
| backtest | GET | `/api/indicator/backtest/precision-info` | 公开 | 待补充接口说明 |
| backtest | POST | `/api/indicator/backtest` | 登录认证 | 待补充接口说明 |
| backtest | POST | `/api/indicator/backtest/aiAnalyze` | 登录认证 | 待补充接口说明 |
| billing | GET | `/api/billing/plans` | 登录认证 | Get membership plan configuration + current user's billing snapshot. |
| billing | GET | `/api/billing/usdt/order/<int:order_id>` | 登录认证 | Get my USDT order; refresh chain status by default. |
| billing | POST | `/api/billing/purchase` | 登录认证 | 待补充接口说明 |
| billing | POST | `/api/billing/usdt/create` | 登录认证 | 待补充接口说明 |
| community | DELETE | `/api/community/admin/indicators/<int:indicator_id>` | 登录认证 | 删除指标（管理员专用） |
| community | GET | `/api/community/admin/pending-indicators` | 登录认证 | 待补充接口说明 |
| community | GET | `/api/community/admin/review-stats` | 登录认证 | 获取审核统计数据（管理员专用） |
| community | GET | `/api/community/indicators` | 登录认证 | 待补充接口说明 |
| community | GET | `/api/community/indicators/<int:indicator_id>` | 登录认证 | 获取指标详情 |
| community | GET | `/api/community/indicators/<int:indicator_id>/comments` | 登录认证 | 获取指标评论列表 |
| community | GET | `/api/community/indicators/<int:indicator_id>/my-comment` | 登录认证 | 获取当前用户对指定指标的评论（用于编辑） |
| community | GET | `/api/community/indicators/<int:indicator_id>/performance` | 登录认证 | 获取指标的实盘表现统计 |
| community | GET | `/api/community/my-purchases` | 登录认证 | 获取我购买的指标列表 |
| community | POST | `/api/community/admin/indicators/<int:indicator_id>/review` | 登录认证 | 待补充接口说明 |
| community | POST | `/api/community/admin/indicators/<int:indicator_id>/unpublish` | 登录认证 | 待补充接口说明 |
| community | POST | `/api/community/indicators/<int:indicator_id>/comments` | 登录认证 | 待补充接口说明 |
| community | POST | `/api/community/indicators/<int:indicator_id>/purchase` | 登录认证 | 待补充接口说明 |
| community | POST | `/api/community/indicators/<int:indicator_id>/sync` | 登录认证 | 待补充接口说明 |
| community | PUT | `/api/community/indicators/<int:indicator_id>/comments/<int:comment_id>` | 登录认证 | 待补充接口说明 |
| credentials | DELETE | `/api/credentials/delete` | 登录认证 | Delete a credential for the current user. |
| credentials | GET | `/api/credentials/egress-ip` | 登录认证 | 待补充接口说明 |
| credentials | GET | `/api/credentials/get` | 登录认证 | 待补充接口说明 |
| credentials | GET | `/api/credentials/list` | 登录认证 | List all credentials for the current user. |
| credentials | POST | `/api/credentials/create` | 登录认证 | Create a new credential for the current user. |
| dashboard | DELETE | `/api/dashboard/pendingOrders/<int:order_id>` | 登录认证 | 待补充接口说明 |
| dashboard | GET | `/api/dashboard/pendingOrders` | 登录认证 | 待补充接口说明 |
| dashboard | GET | `/api/dashboard/summary` | 登录认证 | 待补充接口说明 |
| experiment | POST | `/api/experiment/ai-optimize` | 登录认证 | 待补充接口说明 |
| experiment | POST | `/api/experiment/ai-optimize-sync` | 登录认证 | Non-streaming version (simpler client integration). |
| experiment | POST | `/api/experiment/pipeline/run` | 登录认证 | Legacy grid-search pipeline (kept for backward compat). |
| experiment | POST | `/api/experiment/regime/detect` | 登录认证 | Detect the current market regime for a symbol/timeframe/date range. |
| experiment | POST | `/api/experiment/save-strategy` | 登录认证 | Save the best experiment candidate as a strategy record. |
| experiment | POST | `/api/experiment/structured-tune` | 登录认证 | 待补充接口说明 |
| fast_analysis | DELETE | `/api/fast-analysis/history/<int:memory_id>` | 登录认证 | 待补充接口说明 |
| fast_analysis | GET | `/api/fast-analysis/history` | 登录认证 | 待补充接口说明 |
| fast_analysis | GET | `/api/fast-analysis/history/all` | 登录认证 | 待补充接口说明 |
| fast_analysis | GET | `/api/fast-analysis/performance` | 登录认证 | 待补充接口说明 |
| fast_analysis | GET | `/api/fast-analysis/similar-patterns` | 登录认证 | 待补充接口说明 |
| fast_analysis | POST | `/api/fast-analysis/analyze` | 登录认证 | 待补充接口说明 |
| fast_analysis | POST | `/api/fast-analysis/analyze-legacy` | 登录认证 | 待补充接口说明 |
| fast_analysis | POST | `/api/fast-analysis/feedback` | 登录认证 | 待补充接口说明 |
| global_market | GET | `/api/global-market/calendar` | 登录认证 | Get economic calendar events with impact indicators. |
| global_market | GET | `/api/global-market/heatmap` | 登录认证 | Get market heatmap data for crypto, stock sectors, forex, and indices. |
| global_market | GET | `/api/global-market/news` | 登录认证 | Get financial news from various sources.  Query params: lang ('cn'|'en'|'all'). |
| global_market | GET | `/api/global-market/opportunities` | 登录认证 | Scan for trading opportunities across Crypto, US/CN/HK Stocks, and Forex. |
| global_market | GET | `/api/global-market/overview` | 登录认证 | Get global market overview including indices, forex, crypto, and commodities. |
| global_market | GET | `/api/global-market/sentiment` | 登录认证 | Get comprehensive market sentiment indicators. |
| global_market | POST | `/api/global-market/refresh` | 登录认证 | Force refresh all market data (clears cache). |
| health | GET | `/` | 公开 | API 首页 |
| health | GET | `/api/health` | 公开 | 兼容路径：用于容器健康检查/反代探针等场景。 |
| health | GET | `/health` | 公开 | 健康检查 |
| ibkr | DELETE | `/api/ibkr/order/<int:order_id>` | 公开 | 待补充接口说明 |
| ibkr | GET | `/api/ibkr/account` | 公开 | 待补充接口说明 |
| ibkr | GET | `/api/ibkr/orders` | 公开 | 待补充接口说明 |
| ibkr | GET | `/api/ibkr/positions` | 公开 | 待补充接口说明 |
| ibkr | GET | `/api/ibkr/quote` | 公开 | 待补充接口说明 |
| ibkr | GET | `/api/ibkr/status` | 公开 | 待补充接口说明 |
| ibkr | POST | `/api/ibkr/connect` | 公开 | 待补充接口说明 |
| ibkr | POST | `/api/ibkr/disconnect` | 公开 | 待补充接口说明 |
| ibkr | POST | `/api/ibkr/order` | 公开 | 待补充接口说明 |
| indicator | GET | `/api/indicator/getIndicatorParams` | 登录认证 | 待补充接口说明 |
| indicator | GET | `/api/indicator/getIndicators` | 登录认证 | 待补充接口说明 |
| indicator | POST | `/api/indicator/aiGenerate` | 登录认证 | 待补充接口说明 |
| indicator | POST | `/api/indicator/callIndicator` | 登录认证 | 待补充接口说明 |
| indicator | POST | `/api/indicator/codeQualityHints` | 登录认证 | 待补充接口说明 |
| indicator | POST | `/api/indicator/deleteIndicator` | 登录认证 | Delete an indicator by id for the current user. |
| indicator | POST | `/api/indicator/parseStrategyConfig` | 登录认证 | 待补充接口说明 |
| indicator | POST | `/api/indicator/saveIndicator` | 登录认证 | 待补充接口说明 |
| indicator | POST | `/api/indicator/verifyCode` | 登录认证 | 待补充接口说明 |
| kline | GET | `/api/indicator/kline` | 公开 | 待补充接口说明 |
| kline | GET | `/api/indicator/price` | 公开 | 获取最新价格 |
| market | GET | `/api/market/config` | 公开 | 待补充接口说明 |
| market | GET | `/api/market/menuFooterConfig` | 公开 | 待补充接口说明 |
| market | GET | `/api/market/price` | 公开 | 待补充接口说明 |
| market | GET | `/api/market/symbols/hot` | 公开 | Return a small curated hot list per market (local-only). |
| market | GET | `/api/market/symbols/search` | 公开 | 待补充接口说明 |
| market | GET | `/api/market/types` | 公开 | Return supported market types for the add-watchlist modal. |
| market | GET | `/api/market/watchlist/get` | 登录认证 | Get watchlist for the current user. |
| market | GET | `/api/market/watchlist/prices` | 公开 | 待补充接口说明 |
| market | POST | `/api/market/stock/name` | 公开 | 待补充接口说明 |
| market | POST | `/api/market/watchlist/add` | 登录认证 | Add a symbol to watchlist for the current user. |
| market | POST | `/api/market/watchlist/remove` | 登录认证 | Remove a symbol from watchlist for the current user. |
| mt5 | DELETE | `/api/mt5/order/<int:ticket>` | 公开 | Cancel a pending order. |
| mt5 | GET | `/api/mt5/account` | 公开 | Get account information. |
| mt5 | GET | `/api/mt5/orders` | 公开 | Get pending orders. |
| mt5 | GET | `/api/mt5/positions` | 公开 | Get open positions. |
| mt5 | GET | `/api/mt5/quote` | 公开 | 待补充接口说明 |
| mt5 | GET | `/api/mt5/status` | 公开 | Get MT5 connection status. |
| mt5 | GET | `/api/mt5/symbols` | 公开 | Get available symbols. |
| mt5 | POST | `/api/mt5/close` | 公开 | 待补充接口说明 |
| mt5 | POST | `/api/mt5/connect` | 公开 | 待补充接口说明 |
| mt5 | POST | `/api/mt5/disconnect` | 公开 | Disconnect from MT5 terminal. |
| mt5 | POST | `/api/mt5/order` | 公开 | 待补充接口说明 |
| polymarket | GET | `/api/polymarket/history` | 登录认证 | 待补充接口说明 |
| polymarket | POST | `/api/polymarket/analyze` | 登录认证 | 待补充接口说明 |
| portfolio | DELETE | `/api/portfolio/alerts/<int:alert_id>` | 登录认证 | Delete an alert for the current user. |
| portfolio | DELETE | `/api/portfolio/monitors/<int:monitor_id>` | 登录认证 | Delete a monitor for the current user. |
| portfolio | DELETE | `/api/portfolio/positions/<int:position_id>` | 登录认证 | Delete a position for the current user. |
| portfolio | GET | `/api/portfolio/alerts` | 登录认证 | Get all position alerts for the current user. |
| portfolio | GET | `/api/portfolio/groups` | 登录认证 | Get list of all groups with position counts for the current user. |
| portfolio | GET | `/api/portfolio/monitors` | 登录认证 | Get all position monitors for the current user. |
| portfolio | GET | `/api/portfolio/positions` | 登录认证 | Get all manual positions with current prices for the current user. |
| portfolio | GET | `/api/portfolio/summary` | 登录认证 | Get portfolio summary with total value, PnL, and market distribution for the current user. |
| portfolio | POST | `/api/portfolio/alerts` | 登录认证 | Add a new position alert for the current user. |
| portfolio | POST | `/api/portfolio/groups/rename` | 登录认证 | Rename a group for the current user. |
| portfolio | POST | `/api/portfolio/monitors` | 登录认证 | Add a new position monitor for the current user. |
| portfolio | POST | `/api/portfolio/monitors/<int:monitor_id>/run` | 登录认证 | Manually trigger a monitor to run immediately. |
| portfolio | POST | `/api/portfolio/positions` | 登录认证 | Add a new manual position for the current user. |
| portfolio | PUT | `/api/portfolio/alerts/<int:alert_id>` | 登录认证 | Update an existing alert for the current user. |
| portfolio | PUT | `/api/portfolio/monitors/<int:monitor_id>` | 登录认证 | Update an existing monitor for the current user. |
| portfolio | PUT | `/api/portfolio/positions/<int:position_id>` | 登录认证 | Update an existing position for the current user. |
| quick_trade | GET | `/api/quick-trade/balance` | 登录认证 | 待补充接口说明 |
| quick_trade | GET | `/api/quick-trade/history` | 登录认证 | 待补充接口说明 |
| quick_trade | GET | `/api/quick-trade/position` | 登录认证 | 待补充接口说明 |
| quick_trade | POST | `/api/quick-trade/close-position` | 登录认证 | 待补充接口说明 |
| quick_trade | POST | `/api/quick-trade/place-order` | 登录认证 | 待补充接口说明 |
| settings | GET | `/api/settings/openrouter-balance` | 管理员认证 | 查询 OpenRouter 账户余额 (admin only) |
| settings | GET | `/api/settings/public-config` | 登录认证 | Return non-sensitive config values needed by frontend widgets. |
| settings | GET | `/api/settings/schema` | 管理员认证 | 获取配置项定义 (admin only) |
| settings | GET | `/api/settings/values` | 管理员认证 | 获取当前配置值 - 包括敏感信息（真实值）(admin only) |
| settings | POST | `/api/settings/save` | 管理员认证 | 保存配置 (admin only) |
| settings | POST | `/api/settings/test-connection` | 管理员认证 | 测试API连接 (admin only) |
| strategy | DELETE | `/api/strategies/batch-delete` | 登录认证 | 待补充接口说明 |
| strategy | DELETE | `/api/strategies/delete` | 登录认证 | 待补充接口说明 |
| strategy | DELETE | `/api/strategies/notifications/clear` | 登录认证 | Clear all notifications for the current user. |
| strategy | GET | `/api/strategies` | 登录认证 | 待补充接口说明 |
| strategy | GET | `/api/strategies/backtest/get` | 登录认证 | 待补充接口说明 |
| strategy | GET | `/api/strategies/backtest/history` | 登录认证 | 待补充接口说明 |
| strategy | GET | `/api/strategies/detail` | 登录认证 | 待补充接口说明 |
| strategy | GET | `/api/strategies/equityCurve` | 登录认证 | Get equity curve for the current user's strategy. |
| strategy | GET | `/api/strategies/logs` | 登录认证 | Get strategy running logs. |
| strategy | GET | `/api/strategies/notifications` | 登录认证 | 待补充接口说明 |
| strategy | GET | `/api/strategies/notifications/unread-count` | 登录认证 | 待补充接口说明 |
| strategy | GET | `/api/strategies/performance` | 登录认证 | Get strategy performance metrics (aggregated from equity curve and trades). |
| strategy | GET | `/api/strategies/positions` | 登录认证 | Get position records for the current user's strategy. |
| strategy | GET | `/api/strategies/trades` | 登录认证 | Get trade records for the current user's strategy. |
| strategy | GET | `/api/templates` | 登录认证 | Return pre-built strategy templates for one-click import. |
| strategy | GET | `/api/templates/<key>` | 登录认证 | Return a single strategy template by key. |
| strategy | POST | `/api/strategies/ai-generate` | 登录认证 | Generate strategy code or suggest template parameter updates using AI. |
| strategy | POST | `/api/strategies/backtest` | 登录认证 | 待补充接口说明 |
| strategy | POST | `/api/strategies/batch-create` | 登录认证 | 待补充接口说明 |
| strategy | POST | `/api/strategies/batch-start` | 登录认证 | 待补充接口说明 |
| strategy | POST | `/api/strategies/batch-stop` | 登录认证 | 待补充接口说明 |
| strategy | POST | `/api/strategies/create` | 登录认证 | 待补充接口说明 |
| strategy | POST | `/api/strategies/get-symbols` | 登录认证 | 待补充接口说明 |
| strategy | POST | `/api/strategies/notifications/read` | 登录认证 | Mark a single notification as read for the current user. |
| strategy | POST | `/api/strategies/notifications/read-all` | 登录认证 | Mark all notifications as read for the current user. |
| strategy | POST | `/api/strategies/preview-compile` | 登录认证 | 待补充接口说明 |
| strategy | POST | `/api/strategies/start` | 登录认证 | 待补充接口说明 |
| strategy | POST | `/api/strategies/stop` | 登录认证 | 待补充接口说明 |
| strategy | POST | `/api/strategies/test-connection` | 登录认证 | 待补充接口说明 |
| strategy | POST | `/api/strategies/verify-code` | 登录认证 | Verify script strategy code syntax and safety. |
| strategy | PUT | `/api/strategies/update` | 登录认证 | 待补充接口说明 |
| user_manage | DELETE | `/api/users/chart-templates` | 登录认证 | Delete a user's chart template by id. |
| user_manage | DELETE | `/api/users/delete` | 管理员认证 | Delete a user (admin only) |
| user_manage | GET | `/api/users/admin-ai-stats` | 管理员认证 | 待补充接口说明 |
| user_manage | GET | `/api/users/admin-orders` | 管理员认证 | 待补充接口说明 |
| user_manage | GET | `/api/users/chart-templates` | 登录认证 | Get current user's indicator chart templates. |
| user_manage | GET | `/api/users/credits-log` | 管理员认证 | 待补充接口说明 |
| user_manage | GET | `/api/users/detail` | 管理员认证 | Get user detail by ID (admin only) |
| user_manage | GET | `/api/users/export` | 管理员认证 | Export all users as an Excel-friendly CSV file (admin only). |
| user_manage | GET | `/api/users/list` | 管理员认证 | 待补充接口说明 |
| user_manage | GET | `/api/users/my-credits-log` | 登录认证 | 待补充接口说明 |
| user_manage | GET | `/api/users/my-referrals` | 登录认证 | 待补充接口说明 |
| user_manage | GET | `/api/users/notification-settings` | 登录认证 | 待补充接口说明 |
| user_manage | GET | `/api/users/profile` | 登录认证 | Get current user's profile with billing info and notification settings |
| user_manage | GET | `/api/users/roles` | 管理员认证 | Get available roles and their permissions |
| user_manage | GET | `/api/users/system-strategies` | 管理员认证 | 待补充接口说明 |
| user_manage | POST | `/api/users/change-password` | 登录认证 | 待补充接口说明 |
| user_manage | POST | `/api/users/chart-templates` | 登录认证 | Create or update a user's indicator chart template. |
| user_manage | POST | `/api/users/create` | 管理员认证 | 待补充接口说明 |
| user_manage | POST | `/api/users/notification-settings/test` | 登录认证 | 待补充接口说明 |
| user_manage | POST | `/api/users/reset-password` | 管理员认证 | 待补充接口说明 |
| user_manage | POST | `/api/users/set-credits` | 管理员认证 | 待补充接口说明 |
| user_manage | POST | `/api/users/set-vip` | 管理员认证 | 待补充接口说明 |
| user_manage | PUT | `/api/users/notification-settings` | 登录认证 | 待补充接口说明 |
| user_manage | PUT | `/api/users/profile/update` | 登录认证 | 待补充接口说明 |
| user_manage | PUT | `/api/users/update` | 管理员认证 | 待补充接口说明 |

<!-- API_BLUEPRINT_INDEX_START
{
  "generatedAt": "2026-04-18 14:44:41",
  "endpoints": [
    {
      "blueprint": "ai_chat",
      "method": "POST",
      "path": "/api/ai/chat/message",
      "auth": "公开",
      "description": "待补充接口说明",
      "params": [
        {
          "name": "body",
          "type": "object",
          "in": "body",
          "required": "待确认",
          "default": "-",
          "desc": "JSON 请求体（结构待确认）"
        }
      ]
    },
    {
      "blueprint": "ai_chat",
      "method": "GET",
      "path": "/api/ai/chat/history",
      "auth": "公开",
      "description": "Return empty history (compatibility stub).",
      "params": []
    },
    {
      "blueprint": "ai_chat",
      "method": "POST",
      "path": "/api/ai/chat/history/save",
      "auth": "公开",
      "description": "No-op save (compatibility stub).",
      "params": []
    },
    {
      "blueprint": "auth",
      "method": "GET",
      "path": "/api/auth/security-config",
      "auth": "公开",
      "description": "待补充接口说明",
      "params": []
    },
    {
      "blueprint": "auth",
      "method": "POST",
      "path": "/api/auth/login",
      "auth": "公开",
      "description": "待补充接口说明",
      "params": [
        {
          "name": "body",
          "type": "object",
          "in": "body",
          "required": "待确认",
          "default": "-",
          "desc": "JSON 请求体（结构待确认）"
        }
      ]
    },
    {
      "blueprint": "auth",
      "method": "POST",
      "path": "/api/auth/login-code",
      "auth": "公开",
      "description": "待补充接口说明",
      "params": [
        {
          "name": "body",
          "type": "object",
          "in": "body",
          "required": "待确认",
          "default": "-",
          "desc": "JSON 请求体（结构待确认）"
        }
      ]
    },
    {
      "blueprint": "auth",
      "method": "POST",
      "path": "/api/auth/send-code",
      "auth": "公开",
      "description": "待补充接口说明",
      "params": [
        {
          "name": "body",
          "type": "object",
          "in": "body",
          "required": "待确认",
          "default": "-",
          "desc": "JSON 请求体（结构待确认）"
        }
      ]
    },
    {
      "blueprint": "auth",
      "method": "POST",
      "path": "/api/auth/register",
      "auth": "公开",
      "description": "待补充接口说明",
      "params": [
        {
          "name": "body",
          "type": "object",
          "in": "body",
          "required": "待确认",
          "default": "-",
          "desc": "JSON 请求体（结构待确认）"
        }
      ]
    },
    {
      "blueprint": "auth",
      "method": "POST",
      "path": "/api/auth/reset-password",
      "auth": "公开",
      "description": "待补充接口说明",
      "params": [
        {
          "name": "body",
          "type": "object",
          "in": "body",
          "required": "待确认",
          "default": "-",
          "desc": "JSON 请求体（结构待确认）"
        }
      ]
    },
    {
      "blueprint": "auth",
      "method": "POST",
      "path": "/api/auth/change-password",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": [
        {
          "name": "body",
          "type": "object",
          "in": "body",
          "required": "待确认",
          "default": "-",
          "desc": "JSON 请求体（结构待确认）"
        }
      ]
    },
    {
      "blueprint": "auth",
      "method": "GET",
      "path": "/api/auth/oauth/google",
      "auth": "公开",
      "description": "Redirect to Google OAuth authorization page",
      "params": []
    },
    {
      "blueprint": "auth",
      "method": "GET",
      "path": "/api/auth/oauth/google/callback",
      "auth": "公开",
      "description": "Handle Google OAuth callback",
      "params": [
        {
          "name": "code",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "-",
          "desc": "查询参数"
        },
        {
          "name": "state",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "-",
          "desc": "查询参数"
        },
        {
          "name": "error",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "-",
          "desc": "查询参数"
        }
      ]
    },
    {
      "blueprint": "auth",
      "method": "GET",
      "path": "/api/auth/oauth/github",
      "auth": "公开",
      "description": "Redirect to GitHub OAuth authorization page",
      "params": []
    },
    {
      "blueprint": "auth",
      "method": "GET",
      "path": "/api/auth/oauth/github/callback",
      "auth": "公开",
      "description": "Handle GitHub OAuth callback",
      "params": [
        {
          "name": "code",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "-",
          "desc": "查询参数"
        },
        {
          "name": "state",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "-",
          "desc": "查询参数"
        },
        {
          "name": "error",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "-",
          "desc": "查询参数"
        }
      ]
    },
    {
      "blueprint": "auth",
      "method": "POST",
      "path": "/api/auth/logout",
      "auth": "公开",
      "description": "Logout (client removes token; server is stateless).",
      "params": []
    },
    {
      "blueprint": "auth",
      "method": "GET",
      "path": "/api/auth/info",
      "auth": "登录认证",
      "description": "Get current user info.",
      "params": []
    },
    {
      "blueprint": "backtest",
      "method": "GET",
      "path": "/api/indicator/backtest/precision-info",
      "auth": "公开",
      "description": "待补充接口说明",
      "params": [
        {
          "name": "market",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "'crypto'",
          "desc": "查询参数"
        },
        {
          "name": "startDate",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "''",
          "desc": "查询参数"
        },
        {
          "name": "endDate",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "''",
          "desc": "查询参数"
        }
      ]
    },
    {
      "blueprint": "backtest",
      "method": "POST",
      "path": "/api/indicator/backtest",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": [
        {
          "name": "body",
          "type": "object",
          "in": "body",
          "required": "待确认",
          "default": "-",
          "desc": "JSON 请求体（结构待确认）"
        }
      ]
    },
    {
      "blueprint": "backtest",
      "method": "GET",
      "path": "/api/indicator/backtest/history",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": [
        {
          "name": "limit",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "-",
          "desc": "查询参数"
        },
        {
          "name": "offset",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "-",
          "desc": "查询参数"
        },
        {
          "name": "indicatorId",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "-",
          "desc": "查询参数"
        },
        {
          "name": "strategyId",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "-",
          "desc": "查询参数"
        },
        {
          "name": "runType",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "-",
          "desc": "查询参数"
        },
        {
          "name": "symbol",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "-",
          "desc": "查询参数"
        },
        {
          "name": "market",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "-",
          "desc": "查询参数"
        },
        {
          "name": "timeframe",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "-",
          "desc": "查询参数"
        }
      ]
    },
    {
      "blueprint": "backtest",
      "method": "GET",
      "path": "/api/indicator/backtest/get",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": [
        {
          "name": "runId",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "-",
          "desc": "查询参数"
        }
      ]
    },
    {
      "blueprint": "backtest",
      "method": "POST",
      "path": "/api/indicator/backtest/aiAnalyze",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": [
        {
          "name": "body",
          "type": "object",
          "in": "body",
          "required": "待确认",
          "default": "-",
          "desc": "JSON 请求体（结构待确认）"
        }
      ]
    },
    {
      "blueprint": "billing",
      "method": "GET",
      "path": "/api/billing/plans",
      "auth": "登录认证",
      "description": "Get membership plan configuration + current user's billing snapshot.",
      "params": []
    },
    {
      "blueprint": "billing",
      "method": "POST",
      "path": "/api/billing/purchase",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": [
        {
          "name": "body",
          "type": "object",
          "in": "body",
          "required": "待确认",
          "default": "-",
          "desc": "JSON 请求体（结构待确认）"
        }
      ]
    },
    {
      "blueprint": "billing",
      "method": "POST",
      "path": "/api/billing/usdt/create",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": [
        {
          "name": "body",
          "type": "object",
          "in": "body",
          "required": "待确认",
          "default": "-",
          "desc": "JSON 请求体（结构待确认）"
        }
      ]
    },
    {
      "blueprint": "billing",
      "method": "GET",
      "path": "/api/billing/usdt/order/<int:order_id>",
      "auth": "登录认证",
      "description": "Get my USDT order; refresh chain status by default.",
      "params": [
        {
          "name": "order_id",
          "type": "integer",
          "in": "path",
          "required": "是",
          "default": "-",
          "desc": "路径参数"
        },
        {
          "name": "refresh",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "\"1\"",
          "desc": "查询参数"
        }
      ]
    },
    {
      "blueprint": "community",
      "method": "GET",
      "path": "/api/community/indicators",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": [
        {
          "name": "page",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "1",
          "desc": "查询参数"
        },
        {
          "name": "page_size",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "12",
          "desc": "查询参数"
        },
        {
          "name": "keyword",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "''",
          "desc": "查询参数"
        },
        {
          "name": "pricing_type",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "''",
          "desc": "查询参数"
        },
        {
          "name": "sort_by",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "'newest'",
          "desc": "查询参数"
        }
      ]
    },
    {
      "blueprint": "community",
      "method": "GET",
      "path": "/api/community/indicators/<int:indicator_id>",
      "auth": "登录认证",
      "description": "获取指标详情",
      "params": [
        {
          "name": "indicator_id",
          "type": "integer",
          "in": "path",
          "required": "是",
          "default": "-",
          "desc": "路径参数"
        }
      ]
    },
    {
      "blueprint": "community",
      "method": "POST",
      "path": "/api/community/indicators/<int:indicator_id>/purchase",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": [
        {
          "name": "indicator_id",
          "type": "integer",
          "in": "path",
          "required": "是",
          "default": "-",
          "desc": "路径参数"
        }
      ]
    },
    {
      "blueprint": "community",
      "method": "POST",
      "path": "/api/community/indicators/<int:indicator_id>/sync",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": [
        {
          "name": "indicator_id",
          "type": "integer",
          "in": "path",
          "required": "是",
          "default": "-",
          "desc": "路径参数"
        }
      ]
    },
    {
      "blueprint": "community",
      "method": "GET",
      "path": "/api/community/my-purchases",
      "auth": "登录认证",
      "description": "获取我购买的指标列表",
      "params": [
        {
          "name": "page",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "1",
          "desc": "查询参数"
        },
        {
          "name": "page_size",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "20",
          "desc": "查询参数"
        }
      ]
    },
    {
      "blueprint": "community",
      "method": "GET",
      "path": "/api/community/indicators/<int:indicator_id>/comments",
      "auth": "登录认证",
      "description": "获取指标评论列表",
      "params": [
        {
          "name": "indicator_id",
          "type": "integer",
          "in": "path",
          "required": "是",
          "default": "-",
          "desc": "路径参数"
        },
        {
          "name": "page",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "1",
          "desc": "查询参数"
        },
        {
          "name": "page_size",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "20",
          "desc": "查询参数"
        }
      ]
    },
    {
      "blueprint": "community",
      "method": "POST",
      "path": "/api/community/indicators/<int:indicator_id>/comments",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": [
        {
          "name": "indicator_id",
          "type": "integer",
          "in": "path",
          "required": "是",
          "default": "-",
          "desc": "路径参数"
        },
        {
          "name": "body",
          "type": "object",
          "in": "body",
          "required": "待确认",
          "default": "-",
          "desc": "JSON 请求体（结构待确认）"
        }
      ]
    },
    {
      "blueprint": "community",
      "method": "PUT",
      "path": "/api/community/indicators/<int:indicator_id>/comments/<int:comment_id>",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": [
        {
          "name": "indicator_id",
          "type": "integer",
          "in": "path",
          "required": "是",
          "default": "-",
          "desc": "路径参数"
        },
        {
          "name": "comment_id",
          "type": "integer",
          "in": "path",
          "required": "是",
          "default": "-",
          "desc": "路径参数"
        },
        {
          "name": "body",
          "type": "object",
          "in": "body",
          "required": "待确认",
          "default": "-",
          "desc": "JSON 请求体（结构待确认）"
        }
      ]
    },
    {
      "blueprint": "community",
      "method": "GET",
      "path": "/api/community/indicators/<int:indicator_id>/my-comment",
      "auth": "登录认证",
      "description": "获取当前用户对指定指标的评论（用于编辑）",
      "params": [
        {
          "name": "indicator_id",
          "type": "integer",
          "in": "path",
          "required": "是",
          "default": "-",
          "desc": "路径参数"
        }
      ]
    },
    {
      "blueprint": "community",
      "method": "GET",
      "path": "/api/community/indicators/<int:indicator_id>/performance",
      "auth": "登录认证",
      "description": "获取指标的实盘表现统计",
      "params": [
        {
          "name": "indicator_id",
          "type": "integer",
          "in": "path",
          "required": "是",
          "default": "-",
          "desc": "路径参数"
        }
      ]
    },
    {
      "blueprint": "community",
      "method": "GET",
      "path": "/api/community/admin/pending-indicators",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": [
        {
          "name": "page",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "1",
          "desc": "查询参数"
        },
        {
          "name": "page_size",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "20",
          "desc": "查询参数"
        },
        {
          "name": "review_status",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "'pending'",
          "desc": "查询参数"
        }
      ]
    },
    {
      "blueprint": "community",
      "method": "GET",
      "path": "/api/community/admin/review-stats",
      "auth": "登录认证",
      "description": "获取审核统计数据（管理员专用）",
      "params": []
    },
    {
      "blueprint": "community",
      "method": "POST",
      "path": "/api/community/admin/indicators/<int:indicator_id>/review",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": [
        {
          "name": "indicator_id",
          "type": "integer",
          "in": "path",
          "required": "是",
          "default": "-",
          "desc": "路径参数"
        },
        {
          "name": "body",
          "type": "object",
          "in": "body",
          "required": "待确认",
          "default": "-",
          "desc": "JSON 请求体（结构待确认）"
        }
      ]
    },
    {
      "blueprint": "community",
      "method": "POST",
      "path": "/api/community/admin/indicators/<int:indicator_id>/unpublish",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": [
        {
          "name": "indicator_id",
          "type": "integer",
          "in": "path",
          "required": "是",
          "default": "-",
          "desc": "路径参数"
        },
        {
          "name": "body",
          "type": "object",
          "in": "body",
          "required": "待确认",
          "default": "-",
          "desc": "JSON 请求体（结构待确认）"
        }
      ]
    },
    {
      "blueprint": "community",
      "method": "DELETE",
      "path": "/api/community/admin/indicators/<int:indicator_id>",
      "auth": "登录认证",
      "description": "删除指标（管理员专用）",
      "params": [
        {
          "name": "indicator_id",
          "type": "integer",
          "in": "path",
          "required": "是",
          "default": "-",
          "desc": "路径参数"
        }
      ]
    },
    {
      "blueprint": "credentials",
      "method": "GET",
      "path": "/api/credentials/list",
      "auth": "登录认证",
      "description": "List all credentials for the current user.",
      "params": []
    },
    {
      "blueprint": "credentials",
      "method": "GET",
      "path": "/api/credentials/egress-ip",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": []
    },
    {
      "blueprint": "credentials",
      "method": "POST",
      "path": "/api/credentials/create",
      "auth": "登录认证",
      "description": "Create a new credential for the current user.",
      "params": [
        {
          "name": "body",
          "type": "object",
          "in": "body",
          "required": "待确认",
          "default": "-",
          "desc": "JSON 请求体（结构待确认）"
        }
      ]
    },
    {
      "blueprint": "credentials",
      "method": "DELETE",
      "path": "/api/credentials/delete",
      "auth": "登录认证",
      "description": "Delete a credential for the current user.",
      "params": [
        {
          "name": "id",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "type=int",
          "desc": "查询参数"
        }
      ]
    },
    {
      "blueprint": "credentials",
      "method": "GET",
      "path": "/api/credentials/get",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": [
        {
          "name": "id",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "type=int",
          "desc": "查询参数"
        }
      ]
    },
    {
      "blueprint": "dashboard",
      "method": "GET",
      "path": "/api/dashboard/summary",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": []
    },
    {
      "blueprint": "dashboard",
      "method": "GET",
      "path": "/api/dashboard/pendingOrders",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": [
        {
          "name": "page",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "-",
          "desc": "查询参数"
        },
        {
          "name": "pageSize",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "-",
          "desc": "查询参数"
        }
      ]
    },
    {
      "blueprint": "dashboard",
      "method": "DELETE",
      "path": "/api/dashboard/pendingOrders/<int:order_id>",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": [
        {
          "name": "order_id",
          "type": "integer",
          "in": "path",
          "required": "是",
          "default": "-",
          "desc": "路径参数"
        }
      ]
    },
    {
      "blueprint": "experiment",
      "method": "POST",
      "path": "/api/experiment/regime/detect",
      "auth": "登录认证",
      "description": "Detect the current market regime for a symbol/timeframe/date range.",
      "params": [
        {
          "name": "body",
          "type": "object",
          "in": "body",
          "required": "待确认",
          "default": "-",
          "desc": "JSON 请求体（结构待确认）"
        }
      ]
    },
    {
      "blueprint": "experiment",
      "method": "POST",
      "path": "/api/experiment/pipeline/run",
      "auth": "登录认证",
      "description": "Legacy grid-search pipeline (kept for backward compat).",
      "params": [
        {
          "name": "body",
          "type": "object",
          "in": "body",
          "required": "待确认",
          "default": "-",
          "desc": "JSON 请求体（结构待确认）"
        }
      ]
    },
    {
      "blueprint": "experiment",
      "method": "POST",
      "path": "/api/experiment/ai-optimize",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": [
        {
          "name": "body",
          "type": "object",
          "in": "body",
          "required": "待确认",
          "default": "-",
          "desc": "JSON 请求体（结构待确认）"
        }
      ]
    },
    {
      "blueprint": "experiment",
      "method": "POST",
      "path": "/api/experiment/ai-optimize-sync",
      "auth": "登录认证",
      "description": "Non-streaming version (simpler client integration).",
      "params": [
        {
          "name": "body",
          "type": "object",
          "in": "body",
          "required": "待确认",
          "default": "-",
          "desc": "JSON 请求体（结构待确认）"
        }
      ]
    },
    {
      "blueprint": "experiment",
      "method": "POST",
      "path": "/api/experiment/structured-tune",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": [
        {
          "name": "body",
          "type": "object",
          "in": "body",
          "required": "待确认",
          "default": "-",
          "desc": "JSON 请求体（结构待确认）"
        }
      ]
    },
    {
      "blueprint": "experiment",
      "method": "POST",
      "path": "/api/experiment/save-strategy",
      "auth": "登录认证",
      "description": "Save the best experiment candidate as a strategy record.",
      "params": [
        {
          "name": "body",
          "type": "object",
          "in": "body",
          "required": "待确认",
          "default": "-",
          "desc": "JSON 请求体（结构待确认）"
        }
      ]
    },
    {
      "blueprint": "fast_analysis",
      "method": "POST",
      "path": "/api/fast-analysis/analyze",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": [
        {
          "name": "body",
          "type": "object",
          "in": "body",
          "required": "待确认",
          "default": "-",
          "desc": "JSON 请求体（结构待确认）"
        }
      ]
    },
    {
      "blueprint": "fast_analysis",
      "method": "POST",
      "path": "/api/fast-analysis/analyze-legacy",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": [
        {
          "name": "body",
          "type": "object",
          "in": "body",
          "required": "待确认",
          "default": "-",
          "desc": "JSON 请求体（结构待确认）"
        }
      ]
    },
    {
      "blueprint": "fast_analysis",
      "method": "GET",
      "path": "/api/fast-analysis/history",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": [
        {
          "name": "market",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "''",
          "desc": "查询参数"
        },
        {
          "name": "symbol",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "''",
          "desc": "查询参数"
        },
        {
          "name": "days",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "7",
          "desc": "查询参数"
        },
        {
          "name": "limit",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "10",
          "desc": "查询参数"
        }
      ]
    },
    {
      "blueprint": "fast_analysis",
      "method": "GET",
      "path": "/api/fast-analysis/history/all",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": [
        {
          "name": "page",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "1",
          "desc": "查询参数"
        },
        {
          "name": "pagesize",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "20",
          "desc": "查询参数"
        }
      ]
    },
    {
      "blueprint": "fast_analysis",
      "method": "DELETE",
      "path": "/api/fast-analysis/history/<int:memory_id>",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": [
        {
          "name": "memory_id",
          "type": "integer",
          "in": "path",
          "required": "是",
          "default": "-",
          "desc": "路径参数"
        }
      ]
    },
    {
      "blueprint": "fast_analysis",
      "method": "POST",
      "path": "/api/fast-analysis/feedback",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": [
        {
          "name": "body",
          "type": "object",
          "in": "body",
          "required": "待确认",
          "default": "-",
          "desc": "JSON 请求体（结构待确认）"
        }
      ]
    },
    {
      "blueprint": "fast_analysis",
      "method": "GET",
      "path": "/api/fast-analysis/performance",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": [
        {
          "name": "market",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "''",
          "desc": "查询参数"
        },
        {
          "name": "symbol",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "''",
          "desc": "查询参数"
        },
        {
          "name": "days",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "30",
          "desc": "查询参数"
        }
      ]
    },
    {
      "blueprint": "fast_analysis",
      "method": "GET",
      "path": "/api/fast-analysis/similar-patterns",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": [
        {
          "name": "market",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "''",
          "desc": "查询参数"
        },
        {
          "name": "symbol",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "''",
          "desc": "查询参数"
        }
      ]
    },
    {
      "blueprint": "global_market",
      "method": "GET",
      "path": "/api/global-market/overview",
      "auth": "登录认证",
      "description": "Get global market overview including indices, forex, crypto, and commodities.",
      "params": []
    },
    {
      "blueprint": "global_market",
      "method": "GET",
      "path": "/api/global-market/heatmap",
      "auth": "登录认证",
      "description": "Get market heatmap data for crypto, stock sectors, forex, and indices.",
      "params": []
    },
    {
      "blueprint": "global_market",
      "method": "GET",
      "path": "/api/global-market/news",
      "auth": "登录认证",
      "description": "Get financial news from various sources.  Query params: lang ('cn'|'en'|'all').",
      "params": [
        {
          "name": "lang",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "\"all\"",
          "desc": "查询参数"
        }
      ]
    },
    {
      "blueprint": "global_market",
      "method": "GET",
      "path": "/api/global-market/calendar",
      "auth": "登录认证",
      "description": "Get economic calendar events with impact indicators.",
      "params": []
    },
    {
      "blueprint": "global_market",
      "method": "GET",
      "path": "/api/global-market/sentiment",
      "auth": "登录认证",
      "description": "Get comprehensive market sentiment indicators.",
      "params": []
    },
    {
      "blueprint": "global_market",
      "method": "GET",
      "path": "/api/global-market/opportunities",
      "auth": "登录认证",
      "description": "Scan for trading opportunities across Crypto, US/CN/HK Stocks, and Forex.",
      "params": [
        {
          "name": "force",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "\"\"",
          "desc": "查询参数"
        }
      ]
    },
    {
      "blueprint": "global_market",
      "method": "POST",
      "path": "/api/global-market/refresh",
      "auth": "登录认证",
      "description": "Force refresh all market data (clears cache).",
      "params": []
    },
    {
      "blueprint": "health",
      "method": "GET",
      "path": "/",
      "auth": "公开",
      "description": "API 首页",
      "params": []
    },
    {
      "blueprint": "health",
      "method": "GET",
      "path": "/health",
      "auth": "公开",
      "description": "健康检查",
      "params": []
    },
    {
      "blueprint": "health",
      "method": "GET",
      "path": "/api/health",
      "auth": "公开",
      "description": "兼容路径：用于容器健康检查/反代探针等场景。",
      "params": []
    },
    {
      "blueprint": "ibkr",
      "method": "GET",
      "path": "/api/ibkr/status",
      "auth": "公开",
      "description": "待补充接口说明",
      "params": []
    },
    {
      "blueprint": "ibkr",
      "method": "POST",
      "path": "/api/ibkr/connect",
      "auth": "公开",
      "description": "待补充接口说明",
      "params": [
        {
          "name": "body",
          "type": "object",
          "in": "body",
          "required": "待确认",
          "default": "-",
          "desc": "JSON 请求体（结构待确认）"
        }
      ]
    },
    {
      "blueprint": "ibkr",
      "method": "POST",
      "path": "/api/ibkr/disconnect",
      "auth": "公开",
      "description": "待补充接口说明",
      "params": []
    },
    {
      "blueprint": "ibkr",
      "method": "GET",
      "path": "/api/ibkr/account",
      "auth": "公开",
      "description": "待补充接口说明",
      "params": []
    },
    {
      "blueprint": "ibkr",
      "method": "GET",
      "path": "/api/ibkr/positions",
      "auth": "公开",
      "description": "待补充接口说明",
      "params": []
    },
    {
      "blueprint": "ibkr",
      "method": "GET",
      "path": "/api/ibkr/orders",
      "auth": "公开",
      "description": "待补充接口说明",
      "params": []
    },
    {
      "blueprint": "ibkr",
      "method": "POST",
      "path": "/api/ibkr/order",
      "auth": "公开",
      "description": "待补充接口说明",
      "params": [
        {
          "name": "body",
          "type": "object",
          "in": "body",
          "required": "待确认",
          "default": "-",
          "desc": "JSON 请求体（结构待确认）"
        }
      ]
    },
    {
      "blueprint": "ibkr",
      "method": "DELETE",
      "path": "/api/ibkr/order/<int:order_id>",
      "auth": "公开",
      "description": "待补充接口说明",
      "params": [
        {
          "name": "order_id",
          "type": "integer",
          "in": "path",
          "required": "是",
          "default": "-",
          "desc": "路径参数"
        }
      ]
    },
    {
      "blueprint": "ibkr",
      "method": "GET",
      "path": "/api/ibkr/quote",
      "auth": "公开",
      "description": "待补充接口说明",
      "params": [
        {
          "name": "symbol",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "-",
          "desc": "查询参数"
        },
        {
          "name": "marketType",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "'USStock'",
          "desc": "查询参数"
        }
      ]
    },
    {
      "blueprint": "indicator",
      "method": "GET",
      "path": "/api/indicator/getIndicators",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": []
    },
    {
      "blueprint": "indicator",
      "method": "POST",
      "path": "/api/indicator/saveIndicator",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": [
        {
          "name": "body",
          "type": "object",
          "in": "body",
          "required": "待确认",
          "default": "-",
          "desc": "JSON 请求体（结构待确认）"
        }
      ]
    },
    {
      "blueprint": "indicator",
      "method": "POST",
      "path": "/api/indicator/deleteIndicator",
      "auth": "登录认证",
      "description": "Delete an indicator by id for the current user.",
      "params": [
        {
          "name": "body",
          "type": "object",
          "in": "body",
          "required": "待确认",
          "default": "-",
          "desc": "JSON 请求体（结构待确认）"
        }
      ]
    },
    {
      "blueprint": "indicator",
      "method": "GET",
      "path": "/api/indicator/getIndicatorParams",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": [
        {
          "name": "indicator_id",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "-",
          "desc": "查询参数"
        }
      ]
    },
    {
      "blueprint": "indicator",
      "method": "POST",
      "path": "/api/indicator/verifyCode",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": [
        {
          "name": "body",
          "type": "object",
          "in": "body",
          "required": "待确认",
          "default": "-",
          "desc": "JSON 请求体（结构待确认）"
        }
      ]
    },
    {
      "blueprint": "indicator",
      "method": "POST",
      "path": "/api/indicator/aiGenerate",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": [
        {
          "name": "body",
          "type": "object",
          "in": "body",
          "required": "待确认",
          "default": "-",
          "desc": "JSON 请求体（结构待确认）"
        }
      ]
    },
    {
      "blueprint": "indicator",
      "method": "POST",
      "path": "/api/indicator/codeQualityHints",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": [
        {
          "name": "body",
          "type": "object",
          "in": "body",
          "required": "待确认",
          "default": "-",
          "desc": "JSON 请求体（结构待确认）"
        }
      ]
    },
    {
      "blueprint": "indicator",
      "method": "POST",
      "path": "/api/indicator/parseStrategyConfig",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": [
        {
          "name": "body",
          "type": "object",
          "in": "body",
          "required": "待确认",
          "default": "-",
          "desc": "JSON 请求体（结构待确认）"
        }
      ]
    },
    {
      "blueprint": "indicator",
      "method": "POST",
      "path": "/api/indicator/callIndicator",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": [
        {
          "name": "body",
          "type": "object",
          "in": "body",
          "required": "待确认",
          "default": "-",
          "desc": "JSON 请求体（结构待确认）"
        }
      ]
    },
    {
      "blueprint": "kline",
      "method": "GET",
      "path": "/api/indicator/kline",
      "auth": "公开",
      "description": "待补充接口说明",
      "params": [
        {
          "name": "market",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "'USStock'",
          "desc": "查询参数"
        },
        {
          "name": "symbol",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "''",
          "desc": "查询参数"
        },
        {
          "name": "timeframe",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "'1D'",
          "desc": "查询参数"
        },
        {
          "name": "limit",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "300",
          "desc": "查询参数"
        },
        {
          "name": "before_time",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "-",
          "desc": "查询参数"
        },
        {
          "name": "beforeTime",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "-",
          "desc": "查询参数"
        }
      ]
    },
    {
      "blueprint": "kline",
      "method": "GET",
      "path": "/api/indicator/price",
      "auth": "公开",
      "description": "获取最新价格",
      "params": [
        {
          "name": "market",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "'USStock'",
          "desc": "查询参数"
        },
        {
          "name": "symbol",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "''",
          "desc": "查询参数"
        }
      ]
    },
    {
      "blueprint": "market",
      "method": "GET",
      "path": "/api/market/config",
      "auth": "公开",
      "description": "待补充接口说明",
      "params": []
    },
    {
      "blueprint": "market",
      "method": "GET",
      "path": "/api/market/types",
      "auth": "公开",
      "description": "Return supported market types for the add-watchlist modal.",
      "params": []
    },
    {
      "blueprint": "market",
      "method": "GET",
      "path": "/api/market/menuFooterConfig",
      "auth": "公开",
      "description": "待补充接口说明",
      "params": []
    },
    {
      "blueprint": "market",
      "method": "GET",
      "path": "/api/market/symbols/search",
      "auth": "公开",
      "description": "待补充接口说明",
      "params": [
        {
          "name": "market",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "-",
          "desc": "查询参数"
        },
        {
          "name": "keyword",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "-",
          "desc": "查询参数"
        },
        {
          "name": "limit",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "-",
          "desc": "查询参数"
        }
      ]
    },
    {
      "blueprint": "market",
      "method": "GET",
      "path": "/api/market/symbols/hot",
      "auth": "公开",
      "description": "Return a small curated hot list per market (local-only).",
      "params": [
        {
          "name": "market",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "-",
          "desc": "查询参数"
        },
        {
          "name": "limit",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "-",
          "desc": "查询参数"
        }
      ]
    },
    {
      "blueprint": "market",
      "method": "GET",
      "path": "/api/market/watchlist/get",
      "auth": "登录认证",
      "description": "Get watchlist for the current user.",
      "params": []
    },
    {
      "blueprint": "market",
      "method": "POST",
      "path": "/api/market/watchlist/add",
      "auth": "登录认证",
      "description": "Add a symbol to watchlist for the current user.",
      "params": [
        {
          "name": "body",
          "type": "object",
          "in": "body",
          "required": "待确认",
          "default": "-",
          "desc": "JSON 请求体（结构待确认）"
        }
      ]
    },
    {
      "blueprint": "market",
      "method": "POST",
      "path": "/api/market/watchlist/remove",
      "auth": "登录认证",
      "description": "Remove a symbol from watchlist for the current user.",
      "params": [
        {
          "name": "body",
          "type": "object",
          "in": "body",
          "required": "待确认",
          "default": "-",
          "desc": "JSON 请求体（结构待确认）"
        }
      ]
    },
    {
      "blueprint": "market",
      "method": "GET",
      "path": "/api/market/watchlist/prices",
      "auth": "公开",
      "description": "待补充接口说明",
      "params": [
        {
          "name": "watchlist",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "'[]'",
          "desc": "查询参数"
        }
      ]
    },
    {
      "blueprint": "market",
      "method": "GET",
      "path": "/api/market/price",
      "auth": "公开",
      "description": "待补充接口说明",
      "params": [
        {
          "name": "market",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "''",
          "desc": "查询参数"
        },
        {
          "name": "symbol",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "''",
          "desc": "查询参数"
        }
      ]
    },
    {
      "blueprint": "market",
      "method": "POST",
      "path": "/api/market/stock/name",
      "auth": "公开",
      "description": "待补充接口说明",
      "params": [
        {
          "name": "body",
          "type": "object",
          "in": "body",
          "required": "待确认",
          "default": "-",
          "desc": "JSON 请求体（结构待确认）"
        }
      ]
    },
    {
      "blueprint": "mt5",
      "method": "GET",
      "path": "/api/mt5/status",
      "auth": "公开",
      "description": "Get MT5 connection status.",
      "params": []
    },
    {
      "blueprint": "mt5",
      "method": "POST",
      "path": "/api/mt5/connect",
      "auth": "公开",
      "description": "待补充接口说明",
      "params": [
        {
          "name": "body",
          "type": "object",
          "in": "body",
          "required": "待确认",
          "default": "-",
          "desc": "JSON 请求体（结构待确认）"
        }
      ]
    },
    {
      "blueprint": "mt5",
      "method": "POST",
      "path": "/api/mt5/disconnect",
      "auth": "公开",
      "description": "Disconnect from MT5 terminal.",
      "params": []
    },
    {
      "blueprint": "mt5",
      "method": "GET",
      "path": "/api/mt5/account",
      "auth": "公开",
      "description": "Get account information.",
      "params": []
    },
    {
      "blueprint": "mt5",
      "method": "GET",
      "path": "/api/mt5/positions",
      "auth": "公开",
      "description": "Get open positions.",
      "params": [
        {
          "name": "symbol",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "-",
          "desc": "查询参数"
        }
      ]
    },
    {
      "blueprint": "mt5",
      "method": "GET",
      "path": "/api/mt5/orders",
      "auth": "公开",
      "description": "Get pending orders.",
      "params": [
        {
          "name": "symbol",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "-",
          "desc": "查询参数"
        }
      ]
    },
    {
      "blueprint": "mt5",
      "method": "GET",
      "path": "/api/mt5/symbols",
      "auth": "公开",
      "description": "Get available symbols.",
      "params": [
        {
          "name": "group",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "\"*\"",
          "desc": "查询参数"
        }
      ]
    },
    {
      "blueprint": "mt5",
      "method": "POST",
      "path": "/api/mt5/order",
      "auth": "公开",
      "description": "待补充接口说明",
      "params": [
        {
          "name": "body",
          "type": "object",
          "in": "body",
          "required": "待确认",
          "default": "-",
          "desc": "JSON 请求体（结构待确认）"
        }
      ]
    },
    {
      "blueprint": "mt5",
      "method": "POST",
      "path": "/api/mt5/close",
      "auth": "公开",
      "description": "待补充接口说明",
      "params": [
        {
          "name": "body",
          "type": "object",
          "in": "body",
          "required": "待确认",
          "default": "-",
          "desc": "JSON 请求体（结构待确认）"
        }
      ]
    },
    {
      "blueprint": "mt5",
      "method": "DELETE",
      "path": "/api/mt5/order/<int:ticket>",
      "auth": "公开",
      "description": "Cancel a pending order.",
      "params": [
        {
          "name": "ticket",
          "type": "integer",
          "in": "path",
          "required": "是",
          "default": "-",
          "desc": "路径参数"
        }
      ]
    },
    {
      "blueprint": "mt5",
      "method": "GET",
      "path": "/api/mt5/quote",
      "auth": "公开",
      "description": "待补充接口说明",
      "params": [
        {
          "name": "symbol",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "-",
          "desc": "查询参数"
        }
      ]
    },
    {
      "blueprint": "polymarket",
      "method": "POST",
      "path": "/api/polymarket/analyze",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": [
        {
          "name": "model",
          "type": "待确认",
          "in": "body",
          "required": "否",
          "default": "-",
          "desc": "JSON 请求体参数"
        }
      ]
    },
    {
      "blueprint": "polymarket",
      "method": "GET",
      "path": "/api/polymarket/history",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": [
        {
          "name": "page",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "1, type=int",
          "desc": "查询参数"
        },
        {
          "name": "page_size",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "20, type=int",
          "desc": "查询参数"
        }
      ]
    },
    {
      "blueprint": "portfolio",
      "method": "GET",
      "path": "/api/portfolio/positions",
      "auth": "登录认证",
      "description": "Get all manual positions with current prices for the current user.",
      "params": [
        {
          "name": "refresh",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "''",
          "desc": "查询参数"
        }
      ]
    },
    {
      "blueprint": "portfolio",
      "method": "POST",
      "path": "/api/portfolio/positions",
      "auth": "登录认证",
      "description": "Add a new manual position for the current user.",
      "params": [
        {
          "name": "body",
          "type": "object",
          "in": "body",
          "required": "待确认",
          "default": "-",
          "desc": "JSON 请求体（结构待确认）"
        }
      ]
    },
    {
      "blueprint": "portfolio",
      "method": "PUT",
      "path": "/api/portfolio/positions/<int:position_id>",
      "auth": "登录认证",
      "description": "Update an existing position for the current user.",
      "params": [
        {
          "name": "position_id",
          "type": "integer",
          "in": "path",
          "required": "是",
          "default": "-",
          "desc": "路径参数"
        },
        {
          "name": "body",
          "type": "object",
          "in": "body",
          "required": "待确认",
          "default": "-",
          "desc": "JSON 请求体（结构待确认）"
        }
      ]
    },
    {
      "blueprint": "portfolio",
      "method": "DELETE",
      "path": "/api/portfolio/positions/<int:position_id>",
      "auth": "登录认证",
      "description": "Delete a position for the current user.",
      "params": [
        {
          "name": "position_id",
          "type": "integer",
          "in": "path",
          "required": "是",
          "default": "-",
          "desc": "路径参数"
        }
      ]
    },
    {
      "blueprint": "portfolio",
      "method": "GET",
      "path": "/api/portfolio/summary",
      "auth": "登录认证",
      "description": "Get portfolio summary with total value, PnL, and market distribution for the current user.",
      "params": [
        {
          "name": "refresh",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "''",
          "desc": "查询参数"
        }
      ]
    },
    {
      "blueprint": "portfolio",
      "method": "GET",
      "path": "/api/portfolio/monitors",
      "auth": "登录认证",
      "description": "Get all position monitors for the current user.",
      "params": []
    },
    {
      "blueprint": "portfolio",
      "method": "POST",
      "path": "/api/portfolio/monitors",
      "auth": "登录认证",
      "description": "Add a new position monitor for the current user.",
      "params": [
        {
          "name": "body",
          "type": "object",
          "in": "body",
          "required": "待确认",
          "default": "-",
          "desc": "JSON 请求体（结构待确认）"
        }
      ]
    },
    {
      "blueprint": "portfolio",
      "method": "PUT",
      "path": "/api/portfolio/monitors/<int:monitor_id>",
      "auth": "登录认证",
      "description": "Update an existing monitor for the current user.",
      "params": [
        {
          "name": "monitor_id",
          "type": "integer",
          "in": "path",
          "required": "是",
          "default": "-",
          "desc": "路径参数"
        },
        {
          "name": "body",
          "type": "object",
          "in": "body",
          "required": "待确认",
          "default": "-",
          "desc": "JSON 请求体（结构待确认）"
        }
      ]
    },
    {
      "blueprint": "portfolio",
      "method": "DELETE",
      "path": "/api/portfolio/monitors/<int:monitor_id>",
      "auth": "登录认证",
      "description": "Delete a monitor for the current user.",
      "params": [
        {
          "name": "monitor_id",
          "type": "integer",
          "in": "path",
          "required": "是",
          "default": "-",
          "desc": "路径参数"
        }
      ]
    },
    {
      "blueprint": "portfolio",
      "method": "POST",
      "path": "/api/portfolio/monitors/<int:monitor_id>/run",
      "auth": "登录认证",
      "description": "Manually trigger a monitor to run immediately.",
      "params": [
        {
          "name": "monitor_id",
          "type": "integer",
          "in": "path",
          "required": "是",
          "default": "-",
          "desc": "路径参数"
        },
        {
          "name": "body",
          "type": "object",
          "in": "body",
          "required": "待确认",
          "default": "-",
          "desc": "JSON 请求体（结构待确认）"
        }
      ]
    },
    {
      "blueprint": "portfolio",
      "method": "GET",
      "path": "/api/portfolio/alerts",
      "auth": "登录认证",
      "description": "Get all position alerts for the current user.",
      "params": []
    },
    {
      "blueprint": "portfolio",
      "method": "POST",
      "path": "/api/portfolio/alerts",
      "auth": "登录认证",
      "description": "Add a new position alert for the current user.",
      "params": [
        {
          "name": "body",
          "type": "object",
          "in": "body",
          "required": "待确认",
          "default": "-",
          "desc": "JSON 请求体（结构待确认）"
        }
      ]
    },
    {
      "blueprint": "portfolio",
      "method": "PUT",
      "path": "/api/portfolio/alerts/<int:alert_id>",
      "auth": "登录认证",
      "description": "Update an existing alert for the current user.",
      "params": [
        {
          "name": "alert_id",
          "type": "integer",
          "in": "path",
          "required": "是",
          "default": "-",
          "desc": "路径参数"
        },
        {
          "name": "body",
          "type": "object",
          "in": "body",
          "required": "待确认",
          "default": "-",
          "desc": "JSON 请求体（结构待确认）"
        }
      ]
    },
    {
      "blueprint": "portfolio",
      "method": "DELETE",
      "path": "/api/portfolio/alerts/<int:alert_id>",
      "auth": "登录认证",
      "description": "Delete an alert for the current user.",
      "params": [
        {
          "name": "alert_id",
          "type": "integer",
          "in": "path",
          "required": "是",
          "default": "-",
          "desc": "路径参数"
        }
      ]
    },
    {
      "blueprint": "portfolio",
      "method": "GET",
      "path": "/api/portfolio/groups",
      "auth": "登录认证",
      "description": "Get list of all groups with position counts for the current user.",
      "params": []
    },
    {
      "blueprint": "portfolio",
      "method": "POST",
      "path": "/api/portfolio/groups/rename",
      "auth": "登录认证",
      "description": "Rename a group for the current user.",
      "params": [
        {
          "name": "body",
          "type": "object",
          "in": "body",
          "required": "待确认",
          "default": "-",
          "desc": "JSON 请求体（结构待确认）"
        }
      ]
    },
    {
      "blueprint": "quick_trade",
      "method": "POST",
      "path": "/api/quick-trade/place-order",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": [
        {
          "name": "body",
          "type": "object",
          "in": "body",
          "required": "待确认",
          "default": "-",
          "desc": "JSON 请求体（结构待确认）"
        }
      ]
    },
    {
      "blueprint": "quick_trade",
      "method": "GET",
      "path": "/api/quick-trade/balance",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": [
        {
          "name": "credential_id",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "type=int",
          "desc": "查询参数"
        },
        {
          "name": "market_type",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "\"swap\"",
          "desc": "查询参数"
        }
      ]
    },
    {
      "blueprint": "quick_trade",
      "method": "GET",
      "path": "/api/quick-trade/position",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": [
        {
          "name": "credential_id",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "type=int",
          "desc": "查询参数"
        },
        {
          "name": "symbol",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "\"\"",
          "desc": "查询参数"
        },
        {
          "name": "market_type",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "\"swap\"",
          "desc": "查询参数"
        }
      ]
    },
    {
      "blueprint": "quick_trade",
      "method": "POST",
      "path": "/api/quick-trade/close-position",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": [
        {
          "name": "body",
          "type": "object",
          "in": "body",
          "required": "待确认",
          "default": "-",
          "desc": "JSON 请求体（结构待确认）"
        }
      ]
    },
    {
      "blueprint": "quick_trade",
      "method": "GET",
      "path": "/api/quick-trade/history",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": [
        {
          "name": "limit",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "-",
          "desc": "查询参数"
        },
        {
          "name": "offset",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "-",
          "desc": "查询参数"
        }
      ]
    },
    {
      "blueprint": "settings",
      "method": "GET",
      "path": "/api/settings/schema",
      "auth": "管理员认证",
      "description": "获取配置项定义 (admin only)",
      "params": []
    },
    {
      "blueprint": "settings",
      "method": "GET",
      "path": "/api/settings/public-config",
      "auth": "登录认证",
      "description": "Return non-sensitive config values needed by frontend widgets.",
      "params": []
    },
    {
      "blueprint": "settings",
      "method": "GET",
      "path": "/api/settings/values",
      "auth": "管理员认证",
      "description": "获取当前配置值 - 包括敏感信息（真实值）(admin only)",
      "params": []
    },
    {
      "blueprint": "settings",
      "method": "POST",
      "path": "/api/settings/save",
      "auth": "管理员认证",
      "description": "保存配置 (admin only)",
      "params": [
        {
          "name": "body",
          "type": "object",
          "in": "body",
          "required": "待确认",
          "default": "-",
          "desc": "JSON 请求体（结构待确认）"
        }
      ]
    },
    {
      "blueprint": "settings",
      "method": "GET",
      "path": "/api/settings/openrouter-balance",
      "auth": "管理员认证",
      "description": "查询 OpenRouter 账户余额 (admin only)",
      "params": []
    },
    {
      "blueprint": "settings",
      "method": "POST",
      "path": "/api/settings/test-connection",
      "auth": "管理员认证",
      "description": "测试API连接 (admin only)",
      "params": [
        {
          "name": "body",
          "type": "object",
          "in": "body",
          "required": "待确认",
          "default": "-",
          "desc": "JSON 请求体（结构待确认）"
        }
      ]
    },
    {
      "blueprint": "strategy",
      "method": "GET",
      "path": "/api/templates",
      "auth": "登录认证",
      "description": "Return pre-built strategy templates for one-click import.",
      "params": [
        {
          "name": "category",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "-",
          "desc": "查询参数"
        },
        {
          "name": "difficulty",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "-",
          "desc": "查询参数"
        }
      ]
    },
    {
      "blueprint": "strategy",
      "method": "GET",
      "path": "/api/templates/<key>",
      "auth": "登录认证",
      "description": "Return a single strategy template by key.",
      "params": [
        {
          "name": "key",
          "type": "string",
          "in": "path",
          "required": "是",
          "default": "-",
          "desc": "路径参数"
        }
      ]
    },
    {
      "blueprint": "strategy",
      "method": "GET",
      "path": "/api/strategies",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": []
    },
    {
      "blueprint": "strategy",
      "method": "GET",
      "path": "/api/strategies/detail",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": [
        {
          "name": "id",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "type=int",
          "desc": "查询参数"
        }
      ]
    },
    {
      "blueprint": "strategy",
      "method": "POST",
      "path": "/api/strategies/backtest",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": [
        {
          "name": "body",
          "type": "object",
          "in": "body",
          "required": "待确认",
          "default": "-",
          "desc": "JSON 请求体（结构待确认）"
        }
      ]
    },
    {
      "blueprint": "strategy",
      "method": "GET",
      "path": "/api/strategies/backtest/history",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": [
        {
          "name": "strategyId",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "-",
          "desc": "查询参数"
        },
        {
          "name": "id",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "-",
          "desc": "查询参数"
        },
        {
          "name": "limit",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "-",
          "desc": "查询参数"
        },
        {
          "name": "offset",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "-",
          "desc": "查询参数"
        },
        {
          "name": "symbol",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "-",
          "desc": "查询参数"
        },
        {
          "name": "market",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "-",
          "desc": "查询参数"
        },
        {
          "name": "timeframe",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "-",
          "desc": "查询参数"
        }
      ]
    },
    {
      "blueprint": "strategy",
      "method": "GET",
      "path": "/api/strategies/backtest/get",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": [
        {
          "name": "runId",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "-",
          "desc": "查询参数"
        }
      ]
    },
    {
      "blueprint": "strategy",
      "method": "POST",
      "path": "/api/strategies/create",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": [
        {
          "name": "body",
          "type": "object",
          "in": "body",
          "required": "待确认",
          "default": "-",
          "desc": "JSON 请求体（结构待确认）"
        }
      ]
    },
    {
      "blueprint": "strategy",
      "method": "POST",
      "path": "/api/strategies/batch-create",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": [
        {
          "name": "body",
          "type": "object",
          "in": "body",
          "required": "待确认",
          "default": "-",
          "desc": "JSON 请求体（结构待确认）"
        }
      ]
    },
    {
      "blueprint": "strategy",
      "method": "POST",
      "path": "/api/strategies/batch-start",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": [
        {
          "name": "body",
          "type": "object",
          "in": "body",
          "required": "待确认",
          "default": "-",
          "desc": "JSON 请求体（结构待确认）"
        }
      ]
    },
    {
      "blueprint": "strategy",
      "method": "POST",
      "path": "/api/strategies/batch-stop",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": [
        {
          "name": "body",
          "type": "object",
          "in": "body",
          "required": "待确认",
          "default": "-",
          "desc": "JSON 请求体（结构待确认）"
        }
      ]
    },
    {
      "blueprint": "strategy",
      "method": "DELETE",
      "path": "/api/strategies/batch-delete",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": [
        {
          "name": "body",
          "type": "object",
          "in": "body",
          "required": "待确认",
          "default": "-",
          "desc": "JSON 请求体（结构待确认）"
        }
      ]
    },
    {
      "blueprint": "strategy",
      "method": "PUT",
      "path": "/api/strategies/update",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": [
        {
          "name": "id",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "type=int",
          "desc": "查询参数"
        },
        {
          "name": "body",
          "type": "object",
          "in": "body",
          "required": "待确认",
          "default": "-",
          "desc": "JSON 请求体（结构待确认）"
        }
      ]
    },
    {
      "blueprint": "strategy",
      "method": "DELETE",
      "path": "/api/strategies/delete",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": [
        {
          "name": "id",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "type=int",
          "desc": "查询参数"
        }
      ]
    },
    {
      "blueprint": "strategy",
      "method": "GET",
      "path": "/api/strategies/trades",
      "auth": "登录认证",
      "description": "Get trade records for the current user's strategy.",
      "params": [
        {
          "name": "id",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "type=int",
          "desc": "查询参数"
        }
      ]
    },
    {
      "blueprint": "strategy",
      "method": "GET",
      "path": "/api/strategies/positions",
      "auth": "登录认证",
      "description": "Get position records for the current user's strategy.",
      "params": [
        {
          "name": "id",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "type=int",
          "desc": "查询参数"
        }
      ]
    },
    {
      "blueprint": "strategy",
      "method": "GET",
      "path": "/api/strategies/equityCurve",
      "auth": "登录认证",
      "description": "Get equity curve for the current user's strategy.",
      "params": [
        {
          "name": "id",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "type=int",
          "desc": "查询参数"
        }
      ]
    },
    {
      "blueprint": "strategy",
      "method": "POST",
      "path": "/api/strategies/stop",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": [
        {
          "name": "id",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "type=int",
          "desc": "查询参数"
        }
      ]
    },
    {
      "blueprint": "strategy",
      "method": "POST",
      "path": "/api/strategies/start",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": [
        {
          "name": "id",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "type=int",
          "desc": "查询参数"
        }
      ]
    },
    {
      "blueprint": "strategy",
      "method": "POST",
      "path": "/api/strategies/test-connection",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": [
        {
          "name": "body",
          "type": "object",
          "in": "body",
          "required": "待确认",
          "default": "-",
          "desc": "JSON 请求体（结构待确认）"
        }
      ]
    },
    {
      "blueprint": "strategy",
      "method": "POST",
      "path": "/api/strategies/get-symbols",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": [
        {
          "name": "body",
          "type": "object",
          "in": "body",
          "required": "待确认",
          "default": "-",
          "desc": "JSON 请求体（结构待确认）"
        }
      ]
    },
    {
      "blueprint": "strategy",
      "method": "POST",
      "path": "/api/strategies/preview-compile",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": [
        {
          "name": "body",
          "type": "object",
          "in": "body",
          "required": "待确认",
          "default": "-",
          "desc": "JSON 请求体（结构待确认）"
        }
      ]
    },
    {
      "blueprint": "strategy",
      "method": "GET",
      "path": "/api/strategies/notifications",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": [
        {
          "name": "id",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "type=int",
          "desc": "查询参数"
        },
        {
          "name": "limit",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "type=int",
          "desc": "查询参数"
        },
        {
          "name": "since_id",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "type=int",
          "desc": "查询参数"
        }
      ]
    },
    {
      "blueprint": "strategy",
      "method": "GET",
      "path": "/api/strategies/notifications/unread-count",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": []
    },
    {
      "blueprint": "strategy",
      "method": "POST",
      "path": "/api/strategies/notifications/read",
      "auth": "登录认证",
      "description": "Mark a single notification as read for the current user.",
      "params": [
        {
          "name": "body",
          "type": "object",
          "in": "body",
          "required": "待确认",
          "default": "-",
          "desc": "JSON 请求体（结构待确认）"
        }
      ]
    },
    {
      "blueprint": "strategy",
      "method": "POST",
      "path": "/api/strategies/notifications/read-all",
      "auth": "登录认证",
      "description": "Mark all notifications as read for the current user.",
      "params": []
    },
    {
      "blueprint": "strategy",
      "method": "DELETE",
      "path": "/api/strategies/notifications/clear",
      "auth": "登录认证",
      "description": "Clear all notifications for the current user.",
      "params": []
    },
    {
      "blueprint": "strategy",
      "method": "POST",
      "path": "/api/strategies/verify-code",
      "auth": "登录认证",
      "description": "Verify script strategy code syntax and safety.",
      "params": [
        {
          "name": "body",
          "type": "object",
          "in": "body",
          "required": "待确认",
          "default": "-",
          "desc": "JSON 请求体（结构待确认）"
        }
      ]
    },
    {
      "blueprint": "strategy",
      "method": "POST",
      "path": "/api/strategies/ai-generate",
      "auth": "登录认证",
      "description": "Generate strategy code or suggest template parameter updates using AI.",
      "params": [
        {
          "name": "body",
          "type": "object",
          "in": "body",
          "required": "待确认",
          "default": "-",
          "desc": "JSON 请求体（结构待确认）"
        }
      ]
    },
    {
      "blueprint": "strategy",
      "method": "GET",
      "path": "/api/strategies/performance",
      "auth": "登录认证",
      "description": "Get strategy performance metrics (aggregated from equity curve and trades).",
      "params": [
        {
          "name": "id",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "type=int",
          "desc": "查询参数"
        }
      ]
    },
    {
      "blueprint": "strategy",
      "method": "GET",
      "path": "/api/strategies/logs",
      "auth": "登录认证",
      "description": "Get strategy running logs.",
      "params": [
        {
          "name": "id",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "-",
          "desc": "查询参数"
        },
        {
          "name": "limit",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "200",
          "desc": "查询参数"
        }
      ]
    },
    {
      "blueprint": "user_manage",
      "method": "GET",
      "path": "/api/users/list",
      "auth": "管理员认证",
      "description": "待补充接口说明",
      "params": [
        {
          "name": "page",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "1, type=int",
          "desc": "查询参数"
        },
        {
          "name": "page_size",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "20, type=int",
          "desc": "查询参数"
        },
        {
          "name": "search",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "'', type=str",
          "desc": "查询参数"
        }
      ]
    },
    {
      "blueprint": "user_manage",
      "method": "GET",
      "path": "/api/users/export",
      "auth": "管理员认证",
      "description": "Export all users as an Excel-friendly CSV file (admin only).",
      "params": [
        {
          "name": "search",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "'', type=str",
          "desc": "查询参数"
        }
      ]
    },
    {
      "blueprint": "user_manage",
      "method": "GET",
      "path": "/api/users/detail",
      "auth": "管理员认证",
      "description": "Get user detail by ID (admin only)",
      "params": [
        {
          "name": "id",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "type=int",
          "desc": "查询参数"
        }
      ]
    },
    {
      "blueprint": "user_manage",
      "method": "POST",
      "path": "/api/users/create",
      "auth": "管理员认证",
      "description": "待补充接口说明",
      "params": [
        {
          "name": "body",
          "type": "object",
          "in": "body",
          "required": "待确认",
          "default": "-",
          "desc": "JSON 请求体（结构待确认）"
        }
      ]
    },
    {
      "blueprint": "user_manage",
      "method": "PUT",
      "path": "/api/users/update",
      "auth": "管理员认证",
      "description": "待补充接口说明",
      "params": [
        {
          "name": "id",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "type=int",
          "desc": "查询参数"
        },
        {
          "name": "body",
          "type": "object",
          "in": "body",
          "required": "待确认",
          "default": "-",
          "desc": "JSON 请求体（结构待确认）"
        }
      ]
    },
    {
      "blueprint": "user_manage",
      "method": "DELETE",
      "path": "/api/users/delete",
      "auth": "管理员认证",
      "description": "Delete a user (admin only)",
      "params": [
        {
          "name": "id",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "type=int",
          "desc": "查询参数"
        }
      ]
    },
    {
      "blueprint": "user_manage",
      "method": "POST",
      "path": "/api/users/reset-password",
      "auth": "管理员认证",
      "description": "待补充接口说明",
      "params": [
        {
          "name": "body",
          "type": "object",
          "in": "body",
          "required": "待确认",
          "default": "-",
          "desc": "JSON 请求体（结构待确认）"
        }
      ]
    },
    {
      "blueprint": "user_manage",
      "method": "GET",
      "path": "/api/users/roles",
      "auth": "管理员认证",
      "description": "Get available roles and their permissions",
      "params": []
    },
    {
      "blueprint": "user_manage",
      "method": "POST",
      "path": "/api/users/set-credits",
      "auth": "管理员认证",
      "description": "待补充接口说明",
      "params": [
        {
          "name": "body",
          "type": "object",
          "in": "body",
          "required": "待确认",
          "default": "-",
          "desc": "JSON 请求体（结构待确认）"
        }
      ]
    },
    {
      "blueprint": "user_manage",
      "method": "POST",
      "path": "/api/users/set-vip",
      "auth": "管理员认证",
      "description": "待补充接口说明",
      "params": [
        {
          "name": "body",
          "type": "object",
          "in": "body",
          "required": "待确认",
          "default": "-",
          "desc": "JSON 请求体（结构待确认）"
        }
      ]
    },
    {
      "blueprint": "user_manage",
      "method": "GET",
      "path": "/api/users/credits-log",
      "auth": "管理员认证",
      "description": "待补充接口说明",
      "params": [
        {
          "name": "user_id",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "type=int",
          "desc": "查询参数"
        },
        {
          "name": "page",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "1, type=int",
          "desc": "查询参数"
        },
        {
          "name": "page_size",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "20, type=int",
          "desc": "查询参数"
        }
      ]
    },
    {
      "blueprint": "user_manage",
      "method": "GET",
      "path": "/api/users/profile",
      "auth": "登录认证",
      "description": "Get current user's profile with billing info and notification settings",
      "params": []
    },
    {
      "blueprint": "user_manage",
      "method": "PUT",
      "path": "/api/users/profile/update",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": [
        {
          "name": "body",
          "type": "object",
          "in": "body",
          "required": "待确认",
          "default": "-",
          "desc": "JSON 请求体（结构待确认）"
        }
      ]
    },
    {
      "blueprint": "user_manage",
      "method": "GET",
      "path": "/api/users/my-credits-log",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": [
        {
          "name": "page",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "1, type=int",
          "desc": "查询参数"
        },
        {
          "name": "page_size",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "20, type=int",
          "desc": "查询参数"
        }
      ]
    },
    {
      "blueprint": "user_manage",
      "method": "GET",
      "path": "/api/users/my-referrals",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": [
        {
          "name": "page",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "1, type=int",
          "desc": "查询参数"
        },
        {
          "name": "page_size",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "20, type=int",
          "desc": "查询参数"
        }
      ]
    },
    {
      "blueprint": "user_manage",
      "method": "GET",
      "path": "/api/users/notification-settings",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": []
    },
    {
      "blueprint": "user_manage",
      "method": "PUT",
      "path": "/api/users/notification-settings",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": [
        {
          "name": "body",
          "type": "object",
          "in": "body",
          "required": "待确认",
          "default": "-",
          "desc": "JSON 请求体（结构待确认）"
        }
      ]
    },
    {
      "blueprint": "user_manage",
      "method": "GET",
      "path": "/api/users/chart-templates",
      "auth": "登录认证",
      "description": "Get current user's indicator chart templates.",
      "params": []
    },
    {
      "blueprint": "user_manage",
      "method": "POST",
      "path": "/api/users/chart-templates",
      "auth": "登录认证",
      "description": "Create or update a user's indicator chart template.",
      "params": [
        {
          "name": "body",
          "type": "object",
          "in": "body",
          "required": "待确认",
          "default": "-",
          "desc": "JSON 请求体（结构待确认）"
        }
      ]
    },
    {
      "blueprint": "user_manage",
      "method": "DELETE",
      "path": "/api/users/chart-templates",
      "auth": "登录认证",
      "description": "Delete a user's chart template by id.",
      "params": [
        {
          "name": "template_id",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "-",
          "desc": "查询参数"
        }
      ]
    },
    {
      "blueprint": "user_manage",
      "method": "POST",
      "path": "/api/users/notification-settings/test",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": []
    },
    {
      "blueprint": "user_manage",
      "method": "POST",
      "path": "/api/users/change-password",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": [
        {
          "name": "body",
          "type": "object",
          "in": "body",
          "required": "待确认",
          "default": "-",
          "desc": "JSON 请求体（结构待确认）"
        }
      ]
    },
    {
      "blueprint": "user_manage",
      "method": "GET",
      "path": "/api/users/system-strategies",
      "auth": "管理员认证",
      "description": "待补充接口说明",
      "params": [
        {
          "name": "page",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "1, type=int",
          "desc": "查询参数"
        },
        {
          "name": "page_size",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "20, type=int",
          "desc": "查询参数"
        },
        {
          "name": "status",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "'', type=str",
          "desc": "查询参数"
        },
        {
          "name": "execution_mode",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "'', type=str",
          "desc": "查询参数"
        },
        {
          "name": "search",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "'', type=str",
          "desc": "查询参数"
        },
        {
          "name": "sort_by",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "'', type=str",
          "desc": "查询参数"
        },
        {
          "name": "sort_order",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "'desc', type=str",
          "desc": "查询参数"
        }
      ]
    },
    {
      "blueprint": "user_manage",
      "method": "GET",
      "path": "/api/users/admin-orders",
      "auth": "管理员认证",
      "description": "待补充接口说明",
      "params": [
        {
          "name": "page",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "1, type=int",
          "desc": "查询参数"
        },
        {
          "name": "page_size",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "20, type=int",
          "desc": "查询参数"
        },
        {
          "name": "status",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "'', type=str",
          "desc": "查询参数"
        },
        {
          "name": "search",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "'', type=str",
          "desc": "查询参数"
        }
      ]
    },
    {
      "blueprint": "user_manage",
      "method": "GET",
      "path": "/api/users/admin-ai-stats",
      "auth": "管理员认证",
      "description": "待补充接口说明",
      "params": [
        {
          "name": "page",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "1, type=int",
          "desc": "查询参数"
        },
        {
          "name": "page_size",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "20, type=int",
          "desc": "查询参数"
        },
        {
          "name": "search",
          "type": "待确认",
          "in": "query",
          "required": "否",
          "default": "'', type=str",
          "desc": "查询参数"
        }
      ]
    }
  ]
}
API_BLUEPRINT_INDEX_END -->
