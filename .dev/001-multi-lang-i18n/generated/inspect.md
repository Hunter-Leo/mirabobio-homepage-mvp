# 前提任务审查 — multi-lang-i18n

## 目录结构

```
mirabobio-homepage-mvp/
├── index.html               # 首页（~426 行）
├── about.html               # 关于我们（~344 行）
├── platform.html            # 平台页（~553 行）
├── solutions.html           # 解决方案（~237 行）
├── contact.html             # 联系我们（~361 行）
├── refer-index.html         # 备选首页（可忽略或保持同步）
├── build.js                 # 构建脚本
├── assets/
│   ├── css/
│   │   ├── style.css        # 主样式（~2895 行）
│   │   ├── responsive.css   # 响应式（~807 行）
│   │   └── animations.css   # 动画（~40 行）
│   └── js/
│       ├── main.js          # 核心 JS（typewriter + scroll + menu）
│       ├── i18n.js          # ⬅ 新建
│       ├── canvas-particles.js
│       ├── utils.js
│       ├── contact.js
│       └── platforms.js
└── locales/                 # ⬅ 新建
    ├── en.json
    ├── zh.json
    ├── ko.json
    └── icp-config.json
```

## 页面结构概览（5 个 HTML）

所有页面共享以下 BEM 结构，hand-coded，无模板：

| 区域 | 覆盖页面 | 说明 |
|------|---------|------|
| Header (nav) | 全部 5 个 | Logo + 5 个导航链接，按页高亮 active |
| Mobile Menu | 全部 5 个 | 同上 5 个链接，按钮 toggle |
| Hero | 每个页面不同 | 标题、副标题、CTA 按钮 |
| 正文 Sections | 每页 2-5 个 | 卡片/时间线/平台/表单等 |
| Footer | 全部 5 个 | 签名档 + 快速链接 + 联系 + 微信 + 版权 |
| Scripts | 全部 5 个 | GSAP + AOS + canvas-particles + main.js |

## 翻译文本明细

### 全局共享文本（跨所有页面）

| Key | 来源 | 英文内容 | 备注 |
|-----|------|---------|------|
| nav.home | header | Home | 5 个页面完全相同 |
| nav.about | header | About Us | |
| nav.platform | header | Platform | |
| nav.solutions | header | Solutions | |
| nav.contact | header | Contact | |
| mobile_menu.home | mobile menu | Home | |
| mobile_menu.about | mobile menu | About Us | |
| mobile_menu.platform | mobile menu | Platform | |
| mobile_menu.solutions | mobile menu | Solutions | |
| mobile_menu.contact | mobile menu | Contact | |
| footer.tagline | footer | Pioneering AI-Driven Biologics | 全部 5 个页面 |
| footer.desc | footer | Accelerating protein therapeutic development through advanced AI platforms. | |
| footer.quick_links | footer | Quick Links | |
| footer.quick_about | footer | About Us | |
| footer.quick_platform | footer | Platform | |
| footer.quick_solutions | footer | Solutions | |
| footer.quick_contact | footer | Contact | |
| footer.contact | footer | Contact | |
| footer.address_hk | footer | Hong Kong Science Park | |
| footer.address_sh | footer | Zhangjiang, Shanghai | |
| footer.follow_us | footer | Follow Us | |
| footer.wechat | footer | WeChat Official | |
| footer.copyright | footer | © 2025 MiRABO Biotechnology. All rights reserved. | 年份固定 |
| hero.scroll | index | Scroll to explore | |

### index.html — 首页

