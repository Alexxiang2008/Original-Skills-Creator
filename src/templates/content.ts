import { SkillTemplate } from '../types.js';

export const contentTemplate: SkillTemplate = {
  id: 'content',
  name: 'Content Creation',
  description: 'Template for creating skills related to writing, documentation, and content generation',
  category: 'content',
  capabilities: [
    'Generate high-quality written content',
    'Create documentation and guides',
    'Format and structure content',
    'Optimize for readability and SEO'
  ],
  defaultTools: ['Read', 'Write', 'WebSearch'],
  structure: {
    title: 'Content Creation Skill',
    description: 'A skill for generating and managing written content',
    capabilities: [
      'Create blog posts, articles, and documentation',
      'Generate content outlines and structures',
      'Optimize content for target audience',
      'Format content in multiple formats (Markdown, HTML, etc.)'
    ],
    whenToUse: [
      'When creating blog posts or articles',
      'When generating technical documentation',
      'When writing user guides or tutorials',
      'When optimizing existing content'
    ],
    instructions: `## Instructions

### Content Generation Workflow

1. **Understand Requirements**
   - Clarify topic and purpose
   - Identify target audience
   - Determine desired format and length
   - Ask about tone and style preferences

2. **Research (if needed)**
   - Use WebSearch for current information
   - Read existing related content
   - Gather facts and references
   - Verify accuracy of information

3. **Create Outline**
   - Structure main sections
   - Plan logical flow
   - Identify key points for each section
   - Present outline for approval

4. **Generate Content**
   - Write engaging introduction
   - Develop each section with detail
   - Use clear, accessible language
   - Include examples and code snippets if relevant
   - Add compelling conclusion

5. **Format and Polish**
   - Apply proper Markdown formatting
   - Add headings hierarchy
   - Include lists and tables where appropriate
   - Ensure consistent style

### Documentation Workflow

1. **Analyze Subject**
   - Read relevant code or materials
   - Identify key concepts to document
   - Determine documentation type needed

2. **Structure Documentation**
   - Getting started section
   - Core concepts explanation
   - API reference or usage guide
   - Examples and tutorials
   - Troubleshooting section

3. **Write Clear Explanations**
   - Use simple language
   - Define technical terms
   - Provide context and examples
   - Include code snippets with comments

4. **Add Metadata**
   - Table of contents
   - Cross-references
   - External links
   - Version information

### Content Optimization

1. **Readability**
   - Use short paragraphs
   - Break up long sections
   - Add subheadings
   - Include visual breaks (lists, code blocks)

2. **SEO (if applicable)**
   - Include relevant keywords naturally
   - Use descriptive headings
   - Add meta descriptions
   - Internal and external linking

3. **Accessibility**
   - Clear language
   - Logical structure
   - Descriptive link text
   - Alt text for images

## Content Quality Standards

- Accuracy: All facts must be correct and current
- Clarity: Ideas expressed simply and directly
- Completeness: Cover topic thoroughly
- Consistency: Maintain tone and style throughout
- Engagement: Keep reader interested
`,
    examples: [
      {
        title: 'Blog Post Creation',
        userRequest: 'Write a blog post about TypeScript best practices',
        expectedBehavior: [
          'Ask about target audience and length',
          'Create outline with main sections',
          'Research current TypeScript practices',
          'Write engaging content with code examples',
          'Format in Markdown with proper headings',
          'Include introduction and conclusion'
        ]
      },
      {
        title: 'API Documentation',
        userRequest: 'Generate API documentation for the UserController',
        expectedBehavior: [
          'Read UserController code',
          'Extract endpoints and methods',
          'Document parameters and return types',
          'Add usage examples for each endpoint',
          'Include authentication requirements',
          'Format as structured API reference'
        ]
      },
      {
        title: 'Tutorial Creation',
        userRequest: 'Create a tutorial for setting up authentication',
        expectedBehavior: [
          'Outline step-by-step process',
          'Start with prerequisites',
          'Provide detailed instructions for each step',
          'Include code snippets and screenshots',
          'Add troubleshooting section',
          'End with next steps or advanced topics'
        ]
      }
    ],
    notes: [
      'Always verify facts before publishing',
      'Tailor tone and complexity to audience',
      'Use active voice when possible',
      'Include practical examples',
      'Keep content up-to-date',
      'Cite sources when using external information'
    ]
  }
};

export function getContentTemplate(): SkillTemplate {
  return contentTemplate;
}
