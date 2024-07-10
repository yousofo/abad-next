import React from "react";
import "./profile.css";
import Link from "next/link";

const Profile = () => {
  return (
    <main className="pb-10 sm:pb-24">
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
        <form action="" className="grid md:grid-cols-2 gap-4">
          <div className="input">
            <label htmlFor="">الاسم الرباعي بالعربي*</label>
            <input type="email" name="" placeholder="اكتب اسمك رباعي" id="" />
          </div>
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
          <div className="input">
            <label htmlFor="">عنوان البريد الإلكتروني*</label>
            <input
              type="email"
              name=""
              placeholder="أدخل بريدك الإلكتروني"
              id=""
            />
          </div>
          <div className="input">
            <label htmlFor="">الهاتف</label>
            <input type="email" name="" placeholder="اكتب الهاتف" id="" />
          </div>
          <div className="input">
            <label htmlFor="signUpDate">تاريخ الميلاد</label>
            <input type="date" name="" placeholder="" id="signUpDate" />
          </div>
          <div className="input">
            <label htmlFor="signUpGender">الجنس*</label>
            <div className="select relative">
              <select
                name=""
                id="signUpGender"
                className="w-full focus:outline-none"
              >
                <option value="">ذكر</option>
                <option value="">انثي</option>
              </select>
            </div>
          </div>
          <div className="input">
            <label htmlFor="">المؤهل العلمي</label>
            <input
              type="email"
              name=""
              placeholder="اكتب المؤهل التعليمي"
              id=""
            />
          </div>
          <div className="input">
            <label htmlFor="">المدينة*</label>
            <input type="email" name="" placeholder="" id="" />
          </div>
          <div className="input">
            <label htmlFor="">كلمة المرور*</label>
            <input type="email" name="" placeholder="ادخل كلمة المرور" id="" />
          </div>
          <div className="input">
            <label htmlFor="">تأكيد كلمة المرور*</label>
            <input
              type="email"
              name=""
              placeholder="تأكيد كلمة المرور*"
              id=""
            />
          </div>
        </form>
        <div className="btns">
          <Link href="/profile/change-password" className="text-[#8D8181]">تغيير الرقم السري</Link>
          <button className="bg-abad-gold text-[#282828]">حفظ التغييرات</button>
        </div>
      </section>
      {/* main content end */}
    </main>
  );
};

export default Profile;
