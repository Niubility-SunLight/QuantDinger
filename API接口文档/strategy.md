# strategy 模块接口文档

## 变更说明

- 新增接口：31
- 移除接口：0
- 修改接口：0
- 未变化接口：0

### 新增接口

- GET `/api/templates`
- GET `/api/templates/<key>`
- GET `/api/strategies`
- GET `/api/strategies/detail`
- POST `/api/strategies/backtest`
- GET `/api/strategies/backtest/history`
- GET `/api/strategies/backtest/get`
- POST `/api/strategies/create`
- POST `/api/strategies/batch-create`
- POST `/api/strategies/batch-start`
- POST `/api/strategies/batch-stop`
- DELETE `/api/strategies/batch-delete`
- PUT `/api/strategies/update`
- DELETE `/api/strategies/delete`
- GET `/api/strategies/trades`
- GET `/api/strategies/positions`
- GET `/api/strategies/equityCurve`
- POST `/api/strategies/stop`
- POST `/api/strategies/start`
- POST `/api/strategies/test-connection`
- POST `/api/strategies/get-symbols`
- POST `/api/strategies/preview-compile`
- GET `/api/strategies/notifications`
- GET `/api/strategies/notifications/unread-count`
- POST `/api/strategies/notifications/read`
- POST `/api/strategies/notifications/read-all`
- DELETE `/api/strategies/notifications/clear`
- POST `/api/strategies/verify-code`
- POST `/api/strategies/ai-generate`
- GET `/api/strategies/performance`
- GET `/api/strategies/logs`

### 移除接口

- 无

### 修改接口

- 无

## 接口详情

### DELETE /api/strategies/batch-delete

- 认证级别：登录认证
- 描述：待补充接口说明
- 处理函数：`batch_delete_strategies`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/strategy.py:645`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| body | object | body | 待确认 | - | JSON 请求体（结构待确认） |

JSON 请求体示例：

```json
-
```

成功响应示例（200）：

```json
{
  "code": 1,
  "msg": "success",
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "code": 0, "msg": "未授权", "data": null }
```
- 403
```json
{ "code": 0, "msg": "无权限", "data": null }
```
- 500
```json
{ "code": 0, "msg": "服务器异常", "data": null }
```

### DELETE /api/strategies/delete

- 认证级别：登录认证
- 描述：待补充接口说明
- 处理函数：`delete_strategy`
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
  "code": 1,
  "msg": "success",
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "code": 0, "msg": "未授权", "data": null }
```
- 403
```json
{ "code": 0, "msg": "无权限", "data": null }
```
- 500
```json
{ "code": 0, "msg": "服务器异常", "data": null }
```

### DELETE /api/strategies/notifications/clear

- 认证级别：登录认证
- 描述：Clear all notifications for the current user.
- 处理函数：`clear_notifications`
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
  "code": 1,
  "msg": "success",
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "code": 0, "msg": "未授权", "data": null }
```
- 403
```json
{ "code": 0, "msg": "无权限", "data": null }
```
- 500
```json
{ "code": 0, "msg": "服务器异常", "data": null }
```

### GET /api/strategies

- 认证级别：登录认证
- 描述：待补充接口说明
- 处理函数：`list_strategies`
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
  "code": 1,
  "msg": "success",
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "code": 0, "msg": "未授权", "data": null }
```
- 403
```json
{ "code": 0, "msg": "无权限", "data": null }
```
- 500
```json
{ "code": 0, "msg": "服务器异常", "data": null }
```

### GET /api/strategies/backtest/get

