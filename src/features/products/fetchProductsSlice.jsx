import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchProducts = createAsyncThunk('product/fetchProducts', async () => {
    try {
      const response = await axios.get('http://localhost:4001/api/v1/product/view');
      const data = await response.json();
      return data;
    } catch (error) {
      throw Error('Failed to fetch products');
    }
  });

export const fetchProductSlice = createSlice({
    name: 'fetchProduct',
    initialState: {
        products: [],
        loading: false,
        error: null,
    },

    reducers: {},

    extraReducers: (builders) => {
        builders.addCase(fetchProducts.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        builders.addCase(fetchProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload;
        })
        builders.addCase(fetchProducts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
})


export default fetchProductSlice.actions;
