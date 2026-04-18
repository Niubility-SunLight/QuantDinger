# credentials 模块接口文档

## 变更说明

- 新增接口：5
- 移除接口：0
- 修改接口：0
- 未变化接口：0

### 新增接口

- GET `/api/credentials/list`
- GET `/api/credentials/egress-ip`
- POST `/api/credentials/create`
- DELETE `/api/credentials/delete`
- GET `/api/credentials/get`

### 移除接口

- 无

### 修改接口

- 无

## 接口详情

### DELETE /api/credentials/delete

- 认证级别：登录认证
- 描述：Delete a credential for the current user.
- 处理函数：`delete_credential`
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

### GET /api/credentials/egress-ip

- 认证级别：登录认证
- 描述：待补充接口说明
- 处理函数：`get_egress_ip`
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

### GET /api/credentials/get

- 认证级别：登录认证
- 描述：待补充接口说明
- 处理函数：`get_credential`
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

### GET /api/credentials/list

- 认证级别：登录认证
- 描述：List all credentials for the current user.
- 处理函数：`list_credentials`
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

### POST /api/credentials/create

- 认证级别：登录认证
- 描述：Create a new credential for the current user.
- 处理函数：`create_credential`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/credentials.py:117`

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
| DELETE | `/api/credentials/delete` | 登录认证 | Delete a credential for the current user. |
| GET | `/api/credentials/egress-ip` | 登录认证 | 待补充接口说明 |
| GET | `/api/credentials/get` | 登录认证 | 待补充接口说明 |
| GET | `/api/credentials/list` | 登录认证 | List all credentials for the current user. |
| POST | `/api/credentials/create` | 登录认证 | Create a new credential for the current user. |
