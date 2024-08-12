"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  EnlistInCourse: false,
  selectPaymentOptions: false,
  
  currentCourseToken: "",

  paymentConfirmation: { active: false, text: "", status: "success" },
  loader: { active: false, text: "" },
  isHidden: true,
};

export const popUpsSlice = createSlice({
  name: "popUps",
  initialState,
  reducers: {
    toggleEnlistInCourse: (state) => {
      return {
        ...initialState,
        isHidden: !state.isHidden,
        EnlistInCourse: !state.EnlistInCourse,
      };
    },
    toggleLoader: (state, action) => {
      state.loader.active = !state.loader.active;
      state.loader.text = action.payload;
    },
    togglePaymentConfirmation: (state, action) => {
      state.isHidden = !state.isHidden
      state.paymentConfirmation.active = !state.paymentConfirmation.active
      state.paymentConfirmation.text = action.payload.text
      state.paymentConfirmation.status = action.payload.status
      console.log(state.isHidden)
    },
    toggleSelectPaymentOptions: (state, action) => {
      return {
        ...initialState,
        currentCourseToken: action.payload,
        isHidden: !state.isHidden,
        selectPaymentOptions: !state.selectPaymentOptions,
      };
    },
    resetPopUps: (state) => {
      return initialState;
    },
    // incrementByAmount: (state, action) => {
    //     state.value += action.payload;
    // }
  },
});

export const {
  toggleEnlistInCourse,
  togglePaymentConfirmation,
  toggleSelectPaymentOptions,
  toggleLoader,
  resetPopUps,
} = popUpsSlice.actions;

export default popUpsSlice.reducer;
