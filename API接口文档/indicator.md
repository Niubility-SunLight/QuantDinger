# indicator 模块接口文档

## 变更说明

- 新增接口：9
- 移除接口：0
- 修改接口：0
- 未变化接口：0

### 新增接口

- GET `/api/indicator/getIndicators`
- POST `/api/indicator/saveIndicator`
- POST `/api/indicator/deleteIndicator`
- GET `/api/indicator/getIndicatorParams`
- POST `/api/indicator/verifyCode`
- POST `/api/indicator/aiGenerate`
- POST `/api/indicator/codeQualityHints`
- POST `/api/indicator/parseStrategyConfig`
- POST `/api/indicator/callIndicator`

### 移除接口

- 无

### 修改接口

- 无

## 接口详情

### GET /api/indicator/getIndicatorParams

- 认证级别：登录认证
- 描述：待补充接口说明
- 处理函数：`get_indicator_params`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/indicator.py:633`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| indicator_id | 待确认 | query | 否 | - | 查询参数 |

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

### GET /api/indicator/getIndicators

- 认证级别：登录认证
- 描述：待补充接口说明
- 处理函数：`get_indicators`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/indicator.py:413`

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

### POST /api/indicator/aiGenerate

- 认证级别：登录认证
- 描述：待补充接口说明
- 处理函数：`ai_generate`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/indicator.py:719`

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

### POST /api/indicator/callIndicator

- 认证级别：登录认证
- 描述：待补充接口说明
- 处理函数：`call_indicator`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/indicator.py:1227`

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

### POST /api/indicator/codeQualityHints

- 认证级别：登录认证
- 描述：待补充接口说明
- 处理函数：`code_quality_hints`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/indicator.py:1187`

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

### POST /api/indicator/deleteIndicator

- 认证级别：登录认证
- 描述：Delete an indicator by id for the current user.
- 处理函数：`delete_indicator`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/indicator.py:607`

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

### POST /api/indicator/parseStrategyConfig

- 认证级别：登录认证
- 描述：待补充接口说明
- 处理函数：`parse_strategy_config`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/indicator.py:1204`

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

### POST /api/indicator/saveIndicator

- 认证级别：登录认证
- 描述：待补充接口说明
- 处理函数：`save_indicator`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/indicator.py:455`

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

### POST /api/indicator/verifyCode

- 认证级别：登录认证
- 描述：待补充接口说明
- 处理函数：`verify_code`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/indicator.py:675`

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
| GET | `/api/indicator/getIndicatorParams` | 登录认证 | 待补充接口说明 |
| GET | `/api/indicator/getIndicators` | 登录认证 | 待补充接口说明 |
| POST | `/api/indicator/aiGenerate` | 登录认证 | 待补充接口说明 |
| POST | `/api/indicator/callIndicator` | 登录认证 | 待补充接口说明 |
| POST | `/api/indicator/codeQualityHints` | 登录认证 | 待补充接口说明 |
| POST | `/api/indicator/deleteIndicator` | 登录认证 | Delete an indicator by id for the current user. |
| POST | `/api/indicator/parseStrategyConfig` | 登录认证 | 待补充接口说明 |
| POST | `/api/indicator/saveIndicator` | 登录认证 | 待补充接口说明 |
| POST | `/api/indicator/verifyCode` | 登录认证 | 待补充接口说明 |
