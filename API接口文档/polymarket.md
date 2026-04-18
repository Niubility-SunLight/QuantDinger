# polymarket 模块接口文档

## 变更说明

- 新增接口：2
- 移除接口：0
- 修改接口：0
- 未变化接口：0

### 新增接口

- POST `/api/polymarket/analyze`
- GET `/api/polymarket/history`

### 移除接口

- 无

### 修改接口

- 无

## 接口详情

### GET /api/polymarket/history

- 认证级别：登录认证
- 描述：待补充接口说明
- 处理函数：`get_polymarket_history`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/polymarket.py:233`

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

### POST /api/polymarket/analyze

- 认证级别：登录认证
- 描述：待补充接口说明
- 处理函数：`analyze_polymarket`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/polymarket.py:24`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| model | 待确认 | body | 否 | - | JSON 请求体参数 |

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
| GET | `/api/polymarket/history` | 登录认证 | 待补充接口说明 |
| POST | `/api/polymarket/analyze` | 登录认证 | 待补充接口说明 |
