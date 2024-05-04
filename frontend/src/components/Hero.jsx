import React from 'react'
import '../css/Hero.css'
import Table from './Table'
function Hero({UserDetails}) {
  return (
    <div className='hero__container'>
      <div className='hero__title'>Welcome {UserDetails.username}</div>
      <Table UserDetails={UserDetails}/>
    </div>
  )
}

export default Hero