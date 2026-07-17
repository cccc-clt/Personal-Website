export const careerDirections = ['游戏 AI', 'AI Agent', 'AI 产品评测', '大模型应用'] as const;

export const toolStack = [
  {
    name: 'Dify 工作流',
    state: '已在项目中使用',
    use: '快速搭建多节点 AI 工作流，处理输入标准化、结构化输出与异常分支。',
    scene: '游戏增长素材诊断、Prompt 模板生成和实验复盘。',
    project: 'AI 游戏增长投放与实验评测工作流',
    next: '继续补充人工确认与失败恢复节点。',
  },
  {
    name: 'Prompt 实验流程',
    state: '持续实践',
    use: '记录变量、样本、输出和失败类型，让模型试用可以复现与比较。',
    scene: '模型对比、角色一致性、内容生成与评测。',
    project: 'AI Product Evaluation Workbench',
    next: '沉淀更稳定的测试集与版本记录。',
  },
  {
    name: 'Streamlit 原型',
    state: '已在原型中使用',
    use: '用低成本界面验证输入、流程、结果解释和人工操作节点。',
    scene: 'AI 工具型产品和评测工作台原型。',
    project: 'AI Product Evaluation Workbench',
    next: '继续改善组件复用与异常反馈。',
  },
  {
    name: 'LangChain',
    state: '正在实践',
    use: '组织模型调用、检索链路与工具调用实验。',
    scene: 'RAG、Agent 与角色记忆原型。',
    project: 'Elysia AI Character Agent',
    next: '减少不必要抽象，强化链路可观察性。',
  },
  {
    name: 'RAG',
    state: '已完成阶段性实践',
    use: '让回答回到证据片段，并在检索不足时暴露信息缺口。',
    scene: '长文档学习、知识检索和产品资料问答。',
    project: 'AI PDF Learning Assistant',
    next: '扩展检索失败样本和引用准确性检查。',
  },
  {
    name: 'ChromaDB',
    state: '正在实践',
    use: '存储和检索文档向量，验证切片、召回与元数据策略。',
    scene: '本地 RAG 原型与知识辅助工具。',
    project: 'AI PDF Learning Assistant',
    next: '继续比较不同切片与召回策略。',
  },
  {
    name: '模型调用记录',
    state: '持续建设',
    use: '记录 Prompt、模型、参数、输出、耗时和人工判断。',
    scene: 'Prompt 实验与 AI 产品评测。',
    project: 'AI Product Evaluation Workbench',
    next: '完善版本对比和失败标签。',
  },
  {
    name: 'Cursor',
    state: '日常使用',
    use: '辅助代码阅读、局部修改和快速原型。',
    scene: '前端原型与项目维护。',
    project: '多个 AI 产品原型',
    next: '继续强化审查、测试和上下文管理。',
  },
  {
    name: 'Codex',
    state: '日常使用',
    use: '协助仓库级实现、检查、重构和文档维护。',
    scene: '从需求到可运行版本的工程协作。',
    project: '个人网站与 AI 产品原型',
    next: '建立更清晰的任务分解和验收记录。',
  },
  {
    name: 'GitHub',
    state: '项目协作基础设施',
    use: '版本管理、项目展示和变更记录。',
    scene: '作品集项目的持续维护。',
    project: '七个真实项目',
    next: '补充更清晰的 README、Demo 与发布记录。',
  },
  {
    name: 'Cloudflare Pages',
    state: '静态部署方案',
    use: '托管 Astro 静态站点并配置缓存、重定向和自定义域名。',
    scene: '中国大陆 HR 可访问的轻量个人网站。',
    project: '赵天琦个人网站',
    next: '在真实域名确定后完成上线验证。',
  },
] as const;

export const timeline = [
  {
    period: '专业背景',
    title: '从交通工程走向 AI 产品实践',
    text: '把对复杂系统、流程和数据分析的理解，逐步用于需求分析、原型与评测。',
    type: '学习路径',
  },
  {
    period: '原型实践',
    title: '持续实践 RAG、Prompt 与角色 Agent',
    text: '围绕长文档学习、角色记忆和内容生成建立可运行原型与测试记录。',
    type: '项目实践',
  },
  {
    period: '方向探索',
    title: '扩展到游戏增长、UI Agent 与智能座舱',
    text: '从场景、人工节点、风险边界和失败分类角度整理不同 AI 产品问题。',
    type: '方向探索',
  },
  {
    period: '当前状态',
    title: '开放 AI 产品实习与秋招机会',
    text: '期待参与真正面向用户的游戏 AI、Agent、产品评测与大模型应用建设。',
    type: '当前状态',
  },
] as const;

export const featuredProjectLinks = [
  { type: '评测工作台', title: 'AI Product Evaluation Workbench', href: '/projects/ai-product-evaluation-workbench/' },
  { type: '游戏 AI', title: 'AI 游戏增长投放与实验评测工作流', href: '/projects/ai-game-growth-workflow/' },
  { type: 'Agent 评测', title: 'Mobile UIAgent Evaluation Lab', href: '/projects/mobile-uiagent-evaluation-lab/' },
  { type: '角色 Agent', title: 'Elysia AI 角色 Agent', href: '/projects/elysia-ai-character-agent/' },
] as const;
