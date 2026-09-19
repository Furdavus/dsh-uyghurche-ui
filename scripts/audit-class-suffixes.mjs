// 审计上游 bundle 里 CSS Module 类名后缀（<hash>_<name> 中的 name 是稳定锚点）
import { readdirSync, statSync, readFileSync, existsSync } from 'node:fs'
const UP = 'C:\\Users\\51277\\.dsh\\profiles\\node_modules\\@deepseek-ai'
const isDir = (p) => { try { return statSync(p).isDirectory() } catch { return false } }
const WANT = /_(panel|panelBody|panels|handle|sidebarCol|centerCol|rightbarCol|logoRow|regionArea|retry|mark|fade|collapseGlyph|icon|root|rail|content|input)\{/g
const found = new Map()
for (const name of readdirSync(UP)) {
  if (!isDir(`${UP}\\${name}`)) continue
  const f = `${UP}\\${name}\\lib\\client.js`
  if (!existsSync(f)) continue
  const src = readFileSync(f, 'utf8')
  let m
  while ((m = WANT.exec(src))) {
    const full = m[0].slice(0, -1) // 去掉 {
    const suffix = full.slice(full.lastIndexOf('_'))
    if (!found.has(suffix)) found.set(suffix, new Set())
    found.get(suffix).add(name)
  }
}
for (const [suffix, pkgs] of [...found].sort((a, b) => b[1].size - a[1].size)) {
  console.log(`${suffix.padEnd(18)} ${pkgs.size} 个包: ${[...pkgs].slice(0, 6).join(', ')}${pkgs.size > 6 ? ' …' : ''}`)
}
