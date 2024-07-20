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
        <h2>
          <span>تسجيل الدخول إلى</span>
          &nbsp;
          <span>آباد</span>
        </h2>
        <p>املأ بريدك الإلكتروني وكلمة المرور لتسجيل الدخول</p>
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
        <div>
          <div>
            <input
              type="checkbox"
              name=""
              //  id=""
            />
            <label htmlFor="" style={{ color: "#68718B]" }}>
              تذكرني
            </label>
          </div>
          <button className="forgot-password" onClick={handleForgotPassword}>
            نسيت كلمة السر؟
          </button>
        </div>
        <button
          className="login-btn text-white font-bold"
          type="submit"
          onClick={handleSignIn}
        >
          تسجيل الدخول
        </button>
      </form>
      <div>
        <span style={{ display: error ? "inline" : "none" }}>
          {error.split("*").map((e, i) => (
            <p key={i}>{e}</p>
          ))}
        </span>
        <p>
          <span style={{ color: "#68718B" }}>ليس لديك حساب؟</span>
          &nbsp;
          {/* to sign up */}
          <button
            onClick={() => dispatch(toggleSignUp())}
            style={{ color: "#133491" }}
          >
            سجل الان
          </button>
        </p>
      </div>
      {/* loader */}
      <div className="loader" style={{ display: loading ? "block" : "none" }}>
        <div></div>
        <span>جاري التسجيل</span>
      </div>
    </div>
  );
};

export default SignIn;
