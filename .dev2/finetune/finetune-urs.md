# MIRABO Biotechnology - 网站优化需求文档 (Finetune URS)

## 文档说明

本文档详细描述了网站的优化需求，包括内容修改、设计调整和功能优化。每个需求都包含：
- 当前实现分析
- 需求描述
- 具体修改内容
- 相关文件引用

---

## 一、首页 (index.html) 优化需求

### 需求 1.1: Hero 部分文字内容修改

**当前实现分析：**
- 文件位置：`index.html` (行 123-135)
- 当前代码：
```html
<h1 class="hero__title">
    <span class="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500"></span>
</h1>
<p class="hero__subtitle opacity-0">
    Pioneering AI-integrated platforms to create next-generation bioactive ingredients and medical materials. From In-Silico prediction to commercial scale.
</p>
```
- 问题：标题为空，副标题内容需要更新以聚焦于 AI for biologics

**需求描述：**
将 Hero 部分的文字内容修改为更聚焦于 AI 驱动的生物制药解决方案，突出公司的核心业务定位。

**具体修改内容：**
1. 主标题修改为：
   ```
   Building Better Biologics with AI
   ```
2. 副标题修改为：
   ```
   Integrated AI solutions for designing and developing protein therapeutics from discovery through commercial manufacturing
   ```

**修改原因：**
- 原内容混合了 AI、eco-friendly biotech、synthetic biology 等多个主题
- 新内容明确聚焦于 AI for biologics，符合公司当前的业务定位
- 强调从发现到商业化生产的全流程解决方案

**相关文件：**
- `index.html` (行 123-135)
- `assets/js/main.js` (可能需要更新打字动画文本)

---

### 需求 1.2: Hero 部分删除 Contact Us 按钮

**当前实现分析：**
- 文件位置：`index.html` (行 136-140)
- 当前代码：
```html
<div class="hero__cta opacity-0">
    <a href="platform.html" class="btn btn-primary">Explore Our Platform</a>
    <a href="contact.html" class="btn btn-secondary">Contact Us</a>
</div>
```
- 当前有两个按钮：主按钮 "Explore Our Platform" 和次按钮 "Contact Us"

**需求描述：**
删除 Hero 部分的 "Contact Us" 按钮，只保留 "Explore Our Platform" 按钮。

**具体修改内容：**
删除 `<a href="contact.html" class="btn btn-secondary">Contact Us</a>` 这一行。

**修改原因：**
- 简化 Hero 部分的 CTA，避免分散用户注意力
- 主要引导用户了解平台功能，而非直接联系

**相关文件：**
- `index.html` (行 136-140)

---

### 需求 1.3: Hero 部分添加背景动画

**当前实现分析：**
- 文件位置：`index.html` (行 122)
- 当前代码：
```html
<section class="hero" id="home">
    <canvas id="hero-canvas" class="hero__canvas"></canvas>
    ...
</section>
```
- 当前使用 Canvas 粒子动画作为背景
- 相关 JS 文件：`assets/js/canvas-particles.js`

**需求描述：**
在 Hero 部分添加蛋白质折叠动画作为背景，并使 headline 透明化以展示背景动画。

**具体修改内容：**

1. **添加背景 GIF 动画：**
   - 使用文件：`assets/images/backgrounds/fold_adalimumab_free_cystein_model_0_rotation_slow.gif`
   - 在 Canvas 层下方添加 GIF 背景层
   - 设置适当的透明度和混合模式

2. **HTML 结构修改：**
```html
<section class="hero" id="home">
    <!-- 背景 GIF 层 -->
    <div class="hero__bg-animation">
        <img src="assets/images/backgrounds/fold_adalimumab_free_cystein_model_0_rotation_slow.gif" 
             alt="Protein Folding Animation" 
             class="hero__bg-gif">
    </div>
    <!-- Canvas 粒子层 -->
    <canvas id="hero-canvas" class="hero__canvas"></canvas>
    <div class="hero__content container">
        ...
    </div>
</section>
```

3. **CSS 样式添加（`assets/css/style.css`）：**
```css
.hero__bg-animation {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    overflow: hidden;
}

.hero__bg-gif {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.3; /* 调整透明度 */
    mix-blend-mode: screen; /* 混合模式 */
}

.hero__canvas {
    position: absolute;
    inset: 0;
    z-index: 2;
}

.hero__content {
    position: relative;
    z-index: 3;
}

/* Headline 透明化效果 */
.hero__title {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    padding: 2rem;
    border-radius: 1rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
}
```

4. **响应式处理：**
   - 移动端可以降低 GIF 透明度或隐藏，以提升性能

**修改原因：**
- 蛋白质折叠动画直观展示公司的生物制药业务
- 透明化的 headline 与背景动画形成视觉层次
- 增强页面的科技感和专业性

**相关文件：**
- `index.html` (行 122-145)
- `assets/css/style.css` (Hero section 样式)
- `assets/images/backgrounds/fold_adalimumab_free_cystein_model_0_rotation_slow.gif` (新增)

---

### 需求 1.4: 删除 "Transforming Industries" Section

