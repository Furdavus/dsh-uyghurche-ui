/**
 * Concatenate lib/header.js + lib/dict/*.js (in the order below) + lib/footer.js
 * into the single classic-script client bundle lib/client.js.
 *
 * Run: node scripts/build-client.mjs
 */
import { readFileSync, writeFileSync, readdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const root = dirname(dirname(fileURLToPath(import.meta.url)))
const DICTS = [
  'common.js',
  'settings-locale.js',
  'conversation.js',
  'chat.js',
  'workspace.js',
  'sidebar.js',
  'sidebar-files.js',
  'sidebar-right.js',
  'model.js',
  'command.js',
  'slash-menu.js',
  'settings.js',
  'settings-models.js',
  'settings-plugins.js',
  'settings-agent-preset.js',
  'settings-plugin-inventory.js',
  'settings-theme.js',
  'settings-permission.js',
  'permission-access.js',
  'cordis.js',
  'deliverables.js',
  'subagent.js',
  'feedback.js',
  'workflow-run.js',
  'schedule-catalog.js',
  'job.js',
  'question.js',
  'open-in-app.js',
  'goal.js',
  'plan.js',
  'skill.js',
  'reference.js',
  'approval.js',
  'session-log-download.js',
  'document-markdown.js',
  'document-html.js',
  'sidebar-image.js',
  'sidebar-pdf.js',
  'sidebar-code-preview.js',
  'sidebar-document-preview.js',
]

const parts = [readFileSync(join(root, 'lib', 'header.js'), 'utf8')]
for (const f of DICTS) parts.push(readFileSync(join(root, 'lib', 'dict', f), 'utf8'))
const rtlCss = readFileSync(join(root, 'lib', 'rtl.css'), 'utf8')
parts.push('  var RTL_CSS = ' + JSON.stringify(rtlCss) + '\n')
parts.push(readFileSync(join(root, 'lib', 'rtl.js'), 'utf8'))
parts.push(readFileSync(join(root, 'lib', 'footer.js'), 'utf8'))
const bundle = parts.join('\n').replace(/\n{3,}/g, '\n\n')

writeFileSync(join(root, 'lib', 'client.js'), bundle, 'utf8')

const orphan = readdirSync(join(root, 'lib', 'dict')).filter((f) => !DICTS.includes(f))
console.log(`built lib/client.js (${bundle.length} bytes, ${DICTS.length} dict files, rtl.css ${rtlCss.length} B)`)
if (orphan.length) console.log(`WARN: dict 目录中未纳入构建的文件: ${orphan.join(', ')}`)
