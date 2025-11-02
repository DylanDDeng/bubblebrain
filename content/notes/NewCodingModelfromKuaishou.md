---
title: "New Coding Model from Kuaishou"
date: 2025-10-24T10:24:37+08:00
draft: false
type: "note"
tags: ["Thought","Kuaishou"]
categories: ["QuickNote"]
description: ""
thought: true
---

Kuaishou recently refreshed its New Coding Model lineup with two releases: **KAT-Coder-Pro V1** and **KAT-Coder-Air V1**.

Both variants integrate smoothly with leading coding-agent tools such as Claude Code, Cline, and Kilo.

I ran the Pro model inside Claude Code, and the onboarding experience was straightforward.

Below is the Claude Code configuration I used:

```bash
export ANTHROPIC_BASE_URL="https://wanqing.streamlakeapi.com/api/gateway/v1/endpoints/ep-xxx-xxx/claude-code-proxy"
export ANTHROPIC_AUTH_TOKEN="YOUR_WANQING_API_KEY"
export ANTHROPIC_MODEL="KAT-Coder"
export ANTHROPIC_SMALL_FAST_MODEL="KAT-Coder-Air-V1"
```

API keys are available via the [Kuaishou Wanqing](https://www.streamlake.com) console.

For a quick benchmark, I reran my usual SVG generation test (the Xbox controller graphic). Output quality is still behind other models, so there is room for improvement.

![](https://image-1325800846.cos.ap-nanjing.myqcloud.com/ScreenShot_2025-10-24_111215_221.png)
