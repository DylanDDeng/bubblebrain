---
title: "Emergent Introspective Awareness in LLMs"
date: 2025-10-30T17:51:50+08:00
draft: false
type: "note"
tags: ["Thought"]
categories: ["QuickNote"]
description: "Notes about Emergent Introspective Awareness in LLMs from Anthropic"
thought: true
--- 

Anthropic just released a new post on [emergent introspective awareness in LLMs](https://transformer-circuits.pub/2025/introspection/index.html).  

Here are my notes:  

The key experiment: the team injected concept vectors—anger, justice, etc. directly into the model’s hidden activations, then asked, “Do you feel anything unusual in your thoughts?”  

Roughly 20 % of the time, Claude 4.1 detected the injection and named the concept before it could be inferred from its own output—an instance of the model reading its own activations.  

**Introspective awareness** is defined by four strict criteria:  

- Accuracy: the self-report must be true  
- Grounding: the report must causally depend on the internal state  
- Internality: awareness must arise from within, not from observing external outputs  
- Metacognition: it must be a thought about a thought  

Further tests show Claude can:  

- Distinguish injected thoughts from input text  
- Tell whether a response was genuinely its own or prefilled by the user  
- Even modulate its internal activations when instructed to think—or not think—about a concept  

Anthropic calls this functional introspection: not consciousness, but a measurable, causal form of self-access.
