import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = (props) => {
  return (
    <section className="w-full flex flex-col h-screen">
      <Navbar></Navbar>
      <div className="flex-grow overflow-y-scroll">
        {props.children}
      </div>
      <Footer></Footer>
    </section>
  )
}

export default Layout;