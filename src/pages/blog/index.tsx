import React from 'react'
import Layout from '../../components/shared/Layout';
import Card from '../../components/shared/Card';
import { getAllPosts, getPost } from '@/lib/api';
import HorizontalCard from '../../components/shared/HorizontalCard';


const Index = (props) => {
  console.log('props: ', props)
  return (
    <Layout>
      <section className="w-full h-auto">
        <section className="relative flex justify-center flex-row-reverse mx-auto">
          <section className="flex flex-col w-full pt-2 text-gray-600">
            <section className="flex flex-col w-4/5 mx-auto mt-10">
              <section className="flex justify-between items-center">
                <p className="text-6xl text-secondary-700 font-exo font-bold">
                  We Write For Future
                </p>
                <div className="flex relative">
                  <input className="flex items-center relative border-2 border-gray-300 rounded bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                  type="search" name="search" placeholder="Search"/>
                  <button type="submit" className="absolute right-0 top-0 mt-3 mr-4"  >
                    <img className="w-4" src="./search.svg" alt="x" />
                  </button>
                </div>
              </section> 
              <section className="flex justify-around w-1/3 font-rubik text-lg text-secondary-800  pt-4">
                <a className="border-b-4 border-secondary-700">Tech</a>
                <a className="border-b-4 border-secondary-700">Design</a>
                <a className="border-b-4 border-secondary-700">Finance</a>
              </section>
            </section>
            <section className="mt-50">
              <div className="flex justify-center items-center relative">
                <img className="absolute w-full top-0 xs:-mt-10 md:-mt-35 -z-1" src="./rectangle_one.svg" alt=""/>
                <p className="capitalize xs:text-4xl md:text-7xl font-exo text-secondary-800 text-stroke-secondary-500 text-stroke-px absolute -z-1 xs:-mt-3 md:-mt-20">Trending</p>
                <p className="capitalize xs:text-3xl md:text-6xl font-exo text-secondary-200">Trending</p>
              </div>
              <div className="w-4/5 mx-auto">
                <section className=" flex relative w-full   ">
                  <section className="grid grid-cols-2 gap-16">
                    {
                      props.posts.map((post, index) => {
                        return (
                          <div>
                            <a href={"blog/"+post.slug} >
                              
                             
                              <Card props={post} key={index}></Card> 
                            </a>
                           
                          </div>
                        )
                      })
                    }
                  </section>
                </section> 
              </div>
            </section>
            <section className="flex-col">
              <div className="flex justify-center items-center mt-20">
              
                <p className="capitalize xs:text-4xl md:text-7xl font-exo  text-white text-stroke-secondary-500 text-stroke-px absolute -z-1 xs:-mt-3 md:-mt-20">What People Like</p>
                <p className="capitalize text-6xl font-exo  text-secondary-600">What People Like</p>
              </div>
            </section>

            <section className="grid w-4/5 mx-auto m-5 gap-4">
               <section className=" flex-col  space-y-10 ">
                    {
                      props.posts.map((post, index) => {
                        return (
                          <div>
                            <a href={"blog/"+post.slug} >
                              
                              <HorizontalCard props={post} key={index}></HorizontalCard>
                            
                            </a>
                           
                          </div>
                        )
                      })
                    }
               </section>
              {/*  <section className="grid grid-flow-col w-full col-span-4">
                 
                    <div className="grid grid-flow-row  ">
                         
                            <img className="h-full" src="./mountain.jpg"></img>
                          
                    </div>

               </section> */}
            </section>   
            <section className="flex-col">
            <div className="bg-primary-50">
                  <p>hhftyt</p>
            </div>
        </section>  
           
        </section>

                      
        </section>
      
       </section>
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


