'use client';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  EnlistInCourse: false,
  selectPaymentOptions: false,
  loader: { active: false, text: "" },
  isHidden: true
}


export const popUpsSlice = createSlice({
  name: 'popUps',
  initialState,
  reducers: {
    toggleEnlistInCourse: (state) => {
      return {
        ...initialState,
        isHidden: false,
        EnlistInCourse: true,
      }
    },
    toggleLoader: (state,action) => {
      state.loader.active = !state.loader.active
      state.loader.text = !action.payload
    },
    toggleSelectPaymentOptions: (state) => {
      return {
        ...initialState,
        isHidden: false,
        selectPaymentOptions: true,
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

export const { toggleEnlistInCourse, toggleSelectPaymentOptions, toggleLoader, reset } = popUpsSlice.actions;

export default popUpsSlice.reducer;