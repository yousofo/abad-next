"use client";
import { useForm } from "react-hook-form";
import "./accordion.css";
import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { toggleSignIn } from "@/components/GlobalState/Features/authSlice";
import {
  closeLoader,
  openLoader,
} from "@/components/GlobalState/Features/popUpsSlice";
import { cities } from "@/components/data/data";

const AccordionForm = ({ form, token }) => {
  const { fetchRegisterCourseRequest } = form;
  const allCities = useMemo(() => cities, []);
  const user = useSelector((store) => store.userData.info);
  const [generalError, setGeneralError] = useState("");
  const dispatch = useDispatch();
  // react-hook-form
  const registerCourseForm = useForm();
  const { register, handleSubmit, formState, setError, reset } =
    registerCourseForm;
  let { errors } = formState;

  async function handleSubmitRegisterCourse(formData, e) {
    if (user) {
      setGeneralError("");
      dispatch(openLoader("قيد التسجيل"));
      const result = await fetchRegisterCourseRequest({
        tokenCourse: token,
        usserName: formData.registerCourseArabicName,
        usserEmail: formData.registerCourseEmail,
        userPhone: formData.registerCoursePhone,
        userCity: formData.registerCourseCity,
        nots: "string",
      });
      if (result.errors) {
        console.log("acc register result.errors");
        console.log(result.errors);
      } else if (result?.message) {
        // triggerToast(result?.message);
        toast.success(result?.message);
      } else {
        if (result.error) {
          setGeneralError(result.error);
        } else {
          setGeneralError(result);
        }
      }
    } else {
      dispatch(toggleSignIn());
    }

    dispatch(closeLoader(""));
  }

  return (
    <form
      method="POST"
      onSubmit={handleSubmit(handleSubmitRegisterCourse)}
      action=""
      noValidate
      className="register-course-request flex flex-col gap-4 py-6 px-4 md:p-5"
      id="registerCourseForm"
    >
      {/* name arabic ! */}
      <div className="input">
        <label htmlFor="">الاسم الرباعي بالعربي*</label>
        <input
          type="text"
          name=""
          id="registerCourseArabicName"
          {...register("registerCourseArabicName", {
            required: "يجب كتابة الاسم الرباعي بالعربي",
          })}
          placeholder="اكتب اسمك رباعي"
        />
        <p className="input-error">
          {errors.registerCourseArabicName?.message}
        </p>
      </div>

      {/* email !*/}
      <div className="input">
        <label htmlFor="">عنوان البريد الإلكتروني*</label>
        <input
          type="email"
          name=""
          id="registerCourseEmail"
          {...register("registerCourseEmail", {
            pattern: {
              value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
              message: "يرجي كتابة عنوان بريد صحيح",
            },
            required: "يجب كتابة عنوان البريد الإلكتروني",
          })}
          placeholder="أدخل بريدك الإلكتروني"
        />
        <p className="input-error">{errors.registerCourseEmail?.message}</p>
      </div>

      {/* phone */}
      <div className="input">
        <label htmlFor="">الهاتف</label>
        <input
          type="text"
          name=""
          id="registerCoursePhone"
          {...register("registerCoursePhone", {
            required: "يجب كتابة رقم الهاتف",
          })}
          placeholder="اكتب الهاتف"
        />
        <p className="input-error">{errors.registerCoursePhone?.message}</p>
      </div>

      {/* city  ! */}
      <div className="select">
        <label htmlFor="registerCourseCity">المدينة*</label>
        <div className="select relative">
          <select
            id="registerCourseCity"
            className="focus:outline-none"
            {...register("registerCourseCity", {
              required: "يجب اختيار المدينة",
            })}
          >
            <option value="" style={{ display: "none" }}>
              اختر المدينة
            </option>
            {allCities.map((e, i) => (
              <option key={i} value={e.Arabic}>
                {e.Arabic}
              </option>
            ))}
            <option value="غير ذلك">غير ذلك</option>
          </select>
        </div>
        <p className="input-error">{errors.city?.message}</p>
      </div>

      {/* details !*/}
      <div className="input md:col-span-2">
        <label htmlFor="details">تفاصيل الطلب*</label>
        <div className="select relative">
          <textarea
            name=""
            id="details"
            className="w-full focus:outline-none !p-0 !border-0"
            {...register("details", {
              required: "يجب كتابة تفاصيل الطلب*",
            })}
          ></textarea>
        </div>
        <p className="input-error">{errors.details?.message}</p>
      </div>

      {/* general error */}
      <p
        style={{ display: generalError ? "block" : "none" }}
        className={`input-error`}
      >
        {generalError}
      </p>
      {/* submit */}
      <button
        className="py-3 w-full sm:w-fit ms-auto mt-1 smmt-4 px-6 md:py-4 md:px-8 text-white rounded-lg md:rounded-[10px] font-bold text-[11px] sm:text-sm md:text-base"
        style={{
          background:
            "linear-gradient(83.79deg, #1B45B4 3.25%, #1C2792 96.85%)",
          letterSpacing: "0.5px",
        }}
        type="submit"
      >
        تسجيل في الدورة
      </button>
    </form>
  );
};

