import React from 'react'
// Components in figma
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stock from './components/Stock'
import New from './components/New';


// import bootstrap icons
import 'bootstrap-icons/font/bootstrap-icons.css';

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stock />
        <New />
      </main>
    </>
  )
}

export default App