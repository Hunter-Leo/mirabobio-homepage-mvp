# MIRABO Biotechnology - 网站优化任务文档 (Finetune Tasks)

## 📊 任务状态总览

| 任务ID | 任务名称 | 状态 | 优先级 | 预计时间 | 依赖 |
|--------|---------|------|--------|---------|------|
| FT-001 | 首页 Hero 部分内容优化 | ✅ 已完成 | 高 | 2h | - |
| FT-002 | 首页 Hero 背景动画添加 | ✅ 已完成 | 中 | 3h | FT-001 |
| FT-003 | 首页 "Who we are" Section 重写 | ✅ 已完成 | 高 | 2h | - |
| FT-004 | 首页三个平台卡片内容更新 | ✅ 已完成 | 高 | 2h | - |
| FT-005 | 首页删除 Industries Section | ⬜ 待开始 | 低 | 0.5h | - |
| FT-006 | About Us 基本信息更新 | ⬜ 待开始 | 高 | 1h | - |
| FT-007 | About Us 图片替换与优化 | ⬜ 待开始 | 中 | 2h | - |
| FT-008 | About Us Mission/Vision 重写 | ⬜ 待开始 | 中 | 1.5h | FT-006 |
| FT-009 | About Us 增加 Team Section | ⬜ 待开始 | 低 | 3h | - |
| FT-010 | Platform Pipeline 可视化调整 | ⬜ 待开始 | 中 | 3h | - |
| FT-011 | Platform Sequence Core 内容更新 | ⬜ 待开始 | 中 | 0.5h | - |
| FT-012 | Solutions 页面完全重构 | ⬜ 待开始 | 高 | 6h | - |
| FT-013 | 全站内容一致性检查 | ⬜ 待开始 | 高 | 2h | FT-001~012 |
| FT-014 | 响应式测试与调整 | ⬜ 待开始 | 高 | 2h | FT-013 |
| FT-015 | 性能优化与最终测试 | ⬜ 待开始 | 高 | 2h | FT-014 |

**状态图例：**
- ⬜ 待开始
- 🔄 进行中
- ✅ 已完成
- ⚠️ 需要修复
- 🔍 待审核

**总预计时间：** 32 小时

---

## 📋 详细任务说明

### FT-001: 首页 Hero 部分内容优化
**优先级：** 高  
**预计时间：** 2 小时  
**状态：** ⬜ 待开始

#### 任务描述
更新首页 Hero 部分的文字内容，删除 Contact Us 按钮，使内容聚焦于 AI for biologics。

#### 参考文档
- `.dev2/finetune/finetune-urs.md` (需求 1.1, 1.2)
- `.dev2/generated/homepage-content-design.md` (Hero Section 设计)

#### 具体任务
1. **修改主标题文字**
   - 文件：`index.html` (约行 123-135)
   - 将标题改为："Building Better Biologics with AI"
   - 确保打字动画效果正常工作

2. **修改副标题文字**
   - 将副标题改为："Integrated AI solutions for designing and developing protein therapeutics from discovery through commercial manufacturing"

3. **删除 Contact Us 按钮**
   - 删除 `<a href="contact.html" class="btn btn-secondary">Contact Us</a>`
   - 保留 "Explore Our Platform" 按钮
   - 调整按钮容器样式，使单个按钮居中显示

4. **更新相关 JavaScript**
   - 检查 `assets/js/main.js` 中的打字动画文本
   - 确保新文字能正确显示

#### 验收标准
- [ ] Hero 标题显示为新文字
- [ ] 副标题显示为新文字
- [ ] 只有一个 "Explore Our Platform" 按钮
- [ ] 打字动画效果正常
- [ ] 移动端显示正常

---

### FT-002: 首页 Hero 背景动画添加
**优先级：** 中  
**预计时间：** 3 小时  
**状态：** ⬜ 待开始  
**依赖：** FT-001

#### 任务描述
在 Hero 部分添加蛋白质折叠 GIF 动画作为背景，并使 headline 透明化以展示背景。

#### 参考文档
- `.dev2/finetune/finetune-urs.md` (需求 1.3)
- `assets/images/backgrounds/fold_adalimumab_free_cystein_model_0_rotation_slow.gif`

