import inquirer from 'inquirer';
import { SkillCategory } from '../types.js';

export async function promptForSkillDetails() {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'displayName',
      message: 'What is the display name of your skill?',
      validate: (input: string) => input.length > 0 || 'Display name is required'
    },
    {
      type: 'input',
      name: 'name',
      message: 'What is the folder name (kebab-case)?',
      default: (answers: { displayName: string }) =>
        answers.displayName.toLowerCase().replace(/\s+/g, '-'),
      validate: (input: string) => /^[a-z0-9-]+$/.test(input) || 'Use lowercase letters, numbers, and hyphens only'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Brief description (one line):',
      validate: (input: string) => input.length > 0 || 'Description is required'
    },
    {
      type: 'list',
      name: 'category',
      message: 'Select a category:',
      choices: [
        { name: 'Development Tools - Code, testing, review', value: 'development' },
        { name: 'Content Creation - Writing, docs, blogging', value: 'content' },
        { name: 'Document Processing - PDF, Excel, CSV', value: 'document' },
        { name: 'API Integration - REST, GraphQL, webhooks', value: 'api' },
        { name: 'DevOps - CI/CD, deployment, monitoring', value: 'devops' },
        { name: 'Data Analysis - Processing, visualization', value: 'data' },
        { name: 'Custom - Start from scratch', value: 'custom' }
      ]
    },
    {
      type: 'input',
      name: 'mainPurpose',
      message: 'What is the main purpose of this skill?',
      validate: (input: string) => input.length > 0 || 'Main purpose is required'
    },
    {
      type: 'checkbox',
      name: 'tools',
      message: 'Which Claude Code tools will this skill use?',
      choices: [
        { name: 'Read - Read files', value: 'Read', checked: true },
        { name: 'Write - Write files', value: 'Write', checked: true },
        { name: 'Edit - Edit files', value: 'Edit' },
        { name: 'Grep - Search content', value: 'Grep' },
        { name: 'Glob - Find files', value: 'Glob' },
        { name: 'Bash - Run commands', value: 'Bash' },
        { name: 'WebSearch - Search web', value: 'WebSearch' },
        { name: 'WebFetch - Fetch URLs', value: 'WebFetch' }
      ]
    },
    {
      type: 'input',
      name: 'author',
      message: 'Author name:',
      default: 'Your Name'
    },
    {
      type: 'confirm',
      name: 'includeMarketplace',
      message: 'Include marketplace.json for sharing?',
      default: true
    },
    {
      type: 'confirm',
      name: 'includeExamples',
      message: 'Create examples directory?',
      default: true
    }
  ]);

  return answers;
}

export async function promptForTemplate(): Promise<SkillCategory> {
  const { template } = await inquirer.prompt([
    {
      type: 'list',
      name: 'template',
      message: 'Select a template to start with:',
      choices: [
        { name: 'Development Tools', value: 'development' },
        { name: 'Content Creation', value: 'content' },
        { name: 'Custom (blank)', value: 'custom' }
      ]
    }
  ]);

  return template;
}

export async function confirmAction(message: string): Promise<boolean> {
  const { confirmed } = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'confirmed',
      message,
      default: false
    }
  ]);

  return confirmed;
}