| Key | 区域 | 英文内容 |
|-----|------|---------|
| home.hero_title | hero（JS typewriter） | "Building Better Biologics with AI" |
| home.hero_subtitle | hero（JS typewriter） | "Integrated AI solutions for designing and developing protein therapeutics from discovery through commercial manufacturing" |
| home.hero_cta | hero | Explore Our Platform |
| home.section1_title | Overview | Empowering Biologics Development with AI |
| home.section1_desc | Overview | MiRABO Biotechnology delivers AI solutions that accelerate and de-risk protein therapeutic development... |
| home.card1_title | stat-card | AI-Powered In-Silico Protein Analysis |
| home.card1_desc | stat-card | Predicts structure, stability, immunogenicity... |
| home.card2_title | stat-card | AI-Driven Protein Engineering & Optimization |
| home.card2_desc | stat-card | Improves protein stability, activity, and expression... |
| home.card3_title | stat-card | AI Modeling for Bioprocess & Manufacturing |
| home.card3_desc | stat-card | Enhances yield, quality, and scalability... |
| home.badge_tech | section-badge | Our Technology |
| home.miraiq_title | section-title | MiRAiQ AI Engine |
| home.miraiq_subtitle | section-tagline | From Protein Design to Scalable Production |
| home.prism_badge | sticky-card | ANALYSIS AI |
| home.prism_title | | MIRAIQ-PRISM™ |
| home.prism_subtitle | | AI-Driven Protein in-silico analysis |
| home.prism_desc | | Intelligent protein sequence and structure analysis for lead optimization |
| home.prism_point1 | | AI-powered prediction of key developability liabilities |
| home.prism_point2 | | Sequence and Structural insights for rational protein design |
| home.prism_cta | | Learn More → |
| home.orion_badge | | ENGINEERING AI |
| home.orion_title | | MIRAIQ-ORION™ |
| home.orion_subtitle | | AI-Driven Protein Engineering |
| home.orion_desc | | Accelerated protein engineering through intelligent DBTL cycles |
| home.orion_point1 | | Boosts protein activity, stability, and manufacturability |
| home.orion_point2 | | Shortens engineering cycles with intelligent prediction models |
| home.ignis_badge | | PROCESS AI |
| home.ignis_title | | MIRAIQ-IGNIS™ |
| home.ignis_subtitle | | AI-Driven Manufacturing |
| home.ignis_desc | | Smart bioprocess optimization from lab to commercial scale |
| home.ignis_point1 | | End-to-end bioprocess modeling and optimization using AI |
| home.ignis_point2 | | Enhanced yield, quality, and scalability across all manufacturing stages |
| home.cta_title | | Ready to Innovate Together? |
| home.cta_text | | Let's discuss how our AI platform can accelerate your R&D |
| home.cta_btn | | Get in Touch |
| home.platform_cta | | Explore Full Platform |

品牌名称保留英文不翻译：**MiRABO**, **MIRAIQ-PRISM™**, **MIRAIQ-ORION™**, **MIRAIQ-IGNIS™**

### about.html — 关于我们

| Key | 区域 | 英文内容 |
|-----|------|---------|
| about.hero_title | hero | About MiRABO |
| about.hero_desc | hero | MiRABO Biotechnology is pioneering the future of biologics with intelligent AI... |
| about.badge | section-badge | FOUNDED IN 2024 |
| about.section_title | | Two Cities, One Vision |
| about.section_subtitle | | A global innovation network bridging East and West |
| about.hq_title | HK card | Hong Kong |
| about.hq_label | HK card | Global HQ |
| about.hq_desc | HK card | Strategic hub connecting international markets, research institutions... |
| about.rd_title | SH card | Shanghai |
| about.rd_label | SH card | R&D Center |
| about.rd_desc | SH card | Advanced AI laboratory driving protein engineering and bioprocess innovation... |
| about.mission_badge | | Our Commitment |
| about.mission_title | | Transforming biologics development through intelligent AI |
| about.mission_subtitle | | Advancing the way protein therapies are discovered, optimized, and delivered |
| about.mission_label | | Our Mission |
| about.mission_text | | To accelerate and advance biologics development through intelligent AI... |
| about.vision_label | | Our Vision |
| about.vision_text | | To shape the next era of biologics through intelligent AI. |
| about.approach_badge | | INTEGRATED WORKFLOW |
| about.approach_title | | From Molecule to Market |
| about.approach_subtitle | | A seamless pipeline combining AI prediction with experimental validation |
| about.step1_title | timeline | AI-Driven Modeling |
| about.step1_desc | | Advanced machine learning algorithms predict protein structures... |
| about.step2_title | | Experimental Validation |
| about.step2_desc | | Laboratory testing confirms computational predictions... |
| about.step3_title | | Process Optimization |
| about.step3_desc | | Bioprocess engineering maximizes yield, purity, and efficiency... |
| about.step4_title | | Scalable Production |
| about.step4_desc | | Industrial-scale manufacturing delivers protein therapeutics to global markets... |
| about.team_title | | Our Team |
| about.team_subtitle | | Co-founders |
| about.cta_title | CTA | Join Our Journey |
| about.cta_text | CTA | Explore how we're transforming biotechnology through AI innovation |
| about.cta_btn1 | CTA | Discover MiRAiQ™ |
| about.cta_btn2 | CTA | Get in Touch |

