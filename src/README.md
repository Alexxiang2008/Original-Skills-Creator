# 源代码说明文档

本目录包含 Claude Skills Creator 的所有源代码实现。

## 📁 目录结构

```
src/
├── cli.ts              # CLI 入口程序
├── index.ts            # 库的主入口，导出公共 API
├── types.ts            # TypeScript 类型定义
├── core/               # 核心业务逻辑
│   ├── creator.ts      # Skill 创建器
│   └── validator.ts    # Skill 验证器
├── templates/          # Skill 模板定义
│   ├── index.ts        # 模板注册中心
│   ├── base.ts         # 基础模板
│   ├── development.ts  # 开发工具模板
│   └── content.ts      # 内容创作模板
└── utils/              # 工具函数
    ├── file.ts         # 文件操作工具
    └── prompt.ts       # 命令行交互工具
```

## 🔧 核心模块说明

### 1. CLI 模块 (`cli.ts`)

命令行界面的入口点，使用 Commander.js 实现。

**功能：**
- 定义所有 CLI 命令（create, validate, templates, info, install）
- 处理命令行参数和选项
- 调用核心模块执行具体功能
- 使用 Chalk、Ora、Boxen 美化输出

**主要命令：**
```typescript
skill create [options]     // 创建新 skill
skill validate <path>      // 验证 skill
skill templates            // 列出模板
skill info                 // 显示帮助
skill install <path>       // 安装 skill
```

### 2. 核心模块 (`core/`)

#### creator.ts - Skill 创建器

负责生成 skill 文件和目录结构。

**核心类：**
```typescript
class SkillCreator {
  // 创建 skill 的主方法
  async createSkill(metadata: SkillMetadata, options: CreateSkillOptions): Promise<string>

  // 生成 SKILL.md 文件
  private generateSkillMd(metadata: SkillMetadata, template: SkillTemplate): string

  // 生成 README.md
  private generateReadme(metadata: SkillMetadata): string

  // 生成 marketplace.json
  private generateMarketplace(metadata: SkillMetadata, template: SkillTemplate): MarketplaceMetadata

  // 从用户输入自定义 skill
  async customizeFromPrompts(prompts: {...}): Promise<SkillMetadata>
}
```

**工作流程：**
1. 接收 skill 元数据和选项
2. 根据模板生成 SKILL.md
3. 生成 README.md 和 marketplace.json
4. 创建 examples 目录（可选）
5. 返回生成的 skill 路径

#### validator.ts - Skill 验证器

验证 skill 的结构和内容完整性。

**主要函数：**
```typescript
// 验证 skill 结构
async function validateSkill(skillPath: string): Promise<ValidationResult>

// 分析 skill 文件结构
function analyzeStructure(content: string): SkillFileStructure

// 格式化验证结果
function formatValidationResult(result: ValidationResult): string
```

**验证内容：**
- ✅ SKILL.md 存在性
- ✅ 必需章节（Title, Description, Instructions, Examples）
- ✅ 示例数量（建议 2-3 个）
- ✅ 内容质量（描述长度、指令格式等）

### 3. 模板系统 (`templates/`)

#### 模板接口定义

所有模板都实现 `SkillTemplate` 接口：

```typescript
interface SkillTemplate {
  id: string;                    // 模板 ID
  name: string;                  // 显示名称
  description: string;           // 描述
  category: SkillCategory;       // 分类
  capabilities: string[];        // 功能列表
  defaultTools: string[];        // 默认工具
  structure: SkillStructure;     // skill 结构
}
```

#### 可用模板

**base.ts - 基础模板**
- 最小化的 skill 结构
- 适合完全自定义的场景
- 包含基本章节和示例

**development.ts - 开发工具模板**
- 代码分析和审查模式
- 测试生成工作流
- 最佳实践检查
- 包含代码审查示例

**content.ts - 内容创作模板**
- 内容生成工作流
- 文档结构模板
- SEO 优化指南
- 包含博客和文档生成示例

