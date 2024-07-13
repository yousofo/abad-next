"use client";
import { toggleSignIn } from "@/components/GlobalState/Features/authSlice";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
async function sendRegisterData(data) {
  console.log(data)
  try{
    const request = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await request.json();
    console.log(result)
    return result;
  }
  catch(e){
    console.log(e)
  }
}
const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const isSignUp = useSelector((e) => e.auth.signUp);
  const dispatch = useDispatch();
  const router = useRouter()
  const arabicName = useRef(null);
  const englishName = useRef(null);
  const userId = useRef(null);
  const nationality = useRef(null);
  const emailAddress = useRef(null);
  const phone = useRef(null);
  const birthDate = useRef(null);
  const gender = useRef(null);
  const educationsType = useRef(null);
  const city = useRef(null);
  const password = useRef(null);
  const confirmPassword = useRef(null);
  const allInputs = [
    arabicName,
    englishName,
    userId,
    nationality,
    emailAddress,
    phone,
    birthDate,
    gender,
    educationsType,
    city,
    password,
    confirmPassword,
  ];
  const requiredInputs = [
    arabicName,
    englishName,
    userId,
    nationality,
    emailAddress,
    gender,
    city,
    password,
    confirmPassword,
  ];

  function switchAuthMode(e) {
    e.preventDefault();
    dispatch(toggleSignIn());
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const isAllValid = allInputs.every(
      (input) => input.current.value != ""
    );
    if (isAllValid) {
      setLoading(true)
      const result = await sendRegisterData({
        arabicName: arabicName.current.value,
        englishName: englishName.current.value,
        idnumber: userId.current.value,
        email: emailAddress.current.value,
        phone: phone.current.value,
        gender: gender.current.value,
        birthDate: birthDate.current.value,
        nationality: nationality.current.value,
        password: password.current.value,
        confirmPassword: confirmPassword.current.value,
        educationsType: educationsType.current.value,
        city: city.current.value,
      });
      console.log(result)
      setLoading(false)
      dispatch(toggleSignIn());
    }
  }
  return (
    <div className={`${!isSignUp && "hidden"}  relative flex flex-col gap-7 md:gap-10 `}>
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
            ref={arabicName}
            required
            type="email"
            name=""
            placeholder="اكتب اسمك رباعي"
            // id="arabicName"
          />
        </div>
        {/* name english ! */}
        <div className="input">
          <label htmlFor="">الاسم الرباعي بالانجليزي*</label>
          <input
            ref={englishName}
            type="email"
            name=""
            required
            dir="ltr"
            placeholder="type your name"
            // id="englishName"
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
            placeholder="ادخل رقم الهوية"
            // id="userId"
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
              // id="nationality"
              className="w-full focus:outline-none"
            >
              <option value="" className="hidden">
                اختر الجنسية
              </option>
              <option value="سعودي">سعودي</option>
              <option value="اردني">اردني</option>
              <option value="مصري">مصري</option>
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
            // id="signUpEmail"
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
            // id="phone"
          />
        </div>
        {/* birthDate */}
        <div className="input">
          <label htmlFor="signUpDate">تاريخ الميلاد</label>
          <input
            ref={birthDate}
            type="date"
            name=""
            required
            placeholder=""
            // id="signUpDate"
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
              // id="gender"
              className="w-full focus:outline-none"
            >
              <option value="" className="hidden">
                اختر الجنس
              </option>
              <option value="ذكر">ذكر</option>
              <option value="انثي">انثي</option>
            </select>
          </div>
        </div>
        {/* educationsType */}
        <div className="input">
          <label htmlFor="">المؤهل العلمي</label>
          <input
            ref={educationsType}
            type="email"
            name=""
            placeholder="اكتب المؤهل التعليمي"
            // id="educationsType"
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
              // id="city"
              className="w-full focus:outline-none"
            >
              <option value="" className="hidden">
                اختر المدينة
              </option>
              <option value="مكة">مكة</option>
              <option value="المدينة">المدينة</option>
              <option value="الطائف">الطائف</option>
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
            // id="signUpPassword"
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
            // id="signUpConfirmPassword"
          />
        </div>
      </form>
      <div className="flex flex-col gap-4">
        {/* sign up BUTTON */}
        <button
          onClick={handleSubmit}
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
      <div className={`${!loading && "hidden"} absolute z-10 w-24 h-24 pointer-events-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`}>
        <div className="animate-spin border-4 rounded-full h-full border-green-500 border-r-transparent bg-white bg-opacity-70"></div>
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 leading-[96px] text-xs whitespace-nowrap">جاري التسجيل</span>
      </div>
    </div>
  );
};

export default SignUp;
