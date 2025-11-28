# Claude Skills Creator 🚀

> Advanced tool for creating, managing, and sharing Claude Code skills with ease

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen.svg)](https://nodejs.org)

## 🌟 Features

- **Interactive Skill Creation** - Guided process to create professional skills
- **Rich Template Library** - Pre-built templates for common use cases
- **CLI Tools** - Powerful command-line interface for skill management
- **Validation & Testing** - Built-in tools to ensure skill quality
- **Best Practices** - Follows official Claude Code skills guidelines
- **TypeScript Support** - Full type safety and modern development experience

## 📦 Installation

### As a Skill (Recommended)

```bash
# Clone into your Claude skills directory
git clone https://github.com/Alexxiang2008/Original-Skills-Creator.git ~/.claude/skills/skill-creator
```

### As a CLI Tool

```bash
# Install globally
npm install -g claude-skills-creator

# Or use with npx
npx claude-skills-creator
```

## 🚀 Quick Start

### Using as a Claude Skill

Once installed in your `~/.claude/skills/` directory, Claude Code will automatically recognize it. Simply ask:

```
"Help me create a new skill for [your use case]"
"Create a skill that does [specific task]"
"I need a skill template for [category]"
```

### Using the CLI

```bash
# Create a new skill interactively
skill create

# Create from a specific template
skill create --template development

# Validate an existing skill
skill validate ./my-skill

# Test a skill
skill test ./my-skill

# List available templates
skill templates

# Show help
skill --help
```

## 📚 Available Templates

- **Development Tools** - Code generation, linting, testing utilities
- **Content Creation** - Writing, blogging, documentation
- **Document Processing** - PDF, Excel, data manipulation
- **API Integration** - REST, GraphQL, webhook handlers
- **DevOps** - CI/CD, deployment, monitoring
- **Data Analysis** - Data processing, visualization, reporting
- **Custom** - Start from scratch with guided prompts

## 🏗️ Project Structure

```
Original-Skills-Creator/
├── src/
│   ├── cli.ts                 # CLI entry point
│   ├── core/
│   │   ├── creator.ts         # Skill creation logic
│   │   ├── validator.ts       # Skill validation
│   │   ├── tester.ts          # Skill testing
│   │   └── publisher.ts       # Publishing utilities
│   ├── templates/
│   │   ├── base.ts            # Base template
│   │   ├── development.ts     # Development template
│   │   ├── content.ts         # Content creation template
│   │   └── index.ts           # Template registry
│   └── utils/
│       ├── file.ts            # File operations
│       └── prompt.ts          # User prompts
├── templates/                 # Skill templates
│   ├── base/
│   ├── development/
│   ├── content/
│   └── api/
├── examples/                  # Example skills
│   ├── hello-world/
│   ├── code-reviewer/
│   └── doc-generator/
├── docs/                      # Documentation
│   ├── getting-started.md
│   ├── templates.md
│   └── best-practices.md
└── SKILL.md                   # Main skill definition
```

## 🎯 Usage Examples

### Creating a Code Review Skill

```bash
skill create --template development
# Follow the interactive prompts
# Skill name: code-reviewer
# Description: Automated code review with best practices
# Tools needed: Read, Grep, WebSearch
```

### Creating a Custom Skill

```bash
skill create
# Select "Custom" template
# Answer guided questions about your skill
# Generated skill will include all necessary files
```

### Validating Your Skill

```bash
skill validate ~/.claude/skills/my-skill
# ✓ SKILL.md is valid
# ✓ Structure is correct
# ✓ All required fields present
# ✓ Examples are well-formed
```

## 📖 Skill Structure

Every skill created includes:

- `SKILL.md` - Main skill definition with instructions
- `marketplace.json` - Metadata for skill marketplace
- `README.md` - Documentation for users
- `examples/` - Usage examples (optional)
- `scripts/` - Helper scripts (optional)

## 🔧 Configuration

Create a `.skillcreatorrc.json` in your project:

```json
{
  "defaultTemplate": "development",
  "author": "Your Name",
  "license": "MIT",
  "skillsDirectory": "~/.claude/skills",
  "includeExamples": true,
  "includeTests": true
}
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Best Practices

- Keep skills focused on a single responsibility
- Provide clear, actionable instructions in SKILL.md
- Include usage examples
- Test your skills thoroughly before sharing
- Follow the official Claude Code skills guidelines
- Use clear, descriptive naming

## 🌐 Resources

- [Official Claude Code Skills Documentation](https://github.com/anthropics/skills)
- [Skill Builder by Ken Collins](https://github.com/metaskills/skill-builder)
- [Awesome Claude Skills](https://github.com/travisvn/awesome-claude-skills)
- [SkillsMP Marketplace](https://skillsmp.com/)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Anthropic team for Claude Code
- The Claude Code community for inspiration
- All contributors and skill creators

## 📞 Support

- Create an issue for bug reports
- Start a discussion for feature requests
- Check existing issues before creating new ones

---

Made with ❤️ by [Alexxiang2008](https://github.com/Alexxiang2008)
