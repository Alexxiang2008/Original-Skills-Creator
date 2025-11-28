import { SkillMetadata, SkillTemplate, SkillCategory, CreateSkillOptions, MarketplaceMetadata } from '../types.js';
import { getTemplate } from '../templates/index.js';
import { writeFile, ensureDirectory } from '../utils/file.js';
import path from 'path';

export class SkillCreator {
  async createSkill(
    metadata: SkillMetadata,
    options: CreateSkillOptions = {}
  ): Promise<string> {
    const {
      template = 'custom',
      outputDir = process.cwd(),
      includeMarketplace = true,
      includeExamples = true
    } = options;

    const skillDir = path.join(outputDir, metadata.name);
    await ensureDirectory(skillDir);

    // Get template
    const templateData = getTemplate(metadata.category || template);

    // Generate SKILL.md
    const skillContent = this.generateSkillMd(metadata, templateData);
    await writeFile(path.join(skillDir, 'SKILL.md'), skillContent);

    // Generate README.md
    const readmeContent = this.generateReadme(metadata);
    await writeFile(path.join(skillDir, 'README.md'), readmeContent);

    // Generate marketplace.json
    if (includeMarketplace) {
      const marketplaceContent = this.generateMarketplace(metadata, templateData);
      await writeFile(
        path.join(skillDir, 'marketplace.json'),
        JSON.stringify(marketplaceContent, null, 2)
      );
    }

    // Create examples directory
    if (includeExamples) {
      const examplesDir = path.join(skillDir, 'examples');
      await ensureDirectory(examplesDir);

      const exampleContent = this.generateExampleFile(metadata);
      await writeFile(path.join(examplesDir, 'basic-usage.md'), exampleContent);
    }

    return skillDir;
  }

  private generateSkillMd(metadata: SkillMetadata, template: SkillTemplate): string {
    const { displayName, description, category } = metadata;
    const struct = template.structure;

    const sections: string[] = [];

    // Title and description
    sections.push(`# ${displayName}\n`);
    sections.push(`${description}\n`);

    // Description section
    sections.push('## Description\n');
    sections.push(`${struct.description}\n`);

    // Capabilities
    sections.push('## Capabilities\n');
    struct.capabilities.forEach(cap => {
      sections.push(`- ${cap}`);
    });
    sections.push('');

    // When to Use
    sections.push('## When to Use\n');
    sections.push('Use this skill when:\n');
    struct.whenToUse.forEach(scenario => {
      sections.push(`- ${scenario}`);
    });
    sections.push('');

    // Instructions
    sections.push('## Instructions\n');
    sections.push(struct.instructions);
    sections.push('');

    // Examples
    sections.push('## Examples\n');
    struct.examples.forEach((example, index) => {
      sections.push(`### Example ${index + 1}: ${example.title}\n`);
      sections.push(`**User Request:**`);
      sections.push(`"${example.userRequest}"\n`);
      sections.push(`**Expected Behavior:**`);
      example.expectedBehavior.forEach(behavior => {
        sections.push(`- ${behavior}`);
      });
      sections.push('');
    });

    // Notes
    if (struct.notes && struct.notes.length > 0) {
      sections.push('## Notes\n');
      struct.notes.forEach(note => {
        sections.push(`- ${note}`);
      });
      sections.push('');
    }

    return sections.join('\n');
  }

  private generateReadme(metadata: SkillMetadata): string {
    const { displayName, description, name } = metadata;

    return `# ${displayName}

${description}

## Installation

### As a Claude Skill

\`\`\`bash
# Clone into your Claude skills directory
git clone <repository-url> ~/.claude/skills/${name}
\`\`\`

### Standalone Usage

\`\`\`bash
# Install dependencies
npm install

# Build
npm run build
\`\`\`

## Usage

Once installed, Claude Code will automatically recognize this skill. You can trigger it by asking:

- "Use ${displayName} to..."
- "Help me with..."
- (Add specific trigger phrases here)

## Examples

See the \`examples/\` directory for detailed usage examples.

## Configuration

(Add any configuration options here)

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.

## License

${metadata.version || 'MIT'}

## Author

${metadata.author || 'Your Name'}
`;
  }

  private generateMarketplace(metadata: SkillMetadata, template: SkillTemplate): MarketplaceMetadata {
    return {
      name: metadata.name,
      displayName: metadata.displayName,
      version: metadata.version || '1.0.0',
      description: metadata.description,
      author: {
        name: metadata.author || 'Your Name',
        url: ''
      },
      license: 'MIT',
      category: metadata.category || 'custom',
      tags: metadata.tags || [],
      capabilities: template.structure.capabilities,
      requirements: {
        tools: metadata.tools || template.defaultTools,
        optional_tools: []
      }
    };
  }

  private generateExampleFile(metadata: SkillMetadata): string {
    return `# Basic Usage Example

## Scenario

(Describe a common use case for this skill)

## User Request

\`\`\`
(Example request that triggers this skill)
\`\`\`

## Expected Output

\`\`\`
(What the user should see as output)
\`\`\`

## Step-by-Step

1. User makes a request
2. Skill analyzes the request
3. Skill executes actions
4. Skill returns results

## Notes

- Important consideration 1
- Important consideration 2
`;
  }

  async customizeFromPrompts(prompts: {
    name: string;
    displayName: string;
    description: string;
    category: SkillCategory;
    mainPurpose: string;
    tools: string[];
    examples: string[];
  }): Promise<SkillMetadata> {
    return {
      name: prompts.name,
      displayName: prompts.displayName,
      description: prompts.description,
      category: prompts.category,
      tools: prompts.tools,
      tags: this.generateTags(prompts.category, prompts.mainPurpose)
    };
  }

  private generateTags(category: SkillCategory, purpose: string): string[] {
    const tags: string[] = [category];

    const purposeLower = purpose.toLowerCase();
    if (purposeLower.includes('code')) tags.push('coding');
    if (purposeLower.includes('test')) tags.push('testing');
    if (purposeLower.includes('doc')) tags.push('documentation');
    if (purposeLower.includes('api')) tags.push('api');
    if (purposeLower.includes('data')) tags.push('data');

    return tags;
  }
}

export const skillCreator = new SkillCreator();
