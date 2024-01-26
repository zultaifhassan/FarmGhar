import React from 'react'
import BreadCrumb from './BreadCrumb'
import MainBlog from './MainBlog'
import BlogsProducts from './BlogsProducts'
import GetApp from '../About/GetApp'

const Blog = () => {
  return (
    <div className='container'>
      <BreadCrumb/>
      <MainBlog/>
      <BlogsProducts/>
      <GetApp/>
    </div>
  )
}

export default Blog