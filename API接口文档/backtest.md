# backtest 模块接口文档

## 变更说明

- 新增接口：5
- 移除接口：0
- 修改接口：0
- 未变化接口：0

### 新增接口

- GET `/api/indicator/backtest/precision-info`
- POST `/api/indicator/backtest`
- GET `/api/indicator/backtest/history`
- GET `/api/indicator/backtest/get`
- POST `/api/indicator/backtest/aiAnalyze`

### 移除接口

- 无

### 修改接口

- 无

## 接口详情

### GET /api/indicator/backtest/get

- 认证级别：登录认证
- 描述：待补充接口说明
- 处理函数：`get_backtest_run`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/backtest.py:416`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| runId | 待确认 | query | 否 | - | 查询参数 |

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

### GET /api/indicator/backtest/history

- 认证级别：登录认证
- 描述：待补充接口说明
- 处理函数：`get_backtest_history`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/backtest.py:369`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| limit | 待确认 | query | 否 | - | 查询参数 |
| offset | 待确认 | query | 否 | - | 查询参数 |
| indicatorId | 待确认 | query | 否 | - | 查询参数 |
| strategyId | 待确认 | query | 否 | - | 查询参数 |
| runType | 待确认 | query | 否 | - | 查询参数 |
| symbol | 待确认 | query | 否 | - | 查询参数 |
| market | 待确认 | query | 否 | - | 查询参数 |
| timeframe | 待确认 | query | 否 | - | 查询参数 |

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

### GET /api/indicator/backtest/precision-info

- 认证级别：公开
- 描述：待补充接口说明
- 处理函数：`get_precision_info`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/backtest.py:111`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| market | 待确认 | query | 否 | 'crypto' | 查询参数 |
| startDate | 待确认 | query | 否 | '' | 查询参数 |
| endDate | 待确认 | query | 否 | '' | 查询参数 |

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

### POST /api/indicator/backtest

- 认证级别：登录认证
- 描述：待补充接口说明
- 处理函数：`run_backtest`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/backtest.py:149`

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

### POST /api/indicator/backtest/aiAnalyze

- 认证级别：登录认证
- 描述：待补充接口说明
- 处理函数：`ai_analyze_backtest_runs`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/backtest.py:656`

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
| GET | `/api/indicator/backtest/get` | 登录认证 | 待补充接口说明 |
| GET | `/api/indicator/backtest/history` | 登录认证 | 待补充接口说明 |
| GET | `/api/indicator/backtest/precision-info` | 公开 | 待补充接口说明 |
| POST | `/api/indicator/backtest` | 登录认证 | 待补充接口说明 |
| POST | `/api/indicator/backtest/aiAnalyze` | 登录认证 | 待补充接口说明 |
