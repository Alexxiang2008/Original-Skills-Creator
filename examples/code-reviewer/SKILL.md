# Code Reviewer

Automated code review skill that analyzes code for quality, security, and best practices.

## Description

This skill performs comprehensive code reviews, identifying potential issues, security vulnerabilities, and suggesting improvements based on industry best practices and language-specific standards.

## Capabilities

- Analyze code for security vulnerabilities
- Identify performance issues and anti-patterns
- Check code style and formatting
- Suggest refactoring opportunities
- Validate best practices compliance

## When to Use

Use this skill when:
- Reviewing pull requests or code changes
- Conducting security audits
- Ensuring code quality standards
- Identifying technical debt
- Training team members on best practices

## Instructions

### Code Review Workflow

1. **Identify Files to Review**
   - Use Glob to find relevant files based on user request
   - Filter by language or directory if specified
   - Confirm file list with user

2. **Read and Analyze Code**
   - Use Read tool to examine each file
   - Analyze for multiple dimensions:
     - Security: SQL injection, XSS, auth issues
     - Performance: N+1 queries, inefficient algorithms
     - Maintainability: Code smells, complexity
     - Style: Formatting, naming conventions

3. **Categorize Issues**
   - **Critical**: Security vulnerabilities, data loss risks
   - **High**: Performance problems, major bugs
   - **Medium**: Code smells, moderate refactoring needs
   - **Low**: Style issues, minor improvements

4. **Provide Feedback**
   - List issues with file:line references
   - Explain why each issue matters
   - Provide specific fix suggestions
   - Include code examples when helpful

5. **Generate Report**
   - Summary of findings by severity
   - Detailed issue list
   - Recommendations for fixes
   - Estimated effort for improvements

### Security Analysis

Check for:
- Input validation and sanitization
- SQL injection vulnerabilities
- XSS (Cross-Site Scripting) risks
- Authentication and authorization flaws
- Sensitive data exposure
- Insecure dependencies
- OWASP Top 10 vulnerabilities

### Performance Analysis

Look for:
- Inefficient algorithms (O(n²) vs O(n log n))
- Database N+1 query problems
- Memory leaks
- Unnecessary computations
- Missing caching opportunities
- Resource-intensive operations

### Code Quality Analysis

Identify:
- Duplicated code
- Long functions or classes
- Deep nesting levels
- Excessive coupling
- Poor naming
- Missing error handling
- Lack of tests

## Examples

### Example 1: Review Authentication Code

**User Request:**
"Review the authentication code in src/auth/login.ts for security issues"

**Expected Behavior:**
- Read src/auth/login.ts
- Check for common auth vulnerabilities:
  - Password storage (hashing, salting)
  - Session management
  - Rate limiting
  - Input validation
- Report findings with severity levels
- Suggest specific security improvements

### Example 2: Review API Endpoints

**User Request:**
"Review all API controllers for performance and best practices"

**Expected Behavior:**
- Use Glob to find controller files
- Analyze each endpoint for:
  - Proper error handling
  - Input validation
  - Response formatting
  - Database query efficiency
- Identify patterns and anti-patterns
- Suggest architectural improvements

### Example 3: Pre-commit Review

**User Request:**
"Review my changes before committing"

**Expected Behavior:**
- Use Bash to get git diff
- Analyze only changed lines
- Quick security and quality check
- Provide go/no-go recommendation
- List must-fix issues

## Notes

- Always read code before making suggestions
- Consider project context and conventions
- Prioritize security and correctness over style
- Provide actionable, specific feedback
- Include positive feedback on good practices
- Be constructive, not just critical
