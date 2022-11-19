import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export default async function handler(req, res) {
  const files = await fs.readdirSync(path.join(process.cwd(), 'pages', 'blog'), { withFileTypes: true });

  const mdxFiles = files.filter((file) => file.name.endsWith('.mdx'));
  const filesWithContent = mdxFiles.map((file) => {
    const fileData = fs.readFileSync(path.join(process.cwd(), 'pages', 'blog', file.name), 'utf-8');
    const { data, content } = matter(fileData);

    return { data, content };
  });
  return res.json(filesWithContent);
}
