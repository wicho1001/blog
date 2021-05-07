import React from 'react'
import Layout from '../../components/shared/Layout';
import Card from '../../components/shared/Card';
import { getAllPosts, getPost } from '@/lib/api';
import HorizontalCard from '../../components/shared/HorizontalCard';


const Index = (props) => {
  return (
    <Layout>
      <section className="flex flex-col xs:w-10/12 2xl:w-8/12 mx-auto">
        <section className="flex md:flex-row xs: flex-col justify-between items-center">
          <div className="flex flex-col md:items-start md:w-1/3 xs:w-full">
            <p className="font-bold text-4xl font-duru text-primary-600">SARS CoV-2</p>
            <p className="text-lg font-rubik text-primary-600 mt-10">
              Virus que causa una enfermedad respiratoria llamada enfermedad por coronavirus de 2019 (COVID-19).
              El SARS-CoV-2 es un virus de la gran familia de los coronavirus,
              un tipo de virus que infecta a seres humanos y algunos animales.
              La infección por el SARS-CoV-2 en las personas se identificó por primera vez en 2019.
              Se piensa que este virus se transmite de una persona a otra en las gotitas que se dispersan cuando la persona infectada tose, estornuda o habla.
            </p>
            <button className="px-6 py-4 font-bold font-duru bg-primary-700 text-white rounded-2 mt-10 xs:w-full md:w-10/12">
              Obten tu prueba
            </button>
          </div>
          <div className="self-end relative xs:mt-10 md:mt-0">
            <img className="z-3 h-150 w-150 2xl:w-full 2xl:h-3/4 rounded-2" src="https://picsum.photos/600/600" alt="" />
          </div>
        </section>
        <section className="flex flex-col mt-30">
          <p className="font-bold text-4xl font-duru text-primary-600 pb-4">Etapas</p>
          <hr className="border-b-4 border-primary-50 rounded-2 w-1/2"/>
          <div className="flex flex-col mt-10">
            <div className="flex xs:flex-col md:flex-row items-center xs:my-10 md:my-5">
              <img className="z-3 xs:h-60 md:h-45 md:w-45 xs:w-full rounded-2" src="https://picsum.photos/80/80" alt="" />
              <div className="flex flex-col md:ml-6 w-full">
                <p className="font-bold text-2xl font-duru text-primary-600">Etapa 1: Toma de la muestra.</p>
                <p className="text-lg font-rubik text-primary-600 mt-6">
                Se realiza por medio un hisopado nasofaringeo,
                el hisopo debe ser estéril ,debe ser de fibras sintéticas para evitar inhibición de la PCR,
                cuando la técnica es bien ejecutada se puede provocar una molestia pero nunca una lesión.
                El personal lleva equipo completo de protección y se toman las más altas normas de seguridad e higiene.
                </p>
              </div>
            </div>
            <div className="flex xs:flex-col md:flex-row items-center xs:my-10 md:my-5">
              <img className="z-3 xs:h-60 md:h-45 md:w-45 xs:w-full rounded-2" src="https://picsum.photos/80/80" alt="" />
              <div className="flex flex-col md:ml-6 w-full">
                <p className="font-bold text-2xl font-duru text-primary-600">Etapa 2: Conservación y transporte de la muestra.</p>
                <p className="text-lg font-rubik text-primary-600 mt-6">
                  Se utiliza un medio de transporte viraal diseñado para conservar la muestra de la mejor manera se procura que las células lleguen óptimas
                  al laboratorio para poder extraer correctamente la información genética de cada célula.
                  Se recomienda transportar en refrigeración para que la muestra llegué con buenas condiciones al laboratorio,
                  este paso es sumamente importante ya que de esto depende el buen material genético que se obtenga
                </p>
              </div>
            </div>
            <div className="flex xs:flex-col md:flex-row items-center xs:my-10 md:my-5">
              <img className="z-3 xs:h-60 md:h-45 md:w-45 xs:w-full rounded-2" src="https://picsum.photos/80/80" alt="" />
              <div className="flex flex-col md:ml-6 w-full">
                <p className="font-bold text-2xl font-duru text-primary-600">Etapa 3: Procesamiento de la muestra.</p>
                <p className="text-lg font-rubik text-primary-600 mt-6">
                En la primera etapa se extraen los ácidos nucleicos y se obtienen purificados para su posterior marcaje y amplificación en el equipo de termociclado
                Detectamos regiones genicas del virus con mayor tasa de conservación y menor tasa ve mutación o variabilidad genicas,
                lo que nos ayuda a tener Diagnosticos más certeros y de mejor utilidad para el profesional de la salud.
                Debido a que los.sintomas son similares a otros virus respiratorios nuestra prueba detecta en simultáneo SARS-CoV 2 e Influenza A y B.
                Esto nos habilita para beneficio de nuestros clientes y pacientes.
                </p>
              </div>
            </div>
          </div>
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


