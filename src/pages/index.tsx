import React from 'react';
import Layout from '../components/shared/Layout';

function IndexPage(props) {
  return (
    <section className="w-full">
      <Layout className="">
        <section className="ml-18 mt-25 w-2/5 flex flex-col h-screen"> 
          <div className="pt-26 pl-15">
            <h1 className="flex flex-col text-4xl text-secondary-900 font-exo font-bold">Your Business Needs <span>Our Software Solutions</span> 
            </h1>
              <div className='w-4/5 flex flex-col'>
                <p className="inline-flex font-rubik text-lg pt-4">"Lorem ipsum dolor sit amet consectetur adipisclaskje aliejd seda dof eliusmod tempor incuidoal
                salkjfj quis nostrud exrertiacion ulamco laboris nisi ut alquipo ex ea comodo consewaus taosijd intere
                ajsljl loca in reprehenderit in voulpateate velt esse cillum dolores eu tugiat nuila pariatur"
                </p>
                <a href="Learnmore.js" className="pt-4 self-end font-rubik text-lg text-primary-500">Learn More --{">"} </a>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-5 grid-flow-row gap-6 mb-15 w-4/5 mx-auto">
          
          <div className="h-130 col-span-5 bg-secondary-500 shadow-md p-8 rounded-xl">
            <h1 className="flex justify-center text-primary-50 font-exo bold text-5xl">Development</h1>
              <div className="flex pt-6">
                <img src="/Development.png" className="felx h-70 w-128 px-10"></img>
                <p className="inline-flex px-9 py-6 font-rubik text-primary-50 text-lg">"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui 
                ratione voluptatem sequi nesciunt.
                </p>
              </div>
              <div className="w-full flex justify-end pr-14">
                <a href="" className="text-primary-800 text-xl font-exo bold ">Learn more -{'>'}</a>
              </div>
          </div>
      
          <div className="h-120 col-span-3 bg-surface-500 shadow-md rounded-xl">
            <h1 className="flex justify-center pt-6 text-primary-50 font-exo text-4xl">Support</h1>
              <div className="flex flex-col">
                <img src="/Support.png" className="flex h-70 w-120 px-56 py-3"></img>
                <p className="justify-center text-primary-50 text-lg px-12 py-5">Lorem Nidhf allahu Akbar, fojoasi wicho tiene caojksl acnal cara lkjfpa de a guapo ajsdlnf,cnal porque es alkfj
                   el mejor najcc codificador aslkjfiue que he alcjshf conocido, triste man alkcjs se la hcopas rifa pjhaas Jhdoais 
                   Lfhaos Ocbhja OAjsf qoiwrropa oqjslas laks cjaslkjfoaosifhflaisjfla oakllson  kjdpoap asikfuqo kalsowk alskfiaj  
                </p>
                <a href="" className="self-center pb-3 text-primary-800 text-center text-xl font-exo bold">Learn More -{'>'}</a>
              </div>
          </div>

          <div className="h-120 col-span-2 bg-primary-500 shadow-md rounded-xl">
            <h1 className="flex justify-center pt-6 text-primary-50 font-exo text-4xl">Design</h1>
              <div className="flex flex-col">
                <img src="/Design.png" className="flex h-70 w-100 pt-10 pl-14 pr-1"></img>
                <p className="justify-center text-primary-50 text-lg px-12 py-5">Lorem Nidhf allahu Akbar, fojoasi wicho tiene caojksl acnal cara lkjfpa de a guapo ajsdlnf,cnal porque es alkfj
                   el mejor najcc codificador aslkjfiue que he alcjshf conocido, triste man alkcjs se la hcopas rifa pjhaas Jhdoais 
                   Lfhaos Ocbhja OAjsf qoiwrropa.  
                </p>
                <a href="" className="flex self-center text-primary-800 text-xl font-exo bold pb-5">Learn More -{'>'}</a>
              </div>
          </div>

        </section>
      </Layout>
    </section>
  )
};

export default IndexPage;