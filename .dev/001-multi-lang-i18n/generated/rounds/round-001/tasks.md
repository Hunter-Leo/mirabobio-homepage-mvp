# Round 001 — 任务规划

## 状态表

| ID | Type | Task Name | Status | Priority | Deps | Notes |
|----|------|-----------|--------|----------|------|-------|
| T-001 | feat | 创建 locales/ 基础文件（en.json, zh.json, ko.json, icp-config.json） | not-started | P0 | - | |
| T-002 | feat | 编写 i18n.js 运行时脚本 | not-started | P0 | T-001 | 需翻译文件存在 |
| T-003 | ui | 添加语言切换器样式到 style.css | not-started | P0 | - | 可独立完成 |
| T-004 | ui | index.html — 添加 data-i18n 属性 + 切换器 + hreflang | not-started | P1 | T-002 | 需 i18n.js 就绪后测试 |
| T-005 | ui | about.html — 添加 data-i18n 属性 + 切换器 | not-started | P1 | T-002 | |
| T-006 | ui | platform.html — 添加 data-i18n 属性 + 切换器 | not-started | P1 | T-002 | 内容最多 |
| T-007 | ui | solutions.html — 添加 data-i18n 属性 + 切换器 | not-started | P1 | T-002 | |
| T-008 | ui | contact.html — 添加 data-i18n 属性 + 切换器 + SEO meta | not-started | P1 | T-002 | 含表单 label/placeholder |
| T-009 | feat | 修改 main.js — typewriter 从 i18n 读取文本 | not-started | P1 | T-002 | |
| T-010 | config | 修改 build.js — 复制 locales/ 目录 | not-started | P1 | - | 可独立完成 |
| T-011 | test | 全量构建测试 + 功能验证 + ICP 验证 | not-started | P0 | T-001~T-010 | |

## 依赖图

```
T-001 ───────┐
             ├──→ T-002 ──┬──→ T-004
             │            ├──→ T-005
             │            ├──→ T-006
             │            ├──→ T-007
T-003 ───────┤            ├──→ T-008
             │            └──→ T-009
T-010 ───────┤
             └──→ T-011（全量验证）
```

## 任务详情

#### T-001 — 创建 locales/ 基础文件

**Goal：** 建立翻译文件骨架和备案号配置。

**Requirements：**
- `locales/en.json` — 英文翻译基准（~150 keys，按页面/区域组织，原文作为值）
- `locales/zh.json` — 中文翻译（key 与 en.json 完全一致，值留 `@TODO translate` 或空字符串标记）
- `locales/ko.json` — 韩文翻译（同上）
- `locales/icp-config.json` — 备案号配置

**Acceptance Criteria：**
- 4 个 JSON 文件格式正确无语法错误
- 所有语言文件的 key 集合一致
- ICP 配置按域名索引

**References：** `plan.md § T-001`，`generated/inspect.md § 翻译文本明细`

---

#### T-002 — 编写 i18n.js 运行时脚本

**Goal：** 实现完整的 i18n 切换功能。

**Requirements：**
- `I18n.init()` — 检测域名 → localStorage → 加载翻译 → translate() → renderICP() → dispatch i18nReady
- `I18n.setLang(lang)` — 切换语言（替换文本 + 更新 <html lang>）
- `translate()` — 遍历 `[data-i18n]`、`[data-i18n-placeholder]`、`[data-i18n-meta-content]`、`[data-i18n-title]`
- `renderICP()` — 从 icp-config.json 读取 `[hostname]` 条目渲染到 footer
- `renderLangSwitcher()` — 渲染语言切换器 UI（生成为中国站隐藏 KO）
- language key 缺失 → console.warn + 保留原文
- 切换器支持 EN / 中文 / 한국어 三种语言

**Acceptance Criteria：**
- 页面加载后自动检测语言并替换文本
- `setLang('zh')` 即时切换所有文本
- 切换后 dispatch `i18nReady` 事件
- ICP 备案号按域名显示
- 语言切换器交互正常

**References：** `plan.md § T-002 & 关键技术点`

---

#### T-003 — 添加语言切换器样式到 style.css

**Goal：** 为语言切换器添加 ~40 行 CSS。

**Requirements：**
- `.lang-switcher` — 导航栏对齐
- `.lang-switcher__btn` — 按钮样式，与 nav__link 一致
- `.lang-switcher__dropdown` — 下拉菜单，绝对定位
- 暗色主题适配
- 移动端响应式

**Acceptance Criteria：**
- 切换器在桌面端正常展示为下拉
- 移动端折叠到 hamburger 菜单或另做简化
- 无样式泄漏

**References：** `plan.md § T-008`

---

#### T-004 — index.html：添加 data-i18n