团队人名（Kyoungho Lee, Junghao Wang, Jingyu Wang）及履历不翻译。

### platform.html — 平台页（内容最多）

| Key | 区域 | 英文内容 |
|-----|------|---------|
| platform.hero_title | hero | MiRAiQ AI Engine |
| platform.hero_subtitle | | From Protein Design to Manufacturing |
| platform.hero_desc | | Three integrated AI platforms covering the entire biologics development pipeline... |
| platform.mcp_badge | | MCP Enabled |
| platform.pipeline_badge | | DEVELOPMENT PIPELINE |
| platform.pipeline_title | | AI-Integrated Full Pipeline |
| platform.pipeline_subtitle | | Accelerating every stage from discovery to production |
| platform.stage1_name | pipeline | Target ID |
| platform.stage1_desc | | Identify and validate therapeutic targets |
| platform.stage2_name | | Lead ID |
| platform.stage2_desc | | Discover lead candidates through AI analysis |
| platform.stage3_name | | Lead optimization |
| platform.stage3_desc | | Assess developability through AI |
| platform.stage4_name | | Protein engineering |
| platform.stage4_desc | | Optimize protein properties via DBTL |
| platform.stage5_name | | Process optimization |
| platform.stage5_desc | | Develop scalable bioprocesses |
| platform.stage6_name | | Manufacturing |
| platform.stage6_desc | | Commercial-scale production |
| platform.prism_badge | | AI-Driven Analysis |
| platform.prism_title | | MIRAIQ-PRISM™ |
| platform.prism_subtitle | | In-Silico Analysis Engine |
| platform.prism_purpose | | Accelerate developability assessment of protein candidates... |
| platform.prism_tech1_title | | Sequence Core |
| platform.prism_tech1_desc | | Protein sequence analysis |
| platform.prism_tech1_points | | PTM analysis / Codon optimization / Systematic plasmid Optimization |
| platform.prism_tech2_title | | Structure Core |
| platform.prism_tech2_desc | | 3D structure modeling |
| platform.prism_tech2_points | | Disulfide bond analysis / Free cysteine analysis / Structure prediction / Molecular dynamics simulation |
| platform.prism_tech3_title | | Safety/Efficacy Core |
| platform.prism_tech3_desc | | Risk assessment |
| platform.prism_tech3_points | | Immunogenicity prediction / Off-target effect analysis / Potency assessment |
| platform.prism_tech4_title | | Other Properties |
| platform.prism_tech4_desc | | Physical characteristics |
| platform.prism_tech4_points | | Aggregation propensity / Solubility prediction / Viscosity & stability modeling |
| platform.orion_badge | | AI-Driven Engineering |
| platform.orion_title | | MIRAIQ-ORION™ |
| platform.orion_purpose | | Optimize protein properties through intelligent design |
| platform.orion_tech1_title | | AI Modeling ... | （结构类似，同上模式 — see 备注） |
| platform.cta_title | | Ready to Transform Your R&D Process? |
| platform.cta_text | | Get in touch with our team to discuss how MiRAiQ can accelerate your biologics development |
| platform.cta_btn | | Schedule a Demo |
| platform.benefits_badge | | WHY CHOOSE US |
| platform.benefits_title | | Beyond AIDD: Manufacturing-Centric AI |
| platform.benefits_desc | | Starting from industrial endpoints, creating a definitive path... |
| platform.advantage1_title | | Industrial DNA |
| platform.advantage1_subtitle | | Starting with the End |
| platform.advantage1_text | | Embedded quality attributes into our algorithm... |
| platform.advantage2_title | | Close-Loop Engine |
| platform.advantage2_subtitle | | Validated by Products |
| platform.advantage3_title | | Domain Knowledge with Data |
| platform.advantage3_subtitle | | Dual Assurance by Domain Expert and Exclusive Data |
| platform.advantage4_title | | System-Level Chassis Adaptation |
| platform.advantage4_subtitle | | Beyond Enzymes, Understanding Cell Factories |

