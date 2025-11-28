import { SkillTemplate, SkillCategory } from '../types.js';

export const baseTemplate: SkillTemplate = {
  id: 'base',
  name: 'Base Template',
  description: 'Minimal template for creating custom skills from scratch',
  category: 'custom',
  capabilities: [
    'Customizable structure',
    'Flexible instructions',
    'Adaptable to any use case'
  ],
  defaultTools: ['Read', 'Write'],
  structure: {
    title: 'New Skill',
    description: 'A custom Claude Code skill',
    capabilities: [
      'Primary capability',
      'Secondary capability',
      'Additional capability'
    ],
    whenToUse: [
      'When users need specific functionality',
      'When working on related tasks'
    ],
    instructions: `## Instructions

### Main Workflow

1. **Step 1**: First action to take
   - Detailed instructions
   - Important considerations

2. **Step 2**: Next action
   - How to proceed
   - What to check

3. **Step 3**: Final actions
   - Completion criteria
   - Output format

### Error Handling

If errors occur:
- Check prerequisites
- Validate inputs
- Provide clear error messages
`,
    examples: [
      {
        title: 'Basic Usage',
        userRequest: 'Use this skill for a simple task',
        expectedBehavior: [
          'Understand the request',
          'Execute the main workflow',
          'Return the result'
        ]
      },
      {
        title: 'Advanced Usage',
        userRequest: 'Use this skill with complex parameters',
        expectedBehavior: [
          'Validate complex inputs',
          'Process step by step',
          'Handle edge cases',
          'Return detailed results'
        ]
      }
    ],
    notes: [
      'Important consideration 1',
      'Limitation or constraint',
      'Best practice recommendation'
    ]
  }
};

export function getBaseTemplate(): SkillTemplate {
  return baseTemplate;
}
