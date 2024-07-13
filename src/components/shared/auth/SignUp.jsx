"use client";
import { toggleSignIn } from "@/components/GlobalState/Features/authSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const SignUp = () => {
  const isSignUp = useSelector((e) => e.auth.signUp);
  const dispatch = useDispatch();

  function switchAuthMode(e) {
    e.preventDefault();
    dispatch(toggleSignIn());
  }
  return (
    <div
      className={`${
        !isSignUp && "hidden"
      }  flex flex-col gap-7 md:gap-10 `}
    >
      <div className="flex flex-col gap-3">
        <h2 className="text-[22px] sm:text-3xl font-bold text-[#03133D]">
          تسجيل حساب جديد
        </h2>
        <p className="text-xs sm:text-lg text-[#68718B]">
          املأ بياناتك لتسجيل حساب جديد
        </p>
      </div>
      <form action="" className="grid md:grid-cols-2 gap-4">
        {/* name arabic */}
        <div className="input">
          <label htmlFor="">الاسم الرباعي بالعربي*</label>
          <input type="email" name="" placeholder="اكتب اسمك رباعي" id="" />
        </div>
        {/* name english */}
        <div className="input">
          <label htmlFor="">الاسم الرباعي بالانجليزي*</label>
          <input
            type="email"
            name=""
            dir="ltr"
            placeholder="type your name"
            id=""
          />
        </div>
        {/* id */}
        <div className="input">
          <label htmlFor="">رقم الهوية*</label>
          <input
            type="email"
            name=""
            dir="ltr"
            placeholder="ادخل رقم الهوية"
            id=""
          />
        </div>
        {/* nationality */}
        <div className="input">
          <label htmlFor="signUpGender">الجنسية*</label>
          <div className="select relative">
            <select
              name=""
              id="signUpGender"
              className="w-full focus:outline-none"
            >
              <option value="" className="hidden">
                اختر الجنسية
              </option>
              <option value="">سعودي</option>
              <option value="">اردني</option>
              <option value="">مصري</option>
            </select>
          </div>
        </div>
        {/* email */}
        <div className="input">
          <label htmlFor="">عنوان البريد الإلكتروني*</label>
          <input
            type="email"
            name=""
            placeholder="أدخل بريدك الإلكتروني"
            id=""
          />
        </div>
        {/* phone */}
        <div className="input">
          <label htmlFor="">الهاتف</label>
          <input type="email" name="" placeholder="اكتب الهاتف" id="" />
        </div>
        {/* birthdate */}
        <div className="input">
          <label htmlFor="signUpDate">تاريخ الميلاد</label>
          <input type="date" name="" placeholder="" id="signUpDate" />
        </div>
        {/* gender */}
        <div className="input">
          <label htmlFor="signUpGender">الجنس*</label>
          <div className="select relative">
            <select
              name=""
              id="signUpGender"
              className="w-full focus:outline-none"
            >
              <option value="" className="hidden">
                اختر الجنس
              </option>
              <option value="">ذكر</option>
              <option value="">انثي</option>
            </select>
          </div>
        </div>
        {/* degree */}
        <div className="input">
          <label htmlFor="">المؤهل العلمي</label>
          <input
            type="email"
            name=""
            placeholder="اكتب المؤهل التعليمي"
            id=""
          />
        </div>
        {/* city */}
        <div className="input">
          <label htmlFor="signUpGender">المدينة*</label>
          <div className="select relative">
            <select
              name=""
              id="signUpGender"
              className="w-full focus:outline-none"
            >
              <option value="" className="hidden">
                اختر المدينة
              </option>
              <option value="">مكة</option>
              <option value="">المدينة</option>
              <option value="">الطائف</option>
            </select>
          </div>
        </div>
        <div className="input">
          <label htmlFor="">كلمة المرور*</label>
          <input type="email" name="" placeholder="ادخل كلمة المرور" id="" />
        </div>
        <div className="input">
          <label htmlFor="">تأكيد كلمة المرور*</label>
          <input type="email" name="" placeholder="تأكيد كلمة المرور*" id="" />
        </div>
      </form>
      <div className="flex flex-col gap-4">
        {/* sign up BUTTON */}
        <button className="login text-white font-bold" type="submit">
          تسجيل
        </button>
        <p className="text-sm text-center">
          <span className="text-[#68718B]">لديك حساب؟</span>
          &nbsp;
          <button onClick={switchAuthMode} className="text-[#133491]">
            تسجيل دخول
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
