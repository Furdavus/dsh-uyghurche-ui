import { readFileSync } from 'node:fs'
const UP = 'C:\\Users\\51277\\.dsh\\profiles\\node_modules\\@deepseek-ai'
for (const pkg of ['dsh-client-ui-permission-presets', 'dsh-client-ui-settings-models']) {
  const src = readFileSync(`${UP}\\${pkg}\\lib\\client.js`, 'utf8')
  console.log(`=== ${pkg} ===`)
  let i = 0
  for (const m of src.matchAll(/locale\.register/g)) {
    console.log(' at', m.index, JSON.stringify(src.slice(m.index - 80, m.index + 60)))
    if (++i >= 6) break
  }
}
