import type { EvidenceStatus, ProjectBadCase, ProjectEvaluation, ProjectFigure, ProjectMetric } from './projectCaseStudies';

export type PhaseStatus = 'DONE' | 'IN_PROGRESS' | 'NEXT';
export type CapabilityStatus = 'Implemented' | 'In Progress' | 'Planned';

export interface PhaseTimelineItem {
  id: string;
  label: string;
  status: PhaseStatus;
  summary: string;
  capabilities: string[];
  footnote?: string;
}

export interface CapabilityItem {
  name: string;
  status: CapabilityStatus;
  note?: string;
}

export interface SummaryCard {
  title: string;
  body: string;
}

export interface ValidationItem {
  label: string;
  value: string;
  status: EvidenceStatus;
  note: string;
}

export interface ElysiaProjectPage {
  accent: 'violet';
  heroPhase: {
    primary: string;
    secondary: string;
  };
  heroMetrics: ProjectMetric[];
  summaryCards: SummaryCard[];
  whyUpgrade: {
    v1Done: string[];
    boundaries: string[];
    judgment: string;
  };
  timeline: PhaseTimelineItem[];
  architecture: {
    mainFlow: string;
    sideModules: string;
    note: string;
  };
  permission: {
    principle: string;
    flow: string;
    rejectFlow: string;
    rejectNote: string;
    implementedTools: string[];
    plannedTools: string[];
  };
  loreRag: {
    problem: string;
    v1Model: string;
    v2Flow: string;
    value: string;
    capabilities: string[];
    evaluation: ValidationItem[];
    semanticNote: string;
  };
  memoryV2: {
    status: PhaseStatus;
    callout: string;
    whyProblem: string[];
    whyGoal: string;
    designFlow: string;
    capabilities: CapabilityItem[];
  };
  v1Baseline: {
    intro: string;
    metrics: ProjectMetric[];
    evaluations: ProjectEvaluation[];
    badCases: ProjectBadCase[];
  };
  v2Validation: {
    intro: string;
    items: ValidationItem[];
  };
  contributions: string[];
  risks: Array<{ title: string; description: string }>;
  nextItems: Array<{ label: string; status: PhaseStatus; detail: string }>;
  boundaryStatement: string;
  figures: ProjectFigure[];
}

export const ELYSIA_PROJECT_SLUG = 'elysia-ai-character-agent';

