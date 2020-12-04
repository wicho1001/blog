import React from 'react'
import Layout from '../../components/shared/Layout';
import markdownToHtml, { getAllPosts, getPost } from '../../lib/api'
import { DiscussionEmbed } from "disqus-react"
import { useRouter } from 'next/router';



const Post = (props) => {
  const disqusShortname = "wider solutions"
  const disqusConfig = {
    url: `https://wider-solutions-com.disqus.com/${props.title}`,
    identifier: props.id,
    title: props.title || ''
  }
 
  const router= useRouter();
    if(router.isFallback){
      return <div>Is loading</div>
    }

  return (
    <Layout>
      <div className="flex flex-col w-10/12 mx-auto items-center relative mt-20 mb-10">
        <p className="capitalize xs:text-4xl md:text-6xl font-exo text-white text-stroke-secondary-500 text-stroke-px absolute -z-1 xs:-mt-3 md:-mt-11">{props.title}</p>
        <p className="capitalize text-4xl font-exo text-secondary-800">{props.title}</p>
        <p className="capitalize text-4xl font-exo text-secondary-800">{props.fecha}</p>
        <div className="relative w-full">
          <img className="w-full object-cover xs:h-70 md:h-100 rounded-2 mt-6" src={props.featured_image} alt=""/>
          <img className="absolute bottom-0 transform xs:-ml-25 md:-ml-11 xs:-mb-28 md:-mb-8 -z-1 xs:scale-50 md:scale-100" src="../Dot_L.svg" alt=""/>
        </div>
        <div className="relative">
          <div className="prose w-full max-w-4xl mt-10"
            dangerouslySetInnerHTML={{ __html: props.content }} 
          >
          </div>
          <img className="absolute bottom-0 right-0 transform -rotate-90 xs:-mr-20 md:-mr-15 xs:-mb-26 md:-mb-10 -z-1 xs:scale-50 md:scale-75" src="../Dot_L.svg" alt=""/>
        </div>
        <DiscussionEmbed 
          shortname={disqusShortname}
          config={disqusConfig}
        ></DiscussionEmbed>
      </div>
      
    </Layout>
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
         
        },
      }
    }),
    fallback: true,
  }
}