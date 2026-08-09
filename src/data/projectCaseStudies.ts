export type EvidenceStatus =
  '已实现' | '真实测试' | '估算' | '目标值' | '待验证' | '模拟数据' | 'Review' | '未完成';

export interface ProjectMetric {
  value: string;
  label: string;
  status: EvidenceStatus;
  note?: string;
}

export interface ProjectPersona {
  type: string;
  task: string;
  scenario: string;
  goal: string;
  barrier: string;
}

export interface ProjectPainPoint {
  pain: string;
  scenario: string;
  impact: string;
  evidence: string;
  priority: 'P0' | 'P1' | 'P2';
}

export interface ProjectUserStory {
  priority: 'P0' | 'P1';
  story: string;
  acceptance: string;
}

export interface ProjectPriorityGroup {
  priority: 'P0' | 'P1' | 'P2';
  title: string;
  description: string;
  items: string[];
}

export interface ProjectPrdItem {
  label: string;
  content: string;
}

export interface ProjectFigure {
  src: string;
  alt: string;
  caption: string;
  group: 'flow' | 'interface' | 'evaluation';
}

export interface ProjectEvaluation {
  value: string;
  label: string;
  status: EvidenceStatus;
  note: string;
}

export interface ProjectBadCase {
  title: string;
  status: EvidenceStatus;
  problem: string;
  diagnosis: string;
  fix: string;
  verification: string;
}

export interface ProjectCaseStudy {
  accent: 'cyan' | 'violet' | 'amber';
  metrics: ProjectMetric[];
  background: {
    why: string;
    originalTask: string;
    coreProblem: string;
  };
  personas: ProjectPersona[];
  painPoints: ProjectPainPoint[];
  userStories: ProjectUserStory[];
  priorities: ProjectPriorityGroup[];
  prd: ProjectPrdItem[];
  mvp: {
    included: string[];
    excluded: string[];
    validation: string[];
    success: string;
  };
  research: {
    status: EvidenceStatus;
    title: string;
    completed: string[];
    pending: string[];
    boundary: string;
  };
  process: Array<{ title: string; description: string }>;
  figures: ProjectFigure[];
  evaluations: ProjectEvaluation[];
  badCases: ProjectBadCase[];
  risks: Array<{ title: string; description: string }>;
  contributions: string[];
  boundaryStatement: string;
}

