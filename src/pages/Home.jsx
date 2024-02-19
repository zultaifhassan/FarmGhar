import React, { useEffect, useState } from "react";
import HomeSlider from "../components/HomeSlider/HomeSlider";
import Product from "../components/ProductBox/Product";
import ProductB from "../components/ProductBox/ProductB";
import ProductC from "../components/ProductBox/ProductC";
import ProductD from "../components/ProductBox/ProductD";
import ProductE from "../components/ProductBox/ProductE";
import ProductF from "../components/ProductBox/ProductF";
import ServicesSlider from "../components/HomeSlider/ServicesSlider";
import ExploreProducts from "../components/HomeSlider/ExploreProducts";
import Video from "../components/ProductBox/Video";
import ProductBlog from "../components/ProductBox/ProductBlog";
import GetApp from "./About/GetApp";
import Content from "./About/Content";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../features/products/products";
import { IoLocationOutline } from "react-icons/io5";
import { TiEye } from "react-icons/ti";
import { conditionalRender } from "../utills/conditionalRender";
import PageLoader from "../components/styled/PageLoader/PageLoader";
import GlobalErrorHandler from "../components/styled/GlobalErrorHandler/GlobalErrorHandler";
import GlobalEmptyDataHandler from "../components/styled/GlobalEmptyDataHandler/GlobalEmptyDataHandler";
import { timeDifference } from "../utills/prettifyDate";
import { Link } from "react-router-dom";

const Home = () => {
  const { loading, error, homeProducts } = useSelector(
    (state) => state.products
  );
  const [category, setCategory] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts(category));
  }, [dispatch, category]);
  return (
    <>
      <Navbar />
      <div className="container">
        <HomeSlider setCategory={setCategory} />
        {/* <Product /> */}
        {/* <ProductB /> */}
        {/* <ProductC /> */}
        {/* <ProductD /> */}
        {/* <ProductE /> */}
        {/* <ProductF /> */}
        {/* <ServicesSlider /> */}
        {/* <ExploreProducts /> */}
        <div className="product-outer-div">
          <div className="product-list-header">
            <h4>Animals</h4>
          </div>
          <div className="product-list-outer">
            {conditionalRender(
              loading,
              <PageLoader />,
              conditionalRender(
                !error,
                conditionalRender(
                  homeProducts?.length > 0,
                  homeProducts?.map((item, index) => {
                    return (
                      <Link to={`/product/${item?._id}`}>
                        <div className="animal-product-list">
                          <div className="product-image">
                            <img src={item?.image} alt="" />
                          </div>
                          <div className="product-details-price">
                            <div className="animal-name-des">
                              <h3>{item?.name}</h3>
                            </div>
                            <div className="posted-place-animal">
                              <p>
                                Posted {timeDifference(item?.createdAt)} Ago
                              </p>
                              <p>{item?.category}</p>
                            </div>
                            <h5>RS {item?.price}</h5>
                            <div className="location-view">
                              <div className="location-icon-place">
                                <IoLocationOutline />
                                <p>{item?.address}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    );
                  }),
                  <div style={{ height: "40vh" }}>
                    <GlobalEmptyDataHandler label="No Products to show currently" />
                  </div>
                ),
                <GlobalErrorHandler label={error} />
              )
            )}
          </div>
        </div>
        {/* <Video /> */}
        <ProductBlog />
        <GetApp />
        <Content />
      </div>
      <Footer />
    </>
  );
};

export default Home;
