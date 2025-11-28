# Contributing to Claude Skills Creator

Thank you for your interest in contributing! This document provides guidelines for contributing to the project.

## Code of Conduct

- Be respectful and inclusive
- Welcome newcomers and help them learn
- Focus on constructive feedback
- Respect different viewpoints and experiences

## How to Contribute

### Reporting Bugs

If you find a bug:

1. Check if it's already reported in [Issues](https://github.com/Alexxiang2008/Original-Skills-Creator/issues)
2. If not, create a new issue with:
   - Clear title and description
   - Steps to reproduce
   - Expected vs actual behavior
   - Your environment (OS, Node version, etc.)
   - Screenshots if applicable

### Suggesting Features

For feature requests:

1. Check existing issues and discussions
2. Create an issue describing:
   - The problem you're trying to solve
   - Your proposed solution
   - Alternative solutions considered
   - Examples of how it would work

### Contributing Code

#### Setup

```bash
# Fork and clone the repository
git clone https://github.com/YOUR-USERNAME/Original-Skills-Creator.git
cd Original-Skills-Creator

# Install dependencies
npm install

# Build the project
npm run build
```

#### Development Workflow

1. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Write clean, readable code
   - Follow existing code style
   - Add comments for complex logic
   - Update tests if needed

3. **Test your changes**
   ```bash
   # Build
   npm run build

   # Test locally
   npm start

   # Run linter
   npm run lint
   ```

4. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add amazing feature"
   ```

   Follow [Conventional Commits](https://www.conventionalcommits.org/):
   - `feat:` New feature
   - `fix:` Bug fix
   - `docs:` Documentation changes
   - `style:` Code style changes
   - `refactor:` Code refactoring
   - `test:` Test changes
   - `chore:` Maintenance tasks

5. **Push and create PR**
   ```bash
   git push origin feature/your-feature-name
   ```

   Then create a Pull Request on GitHub.

#### Code Style

- Use TypeScript for all source code
- Follow ESLint and Prettier configurations
- Use meaningful variable and function names
- Add JSDoc comments for public APIs
- Keep functions focused and small
- Use async/await over promises

#### Adding Templates

To add a new skill template:

1. Create template file in `src/templates/`
2. Define the template structure:
   ```typescript
   export const myTemplate: SkillTemplate = {
     id: 'my-template',
     name: 'My Template',
     description: 'Description',
     category: 'custom',
     capabilities: [...],
     defaultTools: [...],
     structure: { ... }
   };
   ```

3. Export from `src/templates/index.ts`
4. Add template documentation to `docs/templates.md`
5. Create example skill in `examples/`

#### Adding Features

When adding new features:

- Update relevant documentation
- Add examples if applicable
- Update README if it affects usage
- Consider backward compatibility
- Add tests if possible

### Contributing Documentation

Documentation improvements are always welcome:

- Fix typos or unclear explanations
- Add examples or use cases
- Improve existing guides
- Translate documentation

### Contributing Templates and Examples

To contribute skill templates or examples:

1. Create the skill following best practices
2. Test it thoroughly
3. Add comprehensive documentation
4. Submit as a PR with:
   - Template/example files
   - Documentation
   - Usage examples
   - Test cases

## Pull Request Process

1. **Update documentation** - Keep docs in sync with code changes
2. **Test thoroughly** - Ensure your changes work correctly
3. **Keep it focused** - One feature/fix per PR
4. **Write good descriptions** - Explain what and why
5. **Be responsive** - Address review feedback promptly

## Code Review

All submissions require review. We look for:

- Code quality and style
- Functionality and correctness
- Test coverage
- Documentation completeness
- Security considerations
- Performance impact

## Getting Help

- Check [documentation](./docs/)
- Search [existing issues](https://github.com/Alexxiang2008/Original-Skills-Creator/issues)
- Ask in discussions
- Reach out to maintainers

## Recognition

Contributors will be:
- Listed in CONTRIBUTORS.md
- Mentioned in release notes
- Credited in documentation

Thank you for contributing to Claude Skills Creator! 🎉
