import React from 'react'
import { Outlet} from 'react-router'
import Header from './header/Header'
import Footer from './footer/Footer'
import { ScrollRestoration } from 'react-router-dom'

const RootLayout = () => {
  return (
    <>
      <Header />
      <ScrollRestoration/>
      <Outlet />
      <Footer />
    </>
  );
}

export default RootLayout
