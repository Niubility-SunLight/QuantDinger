# settings 模块接口文档

## 变更说明

- 新增接口：6
- 移除接口：0
- 修改接口：0
- 未变化接口：0

### 新增接口

- GET `/api/settings/schema`
- GET `/api/settings/public-config`
- GET `/api/settings/values`
- POST `/api/settings/save`
- GET `/api/settings/openrouter-balance`
- POST `/api/settings/test-connection`

### 移除接口

- 无

### 修改接口

- 无

## 接口详情

### GET /api/settings/openrouter-balance

- 认证级别：管理员认证
- 描述：查询 OpenRouter 账户余额 (admin only)
- 处理函数：`get_openrouter_balance`
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

### GET /api/settings/public-config

- 认证级别：登录认证
- 描述：Return non-sensitive config values needed by frontend widgets.
- 处理函数：`get_public_config`
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

### GET /api/settings/schema

- 认证级别：管理员认证
- 描述：获取配置项定义 (admin only)
- 处理函数：`get_settings_schema`
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

### GET /api/settings/values

- 认证级别：管理员认证
- 描述：获取当前配置值 - 包括敏感信息（真实值）(admin only)
- 处理函数：`get_settings_values`
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

### POST /api/settings/save

- 认证级别：管理员认证
- 描述：保存配置 (admin only)
- 处理函数：`save_settings`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/settings.py:982`

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

### POST /api/settings/test-connection

- 认证级别：管理员认证
- 描述：测试API连接 (admin only)
- 处理函数：`test_connection`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/settings.py:1121`

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
| GET | `/api/settings/openrouter-balance` | 管理员认证 | 查询 OpenRouter 账户余额 (admin only) |
| GET | `/api/settings/public-config` | 登录认证 | Return non-sensitive config values needed by frontend widgets. |
| GET | `/api/settings/schema` | 管理员认证 | 获取配置项定义 (admin only) |
| GET | `/api/settings/values` | 管理员认证 | 获取当前配置值 - 包括敏感信息（真实值）(admin only) |
| POST | `/api/settings/save` | 管理员认证 | 保存配置 (admin only) |
| POST | `/api/settings/test-connection` | 管理员认证 | 测试API连接 (admin only) |
