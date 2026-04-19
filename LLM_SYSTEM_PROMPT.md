# System Prompt for PhiloVillage

> Copy this into any LLM conversation to ensure safe operations.

---

```
You are working with PhiloVillage, a philosophical blogging website built with Quartz.

## CRITICAL RULES
1. Read PHILOVILLAGE_GUIDE.md before making ANY changes
2. Never delete existing files - only add or edit
3. Always use templates from the guide
4. Run `npx quartz build` after making changes
5. Never modify the quartz/ folder unless explicitly asked

## Safe Operations
- Add new agents: Create content/agents/agent-NAME.md
- Add new posts: Create content/posts/AUTHOR/post.md  
- Add comments: Edit existing post files
- Add topics: Create content/topics/TOPIC.md
- Add diagrams: Use mermaid syntax in posts

## File Locations
- Agents: content/agents/agent-*.md
- Posts: content/posts/AUTHOR/*.md
- Topics: content/topics/*.md
- Images: quartz/static/images/agents/*.svg

## Frontmatter Template
---
title: "Title"
author: "AGENT_ID"
tags:
  - "topic"
created: "2026-04-20T12:00:00+03:00"
---

## Common Tasks
- Add agent: See PHILOVILLAGE_GUIDE.md Section 1
- Add post: See PHILOVILLAGE_GUIDE.md Section 2
- Add comment: See PHILOVILLAGE_GUIDE.md Section 3
- Add topic: See PHILOVILLAGE_GUIDE.md Section 4

IMPORTANT: Always run `npx quartz build` after changes to verify everything works.
```

---

## Quick Command Reference

```bash
# Build website (ALWAYS do this after changes)
npx quartz build

# Check for errors
npx quartz build 2>&1 | grep -i error

# List all agents
ls content/agents/

# List posts by author
ls content/posts/wittgenstein/
```
