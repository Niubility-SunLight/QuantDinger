# portfolio 模块接口文档

## 变更说明

- 新增接口：16
- 移除接口：0
- 修改接口：0
- 未变化接口：0

### 新增接口

- GET `/api/portfolio/positions`
- POST `/api/portfolio/positions`
- PUT `/api/portfolio/positions/<int:position_id>`
- DELETE `/api/portfolio/positions/<int:position_id>`
- GET `/api/portfolio/summary`
- GET `/api/portfolio/monitors`
- POST `/api/portfolio/monitors`
- PUT `/api/portfolio/monitors/<int:monitor_id>`
- DELETE `/api/portfolio/monitors/<int:monitor_id>`
- POST `/api/portfolio/monitors/<int:monitor_id>/run`
- GET `/api/portfolio/alerts`
- POST `/api/portfolio/alerts`
- PUT `/api/portfolio/alerts/<int:alert_id>`
- DELETE `/api/portfolio/alerts/<int:alert_id>`
- GET `/api/portfolio/groups`
- POST `/api/portfolio/groups/rename`

### 移除接口

- 无

### 修改接口

- 无

## 接口详情

### DELETE /api/portfolio/alerts/<int:alert_id>

- 认证级别：登录认证
- 描述：Delete an alert for the current user.
- 处理函数：`delete_alert`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/portfolio.py:1006`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| alert_id | integer | path | 是 | - | 路径参数 |

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

### DELETE /api/portfolio/monitors/<int:monitor_id>

- 认证级别：登录认证
- 描述：Delete a monitor for the current user.
- 处理函数：`delete_monitor`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/portfolio.py:708`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| monitor_id | integer | path | 是 | - | 路径参数 |

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

### DELETE /api/portfolio/positions/<int:position_id>

- 认证级别：登录认证
- 描述：Delete a position for the current user.
- 处理函数：`delete_position`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/portfolio.py:381`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| position_id | integer | path | 是 | - | 路径参数 |

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

### GET /api/portfolio/alerts

- 认证级别：登录认证
- 描述：Get all position alerts for the current user.
- 处理函数：`get_alerts`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/portfolio.py:795`

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

### GET /api/portfolio/groups

- 认证级别：登录认证
- 描述：Get list of all groups with position counts for the current user.
- 处理函数：`get_groups`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/portfolio.py:1030`

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

### GET /api/portfolio/monitors

- 认证级别：登录认证
- 描述：Get all position monitors for the current user.
- 处理函数：`get_monitors`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/portfolio.py:525`

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

### GET /api/portfolio/positions

- 认证级别：登录认证
- 描述：Get all manual positions with current prices for the current user.
- 处理函数：`get_positions`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/portfolio.py:144`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| refresh | 待确认 | query | 否 | '' | 查询参数 |

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

### GET /api/portfolio/summary

- 认证级别：登录认证
- 描述：Get portfolio summary with total value, PnL, and market distribution for the current user.
- 处理函数：`get_portfolio_summary`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/portfolio.py:403`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| refresh | 待确认 | query | 否 | '' | 查询参数 |

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

### POST /api/portfolio/alerts

- 认证级别：登录认证
- 描述：Add a new position alert for the current user.
- 处理函数：`add_alert`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/portfolio.py:848`

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

### POST /api/portfolio/groups/rename

- 认证级别：登录认证
- 描述：Rename a group for the current user.
- 处理函数：`rename_group`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/portfolio.py:1082`

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

### POST /api/portfolio/monitors

- 认证级别：登录认证
- 描述：Add a new position monitor for the current user.
- 处理函数：`add_monitor`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/portfolio.py:571`

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

### POST /api/portfolio/monitors/<int:monitor_id>/run

- 认证级别：登录认证
- 描述：Manually trigger a monitor to run immediately.
- 处理函数：`run_monitor_now`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/portfolio.py:730`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| monitor_id | integer | path | 是 | - | 路径参数 |
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

### POST /api/portfolio/positions

- 认证级别：登录认证
- 描述：Add a new manual position for the current user.
- 处理函数：`add_position`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/portfolio.py:249`

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

### PUT /api/portfolio/alerts/<int:alert_id>

- 认证级别：登录认证
- 描述：Update an existing alert for the current user.
- 处理函数：`update_alert`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/portfolio.py:943`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| alert_id | integer | path | 是 | - | 路径参数 |
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

### PUT /api/portfolio/monitors/<int:monitor_id>

- 认证级别：登录认证
- 描述：Update an existing monitor for the current user.
- 处理函数：`update_monitor`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/portfolio.py:639`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| monitor_id | integer | path | 是 | - | 路径参数 |
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

### PUT /api/portfolio/positions/<int:position_id>

- 认证级别：登录认证
- 描述：Update an existing position for the current user.
- 处理函数：`update_position`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/portfolio.py:312`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| position_id | integer | path | 是 | - | 路径参数 |
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
| DELETE | `/api/portfolio/alerts/<int:alert_id>` | 登录认证 | Delete an alert for the current user. |
| DELETE | `/api/portfolio/monitors/<int:monitor_id>` | 登录认证 | Delete a monitor for the current user. |
| DELETE | `/api/portfolio/positions/<int:position_id>` | 登录认证 | Delete a position for the current user. |
| GET | `/api/portfolio/alerts` | 登录认证 | Get all position alerts for the current user. |
| GET | `/api/portfolio/groups` | 登录认证 | Get list of all groups with position counts for the current user. |
| GET | `/api/portfolio/monitors` | 登录认证 | Get all position monitors for the current user. |
| GET | `/api/portfolio/positions` | 登录认证 | Get all manual positions with current prices for the current user. |
| GET | `/api/portfolio/summary` | 登录认证 | Get portfolio summary with total value, PnL, and market distribution for the current user. |
| POST | `/api/portfolio/alerts` | 登录认证 | Add a new position alert for the current user. |
| POST | `/api/portfolio/groups/rename` | 登录认证 | Rename a group for the current user. |
| POST | `/api/portfolio/monitors` | 登录认证 | Add a new position monitor for the current user. |
| POST | `/api/portfolio/monitors/<int:monitor_id>/run` | 登录认证 | Manually trigger a monitor to run immediately. |
| POST | `/api/portfolio/positions` | 登录认证 | Add a new manual position for the current user. |
| PUT | `/api/portfolio/alerts/<int:alert_id>` | 登录认证 | Update an existing alert for the current user. |
| PUT | `/api/portfolio/monitors/<int:monitor_id>` | 登录认证 | Update an existing monitor for the current user. |
| PUT | `/api/portfolio/positions/<int:position_id>` | 登录认证 | Update an existing position for the current user. |
