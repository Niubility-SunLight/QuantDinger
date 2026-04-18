# ai_chat 模块接口文档

## 变更说明

- 新增接口：3
- 移除接口：0
- 修改接口：0
- 未变化接口：0

### 新增接口

- POST `/api/ai/chat/message`
- GET `/api/ai/chat/history`
- POST `/api/ai/chat/history/save`

### 移除接口

- 无

### 修改接口

- 无

## 接口详情

### GET /api/ai/chat/history

- 认证级别：公开
- 描述：Return empty history (compatibility stub).
- 处理函数：`get_chat_history`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/ai_chat.py:36`

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

### POST /api/ai/chat/history/save

- 认证级别：公开
- 描述：No-op save (compatibility stub).
- 处理函数：`save_chat_history`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/ai_chat.py:42`

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

### POST /api/ai/chat/message

- 认证级别：公开
- 描述：待补充接口说明
- 处理函数：`chat_message`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/ai_chat.py:16`

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
| GET | `/api/ai/chat/history` | 公开 | Return empty history (compatibility stub). |
| POST | `/api/ai/chat/history/save` | 公开 | No-op save (compatibility stub). |
| POST | `/api/ai/chat/message` | 公开 | 待补充接口说明 |
