/**
 * 按 Blueprint 维度生成接口文档（Markdown）
 * 说明：
 * - 扫描 backend_api_python/app/routes 下 Flask 路由
 * - 输出目录：API接口文档/
 * - 按 Blueprint 拆分模块文档：{Blueprint名称}.md
 * - 生成 README.md 并输出接口变更统计
 */

const fs = require("fs");
const path = require("path");

const INDEX_START = "<!-- API_BLUEPRINT_INDEX_START";
const INDEX_END = "API_BLUEPRINT_INDEX_END -->";

// 解析 register_blueprint 中“蓝图变量 -> url_prefix”映射
function parseBlueprintPrefixMap(initFilePath) {
  const text = fs.readFileSync(initFilePath, "utf8");
  const map = new Map();
  const regex = /register_blueprint\((\w+)\s*(?:,\s*url_prefix\s*=\s*['"]([^'"]*)['"])?/g;

  for (const match of text.matchAll(regex)) {
    const blueprintVar = match[1];
    const prefix = match[2] || "";
    map.set(blueprintVar, prefix);
  }

  return map;
}

// 拼接 prefix 与路由 path
function joinPath(prefix, routePath) {
  const left = (prefix || "").trim();
  const right = (routePath || "").trim();
  const full = `${left}${right}`.replace(/\/+/g, "/");
  if (!full.startsWith("/")) {
    return `/${full}`;
  }
  return full;
}

// 读取装饰器文本（支持多行）
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

// 提取函数体文本，用于推断参数与返回结构
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

// 读取函数注释摘要（优先 docstring）
function extractDocSummary(lines, defIndex) {
  for (let i = defIndex + 1; i < Math.min(lines.length, defIndex + 16); i += 1) {
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

    if (line.startsWith("#")) {
      return line.replace(/^#+\s*/, "").trim() || "待补充接口说明";
    }

    break;
  }
  return "待补充接口说明";
}

// 推断认证等级
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

// 解析路径参数
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

// 解析 query/body 参数
function parseRequestParams(bodyText) {
  const queryParams = new Map();
  const bodyParams = new Map();

  const queryGetRegex = /request\.args\.get\(\s*['"]([^'"]+)['"]\s*(?:,\s*([^)]+))?\)/g;
  const queryIndexRegex = /request\.args\[\s*['"]([^'"]+)['"]\s*\]/g;
  const bodyJsonRegex = /request\.(?:json|get_json\(\))\.get\(\s*['"]([^'"]+)['"]\s*(?:,\s*([^)]+))?\)/g;
  const bodyFormRegex = /request\.form\.get\(\s*['"]([^'"]+)['"]\s*(?:,\s*([^)]+))?\)/g;
  const bodyDirectRegex = /(?:payload|data|body)\s*=\s*request\.get_json\(/g;

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

  if (bodyDirectRegex.test(bodyText) && bodyParams.size === 0) {
    bodyParams.set("body", {
      name: "body",
      type: "object",
      in: "body",
      required: "待确认",
      default: "-",
      desc: "JSON 请求体（结构待确认）",
    });
  }

  return [...queryParams.values(), ...bodyParams.values()];
}

// 解析 methods=["GET","POST"] 声明
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