- 认证级别：登录认证
- 描述：待补充接口说明
- 处理函数：`get_strategy_backtest_run`
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
  "code": 1,
  "msg": "success",
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "code": 0, "msg": "未授权", "data": null }
```
- 403
```json
{ "code": 0, "msg": "无权限", "data": null }
```
- 500
```json
{ "code": 0, "msg": "服务器异常", "data": null }
```

### GET /api/strategies/backtest/history

- 认证级别：登录认证
- 描述：待补充接口说明
- 处理函数：`get_strategy_backtest_history`
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
  "code": 1,
  "msg": "success",
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "code": 0, "msg": "未授权", "data": null }
```
- 403
```json
{ "code": 0, "msg": "无权限", "data": null }
```
- 500
```json
{ "code": 0, "msg": "服务器异常", "data": null }
```

### GET /api/strategies/detail

- 认证级别：登录认证
- 描述：待补充接口说明
- 处理函数：`get_strategy_detail`
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
  "code": 1,
  "msg": "success",
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "code": 0, "msg": "未授权", "data": null }
```
- 403
```json
{ "code": 0, "msg": "无权限", "data": null }
```
- 500
```json
{ "code": 0, "msg": "服务器异常", "data": null }
```

### GET /api/strategies/equityCurve

- 认证级别：登录认证
- 描述：Get equity curve for the current user's strategy.
- 处理函数：`get_equity_curve`
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
  "code": 1,
  "msg": "success",
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "code": 0, "msg": "未授权", "data": null }
```
- 403
```json
{ "code": 0, "msg": "无权限", "data": null }
```
- 500
```json
{ "code": 0, "msg": "服务器异常", "data": null }
```

### GET /api/strategies/logs

- 认证级别：登录认证
- 描述：Get strategy running logs.
- 处理函数：`get_strategy_logs`
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
  "code": 1,
  "msg": "success",
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "code": 0, "msg": "未授权", "data": null }
```
- 403
```json
{ "code": 0, "msg": "无权限", "data": null }
```
- 500
```json
{ "code": 0, "msg": "服务器异常", "data": null }
```

### GET /api/strategies/notifications

- 认证级别：登录认证
- 描述：待补充接口说明
- 处理函数：`get_strategy_notifications`
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
  "code": 1,
  "msg": "success",
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "code": 0, "msg": "未授权", "data": null }
```
- 403
```json
{ "code": 0, "msg": "无权限", "data": null }
```
- 500
```json
{ "code": 0, "msg": "服务器异常", "data": null }
```

### GET /api/strategies/notifications/unread-count

- 认证级别：登录认证
- 描述：待补充接口说明
- 处理函数：`get_unread_notification_count`
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
  "code": 1,
  "msg": "success",
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "code": 0, "msg": "未授权", "data": null }
```
- 403
```json
{ "code": 0, "msg": "无权限", "data": null }
```
- 500
```json
{ "code": 0, "msg": "服务器异常", "data": null }
```

### GET /api/strategies/performance

- 认证级别：登录认证
- 描述：Get strategy performance metrics (aggregated from equity curve and trades).
- 处理函数：`get_strategy_performance`
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
  "code": 1,
  "msg": "success",
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "code": 0, "msg": "未授权", "data": null }
```
- 403
```json
{ "code": 0, "msg": "无权限", "data": null }
```
- 500
```json
{ "code": 0, "msg": "服务器异常", "data": null }
```

### GET /api/strategies/positions

- 认证级别：登录认证
- 描述：Get position records for the current user's strategy.
- 处理函数：`get_positions`
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
  "code": 1,
  "msg": "success",
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "code": 0, "msg": "未授权", "data": null }
```
- 403
```json
{ "code": 0, "msg": "无权限", "data": null }
```
- 500
```json
{ "code": 0, "msg": "服务器异常", "data": null }
```

### GET /api/strategies/trades

- 认证级别：登录认证
- 描述：Get trade records for the current user's strategy.
- 处理函数：`get_trades`
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
  "code": 1,
  "msg": "success",
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "code": 0, "msg": "未授权", "data": null }
```
- 403
```json
{ "code": 0, "msg": "无权限", "data": null }
```
- 500
```json
{ "code": 0, "msg": "服务器异常", "data": null }
```

### GET /api/templates

