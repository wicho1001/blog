import fs from 'fs';
import path, { join } from 'path';
import matter from 'gray-matter';

import remark from 'remark';
import html from 'remark-html';

const postsDirectory = join(process.cwd(), 'src/_posts');

export const getPostSlugs = () => {
  return fs.readdirSync(postsDirectory)
}


export const getPost = (slug: string) => {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const file = fs.readFileSync(fullPath, 'utf-8');
  const {content, data}: any = matter(file);

  return {content, ...data}
}

export const getAllPosts = () => {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPost(slug))
  return posts
}

export default async function markdownToHtml(markdown) {
  const result = await remark().use(html).process(markdown)
  return result.toString()
}