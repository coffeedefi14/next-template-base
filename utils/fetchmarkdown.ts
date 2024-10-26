
import fs from 'fs';
import path from 'path';

export async function fetchMarkdownContent(filename: string): Promise<string> {
  const filePath = path.resolve(process.cwd(), 'public', 'markdown', `${filename}.txt`);
  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    return fileContent;
  } catch (error) {
    console.error('Error reading text file:', error);
    throw new Error('Failed to fetch markdown content');
  }
}
