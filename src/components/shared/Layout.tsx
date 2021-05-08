import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Header from './Header';

const Layout = (props) => {
  return (
    <div>
      <Header children={props.props}></Header>
      <section className="w-full flex flex-col">
        <Navbar></Navbar> 
        <div className="flex flex-col flex-grow">
          {props.children}
          <section className="w-full self-end">
            <Footer></Footer>
          </section>
        </div>
      </section>
    </div>
  )
}

export default Layout;