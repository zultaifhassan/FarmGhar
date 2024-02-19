import React, { useEffect } from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct } from "../../features/products/products";
import { conditionalRender } from "../../utills/conditionalRender";
import PageLoader from "../../components/styled/PageLoader/PageLoader";
import GlobalErrorHandler from "../../components/styled/GlobalErrorHandler/GlobalErrorHandler";
import Flex from "../../components/styled/Flex/Flex";
import { MapPin, DollarSign } from "react-feather";
import { timeDifference } from "../../utills/prettifyDate";
import { FaWhatsapp } from "react-icons/fa";
const ProductDetails = () => {
  const { id } = useParams();
  const { getLoading, getError, product } = useSelector(
    (state) => state.products
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSingleProduct({ id }));
  }, [id, dispatch]);
  return (
    <div>
      <Navbar />
      <div className="product-details-container container">
        <div className="product-details-inner">
          {conditionalRender(
            getLoading,
            <PageLoader />,
            conditionalRender(
              !getError,
              <div className="product-details-main">
                <div className="product-details-left">
                  <div className="product-details-left-img">
                    <img src={product?.image} alt={product?.name} />
                  </div>
                  <div className="product-details-left-down">
                    <Flex
                      align="center"
                      justify="space-between"
                      className="div"
                    >
                      <h2>{product?.name}</h2>
                      <Flex align="center" gap={15}>
                        <MapPin />
                        <span>{product?.address}</span>
                      </Flex>
                    </Flex>
                    <p className="mb-40">
                      Posted {timeDifference(product?.createdAt)} Ago
                    </p>

                    <div className="product-details-features mb-30">
                      <h2 className="mb-20">Features</h2>
                      <div className="features">
                        <Flex gap={10}>
                          <div className="feature-image-box">
                            <img src="/icons/gender.png" alt="" />
                          </div>
                          <Flex direction="column">
                            <span>Gender</span>
                            <span>Female</span>
                          </Flex>
                        </Flex>
                        <Flex gap={10}>
                          <div className="feature-image-box">
                            <img src="/icons/age.png" alt="" />
                          </div>
                          <Flex direction="column">
                            <span>Age</span>
                            <span>Female</span>
                          </Flex>
                        </Flex>
                        <Flex gap={10}>
                          <div className="feature-image-box">
                            <img src="/icons/weight.png" alt="" />
                          </div>
                          <Flex direction="column">
                            <span>Weight</span>
                            <span>Female</span>
                          </Flex>
                        </Flex>
                      </div>
                    </div>

                    <div className="product-details-desription">
                      <h2>Description</h2>
                      <p>{product?.description}</p>
                    </div>
                  </div>
                </div>
                <div className="product-details-right">
                  <div className="price-container">
                    <div className="mb-30">
                      <h3>Price</h3>
                      <span>PKR. {product?.price}</span>
                    </div>

                    <div className="whatsapp mb-40">
                      <button>
                        <Flex align="center" gap={15}>
                          <FaWhatsapp /> WhatsApp
                        </Flex>{" "}
                      </button>
                    </div>
                    <div className="buy-btn">
                      <button>
                        <Flex align="center" justify="center">
                          Purchase
                        </Flex>
                      </button>
                    </div>
                  </div>
                </div>
              </div>,
              <GlobalErrorHandler label={getError} />
            )
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetails;
