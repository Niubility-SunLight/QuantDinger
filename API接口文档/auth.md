# auth 模块接口文档

## 变更说明

- 新增接口：13
- 移除接口：0
- 修改接口：0
- 未变化接口：0

### 新增接口

- GET `/api/auth/security-config`
- POST `/api/auth/login`
- POST `/api/auth/login-code`
- POST `/api/auth/send-code`
- POST `/api/auth/register`
- POST `/api/auth/reset-password`
- POST `/api/auth/change-password`
- GET `/api/auth/oauth/google`
- GET `/api/auth/oauth/google/callback`
- GET `/api/auth/oauth/github`
- GET `/api/auth/oauth/github/callback`
- POST `/api/auth/logout`
- GET `/api/auth/info`

### 移除接口

- 无

### 修改接口

- 无

## 接口详情

### GET /api/auth/info

- 认证级别：登录认证
- 描述：Get current user info.
- 处理函数：`get_user_info`
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

### GET /api/auth/oauth/github

- 认证级别：公开
- 描述：Redirect to GitHub OAuth authorization page
- 处理函数：`oauth_github`
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

### GET /api/auth/oauth/github/callback

- 认证级别：公开
- 描述：Handle GitHub OAuth callback
- 处理函数：`oauth_github_callback`
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

### GET /api/auth/oauth/google

- 认证级别：公开
- 描述：Redirect to Google OAuth authorization page
- 处理函数：`oauth_google`
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

### GET /api/auth/oauth/google/callback

- 认证级别：公开
- 描述：Handle Google OAuth callback
- 处理函数：`oauth_google_callback`
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

### GET /api/auth/security-config

- 认证级别：公开
- 描述：待补充接口说明
- 处理函数：`get_security_config`
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

### POST /api/auth/change-password

- 认证级别：登录认证
- 描述：待补充接口说明
- 处理函数：`change_password`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/auth.py:780`

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

### POST /api/auth/login

- 认证级别：公开
- 描述：待补充接口说明
- 处理函数：`login`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/auth.py:91`

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

### POST /api/auth/login-code

- 认证级别：公开
- 描述：待补充接口说明
- 处理函数：`login_with_code`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/auth.py:236`

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

### POST /api/auth/logout

- 认证级别：公开
- 描述：Logout (client removes token; server is stateless).
- 处理函数：`logout`
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

### POST /api/auth/register

- 认证级别：公开
- 描述：待补充接口说明
- 处理函数：`register`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/auth.py:532`

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

### POST /api/auth/reset-password

- 认证级别：公开
- 描述：待补充接口说明
- 处理函数：`reset_password`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/auth.py:705`

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

### POST /api/auth/send-code

- 认证级别：公开
- 描述：待补充接口说明
- 处理函数：`send_verification_code`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/auth.py:442`

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
| GET | `/api/auth/info` | 登录认证 | Get current user info. |
| GET | `/api/auth/oauth/github` | 公开 | Redirect to GitHub OAuth authorization page |
| GET | `/api/auth/oauth/github/callback` | 公开 | Handle GitHub OAuth callback |
| GET | `/api/auth/oauth/google` | 公开 | Redirect to Google OAuth authorization page |
| GET | `/api/auth/oauth/google/callback` | 公开 | Handle Google OAuth callback |
| GET | `/api/auth/security-config` | 公开 | 待补充接口说明 |
| POST | `/api/auth/change-password` | 登录认证 | 待补充接口说明 |
| POST | `/api/auth/login` | 公开 | 待补充接口说明 |
| POST | `/api/auth/login-code` | 公开 | 待补充接口说明 |
| POST | `/api/auth/logout` | 公开 | Logout (client removes token; server is stateless). |
| POST | `/api/auth/register` | 公开 | 待补充接口说明 |
| POST | `/api/auth/reset-password` | 公开 | 待补充接口说明 |
| POST | `/api/auth/send-code` | 公开 | 待补充接口说明 |
