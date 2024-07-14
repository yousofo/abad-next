"use client";
import {
  addSignUpError,
  toggleSignIn,
} from "@/components/GlobalState/Features/authSlice";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
async function sendRegisterData(data) {
  console.log(data);
  const request = await fetch("/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const jsonData = await request.json();
  console.log("jsondata");
  if (typeof jsonData == "string") {
    return JSON.parse(jsonData);
  } else {
    return jsonData;
  }
  // return { status: false, message: e };
}

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const signUpError = useSelector((store) => store.auth.signUpError);
  const isSignUp = useSelector((e) => e.auth.signUp);
  const dispatch = useDispatch();
  const router = useRouter();

  const signUpForm = useForm();
  const { register, handleSubmit } = signUpForm;
  // const { name,ref,onChange,onBlur}=register("id")
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
  //error message
  //  {
  //   type: "https://tools.ietf.org/html/rfc7231#section-6.5.1",
  //   title: "One or more validation errors occurred.",
  //   status: 400,
  //   traceId: "00-652938194de0e48395a27597a325ad03-71ab6125b301a4bf-00",
  //   errors: {
  //     Email: ["البريد الإلكتروني غير صالح"],
  //     Idnumber: ["رقم الهوية 10 رقم"],
  //     Password: ["كلمة المرور لاتقل عن 6 حروف"],
  //   },
  // };

  async function handleSubmitSignUp(formData,event) {
    // const isAllValid = allInputs.every((input) => input.current.value != "");
    // if (isAllValid) {
      setLoading(true);
      // const result = await sendRegisterData({
      //   arabicName: arabicName.current.value,
      //   englishName: englishName.current.value,
      //   idnumber: userId.current.value,
      //   email: emailAddress.current.value,
      //   phone: phone.current.value,
      //   gender: gender.current.value,
      //   birthDate: birthDate.current.value,
      //   nationality: nationality.current.value,
      //   password: password.current.value,
      //   confirmPassword: confirmPassword.current.value,
      //   educationsType: educationsType.current.value,
      //   city: city.current.value,
      // });
      // const result = true
      console.log(formData);
      setLoading(false);
      // if (!result.errors) {
      //   console.log()
      //   dispatch(toggleSignIn());
      // } else {
      //   console.log("error false");
      //   dispatch(addSignUpError(`${result}`));
      // }
    // }
  }
  return (
    <div
      className={`${
        !isSignUp && "hidden"
      }  relative flex flex-col gap-7 md:gap-10 `}
    >
      <div className="flex flex-col gap-3">
        <h2 className="text-[22px] sm:text-3xl font-bold text-[#03133D]">
          تسجيل حساب جديد
        </h2>
        <p className="text-xs sm:text-lg text-[#68718B]">
          املأ بياناتك لتسجيل حساب جديد
        </p>
      </div>
      <form onSubmit={handleSubmit(handleSubmitSignUp)} action="" id="signUpForm" className="grid md:grid-cols-2 gap-4">
        {/* name arabic ! */}
        <div className="input">
          <label htmlFor="">الاسم الرباعي بالعربي*</label>
          <input
            required
            type="text"
            name=""
            id="arabicName"
            {...register("arabicName")}
            placeholder="اكتب اسمك رباعي"
          />
        </div>
        {/* name english ! */}
        <div className="input">
          <label htmlFor="">الاسم الرباعي بالانجليزي*</label>
          <input
            type="text"
            name=""
            required
            dir="ltr"
            id="englishName"
            {...register("englishName")}
            placeholder="type your name"
          />
        </div>
        {/* id ! */}
        <div className="input">
          <label htmlFor="">رقم الهوية*</label>
          <input
            required
            type="text"
            name=""
            id="userId"
            {...register("userId")}
            placeholder="ادخل رقم الهوية"
          />
        </div>
        {/* nationality ! */}
        <div className="input">
          <label htmlFor="signUpGender">الجنسية*</label>
          <div className="select relative">
            <select
              required
              name=""
              id="nationality"
              {...register("nationality")}
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
            type="email"
            required
            name=""
            id="signUpEmail"
            {...register("signUpEmail")}
            placeholder="أدخل بريدك الإلكتروني"
          />
        </div>
        {/* phone */}
        <div className="input">
          <label htmlFor="">الهاتف</label>
          <input
            type="text"
            name=""
            id="phone"
            {...register("phone")}
            placeholder="اكتب الهاتف"
          />
        </div>
        {/* birthDate */}
        <div className="input">
          <label htmlFor="signUpDate">تاريخ الميلاد</label>
          <input
            type="date"
            name=""
            required
            placeholder=""
            id="birthDate"
            {...register("birthDate")}
          />
        </div>
        {/* gender ! */}
        <div className="input">
          <label htmlFor="signUpGender">الجنس*</label>
          <div className="select relative">
            <select
              required
              name=""
              id="gender"
              {...register("gender")}
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
            type="text"
            name=""
            id="educationType"
            {...register("educationType")}
            placeholder="اكتب المؤهل التعليمي"
          />
        </div>
        {/* city  ! */}
        <div className="input">
          <label htmlFor="signUpGender">المدينة*</label>
          <div className="select relative">
            <select
              required
              name=""
              id="city"
              {...register("city")}
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
            type="password"
            required
            name=""
            id="signUpPassword"
            {...register("signUpPassword")}
            placeholder="ادخل كلمة المرور"
          />
        </div>
        {/* confirm password ! */}
        <div className="input">
          <label htmlFor="">تأكيد كلمة المرور*</label>
          <input
            type="password"
            name=""
            required
            id="signUpConfirmPassword"
            {...register("signUpConfirmPassword")}
            placeholder="تأكيد كلمة المرور*"
          />
        </div>
      </form>
      <div className="flex flex-col gap-4">
        {/* sign up BUTTON */}
        <button
          className="login text-white font-bold"
          type="submit"
          form="signUpForm"
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
      {/* register loader */}
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

export default SignUp;
