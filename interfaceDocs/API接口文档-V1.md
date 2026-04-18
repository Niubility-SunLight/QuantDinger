# QuantDinger API接口文档-V1

- 生成时间：2026-04-18 14:26:26
- 扫描目录：`backend_api_python/app/routes`
- 对比基线：首次生成，无历史版本

## 变更说明

- 新增接口：199
- 移除接口：0
- 修改接口：0
- 未变化接口：0

### 新增接口

- POST `/api/ai/chat/message`（ai_chat）
- GET `/api/ai/chat/history`（ai_chat）
- POST `/api/ai/chat/history/save`（ai_chat）
- GET `/api/auth/security-config`（auth）
- POST `/api/auth/login`（auth）
- POST `/api/auth/login-code`（auth）
- POST `/api/auth/send-code`（auth）
- POST `/api/auth/register`（auth）
- POST `/api/auth/reset-password`（auth）
- POST `/api/auth/change-password`（auth）
- GET `/api/auth/oauth/google`（auth）
- GET `/api/auth/oauth/google/callback`（auth）
- GET `/api/auth/oauth/github`（auth）
- GET `/api/auth/oauth/github/callback`（auth）
- POST `/api/auth/logout`（auth）
- GET `/api/auth/info`（auth）
- GET `/api/indicator/backtest/precision-info`（backtest）
- POST `/api/indicator/backtest`（backtest）
- GET `/api/indicator/backtest/history`（backtest）
- GET `/api/indicator/backtest/get`（backtest）
- POST `/api/indicator/backtest/aiAnalyze`（backtest）
- GET `/api/billing/plans`（billing）
- POST `/api/billing/purchase`（billing）
- POST `/api/billing/usdt/create`（billing）
- GET `/api/billing/usdt/order/<int:order_id>`（billing）
- GET `/api/community/indicators`（community）
- GET `/api/community/indicators/<int:indicator_id>`（community）
- POST `/api/community/indicators/<int:indicator_id>/purchase`（community）
- POST `/api/community/indicators/<int:indicator_id>/sync`（community）
- GET `/api/community/my-purchases`（community）
- GET `/api/community/indicators/<int:indicator_id>/comments`（community）
- POST `/api/community/indicators/<int:indicator_id>/comments`（community）
- PUT `/api/community/indicators/<int:indicator_id>/comments/<int:comment_id>`（community）
- GET `/api/community/indicators/<int:indicator_id>/my-comment`（community）
- GET `/api/community/indicators/<int:indicator_id>/performance`（community）
- GET `/api/community/admin/pending-indicators`（community）
- GET `/api/community/admin/review-stats`（community）
- POST `/api/community/admin/indicators/<int:indicator_id>/review`（community）
- POST `/api/community/admin/indicators/<int:indicator_id>/unpublish`（community）
- DELETE `/api/community/admin/indicators/<int:indicator_id>`（community）
- GET `/api/credentials/list`（credentials）
- GET `/api/credentials/egress-ip`（credentials）
- POST `/api/credentials/create`（credentials）
- DELETE `/api/credentials/delete`（credentials）
- GET `/api/credentials/get`（credentials）
- GET `/api/dashboard/summary`（dashboard）
- GET `/api/dashboard/pendingOrders`（dashboard）
- DELETE `/api/dashboard/pendingOrders/<int:order_id>`（dashboard）
- POST `/api/experiment/regime/detect`（experiment）
- POST `/api/experiment/pipeline/run`（experiment）
- POST `/api/experiment/ai-optimize`（experiment）
- POST `/api/experiment/ai-optimize-sync`（experiment）
- POST `/api/experiment/structured-tune`（experiment）
- POST `/api/experiment/save-strategy`（experiment）
- POST `/api/fast-analysis/analyze`（fast_analysis）
- POST `/api/fast-analysis/analyze-legacy`（fast_analysis）
- GET `/api/fast-analysis/history`（fast_analysis）
- GET `/api/fast-analysis/history/all`（fast_analysis）
- DELETE `/api/fast-analysis/history/<int:memory_id>`（fast_analysis）
- POST `/api/fast-analysis/feedback`（fast_analysis）
- GET `/api/fast-analysis/performance`（fast_analysis）
- GET `/api/fast-analysis/similar-patterns`（fast_analysis）
- GET `/api/global-market/overview`（global_market）
- GET `/api/global-market/heatmap`（global_market）
- GET `/api/global-market/news`（global_market）
- GET `/api/global-market/calendar`（global_market）
- GET `/api/global-market/sentiment`（global_market）
- GET `/api/global-market/opportunities`（global_market）
- POST `/api/global-market/refresh`（global_market）
- GET `/`（health）
- GET `/health`（health）
- GET `/api/health`（health）
- GET `/api/ibkr/status`（ibkr）
- POST `/api/ibkr/connect`（ibkr）
- POST `/api/ibkr/disconnect`（ibkr）
- GET `/api/ibkr/account`（ibkr）
- GET `/api/ibkr/positions`（ibkr）
- GET `/api/ibkr/orders`（ibkr）
- POST `/api/ibkr/order`（ibkr）
- DELETE `/api/ibkr/order/<int:order_id>`（ibkr）
- GET `/api/ibkr/quote`（ibkr）
- GET `/api/indicator/getIndicators`（indicator）
- POST `/api/indicator/saveIndicator`（indicator）
- POST `/api/indicator/deleteIndicator`（indicator）
- GET `/api/indicator/getIndicatorParams`（indicator）
- POST `/api/indicator/verifyCode`（indicator）
- POST `/api/indicator/aiGenerate`（indicator）
- POST `/api/indicator/codeQualityHints`（indicator）
- POST `/api/indicator/parseStrategyConfig`（indicator）
- POST `/api/indicator/callIndicator`（indicator）
- GET `/api/indicator/kline`（kline）
- GET `/api/indicator/price`（kline）
- GET `/api/market/config`（market）
- GET `/api/market/types`（market）
- GET `/api/market/menuFooterConfig`（market）
- GET `/api/market/symbols/search`（market）
- GET `/api/market/symbols/hot`（market）
- GET `/api/market/watchlist/get`（market）
- POST `/api/market/watchlist/add`（market）
- POST `/api/market/watchlist/remove`（market）
- GET `/api/market/watchlist/prices`（market）
- GET `/api/market/price`（market）
- POST `/api/market/stock/name`（market）
- GET `/api/mt5/status`（mt5）
- POST `/api/mt5/connect`（mt5）
- POST `/api/mt5/disconnect`（mt5）
- GET `/api/mt5/account`（mt5）
- GET `/api/mt5/positions`（mt5）
- GET `/api/mt5/orders`（mt5）
- GET `/api/mt5/symbols`（mt5）
- POST `/api/mt5/order`（mt5）
- POST `/api/mt5/close`（mt5）
- DELETE `/api/mt5/order/<int:ticket>`（mt5）
- GET `/api/mt5/quote`（mt5）
- POST `/api/polymarket/analyze`（polymarket）
- GET `/api/polymarket/history`（polymarket）
- GET `/api/portfolio/positions`（portfolio）
- POST `/api/portfolio/positions`（portfolio）
- PUT `/api/portfolio/positions/<int:position_id>`（portfolio）
- DELETE `/api/portfolio/positions/<int:position_id>`（portfolio）
- GET `/api/portfolio/summary`（portfolio）
- GET `/api/portfolio/monitors`（portfolio）
- POST `/api/portfolio/monitors`（portfolio）
- PUT `/api/portfolio/monitors/<int:monitor_id>`（portfolio）
- DELETE `/api/portfolio/monitors/<int:monitor_id>`（portfolio）
- POST `/api/portfolio/monitors/<int:monitor_id>/run`（portfolio）
- GET `/api/portfolio/alerts`（portfolio）
- POST `/api/portfolio/alerts`（portfolio）
- PUT `/api/portfolio/alerts/<int:alert_id>`（portfolio）
- DELETE `/api/portfolio/alerts/<int:alert_id>`（portfolio）
- GET `/api/portfolio/groups`（portfolio）
- POST `/api/portfolio/groups/rename`（portfolio）
- POST `/api/quick-trade/place-order`（quick_trade）
- GET `/api/quick-trade/balance`（quick_trade）
- GET `/api/quick-trade/position`（quick_trade）
- POST `/api/quick-trade/close-position`（quick_trade）
- GET `/api/quick-trade/history`（quick_trade）
- GET `/api/settings/schema`（settings）
- GET `/api/settings/public-config`（settings）
- GET `/api/settings/values`（settings）
- POST `/api/settings/save`（settings）
- GET `/api/settings/openrouter-balance`（settings）
- POST `/api/settings/test-connection`（settings）
- GET `/api/templates`（strategy）
- GET `/api/templates/<key>`（strategy）
- GET `/api/strategies`（strategy）
- GET `/api/strategies/detail`（strategy）
- POST `/api/strategies/backtest`（strategy）
- GET `/api/strategies/backtest/history`（strategy）
- GET `/api/strategies/backtest/get`（strategy）
- POST `/api/strategies/create`（strategy）
- POST `/api/strategies/batch-create`（strategy）
- POST `/api/strategies/batch-start`（strategy）
- POST `/api/strategies/batch-stop`（strategy）
- DELETE `/api/strategies/batch-delete`（strategy）
- PUT `/api/strategies/update`（strategy）
- DELETE `/api/strategies/delete`（strategy）
- GET `/api/strategies/trades`（strategy）
- GET `/api/strategies/positions`（strategy）
- GET `/api/strategies/equityCurve`（strategy）
- POST `/api/strategies/stop`（strategy）
- POST `/api/strategies/start`（strategy）
- POST `/api/strategies/test-connection`（strategy）
- POST `/api/strategies/get-symbols`（strategy）
- POST `/api/strategies/preview-compile`（strategy）
- GET `/api/strategies/notifications`（strategy）
- GET `/api/strategies/notifications/unread-count`（strategy）
- POST `/api/strategies/notifications/read`（strategy）
- POST `/api/strategies/notifications/read-all`（strategy）
- DELETE `/api/strategies/notifications/clear`（strategy）
- POST `/api/strategies/verify-code`（strategy）
- POST `/api/strategies/ai-generate`（strategy）
- GET `/api/strategies/performance`（strategy）
- GET `/api/strategies/logs`（strategy）
- GET `/api/users/list`（user）
- GET `/api/users/export`（user）
- GET `/api/users/detail`（user）
- POST `/api/users/create`（user）
- PUT `/api/users/update`（user）
- DELETE `/api/users/delete`（user）
- POST `/api/users/reset-password`（user）
- GET `/api/users/roles`（user）
- POST `/api/users/set-credits`（user）
- POST `/api/users/set-vip`（user）
- GET `/api/users/credits-log`（user）
- GET `/api/users/profile`（user）
- PUT `/api/users/profile/update`（user）
- GET `/api/users/my-credits-log`（user）
- GET `/api/users/my-referrals`（user）
- GET `/api/users/notification-settings`（user）
- PUT `/api/users/notification-settings`（user）
- GET `/api/users/chart-templates`（user）
- POST `/api/users/chart-templates`（user）
- DELETE `/api/users/chart-templates`（user）
- POST `/api/users/notification-settings/test`（user）
- POST `/api/users/change-password`（user）
- GET `/api/users/system-strategies`（user）
- GET `/api/users/admin-orders`（user）
- GET `/api/users/admin-ai-stats`（user）

### 移除接口

- 无

### 修改接口

- 无

## 按模块分组接口详情

