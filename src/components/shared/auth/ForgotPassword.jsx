"use client";

import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";

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
  const [loading, setLoading] = useState(false);
  const [checkEmail, setCheckEmail] = useState("");

  const mailRef = useRef(null);
  async function handleSubmit(e) {
    setLoading(true);
    e.preventDefault();
    let result = await fetchResetPassword(mailRef.current.value);
    setError(!result.success);
    if (result.success) {
      // dispatch(reset());
      setCheckEmail("تفقد بريدك الألكتروني");
    }
    setLoading(false);
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
      {/* loader */}
      <div className="loader" style={{ display: loading ? "block" : "none" }}>
        <div></div>
        <span>جاري التسجيل</span>
      </div>
    </div>
  );
};

export default ForgotPassword;
