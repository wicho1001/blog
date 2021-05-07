import React from 'react';
import Layout from '../components/shared/Layout';
import { getAllPosts, getPost } from '@/lib/api';
import Link from 'next/link'

function IndexPage(props) {
  return (
    <Layout>
      <section className="flex flex-col xs:w-10/12 2xl:w-8/12 mx-auto">
        {/* home */}
        <section className="flex md:flex-row xs: flex-col justify-between items-center">
          <div className="flex flex-col md:items-start md:w-1/3 xs:w-full">
            <p className="font-bold text-4xl font-duru text-surface-800">Nemiliz Diagnostics</p>
            <p className="text-lg font-rubik text-surface-800 mt-10">
              Nemiliz Diagnostics es una empresa 100%
              mexicana comprometida con el
              significado de su nombre a saber, con
              la “vida”. Nuestra finalidad es brindar
              una experiencia de calidad a nuestros
              clientes y socios de negocios mediante
              un servicio profesional en Biología
              Molecular
            </p>
            <button className="px-6 py-4 font-bold font-duru bg-primary-700 text-white rounded-2 mt-10 xs:w-full md:w-auto outline-none cursor-pointer">
              Contactanos
            </button>
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
              <Link href="/laboratorio">
                <div className="flex flex-col xs:w-full xs:my-6 md:my-0 md:w-1/4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer">
                <img className="w-full xs:h-70 md:h-60 rounded-2" src="https://picsum.photos/200/200" alt="" />
                <p className="text-lg font-duru font-bold text-surface-800 mt-6">Laboratorio</p>
                <p className="text-lg font-rubik text-surface-800 mt-6 break-words">
                  Somos un laboratorio especializado en biología molecular , interesados en la salud de nuestros pacientes y su bienestar. 
                  Con un servicio de calidad y enfocado a nuestros clientes como personas y no como un número más .
                </p>
                </div>
              </Link>
              <Link href="/">
                <div className="flex flex-col xs:w-full xs:my-6 md:my-0 md:w-1/4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer">
                <img className="w-full xs:h-70 md:h-60 rounded-2" src="https://picsum.photos/200/200" alt="" />
                <p className="text-lg font-duru font-bold text-surface-800 mt-6">Construcción</p>
                <p className="text-lg font-rubik text-surface-800 mt-6 break-words">
                Somos una empresa interdisciplinaria dedicada al diseño, construcción y mejoramiento de instalaciones de salud.
                En especial, laboratorios de Biología Molecular.
                Siempre en busca de ventajas comerciales para nuestros clientes, con la mejor relación costo beneficio, y la optimización de tiempos de implementación.
                </p>
                </div>
              </Link>
              <Link href="/">
                <div className="flex flex-col xs:w-full xs:my-6 md:my-0 md:w-1/4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer">
                <img className="w-full xs:h-70 md:h-60 rounded-2" src="https://picsum.photos/200/200" alt="" />
                <p className="text-lg font-duru font-bold text-surface-800 mt-6">Distribución</p>
                <p className="text-lg font-rubik text-surface-800 mt-6 break-words">
                Somos una empresa de vanguardia, en busca de las mejores tecnologías y productos para nuestros clientes .
                Nuestras alianzas comerciales, y tlrelacion directa con fabricantes nos permiten tener las mejores ofertas dentro del mercado de insumos para laboratorio .
                Ya sea en equipos, reactivos o consumibles buscamos la satisfacción total de nuestros clientes y el impulso a sus proyectos.
                </p>
                </div>
              </Link>
          </section>
        </section>
      </section>
    </Layout>
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


