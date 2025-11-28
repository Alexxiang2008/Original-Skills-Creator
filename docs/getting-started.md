# Getting Started with Claude Skills Creator

This guide will help you create your first Claude Code skill using the Skills Creator.

## Prerequisites

- Node.js 18 or higher
- Claude Code installed
- Basic understanding of Markdown
- Familiarity with your use case

## Installation

### Option 1: As a Claude Skill (Recommended)

```bash
git clone https://github.com/Alexxiang2008/Original-Skills-Creator.git ~/.claude/skills/skill-creator
```

Now Claude Code can help you create skills by simply asking!

### Option 2: As a CLI Tool

```bash
npm install -g claude-skills-creator
```

## Creating Your First Skill

### Method 1: Using Claude Code (Interactive)

Simply ask Claude:

```
"Help me create a skill for code review"
"I need a skill that processes CSV files"
"Create a skill using the development template"
```

Claude will guide you through the process!

### Method 2: Using the CLI

```bash
# Interactive creation
skill create

# Or specify options
skill create --template development --output ./my-skills
```

Follow the prompts:

1. **Skill Name**: Choose a descriptive name (e.g., "csv-processor")
2. **Display Name**: User-friendly name (e.g., "CSV Processor")
3. **Description**: Brief one-line description
4. **Category**: Select the best matching category
5. **Purpose**: Explain the main goal
6. **Tools**: Select which Claude Code tools you'll need
7. **Options**: Choose whether to include marketplace.json and examples

## Understanding Skill Structure

A basic skill consists of:

### SKILL.md (Required)

The main skill definition with these sections:

```markdown
# Skill Name

Brief description

## Description
Detailed explanation (2-3 sentences)

## Capabilities
- What it can do
- Key features

## When to Use
- Triggering scenarios
- Use cases

## Instructions
Step-by-step workflow

## Examples
At least 2-3 realistic examples

## Notes
Important considerations
```

### marketplace.json (Optional)

Metadata for sharing your skill:

```json
{
  "name": "my-skill",
  "displayName": "My Skill",
  "version": "1.0.0",
  "description": "...",
  "author": { "name": "..." },
  "category": "development",
  "tags": ["code", "automation"]
}
```

### README.md (Recommended)

Documentation for users and contributors.

### examples/ (Optional)

Directory with usage examples.

## Validating Your Skill

```bash
skill validate ./my-skill
```

This checks:
- Required sections are present
- Structure is correct
- Examples are well-formed
- Instructions are actionable

## Testing Your Skill

### In Claude Code

1. Copy your skill to `~/.claude/skills/`
2. Restart Claude Code or reload skills
3. Ask Claude to use your skill
4. Test with various inputs

### Manual Testing

1. Read through SKILL.md yourself
2. Check if instructions are clear
3. Try each example scenario
4. Verify tool usage is correct

## Installing Your Skill

### Local Installation

```bash
skill install ./my-skill
```

This copies your skill to `~/.claude/skills/`.

### Manual Installation

```bash
cp -r ./my-skill ~/.claude/skills/
```

## Tips for Success

### 1. Start Simple

Don't try to create a complex skill right away. Start with:
- One clear purpose
- Basic examples
- Simple workflows

Then iterate and improve.

### 2. Use Templates

Templates provide:
- Best practice structure
- Common patterns
- Proven workflows

Customize them for your needs.

### 3. Write Clear Instructions

- Use numbered steps
- Be specific and actionable
- Include what to do AND when to do it
- Handle error cases

### 4. Provide Rich Examples

Good examples include:
- Realistic user requests
- Expected behavior breakdown
- Edge cases
- Error handling

### 5. Test Thoroughly

Before sharing:
- Test all examples
- Try edge cases
- Verify tool usage
- Check for errors

## Common Patterns

### Reading Files

```markdown
1. Use Glob to find files: `**/*.js`
2. Use Read to examine content
3. Process the content
4. Return results
```

### Processing Data

```markdown
1. Validate input data
2. Transform step by step
3. Handle errors gracefully
4. Format output clearly
```

### Calling APIs

```markdown
1. Prepare request (auth, params)
2. Use WebFetch or Bash curl
3. Parse response
4. Handle errors and retries
5. Return formatted data
```

## Next Steps

1. **Create a simple skill** - Start with hello-world template
2. **Review examples** - Study the example skills
3. **Read best practices** - Check docs/best-practices.md
4. **Share your skill** - Contribute to the community

## Getting Help

- Check the [FAQ](./faq.md)
- Review [best practices](./best-practices.md)
- Look at [example skills](../examples/)
- Ask in the Claude Code community

## Resources

- [Official Skills Documentation](https://github.com/anthropics/skills)
- [Template Reference](./templates.md)
- [Validation Guide](./validation.md)

Happy skill creating! 🚀
