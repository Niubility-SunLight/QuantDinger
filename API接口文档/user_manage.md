# user_manage 模块接口文档

## 变更说明

- 新增接口：25
- 移除接口：0
- 修改接口：0
- 未变化接口：0

### 新增接口

- GET `/api/users/list`
- GET `/api/users/export`
- GET `/api/users/detail`
- POST `/api/users/create`
- PUT `/api/users/update`
- DELETE `/api/users/delete`
- POST `/api/users/reset-password`
- GET `/api/users/roles`
- POST `/api/users/set-credits`
- POST `/api/users/set-vip`
- GET `/api/users/credits-log`
- GET `/api/users/profile`
- PUT `/api/users/profile/update`
- GET `/api/users/my-credits-log`
- GET `/api/users/my-referrals`
- GET `/api/users/notification-settings`
- PUT `/api/users/notification-settings`
- GET `/api/users/chart-templates`
- POST `/api/users/chart-templates`
- DELETE `/api/users/chart-templates`
- POST `/api/users/notification-settings/test`
- POST `/api/users/change-password`
- GET `/api/users/system-strategies`
- GET `/api/users/admin-orders`
- GET `/api/users/admin-ai-stats`

### 移除接口

- 无

### 修改接口

- 无

## 接口详情

### DELETE /api/users/chart-templates

- 认证级别：登录认证
- 描述：Delete a user's chart template by id.
- 处理函数：`delete_chart_template`
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

### DELETE /api/users/delete

- 认证级别：管理员认证
- 描述：Delete a user (admin only)
- 处理函数：`delete_user`
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

### GET /api/users/admin-ai-stats

- 认证级别：管理员认证
- 描述：待补充接口说明
- 处理函数：`get_admin_ai_stats`
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

### GET /api/users/admin-orders

- 认证级别：管理员认证
- 描述：待补充接口说明
- 处理函数：`get_admin_orders`
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

### GET /api/users/chart-templates

- 认证级别：登录认证
- 描述：Get current user's indicator chart templates.
- 处理函数：`get_chart_templates`
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

### GET /api/users/credits-log

- 认证级别：管理员认证
- 描述：待补充接口说明
- 处理函数：`get_user_credits_log`
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

### GET /api/users/detail

- 认证级别：管理员认证
- 描述：Get user detail by ID (admin only)
- 处理函数：`get_user_detail`
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

### GET /api/users/export

- 认证级别：管理员认证
- 描述：Export all users as an Excel-friendly CSV file (admin only).
- 处理函数：`export_users`
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

### GET /api/users/list

- 认证级别：管理员认证
- 描述：待补充接口说明
- 处理函数：`list_users`
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

### GET /api/users/my-credits-log

- 认证级别：登录认证
- 描述：待补充接口说明
- 处理函数：`get_my_credits_log`
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

### GET /api/users/my-referrals

- 认证级别：登录认证
- 描述：待补充接口说明
- 处理函数：`get_my_referrals`
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

### GET /api/users/notification-settings

- 认证级别：登录认证
- 描述：待补充接口说明
- 处理函数：`get_notification_settings`
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

### GET /api/users/profile

- 认证级别：登录认证
- 描述：Get current user's profile with billing info and notification settings
- 处理函数：`get_profile`
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

### GET /api/users/roles

- 认证级别：管理员认证
- 描述：Get available roles and their permissions
- 处理函数：`get_roles`
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

### GET /api/users/system-strategies

- 认证级别：管理员认证
- 描述：待补充接口说明
- 处理函数：`get_system_strategies`
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

### POST /api/users/change-password

- 认证级别：登录认证
- 描述：待补充接口说明
- 处理函数：`change_password`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/user.py:1028`

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

### POST /api/users/chart-templates

- 认证级别：登录认证
- 描述：Create or update a user's indicator chart template.
- 处理函数：`save_chart_template`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/user.py:801`

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

### POST /api/users/create

- 认证级别：管理员认证
- 描述：待补充接口说明
- 处理函数：`create_user`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/user.py:146`

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

### POST /api/users/notification-settings/test

- 认证级别：登录认证
- 描述：待补充接口说明
- 处理函数：`test_notification_settings`
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

### POST /api/users/reset-password

- 认证级别：管理员认证
- 描述：待补充接口说明
- 处理函数：`reset_user_password`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/user.py:236`

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

### POST /api/users/set-credits

- 认证级别：管理员认证
- 描述：待补充接口说明
- 处理函数：`set_user_credits`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/user.py:295`

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

### POST /api/users/set-vip

- 认证级别：管理员认证
- 描述：待补充接口说明
- 处理函数：`set_user_vip`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/user.py:333`

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

### PUT /api/users/notification-settings

- 认证级别：登录认证
- 描述：待补充接口说明
- 处理函数：`update_notification_settings`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/user.py:696`

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

### PUT /api/users/profile/update

- 认证级别：登录认证
- 描述：待补充接口说明
- 处理函数：`update_profile`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/user.py:477`

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

### PUT /api/users/update

- 认证级别：管理员认证
- 描述：待补充接口说明
- 处理函数：`update_user`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/user.py:177`

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
| DELETE | `/api/users/chart-templates` | 登录认证 | Delete a user's chart template by id. |
| DELETE | `/api/users/delete` | 管理员认证 | Delete a user (admin only) |
| GET | `/api/users/admin-ai-stats` | 管理员认证 | 待补充接口说明 |
| GET | `/api/users/admin-orders` | 管理员认证 | 待补充接口说明 |
| GET | `/api/users/chart-templates` | 登录认证 | Get current user's indicator chart templates. |
| GET | `/api/users/credits-log` | 管理员认证 | 待补充接口说明 |
| GET | `/api/users/detail` | 管理员认证 | Get user detail by ID (admin only) |
| GET | `/api/users/export` | 管理员认证 | Export all users as an Excel-friendly CSV file (admin only). |
| GET | `/api/users/list` | 管理员认证 | 待补充接口说明 |
| GET | `/api/users/my-credits-log` | 登录认证 | 待补充接口说明 |
| GET | `/api/users/my-referrals` | 登录认证 | 待补充接口说明 |
| GET | `/api/users/notification-settings` | 登录认证 | 待补充接口说明 |
| GET | `/api/users/profile` | 登录认证 | Get current user's profile with billing info and notification settings |
| GET | `/api/users/roles` | 管理员认证 | Get available roles and their permissions |
| GET | `/api/users/system-strategies` | 管理员认证 | 待补充接口说明 |
| POST | `/api/users/change-password` | 登录认证 | 待补充接口说明 |
| POST | `/api/users/chart-templates` | 登录认证 | Create or update a user's indicator chart template. |
| POST | `/api/users/create` | 管理员认证 | 待补充接口说明 |
| POST | `/api/users/notification-settings/test` | 登录认证 | 待补充接口说明 |
| POST | `/api/users/reset-password` | 管理员认证 | 待补充接口说明 |
| POST | `/api/users/set-credits` | 管理员认证 | 待补充接口说明 |
| POST | `/api/users/set-vip` | 管理员认证 | 待补充接口说明 |
| PUT | `/api/users/notification-settings` | 登录认证 | 待补充接口说明 |
| PUT | `/api/users/profile/update` | 登录认证 | 待补充接口说明 |
| PUT | `/api/users/update` | 管理员认证 | 待补充接口说明 |