- 认证级别：登录认证
- 描述：Return pre-built strategy templates for one-click import.
- 处理函数：`list_strategy_templates`
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
  "code": 1,
  "msg": "success",
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "code": 0, "msg": "未授权", "data": null }
```
- 403
```json
{ "code": 0, "msg": "无权限", "data": null }
```
- 500
```json
{ "code": 0, "msg": "服务器异常", "data": null }
```

### GET /api/templates/<key>

- 认证级别：登录认证
- 描述：Return a single strategy template by key.
- 处理函数：`get_strategy_template`
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
  "code": 1,
  "msg": "success",
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "code": 0, "msg": "未授权", "data": null }
```
- 403
```json
{ "code": 0, "msg": "无权限", "data": null }
```
- 500
```json
{ "code": 0, "msg": "服务器异常", "data": null }
```

### POST /api/strategies/ai-generate

- 认证级别：登录认证
- 描述：Generate strategy code or suggest template parameter updates using AI.
- 处理函数：`ai_generate_strategy`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/strategy.py:1518`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| body | object | body | 待确认 | - | JSON 请求体（结构待确认） |

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "code": 1,
  "msg": "success",
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "code": 0, "msg": "未授权", "data": null }
```
- 403
```json
{ "code": 0, "msg": "无权限", "data": null }
```
- 500
```json
{ "code": 0, "msg": "服务器异常", "data": null }
```

### POST /api/strategies/backtest

- 认证级别：登录认证
- 描述：待补充接口说明
- 处理函数：`run_strategy_backtest`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/strategy.py:331`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| body | object | body | 待确认 | - | JSON 请求体（结构待确认） |

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "code": 1,
  "msg": "success",
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "code": 0, "msg": "未授权", "data": null }
```
- 403
```json
{ "code": 0, "msg": "无权限", "data": null }
```
- 500
```json
{ "code": 0, "msg": "服务器异常", "data": null }
```

### POST /api/strategies/batch-create

- 认证级别：登录认证
- 描述：待补充接口说明
- 处理函数：`batch_create_strategies`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/strategy.py:517`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| body | object | body | 待确认 | - | JSON 请求体（结构待确认） |

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "code": 1,
  "msg": "success",
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "code": 0, "msg": "未授权", "data": null }
```
- 403
```json
{ "code": 0, "msg": "无权限", "data": null }
```
- 500
```json
{ "code": 0, "msg": "服务器异常", "data": null }
```

### POST /api/strategies/batch-start

- 认证级别：登录认证
- 描述：待补充接口说明
- 处理函数：`batch_start_strategies`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/strategy.py:554`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| body | object | body | 待确认 | - | JSON 请求体（结构待确认） |

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "code": 1,
  "msg": "success",
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "code": 0, "msg": "未授权", "data": null }
```
- 403
```json
{ "code": 0, "msg": "无权限", "data": null }
```
- 500
```json
{ "code": 0, "msg": "服务器异常", "data": null }
```

### POST /api/strategies/batch-stop

- 认证级别：登录认证
- 描述：待补充接口说明
- 处理函数：`batch_stop_strategies`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/strategy.py:600`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| body | object | body | 待确认 | - | JSON 请求体（结构待确认） |

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "code": 1,
  "msg": "success",
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "code": 0, "msg": "未授权", "data": null }
```
- 403
```json
{ "code": 0, "msg": "无权限", "data": null }
```
- 500
```json
{ "code": 0, "msg": "服务器异常", "data": null }
```

### POST /api/strategies/create

- 认证级别：登录认证
- 描述：待补充接口说明
- 处理函数：`create_strategy`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/strategy.py:500`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| body | object | body | 待确认 | - | JSON 请求体（结构待确认） |

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "code": 1,
  "msg": "success",
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "code": 0, "msg": "未授权", "data": null }
```
- 403
```json
{ "code": 0, "msg": "无权限", "data": null }
```
- 500
```json
{ "code": 0, "msg": "服务器异常", "data": null }
```

