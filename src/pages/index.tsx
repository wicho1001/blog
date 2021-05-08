import React from 'react';
import Layout from '../components/shared/Layout';
import { getAllPosts, getPost } from '@/lib/api';
import Link from 'next/link'
import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

function IndexPage(props) {
  return (
    <Layout props={props}>
      <section className="flex flex-col xs:w-10/12 2xl:w-8/12 mx-auto">
        {/* home */}
        <section className="flex md:flex-row xs: flex-col justify-between items-center">
          <div className="flex flex-col md:items-start md:w-1/3 xs:w-full">
            <p className="font-bold text-4xl font-duru text-surface-800">{props.title}</p>
            <p className="text-lg font-rubik text-surface-800 mt-10">{props.description}</p>
            <a href={'https://api.whatsapp.com/send?phone=%2B525529799846&text=Hola%2C+quisiera+saber+m%C3%A1s+acerca+de+sus+servicios.+Gracias%21'}
              target="_blank" 
              className="px-6 py-4 font-bold font-duru bg-primary-700 text-white text-center rounded-2 mt-10 xs:w-full md:w-10/12 outline-none"
            >
              Contáctanos
            </a>
          </div>
          <div className="self-end relative xs:mt-10 md:mt-0">
            <img className="z-3 h-150 w-150 2xl:w-full 2xl:h-3/4 rounded-2" src="https://picsum.photos/600/600" alt="" />
            <div className="h-150 w-150 xs:hidden md:block md:absolute bg-secondary-500 right-0 bottom-0 -mr-20 -z-1 -mb-10 rounded-2"></div>
          </div>
        </section>
        {/* End home */}
        <section className="flex flex-col mt-30">
          <p className="text-4xl font-bold self-center">Acerca de nosotros</p>
          <section className="flex xs:flex-col md:flex-row justify-around w-full mt-10">
            {
              props.stages.map((stage, index) => (
                <Link href={stage.permaLink} key={index}>
                  <div className="flex flex-col xs:w-full xs:my-6 md:my-0 md:w-1/4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer">
                    <img className="w-full xs:h-70 md:h-60 rounded-2" src="https://picsum.photos/200/200" alt="" />
                    <p className="text-lg font-duru font-bold text-surface-800 mt-6">{stage.title}</p>
                    <p className="text-lg font-rubik text-surface-800 mt-6 break-words">{stage.description}</p>
                  </div>
                </Link>
              ))
            }
          </section>
        </section>
      </section>
    </Layout>
  )
};

export default IndexPage;


export async function getStaticProps(params: any) {
  const file = fs.readFileSync('static/content/index.md', 'utf-8');
  const {content, data}: any = matter(file);
  const props = {
    props: {
      ...data,
      content,
    } 
  }
  return props
}


