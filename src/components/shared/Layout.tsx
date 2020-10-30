import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = (props) => {
  return (
    <section className="w-full flex flex-col">
      <Navbar></Navbar>
      <div className="flex flex-col flex-grow">
        {props.children}
        <section className="w-full self-end">
          <Footer></Footer>
        </section>
      </div>
    </section>
  )
}

export default Layout;