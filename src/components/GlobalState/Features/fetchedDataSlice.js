'use client';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  HomeCourses: []
}


export const fetchedDataSlice = createSlice({
  name: 'fetchedData',
  initialState,
  reducers: {
    setHomeCourses: (state, action) => {
      state.HomeCourses = action.payload
    },
    resetFetchedData: (state) => {
      return initialState
    },
    // incrementByAmount: (state, action) => {
    //     state.value += action.payload;
    // }
  }
})

export const { resetFetchedData,setHomeCourses } = fetchedDataSlice.actions;

export default fetchedDataSlice.reducer;