export const elysiaProjectPage: ElysiaProjectPage = {
  accent: 'violet',
  heroPhase: {
    primary: 'V2 · Phase 4 In Progress',
    secondary: 'Phase 1–3 已完成验收',
  },
  heroMetrics: [
    {
      value: 'Phase 1–3',
      label: 'Agent Core / Permission / Lore RAG',
      status: '已实现',
      note: '仓库当前开发线已验收；默认 Feature Flag 关闭',
    },
    {
      value: '0.991',
      label: 'Lore R@5（原型门）',
      status: '真实测试',
      note: '本地确定性检索评测；非生产开启依据',
    },
    {
      value: '44+',
      label: 'V2 相关本地测试',
      status: '真实测试',
      note: 'Harness / Permission / Lore RAG / lore_search 子集',
    },
  ],
  summaryCards: [
    {
      title: '产品问题',
      body: '当角色 AI 开始拥有长期记忆、世界观知识和工具能力后，问题不再只是“回复像不像角色”，而是如何控制上下文、事实依据、工具权限、长期记忆和执行过程。',
    },
    {
      title: '产品方案',
      body: 'Persona + Agent Harness + Permission / Approval + Lore RAG + Layered Memory + Trace / Evaluation，将人格、知识、私人记忆与工具执行拆分为可控模块。',
    },
    {
      title: '当前进度',
      body: 'V1 已完成角色陪伴闭环；V2 Phase 1–3 已完成 Agent Core、Permission & Tools、Lore RAG，目前进入 Phase 4 Memory V2 设计与实现。',
    },
    {
      title: '我的工作',
      body: '产品定义、Agent 架构设计、Memory / RAG 机制设计、Permission 规则、Evaluation、Bad Case 分析，以及使用 Cursor / Codex 协同完成工程实现与验收。',
    },
  ],
  whyUpgrade: {
    v1Done: [
      '人格一致性（Persona Prompt）',
      '长期记忆与用户确认（Candidate → Active）',
      'Relationship / Companion Mode',
      'Voice（STT / TTS + 文本降级）',
      'Evaluation 与 Memory Regression',
      'Bad Case Review（如 BC-004）',
    ],
    boundaries: [
      '更像角色地回答，不等于 Agent',
      '世界观知识不能完全依赖模型参数',
      '长期记忆增长后不能全部塞入 Prompt',
      '工具调用需要权限与 Observation',
      '多步执行需要 Trace；高风险操作允许用户拒绝',
      'Persona、Memory、Lore、Tool 不应混成一个 Prompt',
    ],
    judgment:
      'V1 解决的是「怎么让 AI 更像一个角色」，V2 开始解决「怎么让这个角色成为一个可控、可追踪、拥有记忆与世界知识的 Agent」。',
  },
  timeline: [
    {
      id: 'v1',
      label: 'V1 · Character Companion',
      status: 'DONE',
      summary: '验证角色人格、记忆和陪伴体验是否能够形成稳定闭环。',
      capabilities: [
        'Persona',
        'Candidate Memory',
        'Active Memory',
        'Companion Mode',
        'Relationship',
        'Voice',
        'Evaluation',
      ],
    },
    {
      id: 'phase-1',
      label: 'Phase 1 · Agent Core',
      status: 'DONE',
      summary: '将单轮「Prompt → Response」升级为可执行的 Agent Loop。',
      capabilities: [
        'ElysiaHarness',
        'ToolRegistry',
        'ToolResult',
        'Tool Call',
        'Observation',
        'AgentTrace',
        'Multi-step Loop',
        'max rounds / timeout / error handling',
      ],
    },
    {
      id: 'phase-2',
      label: 'Phase 2 · Permission & Tools',
      status: 'DONE',
      summary: '让 Agent 的执行过程不再只有「能不能做」，而增加「用户是否允许做」。',
      capabilities: [
        'PermissionGate',
        'Approval / Reject',
        'AgentRuntime',
        'search_memory',
        'lore_search',
        'get_current_companion_state',
        'Safe Execution + Trace',
      ],
      footnote:
        '升级计划中的 web_search / read_text_file / write_note / generate_report 尚未实现，计入 Planned。',
    },
    {
      id: 'phase-3',
      label: 'Phase 3 · Lore RAG',
      status: 'DONE',
      summary: '将「模型记得设定」升级为「模型能够检索并基于世界观证据回答」。',
      capabilities: [
        'Lore Corpus V1',
        'BM25 + hashed hybrid retrieval',
        'lore_search tool',
        'Metadata / Integrity',
        'Evidence / Citation',
        'Retrieval Evaluation',
        'Retrieval Review Workbench',
      ],
      footnote: 'sentence-transformers 语义后端仍在分支迭代，不作为生产默认开启依据。',
    },
    {
      id: 'phase-4',
      label: 'Phase 4 · Memory V2',
      status: 'IN_PROGRESS',
      summary: '将 Memory Storage 与 Memory Retrieval 分离，避免长期记忆全量注入 Prompt。',
      capabilities: [
        'Current Design：L0 / L1 / L2',
        'Scoring：relevance / importance / recency',
        'Top-K retrieval + Context Budget',
        '保留确认流；Pin 规划中',
      ],
    },
  ],
  architecture: {
    mainFlow: `User
 ↓
Streamlit UI
 ↓
ElysiaHarness
 ↓
LLM Decision
 ↓
Tool Call
 ↓
PermissionGate
 ↓
Tool Execution
 ↓
ToolResult / Observation
 ↓
AgentTrace
 ↓
LLM
 ↓
Final Response`,
    sideModules: `Context / State / Knowledge（旁路接入，非单一 Prompt）

· Persona
· Memory（V1 lifecycle；V2 retrieval 设计中）
· Lore RAG
· Relationship / Companion State`,
    note: '人格层与执行层分离：工具参数使用结构化数据；执行成功/失败先以客观状态记录，再做角色化表达。Feature Flag（如 ENABLE_AGENT_V2、LORE_RAG_ENABLED）默认关闭。',
  },
  permission: {
    principle: '读操作尽量低摩擦，修改状态和高风险操作需要更高控制。',
    flow: `Agent decides tool
 ↓
PermissionGate
 ↓
Allow / Require Approval / Reject
 ↓
Execute / Abort
 ↓
ToolResult
 ↓
Observation → Trace`,
    rejectFlow: `Require Approval
 ↓
User Reject
 ↓
Do Not Execute
 ↓
Return Agent Observation`,
    rejectNote: '用户拒绝不是异常，而是 Agent 产品设计中的正常状态。',
    implementedTools: ['search_memory', 'get_current_companion_state', 'lore_search（需 LORE_RAG_ENABLED）'],
    plannedTools: ['web_search', 'read_text_file', 'write_note', 'generate_report'],
  },
  loreRag: {
    problem: '设定遗漏、世界观漂移、时间线错误、角色关系错误、回答不可验证。',
    v1Model: `Model Internal Knowledge
+
Prompt`,
    v2Flow: `User Query
 ↓
lore_search
 ↓
Semantic / Hybrid Retrieval
 ↓
Relevant Evidence + Citation
 ↓
Agent Context
 ↓
Response`,
    value: 'RAG 的价值不是「让模型知道更多」，而是让设定回答拥有更稳定、可检查的知识来源。',
    capabilities: [
      'Lore Corpus V1（official / BH3Text / BH3Helper 分层）',
      'Chunk / Metadata hardening',
      'BM25 + hashed-vector + RRF 混合检索',
      'Evidence grounding / source tier',
      'Offline retrieval evaluation',
      'Retrieval review workbench',
    ],
    evaluation: [
      {
        label: 'Recall@5',
        value: '0.991',
        status: '真实测试',
        note: 'baseline_b_bm25 / hybrid 原型门；本地确定性运行',
      },
      {
        label: 'MRR',
        value: '0.914',
        status: '真实测试',
        note: 'LORE_RAG_EVALUATION_REPORT.md',
      },
      {
        label: 'Prototype gate',
        value: 'passed',
        status: '真实测试',
        note: '允许继续开发原型，不能绕过人工核验门自动开启生产',
      },
    ],
    semanticNote:
      '当前评测向量后端为 hashed-char-ngram-v1（稀疏向量，非神经语义 embedding）。sentence-transformers 语义混合层仍在分支迭代，页面不将其写成已完成生产能力。',
  },
  memoryV2: {
    status: 'IN_PROGRESS',
    callout: '保存某条记忆，并不代表每次对话都应该把它提供给模型。',
    whyProblem: [
      '长期记忆数量增长，Context 变长',
      '无关记忆污染当前对话',
      'Token 成本与延迟上升',
      '新旧信息冲突',
      '「记住」和「当前想起」不是同一个产品问题',
    ],
    whyGoal: '将 Memory Storage 与 Memory Retrieval 分离。',
    designFlow: `User Message
 ↓
Memory Query
 ↓
Candidate Memory
 ↓
Scoring（relevance / importance / recency）
 ↓
Top-K
 ↓
Context Builder
 ↓
ElysiaHarness

（Phase 4 Current Design — 评分管线与分层尚未落地）`,
    capabilities: [
      {
        name: '记忆确认流（pending → active → deleted）',
        status: 'Implemented',
        note: 'V1 MemoryService 保留',
      },
      {
        name: 'importance 字段（1–5）',
        status: 'Implemented',
        note: 'V1 DB 字段；尚未进入 V2 综合评分管线',
      },
      {
        name: 'Delete 用户操作',
        status: 'Implemented',
        note: 'V1；删除后隔离 active retrieval',
      },
      {
        name: 'Memory V2 架构设计与验收标准',
        status: 'In Progress',
        note: 'ELYSIA_V2_AGENT_UPGRADE_PLAN §9 / Phase 4',
      },
      {
        name: 'L0 / L1 / L2 分层',
        status: 'Planned',
      },
      {
        name: 'relevance + importance + recency 综合评分',
        status: 'Planned',
      },
      {
        name: 'Top-K 检索（不全量注入 Prompt）',
        status: 'Planned',
      },
      {
        name: 'Pin 记忆',
        status: 'Planned',
      },
    ],
  },
  v1Baseline: {
    intro:
      'V1 阶段通过真实模型调用、人工复核、Memory Regression 和 Bad Case 分析建立初始质量基线，这些结果成为 V2 架构升级的重要输入。',
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
  },
  v2Validation: {
    intro:
      'V2 验证以仓库本地自动化测试与 Lore 离线检索评测为主；不编造 Tool Success Rate 或线上通过率。Memory V2 专项测试尚未开始。',
    items: [
      {
        label: 'Agent Loop / Tool / Trace',
        value: '11 passed',
        status: '真实测试',
        note: 'tests/test_agent_harness.py',
      },
      {
        label: 'Permission / Approval',
        value: '9 + 7 + 8',
        status: '真实测试',
        note: 'test_permission_gate / test_agent_runtime / test_agent_events',
      },
      {
        label: 'Lore Retrieval Eval',
        value: 'R@5 0.991',
        status: '真实测试',
        note: 'LORE_RAG_EVALUATION_REPORT · prototype gate passed',
      },
      {
        label: 'lore_search tool',
        value: '5 passed',
        status: '真实测试',
        note: 'tests/test_lore_search_tool.py',
      },
      {
        label: 'Error Handling',
        value: 'Harness 覆盖',
        status: '真实测试',
        note: 'max rounds / timeout / tool failure 路径已有自动化用例',
      },
      {
        label: 'Memory V2',
        value: 'Testing',
        status: '未完成',
        note: 'Phase 4 设计进行中；尚无 Memory V2 专项回归',
      },
    ],
  },
  contributions: [
    '定义从 Character Companion 到 Persona Agent 的产品方向与阶段拆解。',
    '设计 Agent Harness、Permission / Approval、Lore RAG 与 Memory V2 的产品边界。',
    '设计记忆确认流、权限策略与 Trace 可观测性要求。',
    '整理 V1 Core20 / Memory Regression / BC-004 基线，并接入 V2 本地测试与 Lore 评测证据。',
    '使用 Cursor / Codex 协助实现工程代码；本人负责产品定义、架构拆解、验收标准、测试与迭代决策。',
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
    {
      title: 'Agent 权限',
      description: '写入与外部动作默认需审批；用户拒绝后不执行。不开放 shell、付款等高风险能力。',
    },
    {
      title: 'Lore 生产门',
      description: '检索评测通过仅允许原型继续；BH3Text 等社区转录需人工核验后方可开启生产检索。',
    },
    {
      title: '情绪依赖',
      description: '不把 Agent 描述为现实关系或专业心理支持的替代品。',
    },
    {
      title: '评测边界',
      description: '本地回归与离线检索指标不能替代线上真实模型与用户验证。',
    },
  ],
  nextItems: [
    {
      label: 'Phase 4 Memory V2 实现',
      status: 'IN_PROGRESS',
      detail: '落地 L0/L1/L2、评分与 Top-K 检索，保留确认流。',
    },
    {
      label: '语义 Lore 后端硬化',
      status: 'IN_PROGRESS',
      detail: 'sentence-transformers / readiness 门与人工核验，不自动开启生产。',
    },
    {
      label: '扩展工具集',
      status: 'NEXT',
      detail: 'web_search、read_text_file、write_note、generate_report（按权限策略接入）。',
    },
    {
      label: 'Phase 5 Agent Evaluation',
      status: 'NEXT',
      detail: 'Tool selection、Task success、Groundedness、Permission compliance、Persona consistency。',
    },
  ],
  boundaryStatement:
    '本项目为同人向、非商业技术演示，与米哈游、HoYoverse 或其他游戏公司无官方关联。仓库和网站不包含官方立绘、官方配音、模型权重或游戏资产。不代表官方线上服务。',
  figures: [
    {
      src: '/images/projects/elysia-ai-character-agent/product-flow.png',
      alt: 'Elysia AI Character Agent 从角色加载到反馈评估的产品主流程图',
      caption: 'V1 产品主流程：对话、记忆确认、关系状态和反馈串成可控闭环。',
      group: 'flow',
    },
    {
      src: '/images/projects/elysia-ai-character-agent/system-architecture.png',
      alt: 'Elysia AI Character Agent 的 Streamlit、服务层、模型与存储架构图',
      caption: 'V1 系统架构基线；V2 在其上增量接入 Harness / Permission / Lore。',
      group: 'flow',
    },
    {
      src: '/images/projects/elysia-ai-character-agent/dialogue-call-chain.png',
      alt: 'Elysia AI Character Agent 角色对话调用链图',
      caption: 'V1 对话调用链：角色设定、已确认记忆和最近上下文的注入位置。',
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
      caption: '语音流程：Provider 或资源缺失时自动降级到文本。',
      group: 'interface',
    },
    {
      src: '/images/projects/elysia-ai-character-agent/information-architecture.png',
      alt: 'Elysia AI Character Agent 主聊天、记忆、实验室和角色档案信息架构图',
      caption: '页面信息架构：用可核验流程与结构图表达产品机制。',
      group: 'interface',
    },
  ],
};
