
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Product.css";
import "./ProductBlog.css"

 const paragraphStyles = {
    WebkitLineClamp:1,
    WebkitBoxOrient:'vertical',
    overflow:'hidden',
    display:'-webkit-box', 
 }

 const headingStyles = {
    WebkitLineClamp:2,
    WebkitBoxOrient:'vertical',
    overflow:'hidden',
    display:'-webkit-box',
 }
const ProductBlog = () => {

  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate();

  const handleReadMore = () =>{
    navigate('/blog');
  }

  return (
    <div className="product-outer-div">
      <div className="product-list-header">
        <h4>Our Blogs</h4>
        <Link> View All Blogs</Link>
      </div>
      <div className="product-list-outer">
        <div className="animal-product-list">
          <div className="product-image">
            <img src="/images/cow.png" alt="" />
          </div>
          <div className="product-details-price">
            <div className="animal-name-des">
              <h3 style={  isOpen ? null :paragraphStyles}>15 care tips for</h3>
            </div>
            <div className="posted-place-animal">
              <p style={isOpen ? null : headingStyles} >The problem that face hjjhjdskjkjds jdskfhksd sjjhs ddsjcbsk skkjjjbsdd sd </p>
            </div>
            <div className="location-view">
              <div className="location-icon-place">
                <p onClick={handleReadMore}>Read More</p>
              </div>
            </div>
          </div>
        </div>
        <div className="animal-product-list">
          <div className="product-image">
            <img src="/images/cow.png" alt="" />
          </div>
          <div className="product-details-price">
            <div className="animal-name-des">
              <h3 style={  isOpen ? null :paragraphStyles}>15 care tips for</h3>
            </div>
            <div className="posted-place-animal">
              <p style={isOpen ? null : headingStyles}>Posted 2d Ago</p>
            </div>
            <div className="location-view">
              <div className="location-icon-place">
                <p onClick={handleReadMore}>Read More</p>
              </div>
            </div>
          </div>
        </div>
        <div className="animal-product-list">
          <div className="product-image">
            <img src="/images/cow.png" alt="" />
          </div>
          <div className="product-details-price">
            <div className="animal-name-des">
              <h3 style={  isOpen ? null :paragraphStyles}>15 care tips for</h3>
            </div>
            <div className="posted-place-animal">
              <p style={isOpen ? null : headingStyles}>Posted 2d Ago</p>
            </div>
            <div className="location-view">
              <div className="location-icon-place">
                <p onClick={handleReadMore}>Read More</p>
              </div>
            </div>
          </div>
        </div>
        <div className="animal-product-list">
          <div className="product-image">
            <img src="/images/cow.png" alt="" />
          </div>
          <div className="product-details-price">
            <div className="animal-name-des">
              <h3 style={  isOpen ? null :paragraphStyles}>15 care tips for</h3>
            </div>
            <div className="posted-place-animal">
              <p style={isOpen ? null : headingStyles}>Posted 2d Ago</p>
            </div>
            <div className="location-view">
              <div className="location-icon-place">
                <p onClick={handleReadMore}>Read More</p>
              </div>
            </div>
          </div>
        </div>
        <div className="animal-product-list">
          <div className="product-image">
            <img src="/images/cow.png" alt="" />
          </div>
          <div className="product-details-price">
            <div className="animal-name-des">
              <h3 style={  isOpen ? null :paragraphStyles}>15 care tips for</h3>
            </div>
            <div className="posted-place-animal">
              <p style={isOpen ? null : headingStyles}>Posted 2d Ago</p>
            </div>
            <div className="location-view">
              <div className="location-icon-place">
                <p onClick={handleReadMore}>Read More</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBlog;
