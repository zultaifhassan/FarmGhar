import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const initialState = {
    loading: false,
    user: null,
    token: null,
    error: null,
    success: false,
};

export const authSlice = createSlice({
    name : 'auth',
    initialState,
    reducers: {
        clearState : (state) => {
            state.error = null;
            state.success = false;
        },
    },

    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            state.loading = true;
        });

        builder.addCase(login.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.success = true;
        });

        builder.addCase(login.rejected, (state, action) => {
            state.loading = false;
            if(action.error.message === "Requested failed with status code 401"){
                state.error = "Invalid Credentials";
            } else {
                state.error = action.error.message;
            }
        });
    },
})


export const login = createAsyncThunk('login', async(apiData, {rejectWithValue}) => {

    try {
        const { data } = await axios.post('http://localhost:4001/api/v1/user/login', apiData);
        return data;
    } catch (error) {
        if (error?.response?.data?.message) {
            return rejectWithValue(error?.response?.data?.message);
          } else {
            return rejectWithValue('Invalid Credentials');
          }
    }
});




export const { clearState, setError } = authSlice.actions;
