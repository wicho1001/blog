import React, {useState, useEffect} from 'react';

const Navbar = () => {

    const menu=()=>{
          var menu=document.getElementById("menu");
          menu.style.display="block";
    }

  return (
    <section className="sticky  bg-white top-0 h-20 px-6 flex justify-between items-center shadow-2xl z-2">
      <img src="/logo.png" alt="" className="h-15"/>
   
        <div id="menu" className="hidden  md:flex md:items-center md:w-4/5 md:pl-15 lg:w-1/2 xl:w-1/3 justify-between">
            
            <a className="text-surface-900 font-duru" href="/services">Services</a>
            <a className="text-surface-900 font-duru" href="/how">How we work</a>
            <a className="text-surface-900 font-duru" href="/about">About</a>
            <a className="text-surface-900 font-duru" href="/blog">Blog</a>
            <button className="px-6 py-3 bg-gradient-to-r from-secondary-500 to-primary-500 rounded font-exo text-primary-50">
            Reach out
            </button>
        </div>
     
      <button className=" px:3 w-6 md:hidden cursor-pointer" onClick={menu}><img src="./menu.svg"></img></button>
    </section>
  )


}

export default Navbar;

