import React from 'react'
import HomeSlider from '../components/HomeSlider/HomeSlider'
import Product from '../components/ProductBox/Product'

const Home = () => {
  return (
    <div className='container'>
      <HomeSlider />
      <Product />
    </div>
  )
}

export default Home