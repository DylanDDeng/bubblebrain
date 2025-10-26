---
title: "Notes about LLM Brain Rot"
date: 2025-10-26T11:08:37+08:00
draft: false
type: "note"
tags: ["Thought"]
categories: ["QuickNote"]
description: "It is my reading note about LLM Brain Rot"
thought: true
---   

I saw the paper [LLMs can get "Brain Rot"](https://www.arxiv.org/pdf/2510.13928) is very popular on my X timeline and there are many discussions about it. 

I just read this interesting paper and here are my notes about this paper:  

### Two Core Ideas

* The paper proposes the LLM Brain Rot Hypothesis: continual pretraining on junk internet data causes lasting cognitive decline in LLMs. 

* This decline mirrors human brain rot caused by excessive consumption of trivial online content.  

### Experiments 

* Controlled experiments were conducted using real X data, divided into two following categories: 
    - M1: Engagement Degree: short, highly popular posts(high likes/retweets/replies) 
    - M2: Semantic Quality: content classified as low-quality 

* Four LLMs were continually pretrained on these junk & controlled datasets:

    - Llama3-8B, Qwen2.5-7B, Qwen2.5-0.5B, Qwen3-4B 

* Benchmarks  
    - Reasoning (ARC) 
    - Long-context understanding(RULER) 
    - Ethical alignment(HH-RLHF, AdvBench) 
    - Personality traits(TRAIT benchmark) 

### Key Findings 

* Cognitive Decline: 
    - Models trained on junk data showed consistent drops in reasoning accuracy and long-context retrieval  

    - Decline strength increased with the dose of junk data 

* Failure Mechanism: 

    - Models exposed to junk data increasingly skipped reasoning steps, producing shallow and truncated answers. 

    - Over 80% of reasoning failures stemmed from missing intermediate thought steps

* Model Behavior Shifts:  

    - Under M1, models developed "dark traits" such as psychopathy, narcissism and reduced agreeableness. 

    - M2 (semantic quality junk) caused milder declines but still degraded reasoning and safety. 

### Implications 

* Data quality is a causal driver of model capability decay.  
* The problem is not only about misinformation of toxicity. Even non-malicious but shallow, virual content can rot LLM cognition.






