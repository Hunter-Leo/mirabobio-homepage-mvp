# 001 — 多语言 i18n + 中国官网备案号

```
project_stage: pre-launch
```

## Spec

MiRABO 官网目前仅有英文，需支持多语言切换并适配双站部署：

- **全球站**（Cloudflare Pages, `mirabobio.com`）→ 英/中/韩三语切换
- **中国站**（腾讯云 EdgeOne, `mirabobio.cn` + `mirabobio.com.cn`）→ 中/英切换，显示备案号

采用客户端 JS i18n 方案：`data-i18n` 标记 + `locales/*.json` 翻译文件 + `i18n.js` 运行时替换。备案号通过可追加的配置文件按域名动态渲染。

## Requirements

1. 导航栏右侧添加语言切换器（EN / 中文 / 한국어）
2. 5 个 HTML 页面文本标记 `data-i18n`，翻译集中管理
3. 加载时按域名判定默认语言：`mirabobio.com` → EN，`.cn` 域名 → 中文
4. 语言偏好持久化（localStorage），刷新保持，用户主动切换后优先于域名判定
5. 切换后即时替换文本，不刷新页面
5. 备案号配置化（独立 JSON 文件，按域名索引，未来可追加新增类型）
6. `build.js` 适配：复制 locales 目录、支持 ICP 环境变量
7. SEO 保持：默认英文对爬虫可见，hreflang 标签

## Action Items

**圆环工件：**
- [ ] `issues.md`

**需求文档（按顺序）：**
- [ ] `generated/rounds/round-001/plan.md`
- [ ] `generated/rounds/round-001/tasks.md`
- [ ] `generated/start-and-resume.md`

## Constitution

- `i18n.js` 单一职责，只做 i18n 切换
- 新增语言只需添加 `locales/*.json`，不改 JS
- 翻译 key 缺失 → fallback 到 HTML 原文
- 文件名 `kebab-case`，JS 变量 `camelCase`，JSON key 用点号路径
