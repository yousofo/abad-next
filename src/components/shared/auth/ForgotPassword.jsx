"use client";

import {
  closeLoader,
  openLoader,
} from "@/components/GlobalState/Features/popUpsSlice";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

async function fetchResetPassword(data) {
  const request = await fetch(`/api/student/resetPassword?mail=${data}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/problem",
    },
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

const ForgotPassword = () => {
  const forgotPassword = useSelector((state) => state.auth.forgotPassword);
  const [error, setError] = useState(false);
  const [checkEmail, setCheckEmail] = useState("");
  const disptch = useDispatch();

  const mailRef = useRef(null);
  async function handleSubmit(e) {
    disptch(openLoader(""));
    e.preventDefault();
    let result = await fetchResetPassword(mailRef.current.value);
    setError(!result.success);
    if (result.success) {
      // dispatch(reset());
      setCheckEmail("تفقد بريدك الألكتروني");
    }
    disptch(closeLoader());
  }
  return (
    <div
      style={{ display: forgotPassword ? "flex" : "none" }}
      className={`auth-forgot-password`}
    >
      <div>
        <h2>نسيت كلمة السر؟</h2>
        <p>املأ بريدك الإلكتروني وسيتم ارسال رسالة باستعادة الرقم السري</p>
      </div>
      <form action="" onSubmit={handleSubmit}>
        <div className="input">
          <label htmlFor="" className="">
            عنوان البريد الإلكتروني
          </label>
          <input
            ref={mailRef}
            type="email"
            name=""
            placeholder="أدخل بريدك الإلكتروني"
          />
        </div>
        <p
          style={{ display: error ? "block" : "none" }}
          className="input-error"
        >
          {error && "البريد غير صحيح"}
        </p>
        <p style={{ display: checkEmail ? "block" : "none" }}>{checkEmail}</p>
        <button className="login send-btn text-white font-bold" type="submit">
          ارسال
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
