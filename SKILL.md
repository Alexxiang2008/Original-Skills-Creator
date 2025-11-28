# Skill Creator

Expert guide for creating professional Claude Code skills with best practices and automated tooling.

## Description

This skill helps you create, validate, and manage Claude Code skills efficiently. It provides interactive templates, automated generation, and validation tools to ensure your skills follow best practices and work reliably.

## Capabilities

- **Interactive Skill Creation**: Guided process to create well-structured skills
- **Template System**: Pre-built templates for common skill categories
- **Validation**: Automatic validation of skill structure and content
- **Best Practices**: Built-in knowledge of Claude Code skill guidelines
- **Code Generation**: Automatic generation of boilerplate and structure
- **Examples**: Rich library of working skill examples

## When to Use

Use this skill when you want to:

- Create a new Claude Code skill from scratch
- Use a template to quickly set up a skill
- Validate an existing skill's structure
- Learn best practices for skill creation
- Convert an idea into a working skill
- Add marketplace metadata to your skill

## Instructions

### Creating a New Skill

When the user wants to create a new skill:

1. **Gather Requirements**
   - Ask about the skill's purpose and main functionality
   - Understand what tools the skill will need (Read, Write, Bash, etc.)
   - Determine if there's a suitable template

2. **Choose Approach**
   - If there's a matching template, suggest using it
   - For custom needs, guide through step-by-step creation
   - Explain the benefits of each approach

3. **Generate Skill Structure**
   - Create the SKILL.md file with proper sections:
     - Title and description
     - Capabilities list
     - When to use
     - Detailed instructions
     - Examples (at least 2-3)
   - Add marketplace.json if user wants to share the skill
   - Create README.md for documentation
   - Add example usage scenarios

4. **Validate and Test**
   - Check all required sections are present
   - Ensure instructions are clear and actionable
   - Verify examples are realistic and helpful
   - Test the skill works as expected

### Available Templates

#### 1. Development Tools
For skills related to coding, testing, linting, code review, etc.

**Use when**: Creating skills for software development tasks

**Includes**:
- Code reading and analysis instructions
- Testing and validation patterns
- Common development tool integrations
- Best practices for code manipulation

#### 2. Content Creation
For skills related to writing, documentation, blogging, etc.

**Use when**: Creating skills for content generation and editing

**Includes**:
- Content structure templates
- Writing style guidelines
- SEO and formatting best practices
- Multi-format output support

#### 3. Document Processing
For skills that manipulate documents (PDF, Excel, CSV, etc.)

**Use when**: Creating skills for document manipulation

**Includes**:
- File reading and parsing patterns
- Data transformation logic
- Format conversion guidelines
- Error handling for various file types

#### 4. API Integration
For skills that interact with external APIs

**Use when**: Creating skills that call external services

**Includes**:
- API authentication patterns
- Request/response handling
- Error handling and retries
- Rate limiting considerations

#### 5. DevOps
For skills related to deployment, CI/CD, monitoring, etc.

**Use when**: Creating skills for operations and deployment

**Includes**:
- Infrastructure as code patterns
- Deployment workflow templates
- Monitoring and logging setup
- Security best practices

#### 6. Data Analysis
For skills that process, analyze, or visualize data

**Use when**: Creating skills for data work

**Includes**:
- Data loading and cleaning patterns
- Analysis workflow templates
- Visualization guidelines
- Statistical analysis examples

### Skill Creation Best Practices

1. **Clear Purpose**
   - Each skill should have ONE primary purpose
   - Avoid creating overly broad or complex skills
   - Name the skill descriptively

2. **Actionable Instructions**
   - Use imperative voice ("Read the file", not "The file should be read")
   - Break complex tasks into numbered steps
   - Be specific about what to do in each scenario

3. **Comprehensive Examples**
   - Include at least 2-3 realistic examples
   - Show both simple and complex use cases
   - Format examples clearly with user input and expected behavior

4. **Tool Usage**
   - Explicitly list which tools the skill needs
   - Explain when to use each tool
   - Include error handling for tool failures

5. **When to Use Section**
   - Be specific about triggering conditions
   - List concrete scenarios
   - Help Claude understand context

6. **Testing**
   - Test the skill with various inputs
   - Verify examples work as documented
   - Check edge cases and error conditions

### Skill Structure Template

```markdown
# Skill Name

Brief one-line description

## Description

Detailed 2-3 sentence description of what this skill does and why it's useful.

## Capabilities

- Capability 1
- Capability 2
- Capability 3

## When to Use

Use this skill when:
- Scenario 1
- Scenario 2
- Scenario 3

## Instructions

### Main Workflow

1. Step 1: What to do first
   - Sub-step details
   - Important considerations

2. Step 2: What to do next
   - Sub-step details
   - Tool usage

3. Step 3: Final steps
   - Completion criteria
   - Output format

### Special Cases

#### Case 1
Instructions for this case

#### Case 2
Instructions for this case

## Examples

### Example 1: Simple Use Case

**User Request:**
"Do something simple"

**Expected Behavior:**
1. Action 1
2. Action 2
3. Result

### Example 2: Complex Use Case

**User Request:**
"Do something complex with parameters"

**Expected Behavior:**
1. Validate parameters
2. Perform complex operation
3. Return detailed result

## Notes

- Important note 1
- Important note 2
- Limitation or consideration
```

