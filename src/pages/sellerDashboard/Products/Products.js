import React, { useEffect } from "react";
import "./style.css";
import Flex from "../../../components/styled/Flex/Flex";
import Button from "../../../components/styled/Button/Button";
import {
  Table,
  TableBody,
  TableBodyData,
  TableHead,
  TableHeadData,
  TableRow,
  TableText,
} from "../../../components/styled/Table/Table";
import PageLoader from "../../../components/styled/PageLoader/PageLoader";
import { Link } from "react-router-dom";
import { Edit, Trash2 } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { conditionalRender } from "../../../utills/conditionalRender";
import {
  clearState,
  deleteProduct,
  getSellerProducts,
} from "../../../features/products/products";
import GlobalEmptyDataHandler from "../../../components/styled/GlobalEmptyDataHandler/GlobalEmptyDataHandler";
import GlobalErrorHandler from "../../../components/styled/GlobalErrorHandler/GlobalErrorHandler";
import BtnLoader from "../../../components/styled/BtnLoader/BtnLoader";
import Swal from "sweetalert2";
const Products = () => {
  const { loading, error, products, delSuccess, delError, delLoading } =
    useSelector((state) => state.products);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    if (user?.token) {
      dispatch(getSellerProducts({ token: user?.token }));
    }
    if (delSuccess) {
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success",
      });
      dispatch(clearState());
    }
  }, [dispatch, user?.token, delSuccess]);
  useEffect(() => {
    if (delError) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: delError,
        showConfirmButton: true,
      });
      dispatch(clearState());
    }
  }, [delError, dispatch]);
  return (
    <div style={{ position: "relative" }}>
      <Flex align="center" justify="space-between" className="mb-20">
        <h1 className="dashboard-main-heading">Products</h1>
        <Link to="/seller/create-product">
          <Button label="Create Product" />
        </Link>
      </Flex>

      {conditionalRender(
        loading,
        <PageLoader />,
        conditionalRender(
          !error,
          <Table>
            <TableHead>
              <TableRow>
                <TableHeadData>
                  <TableText>Name</TableText>
                </TableHeadData>
                <TableHeadData>
                  <TableText>Price</TableText>
                </TableHeadData>
                <TableHeadData>
                  <TableText>Image</TableText>
                </TableHeadData>
                <TableHeadData>
                  <TableText>Category</TableText>
                </TableHeadData>
                <TableHeadData>
                  <TableText>Status</TableText>
                </TableHeadData>
                <TableHeadData>
                  <TableText>Actions</TableText>
                </TableHeadData>
              </TableRow>
            </TableHead>
            {conditionalRender(
              products?.length > 0,
              <TableBody>
                {products?.map((item, index) => {
                  return (
                    <TableRow key={index}>
                      <TableBodyData>
                        <TableText>{item?.name}</TableText>
                      </TableBodyData>
                      <TableBodyData>
                        <TableText>RS. {item?.price}</TableText>
                      </TableBodyData>
                      <TableBodyData>
                        <TableText>
                          {
                            <img
                              src={item?.image}
                              alt={item?.name}
                              height={40}
                              width={40}
                            />
                          }
                        </TableText>
                      </TableBodyData>
                      <TableBodyData>
                        <TableText>{item?.category}</TableText>
                      </TableBodyData>
                      <TableBodyData>
                        <TableText>{item?.status}</TableText>
                      </TableBodyData>
                      <TableBodyData>
                        <Flex align="center" justify="center" gap={10}>
                          <Edit />
                          <Trash2
                            cursor="pointer"
                            onClick={() => {
                              Swal.fire({
                                title: "Are you sure?",
                                text: "You won't be able to revert this!",
                                icon: "warning",
                                showCancelButton: true,
                                confirmButtonColor: "#3085d6",
                                cancelButtonColor: "#d33",
                                confirmButtonText: `${
                                  delLoading ? (
                                    <BtnLoader color="#fff" />
                                  ) : (
                                    "Delete"
                                  )
                                }`,
                              }).then((result) => {
                                if (result.isConfirmed) {
                                  dispatch(
                                    deleteProduct({
                                      token: user?.token,
                                      id: item?._id,
                                    })
                                  );
                                }
                              });
                            }}
                          />
                        </Flex>
                      </TableBodyData>
                    </TableRow>
                  );
                })}
              </TableBody>,
              <GlobalEmptyDataHandler label="No products to show" />
            )}
          </Table>,
          <GlobalErrorHandler label={error} />
        )
      )}

      {/* <PageLoader/> */}
    </div>
  );
};

export default Products;
