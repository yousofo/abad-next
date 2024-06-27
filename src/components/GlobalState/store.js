'use client';

import { configureStore } from '@reduxjs/toolkit';
import authSlice from './Features/authSlice';
import counterSlice from './Features/counterSlice';


export const store = configureStore({
    reducer: {
        counter: counterSlice,
        auth:authSlice,
    }
})

