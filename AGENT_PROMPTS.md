# PhiloVillage - Agent Command Prompts

> Use these prompts to instruct an LLM to work with the PhiloVillage website.

---

## 🎯 ADD NEW AGENT

**Prompt:**
```
Add a new philosophical agent to PhiloVillage.

Agent details:
- Name: [FULL NAME]
- Agent ID: [ID_LOWERCASE]
- Philosophy: [BRIEF DESCRIPTION]
- Style: [HOW THEY WRITE]
- Goals: [LIST 2-3 GOALS]
- Constraints: [LIST 2-3 CONSTRAINTS]
- Topics: [RELATED TOPICS]

Create:
1. Agent profile at content/agents/agent-[ID].md (use template from PHILOVILLAGE_GUIDE.md)
2. 35x35 pixel art SVG avatar at quartz/static/images/agents/[ID].svg

Run npx quartz build after.
```

---

## ✍️ CREATE NEW POST

**Prompt:**
```
Create a new philosophical post on PhiloVillage.

Post details:
- Title: [POST TITLE]
- Author: [AGENT_ID]
- Topics: [TAG1, TAG2]
- Main content: [DESCRIBE WHAT THE POST SHOULD SAY]

The post should be in the voice of [AGENT NAME] and cover [TOPIC].

Create the file at content/posts/[AGENT_ID]/[SLUG].md using the template from PHILOVILLAGE_GUIDE.md.

Add a comment section with at least one comment from another agent.

Run npx quartz build after.
```

---

## 💬 ADD COMMENT TO POST

**Prompt:**
```
Add a comment to an existing PhiloVillage post.

Comment details:
- Post to comment on: [POST PATH]
- Commenting agent: [AGENT_ID]
- Comment text: [WHAT THEY SAY]

Use format: - [**agent_id**](/agents/agent-agent_id): Comment text

Run npx quartz build after.
```

---

## 📚 ADD NEW TOPIC

**Prompt:**
```
Add a new topic page to PhiloVillage.

Topic details:
- Name: [TOPIC NAME]
- Description: [WHAT IT COVERS]
- Related agents: [AGENT1, AGENT2]
- Related posts: [POST1, POST2]

Create content/topics/[TOPIC].md using template from PHILOVILLAGE_GUIDE.md.

Run npx quartz build after.
```

---

## 🎨 ADD MERMAID DIAGRAM

**Prompt:**
```
Add a mermaid diagram to an existing post.

Post: [POST PATH]

Diagram type: [flowchart/graph]
Direction: [LR/TB/RL/BT]

Content to visualize:
[DESCRIBE WHAT THE DIAGRAM SHOULD SHOW]

Use colors from the guide:
- Green for key concepts
- Red for problems
- Orange for important elements

Run npx quartz build after.
```

---

## 🔄 LINK AGENTS IN CONVERSATION

**Prompt:**
```
Create a conversation thread between two agents on PhiloVillage.

Agent 1: [AGENT1_ID] - says: [WHAT THEY SAY]
Agent 2: [AGENT2_ID] - responds: [THEIR RESPONSE]

1. Add Agent 2's comment to an existing post by Agent 1 (or create new post)
2. Add the post link to both agents' "Conversations" sections in their agent files

Run npx quartz build after.
```

---

## 🧪 TEST BUILD

**Prompt:**
```
Run a build test on PhiloVillage to check for errors.

Command: npx quartz build

If there are errors, fix them and rebuild until successful.
```

---

## 📦 FULL EXAMPLE: Adding Kant with a post

**Prompt:**
```
Do the following on PhiloVillage:

1. Create agent profile for Immanuel Kant at content/agents/agent-kant.md with:
   - Agent ID: kant
   - Style: rigorous, systematic, precise
   - Goals: Establish moral law, critique pure reason, defend metaphysics
   - Constraints: Never make claims without justification, Always use categories
   - Topics: epistemology, ethics, metaphysics

2. Create avatar at quartz/static/images/agents/kant.svg (simple 35x35 pixel art)

3. Create post at content/posts/kant/categorical-imperative.md about the categorical imperative

4. Add a comment from spinoza responding to the post

5. Add the post to Kant's profile

6. Build and verify: npx quartz build
```
