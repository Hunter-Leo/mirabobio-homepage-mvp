# MIRABO Biotechnology - 优化任务启动与恢复指南

## 📖 文档说明

本文档描述如何开始或继续执行网站优化任务，包括设计要求、编码规范、图片处理规范、执行流程等。

---

## 🎯 项目目标

将 MIRABO Biotechnology 网站的业务主题从混合的 AI、eco-friendly biotech、synthetic biology 调整为明确聚焦于 **AI for Biologics**（AI 驱动的生物制药解决方案）。

---

## 📚 核心文档

### 必读文档
1. **需求文档：** `.dev2/finetune/finetune-urs.md`
   - 详细的优化需求说明
   - 包含当前实现分析和具体修改内容

2. **任务文档：** `.dev2/finetune/tasks.md`
   - 任务拆解和状态跟踪
   - 包含详细的任务说明和验收标准

3. **设计文档：** `.dev2/generated/homepage-content-design.md`
   - 网站整体设计规范
   - 视觉风格和组件设计

### 参考文档
- `README.md` - 项目概述
- `.dev2/generated/project-design.md` - 技术设计
- `.dev2/generated/tasks.md` - 原始开发任务（参考图片处理规范）

---

## 🎨 设计要求与规范

### 核心设计主题
**"AI × Biology: Visualizing the Future of Life Sciences"**

- **视觉主题：** 未来生物科技实验室 + 极简科技美学
- **情感基调：** 精准、智能、活力、可持续
- **设计水平：** Awwwards Site of the Day / CSS Design Awards 获奖标准

### 设计风格要素

#### 1. 色彩系统
```css
/* 品牌主色 */
--mirabo-blue: #003BA3;           /* 品牌主色 */
--mirabo-lightBlue: #4B8DFF;      /* 品牌辅色 */
--mirabo-green: #32CD32;          /* Logo 绿色 - 生命与生物科技 */

/* 背景色 */
--mirabo-dark: #05080F;           /* 深空黑 - 主背景 */
--mirabo-surface: #0F141E;        /* 表面深色 */

/* 强调色 */
--electric-blue: #0066FF;         /* 高能量强调 */
--cyber-cyan: #00D9FF;            /* 赛博强调 */
--neon-green: #00FF88;            /* 霓虹高亮 */
```

#### 2. 视觉效果
- **Glassmorphism（玻璃态）：** 所有卡片使用半透明背景 + 模糊效果
- **自定义光标：** 绿色圆点光标 + 动画外圈
- **噪点纹理：** 全局噪点叠加层，增加质感
- **Canvas 粒子：** 生物网络粒子动画
- **平滑滚动：** 使用 Lenis 实现丝滑滚动

#### 3. 排版系统
```css
/* 字体家族 */
--font-primary: 'Inter', sans-serif;           /* 正文 */
--font-display: 'Space Grotesk', sans-serif;   /* 标题 */
--font-mono: 'JetBrains Mono', monospace;      /* 代码/数据 */

/* 字体大小（桌面端）*/
--text-hero: 96px / 6rem;          /* Hero 标题 */
--text-h1: 72px / 4.5rem;          /* 页面标题 */
--text-h2: 48px / 3rem;            /* Section 标题 */
--text-h3: 36px / 2.25rem;         /* 子标题 */
--text-body: 18px / 1.125rem;      /* 正文 */
```

#### 4. 动画规范
- **页面加载：** Logo 粒子聚合（1.5s）
- **滚动动画：** AOS fade-up, fade-in, zoom-in
- **Hover 效果：** Scale 1.05 + 发光 + 提升
- **过渡时间：** 0.3s - 0.4s
- **缓动函数：** cubic-bezier(0.4, 0, 0.2, 1)

### 响应式断点
```css
--mobile: 0px - 639px;
--tablet: 640px - 1023px;
--desktop: 1024px - 1279px;
--wide: 1280px+;
```

---

## 🖼️ 图片处理规范（重要）

### 图片获取来源

#### 1. Unsplash 关键词
根据不同页面和section使用以下关键词搜索：

**首页 (index.html):**
- Hero 背景: "abstract technology blue particles", "data visualization", "neural network"
- About section: "biotech laboratory team", "scientists collaboration"
- Platform section: "AI visualization", "molecular structure", "protein structure"

**About 页面 (about.html):**
- Company story: "modern research facility", "biotech laboratory"
- Team section: "scientists collaboration", "research team"

