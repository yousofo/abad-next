'use client';

import { createSlice } from '@reduxjs/toolkit';


const deleteUserData = () => {
  if (typeof window != undefined) {
    return window.localStorage.removeItem('userData');
  }
  return null;
};



const initialState = {
  isHidden: true,
  isSignedIn: false,
  signIn: false,
  signInError: "",
  signUpError: "",
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
    addSignInError: (state, action) => {
      state.signInError = action.payload
    },
    addSignUpError: (state, action) => {
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
    toggleResetAuth: (state) => {
      deleteUserData()
      return initialState
    },
  }
})

export const { toggleSignIn, addSignInError, addSignUpError, toggleSignUp, toggleForgotPassword, toggleNewPassword, toggleSignedIn, toggleResetAuth } = authSlice.actions;

export default authSlice.reducer;