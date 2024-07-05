'use client';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  active: false,
}

export const navListSlice = createSlice({
  name: 'navList',
  initialState,
  reducers: {
    toggleNavList: (state) => {
      state.active = !state.active
    },
    reset: (state) => {
      state.active =false
    },
  }
})

export const { toggleNavList, reset } = navListSlice.actions;

export default navListSlice.reducer;