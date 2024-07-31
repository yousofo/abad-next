"use client";
import React, { useEffect, useState } from "react";
import "./profile.css";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Loader from "@/components/shared/Loader/component/Loader";
import { toggleUpdateInfo } from "@/components/GlobalState/Features/userData";
import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

// async function fetchRegisterInternship(data, token) {
//   try {
//     const request = await fetch(`/api/student/updateStudent/${token}`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "Cache-Control":
//           "no-store, no-cache, must-revalidate, proxy-revalidate",
//         Pragma: "no-cache",
//         Expires: "0",
//         "Surrogate-Control": "no-store",
//       },
//       body: JSON.stringify(data),
//     });
//     const requestData = await request.json();
//     return requestData;
//   } catch (e) {
//     console.log("update student!");
//     console.log(e);
//   }
// }

const Partners = () => {
  const userInfo = useSelector((store) => store.userData.info);
  const dispatch = useDispatch();

  let newDate = null;
  if (userInfo?.birthDate) {
    const date = new Date(userInfo.birthDate);
    if (!isNaN(date.getTime())) {
      newDate = date.toISOString().split("T")[0];
    }
  }
  console.log("profile");

  //loading for internship registeration
  const [loading, setLoading] = useState(false);

  // react-hook-form
  const partnersApplyForm = useForm();
  const { register, handleSubmit, formState, setError, reset } =
    partnersApplyForm;
  // const { name,ref,onChange,onBlur}=register("id")
  let { errors } = formState;

  async function handleFormSubmit(formData, e) {
    console.log("here");
    setLoading(true);

    console.log(formData);
    const result = await new Promise((res, rej) => {
      setTimeout(() => {
        res();
      }, 5000);
    });
    // if (result.message)
    //   dispatch(toggleUpdateInfo({ ...formData, token: userInfo.token }));
    console.log(result);

    setLoading(false);
  }

  useEffect(() => {}, []);

  return (
    <main className="pb-10 sm:pb-24 relative">
      {/* HERO start  */}
      <section className="hero h-dvh md:min-h-[600px] md:h-auto relative">
        <div className="intro text-center absolute flex flex-col items-center justify-center gap-4 md:gap-6 text-white w-max max-w-full px-4">
          <h2 className="text-3xl font-medium md:text-4xl lg:text-5xl xl:text-6xl max-w-60 sm:max-w-fit">
            <span className="text-abad-gold whitespace-nowrap">تدريب</span>
            &nbsp;
            <span>الشركات</span>
          </h2>
        </div>
        <div className="back-shape overflow-hidden w-full relative -z-10 h-full md:min-h-[600px] md:h-auto">
          <img
            className="w-full h-full md:h-auto object-cover md:min-h-[600px]"
            src="/media/BackgroundHero_rect.png"
            alt=""
          />
          <img
            className="md:w-36 w-20 absolute top-[8vh] md:top-[10vh] right-0"
            src="/media/hero-rectangle.png"
            alt=""
          />
        </div>
      </section>
      {/* HERO end  */}
      {/* main content start */}
      <section className="profile flex flex-col gap-8 max-w-screen-xl mx-auto px-4">
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          action=""
          noValidate
          id="partnersApplyForm"
          className="grid md:grid-cols-2 gap-4"
        >
          {/* arabic name !*/}
          <div className="input">
            <label htmlFor="arabicName">الاسم كامل*</label>
            <input
              type="text"
              name=""
              placeholder="اكتب الاسم كامل"
              id="arabicName"
              {...register("arabicName", {
                required: "يجب كتابة الاسم بالكامل",
              })}
            />
            <p className="input-error">{errors.arabicName?.message}</p>
          </div>
          {/* email !*/}
          <div className="input">
            <label htmlFor="email">عنوان البريد الإلكتروني الخاص بالعمل*</label>
            <input
              type="email"
              name=""
              placeholder="اكتب البريد الالكتروني الخاص بالعمل"
              id="email"
              {...register("email", {
                required: "يجب كتابة البريد الالكتروني الخاص بالعمل",
              })}
            />
            <p className="input-error">{errors.email?.message}</p>
          </div>
          {/* phone !*/}
          <div className="input">
            <label htmlFor="phone">الهاتف</label>
            <input
              type="text"
              name=""
              placeholder="اكتب رقم الهاتف"
              id="phone"
              {...register("phone", { required: "يجب كتابة رقم الهاتف" })}
            />
            <p className="input-error">{errors.phone?.message}</p>
          </div>
          {/* job name !*/}
          <div className="input">
            <label htmlFor="jobName">المسمي الوظيفي*</label>
            <input
              type="text"
              name=""
              placeholder="اكتب المسمي الوظيفي"
              id="jobName"
              {...register("jobName", {
                required: "اكتب المسمي الوظيفي",
              })}
            />
            <p className="input-error">{errors.jobName?.message}</p>
          </div>
          {/* organization  !*/}
          <div className="input md:col-span-2">
            <label htmlFor="organization">اسم المنظمة*</label>
            <input
              type="text"
              name=""
              placeholder="اكتب اسم المنظمة"
              id="organization"
              {...register("organization", {
                required: "يجب كتابة اسم المنظمة ",
              })}
            />
            <p className="input-error">{errors.organization?.message}</p>
          </div>
          {/* course name !*/}
          <div className="input">
            <label htmlFor="courseName">اسم الدورة*</label>
            <div className="select relative">
              <select
                name=""
                id="courseName"
                className="w-full focus:outline-none"
                {...register("courseName", {
                  required: "يجب اخيار اسم الدورة",
                })}
              >
                <option value="" className="hidden">
                  اختر الدورة
                </option>
                <option value="ذكر">دورة 1</option>
                <option value="انثي">دورة 2</option>
              </select>
            </div>
            <p className="input-error">{errors.courseName?.message}</p>
          </div>
          {/* services !*/}
          <div className="input ">
            <label htmlFor="courseName">الخدمات المطلوبة*</label>
            <div className="select relative multi-select">
              {/* <select
                name=""
                id="courseName"
                multiple
                className="w-full focus:outline-none"
                {...register("courseName", {
                  required: "يجب اخيار الخدمات المطلوبة",
                })}
              >
                <option value="" className="hidden">
                  اختر الدورة
                </option>
                <option value="ذكر">دورة 1</option>
                <option value="انثي">دورة 2</option>
              </select> */}
              <Select
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    borderColor: "#cdd0d8",
                    padding: "9.5px",
                    borderRadius: "8px",
                  }),
                }}
                isMulti={true}
                isRtl={true}
                placeholder="اختر الخدمات"
                options={options}
              />
            </div>
            <p className="input-error">{errors.courseName?.message}</p>
          </div>
          {/* details !*/}
          <div className="input md:col-span-2">
            <label htmlFor="details">تفاصيل الطلب*</label>
            <div className="select relative">
              <textarea
                name=""
                id="details"
                className="w-full focus:outline-none"
                {...register("details", {
                  required: "يجب كتابة تفاصيل الطلب*",
                })}
              ></textarea>
            </div>
            <p className="input-error">{errors.details?.message}</p>
          </div>
          {/* phone !*/}
          <div className="input md:col-span-2">
            <label htmlFor="file">ملف مرفق</label>
            <div
              className="select flex items-center gap-3 !p-2 !px-4"
              style={{ boxShadow: "5px 4px 30px 0px #00000014" }}
            >
              <div className="relative w-fit overflow-hidden cursor-pointer">
                <div
                  style={{ border: "1px solid #D3D3D3" }}
                  className="bg-[#E8E8E8] p-2 rounded-lg block pointer-events-none"
                >
                  اختر الملف
                </div>
                <input
                  type="file"
                  name=""
                  className="absolute z-10 opacity-0 w-[300px] h-full left-0 top-0 cursor-pointer"
                  placeholder="ملف مرفق"
                  id="file"
                  {...register("file")}
                />
              </div>
              <p className="font-light text-base">لا يوجد ملف تم اختيارة</p>
            </div>
            <p className="input-error">{errors.file?.message}</p>
          </div>
        </form>
        <div className="btns">
          <button
            type="submit"
            form="partnersApplyForm"
            className="bg-abad-gold text-[#282828] p-4 rounded-2xl px-[4.5rem]"
          >
            ارسال
          </button>
        </div>
      </section>
      {/* main content end */}
      <Loader loading={loading} text="جاري التحديث" />
    </main>
  );
};

export default Partners;