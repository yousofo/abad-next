'use client';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isHidden: true,
  isSignedIn: false,
  user:{

  },
  signIn: false,
  signInError:"",
  signUpError:"",
  signUp: false,
  forgotPassword: false,
  newPassword: false,
}


export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    toggleSignIn: (state) => {
      return {
        ...initialState,
        isHidden: false,
        signIn: true,
      }
    },
    addSignInError: (state,action) => {
      state.signInError = action.payload
    },
    addSignUpError: (state,action) => {
      state.signUpError = action.payload
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

export const { toggleSignIn,addSignInError,addSignUpError, toggleSignUp, toggleForgotPassword, toggleNewPassword, toggleSignedIn, reset } = authSlice.actions;

export default authSlice.reducer;