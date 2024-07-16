"use client";
import { reset, toggleNewPassword } from "@/components/GlobalState/Features/authSlice";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

async function fetchResetPassword(data) {
  const request = await fetch(`/api/resetPassword?mail=${data}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/problem",
    }
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
  const dispatch = useDispatch();
  let router = useRouter()
  const mailRef = useRef(null);
  async function handleSubmit(e) {
    e.preventDefault()
    let result = await fetchResetPassword(mailRef.current.value);
    console.log(result)
    if(result.success){
      dispatch(reset())
    }
  }
  return (
    <div className={`${!forgotPassword && "hidden"} flex flex-col  gap-10 `}>
      <div className="flex flex-col gap-3">
        <h2 className="text-[22px] sm:text-3xl font-bold text-[#03133D]">
          نسيت كلمة السر؟
        </h2>
        <p className="text-xs sm:text-lg text-[#68718B] ">
          املأ بريدك الإلكتروني وسيتم ارسال رسالة باستعادة الرقم السري
        </p>
      </div>
      <form action="" onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="input">
          <label htmlFor="" className="">
            عنوان البريد الإلكتروني
          </label>
          <input
            ref={mailRef}
            type="email"
            name=""
            placeholder="أدخل بريدك الإلكتروني"
            // id=""
          />
        </div>
        <button className="login text-white font-bold" type="submit">
          ارسال
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
