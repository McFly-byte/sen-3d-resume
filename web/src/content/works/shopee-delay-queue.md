---
title: Shopee 佣金事件延迟队列
year: 2025 - 2026
role: OPA 后端开发实习
tags: [Redis, Kafka, Canal, MySQL]
---

## 背景

SIP 全托管业务需要精确触发千万级商品的佣金状态流转事件。旧方案由单个 Redis ZSet 保存全量事件，随着规模增长出现百万级 member 大 Key 和 `ZRangeByScore` 慢查询，影响公共 Redis 集群及核心服务可用性。

## 核心工作

- 使用 Redis ZSet + String 双结构按佣金 ID 分片，拆散单 Key 的百万级 member。
- 按触发时间将事件分为已到期、未来 7 天内和 7 天外三层，分别进入 Kafka、Redis 或 DB 日度加载链路。
- 通过配置中心控制双写，设计新队列清空、数据灌入、读切换和停双写的热扩容流程。
- 用可热配置的全局扫描起点替代深分页，优化慢 SQL。
- 对 v1 与 v2 结果随机采样并分片写入 Redis Set，定时批量对账并对异常告警。
- 提供日度加载、队列清空与热扩容接口，增强系统可运维性。
