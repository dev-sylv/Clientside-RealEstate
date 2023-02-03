import React from 'react'
import Hero from '../Hero/Hero'
import PerfectHome from './PerfectHome'
import Property from './Properties/Property'
import Services from './Services/Services'
import WhiteComp from './WhiteComp'

const HomeScreen = () => {
  return (
    <div>
      <Hero />
      <Property />
      <Services />
      <WhiteComp />
      <PerfectHome />
    </div>
  )
}

export default HomeScreen