import { SkillTemplate } from '../types.js';

export const developmentTemplate: SkillTemplate = {
  id: 'development',
  name: 'Development Tools',
  description: 'Template for creating skills related to coding, testing, and code review',
  category: 'development',
  capabilities: [
    'Code analysis and review',
    'Testing and validation',
    'Code generation and refactoring',
    'Best practices enforcement'
  ],
  defaultTools: ['Read', 'Write', 'Grep', 'Glob', 'Bash'],
  structure: {
    title: 'Development Skill',
    description: 'A skill for software development tasks',
    capabilities: [
      'Analyze code structure and patterns',
      'Identify issues and suggest improvements',
      'Generate code based on requirements',
      'Validate code quality'
    ],
    whenToUse: [
      'When reviewing code for quality or security',
      'When generating boilerplate or repetitive code',
      'When refactoring existing code',
      'When enforcing coding standards'
    ],
    instructions: `## Instructions

### Code Analysis Workflow

1. **Locate Files**
   - Use Glob tool to find relevant files: \`**/*.{js,ts,py}\`
   - Filter by directory or pattern if needed
   - List files for user confirmation

2. **Read and Analyze**
   - Use Read tool to examine file contents
   - Look for patterns, anti-patterns, or issues
   - Check against best practices

3. **Identify Issues**
   - Security vulnerabilities (SQL injection, XSS, etc.)
   - Performance problems (N+1 queries, memory leaks)
   - Code smells (duplicated code, long functions)
   - Style violations

4. **Provide Feedback**
   - List issues with file:line references
   - Explain why each issue matters
   - Suggest specific fixes
   - Prioritize by severity

### Code Generation Workflow

1. **Understand Requirements**
   - Clarify the desired functionality
   - Identify language and framework
   - Check for existing patterns in codebase

2. **Generate Code**
   - Follow project conventions
   - Use appropriate design patterns
   - Include error handling
   - Add comments for complex logic

3. **Validate**
   - Check syntax
   - Ensure no security issues
   - Verify it fits the codebase style
   - Test if possible

### Testing Workflow

1. **Identify Test Cases**
   - Unit tests for functions
   - Integration tests for modules
   - Edge cases and error conditions

2. **Generate Tests**
   - Use project's testing framework
   - Follow existing test patterns
   - Include setup and teardown
   - Add descriptive test names

3. **Run Tests**
   - Execute with Bash tool
   - Report results clearly
   - Fix failing tests if needed

## Best Practices

- Always read existing code before suggesting changes
- Respect project conventions and style
- Consider security implications
- Test generated code when possible
- Provide clear explanations with code
`,
    examples: [
      {
        title: 'Code Review',
        userRequest: 'Review the authentication code in src/auth.ts',
        expectedBehavior: [
          'Read src/auth.ts',
          'Analyze for security issues',
          'Check for best practices',
          'Report findings with line numbers',
          'Suggest specific improvements'
        ]
      },
      {
        title: 'Generate Tests',
        userRequest: 'Create unit tests for the UserService class',
        expectedBehavior: [
          'Find UserService implementation',
          'Identify public methods',
          'Generate test cases for each method',
          'Include edge cases',
          'Write tests using project framework'
        ]
      },
      {
        title: 'Refactor Code',
        userRequest: 'Refactor the duplicated validation logic',
        expectedBehavior: [
          'Search for duplicated validation code',
          'Identify common patterns',
          'Extract to shared utility function',
          'Update all usages',
          'Verify no functionality changes'
        ]
      }
    ],
    notes: [
      'Always use Read tool before modifying code',
      'Prefer Edit tool over Write for existing files',
      'Run tests after code changes',
      'Follow language-specific best practices',
      'Consider backward compatibility'
    ]
  }
};

export function getDevelopmentTemplate(): SkillTemplate {
  return developmentTemplate;
}