**当前实现分析：**
- 需要查找 index.html 中是否存在 "Transforming Industries" section
- 根据设计文档，这应该是一个展示行业应用的部分

**需求描述：**
完全删除 "Transforming Industries" section 及其相关内容。

**具体修改内容：**
1. 在 `index.html` 中查找包含 "Transforming Industries" 的 section
2. 删除整个 section 及其内部所有内容
3. 如果有相关的 CSS 样式，也需要清理

**修改原因：**
- 简化首页内容，聚焦核心信息
- 行业应用内容可以在 Solutions 页面详细展示

**相关文件：**
- `index.html` (需要查找具体位置)
- `assets/css/style.css` (可能需要清理相关样式)

---

### 需求 1.5: "Who we are" Section 内容修改

**当前实现分析：**
- 文件位置：`index.html` (行 148-180)
- 当前代码：
```html
<section class="section section-overview">
    <div class="container">
        <span class="section-badge" data-aos="fade-up">Who We Are</span>
        <h2 class="section-title" data-aos="fade-up" data-aos-delay="100">Bridging AI and Biology</h2>
        <p class="section-desc" data-aos="fade-up" data-aos-delay="200">
            MIRABO Biotechnology is a Hong Kong-based synthetic biology company pioneering AI-integrated platforms for the personal-care and healthcare industries.
        </p>
        <div class="stats-grid">
            <div class="stat-card" data-aos="fade-up" data-aos-delay="300">
                ...
                <h3 class="stat-title">AI-Driven Platform</h3>
                <p class="stat-desc">Advanced machine learning algorithms accelerate biologics development</p>
            </div>
            <div class="stat-card" data-aos="fade-up" data-aos-delay="400">
                ...
                <h3 class="stat-title">Sustainable Solutions</h3>
                <p class="stat-desc">Eco-friendly biotech innovations for a better tomorrow</p>
            </div>
            <div class="stat-card" data-aos="fade-up" data-aos-delay="500">
                ...
                <h3 class="stat-title">Innovative Research</h3>
                <p class="stat-desc">Cutting-edge synthetic biology breakthroughs</p>
            </div>
        </div>
    </div>
</section>
```

**问题分析：**
- 当前内容混合了 AI、eco-friendly biotech、synthetic biology 等多个主题
- 没有明确聚焦于 AI for biologics
- 三个卡片的内容过于宽泛

**需求描述：**
将 "Who we are" section 的内容重新组织，明确聚焦于 AI 驱动的生物制药解决方案，展示三个核心 AI 平台的价值。

**具体修改内容：**

1. **标题修改：**
```html
<h2 class="section-title" data-aos="fade-up" data-aos-delay="100">
    Empowering Biologics Development with AI
</h2>
```

2. **描述文字修改：**
```html
<p class="section-desc" data-aos="fade-up" data-aos-delay="200">
    MIRABO Biotechnology delivers AI solutions that accelerate and de-risk protein therapeutic development — from early discovery through commercial-scale production.
</p>
```

3. **三个卡片内容修改：**

**卡片 1 - AI-Powered In-Silico Protein Analysis:**
```html
<div class="stat-card" data-aos="fade-up" data-aos-delay="300">
    <div class="stat-icon">
        <!-- 保持现有图标或更换为分析相关图标 -->
    </div>
    <h3 class="stat-title">AI-Powered In-Silico Protein Analysis</h3>
    <p class="stat-desc">
        Predicts structure, stability, immunogenicity, and developability to de-risk biologics before entering the lab.
    </p>
</div>
```

**卡片 2 - AI-Driven Protein Engineering & Optimization:**
```html
<div class="stat-card" data-aos="fade-up" data-aos-delay="400">
    <div class="stat-icon">
        <!-- 保持现有图标或更换为工程相关图标 -->
    </div>
    <h3 class="stat-title">AI-Driven Protein Engineering & Optimization</h3>
    <p class="stat-desc">
        Improves protein stability, activity, and expression to accelerate therapeutic design and optimization.
    </p>
</div>
```

**卡片 3 - AI Modeling for Bioprocess & Manufacturing:**
```html
<div class="stat-card" data-aos="fade-up" data-aos-delay="500">
    <div class="stat-icon">
        <!-- 保持现有图标或更换为制造相关图标 -->
    </div>
    <h3 class="stat-title">AI Modeling for Bioprocess & Manufacturing</h3>
    <p class="stat-desc">
        Enhances yield, quality, and scalability across cell-line development, upstream, downstream, and formulation.
    </p>
</div>
```

**修改原因：**
- 明确聚焦于 AI for biologics，去除 eco-friendly、synthetic biology 等混杂主题
- 三个卡片对应三个核心 AI 平台（Analysis、Engineering、Manufacturing）
- 强调 de-risk、accelerate、enhance 等关键价值主张

**相关文件：**
- `index.html` (行 148-180)
- `assets/css/style.css` (可能需要调整卡片样式)

---

### 需求 1.6: "STEP 01: ANALYSIS" Section 内容修改

