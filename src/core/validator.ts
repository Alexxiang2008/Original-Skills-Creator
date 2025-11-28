import { ValidationResult } from '../types.js';
import { readFile } from '../utils/file.js';

interface SkillFileStructure {
  hasTitle: boolean;
  hasDescription: boolean;
  hasCapabilities: boolean;
  hasWhenToUse: boolean;
  hasInstructions: boolean;
  hasExamples: boolean;
  exampleCount: number;
}

export async function validateSkill(skillPath: string): Promise<ValidationResult> {
  const errors: string[] = [];
  const warnings: string[] = [];
  const suggestions: string[] = [];

  try {
    // Check if SKILL.md exists
    const skillMdPath = skillPath.endsWith('SKILL.md')
      ? skillPath
      : `${skillPath}/SKILL.md`;

    const content = await readFile(skillMdPath);

    if (!content) {
      errors.push('SKILL.md file is empty or could not be read');
      return { valid: false, errors, warnings, suggestions };
    }

    const structure = analyzeStructure(content);

    // Required sections validation
    if (!structure.hasTitle) {
      errors.push('Missing skill title (H1 heading)');
    }

    if (!structure.hasDescription) {
      errors.push('Missing Description section');
    }

    if (!structure.hasCapabilities) {
      warnings.push('Missing Capabilities section (recommended)');
    }

    if (!structure.hasWhenToUse) {
      warnings.push('Missing "When to Use" section (recommended)');
    }

    if (!structure.hasInstructions) {
      errors.push('Missing Instructions section');
    }

    if (!structure.hasExamples) {
      errors.push('Missing Examples section');
    } else if (structure.exampleCount < 2) {
      warnings.push(`Only ${structure.exampleCount} example(s) found. Recommend at least 2-3 examples`);
    }

    // Content quality checks
    const lines = content.split('\n');

    // Check for very short descriptions
    const descMatch = content.match(/## Description\s+([\s\S]*?)(?=\n##|$)/);
    if (descMatch && descMatch[1].trim().length < 50) {
      warnings.push('Description is very short. Consider adding more detail');
    }

    // Check for actionable instructions
    const instMatch = content.match(/## Instructions\s+([\s\S]*?)(?=\n##|$)/);
    if (instMatch) {
      const instructions = instMatch[1];
      if (!instructions.includes('1.') && !instructions.includes('- ')) {
        warnings.push('Instructions should include numbered steps or bullet points');
      }
    }

    // Check for example format
    if (structure.hasExamples) {
      const examplesSection = content.match(/## Examples\s+([\s\S]*?)(?=\n##|$)/);
      if (examplesSection) {
        const hasUserRequest = examplesSection[0].includes('User Request') ||
                               examplesSection[0].includes('**User');
        const hasExpectedBehavior = examplesSection[0].includes('Expected Behavior') ||
                                     examplesSection[0].includes('Behavior:');

        if (!hasUserRequest) {
          suggestions.push('Examples should include "User Request" sections');
        }
        if (!hasExpectedBehavior) {
          suggestions.push('Examples should include "Expected Behavior" sections');
        }
      }
    }

    // General suggestions
    if (content.length < 500) {
      suggestions.push('Skill content is quite brief. Consider adding more detail and examples');
    }

    // Check for marketplace.json
    try {
      const marketplacePath = skillPath.replace(/SKILL\.md$/, 'marketplace.json');
      await readFile(marketplacePath);
    } catch {
      suggestions.push('Consider adding marketplace.json for easier sharing');
    }

    const valid = errors.length === 0;

    return { valid, errors, warnings, suggestions };

  } catch (error) {
    errors.push(`Failed to read skill file: ${error instanceof Error ? error.message : 'Unknown error'}`);
    return { valid: false, errors, warnings, suggestions };
  }
}

function analyzeStructure(content: string): SkillFileStructure {
  const lines = content.split('\n');

  const structure: SkillFileStructure = {
    hasTitle: false,
    hasDescription: false,
    hasCapabilities: false,
    hasWhenToUse: false,
    hasInstructions: false,
    hasExamples: false,
    exampleCount: 0
  };

  // Check for H1 title
  structure.hasTitle = /^# .+/m.test(content);

  // Check for main sections
  structure.hasDescription = /^## Description/m.test(content);
  structure.hasCapabilities = /^## Capabilities/m.test(content);
  structure.hasWhenToUse = /^## When [Tt]o [Uu]se/m.test(content);
  structure.hasInstructions = /^## Instructions/m.test(content);
  structure.hasExamples = /^## Examples/m.test(content);

  // Count examples (H3 headings in Examples section)
  const examplesMatch = content.match(/## Examples\s+([\s\S]*?)(?=\n##|$)/);
  if (examplesMatch) {
    const examplesSection = examplesMatch[1];
    const exampleMatches = examplesSection.match(/^### /gm);
    structure.exampleCount = exampleMatches ? exampleMatches.length : 0;
  }

  return structure;
}

export function formatValidationResult(result: ValidationResult): string {
  const lines: string[] = [];

  if (result.valid) {
    lines.push('✓ Skill validation passed!');
  } else {
    lines.push('✗ Skill validation failed');
  }

  if (result.errors.length > 0) {
    lines.push('\nErrors:');
    result.errors.forEach(err => lines.push(`  ✗ ${err}`));
  }

  if (result.warnings.length > 0) {
    lines.push('\nWarnings:');
    result.warnings.forEach(warn => lines.push(`  ⚠ ${warn}`));
  }

  if (result.suggestions.length > 0) {
    lines.push('\nSuggestions:');
    result.suggestions.forEach(sug => lines.push(`  💡 ${sug}`));
  }

  return lines.join('\n');
}
