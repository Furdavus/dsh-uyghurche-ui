import { readFileSync } from 'node:fs'
const src = readFileSync('C:\\Users\\51277\\.dsh\\profiles\\node_modules\\@deepseek-ai\\dsh-client-ui-schedule\\lib\\client.js', 'utf8')
let i = 0
for (const m of src.matchAll(/formatScheduleLocalTime/g)) {
  console.log(`--- 出现点 ${i++} @${m.index} ---`)
  console.log(JSON.stringify(src.slice(Math.max(0, m.index - 200), m.index + 260)))
  console.log('')
}
