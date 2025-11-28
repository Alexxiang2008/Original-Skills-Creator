<div align="center">

# Claude Skills Creator 🚀

### 强大的 Claude Code 技能创建工具

让创建、管理和分享 Claude Code Skills 变得简单高效

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen.svg)](https://nodejs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3+-blue.svg)](https://www.typescriptlang.org/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

[English](#english) | [中文文档](#chinese)

</div>

---

## 📖 目录

- [什么是 Claude Skills Creator](#什么是-claude-skills-creator)
- [核心特性](#-核心特性)
- [快速开始](#-快速开始)
- [安装方式](#-安装方式)
- [使用指南](#-使用指南)
- [可用模板](#-可用模板)
- [命令参考](#-命令参考)
- [项目结构](#-项目结构)
- [开发指南](#-开发指南)
- [常见问题](#-常见问题)
- [贡献指南](#-贡献指南)
- [License](#-license)

---

<a name="chinese"></a>

## 什么是 Claude Skills Creator？

**Claude Skills Creator** 是一个专为 Claude Code 设计的技能创建工具，帮助开发者快速创建、验证和管理高质量的 Claude Code Skills。

### 为什么需要这个工具？

- 🎯 **降低门槛** - 无需深入了解 skill 结构，通过交互式引导即可创建
- 📦 **模板丰富** - 预置多种常用场景模板，开箱即用
- ✅ **质量保证** - 自动验证 skill 结构，遵循最佳实践
- 🚀 **提升效率** - 几分钟内即可创建一个完整的 skill
- 🔧 **完全可定制** - 灵活的模板系统，支持自定义扩展

### 适用场景

- ✨ 为 Claude Code 创建自定义技能
- 📚 学习 Claude Code Skills 的最佳实践
- 🏗️ 快速搭建 skill 项目结构
- 🔍 验证现有 skill 的规范性
- 🌐 准备分享 skill 到社区

---

## ✨ 核心特性

### 🎨 交互式创建

通过友好的命令行界面，一步步引导你创建专业的 skill：

```bash
$ skill create

🚀 Claude Skills Creator

Let's create an amazing skill together!

? What is the display name of your skill? My Awesome Skill
? What is the folder name (kebab-case)? my-awesome-skill
? Brief description (one line): A skill that does amazing things
? Select a category: Development Tools
...
```

### 📚 丰富的模板库

内置多种精心设计的模板，涵盖常见使用场景：

| 模板 | 适用场景 | 包含内容 |
|------|---------|---------|
| 🔧 **Development Tools** | 代码审查、测试、重构 | 代码分析模式、最佳实践检查 |
| ✍️ **Content Creation** | 写作、文档、博客 | 内容结构模板、SEO 优化 |
| 📄 **Document Processing** | PDF、Excel、CSV 处理 | 文件解析、数据转换 |
| 🌐 **API Integration** | REST、GraphQL、Webhook | API 认证、请求处理 |
| 🚀 **DevOps** | CI/CD、部署、监控 | 部署流程、基础设施代码 |
| 📊 **Data Analysis** | 数据处理、可视化 | 数据分析工作流、图表生成 |
| ⚙️ **Custom** | 自定义需求 | 灵活的基础模板 |

### ✅ 自动验证

自动检查 skill 结构的完整性和正确性：

```bash
$ skill validate ./my-skill

✓ Skill validation passed!

Warnings:
  ⚠ Only 1 example found. Recommend 2-3 examples

Suggestions:
  💡 Consider adding marketplace.json for easier sharing
```

### 🛠️ 完整的工具链

- **创建** - 从模板快速生成 skill
- **验证** - 确保 skill 符合规范
- **安装** - 一键安装到 Claude Code
- **文档** - 自动生成完整文档

---

## ⚡ 快速开始

### 前置要求

- Node.js >= 18.0.0
- Claude Code（如果要作为 skill 使用）
- Git

### 5 分钟快速体验

```bash
# 1. 克隆项目
git clone https://github.com/Alexxiang2008/Original-Skills-Creator.git
cd Original-Skills-Creator

# 2. 安装依赖
npm install

# 3. 构建项目
npm run build

# 4. 创建你的第一个 skill
npm start create

# 5. 查看创建的 skill
ls -la ./my-awesome-skill
```

---

## 📦 安装方式

### 方式一：作为 Claude Skill（推荐）

这样可以直接在 Claude Code 中使用，让 Claude 帮你创建 skill：

```bash
# 克隆到 Claude skills 目录
git clone https://github.com/Alexxiang2008/Original-Skills-Creator.git \
  ~/.claude/skills/skill-creator
```

安装后，直接问 Claude：

```
"帮我创建一个代码审查的 skill"
"我需要一个处理 CSV 文件的 skill"
"Create a skill for API documentation"
```

### 方式二：作为 CLI 工具

如果你想在命令行中独立使用：

```bash
# 从源码安装
git clone https://github.com/Alexxiang2008/Original-Skills-Creator.git
cd Original-Skills-Creator
npm install
npm run build
npm link

# 全局可用
skill --version
```

### 方式三：使用 NPX（开发中）

```bash
# 无需安装，直接使用
npx claude-skills-creator create
```

---

## 📘 使用指南

### 创建你的第一个 Skill

#### 使用交互式命令

```bash
$ skill create
```

按照提示回答问题：

1. **Skill 名称** - 显示名称（如："Code Reviewer"）
2. **文件夹名** - kebab-case 格式（如："code-reviewer"）
3. **描述** - 简短的一句话描述
4. **分类** - 选择最匹配的类别
5. **主要用途** - 详细说明 skill 的目的
6. **工具选择** - 选择需要使用的 Claude Code 工具
7. **作者信息** - 你的名字
8. **附加选项** - 是否生成 marketplace.json 和示例

#### 使用模板创建

```bash
# 使用开发工具模板
skill create --template development

# 使用内容创作模板
skill create --template content

# 指定输出目录
skill create --output ./my-skills
```

#### 创建结果

执行成功后，你会看到：

```
✓ Skill created successfully!

📁 Skill Location:
/path/to/your-skill

📝 Files Created:
  ✓ SKILL.md
  ✓ README.md
  ✓ marketplace.json
  ✓ examples/

🎯 Next Steps:
  1. Review and customize SKILL.md
  2. Add specific examples
  3. Test your skill with Claude
  4. Run: skill validate your-skill
```

### 验证 Skill

确保你的 skill 符合规范：

```bash
# 验证指定的 skill
skill validate ./my-skill

# 验证当前目录
skill validate .
```

验证内容包括：

- ✅ SKILL.md 存在且格式正确
- ✅ 必需的章节完整（Description, Capabilities, Instructions, Examples）
- ✅ 示例数量充足（建议 2-3 个）
- ✅ 指令可执行性
- ⚠️ 警告和建议

### 安装 Skill 到 Claude Code

```bash
# 安装到 ~/.claude/skills/ 目录
skill install ./my-skill

# 指定安装名称
skill install ./my-skill --name custom-name
```

### 查看可用模板

```bash
skill templates
```

输出示例：

```
📚 Available Templates

1. Development Tools
   Template for creating skills related to coding, testing, and code review

2. Content Creation
   Template for creating skills related to writing, documentation, and content

3. Base Template
   Minimal template for creating custom skills from scratch
```

### 查看最佳实践

```bash
skill info
```

---

## 🎯 命令参考

### `skill create`

创建新的 skill

**用法：**
```bash
skill create [options]
```

**选项：**
- `-t, --template <type>` - 使用指定模板（development, content, custom）
- `-o, --output <dir>` - 输出目录（默认：当前目录）
- `--no-marketplace` - 不创建 marketplace.json
- `--no-examples` - 不创建示例目录

**示例：**
```bash
# 交互式创建
skill create

# 使用模板
skill create --template development

# 指定输出目录
skill create -o ~/my-skills -t content

# 不创建附加文件
skill create --no-marketplace --no-examples
```

### `skill validate`

验证 skill 结构

**用法：**
```bash
skill validate <path>
```

**参数：**
- `<path>` - skill 目录或 SKILL.md 文件路径

**示例：**
```bash
skill validate ./my-skill
skill validate ~/.claude/skills/code-reviewer
skill validate ./SKILL.md
```

### `skill templates`

列出可用模板

**用法：**
```bash
skill templates
```

### `skill info`

显示最佳实践信息

**用法：**
```bash
skill info
```

### `skill install`

安装 skill 到 Claude Code

**用法：**
```bash
skill install <path> [options]
```

**参数：**
- `<path>` - skill 目录路径

**选项：**
- `-n, --name <name>` - 安装时使用的名称

**示例：**
```bash
skill install ./my-skill
skill install ~/projects/awesome-skill --name awesome
```

---

## 📚 可用模板

### 🔧 Development Tools（开发工具）

适用于代码相关的 skill。

**包含内容：**
- 代码分析和审查流程
- 测试和验证模式
- 代码生成和重构指南
- 最佳实践检查

**适用场景：**
- 代码审查工具
- 单元测试生成器
- 代码重构助手
- Linting 工具

**示例：**
```bash
skill create --template development
# 创建一个代码审查 skill
```

### ✍️ Content Creation（内容创作）

适用于内容生成和文档编写的 skill。

**包含内容：**
- 内容生成工作流
- 文档结构模板
- SEO 优化指南
- 多格式输出支持

**适用场景：**
- 博客文章生成器
- 技术文档编写
- API 文档生成
- 内容优化工具

**示例：**
```bash
skill create --template content
# 创建一个技术博客生成 skill
```

### ⚙️ Custom（自定义）

灵活的基础模板，适合特殊需求。

**包含内容：**
- 基本的 skill 结构
- 可自定义的章节
- 通用的工作流程模板

**适用场景：**
- 不属于上述分类的 skill
- 需要完全自定义的场景
- 学习 skill 结构

**示例：**
```bash
skill create --template custom
# 创建一个完全自定义的 skill
```

---

## 🏗️ 项目结构

```
Original-Skills-Creator/
├── src/                          # TypeScript 源代码
│   ├── cli.ts                    # CLI 入口点
│   ├── index.ts                  # 库导出
│   ├── types.ts                  # TypeScript 类型定义
│   ├── core/                     # 核心功能
│   │   ├── creator.ts            # Skill 创建逻辑
│   │   └── validator.ts          # Skill 验证逻辑
│   ├── templates/                # 模板定义
│   │   ├── base.ts               # 基础模板
│   │   ├── development.ts        # 开发工具模板
│   │   ├── content.ts            # 内容创作模板
│   │   └── index.ts              # 模板注册表
│   └── utils/                    # 工具函数
│       ├── file.ts               # 文件操作
│       └── prompt.ts             # 交互提示
├── examples/                     # 示例 skills
│   ├── hello-world/              # Hello World 示例
│   │   └── SKILL.md
│   └── code-reviewer/            # 代码审查示例
│       └── SKILL.md
├── docs/                         # 文档
│   ├── getting-started.md        # 快速入门
│   └── best-practices.md         # 最佳实践
├── templates/                    # 模板目录
│   ├── base/
│   ├── development/
│   ├── content/
│   ├── api/
│   ├── devops/
│   └── data/
├── SKILL.md                      # 主 skill 定义
├── marketplace.json              # Marketplace 元数据
├── package.json                  # NPM 配置
├── tsconfig.json                 # TypeScript 配置
├── .eslintrc.json               # ESLint 配置
├── .prettierrc.json             # Prettier 配置
├── README.md                     # 项目说明
├── CONTRIBUTING.md               # 贡献指南
├── CHANGELOG.md                  # 更新日志
└── LICENSE                       # MIT 许可证
```

---

## 💡 使用示例

### 示例 1：创建代码审查 Skill

```bash
# 使用开发工具模板
$ skill create --template development

? What is the display name of your skill? Code Reviewer
? What is the folder name (kebab-case)? code-reviewer
? Brief description (one line): Automated code review with security and best practices
? Select a category: Development Tools
? What is the main purpose of this skill? Review code for security, performance, and quality
? Which Claude Code tools will this skill use? Read, Grep, Glob, Bash
? Author name: Your Name
? Include marketplace.json for sharing? Yes
? Create examples directory? Yes

✓ Skill created successfully!

📁 Skill Location: /path/to/code-reviewer

🎯 Next Steps:
  1. Customize SKILL.md with specific code review patterns
  2. Add examples for different programming languages
  3. Test with real code repositories
```

### 示例 2：创建 CSV 处理 Skill

```bash
# 使用自定义模板
$ skill create

? What is the display name of your skill? CSV Data Processor
? What is the folder name (kebab-case)? csv-processor
? Brief description (one line): Parse and analyze CSV files
? Select a category: Data Analysis
? What is the main purpose of this skill? Read CSV files and generate statistics
? Which Claude Code tools will this skill use? Read, Write
? Author name: Your Name

✓ Skill created successfully!
```

### 示例 3：验证和安装

```bash
# 验证创建的 skill
$ skill validate ./code-reviewer
✓ Skill validation passed!

# 安装到 Claude Code
$ skill install ./code-reviewer
✓ Installed to: ~/.claude/skills/code-reviewer
🎉 Your skill is now available in Claude Code!
```

---

## 📖 生成的 Skill 结构

每个创建的 skill 包含：

### SKILL.md（必需）

主要的 skill 定义文件，包含：

```markdown
# Skill Name

## Description
详细说明 skill 的功能

## Capabilities
- 功能列表

## When to Use
- 触发场景

## Instructions
详细的执行步骤

## Examples
使用示例

## Notes
注意事项
```

### marketplace.json（可选）

Marketplace 元数据：

```json
{
  "name": "skill-name",
  "displayName": "Skill Name",
  "version": "1.0.0",
  "description": "...",
  "author": { "name": "..." },
  "category": "development",
  "tags": ["tag1", "tag2"],
  "capabilities": ["..."],
  "requirements": {
    "tools": ["Read", "Write"]
  }
}
```

### README.md（推荐）

用户文档，包括安装和使用说明。

### examples/（可选）

包含使用示例的目录。

---

## 🔧 配置

创建 `.skillcreatorrc.json` 文件来自定义默认设置：

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

**配置项说明：**

- `defaultTemplate` - 默认使用的模板
- `author` - 默认作者名称
- `license` - 默认许可证
- `skillsDirectory` - Skills 安装目录
- `includeExamples` - 是否默认创建示例
- `includeTests` - 是否默认创建测试

---

## 👨‍💻 开发指南

### 本地开发

```bash
# 1. 克隆仓库
git clone https://github.com/Alexxiang2008/Original-Skills-Creator.git
cd Original-Skills-Creator

# 2. 安装依赖
npm install

# 3. 开发模式（监听文件变化）
npm run dev

# 4. 构建
npm run build

# 5. 测试 CLI
npm start create
```

### 代码规范

```bash
# 代码检查
npm run lint

# 代码格式化
npm run format
```

### 添加新模板

1. 在 `src/templates/` 创建新模板文件
2. 定义模板结构和内容
3. 在 `src/templates/index.ts` 中注册
4. 添加文档和示例

示例：

```typescript
// src/templates/api.ts
import { SkillTemplate } from '../types.js';

export const apiTemplate: SkillTemplate = {
  id: 'api',
  name: 'API Integration',
  description: 'Template for API integration skills',
  category: 'api',
  // ... 其他配置
};
```

### 项目架构

- **src/core/** - 核心业务逻辑
  - `creator.ts` - Skill 创建
  - `validator.ts` - Skill 验证

- **src/templates/** - 模板系统
  - 每个模板独立文件
  - 统一的接口定义

- **src/utils/** - 工具函数
  - 文件操作
  - 用户交互

---

## ❓ 常见问题

### 如何更新已创建的 skill？

直接编辑生成的文件，然后运行验证：

```bash
skill validate ./my-skill
```

### 可以自定义模板吗？

可以！在 `src/templates/` 添加新模板，然后重新构建项目。

### 生成的 skill 可以直接使用吗？

可以，但建议：
1. 根据实际需求修改 SKILL.md
2. 添加具体的使用示例
3. 运行验证确保没有问题
4. 在 Claude Code 中测试

### 如何分享我的 skill？

1. 确保包含 marketplace.json
2. 创建 GitHub 仓库
3. 发布到 npm（可选）
4. 提交到 Claude Skills 社区

### Skill 不工作怎么办？

1. 运行 `skill validate` 检查结构
2. 查看 Claude Code 日志
3. 检查 SKILL.md 的指令是否清晰
4. 确保示例准确

### 如何调试 skill？

在 Claude Code 中：
1. 尝试触发 skill 的示例场景
2. 查看 Claude 的响应
3. 根据反馈调整 SKILL.md
4. 重新验证和测试

---

## 📝 Skill 创建最佳实践

### 1. 保持专注 🎯

- ✅ 每个 skill 只做一件事
- ❌ 避免创建"万能工具"

```bash
# 好的示例
skill: "CSV Analyzer" - 只分析 CSV

# 不好的示例
skill: "Data Tool" - 处理所有数据格式
```

### 2. 清晰的指令 📋

- ✅ 使用编号步骤
- ✅ 明确说明使用哪些工具
- ❌ 避免模糊的描述

```markdown
好：
1. Use Read tool to load data.csv
2. Parse CSV content line by line
3. Calculate statistics

差：
Process the data
```

### 3. 丰富的示例 📚

- ✅ 至少 2-3 个示例
- ✅ 包含边缘情况
- ✅ 展示预期行为

### 4. 适当的工具选择 🔧

- ✅ 使用内置工具（Read, Write, Grep）
- ⚠️ 谨慎使用 Bash
- ❌ 避免危险操作

### 5. 完整的文档 📖

- ✅ 详细的 README
- ✅ 使用示例
- ✅ 故障排除指南

---

## 🤝 贡献指南

我们欢迎各种形式的贡献！

### 如何贡献

1. **Fork 项目**
   ```bash
   git clone https://github.com/YOUR-USERNAME/Original-Skills-Creator.git
   ```

2. **创建特性分支**
   ```bash
   git checkout -b feature/AmazingFeature
   ```

3. **提交更改**
   ```bash
   git commit -m 'feat: Add some AmazingFeature'
   ```

4. **推送到分支**
   ```bash
   git push origin feature/AmazingFeature
   ```

5. **创建 Pull Request**

### 贡献类型

- 🐛 **Bug 修复** - 修复已知问题
- ✨ **新功能** - 添加新模板或功能
- 📝 **文档** - 改进文档和示例
- 🎨 **代码优化** - 重构和性能提升
- 🧪 **测试** - 添加测试用例

### Commit 规范

使用 [Conventional Commits](https://www.conventionalcommits.org/)：

- `feat:` 新功能
- `fix:` Bug 修复
- `docs:` 文档更新
- `style:` 代码格式
- `refactor:` 代码重构
- `test:` 测试相关
- `chore:` 构建/工具

详见 [CONTRIBUTING.md](CONTRIBUTING.md)

---

## 🌐 相关资源

### 官方文档

- 📚 [Claude Code Skills 官方文档](https://github.com/anthropics/skills)
- 🛠️ [Skill Builder by Ken Collins](https://github.com/metaskills/skill-builder)
- ⭐ [Awesome Claude Skills](https://github.com/travisvn/awesome-claude-skills)
- 🏪 [SkillsMP Marketplace](https://skillsmp.com/)

### 学习资源

- 📖 [快速入门指南](docs/getting-started.md)
- 💡 [最佳实践](docs/best-practices.md)
- 🎯 [示例 Skills](examples/)

### 社区

- 💬 [GitHub Discussions](https://github.com/Alexxiang2008/Original-Skills-Creator/discussions)
- 🐛 [问题追踪](https://github.com/Alexxiang2008/Original-Skills-Creator/issues)
- 🌟 [项目主页](https://github.com/Alexxiang2008/Original-Skills-Creator)

---

## 🗺️ 路线图

### v1.0.0 ✅（当前版本）

- ✅ 交互式 skill 创建
- ✅ 3 个预置模板（Development, Content, Custom）
- ✅ Skill 验证功能
- ✅ CLI 工具
- ✅ 完整文档

### v1.1.0（计划中）

- 🔜 更多模板（API, DevOps, Data Analysis）
- 🔜 增强的验证功能
- 🔜 Skill 测试框架
- 🔜 Web UI 界面

### v2.0.0（未来）

- 💭 AI 辅助 skill 生成
- 💭 Skill marketplace 集成
- 💭 VS Code 扩展
- 💭 协作功能

---

## 📊 项目统计

- 📦 **25+** 文件
- 💻 **3400+** 行代码
- 📚 **3** 个模板
- 📖 **完整文档**
- ⭐ **MIT 许可证**

---

## 📄 许可证

本项目采用 MIT 许可证 - 详见 [LICENSE](LICENSE) 文件

```
MIT License

Copyright (c) 2025 Alexxiang2008

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files...
```

---

## 🙏 致谢

### 特别感谢

- 💙 **Anthropic 团队** - 开发了强大的 Claude Code
- 🌟 **Claude Code 社区** - 提供了灵感和反馈
- 👥 **所有贡献者** - 让这个项目变得更好

### 灵感来源

- [metaskills/skill-builder](https://github.com/metaskills/skill-builder) - Skill 构建理念
- [automationcreators/claude-code-skills](https://github.com/automationcreators/claude-code-skills) - Skills 集合
- [Claude Code 官方示例](https://github.com/anthropics/skills) - 最佳实践

---

## 📞 支持与反馈

### 获取帮助

- 🐛 [报告 Bug](https://github.com/Alexxiang2008/Original-Skills-Creator/issues/new?template=bug_report.md)
- 💡 [功能建议](https://github.com/Alexxiang2008/Original-Skills-Creator/issues/new?template=feature_request.md)
- 💬 [讨论交流](https://github.com/Alexxiang2008/Original-Skills-Creator/discussions)
- 📧 联系作者

### 在提问前

1. ✅ 查看 [常见问题](#-常见问题)
2. ✅ 搜索 [已有 Issues](https://github.com/Alexxiang2008/Original-Skills-Creator/issues)
3. ✅ 阅读 [文档](docs/)

---

## ⭐ Star History

如果这个项目对你有帮助，请给它一个 Star ⭐！

---

<div align="center">

### Made with ❤️ by [Alexxiang2008](https://github.com/Alexxiang2008)

**[⬆ 回到顶部](#claude-skills-creator-)**

</div>

---

<a name="english"></a>

## English Version

<details>
<summary>Click to expand English documentation</summary>

### What is Claude Skills Creator?

**Claude Skills Creator** is a powerful tool designed for Claude Code that helps developers quickly create, validate, and manage high-quality Claude Code Skills.

### Quick Start

```bash
# Clone the repository
git clone https://github.com/Alexxiang2008/Original-Skills-Creator.git
cd Original-Skills-Creator

# Install dependencies
npm install

# Build
npm run build

# Create your first skill
npm start create
```

### Features

- 🎨 **Interactive Creation** - Step-by-step guided skill creation
- 📚 **Rich Templates** - Pre-built templates for common scenarios
- ✅ **Auto Validation** - Ensure skill quality and compliance
- 🚀 **CLI Tools** - Powerful command-line interface
- 📖 **Complete Documentation** - Comprehensive guides and examples

### Commands

```bash
skill create          # Create a new skill
skill validate PATH   # Validate skill structure
skill templates       # List available templates
skill install PATH    # Install skill to Claude Code
skill info            # Show best practices
```

### Documentation

- [Getting Started](docs/getting-started.md)
- [Best Practices](docs/best-practices.md)
- [Contributing](CONTRIBUTING.md)
- [Changelog](CHANGELOG.md)

### License

MIT License - see [LICENSE](LICENSE) file

### Support

- Report bugs: [Issues](https://github.com/Alexxiang2008/Original-Skills-Creator/issues)
- Discussions: [Discussions](https://github.com/Alexxiang2008/Original-Skills-Creator/discussions)

</details>
