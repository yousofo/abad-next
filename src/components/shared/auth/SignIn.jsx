"use client";
import {  toggleForgotPassword, toggleSignUp, toggleSignedIn } from "@/components/GlobalState/Features/authSlice";
import { reset } from "@/components/GlobalState/Features/navListSlice";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const SignIn = () => {
  const isSignIn = useSelector((state) => state.auth.signIn);
  const dispatch = useDispatch();
  // const router = useRouter()

  function handleForgotPassword(e){
    e.preventDefault()
    dispatch(toggleForgotPassword())
  }
  function handleSignIn(e){
    e.preventDefault()
    dispatch(toggleSignedIn())
    dispatch(reset())
  }
  return (
    <div className={`${!isSignIn && "hidden"} flex flex-col  gap-10 `}>
      <div className="flex flex-col gap-3">
        <h2 className="text-[22px] sm:text-3xl font-bold">
          <span className="text-[#03133D]">تسجيل الدخول إلى</span>
          &nbsp;
          <span className="text-abad-gold">آباد</span>
        </h2>
        <p className="text-xs sm:text-lg text-[#68718B]">
          املأ بريدك الإلكتروني وكلمة المرور لتسجيل الدخول
        </p>
      </div>
      <form action="" className="flex flex-col gap-4">
        <div className="input">
          <label htmlFor="">عنوان البريد الإلكتروني</label>
          <input
            type="email"
            name=""
            placeholder="أدخل بريدك الإلكتروني"
            id=""
          />
        </div>
        <div className="input">
          <label htmlFor="">كلمة المرور</label>
          <input type="email" name="" placeholder="أدخل كلمة المرور" id="" />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-1.5 items-center">
            <input type="checkbox" name="" id="" />
            <label htmlFor="" className="text-[#68718B]">
              تذكرني
            </label>
          </div>
          <button
            className="text-[#7C2BB8] text-sm"
            onClick={handleForgotPassword}
          >
            نسيت كلمة السر؟
          </button>
        </div>
        <button className="login text-white font-bold" type="submit" onClick={handleSignIn}>
          تسجيل الدخول
        </button>
      </form>
      <p className="text-sm text-center mt-auto">
        <span className="text-[#68718B]">ليس لديك حساب؟</span>
        &nbsp;
        {/* to sign up */}
        <button
          onClick={() => dispatch(toggleSignUp())}
          className="text-[#133491]"
        >
          سجل الان
        </button>
      </p>
    </div>
  );
};

export default SignIn;
