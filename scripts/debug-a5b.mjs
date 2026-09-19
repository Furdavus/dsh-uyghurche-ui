import { readFileSync } from 'node:fs'
const src = readFileSync('C:\\Users\\51277\\.dsh\\profiles\\node_modules\\@deepseek-ai\\dsh-client-ui-open-in-app\\lib\\client.js', 'utf8')
for (const pat of ['const zh =', 'const en =']) {
  const i = src.indexOf(pat)
  console.log(`=== ${pat} @${i}，前后 700 字 ===`)
  console.log(src.slice(i, i + 700))
  console.log('')
}
