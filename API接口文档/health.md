# health 模块接口文档

## 变更说明

- 新增接口：3
- 移除接口：0
- 修改接口：0
- 未变化接口：0

### 新增接口

- GET `/`
- GET `/health`
- GET `/api/health`

### 移除接口

- 无

### 修改接口

- 无

## 接口详情

### GET /

- 认证级别：公开
- 描述：API 首页
- 处理函数：`index`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/health.py:11`

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

### GET /api/health

- 认证级别：公开
- 描述：兼容路径：用于容器健康检查/反代探针等场景。
- 处理函数：`api_health_check`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/health.py:31`

请求参数：

无

JSON 请求体示例：

```json
-
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

### GET /health

- 认证级别：公开
- 描述：健康检查
- 处理函数：`health_check`
- 源码位置：`E:/private-QuantDinger/backend_api_python/app/routes/health.py:22`

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

## 接口索引表

| 方法 | 路径 | 认证 | 描述 |
|---|---|---|---|
| GET | `/` | 公开 | API 首页 |
| GET | `/api/health` | 公开 | 兼容路径：用于容器健康检查/反代探针等场景。 |
| GET | `/health` | 公开 | 健康检查 |
