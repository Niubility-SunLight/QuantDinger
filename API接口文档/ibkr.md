# ibkr 模块接口文档

## 变更说明

- 新增接口：9
- 移除接口：0
- 修改接口：0
- 未变化接口：0

### 新增接口

- GET `/api/ibkr/status`
- POST `/api/ibkr/connect`
- POST `/api/ibkr/disconnect`
- GET `/api/ibkr/account`
- GET `/api/ibkr/positions`
- GET `/api/ibkr/orders`
- POST `/api/ibkr/order`
- DELETE `/api/ibkr/order/<int:order_id>`
- GET `/api/ibkr/quote`

### 移除接口

- 无

### 修改接口

- 无

## 接口详情

### DELETE /api/ibkr/order/<int:order_id>

- 认证级别：公开
- 描述：待补充接口说明
- 处理函数：`cancel_order`
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

### GET /api/ibkr/account

- 认证级别：公开
- 描述：待补充接口说明
- 处理函数：`get_account`
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

### GET /api/ibkr/orders

- 认证级别：公开
- 描述：待补充接口说明
- 处理函数：`get_orders`
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

### GET /api/ibkr/positions

- 认证级别：公开
- 描述：待补充接口说明
- 处理函数：`get_positions`
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

### GET /api/ibkr/quote

- 认证级别：公开
- 描述：待补充接口说明
- 处理函数：`get_quote`
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

### GET /api/ibkr/status

- 认证级别：公开
- 描述：待补充接口说明
- 处理函数：`get_status`
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

### POST /api/ibkr/connect

- 认证级别：公开
- 描述：待补充接口说明
- 处理函数：`connect`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/ibkr.py:53`

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

### POST /api/ibkr/disconnect

- 认证级别：公开
- 描述：待补充接口说明
- 处理函数：`disconnect`
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

### POST /api/ibkr/order

- 认证级别：公开
- 描述：待补充接口说明
- 处理函数：`place_order`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/ibkr.py:229`

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
| DELETE | `/api/ibkr/order/<int:order_id>` | 公开 | 待补充接口说明 |
| GET | `/api/ibkr/account` | 公开 | 待补充接口说明 |
| GET | `/api/ibkr/orders` | 公开 | 待补充接口说明 |
| GET | `/api/ibkr/positions` | 公开 | 待补充接口说明 |
| GET | `/api/ibkr/quote` | 公开 | 待补充接口说明 |
| GET | `/api/ibkr/status` | 公开 | 待补充接口说明 |
| POST | `/api/ibkr/connect` | 公开 | 待补充接口说明 |
| POST | `/api/ibkr/disconnect` | 公开 | 待补充接口说明 |
| POST | `/api/ibkr/order` | 公开 | 待补充接口说明 |
