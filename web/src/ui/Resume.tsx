import { motion } from 'framer-motion'
import { FOCUS_POINTS } from '../data/focusPoints'

interface ResumeEntry {
  period: string
  place: string
  role: string
  points: string[]
}

const RESUME: Record<'en' | 'zh', { title: string; entries: ResumeEntry[] }> = {
  zh: {
    title: '经历',
    entries: [
      {
        period: '2019.09 - 2023.06',
        place: '南京理工大学',
        role: '计算机科学与技术 · 本科',
        points: ['GPA 3.56 / 4.0，专业前 30%', '获校一、二等奖学金'],
      },
      {
        period: '2024.09 - 2027.06',
        place: '哈尔滨工业大学',
        role: '计算学部 · 电子信息硕士',
        points: ['GPA 3.72 / 4.0，专业前 20%', '校二等奖学金 · 优秀研究生会干事'],
      },
      {
        period: '2025.04 - 2025.08',
        place: 'PolyFlow 建材智能计价系统',
        role: '后端开发 · Java / Spring Boot',
        points: [
          '搭建 MinIO 分片并发上传、断点续传与后端合并流水线',
          '使用 Apache POI 流式解析大体量 Excel，降低内存峰值',
          '以 RabbitMQ 异步解析，并用 Redis Pub/Sub + WebSocket 推送进度',
        ],
      },
      {
        period: '2025.12 - 2026.03',
        place: 'Shopee',
        role: 'OPA 后端开发实习',
        points: [
          '为千万级佣金状态事件设计 Redis 分片延迟队列，治理大 Key 与慢查询',
          '实现 DB、Redis、Kafka 间的冷热数据三级分流与幂等处理',
          '设计双写扩容、灰度对账和运维接口，保障上线可控性',
        ],
      },
      {
        period: '2026.01 - 2026.04',
        place: 'Paper-Agent',
        role: '多 Agent 学术调研与报告生成系统',
        points: [
          '基于 LangGraph + AutoGen 编排检索、分析、写作、审查与报告整合流程',
          '构建 LlamaIndex + ChromaDB RAG 链路，支持多查询、HyDE、过滤与重排',
          '通过分层记忆、断点恢复、SSE 进度推送和 LangSmith 追踪形成验证闭环',
        ],
      },
    ],
  },
  en: {
    title: 'Experience',
    entries: [
      {
        period: '2019.09 - 2023.06',
        place: 'Nanjing University of Science and Technology',
        role: 'B.Eng. in Computer Science and Technology',
        points: ['GPA 3.56 / 4.0, top 30%', 'First- and second-class university scholarships'],
      },
      {
        period: '2024.09 - 2027.06',
        place: 'Harbin Institute of Technology',
        role: 'M.Eng. in Electronic Information',
        points: ['GPA 3.72 / 4.0, top 20%', 'Second-class scholarship and outstanding student association officer'],
      },
      {
        period: '2025.04 - 2025.08',
        place: 'PolyFlow Intelligent Costing System',
        role: 'Backend Developer · Java / Spring Boot',
        points: [
          'Built a multipart, resumable upload pipeline backed by MinIO',
          'Stream-parsed large Excel files with Apache POI to reduce peak memory usage',
          'Moved parsing to RabbitMQ and streamed progress through Redis Pub/Sub and WebSocket',
        ],
      },
      {
        period: '2025.12 - 2026.03',
        place: 'Shopee',
        role: 'OPA Backend Engineering Intern',
        points: [
          'Designed a sharded Redis delayed queue for tens of millions of commission events',
          'Implemented three-tier hot/cold data routing across DB, Redis and Kafka',
          'Added dual-write scaling, reconciliation and operational controls for safe rollout',
        ],
      },
      {
        period: '2026.01 - 2026.04',
        place: 'Paper-Agent',
        role: 'Multi-agent Research and Report Generation System',
        points: [
          'Orchestrated retrieval, analysis, writing, review and report assembly with LangGraph and AutoGen',
          'Built a LlamaIndex and ChromaDB RAG pipeline with multi-query, HyDE, filtering and reranking',
          'Added layered memory, checkpoint recovery, SSE progress and LangSmith tracing',
        ],
      },
    ],
  },
}

const POINT_ORDER = FOCUS_POINTS
const EASE = [0.22, 1, 0.36, 1]
const containerV = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.04 } },
}
const itemV = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
}

function Entry({ entry, index }: { entry: ResumeEntry; index: number }) {
  return (
    <motion.div
      className="tl-entry"
      data-point={POINT_ORDER[index]}
      variants={containerV}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-12% 0px -12% 0px' }}
    >
      <motion.span className="tl-dot" variants={itemV} aria-hidden="true" />
      <div className="tl-body">
        <motion.div className="tl-period" variants={itemV}>
          {entry.period}
        </motion.div>
        <motion.div className="tl-head" variants={itemV}>
          <h3 className="tl-place">{entry.place}</h3>
        </motion.div>
        <motion.div className="tl-role" variants={itemV}>
          {entry.role}
        </motion.div>
        <motion.ul className="tl-points" variants={itemV}>
          {entry.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </motion.ul>
      </div>
    </motion.div>
  )
}

export default function Resume({ lang }: { lang: 'en' | 'zh' }) {
  const data = RESUME[lang]
  return (
    <section className="resume" lang={lang}>
      <motion.h2
        className="resume-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={{ duration: 0.7, ease: EASE }}
      >
        {data.title}
      </motion.h2>
      <div className="timeline">
        {data.entries.map((entry, index) => (
          <Entry key={`${entry.period}-${entry.place}`} entry={entry} index={index} />
        ))}
      </div>
    </section>
  )
}