> ORION/IGNIS 的 tech cards（标题/描述/列表点）完全复用 PRISM 模式，总共约 12 个 tech card，每个含 title + desc + 2-4 个 list items。最终翻译 JSON 中平铺。

### solutions.html — 解决方案

| Key | 区域 | 英文内容 |
|-----|------|---------|
| solutions.hero_title | hero | AI-Driven Biologics Solutions |
| solutions.hero_desc | hero | Comprehensive AI platforms for protein therapeutic development... |
| solutions.badge | section-badge | CUSTOM SOLUTIONS |
| solutions.section_title | | Tailored AI Solutions for Your Biologics |
| solutions.section_subtitle | | We customize our AI platforms to meet your specific protein therapeutic development needs |
| solutions.card1_title | | Integrated Platform Access |
| solutions.card1_desc | | Full access to PRISM, ORION, and IGNIS platforms with dedicated support |
| solutions.card2_title | | Custom Model Training |
| solutions.card2_desc | | Train AI models on your proprietary data for enhanced prediction accuracy |
| solutions.card3_title | | Workflow Integration |
| solutions.card3_desc | | Seamless integration with your existing R&D workflows and data systems |
| solutions.case_badge | | SUCCESS STORIES |
| solutions.case_title | | AI-Powered Biologics Innovation |
| solutions.case_subtitle | | Real-world applications of our AI platforms in protein therapeutic development |
| solutions.case1_title | | Antibody Developability |
| solutions.case1_desc | | AI-driven assessment reduced development risks and accelerated lead selection... |
| solutions.case2_title | | Protein Engineering |
| solutions.case2_desc | | Optimized protein stability and expression through intelligent DBTL cycles... |
| solutions.case3_title | | Bioprocess Scale-up |
| solutions.case3_desc | | AI modeling enabled successful scale-up from lab to commercial manufacturing... |
| solutions.cta_title | | Ready to Accelerate Your Biologics Development? |
| solutions.cta_text | | Discover how our AI platforms can transform your protein therapeutic pipeline |
| solutions.cta_btn1 | | Start a Conversation |
| solutions.cta_btn2 | | Explore Our Platforms |

### contact.html — 联系我们

| Key | 区域 | 英文内容 |
|-----|------|---------|
| contact.hero_title | hero | Let's Innovate Together |
| contact.hero_desc | hero | Get in touch with our team to discuss how MiRAiQ can accelerate your R&D |
| contact.form_title | | Send Us a Message |
| contact.form_label_name | | Name * |
| contact.form_placeholder_name | | Your name |
| contact.form_label_email | | Email * |
| contact.form_placeholder_email | | your@email.com |
| contact.form_label_company | | Company * |
| contact.form_placeholder_company | | Your company name |
| contact.form_label_industry | | Industry |
| contact.form_placeholder_industry | | Select an industry |
| contact.form_option_personal_care | | Personal Care |
| contact.form_option_healthcare | | Healthcare |
| contact.form_option_pharma | | Pharmaceutical |
| contact.form_option_other | | Other |
| contact.form_label_subject | | Subject * |
| contact.form_placeholder_subject | | What is this about? |
| contact.form_label_message | | Message * |
| contact.form_placeholder_message | | Tell us more about your inquiry... |
| contact.form_char_count | | 0 / 1000 |
| contact.form_btn_text | | Send Message |
| contact.form_btn_sending | | Sending... |
| contact.form_success | | Message sent successfully! We'll get back to you soon. |
| contact.details_title | | Contact Details |
| contact.hours_title | | Business Hours |
| contact.hours_text | | Monday - Friday: 9:00 AM - 6:00 PM |
| contact.hours_note | | Hong Kong Time / Shanghai Time (UTC+8) |
| contact.follow_title | | Follow Us |
| contact.locations_title | | Our Locations |
| contact.location_hk | | Hong Kong Science Park, Hong Kong |
| contact.location_sh | | Zhangjiang Pharma Valley Innovation Center, Shanghai |
| contact.modal_title | WeChat Modal | Follow Us on WeChat |
| contact.modal_desc | WeChat Modal | Scan to follow our official account |

