"use client";
import { toggleSignIn } from "@/components/GlobalState/Features/authSlice";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
async function sendRegisterData(data) {
  console.log(data);
  try {
    const request = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let jsonData;
    console.log(request.headers.get("Content-Type"));
    if (
      request.headers.get("Content-Type").includes("application/json") ||
      request.headers.get("Content-Type").includes("application/problem+json")
    ) {
      jsonData = await request.json();
    } else {
      jsonData = await request.text();
    }
    console.log(jsonData);
    // if (JSON.parse(jsonData)) {
    // return JSON.parse(jsonData);
    // } else {
    return jsonData;
    // }
  } catch (error) {
    if (JSON.parse(error)) {
      return JSON.parse(error);
    } else {
      return error;
    }
  }
}

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const [generalError, setGeneralError] = useState("");
  const signUpError = useSelector((store) => store.auth.signUpError);
  const isSignUp = useSelector((e) => e.auth.signUp);
  const dispatch = useDispatch();
  const router = useRouter();

  const signUpForm = useForm();
  const { register, handleSubmit, formState, setError, reset } = signUpForm;
  // const { name,ref,onChange,onBlur}=register("id")
  let { errors, isValid, isSubmitted } = formState;

  function switchAuthMode(e) {
    e.preventDefault();
    dispatch(toggleSignIn());
  }

  async function handleSubmitSignUp(formData, e) {
    setGeneralError("");
    console.log("hh");
    setLoading(true);
    const result = await sendRegisterData({
      ...formData,
      email: formData.signUpEmail,
      password: formData.signUpPassword,
      confirmPassword: formData.signUpConfirmPassword,
    });

    if (result.errors) {
      console.log("errrrr");
      console.log(Object.entries(result.errors))
      Object.entries(result.errors).forEach(([key, value]) => {
        if (key == "$.birthDate") {
          setError("birthDate", { type: "manual", message: [...value] });
        } else if (key == "Password") {
          setError("signUpPassword", { type: "manual", message: [...value] });
        } else if (key == "Idnumber") {
          setError("idNumber", { type: "manual", message: [...value] });
        } else if (key == "ConfirmPassword") {
          setError("confirmPassword", { type: "manual", message: [...value] });
        } else {
          setError(`${key}`, { type: "manual", message: [...value] });
        }
      });
    } else if (result.message) {
      dispatch(toggleSignIn());
    } else {
      if(result.error){
        setGeneralError(result.error);
      }else{
        setGeneralError(result);
      }
    }
    console.log(errors);
    console.log(result);
    setLoading(false);
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
      <form
        method="POST"
        onSubmit={handleSubmit(handleSubmitSignUp)}
        action=""
        noValidate
        id="signUpForm"
        className="grid md:grid-cols-2 gap-4"
      >
        {/* name arabic ! */}
        <div className="input">
          <label htmlFor="">الاسم الرباعي بالعربي*</label>
          <input
            type="text"
            name=""
            id="arabicName"
            {...register("arabicName", {
              required: "يجب كتابة الاسم الرباعي بالعربي",
            })}
            placeholder="اكتب اسمك رباعي"
          />
          <p className="text-xs my-2 text-red-500">
            {errors.arabicName?.message}
          </p>
        </div>
        {/* name english ! */}
        <div className="input">
          <label htmlFor="">الاسم الرباعي بالانجليزي*</label>
          <input
            type="text"
            name=""
            dir="ltr"
            id="englishName"
            {...register("englishName", {
              required: "يجب كتابة الاسم الرباعي بالانجليزي",
            })}
            placeholder="type your name"
          />
          <p className="text-xs my-1 text-red-500">
            {errors.englishName?.message}
          </p>
        </div>
        {/* id ! */}
        <div className="input">
          <label htmlFor="">رقم الهوية*</label>
          <input
            required
            type="text"
            name=""
            id="idNumber"
            {...register("idNumber", {
              required: "يجب كتابة رقم الهوية",
            })}
            placeholder="ادخل رقم الهوية"
          />
          <p className="text-xs my-1 text-red-500">
            {errors.idNumber?.message}
          </p>
        </div>
        {/* nationality ! */}
        <div className="input">
          <label htmlFor="signUpGender">الجنسية*</label>
          <div className="select relative">
            <select
              name=""
              id="nationality"
              {...register("nationality", {
                required: "يجب كتابة الجنسية",
              })}
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
          <p className="text-xs my-1 text-red-500">
            {errors.nationality?.message}
          </p>
        </div>
        {/* email !*/}
        <div className="input">
          <label htmlFor="">عنوان البريد الإلكتروني*</label>
          <input
            type="email"
            name=""
            id="signUpEmail"
            {...register("signUpEmail", {
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                message: "يرجي كتابة عنوان بريد صحيح",
              },
              required: "يجب كتابة عنوان البريد الإلكتروني",
            })}
            placeholder="أدخل بريدك الإلكتروني"
          />
          <p className="text-xs my-1 text-red-500">
            {errors.signUpEmail?.message}
          </p>
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
          <p className="text-xs my-1 text-red-500">{errors.phone?.message}</p>
        </div>
        {/* birthDate */}
        <div className="input">
          <label htmlFor="signUpDate">تاريخ الميلاد</label>
          <input
            type="date"
            name=""
            placeholder=""
            id="birthDate"
            {...register("birthDate", {
              required: "يجب ادخال تاريخ الميلاد",
            })}
          />
          <p className="text-xs my-1 text-red-500">
            {errors.birthDate?.message}
          </p>
        </div>
        {/* gender ! */}
        <div className="input">
          <label htmlFor="signUpGender">الجنس*</label>
          <div className="select relative">
            <select
              name=""
              id="gender"
              {...register("gender", {
                required: "يجب اختيار الجنس",
              })}
              className="w-full focus:outline-none"
            >
              <option value="" className="hidden">
                اختر الجنس
              </option>
              <option value="ذكر">ذكر</option>
              <option value="انثي">انثي</option>
            </select>
          </div>
          <p className="text-xs my-1 text-red-500">{errors.gender?.message}</p>
        </div>
        {/* educationsType */}
        <div className="input">
          <label htmlFor="">المؤهل العلمي</label>
          <input
            type="text"
            name=""
            id="educationsType"
            {...register("educationsType", {
              required: "يجب اختيار الؤهل العملي",
            })}
            placeholder="اكتب المؤهل التعليمي"
          />
          <p className="text-xs my-1 text-red-500">
            {errors.educationsType?.message}
          </p>
        </div>
        {/* city  ! */}
        <div className="input">
          <label htmlFor="signUpGender">المدينة*</label>
          <div className="select relative">
            <select
              name=""
              id="city"
              {...register("city", {
                required: "يجب اختيار المدينة",
              })}
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
          <p className="text-xs my-1 text-red-500">{errors.city?.message}</p>
        </div>
        {/* password ! */}
        <div className="input">
          <label htmlFor="">كلمة المرور*</label>
          <input
            type="password"
            name=""
            id="signUpPassword"
            {...register("signUpPassword", {
              required: "يجب كتابة كلمة المرور",
            })}
            placeholder="ادخل كلمة المرور"
          />
          <p className="text-xs my-1 text-red-500">
            {errors.signUpPassword?.message}
          </p>
        </div>
        {/* confirm password ! */}
        <div className="input">
          <label htmlFor="">تأكيد كلمة المرور*</label>
          <input
            type="password"
            name=""
            id="signUpConfirmPassword"
            {...register("signUpConfirmPassword", {
              required: "يجب تأكيد كلمة المرور",
            })}
            placeholder="تأكيد كلمة المرور*"
          />
          <p className="text-xs my-1 text-red-500">
            {errors.signUpConfirmPassword?.message}
          </p>
        </div>
        {/* general error */}
        <p
          className={`${
            !generalError && "hidden"
          } text-center col-span-2 text-xs my-1 text-red-500`}
        >
          {generalError}
        </p>
      </form>
      <div className="flex flex-col gap-4">
        {/* sign up BUTTON */}
        <button
          className="login text-white font-bold"
          form="signUpForm"
          onClick={() => {
            console.log("clicked");
            console.log(isSubmitted);
            reset(undefined, { keepDirtyValues: true });
            handleSubmit(handleSubmitSignUp);
          }}
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
