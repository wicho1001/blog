import React from 'react';
import Layout from '../components/shared/Layout';

function IndexPage(props) {
  return (
    <section className="w-full">
      <Layout className="">
        <section className="ml-18 mt-25 w-2/5 flex flex-col"> 
          <h1 className="flex flex-col text-4xl text-secondary-900 font-exo font-bold">Your Business Needs <span>Our Software Solutions</span> 
          </h1>
          <div className='w-4/5 flex flex-col'>
            <p className="inline-flex font-rubik text-lg pt-4">"Lorem ipsum dolor sit amet consectetur adipisclaskje aliejd seda dof eliusmod tempor incuidoal
              salkjfj quis nostrud exrertiacion ulamco laboris nisi ut alquipo ex ea comodo consewaus taosijd intere
              ajsljl loca in reprehenderit in voulpateate velt esse cillum dolores eu tugiat nuila pariatur"
            </p>
            <a href="Learnmore.js" className="pt-4 self-end font-rubik text-lg text-primary-500">Learn More --{">"} </a>
          </div>
        </section>
      </Layout>
    </section>
  )
};

export default IndexPage;