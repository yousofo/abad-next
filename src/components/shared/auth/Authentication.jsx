"use client"
import React from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import "./auth.css";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "@/components/GlobalState/Features/authSlice";

const Authentication = () => {
  const isHidden = useSelector(e=>e.auth.isHidden)
  const dispatch = useDispatch()
  function handleAuthClose(){
    dispatch(reset())
    console.log(isHidden)
  }
  return (
    <div onClick={handleAuthClose} className={`${isHidden?"hidden":"flex"} auth`}>
      <div onClick={(e)=>e.stopPropagation()} className="auth-container bg-white py-7 px-6 md:py-12 md:px-10 rounded-2xl h-fit w-full max-w-[573px]">
        <SignIn />
        <SignUp />
      </div>
    </div>
  );
};

export default Authentication;
