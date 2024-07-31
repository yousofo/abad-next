'use client';

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const getUserData = () => {
  if (typeof window !== 'undefined') {
    const userInfo = window.localStorage.getItem('userData');
    if (userInfo) return JSON.parse(userInfo)
    else return null
  }
  return null;
};

const userData = getUserData()

const initialState = {
  info: userData,
  basket: { data: [], status: null, error: null }
}

//fetching courses data
export const fetchUserBasket = createAsyncThunk('userData/fetchUserBasket', async (token) => {
  const response = await fetch(`/api/reservations/getBasketByToken?token=${token}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return await response.json();
});

export const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    toggleUpdateInfo: (state, action) => {
      state.info = action.payload
    },
    toggleUpdateBasket: (state, action) => {
      state.basket = action.payload
    },
    // toggleResetUserData: (state, action) => {
    //   state.basket = action.payload
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserBasket.pending, (state) => {
        state.basket.status = 'loading';
      })
      .addCase(fetchUserBasket.fulfilled, (state, action) => {
        state.basket.status = 'succeeded';
        state.basket.data = action.payload;
      })
      .addCase(fetchUserBasket.rejected, (state, action) => {
        state.basket.status = 'failed';
        state.basket.error = action.error.message;
      });
  },
})

export const { toggleUpdateInfo, toggleUpdateBasket } = userDataSlice.actions;

export default userDataSlice.reducer;