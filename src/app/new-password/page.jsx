"use client";
import React from "react";
import "./newPassword.css";
import { useDispatch } from "react-redux";
import { toggleNewPassword } from "@/components/GlobalState/Features/authSlice";
const newPassword = () => {
  const dispatch = useDispatch();
  function handleClick(e){
    e.preventDefault()
    dispatch(toggleNewPassword())
  }
  return (
    <main className="pb-10">
      {/* HERO start  */}
      <section className="hero h-dvh md:min-h-[600px] md:h-auto relative">
        <div className="intro text-center absolute flex flex-col items-center justify-center gap-4 md:gap-6 text-white w-max max-w-full px-4">
          <h2 className="text-2xl font-medium md:text-4xl lg:text-5xl xl:text-6xl sm:max-w-fit">
            <span className="text-abad-gold whitespace-nowrap">تعيين</span>
            &nbsp;
            <span>كلمة سر جديدة</span>
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
      <form
        className="newPassword w-full mx-auto px-4 max-w-screen-lg flex flex-wrap gap-4"
        id=""
      >
        <div>
          <label htmlFor="newPasswordPass">الرقم السري الجديد*</label>
          <input
            type="password"
            name=""
            placeholder="اكتب الرقم السري الجديد"
            id="newPasswordPass"
          />
        </div>
        <div>
          <label htmlFor="newPasswordRePass">إعادة الرقم السري الجديد*</label>
          <input
            type="password"
            name=""
            placeholder="اكتب الرقم السري الجديد"
            id="newPasswordRePass"
          />
        </div>
        <input
          onClick={handleClick}
          type="submit"
          defaultValue="ارسال"
          form="contact-form"
          className="py-3 cursor-pointer px-6 mt-4 md:mt-8 rounded-2xl bg-[#FDB614] text-[#282828] font-medium w-fit ms-auto"
        />
      </form>
      {/* main content end */}
    </main>
  );
};

export default newPassword;
