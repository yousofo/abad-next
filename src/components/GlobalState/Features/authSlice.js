'use client';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isHidden: true,
  isSignedIn: false,
  signIn: false,
  signUp: false,
  forgotPassword: false,
  newPassword: false,
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
        signUp: true,
      }
    },
    toggleForgotPassword: (state) => {
      return {
        ...initialState,
        isHidden: false,
        forgotPassword: true,
      }
    },
    toggleNewPassword: (state) => {
      return {
        ...initialState,
        isHidden: false,
        newPassword: true,
      }
    },
    toggleSignedIn: () => {
      return {
        ...initialState,
        isSignedIn: true,
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

export const { toggleSignIn, toggleSignUp, toggleForgotPassword, toggleNewPassword, toggleSignedIn, reset } = authSlice.actions;

export default authSlice.reducer;