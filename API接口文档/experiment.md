# experiment 模块接口文档

## 变更说明

- 新增接口：6
- 移除接口：0
- 修改接口：0
- 未变化接口：0

### 新增接口

- POST `/api/experiment/regime/detect`
- POST `/api/experiment/pipeline/run`
- POST `/api/experiment/ai-optimize`
- POST `/api/experiment/ai-optimize-sync`
- POST `/api/experiment/structured-tune`
- POST `/api/experiment/save-strategy`

### 移除接口

- 无

### 修改接口

- 无

## 接口详情

### POST /api/experiment/ai-optimize

- 认证级别：登录认证
- 描述：待补充接口说明
- 处理函数：`ai_optimize`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/experiment.py:63`

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

### POST /api/experiment/ai-optimize-sync

- 认证级别：登录认证
- 描述：Non-streaming version (simpler client integration).
- 处理函数：`ai_optimize_sync`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/experiment.py:120`

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

### POST /api/experiment/pipeline/run

- 认证级别：登录认证
- 描述：Legacy grid-search pipeline (kept for backward compat).
- 处理函数：`run_experiment_pipeline`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/experiment.py:44`

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

### POST /api/experiment/regime/detect

- 认证级别：登录认证
- 描述：Detect the current market regime for a symbol/timeframe/date range.
- 处理函数：`detect_market_regime`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/experiment.py:23`

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

### POST /api/experiment/save-strategy

- 认证级别：登录认证
- 描述：Save the best experiment candidate as a strategy record.
- 处理函数：`save_experiment_strategy`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/experiment.py:163`

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

### POST /api/experiment/structured-tune

- 认证级别：登录认证
- 描述：待补充接口说明
- 处理函数：`structured_tune`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/experiment.py:139`

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
| POST | `/api/experiment/ai-optimize` | 登录认证 | 待补充接口说明 |
| POST | `/api/experiment/ai-optimize-sync` | 登录认证 | Non-streaming version (simpler client integration). |
| POST | `/api/experiment/pipeline/run` | 登录认证 | Legacy grid-search pipeline (kept for backward compat). |
| POST | `/api/experiment/regime/detect` | 登录认证 | Detect the current market regime for a symbol/timeframe/date range. |
| POST | `/api/experiment/save-strategy` | 登录认证 | Save the best experiment candidate as a strategy record. |
| POST | `/api/experiment/structured-tune` | 登录认证 | 待补充接口说明 |
