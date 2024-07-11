'use client';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  active: false,
}

export const coursesNavSlice = createSlice({
  name: 'coursesNav',
  initialState,
  reducers: {
    toggleCoursesNav: (state) => {
      state.active = !state.active
    },
    reset: (state) => {
      state.active =false
    },
  }
})

export const { toggleCoursesNav, reset } = coursesNavSlice.actions;

export default coursesNavSlice.reducer;