#### 添加新模板

1. 在 `templates/` 目录创建新文件，如 `api.ts`
2. 定义模板对象：
```typescript
import { SkillTemplate } from '../types.js';

export const apiTemplate: SkillTemplate = {
  id: 'api',
  name: 'API Integration',
  description: 'Template for API integration skills',
  category: 'api',
  capabilities: [
    'Call external APIs',
    'Handle authentication',
    'Process responses'
  ],
  defaultTools: ['Read', 'Write', 'WebFetch', 'Bash'],
  structure: {
    title: 'API Integration Skill',
    description: 'A skill for integrating with external APIs',
    capabilities: [...],
    whenToUse: [...],
    instructions: `...`,
    examples: [...],
    notes: [...]
  }
};
```

3. 在 `templates/index.ts` 中注册：
```typescript
import { apiTemplate } from './api.js';

const templates: Map<SkillCategory, SkillTemplate> = new Map([
  ['custom', baseTemplate],
  ['development', developmentTemplate],
  ['content', contentTemplate],
  ['api', apiTemplate], // 新增
]);
```

### 4. 工具模块 (`utils/`)

#### file.ts - 文件操作

提供文件系统操作的封装：

```typescript
// 读取文件
async function readFile(filePath: string): Promise<string>

// 写入文件
async function writeFile(filePath: string, content: string): Promise<void>

// 确保目录存在
async function ensureDirectory(dirPath: string): Promise<void>

// 检查文件是否存在
async function fileExists(filePath: string): Promise<boolean>

// 列出目录文件
async function listFiles(dirPath: string, pattern?: RegExp): Promise<string[]>

// 解析 ~ 路径
function resolveHome(filepath: string): string
```

#### prompt.ts - 交互提示

使用 Inquirer.js 实现命令行交互：

```typescript
// 提示用户输入 skill 详细信息
async function promptForSkillDetails(): Promise<{...}>

// 选择模板
async function promptForTemplate(): Promise<SkillCategory>

// 确认操作
async function confirmAction(message: string): Promise<boolean>
```

### 5. 类型系统 (`types.ts`)

定义所有 TypeScript 类型：

```typescript
// Skill 元数据
interface SkillMetadata {
  name: string;
  displayName: string;
  description: string;
  author?: string;
  category?: SkillCategory;
  tags?: string[];
  tools?: string[];
  version?: string;
}

// Skill 分类
type SkillCategory =
  | 'development'
  | 'content'
  | 'document'
  | 'api'
  | 'devops'
  | 'data'
  | 'custom';

// Skill 模板
interface SkillTemplate { ... }

// 验证结果
interface ValidationResult {
  valid: boolean;
  errors: string[];
  warnings: string[];
  suggestions: string[];
}

// 更多类型定义...
```

## 🔨 开发指南

### 环境准备

```bash
# 安装依赖
npm install

# 开发模式（自动重新编译）
npm run dev

# 构建
npm run build

# 代码检查
npm run lint

# 代码格式化
npm run format
```

### 开发流程

1. **修改代码**
   - 在 `src/` 目录下修改 TypeScript 文件
   - 确保代码符合 ESLint 规则

2. **测试**
   ```bash
   # 构建
   npm run build

   # 测试 CLI
   npm start create
   npm start validate ./test-skill
   ```

3. **提交**
   ```bash
   git add .
   git commit -m "feat: your feature description"
   ```

### 代码规范

#### TypeScript 规范

- 使用 ES2022 模块语法
- 所有导入使用 `.js` 扩展名（ESM 要求）
- 优先使用 `async/await` 而非 Promise
- 使用接口定义数据结构
- 导出的函数添加 JSDoc 注释

**示例：**
```typescript
/**
 * 创建一个新的 skill
 * @param metadata Skill 元数据
 * @param options 创建选项
 * @returns 创建的 skill 路径
 */
export async function createSkill(
  metadata: SkillMetadata,
  options: CreateSkillOptions = {}
): Promise<string> {
  // 实现...
}
```

