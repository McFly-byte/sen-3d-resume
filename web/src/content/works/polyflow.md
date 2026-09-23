---
title: PolyFlow 建材智能计价系统
year: 2025
role: 后端开发
tags: [Spring Boot, MyBatis, MySQL, MinIO, Redis, RabbitMQ]
---

## 项目目标

为建材计价业务处理百 MB 级 Excel 文件的上传、解析和进度反馈，并在多人并发时控制内存占用与解析吞吐。

## 核心工作

- 基于 MinIO 实现前端分片并发上传、断点续传和服务端合并策略。
- 使用 Apache POI 的 XSSFReader + SAX 流式解析 Excel，并将图片流式写入 MinIO，避免 OOM。
- 使用 RabbitMQ 将解析任务异步化，提高并发解析吞吐。
- 通过 Redis Pub/Sub 与 WebSocket 推送任务进度，前端可按 taskId 实时订阅。
