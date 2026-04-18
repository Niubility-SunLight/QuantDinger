# fast_analysis 模块接口文档

## 变更说明

- 新增接口：8
- 移除接口：0
- 修改接口：0
- 未变化接口：0

### 新增接口

- POST `/api/fast-analysis/analyze`
- POST `/api/fast-analysis/analyze-legacy`
- GET `/api/fast-analysis/history`
- GET `/api/fast-analysis/history/all`
- DELETE `/api/fast-analysis/history/<int:memory_id>`
- POST `/api/fast-analysis/feedback`
- GET `/api/fast-analysis/performance`
- GET `/api/fast-analysis/similar-patterns`

### 移除接口

- 无

### 修改接口

- 无

## 接口详情

### DELETE /api/fast-analysis/history/<int:memory_id>

- 认证级别：登录认证
- 描述：待补充接口说明
- 处理函数：`delete_history`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/fast_analysis.py:536`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| memory_id | integer | path | 是 | - | 路径参数 |

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

### GET /api/fast-analysis/history

- 认证级别：登录认证
- 描述：待补充接口说明
- 处理函数：`get_history`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/fast_analysis.py:456`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| market | 待确认 | query | 否 | '' | 查询参数 |
| symbol | 待确认 | query | 否 | '' | 查询参数 |
| days | 待确认 | query | 否 | 7 | 查询参数 |
| limit | 待确认 | query | 否 | 10 | 查询参数 |

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

### GET /api/fast-analysis/history/all

- 认证级别：登录认证
- 描述：待补充接口说明
- 处理函数：`get_all_history`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/fast_analysis.py:498`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| page | 待确认 | query | 否 | 1 | 查询参数 |
| pagesize | 待确认 | query | 否 | 20 | 查询参数 |

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

### GET /api/fast-analysis/performance

- 认证级别：登录认证
- 描述：待补充接口说明
- 处理函数：`get_performance`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/fast_analysis.py:624`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| market | 待确认 | query | 否 | '' | 查询参数 |
| symbol | 待确认 | query | 否 | '' | 查询参数 |
| days | 待确认 | query | 否 | 30 | 查询参数 |

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

### GET /api/fast-analysis/similar-patterns

- 认证级别：登录认证
- 描述：待补充接口说明
- 处理函数：`get_similar_patterns`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/fast_analysis.py:655`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| market | 待确认 | query | 否 | '' | 查询参数 |
| symbol | 待确认 | query | 否 | '' | 查询参数 |

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

### POST /api/fast-analysis/analyze

- 认证级别：登录认证
- 描述：待补充接口说明
- 处理函数：`analyze`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/fast_analysis.py:115`

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

### POST /api/fast-analysis/analyze-legacy

- 认证级别：登录认证
- 描述：待补充接口说明
- 处理函数：`analyze_legacy`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/fast_analysis.py:315`

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

### POST /api/fast-analysis/feedback

- 认证级别：登录认证
- 描述：待补充接口说明
- 处理函数：`submit_feedback`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/fast_analysis.py:573`

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
| DELETE | `/api/fast-analysis/history/<int:memory_id>` | 登录认证 | 待补充接口说明 |
| GET | `/api/fast-analysis/history` | 登录认证 | 待补充接口说明 |
| GET | `/api/fast-analysis/history/all` | 登录认证 | 待补充接口说明 |
| GET | `/api/fast-analysis/performance` | 登录认证 | 待补充接口说明 |
| GET | `/api/fast-analysis/similar-patterns` | 登录认证 | 待补充接口说明 |
| POST | `/api/fast-analysis/analyze` | 登录认证 | 待补充接口说明 |
| POST | `/api/fast-analysis/analyze-legacy` | 登录认证 | 待补充接口说明 |
| POST | `/api/fast-analysis/feedback` | 登录认证 | 待补充接口说明 |
