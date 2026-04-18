# dashboard 模块接口文档

## 变更说明

- 新增接口：3
- 移除接口：0
- 修改接口：0
- 未变化接口：0

### 新增接口

- GET `/api/dashboard/summary`
- GET `/api/dashboard/pendingOrders`
- DELETE `/api/dashboard/pendingOrders/<int:order_id>`

### 移除接口

- 无

### 修改接口

- 无

## 接口详情

### DELETE /api/dashboard/pendingOrders/<int:order_id>

- 认证级别：登录认证
- 描述：待补充接口说明
- 处理函数：`delete_pending_order`
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

### GET /api/dashboard/pendingOrders

- 认证级别：登录认证
- 描述：待补充接口说明
- 处理函数：`pending_orders`
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

### GET /api/dashboard/summary

- 认证级别：登录认证
- 描述：待补充接口说明
- 处理函数：`summary`
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
| DELETE | `/api/dashboard/pendingOrders/<int:order_id>` | 登录认证 | 待补充接口说明 |
| GET | `/api/dashboard/pendingOrders` | 登录认证 | 待补充接口说明 |
| GET | `/api/dashboard/summary` | 登录认证 | 待补充接口说明 |
