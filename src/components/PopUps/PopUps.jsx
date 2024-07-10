"use client"
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import EnlistInCourse from "./EnlistInCourse";
import { reset } from "../GlobalState/Features/popUpsSlice";

const PopUps = () => {
  const isHidden = useSelector(e=>e.popUps.isHidden)
  const dispatch = useDispatch()
  function handleAuthClose(){
    dispatch(reset())
    console.log(isHidden)
  }
  return (
    <div onClick={handleAuthClose} className={`${isHidden?"hidden":"flex"} auth`}>
      <div onClick={(e)=>e.stopPropagation()} className="auth-container bg-white py-7 px-6 md:py-12 md:px-10 rounded-2xl h-fit w-full max-w-[800px]">
        <EnlistInCourse/>
      </div>
    </div>
  );
};

export default PopUps;
