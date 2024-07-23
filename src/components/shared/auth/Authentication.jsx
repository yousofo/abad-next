"use client";
import React from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import "./auth.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleResetAuth } from "@/components/GlobalState/Features/authSlice";
import ForgotPassword from "./ForgotPassword";
import PasswordReassigned from "./PasswordReassigned";

const Authentication = () => {
  const isHidden = useSelector((e) => e.auth.isHidden);
  const isSignUp = useSelector((e) => e.auth.signUp);
  const isForgotPassword = useSelector((state) => state.auth.forgotPassword);
  const isSignIn = useSelector((state) => state.auth.signIn);
  const isPasswordReassigned = useSelector((state) => state.auth.newPassword);

  const dispatch = useDispatch();
  function handleAuthClose() {
    dispatch(toggleResetAuth());
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
        style={{
          maxWidth: isSignUp ? "814px" : "fit-content",
          width: isSignUp ? "814px" : "fit-content",
        }}
        className={`auth-container`}
      >
        {isSignIn && <SignIn />}
        {isSignUp && <SignUp />}
        {isPasswordReassigned && <PasswordReassigned />}
        {isForgotPassword && <ForgotPassword />}
      </div>
    </div>
  );
};

export default Authentication;
