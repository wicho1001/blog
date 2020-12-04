import React, {useState, useEffect} from 'react';

const Navbar = () => {

  const [clickedMobile, setClickedMobile] = useState(false);

  useEffect(() => {
    console.log('clickedMobile: ', clickedMobile);
  }, [clickedMobile])
  
  return (
    <section className="sticky bg-white top-0 h-20 px-6 flex justify-between items-center shadow-2xl z-2">
      <a href="/">
        <img src="/logo.png" alt="" className="h-15"/>
      </a>
   
        <div className="xs:hidden md:flex md:items-center md:w-1/2 md:pl-15 justify-between">
            <a className="text-surface-900 font-duru" href="/services">Services</a>
            <a className="text-surface-900 font-duru" href="/how">How we work</a>
            <a className="text-surface-900 font-duru" href="/about">About</a>
            <a className="text-surface-900 font-duru" href="/blog">Blog</a>
            <button className="px-6 py-3 bg-secondary-700 rounded font-exo text-secondary-100">
              Reach out
            </button>
        </div>

      <button className="xs:inline-block px:3 md:hidden cursor-pointer" onClick={() => setClickedMobile(!clickedMobile)}>
        <i className="icon-menu text-4xl text-surface-600"></i>
      </button>
      <section className={clickedMobile ? 'xs:inline-block md:hidden absolute h-screen w-screen bg-white inset-0 flex flex-col p-6' : 'hidden'}>
        <div className="flex w-full justify-end">
          <button className="cursor-pointer" onClick={() => setClickedMobile(!clickedMobile)}>
            <i className="icon-cross text-4xl text-surface-600"></i>
          </button>
        </div>
        <div className="flex flex-col justify-around h-1/2 text-surface-600 font-duru text-xl font-bold">
            <a onClick={() => setClickedMobile(!clickedMobile)} href="/services">Services</a>
            <a onClick={() => setClickedMobile(!clickedMobile)} href="/how">How we work</a>
            <a onClick={() => setClickedMobile(!clickedMobile)} href="/about">About</a>
            <a onClick={() => setClickedMobile(!clickedMobile)} href="/blog">Blog</a>
            <button className="px-6 py-3 bg-secondary-700 rounded font-exo text-secondary-100">
              Reach out
            </button>
        </div>
      </section>
    </section>
  )


}

export default Navbar;

