import React from 'react'
import Navbar from '../Components/Navbar'
import Head from '../Components/Head'
import About from '../Components/About'
import Work from '../Components/Work'
import Skills from '../Components/Skills'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Head/>
      <About/>
      <Work/>
      <Skills/>
      <Contact/>
      <Footer/>      
    </div>
  )
}

export default Home