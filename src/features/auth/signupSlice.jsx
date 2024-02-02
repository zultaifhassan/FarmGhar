import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    user: null,
    loading: false,
    error: null,
};


export const signUpSlice = createSlice({
    name: 'signUp',
    initialState,
    reducers: {
        signUpStart: (state) => {
            state.loading = true;
            state.error = null;
          },
          signUpSuccess: (state, action) => {
            state.loading = false;
            state.user = action.payload;
          },
          signUpFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
          },
    },
});



export const signUpAsync = createAsyncThunk('signUp', async(apiData, {rejectWithValue}) => {
    try {
        const { data } = await axios.post('http://localhost:4001/api/v1//user/register', apiData);
        return data;
    } catch (error) {
        return rejectWithValue('Error Occured During Signup')
    }
});


export const { signUpStart, signUpSuccess, signUpFailure } = signUpSlice.actions;