"use client";
import React, { useState } from "react";
const Loader = ({ loading }) => {
  return (
    <div className="absolute z-[999999] w-full h-full">
      <div
        className={`${
          !loading && "hidden"
        } absolute z-10 w-24 h-24 pointer-events-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`}
      >
        <div className="animate-spin border-4 rounded-full h-full border-green-500 border-r-transparent bg-white bg-opacity-70"></div>
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 leading-[96px] text-xs whitespace-nowrap">
          جاري التسجيل
        </span>
      </div>
    </div>
  );
};

export default Loader;
