---
title: "Note about Puzzled By Puzzles: When VLM Can’t Take a Hint"
date: 2025-11-04T15:23:50+08:00
draft: false
type: "note"
tags: ["Thought","Paper"]
categories: ["QuickNote"]
description: "Note about Why VLM can't take a hint"
thought: true
---    

I read the paper [Puzzled by Puzzles: When Vision-Language Models Can’t Take a Hint](https://arxiv.org/pdf/2505.23759) from UC Berkely. 

The authors built a hand-crafted benchmark of 432 English rebus puzzles, each annotated with 11 cognitive-skill categories and they also tested a wide range of models from open-source VLMs to reasoning-enabled models. 

Performance was measured in two ways: 
- **Naive matching**: exact answer comparison 
- **LLM-judged**: using GPT-4o or Qwen3-8B to semantically judge correctness. 

Below are some main findings: 
- GPT-5 performed best but still far below human experts. 
- Reasoning-enabled models outperformed non-reasoning ones by a large margin. 
- Open-source VLMs barely solved any puzzles.(<5%) 
- Models did realtively well on symbolic or quantitative reasoning, but failed badly at 
    - visual metaphors 
    - Negation or absence cuses
    - Phonetic puns and cultural references. 
