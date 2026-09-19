/**
 * Smoke test: package shape + host half + client bundle contract.
 * Run: node test/smoke.mjs
 */
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const root = dirname(dirname(fileURLToPath(import.meta.url)))
let failed = 0
const ok = (label) => console.log(`  ✓ ${label}`)
const fail = (label, extra) => { failed++; console.error(`  ✗ ${label}${extra ? ': ' + extra : ''}`) }
const assert = (cond, label, extra) => (cond ? ok(label) : fail(label, extra))

// ---- 1. package.json shape ----
const pkg = JSON.parse(readFileSync(join(root, 'package.json'), 'utf8'))
console.log('package.json:')
assert(pkg.name === 'dsh-uyghurche-ui', 'name = dsh-uyghurche-ui', pkg.name)
assert(pkg.dsh?.client?.platform === 'web', 'dsh.client.platform = web')
assert(Array.isArray(pkg.dsh?.client?.inject), 'dsh.client.inject is array')
assert(pkg.dsh?.client?.inject?.includes('@deepseek-ai/dsh-client-locale'), 'dsh.client.inject 含 dsh-client-locale')
assert(pkg.exports?.['./client'] === './lib/client.js', 'exports["./client"] → lib/client.js')
assert(pkg.exports?.['.'] === './lib/index.js', 'exports["."] → lib/index.js')
assert(pkg.dsh?.bundle?.patch === './cordis.patch.yml', 'bundle patch → cordis.patch.yml')
assert((pkg.files || []).includes('lib'), 'files 含 lib')

// ---- 2. host half ----
console.log('lib/index.js:')
const host = await import('../lib/index.js')
assert(typeof host.apply === 'function', 'apply 是函数')
assert(Array.isArray(host.inject) && host.inject.length === 0, 'inject 为空数组（宿主侧 no-op）')
assert(host.name === 'dsh-uyghurche-ui', 'name = dsh-uyghurche-ui')

// ---- 3. client bundle contract ----
console.log('lib/client.js:')
const client = readFileSync(join(root, 'lib/client.js'), 'utf8')
assert(client.includes("window.__ModuleLoader__.load"), '调用 __ModuleLoader__.load')
assert(client.includes("id: 'dsh-uyghurche-ui'"), 'loader id = 包名')
assert(client.includes("inject: ['locale']"), 'cordis inject = [locale]')
assert(client.includes("addLanguage"), '调用 ctx.locale.addLanguage')
assert(client.includes("locale.register(ns, 'ug'"), '循环注册 ug 字典')
assert(client.includes("installUgIntl"), '含 C 级 Intl 钩子')
assert(client.includes("installRtl"), '含 B1 RTL 钩子')
assert(client.includes('var RTL_CSS = '), '内联 RTL 覆盖层 CSS')
// 从 bundle 里取出内联 CSS，去掉注释后再断言：注释里会提到 _sidebarCol 等“反面词”，
// 直接 includes 会误报。
let rtlCss = ''
try {
  rtlCss = JSON.parse(client.match(/var RTL_CSS = (.*)\r?\n/)[1]).replace(/\/\*[\s\S]*?\*\//g, '')
} catch { /* 断言会以空串失败并报出 */ }
assert(rtlCss.includes('[class*="_centerCol"]'), 'RTL CSS 锚定中栏 _centerCol')
assert(rtlCss.includes('[role="dialog"][aria-modal="true"]'), 'RTL CSS 锚定设置模态（aria-modal）')
assert(!rtlCss.includes('_sidebarCol') && !rtlCss.includes('data-rightbar-col'), 'RTL CSS 不锚定两侧栏（侧栏保持 LTR）')
assert(!rtlCss.includes('html[dir="rtl"]'), 'RTL CSS 不再依赖 <html dir=rtl>（否则三轨 grid 换边）')
assert(client.includes("'common': ugCommon"), 'UG_DICTS 含 common')
assert(client.includes("'settings.locale': ugSettingsLocale"), 'UG_DICTS 含 settings.locale')
assert(client.includes("'conversation': ugConversation"), 'UG_DICTS 含 conversation')
assert(client.includes("'chat': ugChat"), 'UG_DICTS 含 chat')
assert(client.includes("'workspace': ugWorkspace"), 'UG_DICTS 含 workspace')
assert(client.includes("'slash.menu': ugSlashMenu"), 'UG_DICTS 含 slash.menu')
assert(client.includes("ئۇيغۇرچە"), '语言标签 ئۇيغۇرچە')

// ---- 4. cordis.patch.yml ----
console.log('cordis.patch.yml:')
const patch = readFileSync(join(root, 'cordis.patch.yml'), 'utf8')
assert(patch.includes("name: 'dsh-uyghurche-ui'"), 'patch 行指向本包')
assert(patch.includes('insert:'), '使用 insert 语法')

console.log(failed ? `\n✗ ${failed} 项失败` : '\n全部通过')
process.exit(failed ? 1 : 0)
