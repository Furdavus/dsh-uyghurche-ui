// 审计上游客户端 bundle 里的日期/时间/数字格式化调用
import { readdirSync, statSync, readFileSync, existsSync } from 'node:fs'
const UP = 'C:\\Users\\51277\\.dsh\\profiles\\node_modules\\@deepseek-ai'
const isDir = (p) => { try { return statSync(p).isDirectory() } catch { return false } }

const pats = [
  ['Intl.DateTimeFormat', /Intl\.DateTimeFormat/g],
  ['Intl.NumberFormat', /Intl\.NumberFormat/g],
  ['Intl.RelativeTimeFormat', /Intl\.RelativeTimeFormat/g],
  ['Intl.ListFormat', /Intl\.ListFormat/g],
  ['Intl.Collator', /Intl\.Collator/g],
  ['toLocaleString/Date', /toLocale(?:Date|Time)?String/g],
  ['toFixed', /toFixed\(/g],
]
let total = { 'Intl.DateTimeFormat': 0, 'Intl.NumberFormat': 0, 'Intl.RelativeTimeFormat': 0, 'Intl.ListFormat': 0, 'Intl.Collator': 0, 'toLocaleString/Date': 0, 'toFixed': 0 }
for (const name of readdirSync(UP)) {
  if (!isDir(`${UP}\\${name}`)) continue
  const f = `${UP}\\${name}\\lib\\client.js`
  if (!existsSync(f)) continue
  const src = readFileSync(f, 'utf8')
  const hits = []
  for (const [label, re] of pats) {
    const n = [...src.matchAll(re)].length
    if (n) { hits.push(`${label}=${n}`); total[label] += n }
  }
  if (hits.length) console.log(`${name}: ${hits.join('  ')}`)
}
console.log('\n合计:', JSON.stringify(total))
