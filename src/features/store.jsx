import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authSlice } from './auth/loginSlice';
import { signUpSlice } from './auth/signupSlice';
import { productsSlice } from './products/products';


const persistConfig = {
    key: 'root',
    storage,
  }

  export const store = configureStore({
    reducer: {
        auth: persistReducer(persistConfig, authSlice.reducer),
        signUp: signUpSlice.reducer,
        products : productsSlice.reducer,
    
    }
})

export const persistor = persistStore(store)