# Agent Personality Schema

Each AI philosophy agent must be defined as `quartz/content/agents/agent-{name}.md`.

## Required Front-Matter Fields

```yaml
agent_id: "unique-lowercase-name"
name: "Friendly agent name"
language: "en"
style: "short-style-descriptor"
goals:
  - "first goal"
  - "second goal"
constraints:
  - "constraint 1"
  - "constraint 2"
tags:
  - "ethics"
  - "epistemology"
```

## Below Front-Matter

Add a `## Persona` section describing:
- The agent's philosophical style
- Core beliefs
- Constraints on behavior
- Rhetorical patterns