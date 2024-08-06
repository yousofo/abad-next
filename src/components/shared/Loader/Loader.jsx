"use client";
import React from "react";
import { useSelector } from "react-redux";

const Loader = () => {
  const { active, text } = useSelector((state) => state.popUps.loader);

  return (
    <div
      className={`${
        !active && "hidden"
      } fixed z-[99999] w-screen h-screen left-0 top-0 bg-black bg-opacity-50`}
    >
      <div className="absolute z-10 w-32 h-32 pointer-events-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="animate-spin border-8 rounded-full h-full border-green-500 border-r-transparent bg-white bg-opacity-50" />
        <span className="absolute font-medium left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 leading-[96px] text-xs whitespace-nowrap">
          {text || "جاري التسجيل"}
        </span>
      </div>
    </div>
  );
};

export default Loader;
