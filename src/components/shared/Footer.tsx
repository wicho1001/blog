import React from 'react'

const Footer = () => {
  return (
    <div className=" flex-col p-8  w-full h-auto  bg-surface-800 text-surface-100">
      
      <section className="flex-col mt-5 w-full  md:grid-cols-2 md:flex ">
        <section className="flex-col w-full   md:justify-start ">
          <div className="flex justify-center md:justify-start">
            <img src="../logo.png"/>
          </div>
          <div className="flex-col md:w-1/2 mt-6">
            <p>We change your business’ life and we will help you grow and reach your goals</p>      
          </div>
        </section>
        <section className=" flex-col w-full grid-cols-3 mt-5  ">
            <div className=" md:flex justify-around  ">
              <div className="flex-col space-y-5">
                <div>
                  <a className="border-b-4  border-primary-500" >Showcase</a>
                </div>
                <div>
                  <a>Services</a>
                </div>
              </div> 
              <div className="flex-col space-y-5">
                <div>
                  <a className="border-b-4 border-primary-500">Company</a>
                </div>
                <div>
                  <a>Blog</a>
                </div>
                <div>
                  <a>About</a>
                </div>
              </div> 
              <div className="flex-col space-y-5">
                <div>
                  <a className="border-b-4  border-primary-500">Contact</a>
                </div>
                <div>
                  <a >Hello@wider-solutions.com</a>
                </div>
                <div>
                  <a >+52 56-1289-1239</a>
                </div>
              </div> 
            </div>
        </section>
      </section>  
      <section className="flex-col  mt-10 md:mt-6 w-full ">
        <section className="flex-col w-full">
          <div className="flex  justify-center space-x-20">
            <img src="../facebook_icon.png"/>
            <img src="../instagram_icon.png"/>
            <img src="../linkedin_icon.png"/>
          </div>
          <div className="flex mt-5">
            <hr className="border border-white w-full"></hr>
          </div>
        </section>
        <section className=" flex mt-3 grid-cols-2 w-full">
          <div className="flex w-1/2 justify-start">
            <label className="place-self-start">@ All rights reserved Wider-Solutions</label>
          </div>
          <div className="flex w-1/2 justify-end">
            <label className="place-self-end">Legal</label>
          </div>
        </section>
        </section>
    </div>
  )
}

export default Footer;