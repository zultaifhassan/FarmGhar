import React from 'react'
import HomeSlider from '../components/HomeSlider/HomeSlider'
import Product from '../components/ProductBox/Product'
import ProductB from '../components/ProductBox/ProductB'
import ProductC from '../components/ProductBox/ProductC'
import ProductD from '../components/ProductBox/ProductD'
import ProductE from '../components/ProductBox/ProductE'
import ProductF from '../components/ProductBox/ProductF'
import ServicesSlider from '../components/HomeSlider/ServicesSlider'
import ExploreProducts from '../components/HomeSlider/ExploreProducts'
import Video from '../components/ProductBox/Video'
import ProductBlog from '../components/ProductBox/ProductBlog'
import GetApp from './About/GetApp'
import Content from './About/Content'

const Home = () => {
  return (
    <div className='container'>
      <HomeSlider />
      <Product />
      <ProductB/>
      <ProductC/>
      <ProductD/>
      <ProductE/>
      <ProductF/>
      <ServicesSlider/>
      <ExploreProducts/>
      <Video/>
      <ProductBlog/>
      <GetApp/>
      <Content/>
    </div>
  )
}

export default Home;