**Goal：** 首页所有可翻译文本添加 data-i18n 属性，加入语言切换器、hreflang。

**Requirements：**
- header/nav 5 个链接
- mobile menu 5 个链接
- hero subtitle 和 CTA 按钮
- section 标题/描述/卡片（~25 处）
- footer 全部文本
- 导航栏添加语言切换器
- `<head>` 添加 hreflang 标签
- OG title/description 添加 data-i18n-meta-content

**Acceptance Criteria：**
- 所有英文文本有 data-i18n 标记
- 切换器 UI 正常显示在导航栏
- hreflang 标签正确

**References：** `generated/inspect.md § index.html`

---

#### T-005 — about.html：添加 data-i18n

**Goal：** 关于页所有可翻译文本添加 data-i18n。

**Requirements：**
- hero + section 标题/描述
- Mission/Vision 卡片
- Timeline 四个步骤
- Team section（仅标题，人名和履历不翻译）
- CTA 区域
- header/footer + 语言切换器

**Acceptance Criteria：**
- 所有需要翻译的文本有 data-i18n 标记
- 品牌名/人名不被标记

**References：** `generated/inspect.md § about.html`

---

#### T-006 — platform.html：添加 data-i18n

**Goal：** 平台页所有可翻译文本添加 data-i18n（内容最多页面）。

**Requirements：**
- hero + MCP badge
- Pipeline 6 个 stage 卡片
- PRISM/ORION/IGNIS 各 4 个 tech card（title + desc + list items）
- Benefits 区域（4 个 advantage card）
- CTA 区域
- header/footer + 语言切换器

**Acceptance Criteria：**
- ~80 处标记准确覆盖
- 技术缩略语（DBTL/PTM/AI/MCP）不被标记
- 品牌平台名（PRISM/ORION/IGNIS）不被标记

**References：** `generated/inspect.md § platform.html`

---

#### T-007 — solutions.html：添加 data-i18n

**Goal：** 解决方案页所有可翻译文本添加 data-i18n。

**Requirements：**
- hero
- Custom solutions 3 个卡片
- Case studies 3 个卡片
- CTA 区域
- header/footer + 语言切换器

**Acceptance Criteria：**
- ~25 处标记准确覆盖

**References：** `generated/inspect.md § solutions.html`

---

#### T-008 — contact.html：添加 data-i18n 并处理表单

**Goal：** 联系页所有文本添加 data-i18n，包括表单 label/placeholder。

**Requirements：**
- hero
- 表单标签、placeholder、按钮文本
- 行业下拉选项
- 联系信息、营业时间、地址
- 微信 modal
- header/footer + 语言切换器

**Acceptance Criteria：**
- 表单字段 label 和 placeholder 正确标记
- 提交按钮文本可切换
- 成功消息可切换

**References：** `generated/inspect.md § contact.html`

---

#### T-009 — 修改 main.js typewriter 从 i18n 读取

**Goal：** hero typewriter 动画文字从 i18n 翻译读取。

**Requirements：**
- 监听 `i18nReady` 事件（代替 DOMContentLoaded 启动 typewriter）
- 从 `window.I18n.translations.home.hero_title` 和 `home.hero_subtitle` 获取文本
- 保留所有动画逻辑不变
- 切换语言后刷新页面时 typewriter 使用新语言文本

**Acceptance Criteria：**
- 英文加载 typewriter 显示英文
- 切换中文后刷新，typewriter 显示中文

**References：** `plan.md § T-005`，`assets/js/main.js` 第 12、27 行

---

#### T-010 — 修改 build.js 复制 locales 目录

**Goal：** 构建时确保 locales 目录被复制到 dist。

**Requirements：**
- 在 build.js 中添加 `fs.cpSync('locales', ...)` 逻辑
- 参考现有 assets 目录复制代码风格

**Acceptance Criteria：**
- `npm run build` 后 `dist/locales/` 存在且包含所有 JSON

**References：** `build.js`

---

#### T-011 — 全量构建测试 + 功能验证

**Goal：** 验证所有功能正常工作。

**Requirements：**
- 运行 `npm run build` 确认无报错
- 在浏览器打开 `dist/index.html`：
  - 英文默认展示
  - 切换中文验证文本替换
  - 切换韩文验证文本替换
  - 刷新页面保持语言
  - 语言切换器交互正常
- 验证 5 个页面文本覆盖率（无遗漏的英文文本）
- 验证 ICP（通过 mock 域名或设置 ICP 环境变量）
- 验证 typewriter 显示正确语言的文本

**Acceptance Criteria：**
- 所有功能通过
- 无 console.error
- 翻译 key 无缺失（console 无 i18n warn）

**References：** `plan.md § T-009`
