/**
 * 生成后端接口文档（Markdown，版本化）
 * 说明：
 * - 扫描 backend_api_python/app/routes 下的 Flask 路由
 * - 自动生成 interfaceDocs/API接口文档-V{n}.md
 * - 对比上一版文档，输出新增/移除/修改统计
 */

const fs = require("fs");
const path = require("path");

const INDEX_START = "<!-- API_INDEX_START";
const INDEX_END = "API_INDEX_END -->";

// 解析 register_blueprint 中的蓝图与 url_prefix 映射
function parseBlueprintPrefixMap(initFilePath) {
  const text = fs.readFileSync(initFilePath, "utf8");
  const map = new Map();
  const regex = /register_blueprint\((\w+)\s*(?:,\s*url_prefix\s*=\s*['"]([^'"]*)['"])?/g;

  for (const match of text.matchAll(regex)) {
    const blueprint = match[1];
    const prefix = match[2] || "";
    map.set(blueprint, prefix);
  }

  return map;
}

// 将路径前缀与路由拼接成标准路径
function joinPath(prefix, routePath) {
  const left = (prefix || "").trim();
  const right = (routePath || "").trim();
  const full = `${left}${right}`.replace(/\/+/g, "/");
  if (!full.startsWith("/")) {
    return `/${full}`;
  }
  return full;
}

// 读取装饰器调用（支持多行）
function readDecoratorCall(lines, startIndex) {
  let text = "";
  let index = startIndex;
  let balance = 0;
  let started = false;

  while (index < lines.length) {
    const line = lines[index];
    text += `${line}\n`;

    for (const char of line) {
      if (char === "(") {
        balance += 1;
        started = true;
      } else if (char === ")") {
        balance -= 1;
      }
    }

    if (started && balance <= 0) {
      break;
    }
    index += 1;
  }

  return { text, endIndex: index };
}

// 从函数体中提取缩进块文本
function extractFunctionBody(lines, defIndex) {
  const defLine = lines[defIndex] || "";
  const defIndent = defLine.match(/^\s*/)?.[0].length || 0;
  const body = [];

  for (let i = defIndex + 1; i < lines.length; i += 1) {
    const line = lines[i];
    if (!line.trim()) {
      body.push(line);
      continue;
    }

    const indent = line.match(/^\s*/)?.[0].length || 0;
    if (indent <= defIndent) {
      break;
    }
    body.push(line);
  }

  return body.join("\n");
}

// 从函数定义后提取文档字符串第一行
function extractDocSummary(lines, defIndex) {
  for (let i = defIndex + 1; i < Math.min(lines.length, defIndex + 12); i += 1) {
    const line = lines[i].trim();
    if (!line) {
      continue;
    }

    const tripleDouble = line.match(/^"""([\s\S]*?)"""$/);
    if (tripleDouble) {
      return tripleDouble[1].trim() || "待补充接口说明";
    }
    const tripleSingle = line.match(/^'''([\s\S]*?)'''$/);
    if (tripleSingle) {
      return tripleSingle[1].trim() || "待补充接口说明";
    }
    const tripleDoubleStart = line.match(/^"""(.+)$/);
    if (tripleDoubleStart) {
      return tripleDoubleStart[1].replace(/"""$/, "").trim() || "待补充接口说明";
    }
    const tripleSingleStart = line.match(/^'''(.+)$/);
    if (tripleSingleStart) {
      return tripleSingleStart[1].replace(/'''$/, "").trim() || "待补充接口说明";
    }
    if (!line.startsWith("#")) {
      break;
    }
  }
  return "待补充接口说明";
}

// 推断认证级别
function inferAuthLevel(decorators) {
  const full = decorators.join("\n");
  if (/\badmin_required\b/.test(full)) {
    return "管理员认证";
  }
  if (/\blogin_required\b/.test(full) || /\bjwt_required\b/.test(full)) {
    return "登录认证";
  }
  return "公开";
}

// 从路径中提取 path 参数
function parsePathParams(routePath) {
  const params = [];
  const regex = /<(?:(\w+):)?(\w+)>/g;
  const typeMap = {
    int: "integer",
    float: "number",
    string: "string",
    path: "string",
    uuid: "string",
  };

  for (const match of routePath.matchAll(regex)) {
    params.push({
      name: match[2],
      type: typeMap[match[1]] || "string",
      in: "path",
      required: "是",
      default: "-",
      desc: "路径参数",
    });
  }

  return params;
}

