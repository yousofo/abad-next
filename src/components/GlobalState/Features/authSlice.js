'use client';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isHidden: true,
  isSignedIn: false,
  user: JSON.stringify({
    "arabicName": null,
    "englishName": null,
    "idnumber": null,
    "email": null,
    "phone": null,
    "gender": null,
    "birthDate": null,
    "nationality": null,
    "educationsType": null,
    "city": null,
    "token": null
  }),
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
      return initialState
    },
    toggleUser: (state, action) => {
      state.user = action.payload
    }
    // incrementByAmount: (state, action) => {
    //     state.value += action.payload;
    // }
  }
})

export const { toggleSignIn, addSignInError, addSignUpError, toggleSignUp, toggleForgotPassword, toggleNewPassword, toggleSignedIn, toggleUser, toggleResetAuth } = authSlice.actions;

export default authSlice.reducer;