**Platform 页面 (platform.html):**
- PRISM: "protein structure 3D visualization", "molecular analysis dashboard"
- ORION: "protein engineering visualization", "molecular mutation comparison"
- IGNIS: "bioreactor manufacturing", "pharmaceutical production line"

**Solutions 页面 (solutions.html):**
- Biologics development: "pharmaceutical development", "protein therapeutics research"
- Manufacturing: "bioprocess manufacturing", "commercial scale production"

### 图片处理流程

#### 步骤 1: 下载高质量图片
```bash
# 从 Unsplash 下载
# 选择 "Large" 或 "Original" 尺寸
# 保存到临时目录
```

#### 步骤 2: 图片压缩与格式转换

**使用工具：**
- **在线工具：** [Squoosh](https://squoosh.app/) (推荐)
- **Mac 工具：** ImageOptim
- **命令行：** cwebp (WebP 转换)

**压缩标准：**
```
Hero 背景图片:     max 300KB
Section 大图:      max 200KB
卡片图片:          max 100KB
缩略图/图标:       max 50KB
```

**格式转换：**
1. **主格式：WebP**
   - 更小的文件大小
   - 更好的压缩率
   - 现代浏览器支持

2. **备用格式：JPEG/PNG**
   - 用于不支持 WebP 的浏览器
   - 使用 `<picture>` 元素实现 fallback

#### 步骤 3: 创建响应式图片尺寸

为不同设备创建不同尺寸：

```
桌面端 (Desktop):  1920px 宽
平板端 (Tablet):   1024px 宽
移动端 (Mobile):   640px 宽
```

**命名规范：**
```
原始文件: hero-background.jpg
WebP 版本: hero-background.webp
桌面端: hero-background-desktop.webp (1920px)
平板端: hero-background-tablet.webp (1024px)
移动端: hero-background-mobile.webp (640px)
```

#### 步骤 4: 实现响应式图片

**标准实现模板：**

```html
<!-- 响应式图片 - 完整版 -->
<picture>
  <!-- WebP 格式 - 桌面端 -->
  <source 
    media="(min-width: 1024px)" 
    srcset="assets/images/hero/hero-background-desktop.webp" 
    type="image/webp">
  
  <!-- WebP 格式 - 平板端 -->
  <source 
    media="(min-width: 640px)" 
    srcset="assets/images/hero/hero-background-tablet.webp" 
    type="image/webp">
  
  <!-- WebP 格式 - 移动端 -->
  <source 
    srcset="assets/images/hero/hero-background-mobile.webp" 
    type="image/webp">
  
  <!-- JPEG fallback -->
  <img 
    src="assets/images/hero/hero-background.jpg" 
    alt="AI-driven biologics development visualization" 
    loading="lazy"
    width="1920"
    height="1080">
</picture>
```

**简化版（单一尺寸）：**

```html
<!-- 单一尺寸图片 -->
<picture>
  <source srcset="assets/images/about/office.webp" type="image/webp">
  <img 
    src="assets/images/about/office.jpg" 
    alt="MIRABO Biotechnology Hong Kong Office" 
    loading="lazy"
    width="800"
    height="600">
</picture>
```

### 图片优化最佳实践

#### 1. 懒加载 (Lazy Loading)
```html
<!-- 首屏图片 - 不使用懒加载 -->
<img src="hero.jpg" alt="Hero image">

<!-- 首屏以下图片 - 使用懒加载 -->
<img src="section.jpg" alt="Section image" loading="lazy">
```

#### 2. 预加载关键图片
```html
<!-- 在 <head> 中预加载 Hero 背景 -->
<link rel="preload" as="image" href="assets/images/hero/hero-background.webp">
```

#### 3. 添加图片尺寸（防止布局偏移）
```html
<!-- ✅ 正确：指定宽高 -->
<img src="image.jpg" alt="Description" width="800" height="600">

<!-- ❌ 错误：未指定宽高 -->
<img src="image.jpg" alt="Description">
```

#### 4. 使用正确的 Alt 文本
```html
<!-- ✅ 正确：描述性 alt -->
<img src="protein.jpg" alt="3D visualization of protein structure showing binding sites">

<!-- ❌ 错误：无意义 alt -->
<img src="protein.jpg" alt="image1">
```

### SVG 图标处理

#### 1. SVG 优化
```bash
# 使用 SVGO 优化 SVG
npx svgo input.svg -o output.svg
```

#### 2. 内联关键 SVG
```html
<!-- 内联 SVG（用于小图标）-->
<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="..." fill="currentColor"/>
</svg>
```

#### 3. 外部 SVG 文件
```html
<!-- 外部 SVG 文件 -->
<img src="assets/images/icons/icon.svg" alt="Icon" width="48" height="48">
```

### Logo 处理

#### 1. Logo 文件准备
```
assets/images/
├── mirabobio-logo-static.svg    (主 Logo)
├── mirabobio-logo-blink.svg     (动画 Logo)
├── favicon.svg                   (网站图标)
```

#### 2. Logo 使用
```html
<!-- Header Logo -->
<a href="index.html" class="logo">
  <img src="assets/images/mirabobio-logo-static.svg" 
       alt="MIRABO Biotechnology" 
       width="180" 
       height="40">
</a>
```

### 图片文件组织

```
assets/images/
├── hero/                    # Hero 背景图片
│   ├── hero-background.webp
│   ├── hero-background.jpg
│   └── ...
├── about/                   # About 页面图片
│   ├── hkstp-winning-park.webp
│   ├── hkstp-winning-park.png
│   ├── sh-inno-center.webp
│   ├── sh-inno-center.jpg
│   └── ...
├── platform/                # Platform 页面图片
│   ├── prism-analysis.webp
│   ├── orion-engineering.webp
│   ├── ignis-manufacturing.webp
│   └── ...
├── solutions/               # Solutions 页面图片
│   └── ...
├── backgrounds/             # 背景动画
│   ├── fold_adalimumab_free_cystein_model_0_rotation_slow.gif
│   └── ...
├── icons/                   # 图标
│   ├── prism-icon.svg
│   ├── orion-icon.svg
│   ├── ignis-icon.svg
│   └── ...
├── team/                    # 团队照片
│   ├── placeholder-1.jpg
│   └── ...
├── mirabobio-logo-static.svg
├── mirabobio-logo-blink.svg
└── favicon.svg
```

### 图片处理检查清单

**处理前：**
- [ ] 确认图片来源（Unsplash 或提供的素材）
- [ ] 确认图片用途和位置
- [ ] 确认目标尺寸和压缩标准

**处理中：**
- [ ] 转换为 WebP 格式
- [ ] 保留 JPEG/PNG 作为 fallback
- [ ] 压缩到目标大小
- [ ] 创建响应式尺寸（如需要）
- [ ] 优化 SVG（如适用）

**处理后：**
- [ ] 检查图片质量
- [ ] 检查文件大小
- [ ] 使用 `<picture>` 元素实现
- [ ] 添加 `loading="lazy"`（首屏以下）
- [ ] 添加 `width` 和 `height` 属性
- [ ] 添加描述性 `alt` 文本
- [ ] 测试不同设备显示效果

---

## 💻 编码要求与规范

### HTML 规范

#### 1. 语义化标签
```html
<!-- ✅ 正确 -->
<section class="section section-overview">
  <div class="container">
    <h2 class="section-title">标题</h2>
    <p class="section-desc">描述</p>
  </div>
</section>

<!-- ❌ 错误 -->
<div class="section">
  <div class="wrapper">
    <div class="title">标题</div>
    <div class="text">描述</div>
  </div>
</div>
```

#### 2. 可访问性
- 所有图片必须有 `alt` 属性
- 使用 `aria-label` 描述交互元素
- 确保键盘导航可用
- 颜色对比度符合 WCAG AA 标准

### CSS 规范

#### 1. 命名规范（BEM）
```css
/* Block */
.card { }

/* Element */
.card__title { }
.card__content { }

/* Modifier */
.card--featured { }
.card--large { }
```

#### 2. 使用 CSS 变量
```css
/* ✅ 正确 */
.card {
  background: var(--bg-surface);
  color: var(--text-primary);
}

/* ❌ 错误 */
.card {
  background: #0F141E;
  color: #F1F5F9;
}
```

### JavaScript 规范

#### 1. 代码风格
```javascript
// ✅ 正确：使用 const/let
const element = document.querySelector('.hero');
let counter = 0;

// ✅ 正确：箭头函数
const handleClick = () => {
  console.log('Clicked');
};

// ✅ 正确：模板字符串
const message = `Hello, ${name}!`;
```

---

## ⚠️ 重要事项

### 1. 内容聚焦原则
**所有内容必须聚焦于 "AI for Biologics"**

✅ **应该包含的关键词：**
- AI / Artificial Intelligence
- Biologics / Protein Therapeutics
- In-silico Analysis
- Protein Engineering
- Bioprocess / Manufacturing
- Developability
- Lead Optimization
- Commercial Scale

❌ **应该避免的内容：**
- Personal Care / Skincare / Cosmetics
- Eco-friendly / Sustainable（除非与生物制药直接相关）
- Synthetic Biology（除非明确指 AI 驱动的蛋白质工程）
- Everyday Life / Daily Life

### 2. 术语一致性
使用统一的术语，避免混淆：

| 推荐使用 | 避免使用 |
|---------|---------|
| Biologics | Biopharmaceuticals |
| Protein Therapeutics | Therapeutic Proteins |
| In-silico Analysis | Computational Analysis |
| Lead Optimization | Drug Optimization |
| Bioprocess | Manufacturing Process |

### 3. 平台命名规范
- **MIRAIQ-PRISM™** - Analysis AI Platform
- **MIRAIQ-ORION™** - Engineering AI Platform
- **MIRAIQ-IGNIS™** - Process AI Platform

### 4. 代码质量要求
- **最小化原则：** 只写必要的代码，避免冗余
- **可维护性：** 代码清晰，易于理解和修改
- **性能优先：** 避免不必要的 DOM 操作和重绘
- **兼容性：** 确保主流浏览器兼容

### 5. 测试要求
每完成一个功能模块，必须：
1. ✅ 手动测试桌面端显示
2. ✅ 手动测试移动端显示
3. ✅ 使用 Playwright 自动化测试（如适用）
4. ✅ 对比设计文档，确保无出入
5. ✅ 检查控制台无错误

---

## 🚀 执行流程与规范

### 开始新任务

#### 步骤 1：准备工作
```bash
# 1. 确保在项目根目录
cd /Users/leoluo/Documents/code/mirabobio-homepage-mvp

# 2. 拉取最新代码
git pull origin main

# 3. 创建任务分支
git checkout -b finetune/FT-001

# 4. 启动本地服务器
python -m http.server 8000
# 或使用 VS Code Live Server
```

#### 步骤 2：阅读文档
1. 打开 `.dev2/finetune/tasks.md`
2. 找到要执行的任务（如 FT-001）
3. 阅读任务描述和参考文档
4. 理解验收标准

#### 步骤 3：更新任务状态
在 `tasks.md` 中将任务状态从 ⬜ 改为 🔄：
```markdown
| FT-001 | 首页 Hero 部分内容优化 | 🔄 进行中 | 高 | 2h | - |
```

#### 步骤 4：执行任务

**标准执行流程：**

1. **查找相关代码**
   ```bash
   # 使用 grep 查找关键词
   grep -r "Pioneering AI" index.html
   ```

2. **修改代码**
   - 严格按照任务说明修改
   - 保持代码格式整洁
   - 添加必要的注释

3. **实时测试**
   - 在浏览器中刷新页面
   - 检查修改效果
   - 使用开发者工具检查

4. **使用 Playwright 测试**
   ```bash
   # 如果有自动化测试脚本
   npx playwright test
   ```

#### 步骤 5：验收检查

**桌面端检查清单：**
- [ ] 内容显示正确
- [ ] 样式符合设计
- [ ] 动画效果流畅
- [ ] 无控制台错误
- [ ] 链接正常工作
- [ ] 图片加载正常

**移动端检查清单：**
- [ ] 布局适配正常
- [ ] 文字大小合适
- [ ] 触摸交互正常
- [ ] 图片加载正常
- [ ] 性能良好

**对比设计文档：**
- [ ] 颜色使用正确
- [ ] 字体大小正确
- [ ] 间距符合规范
- [ ] 动画效果一致

#### 步骤 6：提交代码
```bash
# 1. 查看修改
git status
git diff

# 2. 添加修改
git add index.html

# 3. 提交（使用规范的 commit message）
git commit -m "feat(home): update hero section content for AI biologics focus

- Update hero title to 'Building Better Biologics with AI'
- Update hero subtitle to focus on protein therapeutics
- Remove Contact Us button
- Ref: FT-001"

# 4. 推送到远程
git push origin finetune/FT-001
```

#### 步骤 7：更新任务状态
在 `tasks.md` 中将任务状态改为 ✅：
```markdown
| FT-001 | 首页 Hero 部分内容优化 | ✅ 已完成 | 高 | 2h | - |
```

---

### 继续未完成的任务

#### 步骤 1：检查任务状态
```bash
# 打开任务文档
cat .dev2/finetune/tasks.md | grep "🔄"
```

#### 步骤 2：切换到任务分支
```bash
# 查看所有分支
git branch -a

# 切换到任务分支
git checkout finetune/FT-001

# 拉取最新更新
git pull origin finetune/FT-001
```

#### 步骤 3：回顾进度
1. 查看已完成的修改
2. 查看验收标准中未完成的项
3. 继续执行剩余工作

#### 步骤 4：继续执行
按照"开始新任务"的步骤 4-7 继续执行

---

## 📊 进度跟踪

### 任务优先级

**高优先级任务（必须完成）：**
- FT-001: 首页 Hero 部分内容优化
- FT-003: 首页 "Who we are" Section 重写
- FT-004: 首页三个平台卡片内容更新
- FT-006: About Us 基本信息更新
- FT-012: Solutions 页面完全重构
- FT-013: 全站内容一致性检查
- FT-014: 响应式测试与调整
- FT-015: 性能优化与最终测试

**中优先级任务（建议完成）：**
- FT-002: 首页 Hero 背景动画添加
- FT-007: About Us 图片替换与优化
- FT-008: About Us Mission/Vision 重写
- FT-010: Platform Pipeline 可视化调整
- FT-011: Platform Sequence Core 内容更新

**低优先级任务（可选）：**
- FT-005: 首页删除 Industries Section
- FT-009: About Us 增加 Team Section

### 建议执行顺序

**第一阶段（核心内容更新）：**
1. FT-001 → FT-003 → FT-004 → FT-006
2. 预计时间：7 小时

**第二阶段（Solutions 重构）：**
1. FT-012
2. 预计时间：6 小时

**第三阶段（Platform 优化）：**
1. FT-010 → FT-011
2. 预计时间：3.5 小时

**第四阶段（视觉增强）：**
1. FT-002 → FT-007 → FT-008
2. 预计时间：6.5 小时

**第五阶段（测试与优化）：**
1. FT-013 → FT-014 → FT-015
2. 预计时间：6 小时

---

## 🔧 开发工具

### 推荐工具

**代码编辑器：**
- VS Code（推荐）
- 安装插件：Live Server, Prettier, ESLint

**浏览器：**
- Chrome（主要开发）
- Safari（Mac 测试）
- Firefox（兼容性测试）

**图片处理工具：**
- [Squoosh](https://squoosh.app/) - 在线图片压缩（推荐）
- ImageOptim - Mac 图片优化工具
- [TinyPNG](https://tinypng.com/) - 在线 PNG/JPEG 压缩
- SVGO - SVG 优化工具

**测试工具：**
- Chrome DevTools
- Lighthouse
- Playwright

### 快捷命令

```bash
# 启动本地服务器
python -m http.server 8000

# 查看 Git 状态
git status

# 查看任务列表
cat .dev2/finetune/tasks.md

# 搜索代码
grep -r "关键词" .

# 查看文件差异
git diff index.html

# 图片格式转换（需要安装 cwebp）
cwebp input.jpg -q 80 -o output.webp
```

---

## ✅ 最终检查清单

### 上线前检查

**内容检查：**
- [ ] 所有文字内容聚焦于 AI for biologics
- [ ] 术语使用一致
- [ ] 无拼写错误
- [ ] 无旧内容残留

**功能检查：**
- [ ] 所有链接正常工作
- [ ] 所有动画效果正常
- [ ] 表单提交正常
- [ ] 导航功能正常

**视觉检查：**
- [ ] 所有图片加载正常
- [ ] 图片已优化（WebP + fallback）
- [ ] 样式符合设计规范
- [ ] 颜色使用正确
- [ ] 字体显示正常

**图片优化检查：**
- [ ] 所有图片转换为 WebP
- [ ] JPEG/PNG fallback 已提供
- [ ] 图片大小符合标准
- [ ] 响应式图片已实现
- [ ] 懒加载已启用
- [ ] Alt 文本已添加
- [ ] 图片尺寸已指定

**性能检查：**
- [ ] Lighthouse Performance > 90
- [ ] Lighthouse Accessibility > 95
- [ ] Lighthouse Best Practices > 95
- [ ] Lighthouse SEO > 95

**兼容性检查：**
- [ ] Chrome 测试通过
- [ ] Safari 测试通过
- [ ] Firefox 测试通过
- [ ] 移动端测试通过

**代码质量：**
- [ ] 无控制台错误
- [ ] 代码格式整洁
- [ ] 注释清晰
- [ ] Git 提交规范

---

## 🎉 完成标准

当所有高优先级任务完成，并通过最终检查清单后，优化工作即可视为完成。

**完成后的工作：**
1. 合并所有分支到 main
2. 更新 README.md
3. 创建 release tag
4. 部署到 Cloudflare Pages
5. 通知相关人员

---

**祝开发顺利！🚀**
