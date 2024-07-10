import React from "react";
import "./change-password.css"
import Link from "next/link";

const changePassword = () => {
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
        <form action="" className="flex flex-wrap gap-4">
          <div className="input w-full flex-auto">
            <label htmlFor="">الرقم السري القديم</label>
            <input type="email" name="" placeholder="اكتب الرقم السري القديم" id="" />
          </div>
          <div className="input flex-1">
            <label htmlFor="">الرقم السري الجديد</label>
            <input type="email" name="" placeholder="اكتب الرقم السري الجديد" id="" />
          </div>
          <div className="input flex-1">
            <label htmlFor="">إعادة الرقم السري الجديد*</label>
            <input
              type="email"
              name=""
              placeholder="اكتب الرقم السري الجديد"
              id=""
            />
          </div>
        </form>
        <div className="btns">
          <Link href="/profile" className="text-[#8D8181]">رجوع</Link>
          <button className="bg-abad-gold text-[#282828]">حفظ التغييرات</button>
        </div>
      </section>
      {/* main content end */}
    </main>
  );
};

export default changePassword;
