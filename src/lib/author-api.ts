import fs from 'fs';
import matter from 'gray-matter';
import {join} from 'path';
import remark from 'remark';
import html from 'remark-html';



//const authorDirectory=null;
//static/content/authors/+${author} 

export const getAllAuthors = () => {
  const path = join(process.cwd(),'static/content/authors');
    
  return fs.readdirSync(path);

}

export const getAuthor = (author:string) => {
  //const authorDirectory =join(process.cwd(), author);
  const fullPath = join(process.cwd(),author);
  const file= fs.readFileSync(fullPath,'utf-8');
  const { content, data }:any= matter(file);
  
  return { content, ...data }

}


export default async function markdownToHtml(markdown) {
  const result = await remark().use(html).process(markdown)
  return result.toString()
}
