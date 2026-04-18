# community 模块接口文档

## 变更说明

- 新增接口：15
- 移除接口：0
- 修改接口：0
- 未变化接口：0

### 新增接口

- GET `/api/community/indicators`
- GET `/api/community/indicators/<int:indicator_id>`
- POST `/api/community/indicators/<int:indicator_id>/purchase`
- POST `/api/community/indicators/<int:indicator_id>/sync`
- GET `/api/community/my-purchases`
- GET `/api/community/indicators/<int:indicator_id>/comments`
- POST `/api/community/indicators/<int:indicator_id>/comments`
- PUT `/api/community/indicators/<int:indicator_id>/comments/<int:comment_id>`
- GET `/api/community/indicators/<int:indicator_id>/my-comment`
- GET `/api/community/indicators/<int:indicator_id>/performance`
- GET `/api/community/admin/pending-indicators`
- GET `/api/community/admin/review-stats`
- POST `/api/community/admin/indicators/<int:indicator_id>/review`
- POST `/api/community/admin/indicators/<int:indicator_id>/unpublish`
- DELETE `/api/community/admin/indicators/<int:indicator_id>`

### 移除接口

- 无

### 修改接口

- 无

## 接口详情

### DELETE /api/community/admin/indicators/<int:indicator_id>

- 认证级别：登录认证
- 描述：删除指标（管理员专用）
- 处理函数：`admin_delete_indicator`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/community.py:442`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| indicator_id | integer | path | 是 | - | 路径参数 |

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

### GET /api/community/admin/pending-indicators

- 认证级别：登录认证
- 描述：待补充接口说明
- 处理函数：`get_pending_indicators`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/community.py:318`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| page | 待确认 | query | 否 | 1 | 查询参数 |
| page_size | 待确认 | query | 否 | 20 | 查询参数 |
| review_status | 待确认 | query | 否 | 'pending' | 查询参数 |

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

### GET /api/community/admin/review-stats

- 认证级别：登录认证
- 描述：获取审核统计数据（管理员专用）
- 处理函数：`get_review_stats`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/community.py:352`

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

### GET /api/community/indicators

- 认证级别：登录认证
- 描述：待补充接口说明
- 处理函数：`get_market_indicators`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/community.py:24`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| page | 待确认 | query | 否 | 1 | 查询参数 |
| page_size | 待确认 | query | 否 | 12 | 查询参数 |
| keyword | 待确认 | query | 否 | '' | 查询参数 |
| pricing_type | 待确认 | query | 否 | '' | 查询参数 |
| sort_by | 待确认 | query | 否 | 'newest' | 查询参数 |

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

### GET /api/community/indicators/<int:indicator_id>

- 认证级别：登录认证
- 描述：获取指标详情
- 处理函数：`get_indicator_detail`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/community.py:64`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| indicator_id | integer | path | 是 | - | 路径参数 |

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

### GET /api/community/indicators/<int:indicator_id>/comments

- 认证级别：登录认证
- 描述：获取指标评论列表
- 处理函数：`get_comments`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/community.py:179`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| indicator_id | integer | path | 是 | - | 路径参数 |
| page | 待确认 | query | 否 | 1 | 查询参数 |
| page_size | 待确认 | query | 否 | 20 | 查询参数 |

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

### GET /api/community/indicators/<int:indicator_id>/my-comment

- 认证级别：登录认证
- 描述：获取当前用户对指定指标的评论（用于编辑）
- 处理函数：`get_my_comment`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/community.py:271`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| indicator_id | integer | path | 是 | - | 路径参数 |

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

### GET /api/community/indicators/<int:indicator_id>/performance

- 认证级别：登录认证
- 描述：获取指标的实盘表现统计
- 处理函数：`get_indicator_performance`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/community.py:293`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| indicator_id | integer | path | 是 | - | 路径参数 |

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

### GET /api/community/my-purchases

- 认证级别：登录认证
- 描述：获取我购买的指标列表
- 处理函数：`get_my_purchases`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/community.py:152`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| page | 待确认 | query | 否 | 1 | 查询参数 |
| page_size | 待确认 | query | 否 | 20 | 查询参数 |

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

### POST /api/community/admin/indicators/<int:indicator_id>/review

- 认证级别：登录认证
- 描述：待补充接口说明
- 处理函数：`review_indicator`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/community.py:370`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| indicator_id | integer | path | 是 | - | 路径参数 |
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

### POST /api/community/admin/indicators/<int:indicator_id>/unpublish

- 认证级别：登录认证
- 描述：待补充接口说明
- 处理函数：`unpublish_indicator`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/community.py:409`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| indicator_id | integer | path | 是 | - | 路径参数 |
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

### POST /api/community/indicators/<int:indicator_id>/comments

- 认证级别：登录认证
- 描述：待补充接口说明
- 处理函数：`add_comment`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/community.py:202`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| indicator_id | integer | path | 是 | - | 路径参数 |
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

### POST /api/community/indicators/<int:indicator_id>/purchase

- 认证级别：登录认证
- 描述：待补充接口说明
- 处理函数：`purchase_indicator`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/community.py:86`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| indicator_id | integer | path | 是 | - | 路径参数 |

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

### POST /api/community/indicators/<int:indicator_id>/sync

- 认证级别：登录认证
- 描述：待补充接口说明
- 处理函数：`sync_purchased_indicator`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/community.py:115`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| indicator_id | integer | path | 是 | - | 路径参数 |

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

### PUT /api/community/indicators/<int:indicator_id>/comments/<int:comment_id>

- 认证级别：登录认证
- 描述：待补充接口说明
- 处理函数：`update_comment`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/community.py:237`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| indicator_id | integer | path | 是 | - | 路径参数 |
| comment_id | integer | path | 是 | - | 路径参数 |
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
| DELETE | `/api/community/admin/indicators/<int:indicator_id>` | 登录认证 | 删除指标（管理员专用） |
| GET | `/api/community/admin/pending-indicators` | 登录认证 | 待补充接口说明 |
| GET | `/api/community/admin/review-stats` | 登录认证 | 获取审核统计数据（管理员专用） |
| GET | `/api/community/indicators` | 登录认证 | 待补充接口说明 |
| GET | `/api/community/indicators/<int:indicator_id>` | 登录认证 | 获取指标详情 |
| GET | `/api/community/indicators/<int:indicator_id>/comments` | 登录认证 | 获取指标评论列表 |
| GET | `/api/community/indicators/<int:indicator_id>/my-comment` | 登录认证 | 获取当前用户对指定指标的评论（用于编辑） |
| GET | `/api/community/indicators/<int:indicator_id>/performance` | 登录认证 | 获取指标的实盘表现统计 |
| GET | `/api/community/my-purchases` | 登录认证 | 获取我购买的指标列表 |
| POST | `/api/community/admin/indicators/<int:indicator_id>/review` | 登录认证 | 待补充接口说明 |
| POST | `/api/community/admin/indicators/<int:indicator_id>/unpublish` | 登录认证 | 待补充接口说明 |
| POST | `/api/community/indicators/<int:indicator_id>/comments` | 登录认证 | 待补充接口说明 |
| POST | `/api/community/indicators/<int:indicator_id>/purchase` | 登录认证 | 待补充接口说明 |
| POST | `/api/community/indicators/<int:indicator_id>/sync` | 登录认证 | 待补充接口说明 |
| PUT | `/api/community/indicators/<int:indicator_id>/comments/<int:comment_id>` | 登录认证 | 待补充接口说明 |
