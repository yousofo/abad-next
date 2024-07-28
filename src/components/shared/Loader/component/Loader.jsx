"use client";
import React from "react";
const Loader = ({ loading, text }) => {
  return (
    <div
      className={`${
        !loading && "hidden"
      } absolute z-[999999] w-full h-full left-0 top-0 bg-black bg-opacity-50`}
    >
      <div
        className={` absolute z-10 w-32 h-32 pointer-events-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`}
      >
        <div className="animate-spin border-8 rounded-full h-full border-green-500 border-r-transparent bg-white bg-opacity-50"></div>
        <span className="absolute font-medium left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 leading-[96px] text-xs whitespace-nowrap">
          {text ? text : "جاري التسجيل"}
        </span>
      </div>
    </div>
  );
};

export default Loader;
