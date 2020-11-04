import React from 'react'
import Layout from '../../components/shared/Layout';
import Card from '../../components/shared/Card';


const Index = () => {
  return (
    <section className="w-full">
      <Layout>
       <section className="overflow-x-hidden"> 
        <section className="relative flex flex-row-reverse w-4/5 mx-auto mt-60 mb-20 ">
          <img className="absolute top-0 left-0 -z-1 -mt-76" src="./star_one.svg" alt=""/>
          <img className="absolute bottom-0 left-0 -z-1 -mb-54" src="./star_two.svg" alt=""/>
          <img className="absolute bottom-0 right-0 -z-1 -mt-80 mr-35" src="./star_three.svg" alt=""/>
          <img className="" src="./Blog_one.svg" alt=""/>
          <div className="w-2/5 flex flex-col">
            <p className="flex flex-col text-5xl text-secondary-700 font-exo font-bold">
              We Write For Future
            </p>
            <div className="w-4/5 flex flex-col">
              <p className="inline-flex font-rubik text-lg pt-4">
              "Lorem ipsum dolor sit amet consectetur adipisclaskje aliejd seda dof eliusmod tempor incuidoal
              nderit in voulpateate velt esse cillum dolores eu tugiat nuila pariatur"
              </p>
            </div>
          </div>
        </section>

          <section className="relative w-full">
          <img className="absolute bottom-0 right-0 -z-1 mb-150 mr-90" src="./star_two.svg" alt=""/>
          <img className="absolute bottom-0 left-0 -z-1 mb-68 ml-20" src="./star_one.svg" alt=""/>
          <img className="absolute bottom-0 right-0 -z-1 mb-40 mr-35" src="./star_three.svg" alt=""/>
            <section className="grid grid-cols-2 gap-16 w-4/5 mx-auto py-10">
              <Card></Card>
              <Card></Card>
              <Card></Card>
            </section>
          </section>  
       </section>
      </Layout>
    </section>
  )
}

export default Index