**当前实现分析：**
- 文件位置：`index.html` (行 189-217)
- 当前代码：
```html
<div class="sticky-card mb-32" style="top: 8rem;">
    <div class="max-w-6xl mx-auto glass-panel rounded-3xl p-16 shadow-2xl shadow-blue-500/20">
        <div class="grid md:grid-cols-2 gap-16 items-center">
            <div class="space-y-6 text-center md:text-left">
                <div class="inline-block px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm border border-blue-500/50">
                    STEP 01: ANALYSIS
                </div>
                <h3 class="text-5xl font-bold">MIRAIQ-PRISM™</h3>
                <p class="text-2xl text-blue-400">AI-Driven Analysis</p>
                <p class="text-lg text-gray-300 leading-relaxed">
                    Intelligent protein sequence and structure analysis for optimal design
                </p>
                <ul class="space-y-4 text-base text-gray-400 inline-block text-left">
                    <li class="flex items-center gap-3">
                        <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse" style="animation-duration: 3s"></span>
                        Molecular Dynamics Simulation
                    </li>
                    <li class="flex items-center gap-3">
                        <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse" style="animation-duration: 3s; animation-delay: 0.5s"></span>
                        Surface Charge Analysis
                    </li>
                </ul>
                ...
            </div>
            ...
        </div>
    </div>
</div>
```

**需求描述：**
修改 PRISM 平台卡片的标签、副标题和描述文字，使其更准确地反映平台功能。

**具体修改内容：**

1. **标签修改：**
```html
<div class="inline-block px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm border border-blue-500/50">
    ANALYSIS AI
</div>
```

2. **副标题修改：**
```html
<p class="text-2xl text-blue-400">AI-Driven Protein in-silico analysis</p>
```

3. **描述文字修改：**
```html
<p class="text-lg text-gray-300 leading-relaxed">
    Intelligent protein sequence and structure analysis for lead optimization
</p>
```

4. **列表内容替换：**
```html
<ul class="space-y-4 text-base text-gray-400 inline-block text-left">
    <li class="flex items-center gap-3">
        <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse" style="animation-duration: 3s"></span>
        AI-powered prediction of key developability liabilities
    </li>
    <li class="flex items-center gap-3">
        <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse" style="animation-duration: 3s; animation-delay: 0.5s"></span>
        Sequence and Structural insights for rational protein design
    </li>
</ul>
```

**修改原因：**
- "ANALYSIS AI" 更简洁，与后续的 "ENGINEERING AI"、"PROCESS AI" 保持一致
- "in-silico analysis" 更准确地描述计算分析的特性
- "lead optimization" 比 "optimal design" 更符合药物开发术语
- 列表内容更具体地描述平台的核心价值

**相关文件：**
- `index.html` (行 189-217)

---

### 需求 1.7: "STEP 02: ENGINEERING" Section 内容修改

**当前实现分析：**
- 文件位置：`index.html` (行 220-248)
- 当前代码结构与 PRISM 卡片类似

**需求描述：**
修改 ORION 平台卡片的标签、副标题和列表内容。

**具体修改内容：**

1. **标签修改：**
```html
<div class="inline-block px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full text-sm border border-purple-500/50">
    ENGINEERING AI
</div>
```

2. **副标题修改：**
```html
<p class="text-2xl text-purple-400">AI-Driven Protein Engineering</p>
```

3. **列表内容替换：**
```html
<ul class="space-y-4 text-base text-gray-400 inline-block text-left">
    <li class="flex items-center gap-3">
        <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse" style="animation-duration: 3s"></span>
        Boosts protein activity, stability, and manufacturability
    </li>
    <li class="flex items-center gap-3">
        <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse" style="animation-duration: 3s; animation-delay: 0.5s"></span>
        Shortens engineering cycles with intelligent prediction models
    </li>
</ul>
```

**修改原因：**
- 统一标签命名风格
- 更准确地描述蛋白质工程的核心功能
- 强调 AI 带来的效率提升

**相关文件：**
- `index.html` (行 220-248)

---

### 需求 1.8: "STEP 03: PROCESS" Section 内容修改

**当前实现分析：**
- 需要查找 index.html 中 IGNIS 平台卡片的位置
- 预计在 ORION 卡片之后

**需求描述：**
修改 IGNIS 平台卡片的标签和列表内容。

**具体修改内容：**

1. **标签修改：**
```html
<div class="inline-block px-4 py-2 bg-orange-500/20 text-orange-400 rounded-full text-sm border border-orange-500/50">
    PROCESS AI
</div>
```

2. **列表内容替换：**
```html
<ul class="space-y-4 text-base text-gray-400 inline-block text-left">
    <li class="flex items-center gap-3">
        <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse" style="animation-duration: 3s"></span>
        End-to-end bioprocess modeling and optimization using AI
    </li>
    <li class="flex items-center gap-3">
        <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse" style="animation-duration: 3s; animation-delay: 0.5s"></span>
        Enhanced yield, quality, and scalability across all manufacturing stages
    </li>
</ul>
```

**修改原因：**
- 统一标签命名风格
- 强调端到端的生物工艺优化
- 突出 AI 在制造阶段的全面应用