// 将 Blueprint 名称转换为安全文件名
function toSafeFileName(name) {
  return name.replace(/[<>:"/\\|?*\x00-\x1f]/g, "_").trim() || "unknown_blueprint";
}

// 提取函数返回结构示例
function inferSuccessExample(bodyText) {
  if (/success_response\s*\(/.test(bodyText)) {
    return '{\n  "success": true,\n  "message": "ok",\n  "data": "待确认"\n}';
  }
  if (/return\s+jsonify\(/.test(bodyText) || /return\s+\{/.test(bodyText)) {
    return '{\n  "code": 1,\n  "msg": "success",\n  "data": "待确认"\n}';
  }
  return '{\n  "data": "待确认"\n}';
}

// 从单个路由文件提取接口
function parseRouteFile(filePath, prefixMap) {
  const text = fs.readFileSync(filePath, "utf8");
  const lines = text.split(/\r?\n/);

  // 路由变量名 -> Blueprint 实际名称
  const blueprintVarNameMap = new Map();
  for (const line of lines) {
    const match = line.match(/^(\w+)\s*=\s*Blueprint\(\s*['"]([^'"]+)['"]/);
    if (match) {
      blueprintVarNameMap.set(match[1], match[2]);
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

    const blueprintVar = routeMatch[1];
    if (!blueprintVarNameMap.has(blueprintVar)) {
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
    const methods = routeType === "route" ? parseMethodsFromDecorator(decoratorText) : [routeType.toUpperCase()];

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

    const funcName = funcMatch[1];
    const bodyText = extractFunctionBody(lines, defIndex);
    const description = extractDocSummary(lines, defIndex);
    const auth = inferAuthLevel(decorators);
    const params = [...parsePathParams(routePath), ...parseRequestParams(bodyText)];
    const fullPath = joinPath(prefixMap.get(blueprintVar) || "", routePath);
    const blueprintName = blueprintVarNameMap.get(blueprintVar) || blueprintVar;

    for (const method of methods) {
      endpoints.push({
        blueprint: blueprintName,
        blueprintVar,
        method,
        path: fullPath,
        auth,
        description,
        params,
        requestBodyExample:
          method === "POST" || method === "PUT" || method === "PATCH" ? '{\n  "字段": "待确认"\n}' : "-",
        successExample: inferSuccessExample(bodyText),
        failureExamples: [
          { code: 401, body: '{ "code": 0, "msg": "未授权", "data": null }' },
          { code: 403, body: '{ "code": 0, "msg": "无权限", "data": null }' },
          { code: 500, body: '{ "code": 0, "msg": "服务器异常", "data": null }' },
        ],
        source: `${filePath.replace(/\\/g, "/")}:${defIndex + 1}`,
        functionName: funcName,
      });
    }

    i = call.endIndex;
  }

  return endpoints;
}

// 从 README 隐藏索引块恢复历史接口
function parseHistoricalEndpoints(readmePath) {
  if (!fs.existsSync(readmePath)) {
    return [];
  }
  const text = fs.readFileSync(readmePath, "utf8");
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

// 对比接口变更（method + path）
function diffEndpoints(oldEndpoints, newEndpoints) {
  const keyOf = (item) => `${item.method} ${item.path}`;
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
      blueprint: oldItem.blueprint,
      auth: oldItem.auth,
      description: oldItem.description,
      params: oldItem.params || [],
    });
    const newSignature = JSON.stringify({
      blueprint: item.blueprint,
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

// 按 Blueprint 分组
function groupByBlueprint(endpoints) {
  const grouped = new Map();
  for (const endpoint of endpoints) {
    if (!grouped.has(endpoint.blueprint)) {
      grouped.set(endpoint.blueprint, []);
    }
    grouped.get(endpoint.blueprint).push(endpoint);
  }
  return grouped;
}

// 渲染参数表
function renderParamTable(params) {
  if (!params || params.length === 0) {
    return ["无"];
  }
  const lines = ["| 名称 | 类型 | 位置 | 必填 | 默认值 | 描述 |", "|---|---|---|---|---|---|"];
  for (const param of params) {
    lines.push(`| ${param.name} | ${param.type} | ${param.in} | ${param.required} | ${param.default} | ${param.desc} |`);
  }
  return lines;
}

// 生成模块文档
function generateBlueprintDoc(blueprint, endpoints, moduleDiff) {
  const lines = [];
  lines.push(`# ${blueprint} 模块接口文档`);
  lines.push("");
  lines.push("## 变更说明");
  lines.push("");
  lines.push(`- 新增接口：${moduleDiff.added.length}`);
  lines.push(`- 移除接口：${moduleDiff.removed.length}`);
  lines.push(`- 修改接口：${moduleDiff.changed.length}`);
  lines.push(`- 未变化接口：${moduleDiff.unchanged.length}`);
  lines.push("");

  const renderList = (title, list) => {
    lines.push(`### ${title}`);
    lines.push("");
    if (list.length === 0) {
      lines.push("- 无");
    } else {
      for (const item of list) {
        lines.push(`- ${item.method} \`${item.path}\``);
      }
    }
    lines.push("");
  };

  renderList("新增接口", moduleDiff.added);
  renderList("移除接口", moduleDiff.removed);
  renderList("修改接口", moduleDiff.changed);

  lines.push("## 接口详情");
  lines.push("");
  const sorted = [...endpoints].sort((a, b) => `${a.method}|${a.path}`.localeCompare(`${b.method}|${b.path}`));
  for (const item of sorted) {
    lines.push(`### ${item.method} ${item.path}`);
    lines.push("");
    lines.push(`- 认证级别：${item.auth}`);
    lines.push(`- 描述：${item.description}`);
    lines.push(`- 处理函数：\`${item.functionName}\``);
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

  lines.push("## 接口索引表");
  lines.push("");
  lines.push("| 方法 | 路径 | 认证 | 描述 |");
  lines.push("|---|---|---|---|");
  for (const item of sorted) {
    lines.push(`| ${item.method} | \`${item.path}\` | ${item.auth} | ${item.description} |`);
  }
  lines.push("");
  return lines.join("\n");
}

// 生成 README 文档
function generateReadme(endpoints, diff, moduleDocsMap, firstGenerate) {
  const now = new Date();
  const fmt = (num) => String(num).padStart(2, "0");
  const ts = `${now.getFullYear()}-${fmt(now.getMonth() + 1)}-${fmt(now.getDate())} ${fmt(now.getHours())}:${fmt(
    now.getMinutes(),
  )}:${fmt(now.getSeconds())}`;

  const lines = [];
  lines.push("# API接口文档");
  lines.push("");
  lines.push(`- 生成时间：${ts}`);
  lines.push("- 扫描目录：`backend_api_python/app/routes`");
  lines.push(`- 文档模式：按 Blueprint 拆分（${moduleDocsMap.size} 个模块）`);
  if (firstGenerate) {
    lines.push("- 对比基线：首次文档，无历史版本可比较");
  } else {
    lines.push("- 对比基线：上一版 README 隐藏索引");
  }
  lines.push("");
  lines.push("## 全局变更统计");
  lines.push("");
  lines.push(`- 新增接口：${diff.added.length}`);
  lines.push(`- 移除接口：${diff.removed.length}`);
  lines.push(`- 修改接口：${diff.changed.length}`);
  lines.push(`- 未变化接口：${diff.unchanged.length}`);
  lines.push(`- 当前接口总数：${endpoints.length}`);
  lines.push("");
  lines.push("## 模块文档导航");
  lines.push("");

  for (const [moduleName, fileName] of [...moduleDocsMap.entries()].sort((a, b) => a[0].localeCompare(b[0]))) {
    lines.push(`- ${moduleName}：\`${fileName}\``);
  }
  lines.push("");
  lines.push("## 全量接口索引");
  lines.push("");
  lines.push("| Blueprint | 方法 | 路径 | 认证 | 描述 |");
  lines.push("|---|---|---|---|---|");
  for (const item of [...endpoints].sort((a, b) =>
    `${a.blueprint}|${a.method}|${a.path}`.localeCompare(`${b.blueprint}|${b.method}|${b.path}`),
  )) {
    lines.push(`| ${item.blueprint} | ${item.method} | \`${item.path}\` | ${item.auth} | ${item.description} |`);
  }
  lines.push("");
  lines.push(`${INDEX_START}`);
  lines.push(
    JSON.stringify(
      {
        generatedAt: ts,
        endpoints: endpoints.map((item) => ({
          blueprint: item.blueprint,
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
  const docDir = path.join(repoRoot, "API接口文档");
  const readmePath = path.join(docDir, "README.md");

  const prefixMap = parseBlueprintPrefixMap(initFile);
  const routeFiles = fs
    .readdirSync(routesDir)
    .filter((fileName) => fileName.endsWith(".py") && fileName !== "__init__.py")
    .map((fileName) => path.join(routesDir, fileName));

  const endpoints = [];
  for (const routeFile of routeFiles) {
    endpoints.push(...parseRouteFile(routeFile, prefixMap));
  }

  const oldEndpoints = parseHistoricalEndpoints(readmePath);
  const firstGenerate = oldEndpoints.length === 0;
  const diff = diffEndpoints(oldEndpoints, endpoints);
  const groupedNew = groupByBlueprint(endpoints);
  const groupedOld = groupByBlueprint(oldEndpoints);
  const moduleDocsMap = new Map();
  const updatedFiles = [];

  fs.mkdirSync(docDir, { recursive: true });

  const allBlueprints = new Set([...groupedNew.keys(), ...groupedOld.keys()]);
  for (const blueprint of [...allBlueprints].sort((a, b) => a.localeCompare(b))) {
    const currentEndpoints = groupedNew.get(blueprint) || [];
    const oldGroupEndpoints = groupedOld.get(blueprint) || [];
    const moduleDiff = diffEndpoints(oldGroupEndpoints, currentEndpoints);

    const safeName = toSafeFileName(blueprint);
    const fileName = `${safeName}.md`;
    const filePath = path.join(docDir, fileName);
    moduleDocsMap.set(blueprint, fileName);

    const markdown = generateBlueprintDoc(blueprint, currentEndpoints, moduleDiff);
    fs.writeFileSync(filePath, markdown, "utf8");
    updatedFiles.push(path.relative(repoRoot, filePath).replace(/\\/g, "/"));
  }

  const readme = generateReadme(endpoints, diff, moduleDocsMap, firstGenerate);
  fs.writeFileSync(readmePath, readme, "utf8");
  updatedFiles.push(path.relative(repoRoot, readmePath).replace(/\\/g, "/"));

  console.log(`文档目录：${path.relative(repoRoot, docDir).replace(/\\/g, "/")}`);
  console.log(`更新文件数量：${updatedFiles.length}`);
  for (const file of updatedFiles) {
    console.log(`- ${file}`);
  }
  if (firstGenerate) {
    console.log("历史基线：首次文档，无历史版本可比较");
  }
  console.log(`新增：${diff.added.length}，移除：${diff.removed.length}，修改：${diff.changed.length}`);
  console.log(`接口总数：${endpoints.length}`);
}

main();
