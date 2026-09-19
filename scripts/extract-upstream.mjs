/**
 * Extract the COMPLETE zh/en source dictionaries for a batch of namespaces
 * from the installed upstream bundles, handling nested object literals,
 * shorthand references ({ zh, en }) and identifier values, then verify
 * against the authoritative table.
 *
 * Run: node scripts/extract-upstream.mjs <a2|a3>
 * Output: tmp/<group>-source.json  { ns: { key: { zh, en } } }
 *         tmp/<group>-source.txt   one line per key (translation draft)
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const root = dirname(dirname(fileURLToPath(import.meta.url)))
const UP = 'C:\\Users\\51277\\.dsh\\profiles\\node_modules\\@deepseek-ai'
const tablePath = join(root, '..', '界面维吾尔语本地化', 'upstream-locale-namespaces.json')
const table = JSON.parse(readFileSync(tablePath, 'utf8')).namespaces

const GROUPS = {
  a2: [
    ['conversation', 'dsh-client-ui-conversation'],
    ['chat', 'dsh-client-ui-chat'],
    ['workspace', 'dsh-client-ui-workspace'],
    ['sidebar', 'dsh-client-ui-sidebar'],
    ['sidebarFiles', 'dsh-client-ui-sidebar-files'],
    ['sidebarRight', 'dsh-client-ui-sidebar-right'],
    ['model', 'dsh-client-ui-model-selection'],
    ['command', 'dsh-client-ui-commands'],
    ['slash.menu', 'dsh-client-ui-input-trigger'],
  ],
  a3: [
    ['settings', 'dsh-client-ui-settings-general'],
    ['settings.models', 'dsh-client-ui-settings-models'],
    ['settings.plugins', 'dsh-client-ui-settings-plugins'],
    ['settings.agentPreset', 'dsh-client-ui-agent-preset'],
    ['settings.pluginInventory', 'dsh-client-ui-settings-plugin-inventory'],
    ['settings.theme', 'dsh-client-ui-theme'],
    ['settings.permission', 'dsh-client-ui-permission-presets'],
  ],
  a4: [
    ['cordis', 'dsh-client-ui-cordis'],
    ['deliverables', 'dsh-client-ui-deliverables'],
    ['subagent', 'dsh-client-ui-subagent'],
    ['feedback', 'dsh-client-ui-message-feedback'],
    ['workflowRun', 'dsh-client-ui-workflow-run'],
    ['schedule.catalog', 'dsh-client-ui-schedule'],
    ['job', 'dsh-client-ui-jobs'],
    ['question', 'dsh-client-ui-user-questions'],
  ],
  a5: [
    ['open-in-app', 'dsh-client-ui-open-in-app'],
    ['goal', 'dsh-client-ui-goal'],
    ['plan', 'dsh-client-ui-plan'],
    ['skill', 'dsh-client-ui-skill'],
    ['reference', 'dsh-client-ui-reference'],
    ['approval', 'dsh-client-ui-approval'],
    ['session-log-download', 'dsh-session-log-export'],
    ['documentMarkdown', 'dsh-client-ui-sidebar-documentpreview'],
  ],
}
const group = ['a2', 'a3', 'a4', 'a5'].includes(process.argv[2]) ? process.argv[2] : 'a2'
const TARGETS = GROUPS[group]

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

function parseObject(objText) {
  const out = {}
  const inner = objText.slice(1, -1)
  let i = 0
  while (i < inner.length) {
    while (i < inner.length && /[\s,]/.test(inner[i])) i++
    if (i >= inner.length) break
    if (inner[i] === '.' && inner[i + 1] === '.' && inner[i + 2] === '.') {
      // 展开语法：...PRODUCT_NAMES（无 key 条目）
      i += 3
      let j = i; while (j < inner.length && /[\w$]/.test(inner[j])) j++
      out['⟨spread⟩' + i] = { t: 'spread', v: inner.slice(i, j) }; i = j
      continue
    }
    let key = null
    const c = inner[i]
    if (c === '"' || c === "'") {
      const q = c; let j = i + 1; let buf = ''
      while (j < inner.length && inner[j] !== q) { if (inner[j] === '\\') { buf += inner[j + 1] ?? ''; j += 2; continue } buf += inner[j]; j++ }
      key = buf; i = j + 1
    } else if (/[A-Za-z_$]/.test(c)) {
      let j = i; while (j < inner.length && /[\w$]/.test(inner[j])) j++
      key = inner.slice(i, j); i = j
    } else { i++; continue }
    while (i < inner.length && /\s/.test(inner[i])) i++
    if (inner[i] !== ':') { out[key] = { t: 'i', v: key }; continue }
    i++
    while (i < inner.length && /\s/.test(inner[i])) i++
    const vc = inner[i]
    let value
    if (vc === '"' || vc === "'") {
      const q = vc; let j = i + 1; let buf = ''
      while (j < inner.length && inner[j] !== q) { if (inner[j] === '\\') { buf += inner[j + 1] ?? ''; j += 2; continue } buf += inner[j]; j++ }
      value = { t: 's', v: buf }; i = j + 1
    } else if (vc === '`') {
      const end = inner.indexOf('`', i + 1)
      value = { t: 's', v: inner.slice(i + 1, end < 0 ? inner.length : end) }; i = end + 1
    } else if (vc === '{') {
      const blk = readBalanced(inner, i)
      value = { t: 'o', v: blk }; i += blk.length
    } else if (/[A-Za-z_$]/.test(vc)) {
      let j = i; while (j < inner.length && /[\w$]/.test(inner[j])) j++
      value = { t: 'i', v: inner.slice(i, j) }; i = j
    } else { i++; continue }
    out[key] = value
  }
  return out
}

function resolveId(id, src, consts, depth = 0) {
  if (depth > 4) return `⟨${id}⟩`
  if (consts.has(id)) return consts.get(id)
  const esc = id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const m = new RegExp('const\\s+' + esc + '\\s*=\\s*\\{').exec(src)
  if (!m) return `⟨${id}⟩`
  return flatten(parseObject(readBalanced(src, m.index + m[0].length - 1)), src, consts, depth + 1)
}

function flatten(ir, src, consts, depth = 0, prefix = '') {
  const out = {}
  for (const [k, v] of Object.entries(ir)) {
    const full = prefix ? prefix + '.' + k : k
    if (v.t === 'spread') {
      const r = resolveId(v.v, src, consts, depth)
      if (typeof r !== 'string') Object.assign(out, r)
      continue
    }
    if (v.t === 'o') Object.assign(out, flatten(parseObject(v.v), src, consts, depth, full))
    else if (v.t === 'i') {
      const r = resolveId(v.v, src, consts, depth)
      if (typeof r === 'string') out[full] = r
      else for (const [rk, rv] of Object.entries(r)) out[full + '.' + rk] = rv
    } else out[full] = v.v
  }
  return out
}

const result = {}
const report = []
const pkgs = new Set(TARGETS.map(([, p]) => p))
for (const pkg of pkgs) {
  const src = readFileSync(`${UP}\\${pkg}\\lib\\client.js`, 'utf8')
  const consts = new Map()
  for (const m of src.matchAll(/const\s+([A-Za-z_$][\w$]*)\s*=\s*["']([^"']*)["']/g)) consts.set(m[1], m[2])
  const merge = (ns, zh, en) => {
    result[ns] = result[ns] || {}
    for (const k of new Set([...Object.keys(zh), ...Object.keys(en)])) {
      result[ns][k] = { zh: zh[k] ?? en[k], en: en[k] ?? zh[k] }
    }
  }
  // 形式 1：register(ns, { zh, en })
  {
    const re = /ctx\.locale\.register\(\s*(?:([A-Za-z_$][\w$]*)|["']([^"']*)["'])\s*,\s*\{/g
    let m
    while ((m = re.exec(src))) {
      const ns = m[1] ? (consts.get(m[1]) ?? m[1]) : m[2]
      const top = flatten(parseObject(readBalanced(src, m.index + m[0].length - 1)), src, consts)
      const zh = {}, en = {}
      for (const [k, v] of Object.entries(top)) {
        if (k.startsWith('zh.')) zh[k.slice(3)] = v
        else if (k.startsWith('en.')) en[k.slice(3)] = v
      }
      merge(ns, zh, en)
    }
  }
  // 形式 2：register(ns, "zh", {...}) / register(ns, "en", {...}) 逐语言
  {
    const re = /ctx\.locale\.register\(\s*(?:([A-Za-z_$][\w$]*)|["']([^"']*)["'])\s*,\s*["'](zh|en)["']\s*,\s*\{/g
    let m
    while ((m = re.exec(src))) {
      const ns = m[1] ? (consts.get(m[1]) ?? m[1]) : m[2]
      const locale = m[3]
      const dict = flatten(parseObject(readBalanced(src, m.index + m[0].length - 1)), src, consts)
      merge(ns, locale === 'zh' ? dict : {}, locale === 'en' ? dict : {})
    }
  }
}

for (const [ns, dict] of Object.entries(result)) {
  const got = Object.keys(dict)
  const expected = table[ns] == null ? [] : (Array.isArray(table[ns]) ? table[ns] : Object.keys(table[ns]))
  if (expected.length === 0) { report.push(`${ns}: 非权威表命名空间 / 抽取 ${got.length}`); continue }
  const missing = expected.filter((k) => !dict[k])
  const extra = got.filter((k) => !expected.includes(k))
  report.push(`${ns}: 上游 ${expected.length} / 抽取 ${got.length}${missing.length ? ` | 缺 ${missing.join(',')}` : ''}${extra.length ? ` | 多 ${extra.join(',')}` : ' ✓'}`)
}

for (const line of report) console.log(line)
mkdirSync(join(root, 'tmp'), { recursive: true })
const compact = []
for (const [ns, dict] of Object.entries(result)) {
  compact.push('## ' + ns)
  for (const [k, v] of Object.entries(dict)) compact.push(`${k} => zh: ${JSON.stringify(v.zh)} | en: ${JSON.stringify(v.en)}`)
}
writeFileSync(join(root, 'tmp', `${group}-source.json`), JSON.stringify(result), 'utf8')
writeFileSync(join(root, 'tmp', `${group}-source.txt`), compact.join('\n'), 'utf8')
console.log(`\n已写出 tmp/${group}-source.json 与 tmp/${group}-source.txt（翻译底稿，共 ${Object.keys(result).length} 个命名空间）`)
