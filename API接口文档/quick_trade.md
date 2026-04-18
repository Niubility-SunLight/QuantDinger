# quick_trade 模块接口文档

## 变更说明

- 新增接口：5
- 移除接口：0
- 修改接口：0
- 未变化接口：0

### 新增接口

- POST `/api/quick-trade/place-order`
- GET `/api/quick-trade/balance`
- GET `/api/quick-trade/position`
- POST `/api/quick-trade/close-position`
- GET `/api/quick-trade/history`

### 移除接口

- 无

### 修改接口

- 无

## 接口详情

### GET /api/quick-trade/balance

- 认证级别：登录认证
- 描述：待补充接口说明
- 处理函数：`get_balance`
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

### GET /api/quick-trade/history

- 认证级别：登录认证
- 描述：待补充接口说明
- 处理函数：`get_history`
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

### GET /api/quick-trade/position

- 认证级别：登录认证
- 描述：待补充接口说明
- 处理函数：`get_position`
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

### POST /api/quick-trade/close-position

- 认证级别：登录认证
- 描述：待补充接口说明
- 处理函数：`close_position`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/quick_trade.py:1258`

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

### POST /api/quick-trade/place-order

- 认证级别：登录认证
- 描述：待补充接口说明
- 处理函数：`place_order`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/quick_trade.py:350`

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
| GET | `/api/quick-trade/balance` | 登录认证 | 待补充接口说明 |
| GET | `/api/quick-trade/history` | 登录认证 | 待补充接口说明 |
| GET | `/api/quick-trade/position` | 登录认证 | 待补充接口说明 |
| POST | `/api/quick-trade/close-position` | 登录认证 | 待补充接口说明 |
| POST | `/api/quick-trade/place-order` | 登录认证 | 待补充接口说明 |
