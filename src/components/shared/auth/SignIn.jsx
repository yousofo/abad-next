"use client";
import {
  addSignInError,
  toggleForgotPassword,
  toggleSignUp,
  toggleSignedIn,
} from "@/components/GlobalState/Features/authSlice";
import { reset } from "@/components/GlobalState/Features/navListSlice";
// import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

async function fetchSignIn(data) {
  const fetcheData = await fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/problem",
    },
    body: JSON.stringify(data),
  });
  const dataToReturn = await fetcheData.json();
  console.log(dataToReturn);
  return dataToReturn;
}
//
//
//
//

const SignIn = () => {
  const isSignIn = useSelector((state) => state.auth.signIn);
  const error = useSelector((state) => state.auth.signInError);
  const dispatch = useDispatch();
  const email = useRef();
  const password = useRef();
  // const router = useRouter()

  function handleForgotPassword(e) {
    e.preventDefault();
    dispatch(toggleForgotPassword());
  }

  async function handleSignIn(e) {
    e.preventDefault();
    const result = await fetchSignIn({
      email: email.current.value,
      password: password.current.value,
    });
    if (result.token) {
      dispatch(toggleSignedIn());
      dispatch(reset());
    } else {
      dispatch(addSignInError(result));
    }
  }
  return (
    <div
      className={`${
        !isSignIn && "hidden"
      } flex flex-col w-full md:w-[573px] flex-1 gap-10 max-w-[573px] `}
    >
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
            ref={email}
            type="email"
            name=""
            required
            placeholder="أدخل بريدك الإلكتروني"
            // id=""
          />
        </div>
        <div className="input">
          <label htmlFor="">كلمة المرور</label>
          <input
            ref={password}
            required
            type="email"
            name=""
            placeholder="أدخل كلمة المرور"
            // id=""
          />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-1.5 items-center">
            <input
              type="checkbox"
              name=""
              //  id=""
            />
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
        <button
          className="login text-white font-bold"
          type="submit"
          onClick={handleSignIn}
        >
          تسجيل الدخول
        </button>
      </form>
      <div className="flex flex-col items-center gap-2">
        <span
          className={`${!error && "hidden"} text-red-500 animate-pulse`}
        >
          {error}
        </span>
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
    </div>
  );
};

export default SignIn;
