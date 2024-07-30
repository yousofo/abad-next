'use client';

import { configureStore } from '@reduxjs/toolkit';
import authSlice from './Features/authSlice';
import counterSlice from './Features/counterSlice';
import navListSlice from './Features/navListSlice';
import popUpsSlice from './Features/popUpsSlice';
import miniNavSlice from './Features/miniNavSlice';
import coursesNavSlice from './Features/coursesNavSlice';
import coursesFilterSlice from './Features/coursesFilterSlice';
import userDataSlice from './Features/userData';


export const store = configureStore({
  reducer: {
    counter: counterSlice,
    auth: authSlice,
    navList: navListSlice,
    miniNav: miniNavSlice,
    popUps: popUpsSlice,
    coursesNav: coursesNavSlice,
    userData: userDataSlice,
    coursesFilter: coursesFilterSlice,
  }
})

