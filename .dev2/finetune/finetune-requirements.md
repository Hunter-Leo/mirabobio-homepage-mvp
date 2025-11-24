# Spec
请完成[# Finetune Requirements]中所有的优化需求。

# Plan
1. 在处理需求前，请先熟悉项目设计（.dev2/generated/homepage-content-design.md）， 项目结构，包括文件夹和文件的组织方式；
2. 请拆解需求， 并按照（.dev2/generated/tasks.md）的格式创建优化需求文档（.dev2/finetune/finetune-urs.md）.
3. 请分段式的构建需求文档（.dev2/finetune/finetune-urs.md）， 对于每个需求需要：必须查找并厘清当前相关的代码实现，描述清楚需求，以及需要修改的地方；
4. 需求文档中，如果涉及到内容修改，需要根据相应的背景知识， 描述清楚修改的原因， 确定需要修改的具体内容；
5. 需求文档中，如果涉及到页面设计，需要描述清楚当前页面的设计主题， 并做出符合当前主题的排版、图片、文字等元素， 并考虑整体页面的协调性， 最好是能体现出一定的设计性， 不能重复太多设计元素。
6. 请根据需求文档，创建任务文档（.dev2/finetune/tasks.md）， 每个任务需要描述清楚，包括任务的具体内容、任务需要用的参考来源文件引用、如果是页面设计，页面设计的主题等等。 还需要创建任务状态列表，用于执行过程中更新任务状态；
4. 创建任务启动与恢复文档（.dev2/finetune/start-and-resume.md）， 描述清楚如何开始或继续执行任务文档，并且需要注明设计要求/规范，编码要求/规范， 声明下述*重要事项内容*，执行过程与规范（必须体现:当前执行步骤->正在查找文档->正在执行->更新任务状态）。请要求开发人员，开发过程中，每完成一个页面功能模块的开发， 都必须通过 playwright 工具来检查页面实际效果与设计文档间是否有出入。


# Finetune Requirements

## homepage/index.html

1. hero 部分文字内容修改为：

    ```txt
    Building Better Biologics with AI
    Integrated AI solutions for designing and developing protein therapeutics from discovery through commercial manufacturing
    ```
2. hero 部分去掉 Contact Us 按钮；

3. hero 部分加载背景动画 （assets/images/backgrounds/fold_adalimumab_free_cystein_model_0_rotation_slow.gif），需要 headline 在当前页面透明化以同时展示背景动画；

4. 删除 “Transforming Industries” section;

5. "Who we are" section 的内容需要按照以下建议修改：
    - issue: Our company identity above is mixed with AI, eco-friendly biotech, synthetic biology. Again, we focus on AI company for biolologics on homepage at this moment
    - suggestion: 
        Empowering Biologics Development with AI

        MIRABO Biotechnology delivers AI solutions that accelerate and de-risk protein therapeutic development — from early discovery through commercial-scale production.
        1) AI-Powered In-Silico Protein Analysis
        Predicts structure, stability, immunogenicity, and developability to de-risk biologics before entering the lab.
        2) AI-Driven Protein Engineering & Optimization
        Improves protein stability, activity, and expression to accelerate therapeutic design and optimization.
        3) AI Modeling for Bioprocess & Manufacturing
        Enhances yield, quality, and scalability across cell-line development, upstream, downstream, and formulation.

6. “STEP 01: ANALYSIS section 请按照以下建议修改：
    - "STEP 01: ANALYSIS" --> "ANALYSIS AI"
    - "AI-Driven analysis" ---> "AI-Driven Protein in-silico analysis" 
    - "for optimal design" --> "for lead optimization"
    - 列表内容请替换为以下两点：
        * AI-powered prediction of key developability liabilities
        * sequence and Structural insights for rational protein design

7. “STEP 02: ENGINEERING section 请按照以下建议修改：
    - "STEP 02: ENGINEERING" --> "ENGINEERING AI"
    - "AI-Driven engineering" ---> "AI-Driven Protein Engineering"
    - 列表内容请替换为以下两点：
        * Boosts protein activity, stability, and manufacturability
        * Shortens engineering cycles with intelligent prediction models

8. “STEP 03: PROCESS section 请按照以下建议修改：
    - "STEP 03: PROCESS" --> "PROCESS AI"
    - 列表内容请替换为以下两点：
        * End-to-end bioprocess modeling and optimization using AI
        * Enhanced yield, quality, and scalability across all manufacturing stages


## About Us/about.html

1. "FOUNDED IN 2020" -> "FOUNDED in 2024";

2. 香港/上海的地址图请替换为：（assets/images/about/hkstp-winning-park.png）、（assets/images/about/sh-inno-center.jpg， 这张图需要按照 tasks.md 中的要求进行调整）；

3. hero 部分的正文内容需要修改为：

    ```txt
    MIRABO Biotechnology is pioneering the future of biologics with intelligent AI — empowering developers to create safer, smarter, and more scalable protein therapeutics.
    ```
4. ”Our Commitment“ section 的内容请参考以下建议修改：
    - Driving innovation forward -> Transforming biologics development through intelligent AI.
    - Bridging biotechnology and everyday life -> Advancing the way protein therapies are discovered, optimized, and delivered.
    - Our mission: To accelerate and advance biologics development through intelligent AI, bringing safer and more effective therapies to patients faster.
    - Our vision: To shape the next era of biologics through intelligent AI.

5. 需要增加一个 "TEAM" section，增加大家的职务以及头像照片（头像照片先用占位符代替）；

## Platform 页面

1. "DEVELOPMENT PIPELINE" section：
    - 请去掉移动的绿色光点动画效果；
    - "lead ID, in silico developability, lead optimization, process optimization, manufacturing", 三个平台对应中间三个节点， target ID 卡片请设计一下展示效果， 体现出当前不是我们的业务。

2. "AI-Driven Analysis" section， "Sequence Core"卡片内容的列表需要做以下修改：
    - 请删除"Immunogenicity analysis"；
    - ”Plasmid construction“ -> "Systematic plasmid Optimization"

## Solutions/solutions.html
该页面需要做内容和排版上的重大调整和重新设计，将公司的业务主题围绕在 AI 相关的 biologics 解决方案上， 去掉 personal care and healthcare 的相关内容。