export const projectCaseStudies: Partial<Record<string, ProjectCaseStudy>> = {
  'ai-game-content-copilot': {
    accent: 'cyan',
    metrics: [
      {
        value: '111 次',
        label: '真实模型调用',
        status: '真实测试',
        note: '57 次生成、54 次优化',
      },
      {
        value: '约 256.9k',
        label: '样本 Token',
        status: '真实测试',
        note: '来自自动调用记录导出',
      },
      {
        value: 'P50 约 21.4 秒',
        label: '生成 + 优化等待',
        status: '真实测试',
        note: '不代表所有线上请求',
      },
      {
        value: '约 ¥1.55',
        label: '样本 API 成本',
        status: '估算',
        note: '按公开价格与测算汇率估算',
      },
      {
        value: '44.64 分钟',
        label: '单流程节省时间',
        status: '估算',
        note: '场景估算，不是业务实测结果',
      },
    ],
    background: {
      why: '游戏剧情、任务和活动内容需要同时满足角色、世界观、风格与长度约束。通用聊天模型可以快速起草，却难以稳定复现输入条件和比较多个方向。',
      originalTask:
        '策划通常先整理需求、搜索参考、反复改 Prompt，再把多个结果复制到文档中比较；评分、修改与导出又分散在不同工具。',
      coreProblem:
        '把“生成一段文本”改造成可评审的内容工作流：结构化输入、2–3 个实质不同的版本、五维检查、人工选择、定向优化与导出。',
    },
    personas: [
      {
        type: '游戏剧情 / 内容策划',
        task: '形成角色对白、剧情片段、任务或世界观初稿，并比较不同创意方向。',
        scenario: '项目前期脑暴、版本活动策划、角色设定补全与临时文案需求。',
        goal: '在可接受等待与成本内获得 2–3 个真正不同、值得继续编辑的版本。',
        barrier: '信息容易遗漏、输出结构不稳、人设漂移、版本同质化与评测缺少共同口径。',
      },
      {
        type: '活动 / 内容运营',
        task: '根据活动目标、玩家分层和渠道，快速准备多个文案方向。',
        scenario: '活动主题文案、版本预热、社区互动话题与角色推广内容。',
        goal: '让生成结果快速进入人工修改，并清楚说明适用受众与场景。',
        barrier: '需求变化快、文案反复修改、语气模板化且不同受众需要不同表达。',
      },
    ],
    painPoints: [
      {
        pain: '需求信息分散且容易遗漏',
        scenario: '需求准备',
        impact: '关键角色、世界观或禁用项没有进入 Prompt。',
        evidence: '场景分析，待访谈',
        priority: 'P0',
      },
      {
        pain: '模型输出结构不稳定',
        scenario: '内容生成',
        impact: '缺字段、顺序变化，页面难以解析和横向比较。',
        evidence: '项目测试，初步验证',
        priority: 'P0',
      },
      {
        pain: '角色人设或世界观漂移',
        scenario: '长输入与复杂约束',
        impact: '人物行为与原始设定冲突，返工成本上升。',
        evidence: '项目测试，初步验证',
        priority: 'P0',
      },
      {
        pain: '多个版本只有措辞差异',
        scenario: '版本比较',
        impact: '表面有多个候选，实际没有增加创意覆盖。',
        evidence: '项目测试，初步验证',
        priority: 'P0',
      },
      {
        pain: '缺少统一评价标准',
        scenario: '方案选择',
        impact: '仍靠直觉比较，难解释选择原因。',
        evidence: '场景分析，待验证',
        priority: 'P0',
      },
      {
        pain: '优化建议过于笼统',
        scenario: '结果优化',
        impact: '“增强细节”等表述无法直接转化为修改动作。',
        evidence: '项目测试，初步验证',
        priority: 'P0',
      },
      {
        pain: 'AI 自评分偏宽松',
        scenario: '结果评测',
        impact: '高分结果仍有明显问题，可能误导版本选择。',
        evidence: '项目测试，尚缺人工盲评',
        priority: 'P0',
      },
      {
        pain: '异常后缺少恢复路径',
        scenario: '超时、空结果或解析失败',
        impact: '用户不知道应重试、修改输入还是保留已有结果。',
        evidence: '项目测试，初步验证',
        priority: 'P0',
      },
    ],
    userStories: [
      {
        priority: 'P0',
        story:
          '作为游戏内容策划，我希望通过结构化字段补齐背景、角色、目标与限制，从而减少关键信息遗漏。',
        acceptance: '必填项有示例；缺失时定位字段并保留已填写内容。',
      },
      {
        priority: 'P0',
        story: '作为游戏内容策划，我希望一次获得 2–3 个创意方向不同的版本，从而提高前期创意覆盖。',
        acceptance: '差异体现在动机、冲突、结构或语言风格，不只是换词。',
      },
      {
        priority: 'P0',
        story: '作为游戏内容策划，我希望看到五维评分、依据与具体问题，从而理解候选版本的质量差异。',
        acceptance: '每项评分附带依据，并提示 AI 评分仅供辅助。',
      },
      {
        priority: 'P0',
        story:
          '作为用户，我希望在模型超时或结构错误时获得中文恢复提示，从而继续任务而不是丢失输入。',
        acceptance: '提供重新生成、返回修改和查看详情；默认折叠技术错误。',
      },
      {
        priority: 'P1',
        story: '作为游戏内容策划，我希望在线编辑选中版本，从而把 AI 初稿转化为可用内容。',
        acceptance: '保留原始生成内容与人工修改结果的区分。',
      },
      {
        priority: 'P1',
        story: '作为游戏内容策划，我希望导出 Markdown 或 TXT，从而进入后续文档流程。',
        acceptance: '中文编码正常，并可选择是否包含需求摘要与评测信息。',
      },
    ],
    priorities: [
      {
        priority: 'P0',
        title: 'MVP 核心',
        description: '缺失会导致生成—比较—评测闭环无法验证。',
        items: [
          '7 类内容选择与结构化需求输入',
          'Prompt 组装、2–3 版本生成与固定 Schema',
          '版本差异检查与五维评测依据',
          '友好异常提示、结构修复与重试',
        ],
      },
      {
        priority: 'P1',
        title: '重要增强',
        description: '核心闭环成立后，继续提升可编辑性与任务恢复。',
        items: [
          '基础编辑与 Markdown/TXT 导出',
          '单版本重试',
          '生成状态反馈',
          '用户侧任务历史（尚未实现）',
        ],
      },
      {
        priority: 'P2',
        title: '后续规划',
        description: '等待用户验证后再决定投入，避免提前堆叠复杂度。',
        items: ['角色 / 世界观知识库', 'Prompt 版本管理', '多人评论、共享与审批'],
      },
    ],
    prd: [
      {
        label: '目标',
        content: '把游戏文本生成组织为可输入、可比较、可评测、可编辑和可导出的完整任务。',
      },
      { label: '用户', content: '游戏剧情 / 内容策划为核心，活动与内容运营为次级用户。' },
      {
        label: '场景',
        content: '角色对白、任务描述、剧情片段、活动文案、世界观、NPC 对话和道具描述。',
      },
      {
        label: '核心功能',
        content: '结构化需求、三版本生成、差异检查、五维评测、定向优化与导出。',
      },
      { label: '输入', content: '内容类型、角色与世界观、目标、风格、长度和禁用条件。' },
      {
        label: '处理',
        content: '输入校验 → Prompt 组装 → 模型调用 → Schema 解析 → 差异检查 → 五维评测。',
      },
      {
        label: '输出',
        content: '2–3 个候选版本、评分依据、优缺点、优化建议与 Markdown/TXT 文件。',
      },
      {
        label: '成功标准',
        content: '流程可独立完成、结果结构可控、版本有实质差异、失败可追踪、成本可估算。',
      },
      {
        label: '风险',
        content: '设定漂移、同质化、敏感数据、版权、长尾延迟、AI 自评误导与失败日志缺失。',
      },
    ],
    mvp: {
      included: [
        '结构化字段、必填校验与 7 类内容入口',
        '2–3 个候选版本和固定输出结构',
        '五维评测、依据、问题与优化建议',
        '基础编辑、Markdown/TXT 导出与异常兜底',
      ],
      excluded: [
        '企业级多人协作、权限与审批',
        '自动发布与真实游戏内容管理系统',
        '大型知识库、自训练模型与复杂路由',
        '未经人工审核即可上线的完整长篇剧情',
      ],
      validation: [
        '补齐人工盲评并校准 AI 评分',
        '验证 Persona、痛点优先级和编辑采纳意愿',
        '补全失败父调用与重试链路记录',
      ],
      success:
        '用户能完成“输入 → 多版本 → 评测 → 选择 → 编辑 → 导出”，且所有结果明确区分真实测试、估算与待验证。',
    },
    research: {
      status: '未完成',
      title: '用户访谈待开展',
      completed: [
        '已形成 Persona 假设、JTBD、痛点清单和访谈验证问题。',
        '已用项目测试观察结构、差异化、异常和评分问题。',
      ],
      pending: [
        '计划招募 5–8 名相关用户。',
        '观察完整任务过程，验证 Persona、痛点优先级和 MVP 范围。',
      ],
      boundary: '当前没有真实访谈记录、用户引语、满意度或业务结论；所有画像均为待验证的综合画像。',
    },
    process: [
      {
        title: '选择内容类型',
        description: '在 7 类游戏文本任务中选择入口，切换匹配字段与 Prompt 模板。',
      },
      { title: '输入结构化需求', description: '补充角色、世界观、目标、风格、长度与限制条件。' },
      {
        title: '生成 2–3 个版本',
        description: '在统一 Schema 下输出不同动机、冲突、结构或语言方向。',
      },
      {
        title: '五维评分与比较',
        description: '查看人设一致性、创意性、可用性、语言风格和沉浸感。',
      },
      { title: '人工编辑优化', description: '由内容负责人选择候选、补充判断并提交定向优化。' },
      {
        title: '导出并留痕',
        description:
          '向用户导出 Markdown/TXT；后端另行记录模型调用，并可按条件导出 XLSX 用于排查与评测。',
      },
    ],
    figures: [
      {
        src: '/images/projects/ai-game-content-copilot/user-flow.png',
        alt: 'AI Game Content Copilot 从任务选择到导出的用户使用流程图',
        caption: '用户使用流程：把生成、比较、人工编辑和导出串成连续任务。',
        group: 'flow',
      },
      {
        src: '/images/projects/ai-game-content-copilot/ai-processing-flow.png',
        alt: 'AI Game Content Copilot 输入校验、模型调用、结构解析和评测流程图',
        caption: 'AI 处理流程：模型输出先经过结构解析与差异检查，再进入评测和页面展示。',
        group: 'flow',
      },
      {
        src: '/images/projects/ai-game-content-copilot/home-task-entry.png',
        alt: 'AI Game Content Copilot 首页与任务入口原型',
        caption: '首页与任务入口：帮助用户先确认任务类型和产品边界。',
        group: 'interface',
      },
      {
        src: '/images/projects/ai-game-content-copilot/structured-brief.png',
        alt: 'AI Game Content Copilot 结构化需求配置页原型',
        caption: '结构化需求页：减少角色、世界观、风格和限制条件遗漏。',
        group: 'interface',
      },
      {
        src: '/images/projects/ai-game-content-copilot/version-comparison.png',
        alt: 'AI Game Content Copilot 多版本结果横向比较页',
        caption: '多版本比较页：让候选方向在同一结构下可对照。',
        group: 'interface',
      },
      {
        src: '/images/projects/ai-game-content-copilot/evaluation-detail.png',
        alt: 'AI Game Content Copilot 五维评测详情页',
        caption: '五维评测详情：分数必须与具体依据、问题和建议一起呈现。',
        group: 'interface',
      },
      {
        src: '/images/projects/ai-game-content-copilot/error-recovery.png',
        alt: 'AI Game Content Copilot 异常状态和任务恢复页',
        caption: '异常兜底页：失败后保留输入，并给出可理解的恢复动作。',
        group: 'interface',
      },
      {
        src: '/images/projects/ai-game-content-copilot/model-call-observability.png',
        alt: 'AI Game Content Copilot 线上模型调用记录接口、HTTP 200 导出结果和 XLSX 汇总证据',
        caption:
          '线上导出验证：success=true 返回 HTTP 200 与 XLSX；图中 1 条成功调用是独立接口验证样本，与 111 次测试样本分开统计。',
        group: 'evaluation',
      },
      {
        src: '/images/projects/ai-game-content-copilot/latency-by-content-type.png',
        alt: 'AI Game Content Copilot 各内容类型平均响应时间图表',
        caption: '平均响应时间：用于识别世界观等高耗时任务，不代表线上 SLA。',
        group: 'evaluation',
      },
      {
        src: '/images/projects/ai-game-content-copilot/tokens-by-content-type.png',
        alt: 'AI Game Content Copilot 各内容类型平均 Token 消耗图表',
        caption:
          'Token 分布：usage 来自模型供应商响应，用于定位输出规模；导出文件本身不提供价格或账单。',
        group: 'evaluation',
      },
      {
        src: '/images/projects/ai-game-content-copilot/version-timeline.png',
        alt: 'AI Game Content Copilot 版本演进时间线',
        caption: '版本时间线：记录从功能原型到测试与证据闭环的演进。',
        group: 'evaluation',
      },
    ],
    evaluations: [
      {
        value: '57 / 54',
        label: '生成 / 优化调用',
        status: '真实测试',
        note: '合计 111 次真实模型调用。',
      },
      {
        value: '16.63s / 8.36s',
        label: '正式测试平均响应',
        status: '真实测试',
        note: '生成与继续优化的平均耗时。',
      },
      {
        value: '42.88 / 50',
        label: '生成阶段 AI 自评分',
        status: '待验证',
        note: '缺少人工盲评，不能证明真实质量。',
      },
      {
        value: '2 次',
        label: 'Schema 修复重试',
        status: '真实测试',
        note: '均为 ContentVersion 缺少 variant 字段。',
      },
      {
        value: '约 ¥0.0276',
        label: '生成 + 优化单流程成本',
        status: '估算',
        note: '按公开价格测算，不是供应商账单。',
      },
      {
        value: '68.7%',
        label: '场景时间节省率',
        status: '估算',
        note: '基于人工流程假设，不是业务实测。',
      },
    ],
    badCases: [
      {
        title: 'BC-001 / BC-002 · variant 字段缺失',
        status: '真实测试',
        problem: '模型首次输出缺少必需的 variant 字段，页面结构解析失败。',
        diagnosis: 'Schema 约束偶发失效，需要区分原始错误输出与修复请求。',
        fix: '增加结构校验与一次修复重试，并保存 parent_call_id 与 retry_reason。',
        verification: '两次第 2 次尝试成功；但失败父调用仍需完整持久化。',
      },
      {
        title: 'BC-003 · 失败父调用未完整落库',
        status: 'Review',
        problem: '导出表中成功记录完整，但两个 parent_call_id 找不到对应的首次失败调用。',
        diagnosis: '持久化逻辑偏向保存最终成功结果，削弱真实成功率与重试链路审计。',
        fix: '将每一次供应商调用、错误类型和原始失败响应单独保存。',
        verification: '待补回归；当前不能把 119 条 final_success 解释为模型 API 成功率 100%。',
      },
    ],
    risks: [
      {
        title: '内容与设定',
        description: '模型可能补写不存在的设定或导致角色、世界观漂移，最终内容必须人工审核。',
      },
      {
        title: '评测误导',
        description: 'AI 自评分只作辅助，需人工盲评校准，不能用于绩效或唯一排序。',
      },
      {
        title: '敏感数据',
        description: '未授权剧情、个人信息、密钥与公司机密不得进入外部模型或公开日志。',
      },
      {
        title: '版权与真实 IP',
        description: '默认使用原创虚构内容，不生成或公开高度相似的官方角色、台词与资产。',
      },
      {
        title: '稳定性与成本',
        description: '需要控制超时、重试、长尾与输出 Token，避免失败重试风暴。',
      },
      {
        title: '证据边界',
        description: '当前在线前端可访问，但模型能力仍取决于后端服务和模型 API。',
      },
    ],
    contributions: [
      '把七类游戏文本任务拆成可复用字段与 Prompt 结构。',
      '设计三版本生成、五维评测、人工选择、优化与导出闭环。',
      '完成 FastAPI 后端、React/Vite 前端原型与在线前端部署。',
      '整理 111 次真实调用记录、响应时间、Token、成本估算和 Bad Case。',
      '明确人工审核、版权、敏感数据与失败日志的产品边界。',
    ],
    boundaryStatement:
      '已提供在线前端版本；涉及模型调用的能力仍取决于后端服务和模型 API 的实际可用状态。页面不把估算效率写成真实业务结果。',
  },

  'elysia-ai-character-agent': {
    accent: 'violet',
    metrics: [
      {
        value: '20 个',
        label: 'Core20 测试任务',
        status: '真实测试',
        note: '第二阶段真实模型测试范围',
      },
      { value: '67 / 67', label: '真实模型调用成功', status: '真实测试', note: '0 次调用错误' },
      { value: '8.676 秒', label: '中位耗时', status: '真实测试', note: '同批调用记录' },
      {
        value: '13.942 秒',
        label: 'P95 耗时',
        status: '真实测试',
        note: '另有一次 611.604 秒极端长尾',
      },
      { value: '5 / 5', label: 'Memory 本地回归', status: '真实测试', note: '不包含真实模型调用' },
    ],
    background: {
      why: '角色陪伴 AI 的核心不是更像通用助手，而是长期保持人格、可信地处理记忆，并让用户对保存、拒绝和删除拥有明确控制。',
      originalTask:
        '通用角色 Bot 常把模型总结直接写入长期记忆；长对话后人设漂移，删除后的旧信息也可能从其他上下文再次进入 Prompt。',
      coreProblem:
        '围绕“可控长期记忆”建立闭环：候选 / pending → 用户确认 → active → 只将 active 记忆注入 Prompt；拒绝或删除后不再调用。',
    },
    personas: [
      {
        type: '深度角色 / 二次元用户',
        task: '与喜欢的角色持续互动，并确认角色记得什么。',
        scenario: '日常聊天、情绪安慰、睡前与剧情互动。',
        goal: '角色语气稳定、记忆可信、关系变化自然。',
        barrier: '人设漂移、错误记忆、模板化安慰与版权顾虑。',
      },
      {
        type: '轻量陪伴用户',
        task: '在压力、学习或睡前快速获得温和回应。',
        scenario: '学习陪伴、加班后、情绪低落或每日问候。',
        goal: '低门槛开始，不说教，只记住自己确认的信息。',
        barrier: '复杂设置、隐私担忧、过度拟人和功能打扰。',
      },
      {
        type: '游戏 AI / 角色 Agent 研究者',
        task: '验证人格、记忆、语音与评估机制。',
        scenario: 'Prompt 测试、产品复盘和原型演示。',
        goal: '获得可配置、可追踪、可评估的 Agent 结构。',
        barrier: 'AI 自评偏差、缺少标准测试与真实用户数据。',
      },
    ],
    painPoints: [
      {
        pain: '长对话后人设漂移',
        scenario: '连续多轮互动',
        impact: '角色变成通用助手，沉浸与信任下降。',
        evidence: '产品测试与研究假设',
        priority: 'P0',
      },
      {
        pain: '错误记忆长期污染',
        scenario: '自动总结与长期记忆',
        impact: '模型把推断当事实并反复引用。',
        evidence: '真实模型测试',
        priority: 'P0',
      },
      {
        pain: '删除后仍引用旧信息',
        scenario: '记忆删除与后续追问',
        impact: '用户失去对数据和关系叙事的控制。',
        evidence: 'BC-004 与本地回归',
        priority: 'P0',
      },
      {
        pain: '情绪回应模板化',
        scenario: '安慰与陪伴',
        impact: '回复正确但缺少理解感，甚至引起反感。',
        evidence: '产品分析，待访谈',
        priority: 'P0',
      },
      {
        pain: '隐私与删除说明不足',
        scenario: '记忆、日志与模型调用',
        impact: '用户不敢分享真实信息。',
        evidence: '风险分析，待验证',
        priority: 'P0',
      },
      {
        pain: '语音链路不稳定',
        scenario: 'STT / TTS 与 Provider 切换',
        impact: '延迟或资源缺失可能阻断沉浸体验。',
        evidence: '工程与场景分析',
        priority: 'P1',
      },
      {
        pain: '长对话 Token 与极端长尾',
        scenario: '上下文持续增长',
        impact: '成本与等待不可预测。',
        evidence: '真实模型调用记录',
        priority: 'P1',
      },
    ],
    userStories: [
      {
        priority: 'P0',
        story: '作为角色爱好者，我希望回复保持角色语气和边界，从而获得连续的角色互动。',
        acceptance: '连续对话无明显通用助手口吻，并由人工复核一致性。',
      },
      {
        priority: 'P0',
        story: '作为用户，我希望自动总结的记忆先让我确认，从而避免错误信息永久写入。',
        acceptance: '候选显示来源；确认后写入，拒绝后不再引用。',
      },
      {
        priority: 'P0',
        story: '作为用户，我希望查看、编辑和删除长期记忆，从而保持数据准确并拥有控制权。',
        acceptance: '删除后数据库、active retrieval 与后续 Prompt 同步更新。',
      },
      {
        priority: 'P0',
        story: '作为隐私敏感用户，我希望知道哪些数据被保存并能删除，从而放心使用。',
        acceptance: '提供数据说明和删除动作，缓存与数据库一致清理。',
      },
      {
        priority: 'P1',
        story: '作为语音用户，我希望语音失败时仍能继续文本聊天，从而不被服务或资源缺失阻断。',
        acceptance: '显示失败阶段并自动降级为文本。',
      },
      {
        priority: 'P1',
        story: '作为 AI 产品人员，我希望查看五维评估，从而定位人格、记忆或情绪问题。',
        acceptance: '评分必须附带证据和建议，不替代人工结论。',
      },
    ],
    priorities: [
      {
        priority: 'P0',
        title: 'MVP 核心',
        description: '人格、记忆、隐私和可访问性是试点前底线。',
        items: [
          '人格与语气稳定',
          '候选记忆确认',
          '记忆查看 / 编辑 / 删除',
          '反馈、SQLite 与数据清理',
        ],
      },
      {
        priority: 'P1',
        title: '重要增强',
        description: '增强沉浸与复盘，但不能阻断文本核心。',
        items: [
          '语音输入、TTS 与文本降级',
          '亲密度和关系阶段',
          '体验分析与五维评估',
          '版本与回归记录',
        ],
      },
      {
        priority: 'P2',
        title: '后续规划',
        description: '等待核心风险与真实用户价值验证。',
        items: ['每日内容增强', '角色卡配置化', '多人账号、权限与团队看板'],
      },
    ],
    prd: [
      { label: '目标', content: '验证角色是否像、记忆是否可信、用户是否愿意继续互动。' },
      { label: '用户', content: '深度角色用户为核心，轻量陪伴用户和游戏 AI 研究者为补充。' },
      { label: '场景', content: '日常聊天、情绪陪伴、学习陪伴、睡前陪伴与故事互动。' },
      {
        label: '核心功能',
        content: '角色对话、五种模式、候选记忆、长期记忆、反馈、关系状态与可选语音。',
      },
      { label: '输入', content: '角色卡、用户消息、模式、已确认记忆、关系阶段与最近对话。' },
      {
        label: '处理',
        content: '人格 Prompt → 上下文注入 → 模型回复 → 候选记忆 → 用户确认 → active memory。',
      },
      { label: '输出', content: '角色化文本、可选语音、候选记忆、关系状态、反馈与评估记录。' },
      {
        label: '成功标准',
        content: '5–10 轮角色化互动；可确认、拒绝、删除记忆；失败可回退；数据可清理。',
      },
      { label: '风险', content: '人格漂移、错误记忆、情绪依赖、隐私、版权、语音资源与长尾延迟。' },
    ],
    mvp: {
      included: [
        '稳定角色 Prompt 与五种陪伴模式',
        '候选记忆确认、长期记忆管理与删除',
        '反馈、SQLite 持久化和基础评估',
        '在线文本版本与语音失败降级',
      ],
      excluded: [
        '官方角色还原或官方资产分发',
        '多人社区、付费订阅与 UGC',
        '全自动长期记忆',
        'AI 评分作为唯一审核或心理咨询服务',
      ],
      validation: [
        '真实用户对人格一致性和模式差异的判断',
        '候选记忆确认负担与错误记忆率',
        '真实模型删除后追问、JSON fallback 与生产迁移',
      ],
      success:
        'P0 流程无阻断，未确认记忆不注入，删除后不再从 active 集合调用，语音不可用时仍能继续文本对话。',
    },
    research: {
      status: '未完成',
      title: '访谈框架已完成，真实招募待开展',
      completed: ['访谈框架、招募标准、问题清单和洞察假设。', '5–8 人的分组与半结构化访谈计划。'],
      pending: ['真实用户招募与正式访谈。', '用行为证据更新 Persona、痛点频次、RICE 和 MVP。'],
      boundary:
        '现有材料中的人物与洞察均为综合画像或待验证假设；没有真实用户引语、满意度或访谈结论。',
    },
    process: [
      { title: '角色化对话', description: '加载角色卡、模式、用户状态和最近对话，生成文本回复。' },
      { title: '提取候选记忆', description: '模型只提出 candidate，不直接获得长期记忆准入权。' },
      {
        title: '用户确认',
        description: '用户可确认、编辑或拒绝，合法候选以 pending 状态等待处理。',
      },
      {
        title: '激活长期记忆',
        description: '确认后才转为 active，只有 active memory 进入 Prompt。',
      },
      {
        title: '删除与隔离',
        description: '删除后标记 deleted，并从 active retrieval 与关联 Prompt 来源中隔离。',
      },
      { title: '反馈与评测', description: '记录喜欢、不像她、重新生成和五维复核信号。' },
    ],
    figures: [
      {
        src: '/images/projects/elysia-ai-character-agent/product-flow.png',
        alt: 'Elysia AI Character Agent 从角色加载到反馈评估的产品主流程图',
        caption: '产品主流程：把对话、记忆确认、关系状态和反馈串成可控闭环。',
        group: 'flow',
      },
      {
        src: '/images/projects/elysia-ai-character-agent/system-architecture.png',
        alt: 'Elysia AI Character Agent 的 Streamlit、服务层、模型与存储架构图',
        caption: '系统架构：UI、Prompt、记忆、语音和评估模块可替换，并保留存储回退。',
        group: 'flow',
      },
      {
        src: '/images/projects/elysia-ai-character-agent/dialogue-call-chain.png',
        alt: 'Elysia AI Character Agent 角色对话调用链图',
        caption: '对话调用链：明确角色设定、已确认记忆和最近上下文的注入位置。',
        group: 'flow',
      },
      {
        src: '/images/projects/elysia-ai-character-agent/memory-confirmation-flow.png',
        alt: 'Elysia AI Character Agent 候选记忆确认、激活与删除流程图',
        caption: '记忆确认流程：未确认、拒绝或删除的内容不得继续进入 Prompt。',
        group: 'interface',
      },
      {
        src: '/images/projects/elysia-ai-character-agent/voice-interaction-flow.png',
        alt: 'Elysia AI Character Agent 语音识别、模型回复、语音合成与文本降级流程',
        caption: '语音流程：Provider 或资源缺失时自动降级到文本，不阻断核心对话。',
        group: 'interface',
      },
      {
        src: '/images/projects/elysia-ai-character-agent/information-architecture.png',
        alt: 'Elysia AI Character Agent 主聊天、记忆、实验室和角色档案信息架构图',
        caption: '页面信息架构：没有足够真实产品截图时，用可核验流程与结构图表达产品机制。',
        group: 'interface',
      },
    ],
    evaluations: [
      {
        value: '435,522 / 16,515',
        label: '输入 / 输出 Token',
        status: '真实测试',
        note: 'Core20 真实模型调用记录。',
      },
      {
        value: '611.604 秒',
        label: '极端长尾',
        status: '真实测试',
        note: '必须保留，不能只展示中位数和 P95。',
      },
      {
        value: '63 条',
        label: '人工复核记录',
        status: '真实测试',
        note: '用于确认自动候选与真实问题。',
      },
      {
        value: '4 → 1',
        label: '自动候选 → 确认问题',
        status: '真实测试',
        note: '确认问题为删除记忆后仍引用旧信息。',
      },
      {
        value: '5 / 5',
        label: 'MEM-REG-001～005',
        status: '真实测试',
        note: '本地自动化回归，不代表线上验证。',
      },
      {
        value: '约 USD 1.554291',
        label: '总调用成本',
        status: '估算',
        note: '按公开价格估算，不是供应商账单。',
      },
    ],
    badCases: [
      {
        title: 'BC-004 · 删除记忆后仍被旧信息影响',
        status: '真实测试',
        problem:
          '用户删除长期记忆后，旧信息仍可能从长期记忆读取、最近聊天或其他 Prompt 来源进入回复。',
        diagnosis: '记忆生命周期状态与 Prompt 来源过滤不够严格，删除语义没有覆盖全部上下文来源。',
        fix: '只检索 active 记忆；强化 deleted 状态，并用 all_prompt_sources 隔离关联聊天来源。',
        verification: 'MEM-REG-001～005 本地自动化回归 5/5 通过；真实模型删除后追问仍待验证。',
      },
    ],
    risks: [
      {
        title: '同人与版权',
        description:
          '非商业技术演示，与 miHoYo / HoYoverse 无官方关联，不提供官方立绘、配音、权重或游戏资产。',
      },
      {
        title: '记忆与隐私',
        description: '用户保留确认、编辑和删除权；未确认、拒绝或删除内容不得进入长期 Prompt。',
      },
      { title: '情绪依赖', description: '不把 Agent 描述为现实关系或专业心理支持的替代品。' },
      {
        title: '语音资源',
        description: 'STT/TTS 依赖服务、网络与合法资源，缺失时自动降级为文本。',
      },
      {
        title: '性能与成本',
        description: '长对话会增加 Token，并存在 611.604 秒极端长尾，需要监控、裁剪和超时策略。',
      },
      {
        title: '评测边界',
        description: 'AI 五维评分需人工校准，本地回归不能替代线上真实模型与用户验证。',
      },
    ],
    contributions: [
      '围绕人格、记忆、关系和语音拆解角色陪伴产品机制。',
      '设计候选记忆确认、active 准入、拒绝与删除的生命周期。',
      '整理 Core20、67 次真实调用、人工复核与 Memory 回归证据。',
      '复盘 BC-004，并把代码级修复范围与未验证项分开呈现。',
      '建立同人、隐私、情绪依赖、语音资源和人工评测边界。',
    ],
    boundaryStatement:
      '本项目为同人向、非商业技术演示，与米哈游、HoYoverse 或其他游戏公司无官方关联。仓库和网站不包含官方立绘、官方配音、模型权重或游戏资产。',
  },

  'ai-game-growth-workflow': {
    accent: 'amber',
    metrics: [
      {
        value: '10 步 / 139.498 秒',
        label: '首次 Streaming 运行',
        status: '真实测试',
        note: '103,817 Tokens',
      },
      {
        value: '3 / 3',
        label: 'Phase 2 Workflow 成功',
        status: '真实测试',
        note: '每个 Case 单次 POST、无自动重试',
      },
      {
        value: '119.572 秒',
        label: 'v1 平均耗时',
        status: '真实测试',
        note: 'P50 123.2945 秒，P95 129.563816 秒',
      },
      {
        value: '97.79',
        label: 'v2 两个边界 Case 规则分',
        status: 'Review',
        note: 'Judge 未执行，稳定性未验证',
      },
      {
        value: '+43%～44%',
        label: 'v2 Token 增幅',
        status: 'Review',
        note: '质量改善伴随明显性能退化',
      },
    ],
    background: {
      why: '游戏增长工作同时处理产品信息、广告素材、实验数据、用户反馈和竞品信息。输入分散、口径冲突时，模型很容易把推断写成当前业务事实。',
      originalTask:
        '增长产品或投放人员需要人工整理材料、诊断素材、沉淀 Prompt、定义评测标准并形成下一轮方案；结论和证据散落在多个文档。',
      coreProblem:
        '用 Dify 工作流生成一份可审计的 7 章报告，并把事实、可计算结果、合理推断、待验证假设和数据缺口明确分开。',
    },
    personas: [
      {
        type: '游戏增长产品经理',
        task: '把产品、素材、实验与反馈整理为下一轮增长方案。',
        scenario: '版本投放复盘、增长问题诊断与迭代评审。',
        goal: '快速形成结构完整、证据边界清楚的诊断报告。',
        barrier: '输入分散、指标口径冲突、结论难追溯。',
      },
      {
        type: '买量 / 广告投放人员',
        task: '诊断素材与文案，并定义下一轮实验。',
        scenario: '素材迭代、渠道适配与 A/B 实验准备。',
        goal: '得到可执行而不是泛泛而谈的修改建议。',
        barrier: '依赖个人经验、缺少基线时模型仍可能给出量化提升。',
      },
      {
        type: '内容 / 创意运营',
        task: '沉淀可复用 Prompt 与创意检查标准。',
        scenario: '多素材、多受众和多渠道内容准备。',
        goal: '让经验可复用，并保留人工判断位置。',
        barrier: 'Prompt 难沉淀、文案同质化、反馈与数据相互冲突。',
      },
      {
        type: 'AI 产品 / 数据分析团队',
        task: '评测长工作流的输出完整性、幻觉、耗时和成本。',
        scenario: 'Workflow 回归、Bad Case 复盘和审计。',
        goal: '区分模型问题、规则误报、工程问题和业务问题。',
        barrier: '长链路 Token 高、Judge 未启用、稳定性样本不足。',
      },
    ],
    painPoints: [
      {
        pain: '输入信息分散',
        scenario: '需求准备',
        impact: '产品、素材、实验与反馈难统一口径。',
        evidence: '工作流问题拆解，待用户验证',
        priority: 'P0',
      },
      {
        pain: '素材诊断依赖个人经验',
        scenario: '广告诊断',
        impact: '结论难复用，也难映射到具体实验。',
        evidence: '模拟业务案例',
        priority: 'P1',
      },
      {
        pain: '实验指标与用户反馈冲突',
        scenario: '复盘',
        impact: '模型可能选择一方并做过度因果归因。',
        evidence: '边界 Case 真实运行',
        priority: 'P0',
      },
      {
        pain: '缺少基线仍输出量化改善',
        scenario: '报告生成',
        impact: '把无依据数字写成业务结论，直接损害可信度。',
        evidence: 'v1 人工复核确认',
        priority: 'P0',
      },
      {
        pain: '长工作流延迟和 Token 高',
        scenario: '10 节点串行运行',
        impact: 'v2 质量提升但性能明显退化。',
        evidence: 'v1 / v2 真实运行',
        priority: 'P1',
      },
      {
        pain: '自动规则与真实问题混淆',
        scenario: 'Bad Case 筛选',
        impact: '误报可能被当成产品缺陷。',
        evidence: 'v1 人工复核',
        priority: 'P0',
      },
    ],
    userStories: [
      {
        priority: 'P0',
        story: '作为增长产品经理，我希望输入先被校验和标准化，从而让后续节点使用相同口径。',
        acceptance: '缺少基线或字段冲突时明确标记，不自动补造。',
      },
      {
        priority: 'P0',
        story: '作为投放人员，我希望报告完整渲染 7 章且没有残留变量，从而可以进入人工评审。',
        acceptance: '7/7 章节标题与正文完整，无未解析 Jinja。',
      },
      {
        priority: 'P0',
        story:
          '作为业务审核者，我希望事实、推断、假设和目标值分开，从而避免把模型建议当成当前结果。',
        acceptance: '缺少证据时使用“待验证 / 数据缺口”，不得生成具体改善幅度。',
      },
      {
        priority: 'P0',
        story:
          '作为评测人员，我希望每次真实运行保留 run_id、节点、Token、耗时与 POST 次数，从而审计失败和成本。',
        acceptance: 'Streaming 单次 POST、无隐式重试，运行证据完整。',
      },
      {
        priority: 'P1',
        story: '作为 AI 产品人员，我希望比较 v1 / v2 的质量、耗时和 Token，从而判断优化是否值得。',
        acceptance: '同时展示规则分改善与性能退化，不只展示单一总分。',
      },
      {
        priority: 'P1',
        story: '作为评测人员，我希望自动候选经过人工复核，从而区分真实缺陷、误报与正常行为。',
        acceptance: '候选数不直接等于真实 Bad Case 数。',
      },
    ],
    priorities: [
      {
        priority: 'P0',
        title: 'MVP 核心',
        description: '保证输出可用、可信且可审计。',
        items: [
          '输入校验与标准化',
          '7 章完整渲染与无残留 Jinja',
          '禁止捏造当前业务结果',
          'Streaming 单次 POST 与运行审计',
        ],
      },
      {
        priority: 'P1',
        title: '重要增强',
        description: '补强 Prompt、规则与性能定位。',
        items: [
          'Prompt 模板与事实 / 假设约束',
          '边界用例回归',
          '节点耗时与 Token 分析',
          'Bad Case 归因与人工复核',
        ],
      },
      {
        priority: 'P2',
        title: '后续规划',
        description: '当前没有足够证据，不写成已完成。',
        items: ['LLM Judge', '真实重复运行稳定性', '完整 20 Case', '团队看板与导出'],
      },
    ],
    prd: [
      { label: '目标', content: '把分散增长输入整理为可审计的 7 章诊断与迭代报告。' },
      { label: '用户', content: '游戏增长产品、买量投放、内容运营与 AI / 数据分析团队。' },
      { label: '场景', content: '素材诊断、实验复盘、Prompt 沉淀、评测标准与下一轮迭代。' },
      {
        label: '核心功能',
        content: '输入标准化、用户与场景分析、素材诊断、Prompt、复盘、评测标准和迭代方案。',
      },
      { label: '输入', content: '产品信息、广告素材、实验数据、用户反馈和竞品信息。' },
      { label: '处理', content: '10 节点串行 Workflow；每个节点有明确输入、输出与真实性约束。' },
      {
        label: '输出',
        content: '7 章 Markdown 报告，区分事实、计算、推断、假设、数据缺口和行动。',
      },
      {
        label: '成功标准',
        content: '7/7 章节完整，无变量残留，无依据数字被阻断，运行证据可追溯。',
      },
      {
        label: '风险',
        content: '幻觉、指标口径、因果过度归因、Prompt 注入、长链路性能与小样本误判。',
      },
    ],
    mvp: {
      included: [
        '10 节点 Dify 工作流与 7 章报告',
        '输入校验、事实 / 假设分层与数字约束',
        'Streaming 运行审计与规则评测',
        '三条白名单 Case 与边界回归',
      ],
      excluded: [
        '自动执行真实广告投放',
        'LLM Judge 作为当前质量证据',
        'repeat_count=1 的稳定性结论',
        '完整 20 Case 与真实商业效果判断',
      ],
      validation: [
        '真实重复运行稳定性',
        '完整测试集与 Judge 小规模校准',
        '真实增长团队使用与人工采纳情况',
      ],
      success:
        '公开版本可运行并输出完整报告；任何业务指标都能回到输入证据，缺少基线时不得生成具体改善幅度。',
    },
    research: {
      status: '未完成',
      title: '尚未开展真实用户访谈',
      completed: [
        '基于 Dify YML、README、评测报告和模拟业务 Case 完成问题拆解。',
        '形成目标用户假设、用户故事、PRD 与 MVP 结构。',
      ],
      pending: [
        '访谈游戏增长、买量和内容运营人员。',
        '验证报告结构、人工采纳、任务时间与真实数据字段。',
      ],
      boundary:
        '顶层 Word 文件为空白占位。当前结论来自 Workflow 设计与模拟业务案例，不代表真实用户研究或商业投放效果。',
    },
    process: [
      { title: '用户输入', description: '提交产品、素材、实验、反馈与竞品信息。' },
      { title: '输入信息标准化', description: '统一字段、口径与缺失状态，阻止无依据补全。' },
      { title: '目标用户与场景分析', description: '识别受众、增长任务和当前证据边界。' },
      { title: '素材与文案诊断', description: '定位创意问题，不把推断写成已发生结果。' },
      { title: 'Prompt 模板生成', description: '沉淀可复用输入结构、约束和输出格式。' },
      { title: '实验与反馈复盘', description: '并列数据与定性反馈，指出冲突和缺口。' },
      { title: '评测标准制定', description: '定义指标、数据来源与验收方法，不代填阈值。' },
      { title: '下一轮迭代方案', description: '按已确认问题、假设和工程问题收敛 MVP。' },
      { title: '生成完整报告', description: '模板节点汇总 7 章，检查变量与结构。' },
      { title: '输出', description: '交付可审计报告，由业务人员确认后继续实验。' },
    ],
    figures: [
      {
        src: '/images/projects/ai-game-growth-workflow/chapter-checks.png',
        alt: 'Game AI Growth v2 两个边界 Case 的七章完整性检查',
        caption: '章节检查：两个边界 Case 均通过 7/7 完整性检查。',
        group: 'flow',
      },
      {
        src: '/images/projects/ai-game-growth-workflow/quality-comparison.png',
        alt: 'Game AI Growth v1 与 v2 边界 Case 规则质量分对比',
        caption: '质量对比：规则分从 78.07 提升到 97.79，但整体仍为 Review。',
        group: 'evaluation',
      },
      {
        src: '/images/projects/ai-game-growth-workflow/performance-comparison.png',
        alt: 'Game AI Growth v1 与 v2 耗时和 Token 性能对比',
        caption: '性能对比：v2 Token 与延迟明显上升，不能只展示质量分。',
        group: 'evaluation',
      },
      {
        src: '/images/projects/ai-game-growth-workflow/slowest-nodes.png',
        alt: 'Game AI Growth v2 最慢节点 Top 3',
        caption: '节点性能：用于定位长链路中最需要裁剪的节点。',
        group: 'evaluation',
      },
      {
        src: '/images/projects/ai-game-growth-workflow/bad-case-candidates.png',
        alt: 'Game AI Growth v2 自动 Bad Case 候选告警',
        caption: '候选告警：自动候选仍需人工复核，不等于已确认缺陷。',
        group: 'evaluation',
      },
      {
        src: '/images/projects/ai-game-growth-workflow/workflow-latency.png',
        alt: 'Game AI Growth 工作流真实运行耗时分布',
        caption: '耗时分布：展示真实 Workflow 运行性能，不代表业务结果。',
        group: 'evaluation',
      },
      {
        src: '/images/projects/ai-game-growth-workflow/token-distribution.png',
        alt: 'Game AI Growth 工作流 Token 消耗分布',
        caption: 'Token 分布：用于评估长工作流成本与上下文裁剪。',
        group: 'evaluation',
      },
      {
        src: '/images/projects/ai-game-growth-workflow/bad-case-types.png',
        alt: 'Game AI Growth 自动 Bad Case 类型分布',
        caption: 'Bad Case 类型：必须结合人工复核，避免把规则误报当成产品问题。',
        group: 'evaluation',
      },
    ],
    evaluations: [
      {
        value: '103,817',
        label: '首次 Streaming Token',
        status: '真实测试',
        note: '10 步、139.498 秒、无恢复 GET。',
      },
      {
        value: '295,449',
        label: 'Phase 2 三 Case 总 Token',
        status: '真实测试',
        note: '3 次 POST、3 次成功。',
      },
      {
        value: '6 → 2 → 1',
        label: '自动告警 → Confirmed → 独立问题',
        status: '真实测试',
        note: '人工复核后合并为 1 个无依据量化问题。',
      },
      {
        value: '未执行',
        label: 'LLM Judge',
        status: '未完成',
        note: '没有可审计的 Judge 分数或原始响应。',
      },
      {
        value: 'repeat_count=1',
        label: '稳定性',
        status: '未完成',
        note: '不能宣称完成稳定性测试。',
      },
      {
        value: '97.79 / Review',
        label: 'v2 边界回归',
        status: 'Review',
        note: '章节完整，但存在待人工确认候选与性能退化。',
      },
    ],
    badCases: [
      {
        title: 'V1-ISSUE-001 · 无基线却输出量化改善',
        status: '真实测试',
        problem: '输入没有留存率、获客成本或历史基线，报告仍生成具体改善幅度。',
        diagnosis: '实验复盘节点把未来目标写成当前可预期结果，自动规则又混入数字误报。',
        fix: 'Prompt 强制区分事实、数据缺口、待验证假设与目标阈值；缺少基线时禁止生成幅度。',
        verification: 'v1 六条自动告警经人工复核确认两条并合并为一个独立问题。',
      },
      {
        title: 'v2 · 首章变量映射为空',
        status: '真实测试',
        problem: '模板变量名与 value_selector 映射不一致，导致第一章没有正确渲染。',
        diagnosis: '生成完整报告节点的变量引用与输入节点字段没有对齐。',
        fix: '修正模板变量映射，并保留章节完整性自动检查。',
        verification: '两个 v2 边界 Case 均通过 7/7 章节完整性复测。',
      },
      {
        title: 'v2 · 质量提升但性能退化',
        status: 'Review',
        problem: '两条边界 Case 规则分提高 19.72，但延迟增加约 103% / 177%，Token 增加约 43%–44%。',
        diagnosis: '更强约束与更长输出提高了完整性，也扩大了上下文和节点生成成本。',
        fix: '继续裁剪上下文、压缩重复输出并分析最慢节点，不以降低核心真实性约束为代价。',
        verification: '当前仍为 Review；完成候选人工复核和性能优化后才能进入稳定性测试。',
      },
    ],
    risks: [
      {
        title: '模拟业务数据',
        description: '广告与业务输入均为模拟数据，只验证工作流结构、约束和评测方法。',
      },
      {
        title: '无依据数字',
        description: '缺少历史基线时，不得生成具体提升、留存、ROI 或获客成本结论。',
      },
      {
        title: '指标与因果',
        description: '需区分提升率与百分点、相关与因果、定量数据与用户反馈冲突。',
      },
      { title: '自动评测', description: '规则可能误报，Judge 尚未执行，任何候选都需要人工复核。' },
      {
        title: '性能与配额',
        description: '实际运行依赖 Workflow 权限、模型服务、配额和平台可用性。',
      },
      {
        title: '安全与审计',
        description: '不公开未脱敏 JSONL、密钥或重复 QA 临时文件；保留必要 run 证据。',
      },
    ],
    contributions: [
      '把增长诊断拆成 10 个 Dify 节点和 7 章可审计输出。',
      '设计事实、计算、推断、假设、数据缺口和行动的输出约束。',
      '搭建真实 Streaming、规则评测、节点性能与 Bad Case 人工复核流程。',
      '复盘无依据量化、变量映射和 v2 性能退化三个真实迭代案例。',
      '坚持不把模拟业务输入、单次运行或自动告警包装成商业结果。',
    ],
    boundaryStatement:
      '本项目中的广告与业务输入为模拟数据，用于验证工作流结构、输出约束和评测方法，不代表真实商业投放效果。',
  },
};
