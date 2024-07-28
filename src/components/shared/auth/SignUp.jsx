"use client";
import { toggleSignIn } from "@/components/GlobalState/Features/authSlice";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
async function sendRegisterData(data) {
  console.log(data);
  try {
    const request = await fetch("/api/student/register", {
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
      console.log(Object.entries(result.errors));
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
      if (result.error) {
        setGeneralError(result.error);
      } else {
        setGeneralError(result);
      }
    }
    console.log(errors);
    console.log(result);
    setLoading(false);
  }
  return (
    <div
      style={{ display: isSignUp ? "flex" : "none" }}
      className={`auth-signup`}
    >
      <div>
        <h2>تسجيل حساب جديد</h2>
        <p>املأ بياناتك لتسجيل حساب جديد</p>
      </div>
      <form
        method="POST"
        onSubmit={handleSubmit(handleSubmitSignUp)}
        action=""
        noValidate
        id="signUpForm"
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
          <p className="input-error">{errors.arabicName?.message}</p>
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
          <p className="input-error">{errors.englishName?.message}</p>
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
          <p className="input-error">{errors.idNumber?.message}</p>
        </div>
        {/* nationality ! */}
        <div className="input nationality">
          <label htmlFor="signUpGender">الجنسية*</label>
          <div className="select relative">
            <select
              name=""
              id="nationality"
              {...register("nationality", {
                required: "يجب كتابة الجنسية",
              })}
            >
              <option value="" style={{ display: "none" }}>
                اختر الجنسية
              </option>
              <option value="سعودي">سعودي</option>
              <option value="اردني">اردني</option>
              <option value="مصري">مصري</option>
            </select>
          </div>
          <p className="input-error">{errors.nationality?.message}</p>
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
          <p className="input-error">{errors.signUpEmail?.message}</p>
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
          <p className="input-error">{errors.phone?.message}</p>
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
          <p className="input-error">{errors.birthDate?.message}</p>
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
            >
              <option value="" style={{ display: "none" }}>
                اختر الجنس
              </option>
              <option value="ذكر">ذكر</option>
              <option value="انثي">انثي</option>
            </select>
          </div>
          <p className="input-error">{errors.gender?.message}</p>
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
          <p className="input-error">{errors.educationsType?.message}</p>
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
            >
              <option value="" style={{ display: "none" }}>
                اختر المدينة
              </option>
              <option value="مكة">مكة</option>
              <option value="المدينة">المدينة</option>
              <option value="الطائف">الطائف</option>
            </select>
          </div>
          <p className="input-error">{errors.city?.message}</p>
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
          <p className="input-error">{errors.signUpPassword?.message}</p>
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
          <p className="input-error">{errors.signUpConfirmPassword?.message}</p>
        </div>
        {/* general error */}
        <p
          style={{ display: generalError ? "block" : "none" }}
          className={`input-error`}
        >
          {generalError}
        </p>
      </form>
      <div>
        {/* sign up BUTTON */}
        <button
          className="signup-btn"
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
        <p>
          <span style={{ color: "#68718B" }}>لديك حساب؟</span>
          &nbsp;
          <button style={{ color: "#133491" }} onClick={switchAuthMode}>
            تسجيل دخول
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

export default SignUp;
