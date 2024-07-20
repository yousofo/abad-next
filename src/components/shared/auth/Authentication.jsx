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
  const isSignIn = useSelector((state) => state.auth.signIn);

  const dispatch = useDispatch();
  function handleAuthClose() {
    dispatch(reset());
    console.log(isHidden);
  }
  return (
    <div
      onClick={handleAuthClose}
      style={{ display: isHidden ? "none" : "flex" }}
      className={`auth`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: isSignUp ? "w-[814px]" : "auto" }}
        className={`auth-container`}
      >
        {isSignIn && <SignIn />}
        {isSignUp && <SignUp />}
        <PasswordReassigned />
        {isForgotPassword && <ForgotPassword />}
      </div>
    </div>
  );
};

export default Authentication;
