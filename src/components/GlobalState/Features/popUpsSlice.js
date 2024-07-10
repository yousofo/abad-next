'use client';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  EnlistInCourse: false,
  isHidden:true
}


export const popUpsSlice = createSlice({
  name: 'popUps',
  initialState,
  reducers: {
    toggleEnlistInCourse: (state) => {
      return {
        ...initialState,
        isHidden:false,
        EnlistInCourse: true,
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

export const { toggleEnlistInCourse, reset } = popUpsSlice.actions;

export default popUpsSlice.reducer;