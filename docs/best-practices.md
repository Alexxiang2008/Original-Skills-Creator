# Claude Code Skills Best Practices

A comprehensive guide to creating high-quality, reliable skills.

## Core Principles

### 1. Single Responsibility

Each skill should do ONE thing well.

**Good:**
```markdown
# CSV Processor
Reads and processes CSV files
```

**Bad:**
```markdown
# Data Tool
Processes CSV, JSON, XML, does analysis, creates charts, sends emails...
```

**Why:** Focused skills are easier to understand, maintain, and trigger correctly.

### 2. Clear Triggering

Make it obvious when the skill should activate.

**Good:**
```markdown
## When to Use

Use this skill when:
- User asks to process CSV files
- User uploads a .csv file
- User needs CSV data analysis
```

**Bad:**
```markdown
## When to Use

When working with data
```

**Why:** Claude needs clear signals to know when to use your skill.

### 3. Actionable Instructions

Write instructions Claude can execute directly.

**Good:**
```markdown
1. Use Glob tool to find CSV files: `**/*.csv`
2. Use Read tool to load the first CSV file
3. Parse the CSV content using JavaScript
4. Extract column headers from the first row
```

**Bad:**
```markdown
1. Find the files
2. Load them
3. Do some processing
```

**Why:** Specific instructions reduce errors and improve reliability.

## Skill Structure

### Title

- Use title case
- Be descriptive but concise
- Avoid generic names like "Helper" or "Tool"

```markdown
# CSV Data Analyzer
✓ Clear, specific

# Data Tool
✗ Too generic
```

### Description

- 1-3 sentences
- Explain purpose and value
- Include key capabilities

```markdown
Analyzes CSV files to extract insights, generate statistics,
and create visualized reports. Handles large files efficiently
and supports multiple CSV formats.
```

### Capabilities

- List 3-7 key capabilities
- Use action verbs
- Be specific

```markdown
## Capabilities

- Parse CSV files with various delimiters and encodings
- Generate statistical summaries (mean, median, mode)
- Detect and handle missing data
- Create visual charts and graphs
- Export results in multiple formats
```

### When to Use

- List specific triggering scenarios
- Include example phrases users might say
- Cover main use cases

```markdown
## When to Use

Use this skill when:
- User asks to "analyze this CSV file"
- User wants statistics from tabular data
- User needs to visualize CSV data
- File with .csv extension is uploaded
```

### Instructions

#### Structure

- Use clear headings (###, ###)
- Number main steps (1., 2., 3.)
- Include sub-steps with bullets (-)
- Add code examples where helpful

```markdown
## Instructions

### Main Workflow

1. **Locate CSV File**
   - Ask user for file path if not provided
   - Use Glob to find .csv files if directory given
   - Confirm file selection with user

2. **Load and Parse**
   - Use Read tool to load file content
   - Detect delimiter (comma, semicolon, tab)
   - Parse into rows and columns
   - Extract headers from first row

3. **Analysis**
   - For numeric columns:
     - Calculate mean, median, mode
     - Find min, max, range
     - Detect outliers
   - For text columns:
     - Count unique values
     - Identify most common values
```

#### Error Handling

Always include error handling:

```markdown
### Error Handling

If file reading fails:
- Check if file exists
- Verify read permissions
- Confirm file is valid CSV

If parsing fails:
- Try different delimiters
- Check for malformed rows
- Report specific line numbers with issues
```

#### Special Cases

Cover edge cases and variations:

```markdown
### Special Cases

#### Large Files (>100MB)
- Process in chunks
- Show progress updates
- Offer to sample instead

#### Non-standard CSV
- Detect custom delimiters
- Handle quoted fields with commas
- Process multi-line fields
```

### Examples

#### Quantity

- Minimum: 2 examples
- Recommended: 3-4 examples
- Cover simple to complex cases

#### Format

```markdown
### Example 1: Basic Analysis

**User Request:**
"Analyze sales-data.csv"

**Expected Behavior:**
1. Read sales-data.csv
2. Parse CSV content
3. Calculate total sales, average, trends
4. Generate summary report
5. Offer to create visualizations
```

#### Quality

- Use realistic scenarios
- Include actual user phrases
- Show step-by-step behavior
- Cover edge cases

```markdown
### Example 2: Handling Errors

**User Request:**
"Process the CSV in /data/"

**Expected Behavior:**
1. Search /data/ directory for CSV files
2. Find multiple CSV files
3. List found files and ask which to process
4. If user selects invalid file, show error and ask again
```

## Tool Usage

### Choosing Tools

Select the minimum tools needed:

```markdown
## Required Tools
- Read: Load CSV files
- Write: Save analysis reports

## Optional Tools
- Glob: Find CSV files in directories
- Bash: Run external CSV tools if needed
```

### Best Practices

#### Read Tool

```markdown
✓ Use Read for file contents
✗ Don't use Bash cat unless necessary

Example:
1. Use Read tool on data.csv
2. Parse content line by line
```

#### Write Tool

```markdown
✓ Use Write for new files
✓ Use Edit for modifying existing files
✗ Don't use Bash echo > unless necessary
```

#### Bash Tool

```markdown
✓ Use for system commands
✓ Use for external tools
✗ Don't use for file operations
✗ Don't use when built-in tools work

Good: Use Bash to run `csvstat data.csv`
Bad: Use Bash to `cat data.csv`
```

## Quality Checklist

Before finalizing your skill:

### Structure
- [ ] Clear, descriptive title
- [ ] Detailed description (2-3 sentences)
- [ ] 3-7 specific capabilities listed
- [ ] Clear "When to Use" scenarios
- [ ] Step-by-step instructions
- [ ] At least 2 realistic examples
- [ ] Error handling included

### Content
- [ ] Instructions are actionable
- [ ] Tool usage is explicit
- [ ] Examples show expected behavior
- [ ] Edge cases are covered
- [ ] Security considerations included

### Testing
- [ ] All examples tested
- [ ] Error cases verified
- [ ] Tool calls work correctly
- [ ] No security vulnerabilities

### Documentation
- [ ] README.md created
- [ ] Installation instructions clear
- [ ] Usage examples provided
- [ ] marketplace.json completed (if sharing)

## Common Mistakes

### 1. Vague Instructions

**Bad:**
```markdown
Process the data and return results
```

**Good:**
```markdown
1. Use Read tool to load data.json
2. Parse JSON into JavaScript object
3. Extract 'users' array from object
4. Calculate total users
5. Format result as: "Total users: N"
```

### 2. Missing Error Handling

**Bad:**
```markdown
Read the file and process it
```

**Good:**
```markdown
1. Try to read file with Read tool
2. If file not found:
   - List available files
   - Ask user to confirm path
3. If file is empty:
   - Inform user
   - Ask if they want to create sample data
```

### 3. Overly Complex Skills

**Bad:**
```markdown
# Ultimate Developer Tool

Does code review, testing, deployment, monitoring,
documentation, and makes coffee
```

**Good:**
```markdown
# Code Reviewer

Analyzes code for security, performance, and best practices

(Separate skills for testing, deployment, etc.)
```

### 4. Poor Examples

**Bad:**
```markdown
### Example

User: "Do the thing"
Skill: Does it
```

**Good:**
```markdown
### Example 1: Review Pull Request

**User Request:**
"Review PR #123 for security issues"

**Expected Behavior:**
1. Use gh CLI to fetch PR #123 changes
2. Identify changed files
3. Read each changed file
4. Analyze for OWASP Top 10 vulnerabilities
5. Report findings with file:line references
6. Suggest specific fixes
```

## Performance Tips

### 1. Minimize Tool Calls

```markdown
✓ Read file once, process in memory
✗ Read file multiple times

Good:
1. Read data.json (1 tool call)
2. Process in JavaScript
3. Return results

Bad:
1. Read data.json to count items
2. Read data.json to get names
3. Read data.json to calculate totals
(3 tool calls for same file!)
```

### 2. Use Appropriate Tools

```markdown
✓ Use Glob for pattern matching
✗ Use Bash find

✓ Use Grep for content search
✗ Use Bash grep

Why: Built-in tools are optimized and safer
```

### 3. Handle Large Data

```markdown
For files > 100MB:
1. Offer to process in chunks
2. Show progress updates
3. Consider sampling options
4. Warn about memory usage
```

## Security

### Input Validation

```markdown
Always validate:
- File paths (no ../../../etc/passwd)
- User inputs (sanitize for commands)
- URLs (check domains)
- File types (verify extensions)
```

### Safe Operations

```markdown
✓ Use Read/Write tools
✗ Use Bash with user input
✗ Execute arbitrary code
✗ Access sensitive files

Never:
- Execute unvalidated user code
- Access files outside workspace
- Make network requests to arbitrary URLs
- Store or expose credentials
```

## Conclusion

Great skills are:
- **Focused**: One clear purpose
- **Clear**: Easy to understand and use
- **Reliable**: Handle errors gracefully
- **Safe**: Validate inputs, use tools correctly
- **Documented**: Rich examples and instructions

Follow these practices and your skills will be valuable additions to the Claude Code ecosystem!