### ai_chat（3）

#### GET /api/ai/chat/history

- 认证级别：公开
- 描述：Return empty history (compatibility stub).
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/ai_chat.py:36`

请求参数：

无

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### POST /api/ai/chat/history/save

- 认证级别：公开
- 描述：No-op save (compatibility stub).
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/ai_chat.py:42`

请求参数：

无

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### POST /api/ai/chat/message

- 认证级别：公开
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/ai_chat.py:16`

请求参数：

无

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

### auth（13）

#### GET /api/auth/info

- 认证级别：登录认证
- 描述：Get current user info.
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/auth.py:1029`

请求参数：

无

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### GET /api/auth/oauth/github

- 认证级别：公开
- 描述：Redirect to GitHub OAuth authorization page
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/auth.py:932`

请求参数：

无

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### GET /api/auth/oauth/github/callback

- 认证级别：公开
- 描述：Handle GitHub OAuth callback
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/auth.py:950`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| code | 待确认 | query | 否 | - | 查询参数 |
| state | 待确认 | query | 否 | - | 查询参数 |
| error | 待确认 | query | 否 | - | 查询参数 |

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### GET /api/auth/oauth/google

- 认证级别：公开
- 描述：Redirect to Google OAuth authorization page
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/auth.py:846`

请求参数：

无

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### GET /api/auth/oauth/google/callback

- 认证级别：公开
- 描述：Handle Google OAuth callback
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/auth.py:864`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| code | 待确认 | query | 否 | - | 查询参数 |
| state | 待确认 | query | 否 | - | 查询参数 |
| error | 待确认 | query | 否 | - | 查询参数 |

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### GET /api/auth/security-config

- 认证级别：公开
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/auth.py:66`

请求参数：

无

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### POST /api/auth/change-password

- 认证级别：登录认证
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/auth.py:780`

请求参数：

无

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### POST /api/auth/login

- 认证级别：公开
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/auth.py:91`

请求参数：

无

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### POST /api/auth/login-code

- 认证级别：公开
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/auth.py:236`

请求参数：

无

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### POST /api/auth/logout

- 认证级别：公开
- 描述：Logout (client removes token; server is stateless).
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/auth.py:1022`

请求参数：

无

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### POST /api/auth/register

- 认证级别：公开
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/auth.py:532`

请求参数：

无

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### POST /api/auth/reset-password

- 认证级别：公开
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/auth.py:705`

请求参数：

无

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### POST /api/auth/send-code

- 认证级别：公开
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/auth.py:442`

请求参数：

无

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

### backtest（5）

#### GET /api/indicator/backtest/get

- 认证级别：登录认证
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/backtest.py:416`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| runId | 待确认 | query | 否 | - | 查询参数 |

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### GET /api/indicator/backtest/history

- 认证级别：登录认证
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/backtest.py:369`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| limit | 待确认 | query | 否 | - | 查询参数 |
| offset | 待确认 | query | 否 | - | 查询参数 |
| indicatorId | 待确认 | query | 否 | - | 查询参数 |
| strategyId | 待确认 | query | 否 | - | 查询参数 |
| runType | 待确认 | query | 否 | - | 查询参数 |
| symbol | 待确认 | query | 否 | - | 查询参数 |
| market | 待确认 | query | 否 | - | 查询参数 |
| timeframe | 待确认 | query | 否 | - | 查询参数 |

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### GET /api/indicator/backtest/precision-info

- 认证级别：公开
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/backtest.py:111`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| market | 待确认 | query | 否 | 'crypto' | 查询参数 |
| startDate | 待确认 | query | 否 | '' | 查询参数 |
| endDate | 待确认 | query | 否 | '' | 查询参数 |

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### POST /api/indicator/backtest

- 认证级别：登录认证
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/backtest.py:149`

请求参数：

无

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### POST /api/indicator/backtest/aiAnalyze

- 认证级别：登录认证
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/backtest.py:656`

请求参数：

无

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

### billing（4）

#### GET /api/billing/plans

- 认证级别：登录认证
- 描述：Get membership plan configuration + current user's billing snapshot.
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/billing.py:23`

请求参数：

无

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### GET /api/billing/usdt/order/<int:order_id>

- 认证级别：登录认证
- 描述：Get my USDT order; refresh chain status by default.
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/billing.py:93`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| order_id | integer | path | 是 | - | 路径参数 |
| refresh | 待确认 | query | 否 | "1" | 查询参数 |

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### POST /api/billing/purchase

- 认证级别：登录认证
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/billing.py:38`

请求参数：

无

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### POST /api/billing/usdt/create

- 认证级别：登录认证
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/billing.py:68`

请求参数：

无

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

### community（15）

#### DELETE /api/community/admin/indicators/<int:indicator_id>

- 认证级别：登录认证
- 描述：删除指标（管理员专用）
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/community.py:442`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| indicator_id | integer | path | 是 | - | 路径参数 |

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### GET /api/community/admin/pending-indicators

- 认证级别：登录认证
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/community.py:318`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| page | 待确认 | query | 否 | 1 | 查询参数 |
| page_size | 待确认 | query | 否 | 20 | 查询参数 |
| review_status | 待确认 | query | 否 | 'pending' | 查询参数 |

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### GET /api/community/admin/review-stats

- 认证级别：登录认证
- 描述：获取审核统计数据（管理员专用）
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/community.py:352`

请求参数：

无

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### GET /api/community/indicators

- 认证级别：登录认证
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/community.py:24`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| page | 待确认 | query | 否 | 1 | 查询参数 |
| page_size | 待确认 | query | 否 | 12 | 查询参数 |
| keyword | 待确认 | query | 否 | '' | 查询参数 |
| pricing_type | 待确认 | query | 否 | '' | 查询参数 |
| sort_by | 待确认 | query | 否 | 'newest' | 查询参数 |

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### GET /api/community/indicators/<int:indicator_id>

- 认证级别：登录认证
- 描述：获取指标详情
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/community.py:64`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| indicator_id | integer | path | 是 | - | 路径参数 |

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### GET /api/community/indicators/<int:indicator_id>/comments

- 认证级别：登录认证
- 描述：获取指标评论列表
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/community.py:179`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| indicator_id | integer | path | 是 | - | 路径参数 |
| page | 待确认 | query | 否 | 1 | 查询参数 |
| page_size | 待确认 | query | 否 | 20 | 查询参数 |

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### GET /api/community/indicators/<int:indicator_id>/my-comment

- 认证级别：登录认证
- 描述：获取当前用户对指定指标的评论（用于编辑）
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/community.py:271`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| indicator_id | integer | path | 是 | - | 路径参数 |

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### GET /api/community/indicators/<int:indicator_id>/performance

- 认证级别：登录认证
- 描述：获取指标的实盘表现统计
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/community.py:293`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| indicator_id | integer | path | 是 | - | 路径参数 |

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### GET /api/community/my-purchases

- 认证级别：登录认证
- 描述：获取我购买的指标列表
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/community.py:152`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| page | 待确认 | query | 否 | 1 | 查询参数 |
| page_size | 待确认 | query | 否 | 20 | 查询参数 |

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### POST /api/community/admin/indicators/<int:indicator_id>/review

- 认证级别：登录认证
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/community.py:370`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| indicator_id | integer | path | 是 | - | 路径参数 |

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### POST /api/community/admin/indicators/<int:indicator_id>/unpublish

- 认证级别：登录认证
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/community.py:409`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| indicator_id | integer | path | 是 | - | 路径参数 |

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### POST /api/community/indicators/<int:indicator_id>/comments

- 认证级别：登录认证
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/community.py:202`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| indicator_id | integer | path | 是 | - | 路径参数 |

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### POST /api/community/indicators/<int:indicator_id>/purchase

- 认证级别：登录认证
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/community.py:86`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| indicator_id | integer | path | 是 | - | 路径参数 |

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### POST /api/community/indicators/<int:indicator_id>/sync

- 认证级别：登录认证
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/community.py:115`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| indicator_id | integer | path | 是 | - | 路径参数 |

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### PUT /api/community/indicators/<int:indicator_id>/comments/<int:comment_id>

- 认证级别：登录认证
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/community.py:237`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| indicator_id | integer | path | 是 | - | 路径参数 |
| comment_id | integer | path | 是 | - | 路径参数 |

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

### credentials（5）

#### DELETE /api/credentials/delete

- 认证级别：登录认证
- 描述：Delete a credential for the current user.
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/credentials.py:200`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| id | 待确认 | query | 否 | type=int | 查询参数 |

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### GET /api/credentials/egress-ip

- 认证级别：登录认证
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/credentials.py:94`

请求参数：

无

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### GET /api/credentials/get

- 认证级别：登录认证
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/credentials.py:226`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| id | 待确认 | query | 否 | type=int | 查询参数 |

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### GET /api/credentials/list

- 认证级别：登录认证
- 描述：List all credentials for the current user.
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/credentials.py:34`

请求参数：

无

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### POST /api/credentials/create

- 认证级别：登录认证
- 描述：Create a new credential for the current user.
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/credentials.py:117`

请求参数：

无

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

### dashboard（3）

#### DELETE /api/dashboard/pendingOrders/<int:order_id>

- 认证级别：登录认证
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/dashboard.py:715`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| order_id | integer | path | 是 | - | 路径参数 |

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### GET /api/dashboard/pendingOrders

- 认证级别：登录认证
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/dashboard.py:596`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| page | 待确认 | query | 否 | - | 查询参数 |
| pageSize | 待确认 | query | 否 | - | 查询参数 |

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### GET /api/dashboard/summary

- 认证级别：登录认证
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/dashboard.py:309`

请求参数：

无

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

### experiment（6）

#### POST /api/experiment/ai-optimize

- 认证级别：登录认证
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/experiment.py:63`

请求参数：

无

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### POST /api/experiment/ai-optimize-sync

- 认证级别：登录认证
- 描述：Non-streaming version (simpler client integration).
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/experiment.py:120`

请求参数：

无

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### POST /api/experiment/pipeline/run

- 认证级别：登录认证
- 描述：Legacy grid-search pipeline (kept for backward compat).
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/experiment.py:44`

请求参数：

无

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### POST /api/experiment/regime/detect

- 认证级别：登录认证
- 描述：Detect the current market regime for a symbol/timeframe/date range.
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/experiment.py:23`

请求参数：

无

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### POST /api/experiment/save-strategy

- 认证级别：登录认证
- 描述：Save the best experiment candidate as a strategy record.
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/experiment.py:163`

请求参数：

无

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### POST /api/experiment/structured-tune

- 认证级别：登录认证
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/experiment.py:139`

请求参数：

无

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

### fast_analysis（8）

#### DELETE /api/fast-analysis/history/<int:memory_id>

- 认证级别：登录认证
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/fast_analysis.py:536`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| memory_id | integer | path | 是 | - | 路径参数 |

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### GET /api/fast-analysis/history

- 认证级别：登录认证
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/fast_analysis.py:456`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| market | 待确认 | query | 否 | '' | 查询参数 |
| symbol | 待确认 | query | 否 | '' | 查询参数 |
| days | 待确认 | query | 否 | 7 | 查询参数 |
| limit | 待确认 | query | 否 | 10 | 查询参数 |

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### GET /api/fast-analysis/history/all