**相关文件：**
- `index.html` (需要查找 IGNIS 卡片的具体位置)

---

## 二、About Us 页面 (about.html) 优化需求

### 需求 2.1: 修改公司成立年份

**当前实现分析：**
- 需要在 `about.html` 中查找 "FOUNDED IN 2020" 文本
- 可能出现在公司历史或时间线部分

**需求描述：**
将公司成立年份从 2020 修改为 2024。

**具体修改内容：**
1. 查找 `about.html` 中所有包含 "2020" 或 "FOUNDED IN 2020" 的文本
2. 替换为 "FOUNDED IN 2024" 或 "2024"

**修改原因：**
- 更新公司成立年份信息
- 确保网站信息的准确性

**相关文件：**
- `about.html` (需要查找具体位置)

---

### 需求 2.2: 替换香港/上海办公地点图片

**当前实现分析：**
- 需要在 `about.html` 中查找办公地点图片
- 当前图片可能在 `assets/images/about/` 目录下

**需求描述：**
替换香港和上海办公地点的图片，使用新提供的图片文件。

**具体修改内容：**

1. **香港办公地点图片：**
   - 新图片文件：`assets/images/about/hkstp-winning-park.png`
   - 在 `about.html` 中找到香港办公地点的图片标签
   - 替换 `src` 属性为新图片路径

2. **上海办公地点图片：**
   - 新图片文件：`assets/images/about/sh-inno-center.jpg`
   - 需要按照 `tasks.md` 中的要求进行图片调整（裁剪、压缩、优化）
   - 在 `about.html` 中找到上海办公地点的图片标签
   - 替换 `src` 属性为新图片路径

3. **图片优化要求（参考 tasks.md T013）：**
   - 转换为 WebP 格式（主要格式）
   - 保留 JPEG 作为 fallback
   - 压缩至 max 200KB
   - 添加适当的 `alt` 文本
   - 使用 `<picture>` 元素实现响应式图片

**示例代码：**
```html
<!-- 香港办公地点 -->
<picture>
    <source srcset="assets/images/about/hkstp-winning-park.webp" type="image/webp">
    <img src="assets/images/about/hkstp-winning-park.png" 
         alt="MIRABO Biotechnology Hong Kong Office at Science Park" 
         loading="lazy">
</picture>

<!-- 上海办公地点 -->
<picture>
    <source srcset="assets/images/about/sh-inno-center.webp" type="image/webp">
    <img src="assets/images/about/sh-inno-center.jpg" 
         alt="MIRABO Biotechnology Shanghai Office at Zhangjiang Innovation Center" 
         loading="lazy">
</picture>
```

**修改原因：**
- 使用更准确的办公地点图片
- 提升视觉效果和专业性

**相关文件：**
- `about.html` (需要查找图片位置)
- `assets/images/about/hkstp-winning-park.png` (新增)
- `assets/images/about/sh-inno-center.jpg` (新增，需要优化)

---

### 需求 2.3: Hero 部分正文内容修改

**当前实现分析：**
- 需要在 `about.html` 中查找 Hero section 的正文内容
- 通常在页面顶部的介绍文字

**需求描述：**
修改 About Us 页面 Hero 部分的正文内容，更准确地描述公司定位。

**具体修改内容：**
将 Hero 部分的正文内容替换为：
```
MIRABO Biotechnology is pioneering the future of biologics with intelligent AI — empowering developers to create safer, smarter, and more scalable protein therapeutics.
```

**修改原因：**
- 更明确地定位为 AI for biologics 公司
- 强调 "intelligent AI" 和 "protein therapeutics"
- 突出三个核心价值：safer、smarter、scalable

**相关文件：**
- `about.html` (需要查找 Hero section 的具体位置)

---

### 需求 2.4: "Our Commitment" Section 内容修改

**当前实现分析：**
- 需要在 `about.html` 中查找 "Our Commitment" section
- 可能包含 Mission 和 Vision 的内容

**需求描述：**
重新组织 "Our Commitment" section 的内容，使其更聚焦于 AI 驱动的生物制药。

**具体修改内容：**

1. **第一段修改：**
   - 原文：Driving innovation forward
   - 新文：Transforming biologics development through intelligent AI.

2. **第二段修改：**
   - 原文：Bridging biotechnology and everyday life
   - 新文：Advancing the way protein therapies are discovered, optimized, and delivered.

3. **Mission 修改：**
```html
<h3>Our Mission</h3>
<p>
    To accelerate and advance biologics development through intelligent AI, bringing safer and more effective therapies to patients faster.
</p>
```

4. **Vision 修改：**
```html
<h3>Our Vision</h3>
<p>
    To shape the next era of biologics through intelligent AI.
</p>
```

**修改原因：**
- 去除 "everyday life" 等宽泛表述
- 聚焦于生物制药的核心价值
- 强调 AI 技术的核心作用
- 突出对患者的最终价值

**相关文件：**
- `about.html` (需要查找 "Our Commitment" section 的具体位置)

---

### 需求 2.5: 增加 "TEAM" Section

**当前实现分析：**
- `about.html` 中可能没有 TEAM section
- 需要新增一个完整的团队展示部分

