import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedWork from './components/FeaturedWork'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
const
 App = () => {
  return (
    <div className='min-h-screen bg-stone-50 text-stone-800'>
      <Navbar/>
      <Hero/>
      <FeaturedWork/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App;