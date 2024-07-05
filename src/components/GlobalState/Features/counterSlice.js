'use client';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: 'counter'
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        viewName: (state) => { 
          console.log(state)
         }
    }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;