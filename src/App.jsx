import React from 'react'
import Navbar from './Components/Navbar'
import './App.css'
import Hero from './Components/Hero'
import Stripes from './Components/Stripes'
import Products from './Components/Products'
import Marqees from './Components/Marqees'
import Cards from './Components/Cards'
import Footer from './Components/Footer'
import LocomotiveScroll from 'locomotive-scroll';
import Loader from './Components/Loader'
import MouseMove from './Components/MouseMove'


function App() {
  const locomotiveScroll = new LocomotiveScroll();

 

  return (
    <div   className='w-full min-h-screen bg-zinc-800'>
 <MouseMove />
      <Loader />
      <Navbar />
      <Hero />
      <Stripes />
      <Products />
      <Marqees />
      <Cards />
      <Footer />
    </div>
  )
}

export default App