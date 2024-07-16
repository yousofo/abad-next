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
          <div className="input col-span-2  mx-auto change-pp abad-shadow py-4 px-8 rounded">
            <div className="input relative mx-auto change-pp  w-24 h-24 overflow-hidden">
              <input
                type="file"
                className="absolute !border-0 left-0 top-0 w-96 h-20 rounded-full overflow-hidden cursor-pointer"
                src=""
                alt=""
              />
              <img
                className="w-full h-full pointer-events-none"
                src="/media/placeholders/user-image.png"
                alt=""
              />
              <div className="p-1.5 flex bg-cyan-50 absolute pointer-events-none bottom-0 rounded-full overflow-hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#1B45B4"
                  className="w-5 h-5 -mt-0.5"
                  version="1.1"
                  id="Capa_1"
                  viewBox="0 0 487 487"
                >
                  <g>
                    <g>
                      <path d="M308.1,277.95c0,35.7-28.9,64.6-64.6,64.6s-64.6-28.9-64.6-64.6s28.9-64.6,64.6-64.6S308.1,242.25,308.1,277.95z     M440.3,116.05c25.8,0,46.7,20.9,46.7,46.7v122.4v103.8c0,27.5-22.3,49.8-49.8,49.8H49.8c-27.5,0-49.8-22.3-49.8-49.8v-103.9    v-122.3l0,0c0-25.8,20.9-46.7,46.7-46.7h93.4l4.4-18.6c6.7-28.8,32.4-49.2,62-49.2h74.1c29.6,0,55.3,20.4,62,49.2l4.3,18.6H440.3z     M97.4,183.45c0-12.9-10.5-23.4-23.4-23.4c-13,0-23.5,10.5-23.5,23.4s10.5,23.4,23.4,23.4C86.9,206.95,97.4,196.45,97.4,183.45z     M358.7,277.95c0-63.6-51.6-115.2-115.2-115.2s-115.2,51.6-115.2,115.2s51.6,115.2,115.2,115.2S358.7,341.55,358.7,277.95z" />
                    </g>
                  </g>
                </svg>
              </div>
            </div>
            <div>
              <label>أحمد البسطويسي</label>
            </div>
          </div>
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
          <Link href="/profile/change-password" className="text-[#8D8181]">
            تغيير الرقم السري
          </Link>
          <button className="bg-abad-gold text-[#282828]">حفظ التغييرات</button>
        </div>
      </section>
      {/* main content end */}
    </main>
  );
};

export default Profile;