**需求描述：**
在 About Us 页面增加一个 "TEAM" section，展示团队成员的职务和头像。

**具体修改内容：**

1. **Section 结构：**
```html
<section class="section section-team py-32">
    <div class="container">
        <span class="section-badge" data-aos="fade-up">Our Team</span>
        <h2 class="section-title text-center mb-16" data-aos="fade-up" data-aos-delay="100">
            Meet the Minds Behind MIRABO
        </h2>
        
        <div class="team-grid">
            <!-- 团队成员卡片 -->
            <div class="team-card" data-aos="fade-up" data-aos-delay="200">
                <div class="team-card__avatar">
                    <img src="assets/images/team/placeholder-1.jpg" alt="Team Member Name">
                </div>
                <h3 class="team-card__name">Name Placeholder</h3>
                <p class="team-card__title">Chief Executive Officer</p>
                <p class="team-card__bio">Brief bio or expertise description</p>
            </div>
            
            <!-- 更多团队成员卡片... -->
        </div>
    </div>
</section>
```

2. **CSS 样式（添加到 `assets/css/style.css`）：**
```css
.section-team {
    background: var(--bg-primary);
}

.team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 3rem;
    max-width: 1200px;
    margin: 0 auto;
}

.team-card {
    background: rgba(15, 20, 30, 0.6);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 1.5rem;
    padding: 2rem;
    text-align: center;
    transition: all 0.3s ease;
}

.team-card:hover {
    transform: translateY(-8px);
    border-color: rgba(0, 217, 255, 0.3);
    box-shadow: 0 8px 32px rgba(0, 217, 255, 0.2);
}

.team-card__avatar {
    width: 150px;
    height: 150px;
    margin: 0 auto 1.5rem;
    border-radius: 50%;
    overflow: hidden;
    border: 3px solid rgba(0, 217, 255, 0.3);
}

.team-card__avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.team-card__name {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 0.5rem;
}

.team-card__title {
    font-size: 1rem;
    color: var(--mirabo-lightBlue);
    margin-bottom: 1rem;
}

.team-card__bio {
    font-size: 0.875rem;
    color: var(--text-secondary);
    line-height: 1.6;
}
```

3. **占位符图片：**
   - 使用统一的占位符头像（可以是公司 logo 或通用头像图标）
   - 文件路径：`assets/images/team/placeholder-1.jpg`, `placeholder-2.jpg`, 等
   - 尺寸：300x300px，圆形裁剪

**修改原因：**
- 增加团队展示，提升公司可信度
- 为未来添加真实团队成员信息预留结构
- 符合专业企业网站的标准配置

**相关文件：**
- `about.html` (新增 section)
- `assets/css/style.css` (新增样式)
- `assets/images/team/` (新增目录和占位符图片)

---

## 三、Platform 页面 (platform.html) 优化需求

### 需求 3.1: "DEVELOPMENT PIPELINE" Section - 删除移动光点动画

**当前实现分析：**
- 需要在 `platform.html` 中查找 "DEVELOPMENT PIPELINE" section
- 可能使用 CSS 动画或 JavaScript 实现移动的绿色光点效果

**需求描述：**
删除 Development Pipeline 可视化中的移动绿色光点动画效果。

**具体修改内容：**

1. **查找动画实现：**
   - 在 `platform.html` 中查找 pipeline 相关的 HTML 结构
   - 在 `assets/css/style.css` 或 `assets/css/animations.css` 中查找相关动画
   - 在 `assets/js/platform.js` 中查找相关 JavaScript 代码

2. **删除动画：**
   - 删除或注释掉移动光点的 HTML 元素
   - 删除相关的 CSS 动画规则
   - 删除相关的 JavaScript 动画代码

**示例（可能的代码结构）：**
```html
<!-- 删除类似这样的元素 -->
<div class="pipeline-dot animate-move"></div>
```

```css
/* 删除类似这样的动画 */
@keyframes move-dot {
    0% { transform: translateX(0); }
    100% { transform: translateX(100%); }
}
.animate-move {
    animation: move-dot 3s linear infinite;
}
```

**修改原因：**
- 简化视觉效果，避免分散注意力
- 提升页面性能
- 使 pipeline 展示更清晰

**相关文件：**
- `platform.html` (需要查找 pipeline section)
- `assets/css/style.css` 或 `assets/css/animations.css`
- `assets/js/platform.js`

---

### 需求 3.2: "DEVELOPMENT PIPELINE" Section - 调整节点展示

**当前实现分析：**
- 需要查看 platform.html 中 pipeline 的节点结构
- 当前可能包含：Target ID, Lead ID, In silico developability, Lead optimization, Process optimization, Manufacturing

**需求描述：**
调整 Development Pipeline 的节点展示，明确三个平台对应的节点，并特殊处理 Target ID 节点。

**具体修改内容：**

1. **Pipeline 节点结构：**
```
Target ID → Lead ID → In silico developability → Lead optimization → Process optimization → Manufacturing
              ↓              ↓                        ↓                    ↓                    ↓
           (不是我们的业务)   PRISM                   ORION               IGNIS               IGNIS
```

