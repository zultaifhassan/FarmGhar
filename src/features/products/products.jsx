import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../config";

const initialState = {
  products: null,
  homeProducts: null,
  product: null,
  loading: false,
  error: null,
  addLoading: false,
  addError: null,
  addSuccess: false,
  getLoading: false,
  getError: null,
  delLoading: false,
  delError: false,
  delSuccess: false,
};
export const productsSlice = createSlice({
  name: "productsSlice",
  initialState,
  reducers: {
    clearState: (state) => {
      state.addError = null;
      state.addSuccess = false;
      state.delError = null;
      state.delSuccess = false;
      state.error = null;
      state.getError = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.homeProducts = action.payload;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(getSellerProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getSellerProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
    builder.addCase(getSellerProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(createProduct.pending, (state) => {
      state.addLoading = true;
    });
    builder.addCase(createProduct.rejected, (state, action) => {
      state.addLoading = false;
      state.addError = action.payload;
    });
    builder.addCase(createProduct.fulfilled, (state) => {
      state.addLoading = false;
      state.addSuccess = true;
    });
    builder.addCase(deleteProduct.pending, (state) => {
      state.delLoading = true;
    });
    builder.addCase(deleteProduct.rejected, (state, action) => {
      state.delLoading = false;
      state.delError = action.payload;
    });
    builder.addCase(deleteProduct.fulfilled, (state) => {
      state.delLoading = false;
      state.delSuccess = true;
    });
    builder.addCase(getSingleProduct.pending,(state)=>{
      state.getLoading = true;
    })
    builder.addCase(getSingleProduct.fulfilled,(state,action)=>{
      state.getLoading = false;
      state.product = action.payload;
    })
    builder.addCase(getSingleProduct.rejected,(state,action)=>{
      state.getLoading = false;
      state.getError = action.payload;
    })
  },
});

export const getProducts = createAsyncThunk(
  "fetchProducts",
  async (category, { rejectWithValue }) => {
    try {
      let url = `${BASE_URL}/product/view`;
      if (category) {
        url += `?category=${category}`;
      }
      const { data } = await axios.get(url);
      return data?.data;
    } catch (error) {
      if (error?.response?.data?.message) {
        return rejectWithValue(error?.response?.data?.message);
      } else {
        return rejectWithValue("Some error occured please try again later");
      }
    }
  }
);

export const getSellerProducts = createAsyncThunk(
  "getSellerProducts",
  async (apiData, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/product/by-farmer`, {
        headers: {
          Authorization: `Bearer ${apiData.token}`,
        },
      });
      return data?.data;
    } catch (error) {
      if (error?.response?.data?.message) {
        return rejectWithValue(error?.response?.data?.message);
      } else {
        return rejectWithValue("Some error occured please try again later");
      }
    }
  }
);
export const createProduct = createAsyncThunk(
  "createProduct",
  async (apiData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `${BASE_URL}/product/createProduct`,
        apiData.data,
        {
          headers: {
            Authorization: `Bearer ${apiData.token}`,
            "Content-Type": "application/json",
          },
        }
      );
      return data?.data;
    } catch (error) {
      if (error?.response?.data?.message) {
        return rejectWithValue(error?.response?.data?.message);
      } else {
        return rejectWithValue("Some error occured please try again later");
      }
    }
  }
);
export const deleteProduct = createAsyncThunk(
  "deleteProduct",
  async (apiData, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`${BASE_URL}/product/${apiData.id}`, {
        headers: {
          Authorization: `Bearer ${apiData.token}`,
          "Content-Type": "application/json",
        },
      });
      return data?.data;
    } catch (error) {
      if (error?.response?.data?.message) {
        return rejectWithValue(error?.response?.data?.message);
      } else {
        return rejectWithValue("Some error occured please try again later");
      }
    }
  }
);
export const getSingleProduct = createAsyncThunk(
  "getSingleProduct",
  async (apiData, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/product/view/${apiData.id}`, {
        headers: {
          Authorization: `Bearer ${apiData.token}`,
          "Content-Type": "application/json",
        },
      });
      return data?.data;
    } catch (error) {
      if (error?.response?.data?.message) {
        return rejectWithValue(error?.response?.data?.message);
      } else {
        return rejectWithValue("Some error occured please try again later");
      }
    }
  }
);

export const { clearState } = productsSlice.actions;
