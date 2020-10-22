import React, {useState, useEffect} from 'react';

const Navbar = () => {

  return (
    <section className="px-6 py-3 flex justify-between items-center shadow-2xl">
      <img src="/logo.png" alt="" className="h-15"/>
      <section className="flex items-center w-1/3 justify-between">
        <a className="text-surface-900 font-duru" href="/services">Services</a>
        <a className="text-surface-900 font-duru" href="/how">How we work</a>
        <a className="text-surface-900 font-duru" href="/about">About</a>
        <a className="text-surface-900 font-duru" href="/blog">Blog</a>
        <button className="px-6 py-3 bg-gradient-to-r from-secondary-500 to-primary-500 rounded font-exo text-primary-50">
          Reach out
        </button>
      </section>
    </section>
  )
}

export default Navbar;