- 认证级别：登录认证
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/fast_analysis.py:498`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| page | 待确认 | query | 否 | 1 | 查询参数 |
| pagesize | 待确认 | query | 否 | 20 | 查询参数 |

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### GET /api/fast-analysis/performance

- 认证级别：登录认证
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/fast_analysis.py:624`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| market | 待确认 | query | 否 | '' | 查询参数 |
| symbol | 待确认 | query | 否 | '' | 查询参数 |
| days | 待确认 | query | 否 | 30 | 查询参数 |

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### GET /api/fast-analysis/similar-patterns

- 认证级别：登录认证
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/fast_analysis.py:655`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| market | 待确认 | query | 否 | '' | 查询参数 |
| symbol | 待确认 | query | 否 | '' | 查询参数 |

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### POST /api/fast-analysis/analyze

- 认证级别：登录认证
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/fast_analysis.py:115`

请求参数：

无

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### POST /api/fast-analysis/analyze-legacy

- 认证级别：登录认证
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/fast_analysis.py:315`

请求参数：

无

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### POST /api/fast-analysis/feedback

- 认证级别：登录认证
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/fast_analysis.py:573`

请求参数：

无

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

### global_market（7）

#### GET /api/global-market/calendar

- 认证级别：登录认证
- 描述：Get economic calendar events with impact indicators.
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/global_market.py:156`

请求参数：

无

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### GET /api/global-market/heatmap

- 认证级别：登录认证
- 描述：Get market heatmap data for crypto, stock sectors, forex, and indices.
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/global_market.py:115`

请求参数：

无

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### GET /api/global-market/news

- 认证级别：登录认证
- 描述：Get financial news from various sources.  Query params: lang ('cn'|'en'|'all').
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/global_market.py:134`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| lang | 待确认 | query | 否 | "all" | 查询参数 |

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### GET /api/global-market/opportunities

- 认证级别：登录认证
- 描述：Scan for trading opportunities across Crypto, US/CN/HK Stocks, and Forex.
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/global_market.py:234`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| force | 待确认 | query | 否 | "" | 查询参数 |

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### GET /api/global-market/overview

- 认证级别：登录认证
- 描述：Get global market overview including indices, forex, crypto, and commodities.
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/global_market.py:58`

请求参数：

无

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### GET /api/global-market/sentiment

- 认证级别：登录认证
- 描述：Get comprehensive market sentiment indicators.
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/global_market.py:175`

请求参数：

无

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### POST /api/global-market/refresh

- 认证级别：登录认证
- 描述：Force refresh all market data (clears cache).
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/global_market.py:279`

请求参数：

无

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

### health（3）

#### GET /

- 认证级别：公开
- 描述：API 首页
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/health.py:11`

请求参数：

无

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### GET /api/health

- 认证级别：公开
- 描述：兼容路径：用于容器健康检查/反代探针等场景。
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/health.py:31`

请求参数：

无

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### GET /health

- 认证级别：公开
- 描述：健康检查
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/health.py:22`

请求参数：

无

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

### ibkr（9）

#### DELETE /api/ibkr/order/<int:order_id>

- 认证级别：公开
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/ibkr.py:316`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| order_id | integer | path | 是 | - | 路径参数 |

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### GET /api/ibkr/account

- 认证级别：公开
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/ibkr.py:144`

请求参数：

无

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### GET /api/ibkr/orders

- 认证级别：公开
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/ibkr.py:199`

请求参数：

无

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### GET /api/ibkr/positions

- 认证级别：公开
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/ibkr.py:171`

请求参数：

无

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### GET /api/ibkr/quote

- 认证级别：公开
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/ibkr.py:354`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| symbol | 待确认 | query | 否 | - | 查询参数 |
| marketType | 待确认 | query | 否 | 'USStock' | 查询参数 |

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### GET /api/ibkr/status

- 认证级别：公开
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/ibkr.py:32`

请求参数：

无

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### POST /api/ibkr/connect

- 认证级别：公开
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/ibkr.py:53`

请求参数：

无

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### POST /api/ibkr/disconnect

- 认证级别：公开
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/ibkr.py:114`

请求参数：

无

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### POST /api/ibkr/order

- 认证级别：公开
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/ibkr.py:229`

请求参数：

无

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

### indicator（9）

#### GET /api/indicator/getIndicatorParams

- 认证级别：登录认证
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/indicator.py:633`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| indicator_id | 待确认 | query | 否 | - | 查询参数 |

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### GET /api/indicator/getIndicators

- 认证级别：登录认证
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/indicator.py:413`

请求参数：

无

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### POST /api/indicator/aiGenerate

- 认证级别：登录认证
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/indicator.py:719`

请求参数：

无

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### POST /api/indicator/callIndicator

- 认证级别：登录认证
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/indicator.py:1227`

请求参数：

无

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### POST /api/indicator/codeQualityHints

- 认证级别：登录认证
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/indicator.py:1187`

请求参数：

无

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### POST /api/indicator/deleteIndicator

- 认证级别：登录认证
- 描述：Delete an indicator by id for the current user.
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/indicator.py:607`

请求参数：

无

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### POST /api/indicator/parseStrategyConfig

- 认证级别：登录认证
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/indicator.py:1204`

请求参数：

无

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### POST /api/indicator/saveIndicator

- 认证级别：登录认证
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/indicator.py:455`

请求参数：

无

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### POST /api/indicator/verifyCode

- 认证级别：登录认证
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/indicator.py:675`

请求参数：

无

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

### kline（2）

#### GET /api/indicator/kline

- 认证级别：公开
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/kline.py:18`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| market | 待确认 | query | 否 | 'USStock' | 查询参数 |
| symbol | 待确认 | query | 否 | '' | 查询参数 |
| timeframe | 待确认 | query | 否 | '1D' | 查询参数 |
| limit | 待确认 | query | 否 | 300 | 查询参数 |
| before_time | 待确认 | query | 否 | - | 查询参数 |
| beforeTime | 待确认 | query | 否 | - | 查询参数 |

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### GET /api/indicator/price

- 认证级别：公开
- 描述：获取最新价格
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/kline.py:88`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| market | 待确认 | query | 否 | 'USStock' | 查询参数 |
| symbol | 待确认 | query | 否 | '' | 查询参数 |

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

### market（11）

#### GET /api/market/config

- 认证级别：公开
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/market.py:54`

请求参数：

无

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### GET /api/market/menuFooterConfig

- 认证级别：公开
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/market.py:139`

请求参数：

无

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### GET /api/market/price

- 认证级别：公开
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/market.py:477`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| market | 待确认 | query | 否 | '' | 查询参数 |
| symbol | 待确认 | query | 否 | '' | 查询参数 |

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### GET /api/market/symbols/hot

- 认证级别：公开
- 描述：Return a small curated hot list per market (local-only).
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/market.py:244`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| market | 待确认 | query | 否 | - | 查询参数 |
| limit | 待确认 | query | 否 | - | 查询参数 |

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### GET /api/market/symbols/search

- 认证级别：公开
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/market.py:164`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| market | 待确认 | query | 否 | - | 查询参数 |
| keyword | 待确认 | query | 否 | - | 查询参数 |
| limit | 待确认 | query | 否 | - | 查询参数 |

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### GET /api/market/types

- 认证级别：公开
- 描述：Return supported market types for the add-watchlist modal.
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/market.py:94`

请求参数：

无

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### GET /api/market/watchlist/get

- 认证级别：登录认证
- 描述：Get watchlist for the current user.
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/market.py:257`

请求参数：

无

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### GET /api/market/watchlist/prices

- 认证级别：公开
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/market.py:389`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| watchlist | 待确认 | query | 否 | '[]' | 查询参数 |

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### POST /api/market/stock/name

- 认证级别：公开
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/market.py:514`

请求参数：

无

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### POST /api/market/watchlist/add

- 认证级别：登录认证
- 描述：Add a symbol to watchlist for the current user.
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/market.py:300`

请求参数：

无

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### POST /api/market/watchlist/remove

- 认证级别：登录认证
- 描述：Remove a symbol from watchlist for the current user.
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/market.py:339`

请求参数：

无

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

### mt5（11）

#### DELETE /api/mt5/order/<int:ticket>

- 认证级别：公开
- 描述：Cancel a pending order.
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/mt5.py:351`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| ticket | integer | path | 是 | - | 路径参数 |

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### GET /api/mt5/account

- 认证级别：公开
- 描述：Get account information.
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/mt5.py:158`

请求参数：

无

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### GET /api/mt5/orders

- 认证级别：公开
- 描述：Get pending orders.
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/mt5.py:189`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| symbol | 待确认 | query | 否 | - | 查询参数 |

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### GET /api/mt5/positions

- 认证级别：公开
- 描述：Get open positions.
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/mt5.py:173`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| symbol | 待确认 | query | 否 | - | 查询参数 |

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### GET /api/mt5/quote

- 认证级别：公开
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/mt5.py:371`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| symbol | 待确认 | query | 否 | - | 查询参数 |

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### GET /api/mt5/status

- 认证级别：公开
- 描述：Get MT5 connection status.
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/mt5.py:49`

请求参数：

无

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### GET /api/mt5/symbols

- 认证级别：公开
- 描述：Get available symbols.
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/mt5.py:205`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| group | 待确认 | query | 否 | "*" | 查询参数 |

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### POST /api/mt5/close

- 认证级别：公开
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/mt5.py:299`

请求参数：

无

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### POST /api/mt5/connect

- 认证级别：公开
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/mt5.py:68`

请求参数：

无

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### POST /api/mt5/disconnect

- 认证级别：公开
- 描述：Disconnect from MT5 terminal.
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/mt5.py:141`

请求参数：

无

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### POST /api/mt5/order

- 认证级别：公开
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/mt5.py:223`

请求参数：

无

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

### polymarket（2）

#### GET /api/polymarket/history

- 认证级别：登录认证
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/polymarket.py:233`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| page | 待确认 | query | 否 | 1, type=int | 查询参数 |
| page_size | 待确认 | query | 否 | 20, type=int | 查询参数 |

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### POST /api/polymarket/analyze

- 认证级别：登录认证
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/polymarket.py:24`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| model | 待确认 | body | 否 | - | JSON 请求体参数 |

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

### portfolio（16）

#### DELETE /api/portfolio/alerts/<int:alert_id>

- 认证级别：登录认证
- 描述：Delete an alert for the current user.
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/portfolio.py:1006`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| alert_id | integer | path | 是 | - | 路径参数 |

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### DELETE /api/portfolio/monitors/<int:monitor_id>

- 认证级别：登录认证
- 描述：Delete a monitor for the current user.
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/portfolio.py:708`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| monitor_id | integer | path | 是 | - | 路径参数 |

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### DELETE /api/portfolio/positions/<int:position_id>

- 认证级别：登录认证
- 描述：Delete a position for the current user.
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/portfolio.py:381`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| position_id | integer | path | 是 | - | 路径参数 |

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### GET /api/portfolio/alerts

- 认证级别：登录认证
- 描述：Get all position alerts for the current user.
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/portfolio.py:795`

请求参数：

无

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### GET /api/portfolio/groups

- 认证级别：登录认证
- 描述：Get list of all groups with position counts for the current user.
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/portfolio.py:1030`

请求参数：

无

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### GET /api/portfolio/monitors

- 认证级别：登录认证
- 描述：Get all position monitors for the current user.
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/portfolio.py:525`

请求参数：

无

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### GET /api/portfolio/positions

- 认证级别：登录认证
- 描述：Get all manual positions with current prices for the current user.
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/portfolio.py:144`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| refresh | 待确认 | query | 否 | '' | 查询参数 |

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### GET /api/portfolio/summary

- 认证级别：登录认证
- 描述：Get portfolio summary with total value, PnL, and market distribution for the current user.
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/portfolio.py:403`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| refresh | 待确认 | query | 否 | '' | 查询参数 |

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### POST /api/portfolio/alerts

