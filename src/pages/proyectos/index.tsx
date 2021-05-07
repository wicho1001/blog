import React from 'react'
import Layout from '../../components/shared/Layout';
import Card from '../../components/shared/Card';
import { getAllPosts, getPost } from '@/lib/api';
import HorizontalCard from '../../components/shared/HorizontalCard';


const Index = (props) => {
  return (
    <Layout>

    </Layout>
  )
}

export default Index

export async function getStaticProps(params: any) {
  const posts = getAllPosts();
  return { 
    props: { 
      posts: posts.map((post) => getPost(post.slug)) 
    } 
  }
}


