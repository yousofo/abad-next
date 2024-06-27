"use client"
import React from "react";
import SignIn from "./SignIn";
import SignOut from "./SignOut";
import "./auth.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleAuthMenu } from "@/components/GlobalState/Features/authSlice";

const Authentication = () => {
  const isHidden = useSelector(e=>e.auth.isHidden)
  const dispatch = useDispatch()
  return (
    <div onClick={()=>dispatch(toggleAuthMenu())} className={`${isHidden?"hidden":""} auth flex items-center justify-center`}>
      <div onClick={(e)=>e.stopPropagation()} className="bg-white py-12 px-10 rounded-2xl h-fit w-full max-w-[573px]">
        <SignIn />
        <SignOut />
      </div>
    </div>
  );
};

export default Authentication;