- 认证级别：登录认证
- 描述：Add a new position alert for the current user.
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/portfolio.py:848`

请求参数：

无

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### POST /api/portfolio/groups/rename

- 认证级别：登录认证
- 描述：Rename a group for the current user.
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/portfolio.py:1082`

请求参数：

无

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### POST /api/portfolio/monitors

- 认证级别：登录认证
- 描述：Add a new position monitor for the current user.
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/portfolio.py:571`

请求参数：

无

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### POST /api/portfolio/monitors/<int:monitor_id>/run

- 认证级别：登录认证
- 描述：Manually trigger a monitor to run immediately.
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/portfolio.py:730`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| monitor_id | integer | path | 是 | - | 路径参数 |

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### POST /api/portfolio/positions

- 认证级别：登录认证
- 描述：Add a new manual position for the current user.
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/portfolio.py:249`

请求参数：

无

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### PUT /api/portfolio/alerts/<int:alert_id>

- 认证级别：登录认证
- 描述：Update an existing alert for the current user.
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/portfolio.py:943`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| alert_id | integer | path | 是 | - | 路径参数 |

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### PUT /api/portfolio/monitors/<int:monitor_id>

- 认证级别：登录认证
- 描述：Update an existing monitor for the current user.
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/portfolio.py:639`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| monitor_id | integer | path | 是 | - | 路径参数 |

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### PUT /api/portfolio/positions/<int:position_id>

- 认证级别：登录认证
- 描述：Update an existing position for the current user.
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/portfolio.py:312`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| position_id | integer | path | 是 | - | 路径参数 |

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

### quick_trade（5）

#### GET /api/quick-trade/balance

- 认证级别：登录认证
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/quick_trade.py:650`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| credential_id | 待确认 | query | 否 | type=int | 查询参数 |
| market_type | 待确认 | query | 否 | "swap" | 查询参数 |

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### GET /api/quick-trade/history

- 认证级别：登录认证
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/quick_trade.py:1495`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| limit | 待确认 | query | 否 | - | 查询参数 |
| offset | 待确认 | query | 否 | - | 查询参数 |

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### GET /api/quick-trade/position

- 认证级别：登录认证
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/quick_trade.py:1047`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| credential_id | 待确认 | query | 否 | type=int | 查询参数 |
| symbol | 待确认 | query | 否 | "" | 查询参数 |
| market_type | 待确认 | query | 否 | "swap" | 查询参数 |

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### POST /api/quick-trade/close-position

- 认证级别：登录认证
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/quick_trade.py:1258`

请求参数：

无

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### POST /api/quick-trade/place-order

- 认证级别：登录认证
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/quick_trade.py:350`

请求参数：

无

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

### settings（6）

#### GET /api/settings/openrouter-balance

- 认证级别：管理员认证
- 描述：查询 OpenRouter 账户余额 (admin only)
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/settings.py:1043`

请求参数：

无

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### GET /api/settings/public-config

- 认证级别：登录认证
- 描述：Return non-sensitive config values needed by frontend widgets.
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/settings.py:942`

请求参数：

无

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### GET /api/settings/schema

- 认证级别：管理员认证
- 描述：获取配置项定义 (admin only)
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/settings.py:931`

请求参数：

无

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### GET /api/settings/values

- 认证级别：管理员认证
- 描述：获取当前配置值 - 包括敏感信息（真实值）(admin only)
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/settings.py:956`

请求参数：

无

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### POST /api/settings/save

- 认证级别：管理员认证
- 描述：保存配置 (admin only)
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/settings.py:982`

请求参数：

无

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### POST /api/settings/test-connection

- 认证级别：管理员认证
- 描述：测试API连接 (admin only)
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/settings.py:1121`

请求参数：

无

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

### strategy（31）

#### DELETE /api/strategies/batch-delete

- 认证级别：登录认证
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/strategy.py:645`

请求参数：

无

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### DELETE /api/strategies/delete

- 认证级别：登录认证
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/strategy.py:709`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| id | 待确认 | query | 否 | type=int | 查询参数 |

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### DELETE /api/strategies/notifications/clear

- 认证级别：登录认证
- 描述：Clear all notifications for the current user.
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/strategy.py:1474`

请求参数：

无

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### GET /api/strategies

- 认证级别：登录认证
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/strategy.py:297`

请求参数：

无

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### GET /api/strategies/backtest/get

- 认证级别：登录认证
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/strategy.py:482`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| runId | 待确认 | query | 否 | - | 查询参数 |

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### GET /api/strategies/backtest/history

- 认证级别：登录认证
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/strategy.py:452`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| strategyId | 待确认 | query | 否 | - | 查询参数 |
| id | 待确认 | query | 否 | - | 查询参数 |
| limit | 待确认 | query | 否 | - | 查询参数 |
| offset | 待确认 | query | 否 | - | 查询参数 |
| symbol | 待确认 | query | 否 | - | 查询参数 |
| market | 待确认 | query | 否 | - | 查询参数 |
| timeframe | 待确认 | query | 否 | - | 查询参数 |

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### GET /api/strategies/detail

- 认证级别：登录认证
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/strategy.py:313`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| id | 待确认 | query | 否 | type=int | 查询参数 |

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### GET /api/strategies/equityCurve

- 认证级别：登录认证
- 描述：Get equity curve for the current user's strategy.
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/strategy.py:961`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| id | 待确认 | query | 否 | type=int | 查询参数 |

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### GET /api/strategies/logs

- 认证级别：登录认证
- 描述：Get strategy running logs.
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/strategy.py:1971`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| id | 待确认 | query | 否 | - | 查询参数 |
| limit | 待确认 | query | 否 | 200 | 查询参数 |

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### GET /api/strategies/notifications

- 认证级别：登录认证
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/strategy.py:1273`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| id | 待确认 | query | 否 | type=int | 查询参数 |
| limit | 待确认 | query | 否 | type=int | 查询参数 |
| since_id | 待确认 | query | 否 | type=int | 查询参数 |

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### GET /api/strategies/notifications/unread-count

- 认证级别：登录认证
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/strategy.py:1369`

请求参数：

无

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### GET /api/strategies/performance

- 认证级别：登录认证
- 描述：Get strategy performance metrics (aggregated from equity curve and trades).
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/strategy.py:1939`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| id | 待确认 | query | 否 | type=int | 查询参数 |

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### GET /api/strategies/positions

- 认证级别：登录认证
- 描述：Get position records for the current user's strategy.
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/strategy.py:787`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| id | 待确认 | query | 否 | type=int | 查询参数 |

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### GET /api/strategies/trades

- 认证级别：登录认证
- 描述：Get trade records for the current user's strategy.
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/strategy.py:725`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| id | 待确认 | query | 否 | type=int | 查询参数 |

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### GET /api/templates

- 认证级别：登录认证
- 描述：Return pre-built strategy templates for one-click import.
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/strategy.py:253`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| category | 待确认 | query | 否 | - | 查询参数 |
| difficulty | 待确认 | query | 否 | - | 查询参数 |

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### GET /api/templates/<key>

- 认证级别：登录认证
- 描述：Return a single strategy template by key.
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/strategy.py:267`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| key | string | path | 是 | - | 路径参数 |

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### POST /api/strategies/ai-generate

- 认证级别：登录认证
- 描述：Generate strategy code or suggest template parameter updates using AI.
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/strategy.py:1518`

请求参数：

无

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### POST /api/strategies/backtest

- 认证级别：登录认证
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/strategy.py:331`

请求参数：

无

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### POST /api/strategies/batch-create

- 认证级别：登录认证
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/strategy.py:517`

请求参数：

无

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### POST /api/strategies/batch-start

- 认证级别：登录认证
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/strategy.py:554`

请求参数：

无

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### POST /api/strategies/batch-stop

- 认证级别：登录认证
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/strategy.py:600`

请求参数：

无

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### POST /api/strategies/create

- 认证级别：登录认证
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/strategy.py:500`

请求参数：

无

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### POST /api/strategies/get-symbols

- 认证级别：登录认证
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/strategy.py:1182`

请求参数：

无

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### POST /api/strategies/notifications/read

- 认证级别：登录认证
- 描述：Mark a single notification as read for the current user.
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/strategy.py:1416`

请求参数：

无

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### POST /api/strategies/notifications/read-all

- 认证级别：登录认证
- 描述：Mark all notifications as read for the current user.
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/strategy.py:1449`

请求参数：

无

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### POST /api/strategies/preview-compile

- 认证级别：登录认证
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/strategy.py:1226`

请求参数：

无

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### POST /api/strategies/start

- 认证级别：登录认证
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/strategy.py:1039`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| id | 待确认 | query | 否 | type=int | 查询参数 |

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### POST /api/strategies/stop

- 认证级别：登录认证
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/strategy.py:985`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| id | 待确认 | query | 否 | type=int | 查询参数 |

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### POST /api/strategies/test-connection

- 认证级别：登录认证
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/strategy.py:1103`

请求参数：

无

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### POST /api/strategies/verify-code

- 认证级别：登录认证
- 描述：Verify script strategy code syntax and safety.
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/strategy.py:1501`

请求参数：

无

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### PUT /api/strategies/update

- 认证级别：登录认证
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/strategy.py:690`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| id | 待确认 | query | 否 | type=int | 查询参数 |

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

### user（25）

#### DELETE /api/users/chart-templates

- 认证级别：登录认证
- 描述：Delete a user's chart template by id.
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/user.py:904`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| template_id | 待确认 | query | 否 | - | 查询参数 |

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### DELETE /api/users/delete

- 认证级别：管理员认证
- 描述：Delete a user (admin only)
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/user.py:211`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| id | 待确认 | query | 否 | type=int | 查询参数 |

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### GET /api/users/admin-ai-stats

- 认证级别：管理员认证
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/user.py:1687`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| page | 待确认 | query | 否 | 1, type=int | 查询参数 |
| page_size | 待确认 | query | 否 | 20, type=int | 查询参数 |
| search | 待确认 | query | 否 | '', type=str | 查询参数 |

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### GET /api/users/admin-orders

- 认证级别：管理员认证
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/user.py:1481`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| page | 待确认 | query | 否 | 1, type=int | 查询参数 |
| page_size | 待确认 | query | 否 | 20, type=int | 查询参数 |
| status | 待确认 | query | 否 | '', type=str | 查询参数 |
| search | 待确认 | query | 否 | '', type=str | 查询参数 |

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### GET /api/users/chart-templates

- 认证级别：登录认证
- 描述：Get current user's indicator chart templates.
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/user.py:764`

请求参数：

无

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### GET /api/users/credits-log

- 认证级别：管理员认证
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/user.py:390`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| user_id | 待确认 | query | 否 | type=int | 查询参数 |
| page | 待确认 | query | 否 | 1, type=int | 查询参数 |
| page_size | 待确认 | query | 否 | 20, type=int | 查询参数 |

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### GET /api/users/detail

- 认证级别：管理员认证
- 描述：Get user detail by ID (admin only)
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/user.py:122`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| id | 待确认 | query | 否 | type=int | 查询参数 |

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### GET /api/users/export

- 认证级别：管理员认证
- 描述：Export all users as an Excel-friendly CSV file (admin only).
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/user.py:74`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| search | 待确认 | query | 否 | '', type=str | 查询参数 |

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### GET /api/users/list