### Interactive Creation Process

When creating a skill interactively:

1. **Introduction**
   ```
   I'll help you create a professional Claude Code skill. Let's start with some questions:
   ```

2. **Ask Key Questions**
   - What is the main purpose of this skill?
   - What should trigger this skill?
   - What tools will it need (Read, Write, Bash, Grep, etc.)?
   - Do you have any example use cases in mind?
   - Should this skill be shareable (needs marketplace.json)?

3. **Suggest Template**
   ```
   Based on your description, I recommend the [TEMPLATE_NAME] template.
   This template includes [KEY_FEATURES].

   Would you like to use this template or create a custom skill?
   ```

4. **Generate Files**
   - Create SKILL.md with all sections
   - Generate marketplace.json if needed
   - Create README.md with usage instructions
   - Add example directory if requested

5. **Validate**
   ```
   Let me validate your new skill:
   ✓ SKILL.md structure is correct
   ✓ All required sections present
   ✓ Examples are well-formed
   ✓ Instructions are actionable

   Your skill is ready! You can test it by asking Claude to use it.
   ```

### Validation Checklist

When validating a skill:

- [ ] SKILL.md exists and is properly formatted
- [ ] Title is clear and descriptive
- [ ] Description explains purpose well
- [ ] Capabilities list is complete
- [ ] "When to Use" section is specific
- [ ] Instructions are step-by-step and actionable
- [ ] At least 2 examples are provided
- [ ] Examples include both user request and expected behavior
- [ ] Tool usage is documented
- [ ] No security issues or dangerous patterns
- [ ] marketplace.json is valid (if present)

## Examples

### Example 1: User Wants to Create a Code Review Skill

**User Request:**
"Help me create a skill for automated code review"

**Skill Creator Behavior:**

1. Ask clarifying questions:
   - "What aspects of code review should this skill focus on? (e.g., security, performance, style)"
   - "Should it review specific languages or be language-agnostic?"
   - "Do you want it to suggest fixes or just identify issues?"

2. Suggest template:
   ```
   Based on your needs, I recommend the "Development Tools" template.
   This includes:
   - Code reading and analysis patterns
   - Best practices for code review
   - Issue reporting format

   I'll create a skill that:
   - Reads code files
   - Analyzes for common issues
   - Provides actionable feedback
   - Suggests improvements
   ```

3. Create the skill:
   - Generate SKILL.md with code review instructions
   - Include examples for different review scenarios
   - Add validation checklist
   - Create README with usage guide

4. Validate and present:
   ```
   ✓ Created code-reviewer skill
   ✓ Includes 3 review examples
   ✓ Covers security, performance, and style
   ✓ Ready to use

   Try it with: "Review the code in src/auth.ts"
   ```

### Example 2: User Wants to Create a Custom Documentation Generator

**User Request:**
"I need a skill that generates API documentation from code comments"

**Skill Creator Behavior:**

1. Gather requirements:
   ```
   I'll help you create an API documentation generator skill.

   Questions:
   - What format should the output be? (Markdown, HTML, JSON)
   - Which languages should it support?
   - Should it extract JSDoc, TypeDoc, or other formats?
   - Do you want OpenAPI/Swagger output?
   ```

2. Create custom skill:
   ```
   Creating a custom documentation generator skill with:
   - Multi-language support (JS/TS/Python)
   - Markdown and JSON output
   - JSDoc and TypeDoc parsing
   - OpenAPI schema generation
   ```

3. Generate comprehensive skill:
   - Detailed parsing instructions
   - Multiple output format templates
   - Error handling for malformed comments
   - Examples for each supported language

4. Add marketplace metadata:
   ```
   I've also created marketplace.json so you can share this skill.
   Fill in your details and it will be ready to publish.
   ```

### Example 3: Validating an Existing Skill

**User Request:**
"Can you check if my skill is properly structured?"

**Skill Creator Behavior:**

1. Read the skill file:
   ```
   Let me analyze your skill...
   ```

2. Run validation:
   ```
   Checking: my-skill/SKILL.md

   ✓ Title present: "Data Processor"
   ✓ Description is clear
   ✓ Capabilities listed (3 items)
   ✓ "When to Use" section present
   ✓ Instructions are detailed
   ⚠ Only 1 example found (recommend 2-3)
   ✗ marketplace.json is missing

   Recommendations:
   1. Add more examples showing different use cases
   2. Create marketplace.json if you plan to share this skill
   3. Consider adding error handling instructions
   ```

3. Offer to fix issues:
   ```
   Would you like me to:
   - Add more examples?
   - Generate marketplace.json?
   - Enhance the error handling section?
   ```

## Notes

- Always validate skills before marking them complete
- Encourage users to test their skills with real scenarios
- Remind users that skills should be focused and single-purpose
- Suggest contributing good skills to the community
- Keep skills maintainable and well-documented
- Follow security best practices (no credential exposure, safe file operations)
- Use the Read tool to examine existing skills for reference
- Use the Write tool to create new skill files
- Use the Grep tool to find similar existing skills for inspiration
