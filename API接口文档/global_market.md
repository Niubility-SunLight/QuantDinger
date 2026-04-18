# global_market 模块接口文档

## 变更说明

- 新增接口：7
- 移除接口：0
- 修改接口：0
- 未变化接口：0

### 新增接口

- GET `/api/global-market/overview`
- GET `/api/global-market/heatmap`
- GET `/api/global-market/news`
- GET `/api/global-market/calendar`
- GET `/api/global-market/sentiment`
- GET `/api/global-market/opportunities`
- POST `/api/global-market/refresh`

### 移除接口

- 无

### 修改接口

- 无

## 接口详情

### GET /api/global-market/calendar

- 认证级别：登录认证
- 描述：Get economic calendar events with impact indicators.
- 处理函数：`economic_calendar`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/global_market.py:156`

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

### GET /api/global-market/heatmap

- 认证级别：登录认证
- 描述：Get market heatmap data for crypto, stock sectors, forex, and indices.
- 处理函数：`market_heatmap`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/global_market.py:115`

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

### GET /api/global-market/news

- 认证级别：登录认证
- 描述：Get financial news from various sources.  Query params: lang ('cn'|'en'|'all').
- 处理函数：`market_news`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/global_market.py:134`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| lang | 待确认 | query | 否 | "all" | 查询参数 |

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

### GET /api/global-market/opportunities

- 认证级别：登录认证
- 描述：Scan for trading opportunities across Crypto, US/CN/HK Stocks, and Forex.
- 处理函数：`trading_opportunities`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/global_market.py:234`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| force | 待确认 | query | 否 | "" | 查询参数 |

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

### GET /api/global-market/overview

- 认证级别：登录认证
- 描述：Get global market overview including indices, forex, crypto, and commodities.
- 处理函数：`market_overview`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/global_market.py:58`

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

### GET /api/global-market/sentiment

- 认证级别：登录认证
- 描述：Get comprehensive market sentiment indicators.
- 处理函数：`market_sentiment`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/global_market.py:175`

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

### POST /api/global-market/refresh

- 认证级别：登录认证
- 描述：Force refresh all market data (clears cache).
- 处理函数：`refresh_data`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/global_market.py:279`

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

## 接口索引表

| 方法 | 路径 | 认证 | 描述 |
|---|---|---|---|
| GET | `/api/global-market/calendar` | 登录认证 | Get economic calendar events with impact indicators. |
| GET | `/api/global-market/heatmap` | 登录认证 | Get market heatmap data for crypto, stock sectors, forex, and indices. |
| GET | `/api/global-market/news` | 登录认证 | Get financial news from various sources.  Query params: lang ('cn'|'en'|'all'). |
| GET | `/api/global-market/opportunities` | 登录认证 | Scan for trading opportunities across Crypto, US/CN/HK Stocks, and Forex. |
| GET | `/api/global-market/overview` | 登录认证 | Get global market overview including indices, forex, crypto, and commodities. |
| GET | `/api/global-market/sentiment` | 登录认证 | Get comprehensive market sentiment indicators. |
| POST | `/api/global-market/refresh` | 登录认证 | Force refresh all market data (clears cache). |
