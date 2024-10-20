import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import VR from './components/VR'
import Footer from './components/Footer'
import Testimonials from './components/Testimonials'
function page() {
  return (
    <div>
      <Hero></Hero>
      <About></About>
      <Features></Features>
      
      <VR></VR>
      <Testimonials></Testimonials>
      <Footer></Footer>
    </div>
  )
}

export default page