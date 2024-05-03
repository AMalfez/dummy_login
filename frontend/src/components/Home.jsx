import React from 'react'
import NavBar from './Navbar'
import Hero from './Hero'
import Footer from './Footer'

function Home({UserDetails}) {
  return (
    <div>
      <NavBar UserDetails={UserDetails}/>
      <Hero/>
      <Footer/>
    </div>
  )
}

export default Home