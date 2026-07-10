import React from 'react'
import Header from './header'
// import Product from './product'
// import Home from './home'
import Footer from './footer'
import { Outlet } from 'react-router-dom'
import About from './about'
import Cart from './cart'

const Layout = () => {
  return (<>
    <div>
    </div>
    <Header/>
    <Outlet/>
    <Footer/>
    
    {/* <About/> */}
    {/* <Cart/> */}
    </>
  )
}

export default Layout
