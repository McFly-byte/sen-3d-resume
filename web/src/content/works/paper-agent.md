---
title: Paper-Agent
year: 2026
role: 系统设计与开发
tags: [LangGraph, AutoGen, LlamaIndex, ChromaDB, LangSmith]
---

## 项目定位

面向学术调研场景的多 Agent 综述报告生成系统。工作流覆盖研究主题输入、查询生成与人工审核、论文检索、并行阅读抽取、聚类与深度分析、写作任务拆分、并行写作和报告整合，并通过 SSE 实时推送进度。

## 核心工作

- 使用 LangGraph 与 AutoGen 将检索、结构化阅读、主题聚类、章节写作和报告整合拆分为独立节点。
- 在分析阶段构建“聚类分析 - 深度分析 - 全局分析”子图，使用 KMeans 提炼研究热点、方法脉络和趋势。
- 通过“写作 Agent + 检索 Agent + 审查 Agent”协作生成章节，以审查通过作为收敛条件。
- 使用 LangGraph State 与 checkpointer 保存短期状态，通过向量库沉淀可复用的长期领域知识。
- 基于 LlamaIndex 与 ChromaDB 实现结构化入库、语义切分、多查询、HyDE、元数据过滤和重排。
- 引入 LangSmith 追踪 Agent 与 RAG 链路，形成可观测、可评估的验证闭环。
