"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  homeData: {
    lazyLoader: {},
    id: 1,
    titlePlane: "",
    shortDescription: "",
    whoMe1: "",
    whoMe2: "",
    whoMe3: "",
    whoMe4: "",
    titleVideo: "",
    lVideoURL: "",
    formFile: null,
    phone: "",
    wahtsAppNumber: "",
    email: "",
    linkedinURL: "",
    googleURL: "",
    facebookURL: "",
    youtubeURL: "",
    twitterURL: "",
    instagramURL: "",
    snapchatURL: "",
  },
};

export const dataContentSlice = createSlice({
  name: "dataContent",
  initialState,
  reducers: {
    homeData: (state, action) => {
      state.homeData = action.payload;
    },
  },
});

export const { homeData } = dataContentSlice.actions;

export default dataContentSlice.reducer;
