import { SkillTemplate, SkillCategory } from '../types.js';
import { baseTemplate } from './base.js';
import { developmentTemplate } from './development.js';
import { contentTemplate } from './content.js';

const templates: Map<SkillCategory, SkillTemplate> = new Map([
  ['custom', baseTemplate],
  ['development', developmentTemplate],
  ['content', contentTemplate]
]);

export function getTemplate(category: SkillCategory): SkillTemplate {
  const template = templates.get(category);
  if (!template) {
    return baseTemplate;
  }
  return template;
}

export function getAllTemplates(): SkillTemplate[] {
  return Array.from(templates.values());
}

export function listTemplates(): { id: string; name: string; description: string }[] {
  return Array.from(templates.values()).map(t => ({
    id: t.id,
    name: t.name,
    description: t.description
  }));
}

export { baseTemplate, developmentTemplate, contentTemplate };