2. **HTML 结构调整：**
```html
<div class="pipeline-flow">
    <!-- Target ID - 特殊样式表示不是核心业务 -->
    <div class="pipeline-node pipeline-node--inactive">
        <div class="pipeline-node__label">Target ID</div>
        <div class="pipeline-node__badge">Not Our Focus</div>
    </div>
    
    <div class="pipeline-connector"></div>
    
    <!-- Lead ID - PRISM 对应 -->
    <div class="pipeline-node pipeline-node--prism">
        <div class="pipeline-node__label">Lead ID</div>
        <div class="pipeline-node__platform">
            <img src="assets/images/icons/prism-icon.svg" alt="PRISM">
            <span>PRISM</span>
        </div>
    </div>
    
    <div class="pipeline-connector"></div>
    
    <!-- In silico developability - PRISM 对应 -->
    <div class="pipeline-node pipeline-node--prism">
        <div class="pipeline-node__label">In silico developability</div>
        <div class="pipeline-node__platform">
            <img src="assets/images/icons/prism-icon.svg" alt="PRISM">
            <span>PRISM</span>
        </div>
    </div>
    
    <div class="pipeline-connector"></div>
    
    <!-- Lead optimization - ORION 对应 -->
    <div class="pipeline-node pipeline-node--orion">
        <div class="pipeline-node__label">Lead optimization</div>
        <div class="pipeline-node__platform">
            <img src="assets/images/icons/orion-icon.svg" alt="ORION">
            <span>ORION</span>
        </div>
    </div>
    
    <div class="pipeline-connector"></div>
    
    <!-- Process optimization - IGNIS 对应 -->
    <div class="pipeline-node pipeline-node--ignis">
        <div class="pipeline-node__label">Process optimization</div>
        <div class="pipeline-node__platform">
            <img src="assets/images/icons/ignis-icon.svg" alt="IGNIS">
            <span>IGNIS</span>
        </div>
    </div>
    
    <div class="pipeline-connector"></div>
    
    <!-- Manufacturing - IGNIS 对应 -->
    <div class="pipeline-node pipeline-node--ignis">
        <div class="pipeline-node__label">Manufacturing</div>
        <div class="pipeline-node__platform">
            <img src="assets/images/icons/ignis-icon.svg" alt="IGNIS">
            <span>IGNIS</span>
        </div>
    </div>
</div>
```

3. **CSS 样式（添加到 `assets/css/style.css`）：**
```css
.pipeline-flow {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 3rem 0;
    overflow-x: auto;
}

.pipeline-node {
    min-width: 180px;
    padding: 1.5rem;
    background: rgba(15, 20, 30, 0.6);
    backdrop-filter: blur(12px);
    border: 2px solid rgba(255, 255, 255, 0.1);
    border-radius: 1rem;
    text-align: center;
    transition: all 0.3s ease;
}

.pipeline-node--inactive {
    opacity: 0.5;
    border-style: dashed;
    background: rgba(15, 20, 30, 0.3);
}

.pipeline-node--prism {
    border-color: rgba(0, 102, 255, 0.5);
}

.pipeline-node--prism:hover {
    border-color: rgba(0, 102, 255, 1);
    box-shadow: 0 0 20px rgba(0, 102, 255, 0.3);
}

.pipeline-node--orion {
    border-color: rgba(139, 92, 246, 0.5);
}

.pipeline-node--orion:hover {
    border-color: rgba(139, 92, 246, 1);
    box-shadow: 0 0 20px rgba(139, 92, 246, 0.3);
}

.pipeline-node--ignis {
    border-color: rgba(50, 205, 50, 0.5);
}

.pipeline-node--ignis:hover {
    border-color: rgba(50, 205, 50, 1);
    box-shadow: 0 0 20px rgba(50, 205, 50, 0.3);
}

.pipeline-node__label {
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 0.75rem;
}

.pipeline-node__badge {
    font-size: 0.75rem;
    color: var(--text-secondary);
    font-style: italic;
}

.pipeline-node__platform {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    margin-top: 0.75rem;
}

.pipeline-node__platform img {
    width: 24px;
    height: 24px;
}

.pipeline-node__platform span {
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--mirabo-lightBlue);
}

.pipeline-connector {
    width: 40px;
    height: 2px;
    background: linear-gradient(to right, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.1));
}

/* 响应式 */
@media (max-width: 768px) {
    .pipeline-flow {
        flex-direction: column;
        gap: 1.5rem;
    }
    
    .pipeline-connector {
        width: 2px;
        height: 40px;
        background: linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.1));
    }
}
```

**修改原因：**
- 明确展示三个平台对应的开发阶段
- Target ID 节点特殊处理，表明不是公司的核心业务
- 提升 pipeline 的可读性和专业性

**相关文件：**
- `platform.html` (需要查找并修改 pipeline section)
- `assets/css/style.css` (新增样式)
- `assets/images/icons/` (需要平台图标)

---

### 需求 3.3: "AI-Driven Analysis" Section - Sequence Core 列表修改