- 认证级别：管理员认证
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/user.py:44`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| page | 待确认 | query | 否 | 1, type=int | 查询参数 |
| page_size | 待确认 | query | 否 | 20, type=int | 查询参数 |
| search | 待确认 | query | 否 | '', type=str | 查询参数 |

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### GET /api/users/my-credits-log

- 认证级别：登录认证
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/user.py:529`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| page | 待确认 | query | 否 | 1, type=int | 查询参数 |
| page_size | 待确认 | query | 否 | 20, type=int | 查询参数 |

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### GET /api/users/my-referrals

- 认证级别：登录认证
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/user.py:558`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| page | 待确认 | query | 否 | 1, type=int | 查询参数 |
| page_size | 待确认 | query | 否 | 20, type=int | 查询参数 |

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### GET /api/users/notification-settings

- 认证级别：登录认证
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/user.py:640`

请求参数：

无

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### GET /api/users/profile

- 认证级别：登录认证
- 描述：Get current user's profile with billing info and notification settings
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/user.py:422`

请求参数：

无

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### GET /api/users/roles

- 认证级别：管理员认证
- 描述：Get available roles and their permissions
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/user.py:271`

请求参数：

无

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### GET /api/users/system-strategies

- 认证级别：管理员认证
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/user.py:1119`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| page | 待确认 | query | 否 | 1, type=int | 查询参数 |
| page_size | 待确认 | query | 否 | 20, type=int | 查询参数 |
| status | 待确认 | query | 否 | '', type=str | 查询参数 |
| execution_mode | 待确认 | query | 否 | '', type=str | 查询参数 |
| search | 待确认 | query | 否 | '', type=str | 查询参数 |
| sort_by | 待确认 | query | 否 | '', type=str | 查询参数 |
| sort_order | 待确认 | query | 否 | 'desc', type=str | 查询参数 |

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### POST /api/users/change-password

- 认证级别：登录认证
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/user.py:1028`

请求参数：

无

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### POST /api/users/chart-templates

- 认证级别：登录认证
- 描述：Create or update a user's indicator chart template.
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/user.py:801`

请求参数：

无

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### POST /api/users/create

- 认证级别：管理员认证
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/user.py:146`

请求参数：

无

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### POST /api/users/notification-settings/test

- 认证级别：登录认证
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/user.py:949`

请求参数：

无

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### POST /api/users/reset-password

- 认证级别：管理员认证
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/user.py:236`

请求参数：

无

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### POST /api/users/set-credits

- 认证级别：管理员认证
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/user.py:295`

请求参数：

无

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### POST /api/users/set-vip

- 认证级别：管理员认证
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/user.py:333`

请求参数：

无

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### PUT /api/users/notification-settings

- 认证级别：登录认证
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/user.py:696`

请求参数：

无

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### PUT /api/users/profile/update

- 认证级别：登录认证
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/user.py:477`

请求参数：

无

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

#### PUT /api/users/update

- 认证级别：管理员认证
- 描述：待补充接口说明
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/user.py:177`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| id | 待确认 | query | 否 | type=int | 查询参数 |

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "success": true,
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "success": false, "message": "未授权" }
```
- 403
```json
{ "success": false, "message": "无权限" }
```
- 500
```json
{ "success": false, "message": "服务器异常" }
```

## 全量接口索引表

