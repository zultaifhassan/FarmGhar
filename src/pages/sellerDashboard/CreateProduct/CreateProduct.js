import React, { useEffect, useState } from "react";
import "./style.css";
import Flex from "../../../components/styled/Flex/Flex";
import { useForm } from "react-hook-form";
import GlobalDropDown from "../../../components/styled/Form/GlobalDropDown/GlobalDropDown";
import Button from "../../../components/styled/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { clearState, createProduct } from "../../../features/products/products";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const CreateProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [category, setCategory] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showImage, setShowImage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const { addLoading, addSuccess, addError } = useSelector(
    (state) => state.products
  );
  const { user } = useSelector((state) => state.auth);
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    console.log(file);
    // Check if the file is an image
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const image = new Image();

        image.onload = () => {
          const { width, height } = image;
          const minWidth = 100;
          const minHeight = 100;
          const maxWidth = 1500;
          const maxHeight = 1500;
          if (
            width >= minWidth &&
            height >= minHeight &&
            width <= maxWidth &&
            height <= maxHeight
          ) {
            setSelectedImage(file);
            setShowImage(reader.result);
            setErrorMessage("");
          } else {
            setErrorMessage(
              "Image size is not within the allowed limits(100-701 x 100-445). Please choose an image with appropriate dimensions."
            );
            setSelectedImage(null);
            setShowImage(null);
          }
        };

        image.src = reader.result;
      };

      reader.readAsDataURL(file);
    } else {
      setErrorMessage("Please select an image");
    }
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleCreateProduct = (values) => {
    const apiData = new FormData();
    apiData.append("name", values.name);
    apiData.append("price", values.price);
    apiData.append("description", values.description);
    apiData.append("address", values.address);
    apiData.append("category", category.value);
    apiData.append("image", showImage);

    dispatch(createProduct({ token: user?.token, data: apiData }));
  };

  useEffect(() => {
    if (addSuccess) {
      dispatch(clearState());
      navigate("/seller/products");
    }
    if (addError) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: addError,
        showConfirmButton: true,
      });
      dispatch(clearState());
    }
  }, [addError, addSuccess, dispatch, navigate]);
  return (
    <div>
      <h1 className="dashboard-main-heading mb-30">Create Product</h1>
      <form onSubmit={handleSubmit(handleCreateProduct)}>
        <div className="global-outer-inputs mb-30">
          <Flex
            className={`global-input-container global-outer-input`}
            direction="column"
            gap={10}
          >
            <label htmlFor="name">Product Name*</label>
            <div className="global-input-container-input global-input-container-input-with-image">
              <input
                type={"text"}
                placeholder={"Product Name"}
                {...register("name", {
                  required: "Please Enter Product Name",
                  maxLength: {
                    value: 20,
                    message: "Should not be greater then characters",
                  },
                })}
                id="name"
              />
            </div>
            {errors?.name && (
              <p className="global-input-error">{errors?.name?.message}</p>
            )}
          </Flex>
          <Flex
            className={`global-input-container global-outer-input`}
            direction="column"
            gap={10}
          >
            <label htmlFor="price">Price*</label>
            <div className="global-input-container-input global-input-container-input-with-image">
              <input
                type={"number"}
                placeholder={"Product Price"}
                {...register("price", {
                  required: "Please Enter Price",
                  maxLength: {
                    value: 10,
                    message: "Should not be greater then  10 characters",
                  },
                })}
                id="price"
              />
            </div>
            {errors?.price && (
              <p className="global-input-error">{errors?.price?.message}</p>
            )}
          </Flex>
          <Flex
            className={`global-input-container global-outer-input`}
            direction="column"
            gap={10}
          >
            <label htmlFor="address">Address*</label>
            <div className="global-input-container-input global-input-container-input-with-image">
              <input
                type={"address"}
                placeholder={"Address"}
                {...register("address", {
                  required: "Please Enter Price",
                  maxLength: {
                    value: 30,
                    message: "Should not be greater then  30 characters",
                  },
                })}
                id="address"
              />
            </div>
            {errors?.address && (
              <p className="global-input-error">{errors?.address?.message}</p>
            )}
          </Flex>
          <div className={`global-outer-input`}>
            <GlobalDropDown
              label="Select Category*"
              stateHandler={category}
              setStateHandler={setCategory}
              options={[
                { name: "Cow", value: "cow" },
                { name: "Sheep", value: "sheep" },
                { name: "Goat", value: "goat" },
                { name: "Donkey", value: "donkey" },
                { name: "Horse", value: "horse" },
                { name: "Dairy Product", value: "dairy" },
              ]}
              background="#fff"
            />
          </div>
        </div>

        <div
          className="lable-textarea-group lable-input-group mb-40"
          style={{ maxWidth: "900px" }}
        >
          <label htmlFor="notes">Description*</label>
          <div className="edit-client-icon-textarea">
            <textarea
              name=""
              id="notes"
              cols="135"
              rows="3"
              placeholder="Notes"
              {...register("description", {
                required: "Please Add description",
              })}
            ></textarea>
          </div>
          <p className="global-input-error">
            {errors?.description && errors?.description?.message}
          </p>
        </div>
        <div className="upload-content-image-section mb-40" id="img-box">
          <label htmlFor="file">
            <div>
              {selectedImage ? (
                <div className="upload-img">
                  {/* <img src={selectedImage} alt="Preview" /> */}
                  {selectedImage && <img src={showImage} alt="Selected" />}
                </div>
              ) : (
                // <img src={uploadimg} alt="Preview" />
                <>
                  <div className="upload-photo">
                    <div className="up-img">
                      {/* <img src={uploadimg} alt="" /> */}
                      <span className="drag-drop">Select Image</span>
                    </div>
                  </div>
                  {/* {errorMessage && (
                      <div className="error-message">{errorMessage}</div>
                    )} */}
                </>
              )}
            </div>
          </label>
          <input
            className="upload-content-image"
            type="file"
            accept="image/*"
            name="image"
            id="file"
            onChange={handleImageUpload}
          />
          <label htmlFor="file" className="upload-content-label">
            Choose image
          </label>
        </div>

        <Flex align="center" gap={20}>
          <Button
            label="Create Product"
            type="submit"
            loading={addLoading}
            loaderColor="#fff"
          />
          <Button label="Cancel" variant="outline" />
        </Flex>
      </form>
    </div>
  );
};

export default CreateProduct;