**当前实现分析：**
- 需要在 `platform.html` 中查找 "AI-Driven Analysis" section
- 查找 "Sequence Core" 卡片的列表内容

**需求描述：**
修改 PRISM 平台 "Sequence Core" 卡片的列表内容。

**具体修改内容：**

1. **删除项目：**
   - 删除 "Immunogenicity analysis"

2. **修改项目：**
   - 将 "Plasmid construction" 修改为 "Systematic plasmid Optimization"

3. **完整列表示例：**
```html
<div class="platform-feature-card">
    <h4 class="feature-card__title">Sequence Core</h4>
    <ul class="feature-card__list">
        <li>PTM risk assessment</li>
        <li>Proteolytic site prediction</li>
        <li>Disulfide bond stability</li>
        <li>Systematic plasmid Optimization</li>
        <!-- 删除：Immunogenicity analysis -->
    </ul>
</div>
```

**修改原因：**
- "Systematic plasmid Optimization" 更准确地描述功能
- 删除 "Immunogenicity analysis" 可能是因为该功能已移至其他模块或不再强调

**相关文件：**
- `platform.html` (需要查找 Sequence Core 的具体位置)

---

## 四、Solutions 页面 (solutions.html) 优化需求

### 需求 4.1: Solutions 页面重大调整 - 聚焦 AI Biologics

**当前实现分析：**
- 需要查看 `solutions.html` 的完整结构
- 当前可能包含 Personal Care 和 Healthcare 两个行业解决方案

**需求描述：**
对 Solutions 页面进行内容和排版上的重大调整和重新设计，将公司的业务主题围绕在 AI 相关的 biologics 解决方案上，去掉 personal care and healthcare 的相关内容。

**具体修改内容：**

1. **页面主题重新定位：**
   - 原主题：Personal Care + Healthcare 行业解决方案
   - 新主题：AI-Driven Biologics Development Solutions

2. **Hero Section 修改：**
```html
<section class="hero hero--solutions">
    <div class="hero__content container">
        <nav class="breadcrumb">
            <a href="index.html">Home</a> > <span>Solutions</span>
        </nav>
        <h1 class="hero__title">AI-Driven Biologics Solutions</h1>
        <p class="hero__subtitle">
            Comprehensive AI platforms for protein therapeutic development — from discovery to commercial manufacturing
        </p>
    </div>
</section>
```

3. **解决方案重新组织（建议结构）：**

**方案 A - 按开发阶段组织：**
```html
<section class="section section-solutions">
    <div class="container">
        <!-- Discovery & Analysis -->
        <div class="solution-card" data-aos="fade-up">
            <div class="solution-card__header">
                <h2>Discovery & Analysis Solutions</h2>
                <p class="solution-card__tagline">De-risk your biologics before lab work</p>
            </div>
            <div class="solution-card__content">
                <h3>MIRAIQ-PRISM™ Platform</h3>
                <ul>
                    <li>In-silico protein analysis and prediction</li>
                    <li>Developability assessment</li>
                    <li>Structure-based design insights</li>
                    <li>Immunogenicity risk evaluation</li>
                </ul>
                <a href="platform.html#prism" class="btn btn-primary">Learn More</a>
            </div>
        </div>
        
        <!-- Engineering & Optimization -->
        <div class="solution-card" data-aos="fade-up" data-aos-delay="200">
            <div class="solution-card__header">
                <h2>Engineering & Optimization Solutions</h2>
                <p class="solution-card__tagline">Accelerate protein engineering cycles</p>
            </div>
            <div class="solution-card__content">
                <h3>MIRAIQ-ORION™ Platform</h3>
                <ul>
                    <li>AI-driven protein engineering</li>
                    <li>Stability and activity optimization</li>
                    <li>Intelligent DBTL cycles</li>
                    <li>Manufacturability enhancement</li>
                </ul>
                <a href="platform.html#orion" class="btn btn-primary">Learn More</a>
            </div>
        </div>
        
        <!-- Manufacturing & Scale-up -->
        <div class="solution-card" data-aos="fade-up" data-aos-delay="400">
            <div class="solution-card__header">
                <h2>Manufacturing & Scale-up Solutions</h2>
                <p class="solution-card__tagline">Optimize bioprocess for commercial production</p>
            </div>
            <div class="solution-card__content">
                <h3>MIRAIQ-IGNIS™ Platform</h3>
                <ul>
                    <li>End-to-end bioprocess modeling</li>
                    <li>Upstream and downstream optimization</li>
                    <li>Formulation development</li>
                    <li>Scale-up/scale-down prediction</li>
                </ul>
                <a href="platform.html#ignis" class="btn btn-primary">Learn More</a>
            </div>
        </div>
    </div>
</section>
```

