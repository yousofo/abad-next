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
  const request = await fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/problem",
    },
    body: JSON.stringify(data),
  });
  if (
    request.headers.get("Content-Type").includes("application/json") ||
    request.headers.get("Content-Type").includes("application/problem+json")
  ) {
    const dataToReturn = await request.json();
    console.log(dataToReturn);
    if (dataToReturn.errors) {
      let messages = Object.entries(dataToReturn.errors).map(([key, value]) => {
        return value;
      });
      return messages;
    } else {
      return dataToReturn;
    }
  } else {
    const dataToReturn = await request.text();
    return dataToReturn;
  }
}
//
//
//
//
const SignIn = () => {
  const [loading, setLoading] = useState(false);
  const isSignIn = useSelector((state) => state.auth.signIn);
  const error = useSelector((state) => state.auth.signInError);
  const dispatch = useDispatch();
  const email = useRef();
  const password = useRef();
  console.log(error);
  // const router = useRouter()

  function handleForgotPassword(e) {
    e.preventDefault();
    dispatch(toggleForgotPassword());
  }

  async function handleSignIn(e) {
    e.preventDefault();
    setLoading(true);
    const result = await fetchSignIn({
      email: email.current.value,
      password: password.current.value,
    });
    console.log(result);
    if (result.token) {
      dispatch(toggleSignedIn());
      dispatch(reset());
    } else {
      if (result.message) {
        dispatch(addSignInError(result.message));
      } else {
        dispatch(addSignInError(result.join("*")));
      }
    }
    setLoading(false);
  }
  return (
    <div className={`auth-signin`}>
      <div>
        <h2 className="text-[22px] sm:text-3xl font-bold">
          <span className="text-[#03133D]">تسجيل الدخول إلى</span>
          &nbsp;
          <span className="text-abad-gold">آباد</span>
        </h2>
        <p className="text-xs sm:text-lg text-[#68718B]">
          املأ بريدك الإلكتروني وكلمة المرور لتسجيل الدخول
        </p>
      </div>
      <form action="">
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
            type="password"
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
      <div>
        <span
          className={`${
            !error && "hidden"
          } text-red-500 animate-pulse text-center`}
        >
          {error.split("*").map((e, i) => (
            <p key={i}>{e}</p>
          ))}
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
      {/* loader */}
      <div
        className={`${
          !loading && "hidden"
        } absolute z-10 w-24 h-24 pointer-events-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`}
      >
        <div className="animate-spin border-4 rounded-full h-full border-green-500 border-r-transparent bg-white bg-opacity-70"></div>
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 leading-[96px] text-xs whitespace-nowrap">
          جاري التسجيل
        </span>
      </div>
    </div>
  );
};

export default SignIn;