#### 具体任务
1. **添加背景 GIF 层**
   - 在 `index.html` Hero section 中添加背景层
   - 使用提供的 GIF 文件
   - 设置正确的 z-index 层级

2. **调整 CSS 样式**
   - 在 `assets/css/style.css` 中添加背景动画样式
   - 设置 GIF 透明度为 0.3
   - 使用 `mix-blend-mode: screen` 混合模式
   - 确保 Canvas 粒子层在 GIF 之上

3. **Headline 透明化效果**
   - 为 `.hero__title` 添加 glassmorphism 效果
   - 使用 `backdrop-filter: blur(10px)`
   - 添加半透明背景和边框

4. **响应式处理**
   - 移动端降低 GIF 透明度或隐藏
   - 确保性能不受影响

#### 验收标准
- [ ] 背景 GIF 动画正常播放
- [ ] Headline 有透明玻璃效果
- [ ] 层级关系正确（GIF < Canvas < Content）
- [ ] 移动端性能良好
- [ ] 视觉效果符合设计要求

---

### FT-003: 首页 "Who we are" Section 重写
**优先级：** 高  
**预计时间：** 2 小时  
**状态：** ⬜ 待开始

#### 任务描述
重写 "Who we are" section 的内容，聚焦于 AI 驱动的生物制药解决方案。

#### 参考文档
- `.dev2/finetune/finetune-urs.md` (需求 1.5)
- `.dev2/generated/homepage-content-design.md`

#### 具体任务
1. **修改 Section 标题**
   - 文件：`index.html` (约行 148-180)
   - 标题改为："Empowering Biologics Development with AI"

2. **修改描述文字**
   - 改为："MIRABO Biotechnology delivers AI solutions that accelerate and de-risk protein therapeutic development — from early discovery through commercial-scale production."

3. **重写三个卡片内容**
   - 卡片 1：AI-Powered In-Silico Protein Analysis
   - 卡片 2：AI-Driven Protein Engineering & Optimization
   - 卡片 3：AI Modeling for Bioprocess & Manufacturing
   - 按照 URS 文档中的具体文字更新

4. **更新图标（可选）**
   - 如果现有图标不合适，可以更换为更相关的图标
   - 确保图标风格一致

#### 验收标准
- [ ] 标题和描述文字已更新
- [ ] 三个卡片内容完全按照新文字更新
- [ ] 图标合适且风格一致
- [ ] 动画效果正常
- [ ] 移动端显示正常

---

### FT-004: 首页三个平台卡片内容更新
**优先级：** 高  
**预计时间：** 2 小时  
**状态：** ⬜ 待开始

#### 任务描述
更新首页三个平台（PRISM、ORION、IGNIS）卡片的标签、副标题和列表内容。

#### 参考文档
- `.dev2/finetune/finetune-urs.md` (需求 1.6, 1.7, 1.8)
- `index.html` (约行 189-280)

#### 具体任务
1. **PRISM 卡片更新**
   - 标签：STEP 01 → ANALYSIS AI
   - 副标题：AI-Driven Analysis → AI-Driven Protein in-silico analysis
   - 描述：for optimal design → for lead optimization
   - 列表：更新为两个新项目（见 URS）

2. **ORION 卡片更新**
   - 标签：STEP 02 → ENGINEERING AI
   - 副标题：AI-Driven Engineering → AI-Driven Protein Engineering
   - 列表：更新为两个新项目（见 URS）

3. **IGNIS 卡片更新**
   - 标签：STEP 03 → PROCESS AI
   - 列表：更新为两个新项目（见 URS）

#### 验收标准
- [ ] 三个卡片的标签都已更新
- [ ] 副标题都已更新
- [ ] 列表内容完全按照新文字更新
- [ ] Sticky scroll 效果正常
- [ ] 移动端显示正常

---

### FT-005: 首页删除 Industries Section
**优先级：** 低  
**预计时间：** 0.5 小时  
**状态：** ⬜ 待开始

#### 任务描述
删除首页的 "Transforming Industries" section。

#### 参考文档
- `.dev2/finetune/finetune-urs.md` (需求 1.4)

#### 具体任务
1. **查找 Industries Section**
   - 在 `index.html` 中搜索 "Transforming Industries"
   - 确认 section 的完整范围

