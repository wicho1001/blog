import fs from 'fs';
import path, { join } from 'path';
import matter from 'gray-matter';

import remark from 'remark';
import html from 'remark-html';
import { getAuthor } from './author-api';

const postsDirectory = join(process.cwd(), 'static/content/_posts');

export const getPostSlugs = () => {
 
  return fs.readdirSync(postsDirectory)
}


export const getPost = (slug: string) => {
  const realSlug = slug.replace(/\.md$/, ''); /* slug.replace(/\.md$/, ''); */
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const file = fs.readFileSync(fullPath, 'utf-8');
  const {content, data}: any = matter(file);
  const author = getAuthor(data.author);
  console.log("blog ", { ...data, content, author: {...author} });
  return { 
        ...data,
        content,
        author:{
            ...author
        }      
        
      }
}

export const getAllPosts = () => {
 
  /* const posts = slugs
    .map((slug) => getPost(slug)) */
     console.log("posts ",getPostSlugs().map((post)=>{
      return {
          slug:post
         
      }
      
  })); 
  
    return getPostSlugs().map((post)=>{
      return {
          slug:post
      }
      
  });
}

export default async function markdownToHtml(markdown) {
  const result = await remark().use(html).process(markdown)
  return result.toString()
}

