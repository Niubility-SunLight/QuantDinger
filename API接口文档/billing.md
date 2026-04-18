# billing 模块接口文档

## 变更说明

- 新增接口：4
- 移除接口：0
- 修改接口：0
- 未变化接口：0

### 新增接口

- GET `/api/billing/plans`
- POST `/api/billing/purchase`
- POST `/api/billing/usdt/create`
- GET `/api/billing/usdt/order/<int:order_id>`

### 移除接口

- 无

### 修改接口

- 无

## 接口详情

### GET /api/billing/plans

- 认证级别：登录认证
- 描述：Get membership plan configuration + current user's billing snapshot.
- 处理函数：`get_membership_plans`
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

### GET /api/billing/usdt/order/<int:order_id>

- 认证级别：登录认证
- 描述：Get my USDT order; refresh chain status by default.
- 处理函数：`usdt_get_order`
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

### POST /api/billing/purchase

- 认证级别：登录认证
- 描述：待补充接口说明
- 处理函数：`purchase_membership`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/billing.py:38`

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

### POST /api/billing/usdt/create

- 认证级别：登录认证
- 描述：待补充接口说明
- 处理函数：`usdt_create_order`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/billing.py:68`

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
| GET | `/api/billing/plans` | 登录认证 | Get membership plan configuration + current user's billing snapshot. |
| GET | `/api/billing/usdt/order/<int:order_id>` | 登录认证 | Get my USDT order; refresh chain status by default. |
| POST | `/api/billing/purchase` | 登录认证 | 待补充接口说明 |
| POST | `/api/billing/usdt/create` | 登录认证 | 待补充接口说明 |
