---
title: "Best practices for prompt engineering from Anthropic"
date: 2025-11-17T15:23:50+08:00
draft: false
type: "note"
tags: ["Thought","Anthropic","Blog"]
categories: ["QuickNote"]
description: "Prompt Engineering Practices"
images: ["/images/posts/image-1.png"]
thought: true
---     

Anthropic recently published a blog post on [Best practices for prompt engineering](https://www.claude.com/blog/best-practices-for-prompt-engineering). After reading it, I believe it offers an excellent summary of the key practices for effective prompt engineering.

The first principle is to **be explicit and clear**. Modern AI models respond exceptionally well to precise, unambiguous instructions. The key is to tell the model exactly what you want to see.

The second core technique is to **provide context and motivation**. Explaining why something matters helps AI models better understand your goals and deliver more targeted responses.

**Being specific** is also crucial. The more specific you are about what you want, the better the results.

While **using examples** isn't always necessary, they are essential when explaining concepts or demonstrating specific formats. Modern models like Claude 4.x pay very close attention to details in examples. Ensure your examples align with the behaviors you want to encourage and minimize any patterns you want to avoid.

**Prefilling the AI's response** is an advanced prompt engineering technique. It allows you to start the AI's response for it, guiding the format, tone, or structure. This technique is particularly powerful for enforcing output formats or skipping preambles.

**CoT (Chain of Thought)** isn't a new skill. However, modern models now offer extended thinking features that automate structured reasoning. According to Anthropic, extended thinking is generally preferable to manual chain-of-thought prompting.

For modern models, there are several ways to control AI response formatting:
- Tell the AI what to do instead of what not to do
- Match your prompt style to the desired output
- Be explicit about formatting preferences

**Prompt Chaining** is suitable for complex tasks that require multiple steps with separate prompts. Each prompt handles one stage, and the output feeds into the next instruction, such as a <u>research summary</u>.

**XML tags for structure** is not very necessary now. However, when working with very complex prompts that include multiple types of content or when you need to be absolutely certain about content boundaries, this technique is very useful.

If you want to use **Role prompting**, try to be more general and avoid over-constraining the role.
