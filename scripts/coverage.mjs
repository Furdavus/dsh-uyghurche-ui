/**
 * Coverage audit for the whole pack (A1 + A2).
 *
 * Expected key sets:
 *   - common / settings.locale  → 权威键表 upstream-locale-namespaces.json
 *   - 9 个 A2 命名空间           → 安装版实际注册的键（tmp/a2-source.json，
 *     由 scripts/extract-upstream.mjs 生成）
 *
 * Run: node scripts/coverage.mjs
 * Exit code 1 on any missing/extra key.
 */
import { readFileSync, existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const root = dirname(dirname(fileURLToPath(import.meta.url)))
const client = readFileSync(join(root, 'lib', 'client.js'), 'utf8')
const table = JSON.parse(readFileSync(join(root, '..', '界面维吾尔语本地化', 'upstream-locale-namespaces.json'), 'utf8')).namespaces

function readBalanced(src, openIdx) {
  let depth = 0, i = openIdx, q = null
  for (; i < src.length; i++) {
    const c = src[i]
    if (q) { if (c === '\\') { i++; continue } if (c === q) q = null; continue }
    if (c === '"' || c === "'" || c === '`') { q = c; continue }
    if (c === '{' || c === '(' || c === '[') depth++
    else if (c === '}' || c === ')' || c === ']') { depth--; if (depth === 0) return src.slice(openIdx, i + 1) }
  }
  return src.slice(openIdx)
}

function parseDict(varName) {
  const m = new RegExp('var ' + varName + ' = \\{').exec(client)
  if (!m) return null
  const obj = readBalanced(client, m.index + m[0].length - 1)
  const keys = new Set()
  for (const k of obj.matchAll(/(?:^|[,{\s])['"]((?:[^'\\]|\\.)+)['"]\s*:/g)) keys.add(k[1])
  return keys
}

const DICTS = [
  ['common', 'ugCommon'],
  ['settings.locale', 'ugSettingsLocale'],
  ['conversation', 'ugConversation'],
  ['chat', 'ugChat'],
  ['workspace', 'ugWorkspace'],
  ['sidebar', 'ugSidebar'],
  ['sidebarFiles', 'ugSidebarFiles'],
  ['sidebarRight', 'ugSidebarRight'],
  ['model', 'ugModel'],
  ['command', 'ugCommand'],
  ['slash.menu', 'ugSlashMenu'],
  ['settings', 'ugSettings'],
  ['settings.models', 'ugSettingsModels'],
  ['settings.plugins', 'ugSettingsPlugins'],
  ['settings.agentPreset', 'ugSettingsAgentPreset'],
  ['settings.pluginInventory', 'ugSettingsPluginInventory'],
  ['settings.theme', 'ugSettingsTheme'],
  ['settings.permission', 'ugSettingsPermission'],
  ['permission.access', 'ugPermissionAccess'],
  ['cordis', 'ugCordis'],
  ['deliverables', 'ugDeliverables'],
  ['subagent', 'ugSubagent'],
  ['feedback', 'ugFeedback'],
  ['workflowRun', 'ugWorkflowRun'],
  ['schedule.catalog', 'ugScheduleCatalog'],
  ['job', 'ugJob'],
  ['question', 'ugQuestion'],
  ['open-in-app', 'ugOpenInApp'],
  ['goal', 'ugGoal'],
  ['plan', 'ugPlan'],
  ['skill', 'ugSkill'],
  ['reference', 'ugReference'],
  ['approval', 'ugApproval'],
  ['session-log-download', 'ugSessionLogDownload'],
  ['documentMarkdown', 'ugDocumentMarkdown'],
  ['documentHtml', 'ugDocumentHtml'],
  ['sidebarImage', 'ugSidebarImage'],
  ['sidebarPdf', 'ugSidebarPdf'],
  ['sidebarCodePreview', 'ugSidebarCodePreview'],
  ['sidebarDocumentPreview', 'ugSidebarDocumentPreview'],
]

const a2 = existsSync(join(root, 'tmp', 'a2-source.json'))
  ? JSON.parse(readFileSync(join(root, 'tmp', 'a2-source.json'), 'utf8'))
  : null
const a3 = existsSync(join(root, 'tmp', 'a3-source.json'))
  ? JSON.parse(readFileSync(join(root, 'tmp', 'a3-source.json'), 'utf8'))
  : null
const a4 = existsSync(join(root, 'tmp', 'a4-source.json'))
  ? JSON.parse(readFileSync(join(root, 'tmp', 'a4-source.json'), 'utf8'))
  : null
const a5 = existsSync(join(root, 'tmp', 'a5-source.json'))
  ? JSON.parse(readFileSync(join(root, 'tmp', 'a5-source.json'), 'utf8'))
  : null

const A2_NS = new Set(['conversation', 'chat', 'workspace', 'sidebar', 'sidebarFiles', 'sidebarRight', 'model', 'command', 'slash.menu'])
const A4_NS = new Set(['cordis', 'deliverables', 'subagent', 'feedback', 'workflowRun', 'schedule.catalog', 'job', 'question'])
const A5_NS = new Set(['open-in-app', 'goal', 'plan', 'skill', 'reference', 'approval', 'session-log-download', 'documentMarkdown', 'documentHtml', 'sidebarImage', 'sidebarPdf', 'sidebarCodePreview', 'sidebarDocumentPreview'])
let failed = 0
let total = 0
for (const [ns, varName] of DICTS) {
  const got = parseDict(varName)
  if (!got) { console.log(`${ns}: ✗ bundle 中找不到 ${varName}`); failed++; continue }
  let expected
  if (ns === 'common' || ns === 'settings.locale') {
    expected = Array.isArray(table[ns]) ? table[ns] : Object.keys(table[ns])
  } else {
    const src = A2_NS.has(ns) ? a2 : (A4_NS.has(ns) ? a4 : (A5_NS.has(ns) ? a5 : a3))
    expected = src && src[ns] ? Object.keys(src[ns]).filter((k) => k !== '_incomplete') : null
  }
  if (!expected) { console.log(`${ns}: ✗ 缺少期望键表（先跑 scripts/extract-upstream.mjs ${A2_NS.has(ns) ? 'a2' : A4_NS.has(ns) ? 'a4' : A5_NS.has(ns) ? 'a5' : 'a3'}）`); failed++; continue }
  const missing = expected.filter((k) => !got.has(k))
  const extra = [...got].filter((k) => !expected.includes(k))
  total += got.size
  const ok = !missing.length && !extra.length
  if (!ok) failed++
  console.log(`${ns}: 期望 ${expected.length} / 实有 ${got.size}${ok ? '  ✓' : ''}`)
  if (missing.length) console.log(`  缺少: ${missing.join(', ')}`)
  if (extra.length) console.log(`  多余: ${extra.join(', ')}`)
}

console.log(`\n合计 ${total} 键（A1+A2+A3+A4+A5 目标 1069 = 40 + 407 + 280 + 211 + 131）`)
console.log(failed ? `\n✗ ${failed} 处不一致` : '\n✓ 全部命名空间 100% 覆盖')
process.exit(failed ? 1 : 0)
