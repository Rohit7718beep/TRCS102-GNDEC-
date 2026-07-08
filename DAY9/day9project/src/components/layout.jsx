import React from 'react'
import Header from './header'
// import Product from './product'
// import Home from './home'
import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (<>
    <div>
    </div>
    <Header/>
    <Outlet/>
    </>
  )
}

export default Layout
