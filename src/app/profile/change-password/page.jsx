"use client";
import React, { useRef, useState } from "react";
import "./change-password.css";
import Link from "next/link";
import { useSelector } from "react-redux";
import Loader from "@/components/shared/Loader/component/Loader";

async function fetchUpdatePassword(data, token) {
  try {
    const result = await fetch(`/api/student/updatePassword/${token}`, {
      method: "POST",
      body: JSON.stringify(data),
    });
    const resultData = await result.json();
    return resultData;
  } catch (error) {
    console.log(error);
  }
}

const ChangePassword = () => {
  const user = useSelector((store) => store.auth.user);
  const userJson = JSON.parse(user);
  let oldPassword = useRef(null);
  let newPassword = useRef(null);
  let confirmNewPassword = useRef(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    setLoading(true);
    e.preventDefault();
    const result = await fetchUpdatePassword(
      {
        oldPassword: oldPassword.current.value,
        password: newPassword.current.value,
        confirmPassword: confirmNewPassword.current.value,
      },
      userJson.token
    );
    console.log(result);
    setLoading(false);
  }

  return (
    <main className="pb-10 sm:pb-24 relative">
      {/* HERO start  */}
      <section className="hero h-dvh md:min-h-[600px] md:h-auto relative">
        <div className="intro text-center absolute flex flex-col items-center justify-center gap-4 md:gap-6 text-white w-max max-w-full px-4">
          <h2 className="text-3xl font-medium md:text-4xl lg:text-5xl xl:text-6xl max-w-60 sm:max-w-fit">
            <span className="text-abad-gold whitespace-nowrap">الملف</span>
            &nbsp;
            <span>الشخصي</span>
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
          action=""
          id="updatePasswordForm"
          className="flex flex-wrap gap-4"
          onSubmit={handleSubmit}
        >
          <div className="input w-full flex-auto">
            <label htmlFor="">الرقم السري القديم</label>
            <input
              type="password"
              ref={oldPassword}
              name=""
              placeholder="اكتب الرقم السري القديم"
              id=""
            />
          </div>
          <div className="input flex-1">
            <label htmlFor="">الرقم السري الجديد</label>
            <input
              ref={newPassword}
              type="password"
              name=""
              placeholder="اكتب الرقم السري الجديد"
              id=""
            />
          </div>
          <div className="input flex-1">
            <label htmlFor="">إعادة الرقم السري الجديد*</label>
            <input
              type="password"
              ref={confirmNewPassword}
              name=""
              placeholder="اكتب الرقم السري الجديد"
              id=""
            />
          </div>
        </form>
        <div className="btns">
          <Link href="/profile" className="text-[#8D8181]">
            رجوع
          </Link>
          <button
            form="updatePasswordForm"
            className="bg-abad-gold text-[#282828]"
            type="submit"
          >
            حفظ التغييرات
          </button>
        </div>
      </section>
      {/* main content end */}
      <Loader loading={loading}/>
    </main>
  );
};

export default ChangePassword;
