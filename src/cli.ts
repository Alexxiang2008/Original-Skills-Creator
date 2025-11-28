#!/usr/bin/env node

import { Command } from 'commander';
import chalk from 'chalk';
import ora from 'ora';
import boxen from 'boxen';
import { skillCreator } from './core/creator.js';
import { validateSkill, formatValidationResult } from './core/validator.js';
import { promptForSkillDetails, confirmAction } from './utils/prompt.js';
import { listTemplates } from './templates/index.js';
import path from 'path';

const program = new Command();

program
  .name('skill')
  .description('Claude Code Skills Creator - Create, validate, and manage skills')
  .version('1.0.0');

// Create command
program
  .command('create')
  .description('Create a new skill interactively')
  .option('-t, --template <type>', 'Template to use (development, content, custom)')
  .option('-o, --output <dir>', 'Output directory', process.cwd())
  .option('--no-marketplace', 'Skip marketplace.json creation')
  .option('--no-examples', 'Skip examples directory creation')
  .action(async (options) => {
    console.log(
      boxen(
        chalk.bold.cyan('🚀 Claude Skills Creator\n\n') +
        chalk.white('Let\'s create an amazing skill together!'),
        { padding: 1, margin: 1, borderStyle: 'round', borderColor: 'cyan' }
      )
    );

    try {
      const answers = await promptForSkillDetails();

      const spinner = ora('Creating skill structure...').start();

      const metadata = {
        name: answers.name,
        displayName: answers.displayName,
        description: answers.description,
        category: answers.category,
        author: answers.author,
        tools: answers.tools,
        tags: []
      };

      const skillDir = await skillCreator.createSkill(metadata, {
        template: options.template || answers.category,
        outputDir: options.output,
        includeMarketplace: options.marketplace && answers.includeMarketplace,
        includeExamples: options.examples && answers.includeExamples
      });

      spinner.succeed(chalk.green('Skill created successfully!'));

      console.log('\n' + boxen(
        chalk.bold('📁 Skill Location:\n') +
        chalk.cyan(skillDir) + '\n\n' +
        chalk.bold('📝 Files Created:\n') +
        '  ✓ SKILL.md\n' +
        '  ✓ README.md\n' +
        (options.marketplace && answers.includeMarketplace ? '  ✓ marketplace.json\n' : '') +
        (options.examples && answers.includeExamples ? '  ✓ examples/\n' : '') +
        '\n' +
        chalk.bold('🎯 Next Steps:\n') +
        '  1. Review and customize SKILL.md\n' +
        '  2. Add specific examples\n' +
        '  3. Test your skill with Claude\n' +
        '  4. Run: skill validate ' + path.basename(skillDir),
        { padding: 1, borderStyle: 'round', borderColor: 'green' }
      ));

    } catch (error) {
      console.error(chalk.red('Error creating skill:'), error);
      process.exit(1);
    }
  });

// Validate command
program
  .command('validate')
  .description('Validate a skill\'s structure and content')
  .argument('<path>', 'Path to skill directory or SKILL.md file')
  .action(async (skillPath) => {
    const spinner = ora('Validating skill...').start();

    try {
      const result = await validateSkill(skillPath);

      spinner.stop();

      const formatted = formatValidationResult(result);
      console.log('\n' + boxen(formatted, {
        padding: 1,
        borderStyle: 'round',
        borderColor: result.valid ? 'green' : 'red'
      }));

      if (!result.valid) {
        process.exit(1);
      }

    } catch (error) {
      spinner.fail(chalk.red('Validation failed'));
      console.error(chalk.red('Error:'), error);
      process.exit(1);
    }
  });

// Templates command
program
  .command('templates')
  .description('List available skill templates')
  .action(() => {
    console.log(
      boxen(
        chalk.bold.cyan('📚 Available Templates\n\n') +
        listTemplates()
          .map((t, i) =>
            chalk.bold(`${i + 1}. ${t.name}\n`) +
            chalk.gray(`   ${t.description}`)
          )
          .join('\n\n'),
        { padding: 1, margin: 1, borderStyle: 'round', borderColor: 'cyan' }
      )
    );
  });

// Info command
program
  .command('info')
  .description('Show information about skill creation best practices')
  .action(() => {
    console.log(
      boxen(
        chalk.bold.cyan('💡 Skill Creation Best Practices\n\n') +
        chalk.white('1. Clear Purpose\n') +
        chalk.gray('   Each skill should focus on one primary task\n\n') +
        chalk.white('2. Actionable Instructions\n') +
        chalk.gray('   Use step-by-step guides with clear actions\n\n') +
        chalk.white('3. Rich Examples\n') +
        chalk.gray('   Include 2-3 realistic examples\n\n') +
        chalk.white('4. Proper Tool Usage\n') +
        chalk.gray('   Specify which tools the skill needs\n\n') +
        chalk.white('5. Test Thoroughly\n') +
        chalk.gray('   Validate your skill works as expected\n\n') +
        chalk.cyan('Run "skill create" to get started!'),
        { padding: 1, margin: 1, borderStyle: 'round', borderColor: 'cyan' }
      )
    );
  });

// Install command (copy to ~/.claude/skills)
program
  .command('install')
  .description('Install a skill to Claude Code skills directory')
  .argument('<path>', 'Path to skill directory')
  .option('-n, --name <name>', 'Skill name (defaults to directory name)')
  .action(async (skillPath, options) => {
    const { execSync } = await import('child_process');
    const fs = await import('fs');
    const os = await import('os');

    try {
      const homeDir = os.homedir();
      const skillsDir = path.join(homeDir, '.claude', 'skills');
      const skillName = options.name || path.basename(skillPath);
      const targetPath = path.join(skillsDir, skillName);

      // Check if skills directory exists
      if (!fs.existsSync(skillsDir)) {
        const create = await confirmAction(
          `~/.claude/skills directory doesn't exist. Create it?`
        );
        if (create) {
          fs.mkdirSync(skillsDir, { recursive: true });
        } else {
          console.log(chalk.yellow('Installation cancelled'));
          return;
        }
      }

      // Check if skill already exists
      if (fs.existsSync(targetPath)) {
        const overwrite = await confirmAction(
          `Skill "${skillName}" already exists. Overwrite?`
        );
        if (!overwrite) {
          console.log(chalk.yellow('Installation cancelled'));
          return;
        }
      }

      const spinner = ora('Installing skill...').start();

      // Copy skill to skills directory
      execSync(`cp -r "${skillPath}" "${targetPath}"`, { stdio: 'pipe' });

      spinner.succeed(chalk.green('Skill installed successfully!'));

      console.log('\n' + boxen(
        chalk.bold('✓ Installed to:\n') +
        chalk.cyan(targetPath) + '\n\n' +
        chalk.bold('🎉 Your skill is now available in Claude Code!'),
        { padding: 1, borderStyle: 'round', borderColor: 'green' }
      ));

    } catch (error) {
      console.error(chalk.red('Installation failed:'), error);
      process.exit(1);
    }
  });

program.parse();
