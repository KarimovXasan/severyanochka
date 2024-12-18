import React from 'react'
// Components in figma
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stock from './components/Stock'
import New from './components/New';
import Bought from './components/Bought';

// import bootstrap icons
import 'bootstrap-icons/font/bootstrap-icons.css';
import OurShops from './components/OurShops';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stock />
        <New />
        <Bought />
        <OurShops />
      </main>
      <Footer />
    </>
  )
}

export default App