// 从函数体中提取 query/body 参数
function parseRequestParams(bodyText) {
  const queryParams = new Map();
  const bodyParams = new Map();

  const queryGetRegex = /request\.args\.get\(\s*['"]([^'"]+)['"]\s*(?:,\s*([^)]+))?\)/g;
  const queryIndexRegex = /request\.args\[\s*['"]([^'"]+)['"]\s*\]/g;
  const bodyJsonRegex = /request\.(?:json|get_json\(\))\.get\(\s*['"]([^'"]+)['"]\s*(?:,\s*([^)]+))?\)/g;
  const bodyFormRegex = /request\.form\.get\(\s*['"]([^'"]+)['"]\s*(?:,\s*([^)]+))?\)/g;

  for (const match of bodyText.matchAll(queryGetRegex)) {
    queryParams.set(match[1], {
      name: match[1],
      type: "待确认",
      in: "query",
      required: "否",
      default: (match[2] || "-").trim(),
      desc: "查询参数",
    });
  }
  for (const match of bodyText.matchAll(queryIndexRegex)) {
    queryParams.set(match[1], {
      name: match[1],
      type: "待确认",
      in: "query",
      required: "是",
      default: "-",
      desc: "查询参数",
    });
  }
  for (const match of bodyText.matchAll(bodyJsonRegex)) {
    bodyParams.set(match[1], {
      name: match[1],
      type: "待确认",
      in: "body",
      required: "否",
      default: (match[2] || "-").trim(),
      desc: "JSON 请求体参数",
    });
  }
  for (const match of bodyText.matchAll(bodyFormRegex)) {
    bodyParams.set(match[1], {
      name: match[1],
      type: "待确认",
      in: "body",
      required: "否",
      default: (match[2] || "-").trim(),
      desc: "表单参数",
    });
  }

  return [...queryParams.values(), ...bodyParams.values()];
}