| 方法 | 路径 | 模块 | 认证 | 描述 |
|---|---|---|---|---|
| DELETE | `/api/community/admin/indicators/<int:indicator_id>` | community | 登录认证 | 删除指标（管理员专用） |
| DELETE | `/api/credentials/delete` | credentials | 登录认证 | Delete a credential for the current user. |
| DELETE | `/api/dashboard/pendingOrders/<int:order_id>` | dashboard | 登录认证 | 待补充接口说明 |
| DELETE | `/api/fast-analysis/history/<int:memory_id>` | fast_analysis | 登录认证 | 待补充接口说明 |
| DELETE | `/api/ibkr/order/<int:order_id>` | ibkr | 公开 | 待补充接口说明 |
| DELETE | `/api/mt5/order/<int:ticket>` | mt5 | 公开 | Cancel a pending order. |
| DELETE | `/api/portfolio/alerts/<int:alert_id>` | portfolio | 登录认证 | Delete an alert for the current user. |
| DELETE | `/api/portfolio/monitors/<int:monitor_id>` | portfolio | 登录认证 | Delete a monitor for the current user. |
| DELETE | `/api/portfolio/positions/<int:position_id>` | portfolio | 登录认证 | Delete a position for the current user. |
| DELETE | `/api/strategies/batch-delete` | strategy | 登录认证 | 待补充接口说明 |
| DELETE | `/api/strategies/delete` | strategy | 登录认证 | 待补充接口说明 |
| DELETE | `/api/strategies/notifications/clear` | strategy | 登录认证 | Clear all notifications for the current user. |
| DELETE | `/api/users/chart-templates` | user | 登录认证 | Delete a user's chart template by id. |
| DELETE | `/api/users/delete` | user | 管理员认证 | Delete a user (admin only) |
| GET | `/` | health | 公开 | API 首页 |
| GET | `/api/ai/chat/history` | ai_chat | 公开 | Return empty history (compatibility stub). |
| GET | `/api/auth/info` | auth | 登录认证 | Get current user info. |
| GET | `/api/auth/oauth/github/callback` | auth | 公开 | Handle GitHub OAuth callback |
| GET | `/api/auth/oauth/github` | auth | 公开 | Redirect to GitHub OAuth authorization page |
| GET | `/api/auth/oauth/google/callback` | auth | 公开 | Handle Google OAuth callback |
| GET | `/api/auth/oauth/google` | auth | 公开 | Redirect to Google OAuth authorization page |
| GET | `/api/auth/security-config` | auth | 公开 | 待补充接口说明 |
| GET | `/api/billing/plans` | billing | 登录认证 | Get membership plan configuration + current user's billing snapshot. |
| GET | `/api/billing/usdt/order/<int:order_id>` | billing | 登录认证 | Get my USDT order; refresh chain status by default. |
| GET | `/api/community/admin/pending-indicators` | community | 登录认证 | 待补充接口说明 |
| GET | `/api/community/admin/review-stats` | community | 登录认证 | 获取审核统计数据（管理员专用） |
| GET | `/api/community/indicators/<int:indicator_id>/comments` | community | 登录认证 | 获取指标评论列表 |
| GET | `/api/community/indicators/<int:indicator_id>/my-comment` | community | 登录认证 | 获取当前用户对指定指标的评论（用于编辑） |
| GET | `/api/community/indicators/<int:indicator_id>/performance` | community | 登录认证 | 获取指标的实盘表现统计 |
| GET | `/api/community/indicators/<int:indicator_id>` | community | 登录认证 | 获取指标详情 |
| GET | `/api/community/indicators` | community | 登录认证 | 待补充接口说明 |
| GET | `/api/community/my-purchases` | community | 登录认证 | 获取我购买的指标列表 |
| GET | `/api/credentials/egress-ip` | credentials | 登录认证 | 待补充接口说明 |
| GET | `/api/credentials/get` | credentials | 登录认证 | 待补充接口说明 |
| GET | `/api/credentials/list` | credentials | 登录认证 | List all credentials for the current user. |
| GET | `/api/dashboard/pendingOrders` | dashboard | 登录认证 | 待补充接口说明 |
| GET | `/api/dashboard/summary` | dashboard | 登录认证 | 待补充接口说明 |
| GET | `/api/fast-analysis/history/all` | fast_analysis | 登录认证 | 待补充接口说明 |
| GET | `/api/fast-analysis/history` | fast_analysis | 登录认证 | 待补充接口说明 |
| GET | `/api/fast-analysis/performance` | fast_analysis | 登录认证 | 待补充接口说明 |
| GET | `/api/fast-analysis/similar-patterns` | fast_analysis | 登录认证 | 待补充接口说明 |
| GET | `/api/global-market/calendar` | global_market | 登录认证 | Get economic calendar events with impact indicators. |
| GET | `/api/global-market/heatmap` | global_market | 登录认证 | Get market heatmap data for crypto, stock sectors, forex, and indices. |
| GET | `/api/global-market/news` | global_market | 登录认证 | Get financial news from various sources.  Query params: lang ('cn'|'en'|'all'). |
| GET | `/api/global-market/opportunities` | global_market | 登录认证 | Scan for trading opportunities across Crypto, US/CN/HK Stocks, and Forex. |
| GET | `/api/global-market/overview` | global_market | 登录认证 | Get global market overview including indices, forex, crypto, and commodities. |
| GET | `/api/global-market/sentiment` | global_market | 登录认证 | Get comprehensive market sentiment indicators. |
| GET | `/api/health` | health | 公开 | 兼容路径：用于容器健康检查/反代探针等场景。 |
| GET | `/api/ibkr/account` | ibkr | 公开 | 待补充接口说明 |
| GET | `/api/ibkr/orders` | ibkr | 公开 | 待补充接口说明 |
| GET | `/api/ibkr/positions` | ibkr | 公开 | 待补充接口说明 |
| GET | `/api/ibkr/quote` | ibkr | 公开 | 待补充接口说明 |
| GET | `/api/ibkr/status` | ibkr | 公开 | 待补充接口说明 |
| GET | `/api/indicator/backtest/get` | backtest | 登录认证 | 待补充接口说明 |
| GET | `/api/indicator/backtest/history` | backtest | 登录认证 | 待补充接口说明 |
| GET | `/api/indicator/backtest/precision-info` | backtest | 公开 | 待补充接口说明 |
| GET | `/api/indicator/getIndicatorParams` | indicator | 登录认证 | 待补充接口说明 |
| GET | `/api/indicator/getIndicators` | indicator | 登录认证 | 待补充接口说明 |
| GET | `/api/indicator/kline` | kline | 公开 | 待补充接口说明 |
| GET | `/api/indicator/price` | kline | 公开 | 获取最新价格 |
| GET | `/api/market/config` | market | 公开 | 待补充接口说明 |
| GET | `/api/market/menuFooterConfig` | market | 公开 | 待补充接口说明 |
| GET | `/api/market/price` | market | 公开 | 待补充接口说明 |
| GET | `/api/market/symbols/hot` | market | 公开 | Return a small curated hot list per market (local-only). |
| GET | `/api/market/symbols/search` | market | 公开 | 待补充接口说明 |
| GET | `/api/market/types` | market | 公开 | Return supported market types for the add-watchlist modal. |
| GET | `/api/market/watchlist/get` | market | 登录认证 | Get watchlist for the current user. |
| GET | `/api/market/watchlist/prices` | market | 公开 | 待补充接口说明 |
| GET | `/api/mt5/account` | mt5 | 公开 | Get account information. |
| GET | `/api/mt5/orders` | mt5 | 公开 | Get pending orders. |
| GET | `/api/mt5/positions` | mt5 | 公开 | Get open positions. |
| GET | `/api/mt5/quote` | mt5 | 公开 | 待补充接口说明 |
| GET | `/api/mt5/status` | mt5 | 公开 | Get MT5 connection status. |
| GET | `/api/mt5/symbols` | mt5 | 公开 | Get available symbols. |
| GET | `/api/polymarket/history` | polymarket | 登录认证 | 待补充接口说明 |
| GET | `/api/portfolio/alerts` | portfolio | 登录认证 | Get all position alerts for the current user. |
| GET | `/api/portfolio/groups` | portfolio | 登录认证 | Get list of all groups with position counts for the current user. |
| GET | `/api/portfolio/monitors` | portfolio | 登录认证 | Get all position monitors for the current user. |
| GET | `/api/portfolio/positions` | portfolio | 登录认证 | Get all manual positions with current prices for the current user. |
| GET | `/api/portfolio/summary` | portfolio | 登录认证 | Get portfolio summary with total value, PnL, and market distribution for the current user. |
| GET | `/api/quick-trade/balance` | quick_trade | 登录认证 | 待补充接口说明 |
| GET | `/api/quick-trade/history` | quick_trade | 登录认证 | 待补充接口说明 |
| GET | `/api/quick-trade/position` | quick_trade | 登录认证 | 待补充接口说明 |
| GET | `/api/settings/openrouter-balance` | settings | 管理员认证 | 查询 OpenRouter 账户余额 (admin only) |
| GET | `/api/settings/public-config` | settings | 登录认证 | Return non-sensitive config values needed by frontend widgets. |
| GET | `/api/settings/schema` | settings | 管理员认证 | 获取配置项定义 (admin only) |
| GET | `/api/settings/values` | settings | 管理员认证 | 获取当前配置值 - 包括敏感信息（真实值）(admin only) |
| GET | `/api/strategies/backtest/get` | strategy | 登录认证 | 待补充接口说明 |
| GET | `/api/strategies/backtest/history` | strategy | 登录认证 | 待补充接口说明 |
| GET | `/api/strategies/detail` | strategy | 登录认证 | 待补充接口说明 |
| GET | `/api/strategies/equityCurve` | strategy | 登录认证 | Get equity curve for the current user's strategy. |
| GET | `/api/strategies/logs` | strategy | 登录认证 | Get strategy running logs. |
| GET | `/api/strategies/notifications/unread-count` | strategy | 登录认证 | 待补充接口说明 |
| GET | `/api/strategies/notifications` | strategy | 登录认证 | 待补充接口说明 |
| GET | `/api/strategies/performance` | strategy | 登录认证 | Get strategy performance metrics (aggregated from equity curve and trades). |
| GET | `/api/strategies/positions` | strategy | 登录认证 | Get position records for the current user's strategy. |
| GET | `/api/strategies/trades` | strategy | 登录认证 | Get trade records for the current user's strategy. |
| GET | `/api/strategies` | strategy | 登录认证 | 待补充接口说明 |
| GET | `/api/templates/<key>` | strategy | 登录认证 | Return a single strategy template by key. |
| GET | `/api/templates` | strategy | 登录认证 | Return pre-built strategy templates for one-click import. |
| GET | `/api/users/admin-ai-stats` | user | 管理员认证 | 待补充接口说明 |
| GET | `/api/users/admin-orders` | user | 管理员认证 | 待补充接口说明 |
| GET | `/api/users/chart-templates` | user | 登录认证 | Get current user's indicator chart templates. |
| GET | `/api/users/credits-log` | user | 管理员认证 | 待补充接口说明 |
| GET | `/api/users/detail` | user | 管理员认证 | Get user detail by ID (admin only) |
| GET | `/api/users/export` | user | 管理员认证 | Export all users as an Excel-friendly CSV file (admin only). |
| GET | `/api/users/list` | user | 管理员认证 | 待补充接口说明 |
| GET | `/api/users/my-credits-log` | user | 登录认证 | 待补充接口说明 |
| GET | `/api/users/my-referrals` | user | 登录认证 | 待补充接口说明 |
| GET | `/api/users/notification-settings` | user | 登录认证 | 待补充接口说明 |
| GET | `/api/users/profile` | user | 登录认证 | Get current user's profile with billing info and notification settings |
| GET | `/api/users/roles` | user | 管理员认证 | Get available roles and their permissions |
| GET | `/api/users/system-strategies` | user | 管理员认证 | 待补充接口说明 |
| GET | `/health` | health | 公开 | 健康检查 |
| POST | `/api/ai/chat/history/save` | ai_chat | 公开 | No-op save (compatibility stub). |
| POST | `/api/ai/chat/message` | ai_chat | 公开 | 待补充接口说明 |
| POST | `/api/auth/change-password` | auth | 登录认证 | 待补充接口说明 |
| POST | `/api/auth/login-code` | auth | 公开 | 待补充接口说明 |
| POST | `/api/auth/login` | auth | 公开 | 待补充接口说明 |
| POST | `/api/auth/logout` | auth | 公开 | Logout (client removes token; server is stateless). |
| POST | `/api/auth/register` | auth | 公开 | 待补充接口说明 |
| POST | `/api/auth/reset-password` | auth | 公开 | 待补充接口说明 |
| POST | `/api/auth/send-code` | auth | 公开 | 待补充接口说明 |
| POST | `/api/billing/purchase` | billing | 登录认证 | 待补充接口说明 |
| POST | `/api/billing/usdt/create` | billing | 登录认证 | 待补充接口说明 |
| POST | `/api/community/admin/indicators/<int:indicator_id>/review` | community | 登录认证 | 待补充接口说明 |
| POST | `/api/community/admin/indicators/<int:indicator_id>/unpublish` | community | 登录认证 | 待补充接口说明 |
| POST | `/api/community/indicators/<int:indicator_id>/comments` | community | 登录认证 | 待补充接口说明 |
| POST | `/api/community/indicators/<int:indicator_id>/purchase` | community | 登录认证 | 待补充接口说明 |
| POST | `/api/community/indicators/<int:indicator_id>/sync` | community | 登录认证 | 待补充接口说明 |
| POST | `/api/credentials/create` | credentials | 登录认证 | Create a new credential for the current user. |
| POST | `/api/experiment/ai-optimize-sync` | experiment | 登录认证 | Non-streaming version (simpler client integration). |
| POST | `/api/experiment/ai-optimize` | experiment | 登录认证 | 待补充接口说明 |
| POST | `/api/experiment/pipeline/run` | experiment | 登录认证 | Legacy grid-search pipeline (kept for backward compat). |
| POST | `/api/experiment/regime/detect` | experiment | 登录认证 | Detect the current market regime for a symbol/timeframe/date range. |
| POST | `/api/experiment/save-strategy` | experiment | 登录认证 | Save the best experiment candidate as a strategy record. |
| POST | `/api/experiment/structured-tune` | experiment | 登录认证 | 待补充接口说明 |
| POST | `/api/fast-analysis/analyze-legacy` | fast_analysis | 登录认证 | 待补充接口说明 |
| POST | `/api/fast-analysis/analyze` | fast_analysis | 登录认证 | 待补充接口说明 |
| POST | `/api/fast-analysis/feedback` | fast_analysis | 登录认证 | 待补充接口说明 |
| POST | `/api/global-market/refresh` | global_market | 登录认证 | Force refresh all market data (clears cache). |
| POST | `/api/ibkr/connect` | ibkr | 公开 | 待补充接口说明 |
| POST | `/api/ibkr/disconnect` | ibkr | 公开 | 待补充接口说明 |
| POST | `/api/ibkr/order` | ibkr | 公开 | 待补充接口说明 |
| POST | `/api/indicator/aiGenerate` | indicator | 登录认证 | 待补充接口说明 |
| POST | `/api/indicator/backtest/aiAnalyze` | backtest | 登录认证 | 待补充接口说明 |
| POST | `/api/indicator/backtest` | backtest | 登录认证 | 待补充接口说明 |
| POST | `/api/indicator/callIndicator` | indicator | 登录认证 | 待补充接口说明 |
| POST | `/api/indicator/codeQualityHints` | indicator | 登录认证 | 待补充接口说明 |
| POST | `/api/indicator/deleteIndicator` | indicator | 登录认证 | Delete an indicator by id for the current user. |
| POST | `/api/indicator/parseStrategyConfig` | indicator | 登录认证 | 待补充接口说明 |
| POST | `/api/indicator/saveIndicator` | indicator | 登录认证 | 待补充接口说明 |
| POST | `/api/indicator/verifyCode` | indicator | 登录认证 | 待补充接口说明 |
| POST | `/api/market/stock/name` | market | 公开 | 待补充接口说明 |
| POST | `/api/market/watchlist/add` | market | 登录认证 | Add a symbol to watchlist for the current user. |
| POST | `/api/market/watchlist/remove` | market | 登录认证 | Remove a symbol from watchlist for the current user. |
| POST | `/api/mt5/close` | mt5 | 公开 | 待补充接口说明 |
| POST | `/api/mt5/connect` | mt5 | 公开 | 待补充接口说明 |
| POST | `/api/mt5/disconnect` | mt5 | 公开 | Disconnect from MT5 terminal. |
| POST | `/api/mt5/order` | mt5 | 公开 | 待补充接口说明 |
| POST | `/api/polymarket/analyze` | polymarket | 登录认证 | 待补充接口说明 |
| POST | `/api/portfolio/alerts` | portfolio | 登录认证 | Add a new position alert for the current user. |
| POST | `/api/portfolio/groups/rename` | portfolio | 登录认证 | Rename a group for the current user. |
| POST | `/api/portfolio/monitors/<int:monitor_id>/run` | portfolio | 登录认证 | Manually trigger a monitor to run immediately. |
| POST | `/api/portfolio/monitors` | portfolio | 登录认证 | Add a new position monitor for the current user. |
| POST | `/api/portfolio/positions` | portfolio | 登录认证 | Add a new manual position for the current user. |
| POST | `/api/quick-trade/close-position` | quick_trade | 登录认证 | 待补充接口说明 |
| POST | `/api/quick-trade/place-order` | quick_trade | 登录认证 | 待补充接口说明 |
| POST | `/api/settings/save` | settings | 管理员认证 | 保存配置 (admin only) |
| POST | `/api/settings/test-connection` | settings | 管理员认证 | 测试API连接 (admin only) |
| POST | `/api/strategies/ai-generate` | strategy | 登录认证 | Generate strategy code or suggest template parameter updates using AI. |
| POST | `/api/strategies/backtest` | strategy | 登录认证 | 待补充接口说明 |
| POST | `/api/strategies/batch-create` | strategy | 登录认证 | 待补充接口说明 |
| POST | `/api/strategies/batch-start` | strategy | 登录认证 | 待补充接口说明 |
| POST | `/api/strategies/batch-stop` | strategy | 登录认证 | 待补充接口说明 |
| POST | `/api/strategies/create` | strategy | 登录认证 | 待补充接口说明 |
| POST | `/api/strategies/get-symbols` | strategy | 登录认证 | 待补充接口说明 |
| POST | `/api/strategies/notifications/read-all` | strategy | 登录认证 | Mark all notifications as read for the current user. |
| POST | `/api/strategies/notifications/read` | strategy | 登录认证 | Mark a single notification as read for the current user. |
| POST | `/api/strategies/preview-compile` | strategy | 登录认证 | 待补充接口说明 |
| POST | `/api/strategies/start` | strategy | 登录认证 | 待补充接口说明 |
| POST | `/api/strategies/stop` | strategy | 登录认证 | 待补充接口说明 |
| POST | `/api/strategies/test-connection` | strategy | 登录认证 | 待补充接口说明 |
| POST | `/api/strategies/verify-code` | strategy | 登录认证 | Verify script strategy code syntax and safety. |
| POST | `/api/users/change-password` | user | 登录认证 | 待补充接口说明 |
| POST | `/api/users/chart-templates` | user | 登录认证 | Create or update a user's indicator chart template. |
| POST | `/api/users/create` | user | 管理员认证 | 待补充接口说明 |
| POST | `/api/users/notification-settings/test` | user | 登录认证 | 待补充接口说明 |
| POST | `/api/users/reset-password` | user | 管理员认证 | 待补充接口说明 |
| POST | `/api/users/set-credits` | user | 管理员认证 | 待补充接口说明 |
| POST | `/api/users/set-vip` | user | 管理员认证 | 待补充接口说明 |
| PUT | `/api/community/indicators/<int:indicator_id>/comments/<int:comment_id>` | community | 登录认证 | 待补充接口说明 |
| PUT | `/api/portfolio/alerts/<int:alert_id>` | portfolio | 登录认证 | Update an existing alert for the current user. |
| PUT | `/api/portfolio/monitors/<int:monitor_id>` | portfolio | 登录认证 | Update an existing monitor for the current user. |
| PUT | `/api/portfolio/positions/<int:position_id>` | portfolio | 登录认证 | Update an existing position for the current user. |
| PUT | `/api/strategies/update` | strategy | 登录认证 | 待补充接口说明 |
| PUT | `/api/users/notification-settings` | user | 登录认证 | 待补充接口说明 |
| PUT | `/api/users/profile/update` | user | 登录认证 | 待补充接口说明 |
| PUT | `/api/users/update` | user | 管理员认证 | 待补充接口说明 |

