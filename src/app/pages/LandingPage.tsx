import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import About from '../components/About'
import Testimonials from '../components/Testimonials'
import Blogs from '../components/Blogs'


const LandingPage = () => {
  return (
    <>
    <Navbar/>
    <div id="about">
        <About />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="blogs">
        <Blogs />
      </div>
      <div id="contact">
        <Footer />
      </div>
    </>
  )
}

export default LandingPage