2. **删除 Section**
   - 删除整个 section 及其内部所有内容
   - 检查是否有相关的 CSS 样式需要清理

3. **测试页面**
   - 确保删除后页面布局正常
   - 检查前后 section 的间距

#### 验收标准
- [ ] Industries section 已完全删除
- [ ] 页面布局正常
- [ ] 无多余的 CSS 样式
- [ ] 页面滚动流畅

---

### FT-006: About Us 基本信息更新
**优先级：** 高  
**预计时间：** 1 小时  
**状态：** ⬜ 待开始

#### 任务描述
更新 About Us 页面的成立年份和 Hero 部分正文内容。

#### 参考文档
- `.dev2/finetune/finetune-urs.md` (需求 2.1, 2.3)
- `about.html`

#### 具体任务
1. **修改成立年份**
   - 在 `about.html` 中搜索 "2020" 或 "FOUNDED IN 2020"
   - 全部替换为 "2024" 或 "FOUNDED IN 2024"

2. **修改 Hero 正文**
   - 找到 Hero section 的描述文字
   - 替换为："MIRABO Biotechnology is pioneering the future of biologics with intelligent AI — empowering developers to create safer, smarter, and more scalable protein therapeutics."

#### 验收标准
- [ ] 成立年份显示为 2024
- [ ] Hero 正文已更新
- [ ] 文字排版正常
- [ ] 移动端显示正常

---

### FT-007: About Us 图片替换与优化
**优先级：** 中  
**预计时间：** 2 小时  
**状态：** ⬜ 待开始

#### 任务描述
替换香港和上海办公地点的图片，并进行优化。

#### 参考文档
- `.dev2/finetune/finetune-urs.md` (需求 2.2)
- `.dev2/generated/tasks.md` (T013 图片优化标准)
- `assets/images/about/hkstp-winning-park.png`
- `assets/images/about/sh-inno-center.jpg`

#### 具体任务
1. **图片优化处理**
   - 将两张图片转换为 WebP 格式
   - 压缩至 max 200KB
   - 保留原格式作为 fallback
   - 确保图片尺寸适合网页显示

2. **更新 HTML**
   - 在 `about.html` 中找到办公地点图片
   - 使用 `<picture>` 元素替换
   - 添加适当的 `alt` 文本
   - 添加 `loading="lazy"`

3. **测试显示效果**
   - 确保图片清晰
   - 检查响应式显示
   - 验证 WebP 和 fallback 都能正常工作

#### 验收标准
- [ ] 两张图片都已替换
- [ ] 图片已优化为 WebP + fallback
- [ ] 图片大小 < 200KB
- [ ] Alt 文本准确
- [ ] 移动端显示正常

---

### FT-008: About Us Mission/Vision 重写
**优先级：** 中  
**预计时间：** 1.5 小时  
**状态：** ⬜ 待开始  
**依赖：** FT-006

#### 任务描述
重写 "Our Commitment" section 的 Mission 和 Vision 内容。

#### 参考文档
- `.dev2/finetune/finetune-urs.md` (需求 2.4)
- `about.html`

#### 具体任务
1. **查找 Our Commitment Section**
   - 在 `about.html` 中找到该 section
   - 确认当前的内容结构

2. **更新内容**
   - 第一段：Transforming biologics development through intelligent AI.
   - 第二段：Advancing the way protein therapies are discovered, optimized, and delivered.
   - Mission：按照 URS 文档更新
   - Vision：按照 URS 文档更新

3. **调整排版**
   - 确保新内容的排版美观
   - 保持与页面整体风格一致

#### 验收标准
- [ ] 所有文字内容已更新
- [ ] 排版美观
- [ ] 语义清晰
- [ ] 移动端显示正常

---

### FT-009: About Us 增加 Team Section
**优先级：** 低  
**预计时间：** 3 小时  
**状态：** ⬜ 待开始

#### 任务描述
在 About Us 页面增加一个 Team section，展示团队成员。

#### 参考文档
- `.dev2/finetune/finetune-urs.md` (需求 2.5)
- `.dev2/generated/homepage-content-design.md` (卡片设计风格)

