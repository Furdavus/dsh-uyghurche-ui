// 打印每个 Intl / toLocale* 调用点的上下文
import { readdirSync, statSync, readFileSync, existsSync } from 'node:fs'
const UP = 'C:\\Users\\51277\\.dsh\\profiles\\node_modules\\@deepseek-ai'
const isDir = (p) => { try { return statSync(p).isDirectory() } catch { return false } }
const RE = /Intl\.(DateTimeFormat|NumberFormat|RelativeTimeFormat|ListFormat|Collator)|\.toLocale(?:Date|Time)?String/g

for (const name of readdirSync(UP)) {
  if (!isDir(`${UP}\\${name}`)) continue
  const f = `${UP}\\${name}\\lib\\client.js`
  if (!existsSync(f)) continue
  const src = readFileSync(f, 'utf8')
  let m
  let shown = 0
  while ((m = RE.exec(src)) && shown < 6) {
    console.log(`--- ${name} @${m.index} ---`)
    console.log(JSON.stringify(src.slice(Math.max(0, m.index - 110), m.index + 150)))
    shown++
  }
}