const Accordion = ({ title, data, table, active: starting, form, token }) => {
  const [active, setActive] = useState(starting ? true : false);
  return (
    <div
      className={`accordion-item  ${active && "active"} ${
        !(data || table || form) && " !hidden "
      }`}
    >
      <button className="accordion-header" onClick={() => setActive(!active)}>
        <span className="text-sm md:text-lg font-medium text-[#252525]">
          {title}
        </span>
        <svg
          width={20}
          height={20}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.25 12.5L10 6.25L3.75 12.5"
            stroke="#1C1C1C"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div className="accordion-content">
        <div className="wrapper !p-2 sm:p-4">
          {table && (
            <table className="w-full flex sm:table">
              <thead className="shadow-md abad-shadow hidden sm:table-header-group">
                <tr>
                  <th>موعد الدورة</th>
                  <th>وقت الدورة</th>
                  <th>الاجراءات</th>
                </tr>
              </thead>
              <tbody className="flex flex-col gap-2 sm:table-row-group w-full">
                {table?.map((e, i) => (
                  <tr
                    style={{ boxShadow: "5px 4px 30px 0px #00000014" }}
                    className="shadow w-full p-2 [&>td]:p-0 sm:[&>td]:p-4 flex flex-col gap-2 sm:table-row"
                    key={i}
                  >
                    <td>
                      <div className="flex items-center gap-1">
                        <span className="inline sm:hidden">
                          {" "}
                          بداية الدورة :
                        </span>
                        <span className="font-medium">{e?.startDate}</span>
                      </div>
                    </td>
                    <td>{e?.formattedTimeStart}</td>
                    <td>
                      <a
                        href="/"
                        className="w-fit enlist sm:!bg-[#FDB614] sm:!text-black"
                      >
                        <svg
                          //3a96b4a5-84c9-4a75-92da-82b99dcdafa2
                          xmlns="http://www.w3.org/2000/svg"
                          width={14}
                          height={11}
                          viewBox="0 0 14 11"
                          fill="currentColor"
                        >
                          <path d="M6.66667 7.33333H5.33333C4.23973 7.33292 3.16682 7.63143 2.23058 8.1966C1.29435 8.76178 0.530401 9.57211 0.0213343 10.54C0.00702532 10.3604 -9.15218e-05 10.1802 8.88408e-07 10C8.88408e-07 6.318 2.98467 3.33333 6.66667 3.33333V0L13.3333 5.33333L6.66667 10.6667V7.33333Z" />
                        </svg>
                        تسجيل
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          {data && (
            <div
              className="handle-html-styles"
              dangerouslySetInnerHTML={{ __html: data }}
            />
          )}
          {form && <AccordionForm form={form} token={token} />}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
