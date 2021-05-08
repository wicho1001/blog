import React from 'react'
import Layout from '../../components/shared/Layout';
import fs from 'fs';
import matter from 'gray-matter';

const Index = (props) => {
  return (
    <Layout props={props}>
      <section className="flex flex-col xs:w-10/12 2xl:w-8/12 mx-auto">
        <section className="flex md:flex-row xs: flex-col justify-between items-center">
          <div className="flex flex-col md:items-start md:w-1/3 xs:w-full">
            <p className="font-bold text-4xl font-duru text-primary-600">{props.title}</p>
            <p className="text-lg font-rubik text-primary-600 mt-10">{props.description}</p>
            <a href={'https://api.whatsapp.com/send?phone=%2B525529799846&text=+Hola+que+tal%2C+quiero+obtener+mi+prueba+para+SARS+CoV-2'}
              target="_blank" 
              className="px-6 py-4 font-bold font-duru bg-primary-700 text-white text-center rounded-2 mt-10 xs:w-full md:w-10/12 outline-none"
            >
              Obten tu prueba
            </a>
          </div>
          <div className="self-end relative xs:mt-10 md:mt-0">
            <img className="z-3 h-150 w-150 2xl:w-full 2xl:h-3/4 rounded-2" src="https://picsum.photos/600/600" alt="" />
          </div>
        </section>
        <section className="flex flex-col mt-30">
          <p className="font-bold text-4xl font-duru text-primary-600 pb-4">Etapas</p>
          <hr className="border-b-4 border-primary-50 rounded-2 w-1/2"/>
          <div className="flex flex-col mt-10">
            {
              props.stages.map((stage, index) => (
                <div className="flex xs:flex-col md:flex-row items-center xs:my-10 md:my-5" key={index}>
                  <img className="z-3 xs:h-60 md:h-45 md:w-45 xs:w-full rounded-2" src="https://picsum.photos/80/80" alt="" />
                  <div className="flex flex-col md:ml-6 w-full">
                    <p className="font-bold text-2xl font-duru text-primary-600">Etapa {index}: {stage.title}</p>
                    <p className="text-lg font-rubik text-primary-600 mt-6">{stage.description}</p>
                  </div>
                </div>
              ))
            }  
          </div>
        </section>
      </section>
    </Layout>

  )
}

export default Index

export async function getStaticProps(params: any) {
  const file = fs.readFileSync('static/content/laboratorio.md', 'utf-8');
  const {content, data}: any = matter(file);
  const props = {
    props: {
      ...data,
      content,
    } 
  }
  return props
}



