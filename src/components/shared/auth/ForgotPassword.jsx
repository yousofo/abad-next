"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const ForgotPassword = () => {
  const forgotPassword = useSelector((state) => state.auth.forgotPassword);
  const dispatch = useDispatch();
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
      <form action="" className="flex flex-col gap-4">
        <div className="input">
          <label htmlFor="" className="">عنوان البريد الإلكتروني</label>
          <input
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
