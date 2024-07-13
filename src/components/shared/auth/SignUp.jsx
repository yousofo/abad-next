"use client";
import { toggleSignIn } from "@/components/GlobalState/Features/authSlice";
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

const SignUp = () => {
  const isSignUp = useSelector((e) => e.auth.signUp);
  const dispatch = useDispatch();

  const nameArabic = useRef(null);
  const nameEnglish = useRef(null);
  const userId = useRef(null);
  const nationality = useRef(null);
  const emailAddress = useRef(null);
  const phone = useRef(null);
  const birthdate = useRef(null);
  const gender = useRef(null);
  const degree = useRef(null);
  const city = useRef(null);
  const password = useRef(null);
  const confirmPassword = useRef(null);
  const allInputs = [
    nameArabic,
    nameEnglish,
    userId,
    nationality,
    emailAddress,
    phone,
    birthdate,
    gender,
    degree,
    city,
    password,
    confirmPassword,
  ];
  /*
{

    "arabicName": "string",
    "englishName": "string",
    "idnumber": "stringstri",
    "email": "mohamedgamal1455@gmail.com",
    "phone": "string",
    "gender": "string",
    "birthDate": "2024-07-13T02:27:55.229",
    "nationality": "string",
    "password": "string",
    "confirmPassword": "string",
    "educationsType": "string",
    "city": "string"
}
*/
  function switchAuthMode(e) {
    e.preventDefault();
    dispatch(toggleSignIn());
  }
  function checkValidity(e) {
    console.log(e.current.value)
    return e.current.value != "";
  }
  function handleSubmit(e) {
    e.preventDefault();
    const isAllValid = allInputs.every(input=>checkValidity(input))
  }
  return (
    <div className={`${!isSignUp && "hidden"}  flex flex-col gap-7 md:gap-10 `}>
      <div className="flex flex-col gap-3">
        <h2 className="text-[22px] sm:text-3xl font-bold text-[#03133D]">
          تسجيل حساب جديد
        </h2>
        <p className="text-xs sm:text-lg text-[#68718B]">
          املأ بياناتك لتسجيل حساب جديد
        </p>
      </div>
      <form action="" className="grid md:grid-cols-2 gap-4">
        {/* name arabic ! */}
        <div className="input">
          <label htmlFor="">الاسم الرباعي بالعربي*</label>
          <input
            ref={nameArabic}
            required
            type="email"
            name=""
            placeholder="اكتب اسمك رباعي"
            id=""
          />
        </div>
        {/* name english ! */}
        <div className="input">
          <label htmlFor="">الاسم الرباعي بالانجليزي*</label>
          <input
            ref={nameEnglish}
            type="email"
            name=""
            required
            dir="ltr"
            placeholder="type your name"
            id=""
          />
        </div>
        {/* id ! */}
        <div className="input">
          <label htmlFor="">رقم الهوية*</label>
          <input
            required
            ref={userId}
            type="email"
            name=""
            dir="ltr"
            placeholder="ادخل رقم الهوية"
            id=""
          />
        </div>
        {/* nationality ! */}
        <div className="input">
          <label htmlFor="signUpGender">الجنسية*</label>
          <div className="select relative">
            <select
              required
              ref={nationality}
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
        {/* email !*/}
        <div className="input">
          <label htmlFor="">عنوان البريد الإلكتروني*</label>
          <input
            ref={emailAddress}
            type="email"
            required
            name=""
            placeholder="أدخل بريدك الإلكتروني"
            id=""
          />
        </div>
        {/* phone */}
        <div className="input">
          <label htmlFor="">الهاتف</label>
          <input
            ref={phone}
            type="email"
            name=""
            placeholder="اكتب الهاتف"
            id=""
          />
        </div>
        {/* birthdate */}
        <div className="input">
          <label htmlFor="signUpDate">تاريخ الميلاد</label>
          <input
            ref={birthdate}
            type="date"
            name=""
            placeholder=""
            id="signUpDate"
          />
        </div>
        {/* gender ! */}
        <div className="input">
          <label htmlFor="signUpGender">الجنس*</label>
          <div className="select relative">
            <select
              ref={gender}
              required
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
            ref={degree}
            type="email"
            name=""
            placeholder="اكتب المؤهل التعليمي"
            id=""
          />
        </div>
        {/* city  ! */}
        <div className="input">
          <label htmlFor="signUpGender">المدينة*</label>
          <div className="select relative">
            <select
              ref={city}
              required
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
        {/* password ! */}
        <div className="input">
          <label htmlFor="">كلمة المرور*</label>
          <input
            ref={password}
            type="email"
            required
            name=""
            placeholder="ادخل كلمة المرور"
            id=""
          />
        </div>
        {/* confirm password ! */}
        <div className="input">
          <label htmlFor="">تأكيد كلمة المرور*</label>
          <input
            ref={confirmPassword}
            type="email"
            name=""
            required
            placeholder="تأكيد كلمة المرور*"
            id=""
          />
        </div>
      </form>
      <div className="flex flex-col gap-4">
        {/* sign up BUTTON */}
        <button
          onSubmit={handleSubmit}
          className="login text-white font-bold"
          type="submit"
        >
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
