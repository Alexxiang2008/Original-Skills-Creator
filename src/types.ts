export interface SkillMetadata {
  name: string;
  displayName: string;
  description: string;
  author?: string;
  category?: SkillCategory;
  tags?: string[];
  tools?: string[];
  version?: string;
}

export type SkillCategory =
  | 'development'
  | 'content'
  | 'document'
  | 'api'
  | 'devops'
  | 'data'
  | 'custom';

export interface SkillTemplate {
  id: string;
  name: string;
  description: string;
  category: SkillCategory;
  capabilities: string[];
  defaultTools: string[];
  structure: SkillStructure;
}

export interface SkillStructure {
  title: string;
  description: string;
  capabilities: string[];
  whenToUse: string[];
  instructions: string;
  examples: SkillExample[];
  notes?: string[];
}

export interface SkillExample {
  title: string;
  userRequest: string;
  expectedBehavior: string[];
}

export interface ValidationResult {
  valid: boolean;
  errors: string[];
  warnings: string[];
  suggestions: string[];
}

export interface MarketplaceMetadata {
  name: string;
  displayName: string;
  version: string;
  description: string;
  author: {
    name: string;
    url?: string;
  };
  repository?: {
    type: string;
    url: string;
  };
  license: string;
  category: string;
  tags: string[];
  capabilities: string[];
  requirements: {
    tools: string[];
    optional_tools?: string[];
  };
}

export interface CreateSkillOptions {
  template?: SkillCategory;
  interactive?: boolean;
  outputDir?: string;
  includeMarketplace?: boolean;
  includeExamples?: boolean;
}
