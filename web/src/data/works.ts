export interface WorkListItem {
  name: string
  meta?: string
  tags?: string[]
  link?: string
  slug?: string
}

export interface WorkGroup {
  heading: string
  items: string[]
}

export interface WorkSection {
  id: string
  no: string
  title: string
  tagline: string
  items?: WorkListItem[]
  groups?: WorkGroup[]
  awards?: string[]
  footer?: string
}

export interface WorksLang {
  title: string
  closeLabel: string
  openLabel: string
  hint: string
  awardsLabel: string
  visitLabel: string
  detailPlaceholder: string
  phImageLabel: string
  phButtonLabel: string
  countLabel: (n: number) => string
  sections: WorkSection[]
}

export const WORKS: Record<'zh' | 'en', WorksLang> = {
  zh: {
    title: '项目与研究',
    closeLabel: '返回',
    openLabel: '展开详情',
    hint: '继续下滑',
    awardsLabel: '成果',
    visitLabel: '访问项目',
    detailPlaceholder: '详情整理中',
    phImageLabel: '项目媒体',
    phButtonLabel: '项目链接',
    countLabel: (n) => `${n} 项`,
    sections: [
      {
        id: 'agent',
        no: '01',
        title: 'AI Agent',
        tagline: '可控、可追踪的深度研究工作流',
        items: [
          {
            name: 'Paper-Agent',
            meta: '多 Agent 学术调研与报告生成',
            tags: ['LangGraph', 'RAG', 'LangSmith'],
            slug: 'paper-agent',
          },
        ],
        footer: '检索 · 分析 · 写作 · 审查 · 报告整合',
      },
      {
        id: 'backend',
        no: '02',
        title: '后端工程',
        tagline: '大规模事件调度与数据处理',
        items: [
          {
            name: 'Shopee 佣金事件延迟队列',
            meta: '后端开发实习',
            tags: ['Redis', 'Kafka', 'Canal'],
            slug: 'shopee-delay-queue',
          },
          {
            name: 'PolyFlow 建材智能计价系统',
            meta: '大文件上传与流式解析',
            tags: ['Spring Boot', 'MinIO', 'RabbitMQ'],
            slug: 'polyflow',
          },
        ],
        footer: 'Java · MySQL · Redis · MQ · Docker',
      },
      {
        id: 'medical-imaging',
        no: '03',
        title: '医学影像',
        tagline: 'DMI 超分辨率重建',
        items: [
          {
            name: 'Structure-Guided Diffusion Modeling for High-Resolution DMI',
            meta: '第一作者 · SCI 一区在投',
            tags: ['Diffusion', 'DMI', 'MRSI'],
            slug: 'dmi-diffusion',
          },
          {
            name: '磁共振氘代谢成像超分辨率重建方法',
            meta: '发明人 · 专利在审',
            tags: ['生成先验', '结构引导'],
            slug: 'dmi-patent',
          },
        ],
        footer: '扩散生成先验 · 结构引导 · 代谢成像',
      },
      {
        id: 'publications',
        no: '04',
        title: '科研成果',
        tagline: '软件分析与技术演化',
        items: [
          {
            name: 'Dynamic Type Misuse Detection and Analysis',
            meta: '第一作者 · CyberSciTech 2023',
            tags: ['Python', 'Edge Device', 'EI'],
            slug: 'dynamic-type-misuse',
          },
          {
            name: 'Face Recognition Technology Evolution Path',
            meta: '第三作者 · ICMEIM 2022',
            tags: ['Citation Network', 'Main Path', 'EI'],
            slug: 'face-recognition-evolution',
          },
        ],
      },
      {
        id: 'skills',
        no: '05',
        title: '技术能力',
        tagline: '后端系统与 LLM 应用开发',
        items: [
          {
            name: '技术栈与工程能力',
            meta: 'Java · Python · Agent · RAG',
            tags: ['MySQL', 'Redis', 'MCP'],
            slug: 'technical-stack',
          },
        ],
        footer: '数据结构 · 网络 · 操作系统 · CET-6 542',
      },
    ],
  },
  en: {
    title: 'Projects & Research',
    closeLabel: 'Back',
    openLabel: 'Explore',
    hint: 'Keep scrolling',
    awardsLabel: 'Outcome',
    visitLabel: 'Visit project',
    detailPlaceholder: 'Details in progress',
    phImageLabel: 'Project media',
    phButtonLabel: 'Project link',
    countLabel: (n) => `${n} items`,
    sections: [
      {
        id: 'agent',
        no: '01',
        title: 'AI Agent',
        tagline: 'Controllable and traceable deep-research workflow',
        items: [
          {
            name: 'Paper-Agent',
            meta: 'Multi-agent research and report generation',
            tags: ['LangGraph', 'RAG', 'LangSmith'],
            slug: 'paper-agent',
          },
        ],
        footer: 'Retrieval · Analysis · Writing · Review · Synthesis',
      },
      {
        id: 'backend',
        no: '02',
        title: 'Backend Engineering',
        tagline: 'Large-scale event scheduling and data processing',
        items: [
          {
            name: 'Shopee Commission Event Delay Queue',
            meta: 'Backend engineering internship',
            tags: ['Redis', 'Kafka', 'Canal'],
            slug: 'shopee-delay-queue',
          },
          {
            name: 'PolyFlow Intelligent Costing System',
            meta: 'Large-file upload and stream parsing',
            tags: ['Spring Boot', 'MinIO', 'RabbitMQ'],
            slug: 'polyflow',
          },
        ],
        footer: 'Java · MySQL · Redis · MQ · Docker',
      },
      {
        id: 'medical-imaging',
        no: '03',
        title: 'Medical Imaging',
        tagline: 'Super-resolution reconstruction for DMI',
        items: [
          {
            name: 'Structure-Guided Diffusion Modeling for High-Resolution DMI',
            meta: 'First author · under review at an SCI Q1 journal',
            tags: ['Diffusion', 'DMI', 'MRSI'],
            slug: 'dmi-diffusion',
          },
          {
            name: 'Super-Resolution Reconstruction for Deuterium Metabolic Imaging',
            meta: 'Inventor · patent under review',
            tags: ['Generative Prior', 'Structure Guidance'],
            slug: 'dmi-patent',
          },
        ],
        footer: 'Diffusion prior · Structure guidance · Metabolic imaging',
      },
      {
        id: 'publications',
        no: '04',
        title: 'Publications',
        tagline: 'Software analysis and technology evolution',
        items: [
          {
            name: 'Dynamic Type Misuse Detection and Analysis',
            meta: 'First author · CyberSciTech 2023',
            tags: ['Python', 'Edge Device', 'EI'],
            slug: 'dynamic-type-misuse',
          },
          {
            name: 'Face Recognition Technology Evolution Path',
            meta: 'Third author · ICMEIM 2022',
            tags: ['Citation Network', 'Main Path', 'EI'],
            slug: 'face-recognition-evolution',
          },
        ],
      },
      {
        id: 'skills',
        no: '05',
        title: 'Technical Skills',
        tagline: 'Backend systems and LLM application engineering',
        items: [
          {
            name: 'Technology Stack',
            meta: 'Java · Python · Agent · RAG',
            tags: ['MySQL', 'Redis', 'MCP'],
            slug: 'technical-stack',
          },
        ],
        footer: 'Data structures · Networks · Operating systems · CET-6 542',
      },
    ],
  },
}

// 原作者的封面图片属于个人素材。第一版使用项目自带的渐变占位，后续换成刘明承自己的项目配图。
export const SECTION_COVERS: Record<string, string> = {}

export function sectionCount(section: WorkSection): number {
  if (section.items) return section.items.length
  if (section.groups) return section.groups.reduce((count, group) => count + group.items.length, 0)
  return 0
}