### SEO Meta 标签

每个页面的 `<title>` 和 `<meta description>` 也需要翻译：

| 页面 | 当前英文 title | 当前英文 description |
|------|---------------|---------------------|
| index | MiRABO Biotechnology \| AI-Driven Biologics Platform | MiRABO Biotechnology pioneers AI-driven biologics... |
| about | About Us \| MiRABO Biotechnology | About MiRABO Biotechnology - Our mission... |
| platform | Platform & Technology \| MiRABO Biotechnology | MiRAiQ AI Engine - Three integrated AI platforms... |
| solutions | Solutions \| MiRABO Biotechnology | AI-driven biologics solutions for protein therapeutic... |
| contact | Contact Us \| MiRABO Biotechnology | Contact MiRABO Biotechnology - Get in touch... |

## 重点注意事项

### 1. JS typewriter 硬编码文本 — main.js 第 12 行和第 27 行

```js
const titleText = 'Building Better Biologics with AI';
const subtitleText = 'Integrated AI solutions...';
```

这两个字符串在 JS 中硬编码，不是 HTML 中的文本。方案：
- `i18n.js` 完成文本替换后，调用 `window.dispatchEvent(new Event('i18nReady'))`
- `main.js` 监听 `i18nReady` 事件，用 i18n 翻译后的文本启动 typewriter
- 或者 mod `main.js` 从 `i18n` 全局对象读取文本

### 2. GDPR cookie 文案（如有）

在 `assets/js/` 中没有找到 cookie 相关文件，当前未实现。如果未来需要，属于未纳入范围的扩展。

### 3. 结构化数据（JSON-LD）

`index.html` 中有 JSON-LD（Organization、WebSite、SiteNavigationElement schema）。这些也有 `name` / `description` 字段：
- Organization name 不翻译（"MiRABO Biotechnology"）
- `description` 字段："AI-driven biologics company pioneering protein therapeutic development platforms" — 是否需要翻译取决于搜索引擎目标语言

**建议：** JSON-LD 中的英文暂不翻译，因为结构化数据主要用于英文搜索引擎。未来可按需添加多语言 version。

### 4. OG 标题/描述

每页的 Open Graph 标签（`og:title`, `og:description`）也需要按当前语言切换。方案：
- 在 HTML 中将 `content` 文本改为 `data-i18n` 属性
- 或通过 JS 动态修改 `<meta>` 标签内容

### 5. footer 年份

`© 2025 MiRABO Biotechnology` 中的 `2025` 是静态文本。建议更新为 `© 2024` 或通过 JS 动态获取当前年份。**此为已有问题，非本次需求范围。**

## 文件修改汇总

| 文件 | 改动类型 | 预估改动量 |
|------|---------|-----------|
| index.html | 加 `data-i18n` 属性 | ~40 处 |
| about.html | 加 `data-i18n` 属性 | ~35 处 |
| platform.html | 加 `data-i18n` 属性 | ~80 处（内容最多） |
| solutions.html | 加 `data-i18n` 属性 | ~25 处 |
| contact.html | 加 `data-i18n` 属性 | ~30 处 |
| main.js | 修改 typewriter 文本源 | ~5 行 |
| build.js | 添加 locales/ 复制 | ~5 行 |
| locales/en.json | 新建 | ~150 keys |
| locales/zh.json | 新建 | ~150 keys |
| locales/ko.json | 新建 | ~150 keys |
| locales/icp-config.json | 新建 | ~15 行 |
| assets/js/i18n.js | 新建 | ~80 行 |

## 风险与注意事项

1. **`data-i18n` 覆盖完整性** — platform.html 有大量 tech cards，其中 list-item 级别的文本很多，需要确保不遗漏
2. **品牌名不翻译** — MiRABO, MIRAIQ, PRISM, ORION, IGNIS, MiRAiQ 保留英文
3. **技术缩略语不翻译** — DBTL, PTM, AI, MCP, R&D, AIDD
4. **团队信息不翻译** — 人名、学位、机构名
5. **地址不翻译** — "Hong Kong Science Park", "Zhangjiang, Shanghai" 等专有地名