#### 具体任务
1. **创建 HTML 结构**
   - 在 `about.html` 中添加 Team section
   - 使用 grid 布局展示团队成员卡片
   - 每个卡片包含：头像、姓名、职位、简介

2. **添加 CSS 样式**
   - 在 `assets/css/style.css` 中添加 team 相关样式
   - 使用 glassmorphism 卡片风格
   - 添加 hover 效果

3. **准备占位符图片**
   - 创建 `assets/images/team/` 目录
   - 准备统一的占位符头像（300x300px）
   - 可以使用公司 logo 或通用头像图标

4. **添加动画效果**
   - 使用 AOS 添加滚动动画
   - 卡片 hover 时有提升效果

#### 验收标准
- [ ] Team section 已添加
- [ ] 卡片样式符合设计风格
- [ ] 占位符图片已准备
- [ ] 动画效果流畅
- [ ] 响应式布局正常

---

### FT-010: Platform Pipeline 可视化调整
**优先级：** 中  
**预计时间：** 3 小时  
**状态：** ⬜ 待开始

#### 任务描述
调整 Platform 页面的 Development Pipeline 可视化，删除移动光点动画，调整节点展示。

#### 参考文档
- `.dev2/finetune/finetune-urs.md` (需求 3.1, 3.2)
- `platform.html`
- `assets/js/platform.js`

#### 具体任务
1. **删除移动光点动画**
   - 在 `platform.html` 中查找 pipeline 相关代码
   - 删除移动光点的 HTML 元素
   - 在 CSS 中删除相关动画
   - 在 JS 中删除相关代码

2. **重构 Pipeline 节点**
   - 按照 URS 文档重新组织节点结构
   - Target ID 节点标记为 "Not Our Focus"
   - 其他节点关联对应的平台（PRISM/ORION/IGNIS）

3. **添加新的 CSS 样式**
   - 为不同平台的节点添加不同的颜色主题
   - 添加 hover 效果
   - 确保响应式布局

4. **准备平台图标**
   - 确保 `assets/images/icons/` 中有平台图标
   - 如果没有，需要创建或使用现有图标

#### 验收标准
- [ ] 移动光点动画已删除
- [ ] Pipeline 节点结构正确
- [ ] Target ID 节点有特殊标记
- [ ] 平台关联清晰
- [ ] 响应式布局正常

---

### FT-011: Platform Sequence Core 内容更新
**优先级：** 中  
**预计时间：** 0.5 小时  
**状态：** ⬜ 待开始

#### 任务描述
更新 Platform 页面 PRISM 平台 Sequence Core 卡片的列表内容。

#### 参考文档
- `.dev2/finetune/finetune-urs.md` (需求 3.3)
- `platform.html`

#### 具体任务
1. **查找 Sequence Core 卡片**
   - 在 `platform.html` 中找到 Sequence Core 部分

2. **更新列表内容**
   - 删除 "Immunogenicity analysis"
   - 将 "Plasmid construction" 改为 "Systematic plasmid Optimization"

#### 验收标准
- [ ] 列表内容已更新
- [ ] 删除项已移除
- [ ] 修改项文字正确

---

### FT-012: Solutions 页面完全重构
**优先级：** 高  
**预计时间：** 6 小时  
**状态：** ⬜ 待开始

#### 任务描述
对 Solutions 页面进行完全重构，聚焦于 AI biologics 解决方案。

#### 参考文档
- `.dev2/finetune/finetune-urs.md` (需求 4.1)
- `.dev2/generated/homepage-content-design.md`

#### 具体任务
1. **重写 Hero Section**
   - 标题改为："AI-Driven Biologics Solutions"
   - 副标题聚焦于 AI for biologics

2. **删除旧内容**
   - 删除所有 Personal Care 相关内容
   - 删除所有 Healthcare 通用描述
   - 删除相关图片

3. **创建新的解决方案结构**
   - 选择方案 A（按开发阶段）或方案 B（按应用场景）
   - 创建对应的 HTML 结构
   - 每个解决方案关联对应的平台

4. **添加新的 CSS 样式**
   - 为解决方案卡片添加样式
   - 添加平台 badge 样式
   - 确保与整体设计风格一致

5. **添加 CTA Section**
   - 添加 "Custom Solutions" 说明
   - 添加 "Get Started" CTA

