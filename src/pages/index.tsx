import React from 'react';
import Layout from '../components/shared/Layout';

function IndexPage(props) {
  return (
    <section className="w-full">
      <Layout className="">
        <section className="w-full">
          <section className="relative flex items-center h-container">
            <img className="absolute top-0 right-0 -z-1" src="./polygon1.svg" alt=""/>
            <section className="w-4/5 mx-auto">
              <div className="w-3/5 flex flex-col"> 
                <h1 className="flex flex-col text-5xl text-secondary-900 font-exo font-bold">Your Business Needs <span>Our Software Solutions</span> 
                </h1>
                <div className='w-4/5 flex flex-col'>
                  <p className="inline-flex font-rubik text-lg pt-4">"Lorem ipsum dolor sit amet consectetur adipisclaskje aliejd seda dof eliusmod tempor incuidoal
                  salkjfj quis nostrud exrertiacion ulamco laboris nisi ut alquipo ex ea comodo consewaus taosijd intere
                  ajsljl loca in reprehenderit in voulpateate velt esse cillum dolores eu tugiat nuila pariatur"
                  </p>
                  <a href="Learnmore.js" className="pt-4 self-end font-rubik text-lg text-primary-500">Learn More --{">"}</a>
                </div>
              </div>
            </section>
          </section>

          <section className="h-container w-full relative">
            <img className="absolute top-0 left-0 -mt-60" src="./polygon_two.svg" alt=""/>
            <section className="w-4/5 mx-auto grid grid-cols-5 grid-rows-2 py-6 px-3 gap-6 mb-15">
              <div className="flex flex-col row-span-1 col-span-5 bg-secondary-500 shadow-xl px-10 py-7 rounded-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer">
                <p className="text-center text-primary-50 font-exo bold text-5xl">Development</p>
                <div className="flex items-center w-full h-full">
                  <img src="/Development.png" className="h-50 object-contain"></img>
                  <p className="inline-flex px-9 py-6 font-rubik text-primary-50 text-lg">"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui 
                  ratione voluptatem sequi nesciunt.
                  </p>
                </div>
              </div>
          
              <div className="flex flex-col col-span-3 bg-surface-500 px-10 py-7 shadow-xl rounded-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer">
                <p className="text-center text-primary-50 font-exo text-4xl">Support</p>
                  <div className="flex">
                    <img src="/Support.png" className="h-50 object-contain"></img>
                    <p className="justify-center text-primary-50 text-lg">Lorem Nidhf allahu Akbar, fojoasi wicho tiene caojksl acnal cara lkjfpa de a guapo ajsdlnf,cnal porque es alkfj
                      el mejor najcc codificador aslkjfiue que he alcjshf conocido, triste man alkcjs se la hcopas rifa pjhaas Jhdoais 
                      Lfhaos Ocbhja OAjsf qoiwrropa oqjslas laks cjaslkjfoaosifhflaisjfla oakllson  kjdpoap asikfuqo kalsowk alskfiaj  
                    </p>
                  </div>
              </div>

              <div className="col-span-2 bg-primary-500 px-10 py-7 shadow-xl rounded-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer">
                <p className="text-center text-primary-50 font-exo text-4xl">Design</p>
                  <div className="flex flex-col">
                    <img src="/Design.png" className="h-30 object-contain"></img>
                    <p className="justify-center text-primary-50 text-lg">Lorem Nidhf allahu Akbar, fojoasi wicho tiene caojksl acnal cara lkjfpa de a guapo ajsdlnf,cnal porque es alkfj
                      el mejor najcc codificador aslkjfiue que he alcjshf conocido 
                    </p>
                  </div>
              </div>
            </section>

          </section>

          <section className="flex flex-col justify-center items-center mt-24 py-10 w-4/5 mx-auto">
            <p className="font-exo text-4xl text-secondary-900">
              Let’s Talk Business
            </p>
            <p className="font-duru text-xl text-secondary-800 mt-10">
              Let us know what you’re looking for and we’ll get back to you ASAP
            </p>
            <button className="flex items-center px-6 py-3 bg-secondary-500 text-secondary-100 rounded mt-10">
              Reach out
            </button>
          </section>
        </section>
      </Layout>
    </section>
  )
};

export default IndexPage;