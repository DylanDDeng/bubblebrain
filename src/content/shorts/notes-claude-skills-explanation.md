---
title: "Skills explained: How Skills compares to prompts, Projects, MCP, and subagents"
description: "What's difference among Skills, Prompts, Projects, MCP, and subagents"
pubDate: 2025-11-16T15:23:50+08:00
draft: false
tags: ["Thought","Paper"]
categories: ["QuickNote"]
slug: "notes-claude-skills-explanation"
toc: true
share: true
giscus: true
search: true
---
I read the blog from [AnthropicAI](https://claude.com/blog/skills-explained)  and take some notes: 

This article explains the core components of Claude's agentic architecture, designed for building sophisticated workflows. 

Prompts function as ephemeral, conversational instructions for immediate tasks. 

In contrast, Skills offer persistent and reusable procedural knowledge that Claude can access dynamically when needed. 

Projects provide self contained workspaces with their own background knowledge and custom instructions for a specific initiative.

For more complex needs, subagents are specialized AI assistants with unique permissions and context to handle discrete tasks independently. 

Separately, the MCP provides a universal connection layer, allowing Claude to interface directly with external tools and data sources. 