#### 验收标准
- [ ] 旧内容已完全删除
- [ ] 新结构已创建
- [ ] 内容聚焦于 AI biologics
- [ ] 样式符合设计风格
- [ ] 响应式布局正常

---

### FT-013: 全站内容一致性检查
**优先级：** 高  
**预计时间：** 2 小时  
**状态：** ⬜ 待开始  
**依赖：** FT-001~012

#### 任务描述
检查全站内容的一致性，确保所有页面都聚焦于 AI for biologics。

#### 具体任务
1. **内容审查**
   - 检查所有页面的文字内容
   - 确保没有遗漏的旧内容
   - 确保术语使用一致

2. **导航链接检查**
   - 确保所有导航链接正常工作
   - 检查面包屑导航
   - 检查 CTA 按钮链接

3. **图片检查**
   - 确保所有图片都有 alt 文本
   - 检查图片是否加载正常
   - 确认没有遗漏的旧图片

4. **SEO 更新**
   - 更新 meta 标签
   - 更新 title 标签
   - 更新 description

#### 验收标准
- [ ] 所有内容聚焦于 AI biologics
- [ ] 术语使用一致
- [ ] 所有链接正常
- [ ] 所有图片正常
- [ ] SEO 信息已更新

---

### FT-014: 响应式测试与调整
**优先级：** 高  
**预计时间：** 2 小时  
**状态：** ⬜ 待开始  
**依赖：** FT-013

#### 任务描述
在不同设备上测试网站，确保响应式设计正常。

#### 具体任务
1. **桌面端测试**
   - 测试 1920x1080 分辨率
   - 测试 1366x768 分辨率
   - 检查所有页面和功能

2. **平板端测试**
   - 测试 iPad (768x1024)
   - 测试横屏和竖屏
   - 检查布局和交互

3. **移动端测试**
   - 测试 iPhone (375x667)
   - 测试 Android (360x640)
   - 检查触摸交互

4. **浏览器兼容性测试**
   - Chrome
   - Safari
   - Firefox
   - Edge

#### 验收标准
- [ ] 桌面端显示正常
- [ ] 平板端显示正常
- [ ] 移动端显示正常
- [ ] 所有浏览器兼容
- [ ] 交互功能正常

---

### FT-015: 性能优化与最终测试
**优先级：** 高  
**预计时间：** 2 小时  
**状态：** ⬜ 待开始  
**依赖：** FT-014

#### 任务描述
进行性能优化和最终测试，确保网站达到上线标准。

#### 具体任务
1. **性能测试**
   - 使用 Lighthouse 测试
   - 目标：Performance > 90
   - 目标：Accessibility > 95
   - 目标：Best Practices > 95
   - 目标：SEO > 95

2. **性能优化**
   - 压缩图片
   - 压缩 CSS/JS
   - 启用缓存
   - 优化加载顺序

3. **最终检查**
   - 检查所有页面
   - 检查所有功能
   - 检查所有链接
   - 检查控制台错误

4. **文档更新**
   - 更新 README.md
   - 更新 CHANGELOG（如果有）
   - 记录所有修改

#### 验收标准
- [ ] Lighthouse 分数达标
- [ ] 无控制台错误
- [ ] 所有功能正常
- [ ] 文档已更新
- [ ] 准备好部署

---

## 📝 任务执行规范

### 执行流程
1. **开始任务前**
   - 更新任务状态为 🔄 进行中
   - 阅读相关参考文档
   - 创建 git 分支（如：`finetune/FT-001`）

2. **执行任务中**
   - 严格按照任务说明执行
   - 遇到问题及时记录
   - 完成一个子任务就测试一次

3. **完成任务后**
   - 完成所有验收标准
   - 使用 Playwright 检查页面效果
   - 更新任务状态为 ✅ 已完成
   - 提交 git commit

### 测试要求
每完成一个页面功能模块的开发，都必须：
1. 使用浏览器手动测试
2. 使用 Playwright 自动化测试（如果适用）
3. 检查桌面端和移动端显示
4. 对比设计文档，确保无出入

### 代码规范
- 保持代码简洁，避免冗余
- 使用语义化的 HTML
- CSS 类名遵循现有命名规范
- 添加必要的注释
- 确保代码可维护性

---

**文档结束**
