---
title: "Notes on LightRAG"
date: 2025-03-24
draft: false
tags: ["AI", "RAG"]
categories: ["AI"]
---

In this note, I’ll document some critical implementation details about the `LightRAG` framework that I discovered while deploying it in production. These insights, which weren’t immediately apparent from just reading the paper, emerged during my hands-on experience with the codebase and are worth recording for future reference. 

> Paper Link: LightRAG: [Simple and Fast Retrieval-Augmented Generation](https://arxiv.org/abs/2410.05779)
GitHub Link: LightRAG: [Simple and Fast Retrieval-Augmented Generation](https://github.com/HKUDS/LightRAG?tab=readme-ov-file)
> 

Let me begin with an overview of `LightRAG`.

`LightRAG` is an advanced Retrieval-Augmented Generation (RAG) system developed jointly by researchers at the Beijing University of Posts and Telecommunications and the University of Hong Kong. What sets it apart is its innovative integration of graph structures into both text indexing and retrieval processes. The framework implements a sophisticated dual-level retrieval system that enables comprehensive information discovery across both granular (low-level) and conceptual (high-level) knowledge domains.

The `LightRAG` system architecture can be broken down into two key components:

- The graph-based indexing phase, where an LLM analyzes text chunks to identify and extract entities and their relationships, building a structured knowledge graph.
- The graph-based retrieval phase, where the LLM processes user queries to generate relevant keywords. Unlike traditional RAG systems that retrieve entire text chunks, LightRAG performs targeted retrieval of specific entities and relationships using vector-based search against the knowledge graph.

## Key Implementation Details from the GitHub Repository

Here is the official implementation from the GitHub repository:

```python
async def initialize_rag():
    rag = LightRAG(
        working_dir="your/path",
        embedding_func=openai_embed,
        llm_model_func=gpt_4o_mini_complete
    )
    await rag.initialize_storages()
    await initialize_pipeline_status()
    return rag
```

There are many other important parameteres in the `LightRAG` class but you may need to dive into the code to find.

- `chunk_token_size`: it is for the text chunking. If you don’t set, the default value is 1200.
- `chunk_overlap_token_size`: it is the number of overlapping tokens between consecutive text chunks to preserve context. The default value is 100.
- `entity_extract_max_gleaning`: it is the maximum number of entity extraction attempts for ambiguous content.
- `llm_model_max_token_size`: it is the maximum number of tokens allowed per LLM response. The default value is 32768.
- `cosine_better_than_threshold`: this sets the minimal value of the cosine similarity which means only if the similarity score between two vectors exceeds this threshold will they be considered a match. The default value is 0.2 (I think it maybe too low.)
- `nano_vector_storage`: this is the storage backend for vector embedding.

All configurable parameters for initializing LightRAG instances can be found in the `lightrag.py` file located at `LightRAG/lightrag/lightrag.py`.

When you want to perform queries, there are several search modes for you to select under the `QueryParam` class. Here is an official demo implementation:

```python
def main():
    # Initialize RAG instance
    rag = asyncio.run(initialize_rag())
    # Insert text
    rag.insert("Your text")

    # Perform naive search
    mode="naive"
    # Perform local search
    mode="local"
    # Perform global search
    mode="global"
    # Perform hybrid search
    mode="hybrid"
    # Mix mode Integrates knowledge graph and vector retrieval.
    mode="mix"

    rag.query(
        "What are the top themes in this story?",
        param=QueryParam(mode=mode)
    )
```

Detailed explanations of these search modes can be found in `LightRAG/lightrag/base.py`.

Here’s a breakdown of each mode:

- `local`: Optimized for context-dependent queries that reference specific entities within the knowledge graph. Best for factual questions about details in your documents, like “Who wrote ‘Pride and Prejudice’?” or “What was the revenue in Q4 2024?”
- `global`: Leverages broader knowledge to handle abstract or conceptual queries. Ideal for questions requiring synthesis across multiple documents or high-level understanding, such as “How does artificial intelligence influence modern education?” or “What are the main trends in renewable energy?”
- `hybrid`: Combines both local and global retrieval methods to provide comprehensive answers. This mode balances specific context with broader knowledge, making it versatile for complex queries that need both detailed and high-level information.
- `naive`: Performs a straightforward vector similarity search without advanced retrieval techniques. While simpler and faster, it may miss nuanced relationships in the data.
- `mix`: Integrates knowledge graph traversal with vector retrieval, providing the most sophisticated search capability.

Additional important query parameters include:

- `top_k`: Controls the number of retrieved items. In `local` mode, this represents the number of entities to retrieve, while in `global` mode it determines the number of relationships. Default value is 60.
- `stream`: When set to `true`, enables streaming output for real-time responses. This is useful for long-form responses where you want to see results incrementally. Default is `false`.
- `response_type`: Determines the format of the generated response. Available options include:
    - “Multiple Paragraphs”: Returns a detailed response split into multiple paragraphs
    - “Single Paragraph”: Returns a concise response in a single paragraph
    - “Bullet Points”: Returns key points in a bulleted list format
    Default is “Multiple Paragraphs”.

---

Another important file in the repository is `prompt.py`.

This file defines a collection of prompt templates used in the `LightRAG` framework. These templates serve as instructions for langauge models to perform various tasks related to knowledge extraction, summarization, and question answering.

You may need to change the `PROMPTS["DEFAULT_LANGUAGE]="English"` to adapt your own tasks.

---

There are also many other important components in the official GitHub. The repository also includes detailed documentation and example notebooks that demonstrate how to integrate LightRAG with various LLM providers and vector stores.

Please go to check!