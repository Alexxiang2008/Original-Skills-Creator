import { promises as fs } from 'fs';
import path from 'path';

export async function readFile(filePath: string): Promise<string> {
  try {
    return await fs.readFile(filePath, 'utf-8');
  } catch (error) {
    throw new Error(`Failed to read file ${filePath}: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

export async function writeFile(filePath: string, content: string): Promise<void> {
  try {
    await fs.writeFile(filePath, content, 'utf-8');
  } catch (error) {
    throw new Error(`Failed to write file ${filePath}: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

export async function ensureDirectory(dirPath: string): Promise<void> {
  try {
    await fs.mkdir(dirPath, { recursive: true });
  } catch (error) {
    throw new Error(`Failed to create directory ${dirPath}: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

export async function fileExists(filePath: string): Promise<boolean> {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

export async function listFiles(dirPath: string, pattern?: RegExp): Promise<string[]> {
  try {
    const entries = await fs.readdir(dirPath, { withFileTypes: true });
    const files = entries
      .filter(entry => entry.isFile())
      .map(entry => entry.name);

    if (pattern) {
      return files.filter(file => pattern.test(file));
    }

    return files;
  } catch (error) {
    throw new Error(`Failed to list files in ${dirPath}: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

export function resolveHome(filepath: string): string {
  if (filepath.startsWith('~/')) {
    return path.join(process.env.HOME || process.env.USERPROFILE || '', filepath.slice(2));
  }
  return filepath;
}
