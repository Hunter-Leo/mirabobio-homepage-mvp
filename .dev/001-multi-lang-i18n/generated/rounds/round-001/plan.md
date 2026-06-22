# Round 001 — 实施计划

## 项目结构

```
mirabobio-homepage-mvp/
├── locales/                        # [新建] 翻译文件目录
│   ├── en.json                     # 英文翻译
│   ├── zh.json                     # 中文翻译
│   ├── ko.json                     # 韩文翻译
│   └── icp-config.json             # 备案号配置
├── assets/js/
│   └── i18n.js                     # [新建] i18n 运行时脚本
├── assets/js/main.js               # [修改] typewriter 文本从 i18n 读取
├── build.js                        # [修改] 增加 locales/ 复制
├── index.html                      # [修改] 添加 data-i18n 属性 + 语言切换器
├── about.html                      # [修改] 同上
├── platform.html                   # [修改] 同上（修改量最大）
├── solutions.html                  # [修改] 同上
├── contact.html                    # [修改] 同上
```

## 技术决策

| 决策 | 选择 | 理由 |
|------|------|------|
| i18n 方案 | 纯 JS 运行时，`data-i18n` 属性驱动 | 零依赖，对当前无框架项目侵入最小 |
| 翻译 JSON 结构 | 点号路径 + 按页面/区域组织（`nav.home`, `home.hero_title`） | 结构清晰，key 冲突避免 |
| 语言存储 | localStorage（`lang` key） | 不依赖 cookie，同域自动持久化 |
| 默认语言判定 | `location.hostname` 结尾 `.cn` → 中文，否则英文 | 符合双站需求 |
| 切换刷新 | 切换后即时替换文本，不刷新页面 | 更好的 UX |
| 语言切换器位置 | 导航栏 `<ul class="nav__links">` 最右端加入 | 符合用户浏览习惯 |
| ICP 渲染 | `i18n.js` 加载后根据域名读取 `icp-config.json` 动态渲染到 footer | 配置化，不改代码 |
| SEO | 默认英文保留在 HTML 中，对爬虫可见 | SEO 友好 |
| JSON-LD | 保留英文，不做多语言切换 | 结构化数据主要用于英文搜索引擎 |

## 实施路径

### T-001：创建 locales/ 基础文件

- 创建 `locales/en.json` — 英文翻译（含 ~150 个 key，与 HTML 原文一致，作为基准 fallback）
- 创建 `locales/zh.json` — 中文翻译副本（内容留空待填或留标记 `@TODO translate`）
- 创建 `locales/ko.json` — 韩文翻译副本（同上）
- 创建 `locales/icp-config.json` — 备案号配置（按域名索引）

**验证方法：** 确认 JSON 格式正确、所有 key 一致。

### T-002：编写 i18n.js

核心对象 `I18n` 包含：

```
I18n
├── config
│   ├── defaultLang       # 'en' | 'zh'（按域名）
│   ├── availableLangs    # ['en', 'zh', 'ko'] / ['en', 'zh']
│   ├── storageKey        # 'mirabo_lang'
│   └── icpConfig         # 从 icp-config.json 加载
├── state
│   ├── currentLang       # 当前语言
│   └── translations      # 当前加载的翻译对象
├── init()                # 入口：检测域名 → localStorage → 加载翻译
├── loadLang(lang)        # 加载指定语言 JSON + 替换文本
├── detectDefault()       # 按域名判定默认语言
├── translate()           # 遍历所有 [data-i18n] 元素替换文本
├── setLang(lang)         # 用户主动切换 → 存 localStorage → 翻译
├── renderICP()           # 渲染备案号到 footer
└── renderLangSwitcher()  # 渲染语言切换器 UI
```

**关键设计：**
- `translate()` 支持 `data-i18n` 和 `data-i18n-placeholder` 属性
- `<html lang>` 同步更新
- 初始化完成后 dispatch `i18nReady` 事件（用于 main.js typewriter）
- 翻译 key 缺失时 console.warn 并保留 HTML 原文

**验证方法：** 在浏览器控制台调用 `I18n.setLang('zh')` 确认文本替换。

### T-003：修改 5 个 HTML 文件 — 添加 data-i18n 属性

按 inspect.md 的翻译文本明细，逐页添加 `data-i18n="key.path"`：
- `index.html` — ~40 处（typewriter 目标元素除外，由 T-005 处理）
- `about.html` — ~35 处
- `platform.html` — ~80 处
- `solutions.html` — ~25 处
- `contact.html` — ~30 处

SEO meta 同时修改 `<title>` 和 `<meta name="description">` 为 data-i18n。

OG 标签同样添加 data-i18n。

hreflang 标签一次性加入所有页面的 `<head>`。

**验证方法：** 打开页面确认所有标记元素存在 `data-i18n` 属性。

### T-004：添加语言切换器 UI

在 5 个 HTML 文件导航栏的 `nav__links` 末尾加入语言下拉按钮：

```html
<li class="lang-switcher">
  <button class="lang-switcher__btn" data-i18n="nav.lang_toggle">
    <span id="currentLang">EN</span>
    <svg>▼</svg>
  </button>
  <ul class="lang-switcher__dropdown">
    <li><a href="#" data-lang="en">EN</a></li>
    <li><a href="#" data-lang="zh">中文</a></li>
    <li><a href="#" data-lang="ko">한국어</a></li>
  </ul>
</li>
```

