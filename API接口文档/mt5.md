# mt5 模块接口文档

## 变更说明

- 新增接口：11
- 移除接口：0
- 修改接口：0
- 未变化接口：0

### 新增接口

- GET `/api/mt5/status`
- POST `/api/mt5/connect`
- POST `/api/mt5/disconnect`
- GET `/api/mt5/account`
- GET `/api/mt5/positions`
- GET `/api/mt5/orders`
- GET `/api/mt5/symbols`
- POST `/api/mt5/order`
- POST `/api/mt5/close`
- DELETE `/api/mt5/order/<int:ticket>`
- GET `/api/mt5/quote`

### 移除接口

- 无

### 修改接口

- 无

## 接口详情

### DELETE /api/mt5/order/<int:ticket>

- 认证级别：公开
- 描述：Cancel a pending order.
- 处理函数：`cancel_order`
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

### GET /api/mt5/account

- 认证级别：公开
- 描述：Get account information.
- 处理函数：`get_account`
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

### GET /api/mt5/orders

- 认证级别：公开
- 描述：Get pending orders.
- 处理函数：`get_orders`
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

### GET /api/mt5/positions

- 认证级别：公开
- 描述：Get open positions.
- 处理函数：`get_positions`
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

### GET /api/mt5/quote

- 认证级别：公开
- 描述：待补充接口说明
- 处理函数：`get_quote`
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

### GET /api/mt5/status

- 认证级别：公开
- 描述：Get MT5 connection status.
- 处理函数：`get_status`
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

### GET /api/mt5/symbols

- 认证级别：公开
- 描述：Get available symbols.
- 处理函数：`get_symbols`
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

### POST /api/mt5/close

- 认证级别：公开
- 描述：待补充接口说明
- 处理函数：`close_position`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/mt5.py:299`

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

### POST /api/mt5/connect

- 认证级别：公开
- 描述：待补充接口说明
- 处理函数：`connect`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/mt5.py:68`

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

### POST /api/mt5/disconnect

- 认证级别：公开
- 描述：Disconnect from MT5 terminal.
- 处理函数：`disconnect`
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

### POST /api/mt5/order

- 认证级别：公开
- 描述：待补充接口说明
- 处理函数：`place_order`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/mt5.py:223`

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

## 接口索引表

| 方法 | 路径 | 认证 | 描述 |
|---|---|---|---|
| DELETE | `/api/mt5/order/<int:ticket>` | 公开 | Cancel a pending order. |
| GET | `/api/mt5/account` | 公开 | Get account information. |
| GET | `/api/mt5/orders` | 公开 | Get pending orders. |
| GET | `/api/mt5/positions` | 公开 | Get open positions. |
| GET | `/api/mt5/quote` | 公开 | 待补充接口说明 |
| GET | `/api/mt5/status` | 公开 | Get MT5 connection status. |
| GET | `/api/mt5/symbols` | 公开 | Get available symbols. |
| POST | `/api/mt5/close` | 公开 | 待补充接口说明 |
| POST | `/api/mt5/connect` | 公开 | 待补充接口说明 |
| POST | `/api/mt5/disconnect` | 公开 | Disconnect from MT5 terminal. |
| POST | `/api/mt5/order` | 公开 | 待补充接口说明 |
