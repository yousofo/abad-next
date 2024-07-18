"use client";
import React from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import "./auth.css";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "@/components/GlobalState/Features/authSlice";
import ForgotPassword from "./ForgotPassword";
import PasswordReassigned from "./PasswordReassigned";

const Authentication = () => {
  const isHidden = useSelector((e) => e.auth.isHidden);
  const isSignUp = useSelector((e) => e.auth.signUp);
  const isForgotPassword = useSelector((state) => state.auth.forgotPassword);

  const dispatch = useDispatch();
  function handleAuthClose() {
    dispatch(reset());
    console.log(isHidden);
  }
  return (
    <div
      onClick={handleAuthClose}
      className={`${isHidden ? "hidden" : "flex"} auth`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`auth-container bg-white flex flex-col py-7 px-6 md:py-12 md:px-10 rounded-2xl h-fit ${
          isSignUp && "w-[814px]"
        } max-w-[814px]`}
      >
        <SignIn />
        <SignUp />
        <PasswordReassigned />
        {isForgotPassword && <ForgotPassword />}
      </div>
    </div>
  );
};

export default Authentication;
