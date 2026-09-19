# dsh-uyghurche-ui

DSH Web 界面维吾尔语（UEY）语言包。通过官方 locale API
（`ctx.locale.addLanguage` + `ctx.locale.register`）注册 `ئۇيغۇرچە`，
未翻译的界面文案逐 key 回退英文——**任何批次的翻译都可以安全上线**。

## 现状（A1–A5 + C + B1）

| 命名空间 | 键数 | 状态 |
| --- | ---: | --- |
| `common` / `settings.locale` | 39+1 | ✅ |
| `conversation` | 159 | ✅ 输入框、消息流、附件、终端、排队 |
| `chat` | 103 | ✅ 统计、压缩、重试、用量、时间 |
| `workspace` | 63 | ✅ 会话列表、工作区、搜索、状态 |
| `sidebar` / `sidebarFiles` / `sidebarRight` | 5+13+21 | ✅ 侧边栏、文件面板、右侧栏 |
| `model` / `command` / `slash.menu` | 20+14+9 | ✅ 模型选择、命令面板、斜杠菜单 |
| `settings` | 12 | ✅ 设置外壳、连接状态 |
| `settings.models` | 100 | ✅ 模型设置（API 密钥、提供方、目录） |
| `settings.plugins` | 52 | ✅ 插件设置（终端、Agent 循环、搜索、Subagent 模型） |
| `settings.agentPreset` | 51 | ✅ Agent 预设 |
| `settings.pluginInventory` | 36 | ✅ 插件列表 |
| `settings.theme` | 9 | ✅ 外观/字号 |
| `settings.permission` / `permission.access` | 12+8 | ✅ 权限预设 |
| `cordis` | 50 | ✅ Cordis 插件面板（运行/审批/回退） |
| `deliverables` | 38 | ✅ 交付物面板、文件操作 |
| `subagent` | 37 | ✅ 子代理视图（时长/状态/只读） |
| `feedback` | 20 | ✅ 消息反馈（分类/详情） |
| `workflowRun` / `schedule.catalog` | 18+18 | ✅ 工作流运行、定时提醒 |
| `job` / `question` | 15+15 | ✅ 后台任务、提问组件 |
| `open-in-app` | 39 | ✅ 「在编辑器中打开」菜单（30 款应用名保留原样） |
| `goal` / `plan` / `skill` | 12+6+7 | ✅ 目标、计划模式、技能面板 |
| `reference` / `approval` | 10+5 | ✅ 引用、审批组件 |
| `session-log-download` | 9 | ✅ Session 日志导出 |
| `documentMarkdown` / `documentHtml` / `sidebarImage` / `sidebarPdf` / `sidebarCodePreview` / `sidebarDocumentPreview` | 4+4+5+9+3+18 | ✅ 文档预览类（Markdown/HTML/图片/PDF/代码/文本） |
| **合计** | **1069** | 除 trajectory 外全部官方界面维吾尔语化 |

切到 `ug` 后：上述 1,069 条显示维吾尔语；trajectory（轨迹，175 条，用户暂缓）
由逐 key 回退机制显示英文。

## 安装（web profile）

```jsonc
// ~/.dsh/profiles/web/package.json
{
  "dependencies": { "dsh-uyghurche-ui": "file:D:/Deepseek git/dsh-uyghurche-ui" },
  "dsh": { "profile": { "bundles": [ "dsh-uyghurche-ui" ] } }
}
```

然后 `pnpm install` 并重启 web profile。设置 → 通用 → 语言，选择
`ئۇيغۇرچە` 即立即生效并记住。

## 测试

```
node scripts/build-client.mjs   # 修改 lib/dict/*.js 后必须重新拼接 client.js
node test/smoke.mjs    # 包形态 + 宿主半部 + 客户端契约
node test/client.mjs   # 用真实上游 LocaleRuntime 跑 apply(ctx) 全流程
node scripts/coverage.mjs  # 对照安装版键表审计 1,069 键覆盖率
```

## 已知限制

- 逐 key 回退：未翻译的 key 显示英文（不是空白）。
- `@linxin666/dsh-web-all` 有 8 处 legacy 语言回退（`lang.startsWith("en") ? en : zh`），
  界面语言为 `ug` 时这些子插件显示中文——第三方包自身实现问题，本包无法修正。
- `dsh-better-sidebar` 的界面文案不走 `ctx.locale`，不跟随界面语言。
- 注册期一次性读取的文案（如 `/model` 命令描述）在切换语言后不刷新，重启后生效。
- B1 已知限制：RTL 下**列宽拖拽手柄隐藏**（几何在 JS 里按物理 left 计算）；
  **图标镜像不做**（属 B2，散落在 77 处方向图标）；部分物理属性（约 220-498 处）未逐一覆盖，
  个别间距仍偏 LTR；输入框保持 LTR（混排输入安全）。

## B1：全界面 RTL 文字方向与对齐

- `ug` 激活时：`<html dir="rtl">` + 注入覆盖层 `<style>`（`lib/rtl.css`，随 bundle 内联）；
  切走/卸载时移除 `dir` 与 `<style>`，完全恢复 LTR。
- 覆盖内容：文字方向与对齐、维语字体栈、LTR 反向保护（代码/终端/编辑器/输入框）、
  grid 三轨自动换边后的侧边栏边框、右栏面板锚定与滑入方向、折叠箭头去双重翻转、
  侧边栏 logo 行/区域边距、消息标记、重试按钮、会话列表渐隐。
- 选择器锚点：CSS Module 的稳定类名后缀（`_sidebarCol`/`_handle`/`_collapseGlyph`/…）
  + `[data-rightbar-col]` 结构属性；带**启动自检**（关键锚点未命中时 console 警告）。

## C 级：日期/时间/数字

- 上游仅有的显示级 `Intl.DateTimeFormat` 调用（定时任务时间）已传
  `document.documentElement.lang` → 切到 `ug` 时自动使用维吾尔语格式（ICU 完整支持：
  月份名、相对时间、复数 one/other、`numberingSystem=latn`）。
- 本包内置 **Intl 默认 locale 钩子**：`ug` 激活期间，未显式指定 locale 的
  `Intl.DateTimeFormat/NumberFormat/RelativeTimeFormat`、`Date.prototype.toLocale*`、
  `Number.prototype.toLocaleString`、`String.prototype.localeCompare` 默认切到 `ug`，
  使 trajectory 的记录时间、日期解析辅助、文件排序等裸调用跟随界面语言；
  切换语言或卸载时原样恢复，显式传 locale 的调用零影响。

## 路线图

- 剩余：trajectory（175 条，用户暂缓）；B2 完整镜像（侧边栏换边已随 B1 免费生效，
  剩余 `scrollLeft` 语义、77 处图标镜像、官方 `<html dir>` 持久化需上游 PR）。

术语一致性：与 `dsh-uyghurche` 的 195 条开发术语表对齐
（`copy=كۆچۈرۈش`、`close=يېپىش`、`edit=تەھرىرلەش`、`save=ساقلاش`、
`delete=ئۆچۈرۈش`、`search=ئىزدەش`、`button=كۇنۇپكا`、`path=يول`、
`language=تىل` …）。
