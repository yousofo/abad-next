'use client';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isHidden: true,
  isSignedIn: false,
  signIn: true,
  signUp: false,
  forgotPassword: false,
}


export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    toggleSignIn: (state) => {
      console.log(state.isHidden)
      return {
        ...initialState,
        isHidden: false,
        signIn: true,
      }
    },
    toggleSignUp: (state) => {
      return {
        ...initialState,
        isHidden: false,
        signIn:false,
        signUp: true,
      }
    },
    toggleForgotPassword: (state) => {
      return {
        ...initialState,
        isHidden: false,
        signIn:false,
        forgotPassword: true,
      }
    },
    reset: (state) => {
      return initialState
    },
    // incrementByAmount: (state, action) => {
    //     state.value += action.payload;
    // }
  }
})

export const { toggleSignIn, toggleSignUp, toggleForgotPassword, reset } = authSlice.actions;

export default authSlice.reducer;