中国站（`.cn` 域名）不显示「한국어」选项。

添加到 `style.css` 中的切换器样式（~40 行）。

**验证方法：** 点击切换器各选项，确认文本即时切换。

### T-005：修改 main.js — typewriter 从 i18n 读取

- 监听 `i18nReady` 事件
- 从 `window.I18n.translations.home.hero_title` 和 `home.hero_subtitle` 获取文本
- 保留 typewriter 动画逻辑

**验证方法：** 首页英文加载后 typewriter 逐字显示；切换中文再刷新，typewriter 显示中文文本。

### T-006：添加 ICP 备案号渲染

`i18n.js` 中 `renderICP()` 在 `translate()` 之后调用：
- 从 `icp-config.json` 读取 `[hostname]` 数组
- 渲染到 `footer__bottom` 区域
- 每个条目一行：`<a href="[url]" target="_blank" rel="noopener">[text]</a>`
- 全球站（mirabobio.com）无匹配 → 不渲染

**验证方法：** `npm run build ICP=1` 后在 dist/ 中查看 footer 是否有备案号。

### T-007：修改 build.js

如需在构建阶段注入 ICP 环境变量支持：

```javascript
// 复制 locales 目录
if (fs.existsSync('locales')) {
  fs.cpSync('locales', path.join(distDir, 'locales'), { recursive: true });
}
```

当前 i18n.js 方案中，build.js 只需加 locales 复制。ICP 环境变量不需要构建时处理（JS 运行时判断域名即可）。

但如果客户需要在构建时**强制打开 ICP**（不依赖域名判断），`build.js` 支持 `ICP=1` 环境变量把 ICP 配置写入一个全局变量。

**验证方法：** `npm run build` 后确认 `dist/locales/` 存在。

### T-008：国际化 language switcher 样式

在 `style.css` 或 `responsive.css` 中追加 ~40 行语言切换器 CSS（定位、下拉、hover 效果）。

### T-009：全量验证 + 构建

- 构建测试：`npm run build`
- 功能性验证：在浏览器打开 `dist/index.html`，测试 EN / 中文 / 한국어 切换
- ICP 验证：mock 或通过 `build ICP=1` 确认备案号显示
- 所有页面依次验证文本覆盖率和切换器功能

## 关键技术点

### i18n.js 初始化流程

```
页面加载 → i18n.js 执行
  → detectDefault()      // location.hostname → 'en' | 'zh'
  → localStorage 读取    // 用户切换过的直接覆盖
  → fetch(locale JSON)   // 加载对应语言
  → translate()          // 替换所有 data-i18n 文本
  → renderICP()          // 渲染备案号
  → renderLangSwitcher() // 渲染切换器
  → dispatch i18nReady   // 通知 main.js typewriter
```

### translate() 替换规则

| 属性 | 替换目标 | 示例 |
|------|---------|------|
| `data-i18n` | `textContent` | `<h1 data-i18n="home.hero_title">` |
| `data-i18n-placeholder` | `placeholder` | `<input data-i18n-placeholder="contact.form_placeholder_name">` |
| `data-i18n-meta-content` | `<meta>` 的 `content` | `<meta data-i18n-meta-content="home.meta_desc">` |
| `data-i18n-title` | `title` | `<title data-i18n-title="home.page_title">` |

### icp-config.json 结构

```json
{
  "mirabobio.cn": [
    { "type": "icp", "text": "沪ICP备XXXXXX号", "url": "https://beian.miit.gov.cn" }
  ],
  "mirabobio.com.cn": [
    { "type": "icp", "text": "沪ICP备XXXXXX号-2", "url": "https://beian.miit.gov.cn" }
  ]
}
```

### 外部 URL 不变

以下内容不参与翻译：
- 导航链接 `href`（如 `index.html`, `about.html`）
- 图片 `src` / `alt`（产品名除外）
- LinkedIn、邮箱等外部链接锚文本
- 品牌名：MiRABO, MIRAIQ, PRISM, ORION, IGNIS, MiRAiQ
- 技术缩略语：DBTL, PTM, AI, MCP, R&D, AIDD

## 不纳入范围

- Cookie/GDPR consent banner
- 多语言 PDF/文档下载
- 多语言 sitemap.xml
- 服务端多语言路由（保持前端方案）
- 页面内部动画延迟参数的多语言适配
- JSON-LD 结构化数据翻译
- 内容管理系统（CMS）集成

## 设计合规审查

**SOLID 原则：**
- [✅] **SRP** — `i18n.js` 只负责 i18n，`main.js` 只负责动画，翻译 JSON 只存数据
- [✅] **OCP** — 新增语言只需加 JSON 文件，不改 JS；新增页面只需加 `data-i18n`
- [✅] **LSP** — 不涉及继承，不适用
- [✅] **ISP** — `I18n` 对象方法各司其职，调用者只依赖需要的接口
- [✅] **DIP** — `i18n.js` 通过配置对象接收语言文件和 ICP 配置路径，不硬编码

**Constitution：**
- [✅] 翻译 key 缺失 → fallback 到 HTML 原文
- [✅] 文件名 `kebab-case`（`i18n.js`, `zh.json`），JS 变量 `camelCase`
- [✅] 无硬编码 secrets，无环境特定值
- [✅] 无重复逻辑（翻译逻辑一次实现，data 属性驱动）
