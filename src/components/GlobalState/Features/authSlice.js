'use client';

import { createSlice } from '@reduxjs/toolkit';



const initialState = {
    isHidden: true,
    isSignedIn:false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        toggleAuthMenu: (state) => { 
          console.log("is hidden = "+ state.isHidden)
          state.isHidden = !state.isHidden
          
         },
        // incrementByAmount: (state, action) => {
        //     state.value += action.payload;
        // }
    }
})

export const { toggleAuthMenu } = authSlice.actions;

export default authSlice.reducer;