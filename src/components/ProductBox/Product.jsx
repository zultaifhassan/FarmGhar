import React from "react";
import { Link } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { TiEye } from "react-icons/ti";
import "./Product.css";

const Product = () => {
  return (
    <div className="product-outer-div">
      <div className="product-list-header">
        <h4>Animals</h4>
        <Link> View All Products</Link>
      </div>
      <div className="product-list-outer">
        <div className="animal-product-list">
          <div className="product-image">
            <img src="/images/cow.png" alt="" />
          </div>
          <div className="product-details-price">
            <div className="animal-name-des">
              <h3>Cow</h3>
            </div>
            <div className="posted-place-animal">
              <p>Posted 2d Ago</p>
              <h5>RS 90000</h5>
            </div>
            <div className="location-view">
              <div className="location-icon-place">
                <IoLocationOutline />
                <p>Gilgit</p>
              </div>
              <div className="view-eye-icon">
                <TiEye />
                <p>2345</p>
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
              <h3>Cow</h3>
            </div>
            <div className="posted-place-animal">
              <p>Posted 2d Ago</p>
              <h5>RS 90000</h5>
            </div>
            <div className="location-view">
              <div className="location-icon-place">
                <IoLocationOutline />
                <p>Gilgit</p>
              </div>
              <div className="view-eye-icon">
                <TiEye />
                <p>2345</p>
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
              <h3>Cow</h3>
            </div>
            <div className="posted-place-animal">
              <p>Posted 2d Ago</p>
              <h5>RS 90000</h5>
            </div>
            <div className="location-view">
              <div className="location-icon-place">
                <IoLocationOutline />
                <p>Gilgit</p>
              </div>
              <div className="view-eye-icon">
                <TiEye />
                <p>2345</p>
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
              <h3>Cow</h3>
            </div>
            <div className="posted-place-animal">
              <p>Posted 2d Ago</p>
              <h5>RS 90000</h5>
            </div>
            <div className="location-view">
              <div className="location-icon-place">
                <IoLocationOutline />
                <p>Gilgit</p>
              </div>
              <div className="view-eye-icon">
                <TiEye />
                <p>2345</p>
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
              <h3>Cow</h3>
            </div>
            <div className="posted-place-animal">
              <p>Posted 2d Ago</p>
              <h5>RS 90000</h5>
            </div>
            <div className="location-view">
              <div className="location-icon-place">
                <IoLocationOutline />
                <p>Gilgit</p>
              </div>
              <div className="view-eye-icon">
                <TiEye />
                <p>2345</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
