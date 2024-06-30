'use client';

import { createSlice } from '@reduxjs/toolkit';



const initialState = {
  isHidden: true,
  isSignedIn: false,
  signIn: true,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    toggleAuthMenu: (state) => {
      state.isHidden = !state.isHidden
    },
    toggleAuthMode: (state) => {
      state.signIn = !state.signIn
    },
    reset: (state) => {
      state.isHidden =true
      state.signIn=true
    },
    // incrementByAmount: (state, action) => {
    //     state.value += action.payload;
    // }
  }
})

export const { toggleAuthMenu, toggleAuthMode, reset } = authSlice.actions;

export default authSlice.reducer;