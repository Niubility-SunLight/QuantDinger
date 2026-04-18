# market 模块接口文档

## 变更说明

- 新增接口：11
- 移除接口：0
- 修改接口：0
- 未变化接口：0

### 新增接口

- GET `/api/market/config`
- GET `/api/market/types`
- GET `/api/market/menuFooterConfig`
- GET `/api/market/symbols/search`
- GET `/api/market/symbols/hot`
- GET `/api/market/watchlist/get`
- POST `/api/market/watchlist/add`
- POST `/api/market/watchlist/remove`
- GET `/api/market/watchlist/prices`
- GET `/api/market/price`
- POST `/api/market/stock/name`

### 移除接口

- 无

### 修改接口

- 无

## 接口详情

### GET /api/market/config

- 认证级别：公开
- 描述：待补充接口说明
- 处理函数：`get_public_config`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/market.py:54`

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

### GET /api/market/menuFooterConfig

- 认证级别：公开
- 描述：待补充接口说明
- 处理函数：`get_menu_footer_config`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/market.py:139`

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

### GET /api/market/price

- 认证级别：公开
- 描述：待补充接口说明
- 处理函数：`get_price`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/market.py:477`

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

### GET /api/market/symbols/hot

- 认证级别：公开
- 描述：Return a small curated hot list per market (local-only).
- 处理函数：`get_hot_symbols`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/market.py:244`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| market | 待确认 | query | 否 | - | 查询参数 |
| limit | 待确认 | query | 否 | - | 查询参数 |

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

### GET /api/market/symbols/search

- 认证级别：公开
- 描述：待补充接口说明
- 处理函数：`search_symbols`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/market.py:164`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| market | 待确认 | query | 否 | - | 查询参数 |
| keyword | 待确认 | query | 否 | - | 查询参数 |
| limit | 待确认 | query | 否 | - | 查询参数 |

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

### GET /api/market/types

- 认证级别：公开
- 描述：Return supported market types for the add-watchlist modal.
- 处理函数：`get_market_types`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/market.py:94`

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

### GET /api/market/watchlist/get

- 认证级别：登录认证
- 描述：Get watchlist for the current user.
- 处理函数：`get_watchlist`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/market.py:257`

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

### GET /api/market/watchlist/prices

- 认证级别：公开
- 描述：待补充接口说明
- 处理函数：`get_watchlist_prices`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/market.py:389`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| watchlist | 待确认 | query | 否 | '[]' | 查询参数 |

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

### POST /api/market/stock/name

- 认证级别：公开
- 描述：待补充接口说明
- 处理函数：`get_stock_name`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/market.py:514`

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

### POST /api/market/watchlist/add

- 认证级别：登录认证
- 描述：Add a symbol to watchlist for the current user.
- 处理函数：`add_watchlist`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/market.py:300`

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

### POST /api/market/watchlist/remove

- 认证级别：登录认证
- 描述：Remove a symbol from watchlist for the current user.
- 处理函数：`remove_watchlist`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/market.py:339`

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
| GET | `/api/market/config` | 公开 | 待补充接口说明 |
| GET | `/api/market/menuFooterConfig` | 公开 | 待补充接口说明 |
| GET | `/api/market/price` | 公开 | 待补充接口说明 |
| GET | `/api/market/symbols/hot` | 公开 | Return a small curated hot list per market (local-only). |
| GET | `/api/market/symbols/search` | 公开 | 待补充接口说明 |
| GET | `/api/market/types` | 公开 | Return supported market types for the add-watchlist modal. |
| GET | `/api/market/watchlist/get` | 登录认证 | Get watchlist for the current user. |
| GET | `/api/market/watchlist/prices` | 公开 | 待补充接口说明 |
| POST | `/api/market/stock/name` | 公开 | 待补充接口说明 |
| POST | `/api/market/watchlist/add` | 登录认证 | Add a symbol to watchlist for the current user. |
| POST | `/api/market/watchlist/remove` | 登录认证 | Remove a symbol from watchlist for the current user. |
