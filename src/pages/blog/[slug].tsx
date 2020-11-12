import React from 'react'
import markdownToHtml, { getAllPosts, getPost } from '../../lib/api'


const Post = (props) => {
  return (
    <div>
      <h1 className="text-4xl font-exo text-secondary-800">{props.title}</h1>
      <div className="prose"
        dangerouslySetInnerHTML={{ __html: props.content }}
      ></div>
    </div>
  )
}

export default Post;

export async function getStaticProps({ params }) {
  const post: any = getPost(params.slug);
  const contentUpdated: any = await markdownToHtml(post.content);
  return { props: {...post, content: contentUpdated}};
}

export async function getStaticPaths() {
  const posts = getAllPosts()
  return {
    paths: posts.map((post: any) => {
      return {
        params: {
          slug: post.slug,
          content: post.content,
        },
      }
    }),
    fallback: false,
  }
}