// 解析 methods=["GET","POST"] 这种数组
function parseMethodsFromDecorator(decoratorText) {
  const methodsMatch = decoratorText.match(/methods\s*=\s*\[([^\]]+)\]/s);
  if (!methodsMatch) {
    return ["GET"];
  }

  return methodsMatch[1]
    .split(",")
    .map((item) => item.trim().replace(/^['"]|['"]$/g, ""))
    .filter(Boolean)
    .map((item) => item.toUpperCase());
}

// 从单个路由文件提取接口信息
function parseRouteFile(filePath, prefixMap) {
  const text = fs.readFileSync(filePath, "utf8");
  const moduleName = path.basename(filePath, ".py");
  const lines = text.split(/\r?\n/);

  const blueprintVars = new Set();
  for (const line of lines) {
    const m = line.match(/^(\w+)\s*=\s*Blueprint\(/);
    if (m) {
      blueprintVars.add(m[1]);
    }
  }

  const endpoints = [];
  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i].trim();
    if (!line.startsWith("@")) {
      continue;
    }

    const routeMatch = line.match(/^@(\w+)\.(route|get|post|put|delete|patch)\s*\(/);
    if (!routeMatch) {
      continue;
    }

    const blueprint = routeMatch[1];
    if (!blueprintVars.has(blueprint)) {
      continue;
    }

    const call = readDecoratorCall(lines, i);
    const decoratorText = call.text;
    const routeType = routeMatch[2].toLowerCase();
    const pathMatch = decoratorText.match(/['"]([^'"]+)['"]/);
    if (!pathMatch) {
      i = call.endIndex;
      continue;
    }

    const routePath = pathMatch[1];
    const methods =
      routeType === "route" ? parseMethodsFromDecorator(decoratorText) : [routeType.toUpperCase()];

    const decorators = [decoratorText.trim()];
    let defIndex = call.endIndex + 1;
    while (defIndex < lines.length && lines[defIndex].trim().startsWith("@")) {
      decorators.push(lines[defIndex].trim());
      defIndex += 1;
    }

    const defLine = lines[defIndex] || "";
    const funcMatch = defLine.match(/^\s*def\s+(\w+)\s*\(/);
    if (!funcMatch) {
      i = call.endIndex;
      continue;
    }

    const bodyText = extractFunctionBody(lines, defIndex);
    const description = extractDocSummary(lines, defIndex);
    const auth = inferAuthLevel(decorators);
    const commonParams = [...parsePathParams(routePath), ...parseRequestParams(bodyText)];
    const fullPath = joinPath(prefixMap.get(blueprint) || "", routePath);

    for (const method of methods) {
      endpoints.push({
        module: moduleName,
        blueprint,
        method,
        path: fullPath,
        auth,
        description,
        params: commonParams,
        requestBodyExample:
          method === "POST" || method === "PUT" || method === "PATCH" ? "{\n  \"字段\": \"待确认\"\n}" : "-",
        successExample: "{\n  \"success\": true,\n  \"data\": \"待确认\"\n}",
        failureExamples: [
          { code: 401, body: '{ "success": false, "message": "未授权" }' },
          { code: 403, body: '{ "success": false, "message": "无权限" }' },
          { code: 500, body: '{ "success": false, "message": "服务器异常" }' },
        ],
        source: `${filePath.replace(/\\/g, "/")}:${defIndex + 1}`,
      });
    }

    i = call.endIndex;
  }

  return endpoints;
}

// 读取当前最大版本号
function readLatestVersion(docDir) {
  if (!fs.existsSync(docDir)) {
    return { latest: 0, latestFile: null };
  }
  const files = fs
    .readdirSync(docDir)
    .map((name) => {
      const m = name.match(/^API接口文档-V(\d+)\.md$/);
      if (!m) {
        return null;
      }
      return { name, version: Number(m[1]) };
    })
    .filter(Boolean)
    .sort((a, b) => b.version - a.version);

  if (files.length === 0) {
    return { latest: 0, latestFile: null };
  }
  return { latest: files[0].version, latestFile: path.join(docDir, files[0].name) };
}

// 从历史文档末尾隐藏块恢复接口索引
function parseHistoricalEndpoints(docPath) {
  if (!docPath || !fs.existsSync(docPath)) {
    return [];
  }
  const text = fs.readFileSync(docPath, "utf8");
  const start = text.indexOf(INDEX_START);
  const end = text.indexOf(INDEX_END);
  if (start === -1 || end === -1 || end <= start) {
    return [];
  }

  const jsonPart = text.slice(start + INDEX_START.length, end).trim();
  try {
    const parsed = JSON.parse(jsonPart);
    return Array.isArray(parsed.endpoints) ? parsed.endpoints : [];
  } catch {
    return [];
  }
}

// 对比变更
function diffEndpoints(oldEndpoints, newEndpoints) {
  const keyOf = (it) => `${it.method} ${it.path}`;
  const oldMap = new Map(oldEndpoints.map((item) => [keyOf(item), item]));
  const newMap = new Map(newEndpoints.map((item) => [keyOf(item), item]));

  const added = [];
  const removed = [];
  const changed = [];
  const unchanged = [];

  for (const [key, item] of newMap.entries()) {
    const oldItem = oldMap.get(key);
    if (!oldItem) {
      added.push(item);
      continue;
    }

    const oldSignature = JSON.stringify({
      auth: oldItem.auth,
      description: oldItem.description,
      params: oldItem.params || [],
    });
    const newSignature = JSON.stringify({
      auth: item.auth,
      description: item.description,
      params: item.params || [],
    });

    if (oldSignature !== newSignature) {
      changed.push(item);
    } else {
      unchanged.push(item);
    }
  }

  for (const [key, item] of oldMap.entries()) {
    if (!newMap.has(key)) {
      removed.push(item);
    }
  }

  return { added, removed, changed, unchanged };
}

// 按模块分组
function groupByModule(endpoints) {
  const grouped = new Map();
  for (const endpoint of endpoints) {
    if (!grouped.has(endpoint.module)) {
      grouped.set(endpoint.module, []);
    }
    grouped.get(endpoint.module).push(endpoint);
  }
  return [...grouped.entries()].sort((a, b) => a[0].localeCompare(b[0]));
}

// 生成参数表
function renderParamTable(params) {
  if (!params || params.length === 0) {
    return ["无"];
  }
  const lines = ["| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |", "|---|---|---|---|---|---|"];
  for (const p of params) {
    lines.push(`| ${p.name} | ${p.type} | ${p.in} | ${p.required} | ${p.default} | ${p.desc} |`);
  }
  return lines;
}

// 生成文档内容
function generateMarkdown(version, diff, endpoints, oldVersion) {
  const now = new Date();
  const fmt = (n) => String(n).padStart(2, "0");
  const ts = `${now.getFullYear()}-${fmt(now.getMonth() + 1)}-${fmt(now.getDate())} ${fmt(now.getHours())}:${fmt(
    now.getMinutes(),
  )}:${fmt(now.getSeconds())}`;

  const lines = [];
  lines.push(`# QuantDinger API接口文档-V${version}`);
  lines.push("");
  lines.push(`- 生成时间：${ts}`);
  lines.push("- 扫描目录：`backend_api_python/app/routes`");
  if (oldVersion > 0) {
    lines.push(`- 对比基线：V${oldVersion}`);
  } else {
    lines.push("- 对比基线：首次生成，无历史版本");
  }
  lines.push("");
  lines.push("## 变更说明");
  lines.push("");
  lines.push(`- 新增接口：${diff.added.length}`);
  lines.push(`- 移除接口：${diff.removed.length}`);
  lines.push(`- 修改接口：${diff.changed.length}`);
  lines.push(`- 未变化接口：${diff.unchanged.length}`);
  lines.push("");

  const renderSimpleList = (title, list) => {
    lines.push(`### ${title}`);
    lines.push("");
    if (list.length === 0) {
      lines.push("- 无");
    } else {
      for (const item of list) {
        lines.push(`- ${item.method} \`${item.path}\`（${item.module}）`);
      }
    }
    lines.push("");
  };
  renderSimpleList("新增接口", diff.added);
  renderSimpleList("移除接口", diff.removed);
  renderSimpleList("修改接口", diff.changed);

  lines.push("## 按模块分组接口详情");
  lines.push("");
  for (const [moduleName, list] of groupByModule(endpoints)) {
    lines.push(`### ${moduleName}（${list.length}）`);
    lines.push("");
    for (const item of list.sort((a, b) => `${a.method}${a.path}`.localeCompare(`${b.method}${b.path}`))) {
      lines.push(`#### ${item.method} ${item.path}`);
      lines.push("");
      lines.push(`- 认证级别：${item.auth}`);
      lines.push(`- 描述：${item.description}`);
      lines.push(`- 源码位置：\`${item.source}\``);
      lines.push("");
      lines.push("请求参数：");
      lines.push("");
      lines.push(...renderParamTable(item.params));
      lines.push("");
      lines.push("JSON 请求体示例：");
      lines.push("");
      lines.push("```json");
      lines.push(item.requestBodyExample);
      lines.push("```");
      lines.push("");
      lines.push("成功响应示例（200）：");
      lines.push("");
      lines.push("```json");
      lines.push(item.successExample);
      lines.push("```");
      lines.push("");
      lines.push("常见失败响应示例：");
      lines.push("");
      for (const fail of item.failureExamples) {
        lines.push(`- ${fail.code}`);
        lines.push("```json");
        lines.push(fail.body);
        lines.push("```");
      }
      lines.push("");
    }
  }

  lines.push("## 全量接口索引表");
  lines.push("");
  lines.push("| 方法 | 路径 | 模块 | 认证 | 描述 |");
  lines.push("|---|---|---|---|---|");
  for (const item of [...endpoints].sort((a, b) =>
    `${a.method}|${a.path}|${a.module}`.localeCompare(`${b.method}|${b.path}|${b.module}`),
  )) {
    lines.push(`| ${item.method} | \`${item.path}\` | ${item.module} | ${item.auth} | ${item.description} |`);
  }
  lines.push("");
  lines.push(`${INDEX_START}`);
  lines.push(
    JSON.stringify(
      {
        version,
        endpoints: endpoints.map((item) => ({
          module: item.module,
          method: item.method,
          path: item.path,
          auth: item.auth,
          description: item.description,
          params: item.params,
        })),
      },
      null,
      2,
    ),
  );
  lines.push(INDEX_END);
  lines.push("");

  return lines.join("\n");
}

function main() {
  const repoRoot = process.cwd();
  const routesDir = path.join(repoRoot, "backend_api_python", "app", "routes");
  const initFile = path.join(routesDir, "__init__.py");
  const docDir = path.join(repoRoot, "interfaceDocs");

  const prefixMap = parseBlueprintPrefixMap(initFile);
  const routeFiles = fs
    .readdirSync(routesDir)
    .filter((file) => file.endsWith(".py") && file !== "__init__.py")
    .map((file) => path.join(routesDir, file));

  const endpoints = [];
  for (const filePath of routeFiles) {
    endpoints.push(...parseRouteFile(filePath, prefixMap));
  }

  const { latest, latestFile } = readLatestVersion(docDir);
  const oldEndpoints = parseHistoricalEndpoints(latestFile);
  const version = latest + 1;
  const diff = diffEndpoints(oldEndpoints, endpoints);
  const markdown = generateMarkdown(version, diff, endpoints, latest);
  const versionedPath = path.join(docDir, `API接口文档-V${version}.md`);
  const latestAliasPath = path.join(docDir, "API接口文档.md");

  fs.mkdirSync(docDir, { recursive: true });
  fs.writeFileSync(versionedPath, markdown, "utf8");
  fs.writeFileSync(latestAliasPath, markdown, "utf8");

  const firstGenerate = latest === 0;
  console.log(`已生成：${path.relative(repoRoot, versionedPath).replace(/\\/g, "/")}`);
  console.log(`同步更新：${path.relative(repoRoot, latestAliasPath).replace(/\\/g, "/")}`);
  if (firstGenerate) {
    console.log("历史基线：首次生成，无历史版本可比较");
  } else {
    console.log(`历史基线：V${latest}`);
  }
  console.log(`新增：${diff.added.length}，移除：${diff.removed.length}，修改：${diff.changed.length}`);
  console.log(`接口总数：${endpoints.length}`);
}

main();
