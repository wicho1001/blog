import HorizontalCard from '../components/shared/HorizontalCard';
import React from 'react';
import Layout from '../components/shared/Layout';
import { getAllPosts, getPost } from '@/lib/api';
import Card from '../components/shared/Card';

function IndexPage(props) {
  return (
    <section className="w-full">
      <Layout className="">
        
        <section className="overflow-x-hidden">
          <section className="relative flex items-center h-container">
            <img className="absolute top-0 w-full right-0 -z-1 " src="./rectangle_home.svg" alt=""/>
            <img className="absolute top-0 w-full right-0 -z-1 -mr-20 mt-30" src="./white_breaks_home.svg" alt=""/>
            <section className="absolute top-0 right-0 flex w-full mt-20 justify-end ">
              <div className=" border-b-8 border-primary-400  w-4/5 sm:w-3/5  flex"> 
                <h1 className="flex flex-col  text-secondary-900 font-exo font-bold mr-10  xs:text-lg sm:text-2xl md:text-4xl  lg:text-5xl">Your Business Needs <span>Our Software Solutions</span></h1>
              </div>
            </section>
            <section className="flex w-full justify-end">
              <div className="flex w-4/5 justify-end mr-10">
                <img className="h-12 w-12 bg-primary-600 rounded-full shadow-md mr-3 p-2" src="./message_icon.svg" alt=""/>
              </div>  
            </section>
              <section className="absolute bottom-0 flex-col  lg:flex  mt-20 items-center w-full justify-center">
                <section className="w-full lg:flex lg:w-4/5 gap-20 items-center justify-center">  
                  <section className=" flex w-full justify-center px-3">
                    <section className=" flex w-4/5 relative h-auto bg-secondary-900 shadow-xl  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer rounded-xl">
                      <img className="xs:hidden md:inline-block absolute card-image rounded-xl h-full" src="./robot.png" alt=""/>
                      <div className="flex flex-col justify-center xs:w-full md:w-4/5 ml-auto relative px-10 py-7 lg:px-30 lg:py-24">
                        <p className="text-primary-50 font-exo font-thin text-2xl mt-5">Design</p>
                      </div>
                    </section>
                  </section>
                  <section className="justify-center items-center w-full lg:w-4/5 mt-8">
                    <div className=" w-full justify-center flex-col lg:justify-end "> 
                      <div className="flex w-full justify-center">
                        <p className="flex flex-col w-4/5 md:w-auto lg:w-2/5 text-4xl capitalize md:text-5xl xl:text-6xl font-exo text-disabled text-opacity-0 text-stroke-secondary-500 text-stroke-px absolute -z-1 xs:-mt-3 md:-mt-10 ">What you need</p>
                        <p className="flex flex-col w-4/5  md:w-auto lg:w-full text-3xl capitalize md:text-4xl xl:text-5xl font-exo text-secondary-900 ">We are what you need</p>
                      </div>
                      <div className="flex w-full lg:w-4/5 justify-center mt-8">
                        <p className="flex w-4/5 lg:w-full text-justify justify-center  ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, sint autem consequuntur placeat debitis eius possimus ab doloremque rem iusto, pariatur tenetur reiciendis magni in! Architecto minima quasi repudiandae deleniti.</p>
                      </div>
                    </div>
                    <div className=" w-full flex justify-center items-center space-x-10 md:space-x-20 mt-10 ">
                      <i className="h-12 w-12 bg-black text-white text-center text-xl rounded-full shadow-md mr-3 p-2 icon-embed2"></i>
                      <i className="h-12 w-12 bg-black text-white text-center text-xl rounded-full shadow-md mr-3 p-2 icon-sphere"></i>
                      <i className="h-12 w-12 bg-black text-white text-center text-xl rounded-full shadow-md mr-3 p-2 icon-map"></i>
                    </div>
                  </section> 
                </section>
              </section> 
          </section>
          <section className="w-full relative mt-10">
            <section className="flex-col space-y-10 w-4/5 mx-auto lg:grid lg:grid-cols-6 py-6 px-3 gap-6 mb-15">
              <section className="flex col-span-6 relative bg-secondary-900 shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer rounded-xl">
                <img className="xs:hidden md:inline-block absolute card-image rounded-xl h-full" src="./unnamed.jpg" alt=""/>
                <div className="flex flex-col justify-center xs:w-full md:w-9/12 ml-auto relative px-10 py-7 lg:px-30 lg:py-24">
                  <p className="inline-flex font-rubik text-primary-50 text-justify text-lg font-thin">We work with you to determine the ideal technology stack and design experience for your web, or cloud-based solution. We also ensure it is supported and maintained well after launch.</p>
                  <p className="text-primary-50 font-exo font-thin text-2xl mt-5">Design</p>
                </div>
              </section>
              <section className="flex col-span-3 relative bg-secondary-900 shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer rounded-xl">
                <img className="xs:hidden md:inline-block absolute card-image rounded-xl h-full w-3/5" src="./unnamed.jpg" alt=""/>
                <div className="flex flex-col justify-center xs:w-full md:w-9/12 ml-auto relative px-10 py-7 lg:px-10 lg:py-8">
                  <p className="inline-flex font-rubik text-primary-50 text-justify text-lg font-thin">We work with you to determine the ideal technology stack and design experience for your web, or cloud-based solution. We also ensure it is supported and maintained well after launch.</p>
                  <p className="text-primary-50 font-exo font-thin text-2xl mt-5">Design</p>
                </div>
              </section>
              <section className="flex col-span-3 relative bg-secondary-900 shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer rounded-xl">
                <img className="xs:hidden md:inline-block absolute card-image rounded-xl h-full w-3/5" src="./unnamed.jpg" alt=""/>
                <div className="flex flex-col justify-center xs:w-full md:w-9/12 ml-auto relative px-10 py-7 lg:px-10 lg:py-8">
                  <p className="inline-flex font-rubik text-primary-50 text-justify text-lg font-thin">We work with you to determine the ideal technology stack and design experience for your web, or cloud-based solution. We also ensure it is supported and maintained well after launch.</p>
                  <p className="text-primary-50 font-exo font-thin text-2xl mt-5">Design</p>
                </div>
              </section>
            </section>
          </section>
          <section className="flex flex-col justify-center items-center mt-24 py-10  w-4/5 mx-auto">
            <section className="flex w-full mt-20 justify-center pb-10">
                <div className="flex-col w-full justify-center"> 
                  <p className="flex flex-col text-5xl capitalize xs:text-4xl md:text-6xl font-exo text-disabled text-opacity-0 text-stroke-secondary-500 text-stroke-px absolute -z-1 md:-mt-10 ">Our blog</p>
                  <p className="flex flex-col text-5xl capitalize xs:text-3xl md:text-5xl font-exo text-secondary-900 self-center ">Our blog</p>
                </div>
            </section>
            <section className="grid w-4/5 mx-auto m-5 gap-5">
              <section className=" flex-col space-y-10 ">
                {
                  props.posts.map((post, index) => {
                    return (
                      <div key={index}>
                        <a className="xs:hidden md:inline-block" href={"blog/"+post.slug} >
                          <HorizontalCard props={post}></HorizontalCard>
                        </a>
                        <a className="xs:inline-block md:hidden" href={"blog/"+post.slug} >
                          <Card props={post}></Card>
                        </a>                           
                      </div>
                    )
                  })
                }
              </section>
            </section>  
          </section>
        </section>
      </Layout>
    </section>
  )
};

export default IndexPage;


export async function getStaticProps(params: any) {
  const posts = getAllPosts();
  return { 
    props: { 
      posts: posts.map((post) => getPost(post.slug)) 
    } 
  }
}


