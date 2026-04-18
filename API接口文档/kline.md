# kline 模块接口文档

## 变更说明

- 新增接口：2
- 移除接口：0
- 修改接口：0
- 未变化接口：0

### 新增接口

- GET `/api/indicator/kline`
- GET `/api/indicator/price`

### 移除接口

- 无

### 修改接口

- 无

## 接口详情

### GET /api/indicator/kline

- 认证级别：公开
- 描述：待补充接口说明
- 处理函数：`get_kline`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/kline.py:18`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| market | 待确认 | query | 否 | 'USStock' | 查询参数 |
| symbol | 待确认 | query | 否 | '' | 查询参数 |
| timeframe | 待确认 | query | 否 | '1D' | 查询参数 |
| limit | 待确认 | query | 否 | 300 | 查询参数 |
| before_time | 待确认 | query | 否 | - | 查询参数 |
| beforeTime | 待确认 | query | 否 | - | 查询参数 |

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

### GET /api/indicator/price

- 认证级别：公开
- 描述：获取最新价格
- 处理函数：`get_price`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/kline.py:88`

请求参数：

| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |
|---|---|---|---|---|---|
| market | 待确认 | query | 否 | 'USStock' | 查询参数 |
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

## 接口索引表

| 方法 | 路径 | 认证 | 描述 |
|---|---|---|---|
| GET | `/api/indicator/kline` | 公开 | 待补充接口说明 |
| GET | `/api/indicator/price` | 公开 | 获取最新价格 |
