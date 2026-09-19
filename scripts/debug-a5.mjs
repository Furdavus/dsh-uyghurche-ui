import { readFileSync } from 'node:fs'
const UP = 'C:\\Users\\51277\\.dsh\\profiles\\node_modules\\@deepseek-ai'
for (const pkg of ['dsh-client-ui-open-in-app', 'dsh-client-ui-sidebar-documentpreview']) {
  const src = readFileSync(`${UP}\\${pkg}\\lib\\client.js`, 'utf8')
  console.log(`========== ${pkg} (${src.length} B) ==========`)
  let i = 0
  for (const m of src.matchAll(/locale\.register/g)) {
    console.log(`--- 调用点 ${i++} @${m.index} ---`)
    console.log(JSON.stringify(src.slice(m.index - 60, m.index + 220)))
  }
  // PRODUCT_NAMES 定义
  const pm = src.match(/const\s+PRODUCT_NAMES\s*=\s*\{/)
  if (pm) {
    let d = 0, j = pm.index + pm[0].length - 1
    while (j < src.length) {
      if (src[j] === '{') d++
      else if (src[j] === '}') { d--; if (!d) break }
      j++
    }
    console.log('--- PRODUCT_NAMES 前 400 字 ---')
    console.log(JSON.stringify(src.slice(pm.index, pm.index + 400)))
  } else {
    console.log('(无 const PRODUCT_NAMES = {)')
    const pm2 = src.match(/PRODUCT_NAMES/)
    console.log('PRODUCT_NAMES 首现:', pm2 ? JSON.stringify(src.slice(pm2.index - 80, pm2.index + 120)) : '无')
  }
}
