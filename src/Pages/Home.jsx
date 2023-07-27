import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import FeaturedProducts from '../components/FeaturedProducts'

const Home = () => {
  return (
    <main>
    <Hero text={"Shopkart"}/>
    <FeaturedProducts/>
    <Services/>
    </main>
  )
}

export default Home