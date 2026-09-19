/**
 * Client test: load lib/client.js into a shimmed module-loader environment and
 * run its apply(ctx) against the REAL upstream LocaleRuntime (extracted from
 * @deepseek-ai/dsh-client-locale/lib/client.js — same slice ranges proven by
 * the reconnaissance script tools/prove-locale.mjs).
 *
 * Run: node test/client.mjs
 */
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const root = dirname(dirname(fileURLToPath(import.meta.url)))
const UPSTREAM = 'C:\\Users\\51277\\.dsh\\profiles\\node_modules\\@deepseek-ai\\dsh-client-locale\\lib\\client.js'

// ---- 1. extract the real LocaleRuntime from the upstream bundle ----
const lines = readFileSync(UPSTREAM, 'utf8').split('\n')
const slice = (from, to) => lines.slice(from - 1, to)
const parts = [...slice(810, 813), ...slice(1019, 1054), ...slice(1060, 1325), ...slice(1326, 1355)]
const code = parts
  .map((l) => l.replace(/^\t\t/, ''))
  .map((l) => (/^\s*Schema\.object\(/.test(l) ? '/* removed */' : l))
  .join('\n')
const { LocaleRuntime } = new Function(code + '\nreturn { LocaleRuntime };')()

// ---- 2. shim the module loader and load our client bundle ----
const loaded = new Map()
globalThis.window = globalThis
globalThis.__ModuleLoader__ = {
  load({ id, factory }) { loaded.set(id, factory()) },
}
const bundle = readFileSync(join(root, 'lib/client.js'), 'utf8')
;(0, eval)(bundle)

const entry = loaded.get('dsh-uyghurche-ui')
let failed = 0
const ok = (label) => console.log(`  ✓ ${label}`)
const fail = (label, extra) => { failed++; console.error(`  ✗ ${label}${extra ? ': ' + JSON.stringify(extra) : ''}`) }
const assert = (cond, label, extra) => (cond ? ok(label) : fail(label, extra))

assert(entry && typeof entry.apply === 'function', 'factory 返回 { inject, apply }')
assert(JSON.stringify(entry.inject) === JSON.stringify(['locale']), 'inject = ["locale"]')

// ---- 3. fake cordis ctx with the real LocaleRuntime ----
const events = []
const rt = new LocaleRuntime({
  emit: (ev) => events.push(ev),
  effect: (fn) => { const d = fn(); return () => d?.() },
  logger: { error: () => {}, warn: () => {}, info: () => {} },
})
const ctx = {
  locale: rt,
  effect: (fn, _name) => { const d = fn(); return () => d && d() },
  logger: { warn: console.warn, error: console.error },
}

// ---- 3.5 fake document（供 B1 RTL 钩子测试） ----
const docLog = []
const fakeStyleEl = {
  setAttribute: (k, v) => docLog.push(['style.setAttribute', k, v]),
  remove: () => docLog.push(['style.remove']),
  textContent: '',
}
globalThis.document = {
  documentElement: {
    setAttribute: (k, v) => docLog.push(['dir.set', k, v]),
    removeAttribute: (k) => docLog.push(['dir.remove', k]),
  },
  head: { appendChild: (el) => docLog.push(['head.append', el]) },
  querySelector: () => null, // 自检未命中 → 走 warn 分支，不抛异常
  createElement: () => fakeStyleEl,
}

console.log('模块加载:')
const beforeIntlLocale = new Intl.DateTimeFormat().resolvedOptions().locale
console.log('apply(ctx):')
const dispose = entry.apply(ctx) // ctx.effect 同步执行 → 注册立即发生

const snap = rt.getLocale()
assert(snap.locales.some((l) => l.id === 'ug'), 'ug 出现在语言目录')
const ug = snap.locales.find((l) => l.id === 'ug')
assert(ug && ug.label === 'ئۇيغۇرچە', '标签 = ئۇيغۇرچە', ug && ug.label)
assert(ug && ug.fallback === 'en', 'fallback = en', ug && ug.fallback)

rt.setLocale('ug')
assert(rt.getLocale().active === 'ug', 'setLocale("ug") 生效')
assert(events.filter((e) => e === 'locale/change').length === 1, 'locale/change 事件发出 1 次')

const t = rt.bind('common')
console.log('common 翻译抽查:')
assert(t('ok') === 'ماقۇل', 'ok → ماقۇل', t('ok'))
assert(t('cancel') === 'بىكار قىلىش', 'cancel → بىكار قىلىش', t('cancel'))
assert(t('close') === 'يېپىش', 'close → يېپىش（术语表一致）', t('close'))
assert(t('copy') === 'كۆچۈرۈش', 'copy → كۆچۈرۈش（术语表一致）', t('copy'))
assert(t('edit') === 'تەھرىرلەش', 'edit → تەھرىرلەش（术语表一致）', t('edit'))
assert(t('search') === 'ئىزدەش', 'search → ئىزدەش（术语表一致）', t('search'))
assert(t('loading') === 'يۈكلىنىۋاتىدۇ…', 'loading → يۈكلىنىۋاتىدۇ…', t('loading'))
assert(t('retry') === 'قايتا سىناش', 'retry → قايتا سىناش', t('retry'))
assert(t('copy.optionsHint', { action: 'كۆچۈرۈش' }).includes('كۆچۈرۈش ئۇسۇلىنى تاللىغىلى بولىدۇ'), '{action} 插值正常', t('copy.optionsHint', { action: 'كۆچۈرۈش' }))
assert(t('markdown.truncatedCharacters', { total: 100 }) === '… قىسقارتىلدى، جەمئىي 100 بەلگە', '{total} 插值正常', t('markdown.truncatedCharacters', { total: 100 }))
assert(t('definitely.not.a.key') === 'definitely.not.a.key', '未翻译 key 回退显示 key（无空白）')

assert(rt.bind('settings.locale')('language.title') === 'تىل', 'language.title → تىل', rt.bind('settings.locale')('language.title'))

console.log('词典完整性（来自 window.__dshUyghurUi 诊断钩子）:')
const diag = globalThis.__dshUyghurUi
assert(diag && diag.dictionaries, '诊断钩子存在')
const EXPECTED_COUNTS = {
  'common': 39,
  'settings.locale': 1,
  'conversation': 159,
  'chat': 103,
  'workspace': 63,
  'sidebar': 5,
  'sidebarFiles': 13,
  'sidebarRight': 21,
  'model': 20,
  'command': 14,
  'slash.menu': 9,
  'settings': 12,
  'settings.models': 100,
  'settings.plugins': 52,
  'settings.agentPreset': 51,
  'settings.pluginInventory': 36,
  'settings.theme': 9,
  'settings.permission': 12,
  'permission.access': 8,
  'cordis': 50,
  'deliverables': 38,
  'subagent': 37,
  'feedback': 20,
  'workflowRun': 18,
  'schedule.catalog': 18,
  'job': 15,
  'question': 15,
  'open-in-app': 39,
  'goal': 12,
  'plan': 6,
  'skill': 7,
  'reference': 10,
  'approval': 5,
  'session-log-download': 9,
  'documentMarkdown': 4,
  'documentHtml': 4,
  'sidebarImage': 5,
  'sidebarPdf': 9,
  'sidebarCodePreview': 3,
  'sidebarDocumentPreview': 18,
}
const nsNames = Object.keys(EXPECTED_COUNTS)
assert(Object.keys(diag.dictionaries).length === nsNames.length, `字典数量 = ${nsNames.length}`, Object.keys(diag.dictionaries))
for (const ns of nsNames) {
  const n = Object.keys(diag.dictionaries[ns] || {}).length
  assert(n === EXPECTED_COUNTS[ns], `${ns} 恰好 ${EXPECTED_COUNTS[ns]} 键`, n)
}

console.log('A2 翻译抽查:')
assert(rt.bind('conversation')('input.send') === 'ئۇچۇر ئەۋەتىش', 'conversation input.send', rt.bind('conversation')('input.send'))
assert(rt.bind('conversation')('hint.goal') === 'ئۇزۇن مۇددەتلىك ۋەزىپىنىڭ نىشانىنى تەسۋىرلەڭ', 'conversation hint.goal', rt.bind('conversation')('hint.goal'))
assert(rt.bind('conversation')('file.attach') === 'قوشۇمچە قوشۇش', 'conversation file.attach', rt.bind('conversation')('file.attach'))
assert(rt.bind('chat')('chat.loadingHistory') === 'تارىخ يۈكلىنىۋاتىدۇ…', 'chat loadingHistory', rt.bind('chat')('chat.loadingHistory'))
assert(rt.bind('chat')('stats.cacheHit', { percent: 88 }) === 'غەملەك ئۇرۇشى 88%', 'chat cacheHit 插值', rt.bind('chat')('stats.cacheHit', { percent: 88 }))
assert(rt.bind('chat')('message.compaction.completed', { items: 30, tokens: 2000 }).includes('توكېن'), 'chat compaction 插值', rt.bind('chat')('message.compaction.completed', { items: 30, tokens: 2000 }))
assert(rt.bind('workspace')('session.new') === 'يېڭى سېئانس', 'workspace session.new', rt.bind('workspace')('session.new'))
assert(rt.bind('workspace')('status.subagentsRunning.other', { n: 3 }) === '3 تارماق ۋاكالەتچى ئىجرا بولۇۋاتىدۇ', 'workspace subagents 插值', rt.bind('workspace')('status.subagentsRunning.other', { n: 3 }))
assert(rt.bind('sidebar')('toggle.open') === 'يان بالداقنى ئېچىش', 'sidebar toggle.open', rt.bind('sidebar')('toggle.open'))
assert(rt.bind('sidebarFiles')('loading') === 'ئوقۇلۇۋاتىدۇ…', 'sidebarFiles loading', rt.bind('sidebarFiles')('loading'))
assert(rt.bind('sidebarRight')('dock.addTab') === 'يېڭى بەتكۈچ', 'sidebarRight addTab', rt.bind('sidebarRight')('dock.addTab'))
assert(rt.bind('model')('trigger.fallback') === 'مودېل تاللاش', 'model trigger.fallback', rt.bind('model')('trigger.fallback'))
assert(rt.bind('model')('trigger.ariaEffort', { model: 'X', effort: 'max' }) === 'مودېل تاللاڭ، ھازىرقى X، خۇلاسە چىقىرىش دەرىجىسى max', 'model ariaEffort 插值', rt.bind('model')('trigger.ariaEffort', { model: 'X', effort: 'max' }))
assert(rt.bind('command')('description.plan') === 'پىلان ھالىتىگە كىرىش ياكى چىقىش', 'command description.plan', rt.bind('command')('description.plan'))
assert(rt.bind('slash.menu')('skill') === 'ماھارەتلەر', 'slash.menu skill', rt.bind('slash.menu')('skill'))
// A3 抽查
assert(rt.bind('settings')('trigger') === 'تەڭشەك', 'settings trigger', rt.bind('settings')('trigger'))
assert(rt.bind('settings')('connection.connecting') === 'ئاپتوماتىك قايتا ئۇلىنىۋاتىدۇ', 'settings connecting', rt.bind('settings')('connection.connecting'))
assert(rt.bind('settings.models')('keyInput') === 'API ئاچقۇچى', 'settings.models keyInput', rt.bind('settings.models')('keyInput'))
assert(rt.bind('settings.models')('editProvider', { provider: 'DeepSeek' }) === 'DeepSeek نى تەھرىرلەش', 'settings.models 插值', rt.bind('settings.models')('editProvider', { provider: 'DeepSeek' }))
assert(rt.bind('settings.models')('welcomeBody').includes('\n\n'), 'welcomeBody 保留段落换行', rt.bind('settings.models')('welcomeBody'))
assert(rt.bind('settings.plugins')('bashTimeoutMs') === 'بۇيرۇق ۋاقىت چېكى (مىللىسېكۇنت)', 'settings.plugins bashTimeoutMs', rt.bind('settings.plugins')('bashTimeoutMs'))
assert(rt.bind('settings.agentPreset')('presetStandardName') === 'ئۆلچەملىك ھالەت', 'agentPreset standard', rt.bind('settings.agentPreset')('presetStandardName'))
assert(rt.bind('settings.pluginInventory')('globalTitle') === 'ئومۇمىي قىستۇرمىلار', 'pluginInventory global', rt.bind('settings.pluginInventory')('globalTitle'))
assert(rt.bind('settings.theme')('appearance.dark') === 'قاراڭغۇ', 'theme dark', rt.bind('settings.theme')('appearance.dark'))
assert(rt.bind('settings.permission')('preset.fullAccess') === 'تولۇق ھوقۇق', 'permission fullAccess', rt.bind('settings.permission')('preset.fullAccess'))
assert(rt.bind('permission.access')('confirm.enable') === rt.bind('settings.permission')('confirm.enable'), 'permission.access 与 settings.permission 同源', rt.bind('permission.access')('confirm.enable'))
// A4 抽查
assert(rt.bind('cordis')('action.rollback') === 'ئارقىغا قايتۇرۇش', 'cordis rollback', rt.bind('cordis')('action.rollback'))
assert(rt.bind('cordis')('panel.readFailed', { message: 'x' }) === 'قىستۇرما تىزىملىكىنى ئوقۇش مەغلۇپ بولدى: x', 'cordis 插值', rt.bind('cordis')('panel.readFailed', { message: 'x' }))
assert(rt.bind('deliverables')('presented.finder') === 'Finder دا كۆرسىتىش', 'deliverables finder', rt.bind('deliverables')('presented.finder'))
assert(rt.bind('subagent')('duration.daysHours', { days: 2, hours: 3 }) === '2 كۈن 3 سائەت', 'subagent duration 插值', rt.bind('subagent')('duration.daysHours', { days: 2, hours: 3 }))
assert(rt.bind('subagent')('readonly.body').includes('ئانا سېئانس'), 'subagent readonly', rt.bind('subagent')('readonly.body'))
assert(rt.bind('feedback')('category.other') === 'باشقا', 'feedback other', rt.bind('feedback')('category.other'))
assert(rt.bind('workflowRun')('run.members.other', { count: 4 }) === '4 ئەزا', 'workflowRun 插值', rt.bind('workflowRun')('run.members.other', { count: 4 }))
assert(rt.bind('schedule.catalog')('frequency.every', { value: 3, unit: 'كۈن' }) === 'ھەر 3 كۈن دا بىر قېتىم', 'schedule 插值', rt.bind('schedule.catalog')('frequency.every', { value: 3, unit: 'كۈن' }))
assert(rt.bind('job')('status.stopping') === 'توختىتىلىۋاتىدۇ', 'job stopping', rt.bind('job')('status.stopping'))
assert(rt.bind('question')('plan.approve') === 'ئىجرانى تەستىقلاش', 'question plan.approve', rt.bind('question')('plan.approve'))
// A5 抽查
assert(rt.bind('open-in-app')('open.title', { app: 'VS Code' }) === 'VS Code دا خىزمەت بوشلۇقىنى ئېچىش', 'open-in-app 插值', rt.bind('open-in-app')('open.title', { app: 'VS Code' }))
assert(rt.bind('open-in-app')('app.explorer') === 'ھۆججەت تەكشۈرگۈچ', 'open-in-app explorer', rt.bind('open-in-app')('app.explorer'))
assert(rt.bind('goal')('phase.paused') === 'ۋاقىتلىق توختىتىلغان نىشان', 'goal paused', rt.bind('goal')('phase.paused'))
assert(rt.bind('plan')('chip.exitFailed') === 'plan mode دىن چىقىش مەغلۇپ بولدى', 'plan exitFailed', rt.bind('plan')('chip.exitFailed'))
assert(rt.bind('skill')('menu.userOnly') === 'پەقەت ئىشلەتكۈچى', 'skill userOnly', rt.bind('skill')('menu.userOnly'))
assert(rt.bind('reference')('crumb.root') === 'خىزمەت بوشلۇقى', 'reference crumb', rt.bind('reference')('crumb.root'))
assert(rt.bind('approval')('escalation', { toolName: 'bash' }) === 'bash قورالى ئالاھىدە ھوقۇقلۇق ئىجرا تەلەپ قىلدى', 'approval 插值', rt.bind('approval')('escalation', { toolName: 'bash' }))
assert(rt.bind('session-log-download')('dialog.errorTitle') === 'Session ئېكسپورت قىلىش مەغلۇپ بولدى', 'session-log error', rt.bind('session-log-download')('dialog.errorTitle'))
assert(rt.bind('sidebarPdf')('pageImage', { page: 3 }) === 'PDF نىڭ 3-بېتى', 'sidebarPdf 插值', rt.bind('sidebarPdf')('pageImage', { page: 3 }))
assert(rt.bind('sidebarDocumentPreview')('error.tooLarge', { limit: '10MB' }) === 'بۇ بەت 10MB چېكىدىن ئېشىپ كەتتى، ئوقۇغىلى بولمايدۇ.', 'docPreview 插值', rt.bind('sidebarDocumentPreview')('error.tooLarge', { limit: '10MB' }))
// 未翻译命名空间（trajectory 等）可正常绑定且不抛异常
assert(typeof rt.bind('trajectory')('anything') === 'string', '未翻译命名空间可绑定且返回字符串')

console.log('C 级 Intl 钩子:')
assert(new Intl.DateTimeFormat().resolvedOptions().locale === 'ug', '裸 DateTimeFormat 默认切到 ug', new Intl.DateTimeFormat().resolvedOptions().locale)
assert(new Intl.NumberFormat().resolvedOptions().locale === 'ug', '裸 NumberFormat 默认切到 ug', new Intl.NumberFormat().resolvedOptions().locale)
const ugNumber = new Intl.NumberFormat('ug').format(1234.5)
assert((1234.5).toLocaleString() === ugNumber, 'Number.toLocaleString 跟随 ug', (1234.5).toLocaleString())
const ugDate = new Intl.DateTimeFormat('ug', { dateStyle: 'medium' }).format(new Date(0))
assert(new Date(0).toLocaleDateString('en-US', { dateStyle: 'medium' }) !== undefined, '显式 locale 调用不受影响')
assert(new Intl.DateTimeFormat('en-US').resolvedOptions().locale === 'en-US', '显式传 locale 不被劫持')
// 相对时间（ICU 有 ug 数据）
assert(new Intl.RelativeTimeFormat().resolvedOptions().locale === 'ug', '裸 RelativeTimeFormat 默认切到 ug')

console.log('B1 RTL 钩子:')
const hasLog = (type, key, value) => docLog.some(([t, k, v]) => t === type && k === key && v === value)
assert(hasLog('dir.set', 'dir', 'rtl'), 'ug 激活时 <html> 设置 dir=rtl', JSON.stringify(docLog))
assert(docLog.some(([t]) => t === 'head.append'), 'RTL 覆盖层 <style> 已注入')
assert(fakeStyleEl.textContent.includes('html[dir="rtl"]'), '注入的样式含 [dir=rtl] 选择器')
assert(fakeStyleEl.textContent.includes('[data-rightbar-col]'), '注入的样式含右栏面板锚点')
assert(fakeStyleEl.textContent.includes('_collapseGlyph'), '注入的样式含折叠箭头修正')
// 切回 zh → 移除 dir 与样式
rt.setLocale('zh')
assert(docLog.some(([t, k]) => t === 'dir.remove' && k === 'dir'), '切回 zh 时移除 dir', JSON.stringify(docLog))
assert(docLog.some(([t]) => t === 'style.remove'), '切回 zh 时移除 <style>')
rt.setLocale('ug') // 恢复 ug 供后续卸载断言使用

console.log('卸载:')
dispose()
assert(!rt.getLocale().locales.some((l) => l.id === 'ug'), 'dispose 后 ug 从目录移除')
// 卸载活动语言 → 回到浏览器可用的默认语言；本测试环境 shim 了 window，
// Node 的 navigator.language = 'zh-CN' → 回退到 zh（上游语义：available browser/default locale）
assert(rt.getLocale().active === 'zh', '活动语言回退到浏览器默认 zh-CN → zh', rt.getLocale().active)
// Intl 钩子已还原
assert(new Intl.DateTimeFormat().resolvedOptions().locale === beforeIntlLocale, 'dispose 后 Intl 默认 locale 恢复', new Intl.DateTimeFormat().resolvedOptions().locale)
// RTL 钩子已还原
assert(docLog.filter(([t, k]) => t === 'dir.remove' && k === 'dir').length >= 1, 'dispose 后移除 dir', JSON.stringify(docLog))

console.log(failed ? `\n✗ ${failed} 项失败` : '\n全部通过')
process.exit(failed ? 1 : 0)