<!-- API_INDEX_START
{
  "version": 1,
  "endpoints": [
    {
      "module": "ai_chat",
      "method": "POST",
      "path": "/api/ai/chat/message",
      "auth": "公开",
      "description": "待补充接口说明",
      "params": []
    },
    {
      "module": "ai_chat",
      "method": "GET",
      "path": "/api/ai/chat/history",
      "auth": "公开",
      "description": "Return empty history (compatibility stub).",
      "params": []
    },
    {
      "module": "ai_chat",
      "method": "POST",
      "path": "/api/ai/chat/history/save",
      "auth": "公开",
      "description": "No-op save (compatibility stub).",
      "params": []
    },
    {
      "module": "auth",
      "method": "GET",
      "path": "/api/auth/security-config",
      "auth": "公开",
      "description": "待补充接口说明",
      "params": []
    },
    {
      "module": "auth",
      "method": "POST",
      "path": "/api/auth/login",
      "auth": "公开",
      "description": "待补充接口说明",
      "params": []
    },
    {
      "module": "auth",
      "method": "POST",
      "path": "/api/auth/login-code",
      "auth": "公开",
      "description": "待补充接口说明",
      "params": []
    },
    {
      "module": "auth",
      "method": "POST",
      "path": "/api/auth/send-code",
      "auth": "公开",
      "description": "待补充接口说明",
      "params": []
    },
    {
      "module": "auth",
      "method": "POST",
      "path": "/api/auth/register",
      "auth": "公开",
      "description": "待补充接口说明",
      "params": []
    },
    {
      "module": "auth",
      "method": "POST",
      "path": "/api/auth/reset-password",
      "auth": "公开",
      "description": "待补充接口说明",
      "params": []
    },
    {
      "module": "auth",
      "method": "POST",
      "path": "/api/auth/change-password",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": []
    },
    {
      "module": "auth",
      "method": "GET",
      "path": "/api/auth/oauth/google",
      "auth": "公开",
      "description": "Redirect to Google OAuth authorization page",
      "params": []
    },
    {
      "module": "auth",
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
      "module": "auth",
      "method": "GET",
      "path": "/api/auth/oauth/github",
      "auth": "公开",
      "description": "Redirect to GitHub OAuth authorization page",
      "params": []
    },
    {
      "module": "auth",
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
      "module": "auth",
      "method": "POST",
      "path": "/api/auth/logout",
      "auth": "公开",
      "description": "Logout (client removes token; server is stateless).",
      "params": []
    },
    {
      "module": "auth",
      "method": "GET",
      "path": "/api/auth/info",
      "auth": "登录认证",
      "description": "Get current user info.",
      "params": []
    },
    {
      "module": "backtest",
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
      "module": "backtest",
      "method": "POST",
      "path": "/api/indicator/backtest",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": []
    },
    {
      "module": "backtest",
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
      "module": "backtest",
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
      "module": "backtest",
      "method": "POST",
      "path": "/api/indicator/backtest/aiAnalyze",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": []
    },
    {
      "module": "billing",
      "method": "GET",
      "path": "/api/billing/plans",
      "auth": "登录认证",
      "description": "Get membership plan configuration + current user's billing snapshot.",
      "params": []
    },
    {
      "module": "billing",
      "method": "POST",
      "path": "/api/billing/purchase",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": []
    },
    {
      "module": "billing",
      "method": "POST",
      "path": "/api/billing/usdt/create",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": []
    },
    {
      "module": "billing",
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
      "module": "community",
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
      "module": "community",
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
      "module": "community",
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
      "module": "community",
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
      "module": "community",
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
      "module": "community",
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
      "module": "community",
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
        }
      ]
    },
    {
      "module": "community",
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
        }
      ]
    },
    {
      "module": "community",
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
      "module": "community",
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
      "module": "community",
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
      "module": "community",
      "method": "GET",
      "path": "/api/community/admin/review-stats",
      "auth": "登录认证",
      "description": "获取审核统计数据（管理员专用）",
      "params": []
    },
    {
      "module": "community",
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
        }
      ]
    },
    {
      "module": "community",
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
        }
      ]
    },
    {
      "module": "community",
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
      "module": "credentials",
      "method": "GET",
      "path": "/api/credentials/list",
      "auth": "登录认证",
      "description": "List all credentials for the current user.",
      "params": []
    },
    {
      "module": "credentials",
      "method": "GET",
      "path": "/api/credentials/egress-ip",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": []
    },
    {
      "module": "credentials",
      "method": "POST",
      "path": "/api/credentials/create",
      "auth": "登录认证",
      "description": "Create a new credential for the current user.",
      "params": []
    },
    {
      "module": "credentials",
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
      "module": "credentials",
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
      "module": "dashboard",
      "method": "GET",
      "path": "/api/dashboard/summary",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": []
    },
    {
      "module": "dashboard",
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
      "module": "dashboard",
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
      "module": "experiment",
      "method": "POST",
      "path": "/api/experiment/regime/detect",
      "auth": "登录认证",
      "description": "Detect the current market regime for a symbol/timeframe/date range.",
      "params": []
    },
    {
      "module": "experiment",
      "method": "POST",
      "path": "/api/experiment/pipeline/run",
      "auth": "登录认证",
      "description": "Legacy grid-search pipeline (kept for backward compat).",
      "params": []
    },
    {
      "module": "experiment",
      "method": "POST",
      "path": "/api/experiment/ai-optimize",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": []
    },
    {
      "module": "experiment",
      "method": "POST",
      "path": "/api/experiment/ai-optimize-sync",
      "auth": "登录认证",
      "description": "Non-streaming version (simpler client integration).",
      "params": []
    },
    {
      "module": "experiment",
      "method": "POST",
      "path": "/api/experiment/structured-tune",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": []
    },
    {
      "module": "experiment",
      "method": "POST",
      "path": "/api/experiment/save-strategy",
      "auth": "登录认证",
      "description": "Save the best experiment candidate as a strategy record.",
      "params": []
    },
    {
      "module": "fast_analysis",
      "method": "POST",
      "path": "/api/fast-analysis/analyze",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": []
    },
    {
      "module": "fast_analysis",
      "method": "POST",
      "path": "/api/fast-analysis/analyze-legacy",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": []
    },
    {
      "module": "fast_analysis",
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
      "module": "fast_analysis",
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
      "module": "fast_analysis",
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
      "module": "fast_analysis",
      "method": "POST",
      "path": "/api/fast-analysis/feedback",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": []
    },
    {
      "module": "fast_analysis",
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
      "module": "fast_analysis",
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
      "module": "global_market",
      "method": "GET",
      "path": "/api/global-market/overview",
      "auth": "登录认证",
      "description": "Get global market overview including indices, forex, crypto, and commodities.",
      "params": []
    },
    {
      "module": "global_market",
      "method": "GET",
      "path": "/api/global-market/heatmap",
      "auth": "登录认证",
      "description": "Get market heatmap data for crypto, stock sectors, forex, and indices.",
      "params": []
    },
    {
      "module": "global_market",
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
      "module": "global_market",
      "method": "GET",
      "path": "/api/global-market/calendar",
      "auth": "登录认证",
      "description": "Get economic calendar events with impact indicators.",
      "params": []
    },
    {
      "module": "global_market",
      "method": "GET",
      "path": "/api/global-market/sentiment",
      "auth": "登录认证",
      "description": "Get comprehensive market sentiment indicators.",
      "params": []
    },
    {
      "module": "global_market",
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
      "module": "global_market",
      "method": "POST",
      "path": "/api/global-market/refresh",
      "auth": "登录认证",
      "description": "Force refresh all market data (clears cache).",
      "params": []
    },
    {
      "module": "health",
      "method": "GET",
      "path": "/",
      "auth": "公开",
      "description": "API 首页",
      "params": []
    },
    {
      "module": "health",
      "method": "GET",
      "path": "/health",
      "auth": "公开",
      "description": "健康检查",
      "params": []
    },
    {
      "module": "health",
      "method": "GET",
      "path": "/api/health",
      "auth": "公开",
      "description": "兼容路径：用于容器健康检查/反代探针等场景。",
      "params": []
    },
    {
      "module": "ibkr",
      "method": "GET",
      "path": "/api/ibkr/status",
      "auth": "公开",
      "description": "待补充接口说明",
      "params": []
    },
    {
      "module": "ibkr",
      "method": "POST",
      "path": "/api/ibkr/connect",
      "auth": "公开",
      "description": "待补充接口说明",
      "params": []
    },
    {
      "module": "ibkr",
      "method": "POST",
      "path": "/api/ibkr/disconnect",
      "auth": "公开",
      "description": "待补充接口说明",
      "params": []
    },
    {
      "module": "ibkr",
      "method": "GET",
      "path": "/api/ibkr/account",
      "auth": "公开",
      "description": "待补充接口说明",
      "params": []
    },
    {
      "module": "ibkr",
      "method": "GET",
      "path": "/api/ibkr/positions",
      "auth": "公开",
      "description": "待补充接口说明",
      "params": []
    },
    {
      "module": "ibkr",
      "method": "GET",
      "path": "/api/ibkr/orders",
      "auth": "公开",
      "description": "待补充接口说明",
      "params": []
    },
    {
      "module": "ibkr",
      "method": "POST",
      "path": "/api/ibkr/order",
      "auth": "公开",
      "description": "待补充接口说明",
      "params": []
    },
    {
      "module": "ibkr",
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
      "module": "ibkr",
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
      "module": "indicator",
      "method": "GET",
      "path": "/api/indicator/getIndicators",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": []
    },
    {
      "module": "indicator",
      "method": "POST",
      "path": "/api/indicator/saveIndicator",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": []
    },
    {
      "module": "indicator",
      "method": "POST",
      "path": "/api/indicator/deleteIndicator",
      "auth": "登录认证",
      "description": "Delete an indicator by id for the current user.",
      "params": []
    },
    {
      "module": "indicator",
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
      "module": "indicator",
      "method": "POST",
      "path": "/api/indicator/verifyCode",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": []
    },
    {
      "module": "indicator",
      "method": "POST",
      "path": "/api/indicator/aiGenerate",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": []
    },
    {
      "module": "indicator",
      "method": "POST",
      "path": "/api/indicator/codeQualityHints",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": []
    },
    {
      "module": "indicator",
      "method": "POST",
      "path": "/api/indicator/parseStrategyConfig",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": []
    },
    {
      "module": "indicator",
      "method": "POST",
      "path": "/api/indicator/callIndicator",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": []
    },
    {
      "module": "kline",
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
      "module": "kline",
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
      "module": "market",
      "method": "GET",
      "path": "/api/market/config",
      "auth": "公开",
      "description": "待补充接口说明",
      "params": []
    },
    {
      "module": "market",
      "method": "GET",
      "path": "/api/market/types",
      "auth": "公开",
      "description": "Return supported market types for the add-watchlist modal.",
      "params": []
    },
    {
      "module": "market",
      "method": "GET",
      "path": "/api/market/menuFooterConfig",
      "auth": "公开",
      "description": "待补充接口说明",
      "params": []
    },
    {
      "module": "market",
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
      "module": "market",
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
      "module": "market",
      "method": "GET",
      "path": "/api/market/watchlist/get",
      "auth": "登录认证",
      "description": "Get watchlist for the current user.",
      "params": []
    },
    {
      "module": "market",
      "method": "POST",
      "path": "/api/market/watchlist/add",
      "auth": "登录认证",
      "description": "Add a symbol to watchlist for the current user.",
      "params": []
    },
    {
      "module": "market",
      "method": "POST",
      "path": "/api/market/watchlist/remove",
      "auth": "登录认证",
      "description": "Remove a symbol from watchlist for the current user.",
      "params": []
    },
    {
      "module": "market",
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
      "module": "market",
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
      "module": "market",
      "method": "POST",
      "path": "/api/market/stock/name",
      "auth": "公开",
      "description": "待补充接口说明",
      "params": []
    },
    {
      "module": "mt5",
      "method": "GET",
      "path": "/api/mt5/status",
      "auth": "公开",
      "description": "Get MT5 connection status.",
      "params": []
    },
    {
      "module": "mt5",
      "method": "POST",
      "path": "/api/mt5/connect",
      "auth": "公开",
      "description": "待补充接口说明",
      "params": []
    },
    {
      "module": "mt5",
      "method": "POST",
      "path": "/api/mt5/disconnect",
      "auth": "公开",
      "description": "Disconnect from MT5 terminal.",
      "params": []
    },
    {
      "module": "mt5",
      "method": "GET",
      "path": "/api/mt5/account",
      "auth": "公开",
      "description": "Get account information.",
      "params": []
    },
    {
      "module": "mt5",
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
      "module": "mt5",
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
      "module": "mt5",
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
      "module": "mt5",
      "method": "POST",
      "path": "/api/mt5/order",
      "auth": "公开",
      "description": "待补充接口说明",
      "params": []
    },
    {
      "module": "mt5",
      "method": "POST",
      "path": "/api/mt5/close",
      "auth": "公开",
      "description": "待补充接口说明",
      "params": []
    },
    {
      "module": "mt5",
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
      "module": "mt5",
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
      "module": "polymarket",
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
      "module": "polymarket",
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
      "module": "portfolio",
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
      "module": "portfolio",
      "method": "POST",
      "path": "/api/portfolio/positions",
      "auth": "登录认证",
      "description": "Add a new manual position for the current user.",
      "params": []
    },
    {
      "module": "portfolio",
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
        }
      ]
    },
    {
      "module": "portfolio",
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
      "module": "portfolio",
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
      "module": "portfolio",
      "method": "GET",
      "path": "/api/portfolio/monitors",
      "auth": "登录认证",
      "description": "Get all position monitors for the current user.",
      "params": []
    },
    {
      "module": "portfolio",
      "method": "POST",
      "path": "/api/portfolio/monitors",
      "auth": "登录认证",
      "description": "Add a new position monitor for the current user.",
      "params": []
    },
    {
      "module": "portfolio",
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
        }
      ]
    },
    {
      "module": "portfolio",
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
      "module": "portfolio",
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
        }
      ]
    },
    {
      "module": "portfolio",
      "method": "GET",
      "path": "/api/portfolio/alerts",
      "auth": "登录认证",
      "description": "Get all position alerts for the current user.",
      "params": []
    },
    {
      "module": "portfolio",
      "method": "POST",
      "path": "/api/portfolio/alerts",
      "auth": "登录认证",
      "description": "Add a new position alert for the current user.",
      "params": []
    },
    {
      "module": "portfolio",
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
        }
      ]
    },
    {
      "module": "portfolio",
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
      "module": "portfolio",
      "method": "GET",
      "path": "/api/portfolio/groups",
      "auth": "登录认证",
      "description": "Get list of all groups with position counts for the current user.",
      "params": []
    },
    {
      "module": "portfolio",
      "method": "POST",
      "path": "/api/portfolio/groups/rename",
      "auth": "登录认证",
      "description": "Rename a group for the current user.",
      "params": []
    },
    {
      "module": "quick_trade",
      "method": "POST",
      "path": "/api/quick-trade/place-order",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": []
    },
    {
      "module": "quick_trade",
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
      "module": "quick_trade",
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
      "module": "quick_trade",
      "method": "POST",
      "path": "/api/quick-trade/close-position",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": []
    },
    {
      "module": "quick_trade",
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
      "module": "settings",
      "method": "GET",
      "path": "/api/settings/schema",
      "auth": "管理员认证",
      "description": "获取配置项定义 (admin only)",
      "params": []
    },
    {
      "module": "settings",
      "method": "GET",
      "path": "/api/settings/public-config",
      "auth": "登录认证",
      "description": "Return non-sensitive config values needed by frontend widgets.",
      "params": []
    },
    {
      "module": "settings",
      "method": "GET",
      "path": "/api/settings/values",
      "auth": "管理员认证",
      "description": "获取当前配置值 - 包括敏感信息（真实值）(admin only)",
      "params": []
    },
    {
      "module": "settings",
      "method": "POST",
      "path": "/api/settings/save",
      "auth": "管理员认证",
      "description": "保存配置 (admin only)",
      "params": []
    },
    {
      "module": "settings",
      "method": "GET",
      "path": "/api/settings/openrouter-balance",
      "auth": "管理员认证",
      "description": "查询 OpenRouter 账户余额 (admin only)",
      "params": []
    },
    {
      "module": "settings",
      "method": "POST",
      "path": "/api/settings/test-connection",
      "auth": "管理员认证",
      "description": "测试API连接 (admin only)",
      "params": []
    },
    {
      "module": "strategy",
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
      "module": "strategy",
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
      "module": "strategy",
      "method": "GET",
      "path": "/api/strategies",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": []
    },
    {
      "module": "strategy",
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
      "module": "strategy",
      "method": "POST",
      "path": "/api/strategies/backtest",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": []
    },
    {
      "module": "strategy",
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
      "module": "strategy",
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
      "module": "strategy",
      "method": "POST",
      "path": "/api/strategies/create",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": []
    },
    {
      "module": "strategy",
      "method": "POST",
      "path": "/api/strategies/batch-create",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": []
    },
    {
      "module": "strategy",
      "method": "POST",
      "path": "/api/strategies/batch-start",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": []
    },
    {
      "module": "strategy",
      "method": "POST",
      "path": "/api/strategies/batch-stop",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": []
    },
    {
      "module": "strategy",
      "method": "DELETE",
      "path": "/api/strategies/batch-delete",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": []
    },
    {
      "module": "strategy",
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
        }
      ]
    },
    {
      "module": "strategy",
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
      "module": "strategy",
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
      "module": "strategy",
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
      "module": "strategy",
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
      "module": "strategy",
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
      "module": "strategy",
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
      "module": "strategy",
      "method": "POST",
      "path": "/api/strategies/test-connection",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": []
    },
    {
      "module": "strategy",
      "method": "POST",
      "path": "/api/strategies/get-symbols",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": []
    },
    {
      "module": "strategy",
      "method": "POST",
      "path": "/api/strategies/preview-compile",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": []
    },
    {
      "module": "strategy",
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
      "module": "strategy",
      "method": "GET",
      "path": "/api/strategies/notifications/unread-count",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": []
    },
    {
      "module": "strategy",
      "method": "POST",
      "path": "/api/strategies/notifications/read",
      "auth": "登录认证",
      "description": "Mark a single notification as read for the current user.",
      "params": []
    },
    {
      "module": "strategy",
      "method": "POST",
      "path": "/api/strategies/notifications/read-all",
      "auth": "登录认证",
      "description": "Mark all notifications as read for the current user.",
      "params": []
    },
    {
      "module": "strategy",
      "method": "DELETE",
      "path": "/api/strategies/notifications/clear",
      "auth": "登录认证",
      "description": "Clear all notifications for the current user.",
      "params": []
    },
    {
      "module": "strategy",
      "method": "POST",
      "path": "/api/strategies/verify-code",
      "auth": "登录认证",
      "description": "Verify script strategy code syntax and safety.",
      "params": []
    },
    {
      "module": "strategy",
      "method": "POST",
      "path": "/api/strategies/ai-generate",
      "auth": "登录认证",
      "description": "Generate strategy code or suggest template parameter updates using AI.",
      "params": []
    },
    {
      "module": "strategy",
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
      "module": "strategy",
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
      "module": "user",
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
      "module": "user",
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
      "module": "user",
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
      "module": "user",
      "method": "POST",
      "path": "/api/users/create",
      "auth": "管理员认证",
      "description": "待补充接口说明",
      "params": []
    },
    {
      "module": "user",
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
        }
      ]
    },
    {
      "module": "user",
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
      "module": "user",
      "method": "POST",
      "path": "/api/users/reset-password",
      "auth": "管理员认证",
      "description": "待补充接口说明",
      "params": []
    },
    {
      "module": "user",
      "method": "GET",
      "path": "/api/users/roles",
      "auth": "管理员认证",
      "description": "Get available roles and their permissions",
      "params": []
    },
    {
      "module": "user",
      "method": "POST",
      "path": "/api/users/set-credits",
      "auth": "管理员认证",
      "description": "待补充接口说明",
      "params": []
    },
    {
      "module": "user",
      "method": "POST",
      "path": "/api/users/set-vip",
      "auth": "管理员认证",
      "description": "待补充接口说明",
      "params": []
    },
    {
      "module": "user",
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
      "module": "user",
      "method": "GET",
      "path": "/api/users/profile",
      "auth": "登录认证",
      "description": "Get current user's profile with billing info and notification settings",
      "params": []
    },
    {
      "module": "user",
      "method": "PUT",
      "path": "/api/users/profile/update",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": []
    },
    {
      "module": "user",
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
      "module": "user",
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
      "module": "user",
      "method": "GET",
      "path": "/api/users/notification-settings",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": []
    },
    {
      "module": "user",
      "method": "PUT",
      "path": "/api/users/notification-settings",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": []
    },
    {
      "module": "user",
      "method": "GET",
      "path": "/api/users/chart-templates",
      "auth": "登录认证",
      "description": "Get current user's indicator chart templates.",
      "params": []
    },
    {
      "module": "user",
      "method": "POST",
      "path": "/api/users/chart-templates",
      "auth": "登录认证",
      "description": "Create or update a user's indicator chart template.",
      "params": []
    },
    {
      "module": "user",
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
      "module": "user",
      "method": "POST",
      "path": "/api/users/notification-settings/test",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": []
    },
    {
      "module": "user",
      "method": "POST",
      "path": "/api/users/change-password",
      "auth": "登录认证",
      "description": "待补充接口说明",
      "params": []
    },
    {
      "module": "user",
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
      "module": "user",
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
      "module": "user",
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
API_INDEX_END -->
