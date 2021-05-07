import { useRouter } from 'next/router';
import React, {useState, useEffect} from 'react';
import Link from 'next/link'


const Navbar = () => {

  const router = useRouter()

  let className = 'border-primary-500 border-b-4';


  return (
    <section className="flex w-full justify-between pt-8 pb-5 mb-5 px-10 sticky bg-white top-0 z-9999 shadow">
      <Link href="/">
        <div className="flex">
          <img className="h-17 scale-125 transform" src="/nemiliz.png" alt="" />
          <div className="xs:hidden md:flex flex-col ml-4 font-bold text-xl font-duru text-primary-600">
            <p>Nemiliz</p>
            <p>Diagnostics</p>
          </div>
        </div>
      </Link>
      <ul className="flex">
        <Link href="/">
          <p className={`text-lg mx-3 ${router.pathname === '/' ? className : null}`}>Inicio</p>
        </Link>
        <Link href="/laboratorio">
          <p className={`text-lg mx-3 ${router.pathname === '/laboratorio' ? className : null}`}>Laboratorio</p>
        </Link>
        {/* <Link href="/proyectos">
          <p className={`text-lg mx-3 ${router.pathname === '/proyectos' ? className : null}`}>Proyectos</p>
        </Link> */}
      </ul>
    </section>
  )


}

export default Navbar;