#### 文件命名

- TypeScript 文件：`kebab-case.ts`
- 接口/类型：`PascalCase`
- 函数/变量：`camelCase`
- 常量：`UPPER_SNAKE_CASE`

#### 错误处理

使用明确的错误消息：

```typescript
try {
  await writeFile(path, content);
} catch (error) {
  throw new Error(
    `Failed to write file ${path}: ${error instanceof Error ? error.message : 'Unknown error'}`
  );
}
```

### 调试技巧

#### 1. 使用 console.log

```typescript
console.log('Debug:', { metadata, options });
```

#### 2. 使用 Node.js 调试器

```bash
node --inspect-brk dist/cli.js create
```

然后在 Chrome 打开 `chrome://inspect`

#### 3. 测试单个模块

```typescript
// test.ts
import { validateSkill } from './src/core/validator.js';

const result = await validateSkill('./test-skill');
console.log(result);
```

```bash
npx tsx test.ts
```

## 🧪 测试

### 手动测试

```bash
# 测试创建功能
npm start create -- --template development --output ./test-output

# 测试验证功能
npm start validate ./test-output/test-skill

# 测试模板列表
npm start templates
```

### 自动化测试（计划中）

```typescript
// tests/creator.test.ts
import { skillCreator } from '../src/core/creator.js';

describe('SkillCreator', () => {
  it('should create a skill with valid metadata', async () => {
    const metadata = {
      name: 'test-skill',
      displayName: 'Test Skill',
      description: 'A test skill'
    };

    const path = await skillCreator.createSkill(metadata);
    expect(path).toBeDefined();
  });
});
```

## 📚 依赖说明

### 生产依赖

- **commander** (^12.0.0) - CLI 框架
- **inquirer** (^9.2.0) - 交互式命令行
- **chalk** (^5.3.0) - 终端文字着色
- **ora** (^8.0.0) - 终端加载动画
- **boxen** (^7.1.0) - 终端框框输出
- **mustache** (^4.2.0) - 模板引擎（未来使用）
- **yaml** (^2.3.0) - YAML 解析（未来使用）
- **zod** (^3.22.0) - 数据验证（未来使用）

### 开发依赖

- **typescript** (^5.3.0) - TypeScript 编译器
- **@types/node** (^20.11.0) - Node.js 类型定义
- **eslint** (^8.56.0) - 代码检查
- **prettier** (^3.2.0) - 代码格式化

## 🔄 构建过程

TypeScript 编译配置（tsconfig.json）：

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ES2022",
    "moduleResolution": "node",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true
  }
}
```

构建输出：

```
dist/
├── cli.js              # CLI 入口
├── cli.js.map
├── index.js            # 库入口
├── index.js.map
├── types.js
├── types.js.map
├── core/
│   ├── creator.js
│   └── validator.js
├── templates/
│   └── ...
└── utils/
    └── ...
```

## 🚀 发布流程

1. **更新版本号**
   ```bash
   npm version patch  # 1.0.0 -> 1.0.1
   npm version minor  # 1.0.0 -> 1.1.0
   npm version major  # 1.0.0 -> 2.0.0
   ```

2. **构建**
   ```bash
   npm run build
   ```

3. **测试**
   ```bash
   npm start create
   npm start validate ./test-skill
   ```

4. **发布到 npm**
   ```bash
   npm publish
   ```

## 💡 贡献建议

### 添加新功能

1. 在相应模块添加代码
2. 更新类型定义
3. 添加文档注释
4. 测试功能
5. 更新 CHANGELOG.md

### 修复 Bug

1. 定位问题代码
2. 编写修复
3. 测试修复效果
4. 提交 PR

### 改进文档

1. 更新代码注释
2. 更新 README
3. 添加使用示例

## 📞 联系方式

如有问题或建议，欢迎：

- 提交 Issue
- 创建 Pull Request
- 参与 Discussions

---

**Happy Coding! 🎉**