**方案 B - 按应用场景组织：**
```html
<section class="section section-solutions">
    <div class="container">
        <h2 class="section-title text-center mb-16">Our Solutions</h2>
        
        <!-- Antibody Development -->
        <div class="solution-card" data-aos="fade-up">
            <h3>Antibody Development</h3>
            <p>Comprehensive AI solutions for monoclonal antibody discovery, optimization, and manufacturing</p>
            <div class="solution-card__platforms">
                <span class="platform-badge platform-badge--prism">PRISM</span>
                <span class="platform-badge platform-badge--orion">ORION</span>
                <span class="platform-badge platform-badge--ignis">IGNIS</span>
            </div>
        </div>
        
        <!-- Protein Therapeutics -->
        <div class="solution-card" data-aos="fade-up" data-aos-delay="200">
            <h3>Protein Therapeutics</h3>
            <p>AI-powered design and optimization for therapeutic proteins and enzymes</p>
            <div class="solution-card__platforms">
                <span class="platform-badge platform-badge--prism">PRISM</span>
                <span class="platform-badge platform-badge--orion">ORION</span>
            </div>
        </div>
        
        <!-- Bioprocess Optimization -->
        <div class="solution-card" data-aos="fade-up" data-aos-delay="400">
            <h3>Bioprocess Optimization</h3>
            <p>AI-driven manufacturing process development and scale-up</p>
            <div class="solution-card__platforms">
                <span class="platform-badge platform-badge--ignis">IGNIS</span>
            </div>
        </div>
    </div>
</section>
```

4. **删除的内容：**
   - 删除 Personal Care 相关的所有内容和图片
   - 删除 Healthcare 相关的通用描述
   - 删除与 skincare、cosmetics 相关的所有文字和图片

5. **新增内容建议：**
   - 添加 "Custom Solutions" section，说明可以为客户定制 AI 解决方案
   - 添加 "Success Metrics" section，展示 AI 带来的效率提升数据
   - 添加 "Get Started" CTA section

6. **CSS 样式调整：**
```css
.solution-card {
    background: rgba(15, 20, 30, 0.6);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 1.5rem;
    padding: 3rem;
    margin-bottom: 3rem;
    transition: all 0.3s ease;
}

.solution-card:hover {
    transform: translateY(-8px);
    border-color: rgba(0, 217, 255, 0.3);
    box-shadow: 0 8px 32px rgba(0, 217, 255, 0.2);
}

.solution-card__header {
    margin-bottom: 2rem;
}

.solution-card__tagline {
    font-size: 1.25rem;
    color: var(--mirabo-lightBlue);
    margin-top: 0.5rem;
}

.platform-badge {
    display: inline-block;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    font-size: 0.875rem;
    font-weight: 600;
    margin-right: 0.5rem;
}

.platform-badge--prism {
    background: rgba(0, 102, 255, 0.2);
    color: #4B8DFF;
    border: 1px solid rgba(0, 102, 255, 0.5);
}

.platform-badge--orion {
    background: rgba(139, 92, 246, 0.2);
    color: #A78BFA;
    border: 1px solid rgba(139, 92, 246, 0.5);
}

.platform-badge--ignis {
    background: rgba(50, 205, 50, 0.2);
    color: #32CD32;
    border: 1px solid rgba(50, 205, 50, 0.5);
}
```

**修改原因：**
- 明确聚焦于 AI for biologics，去除与核心业务无关的内容
- 重新组织内容结构，使其更符合生物制药行业的逻辑
- 突出三个 AI 平台的应用场景和价值
- 提升页面的专业性和针对性

**相关文件：**
- `solutions.html` (需要大幅重写)
- `assets/css/style.css` (新增和修改样式)
- `assets/images/solutions/` (删除旧图片，可能需要新图片)

---

## 五、优化需求总结

### 5.1 需求优先级

**高优先级（必须完成）：**
1. 首页 Hero 部分文字修改（需求 1.1, 1.2）
2. 首页 "Who we are" section 修改（需求 1.5）
3. 首页三个平台卡片内容修改（需求 1.6, 1.7, 1.8）
4. About Us 页面成立年份修改（需求 2.1）
5. About Us 页面 Hero 正文修改（需求 2.3）
6. Solutions 页面重大调整（需求 4.1）

**中优先级（建议完成）：**
1. 首页 Hero 背景动画（需求 1.3）
2. About Us 页面图片替换（需求 2.2）
3. About Us 页面 "Our Commitment" 修改（需求 2.4）
4. Platform 页面 pipeline 调整（需求 3.1, 3.2）
5. Platform 页面 Sequence Core 修改（需求 3.3）

**低优先级（可选）：**
1. 删除 "Transforming Industries" section（需求 1.4）
2. About Us 页面增加 TEAM section（需求 2.5）

### 5.2 预计工作量

- **内容修改：** 4-6 小时
- **设计调整：** 6-8 小时
- **图片处理：** 2-3 小时
- **测试验证：** 2-3 小时
- **总计：** 14-20 小时

### 5.3 注意事项

1. **内容一致性：** 所有修改都要确保聚焦于 "AI for biologics"
2. **设计协调性：** 新增或修改的元素要与现有设计风格保持一致
3. **响应式适配：** 所有修改都要确保在移动端正常显示
4. **性能优化：** 新增的图片和动画要进行优化，确保不影响页面性能
5. **SEO 更新：** 修改内容后要相应更新 meta 标签和结构化数据

---

**文档结束**