### POST /api/strategies/get-symbols

- 认证级别：登录认证
- 描述：待补充接口说明
- 处理函数：`get_symbols`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/strategy.py:1182`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| body | object | body | 待确认 | - | JSON 请求体（结构待确认） |

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "code": 1,
  "msg": "success",
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "code": 0, "msg": "未授权", "data": null }
```
- 403
```json
{ "code": 0, "msg": "无权限", "data": null }
```
- 500
```json
{ "code": 0, "msg": "服务器异常", "data": null }
```

### POST /api/strategies/notifications/read

- 认证级别：登录认证
- 描述：Mark a single notification as read for the current user.
- 处理函数：`mark_notification_read`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/strategy.py:1416`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| body | object | body | 待确认 | - | JSON 请求体（结构待确认） |

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "code": 1,
  "msg": "success",
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "code": 0, "msg": "未授权", "data": null }
```
- 403
```json
{ "code": 0, "msg": "无权限", "data": null }
```
- 500
```json
{ "code": 0, "msg": "服务器异常", "data": null }
```

### POST /api/strategies/notifications/read-all

- 认证级别：登录认证
- 描述：Mark all notifications as read for the current user.
- 处理函数：`mark_all_notifications_read`
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
  "code": 1,
  "msg": "success",
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "code": 0, "msg": "未授权", "data": null }
```
- 403
```json
{ "code": 0, "msg": "无权限", "data": null }
```
- 500
```json
{ "code": 0, "msg": "服务器异常", "data": null }
```

### POST /api/strategies/preview-compile

- 认证级别：登录认证
- 描述：待补充接口说明
- 处理函数：`preview_compile`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/strategy.py:1226`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| body | object | body | 待确认 | - | JSON 请求体（结构待确认） |

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "code": 1,
  "msg": "success",
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "code": 0, "msg": "未授权", "data": null }
```
- 403
```json
{ "code": 0, "msg": "无权限", "data": null }
```
- 500
```json
{ "code": 0, "msg": "服务器异常", "data": null }
```

### POST /api/strategies/start

- 认证级别：登录认证
- 描述：待补充接口说明
- 处理函数：`start_strategy`
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
  "code": 1,
  "msg": "success",
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "code": 0, "msg": "未授权", "data": null }
```
- 403
```json
{ "code": 0, "msg": "无权限", "data": null }
```
- 500
```json
{ "code": 0, "msg": "服务器异常", "data": null }
```

### POST /api/strategies/stop

- 认证级别：登录认证
- 描述：待补充接口说明
- 处理函数：`stop_strategy`
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
  "code": 1,
  "msg": "success",
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "code": 0, "msg": "未授权", "data": null }
```
- 403
```json
{ "code": 0, "msg": "无权限", "data": null }
```
- 500
```json
{ "code": 0, "msg": "服务器异常", "data": null }
```

### POST /api/strategies/test-connection

- 认证级别：登录认证
- 描述：待补充接口说明
- 处理函数：`test_connection`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/strategy.py:1103`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| body | object | body | 待确认 | - | JSON 请求体（结构待确认） |

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "code": 1,
  "msg": "success",
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "code": 0, "msg": "未授权", "data": null }
```
- 403
```json
{ "code": 0, "msg": "无权限", "data": null }
```
- 500
```json
{ "code": 0, "msg": "服务器异常", "data": null }
```

### POST /api/strategies/verify-code

- 认证级别：登录认证
- 描述：Verify script strategy code syntax and safety.
- 处理函数：`verify_strategy_code`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/strategy.py:1501`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| body | object | body | 待确认 | - | JSON 请求体（结构待确认） |

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "code": 1,
  "msg": "success",
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "code": 0, "msg": "未授权", "data": null }
```
- 403
```json
{ "code": 0, "msg": "无权限", "data": null }
```
- 500
```json
{ "code": 0, "msg": "服务器异常", "data": null }
```

### PUT /api/strategies/update

- 认证级别：登录认证
- 描述：待补充接口说明
- 处理函数：`update_strategy`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/strategy.py:690`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| id | 待确认 | query | 否 | type=int | 查询参数 |
| body | object | body | 待确认 | - | JSON 请求体（结构待确认） |

