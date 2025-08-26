import React from 'react'
import Hero from '../Layouts/Hero'
import Collection from '../Products/Collection'
import Neaarivels from '../Products/Neaarivels'
import ProductDetails from '../Products/ProductDetails'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Collection/>
      <Neaarivels/>
      <h1 className='text-3xl font-medium text-center'>Best Sellor</h1>
      <ProductDetails/>
    </div>
  )
}

export default Home