JSON 请求体示例：

```json
{
  "字段": "待确认"
}
```

成功响应示例（200）：

```json
{
  "code": 1,
  "msg": "success",
  "data": "待确认"
}
```

常见失败响应示例：

- 401
```json
{ "code": 0, "msg": "未授权", "data": null }
```
- 403
```json
{ "code": 0, "msg": "无权限", "data": null }
```
- 500
```json
{ "code": 0, "msg": "服务器异常", "data": null }
```

## 接口索引表

| 方法 | 路径 | 认证 | 描述 |
|---|---|---|---|
| DELETE | `/api/strategies/batch-delete` | 登录认证 | 待补充接口说明 |
| DELETE | `/api/strategies/delete` | 登录认证 | 待补充接口说明 |
| DELETE | `/api/strategies/notifications/clear` | 登录认证 | Clear all notifications for the current user. |
| GET | `/api/strategies` | 登录认证 | 待补充接口说明 |
| GET | `/api/strategies/backtest/get` | 登录认证 | 待补充接口说明 |
| GET | `/api/strategies/backtest/history` | 登录认证 | 待补充接口说明 |
| GET | `/api/strategies/detail` | 登录认证 | 待补充接口说明 |
| GET | `/api/strategies/equityCurve` | 登录认证 | Get equity curve for the current user's strategy. |
| GET | `/api/strategies/logs` | 登录认证 | Get strategy running logs. |
| GET | `/api/strategies/notifications` | 登录认证 | 待补充接口说明 |
| GET | `/api/strategies/notifications/unread-count` | 登录认证 | 待补充接口说明 |
| GET | `/api/strategies/performance` | 登录认证 | Get strategy performance metrics (aggregated from equity curve and trades). |
| GET | `/api/strategies/positions` | 登录认证 | Get position records for the current user's strategy. |
| GET | `/api/strategies/trades` | 登录认证 | Get trade records for the current user's strategy. |
| GET | `/api/templates` | 登录认证 | Return pre-built strategy templates for one-click import. |
| GET | `/api/templates/<key>` | 登录认证 | Return a single strategy template by key. |
| POST | `/api/strategies/ai-generate` | 登录认证 | Generate strategy code or suggest template parameter updates using AI. |
| POST | `/api/strategies/backtest` | 登录认证 | 待补充接口说明 |
| POST | `/api/strategies/batch-create` | 登录认证 | 待补充接口说明 |
| POST | `/api/strategies/batch-start` | 登录认证 | 待补充接口说明 |
| POST | `/api/strategies/batch-stop` | 登录认证 | 待补充接口说明 |
| POST | `/api/strategies/create` | 登录认证 | 待补充接口说明 |
| POST | `/api/strategies/get-symbols` | 登录认证 | 待补充接口说明 |
| POST | `/api/strategies/notifications/read` | 登录认证 | Mark a single notification as read for the current user. |
| POST | `/api/strategies/notifications/read-all` | 登录认证 | Mark all notifications as read for the current user. |
| POST | `/api/strategies/preview-compile` | 登录认证 | 待补充接口说明 |
| POST | `/api/strategies/start` | 登录认证 | 待补充接口说明 |
| POST | `/api/strategies/stop` | 登录认证 | 待补充接口说明 |
| POST | `/api/strategies/test-connection` | 登录认证 | 待补充接口说明 |
| POST | `/api/strategies/verify-code` | 登录认证 | Verify script strategy code syntax and safety. |
| PUT | `/api/strategies/update` | 登录认证 | 待补充接口说明 |
