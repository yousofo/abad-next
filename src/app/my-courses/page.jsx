import React from "react";
import "./my-courses.css";
import Link from "next/link";
const MyCourses = () => {
  let items = new Array(4).fill(<div className="course">
  <div className="info">
    <img src="/media/placeholders/my-courses-item.png" alt="" />
    <div className="details">
      <div className="flex">
        <h4 className="text-[#3F3E43] text-sm sm:text-lg">
          CCNA 200-301 شهادة سيسكو المعتمدة
        </h4>
        <span>أونلاين</span>
      </div>
      <div className="flex gap-1 items-center">
        <svg
          width="19"
          height="18"
          className="w-[14px] sm:w-[19px] h-[13px] sm:h-[18px]"
          viewBox="0 0 19 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.40625 9.00008C1.40625 4.74289 5.02995 1.29175 9.5 1.29175C13.9701 1.29175 17.5937 4.74289 17.5937 9.00008C17.5937 13.2573 13.9701 16.7084 9.5 16.7084C5.02995 16.7084 1.40625 13.2573 1.40625 9.00008ZM9.5 0.041748C4.30507 0.041748 0.09375 4.05253 0.09375 9.00008C0.09375 13.9476 4.30507 17.9584 9.5 17.9584C14.6949 17.9584 18.9062 13.9476 18.9062 9.00008C18.9062 4.05253 14.6949 0.041748 9.5 0.041748ZM9.49858 3.37506C9.13615 3.37506 8.84233 3.65488 8.84233 4.00006V7.45455C8.20099 7.70179 7.74858 8.30061 7.74858 9.00006C7.74858 9.92054 8.53208 10.6667 9.49858 10.6667C10.4651 10.6667 11.2486 9.92054 11.2486 9.00006C11.2486 8.30061 10.7962 7.70179 10.1548 7.45455V4.00006C10.1548 3.65488 9.86102 3.37506 9.49858 3.37506Z"
            fill="#F178B6"
          />
        </svg>
        <h5 className="text-[#3F3E43] text-xs sm:text-lg">
          من 6 م : الي 9 م - يوميا
        </h5>
      </div>
      <p className="text-[#8A8394] text-xs">
        هنا يكتب تفاصيل المحتوي للدورة هنا يكتب تفاصيل المحتوي للدورة
        هنا يكتب تفاصيل المحتوي للدورة هنا يكتب تفاصيل المحتوي للدورة
      </p>
    </div>
  </div>
  <Link
    href="/"
    className="bg-abad-gold py-3 px-6 rounded-2xl w-full text-center sm:w-max h-fit"
  >
    الدخول الي الدورة
  </Link>
</div>)
  return (
    <main className="pb-10 sm:pb-24">
      {/* HERO start  */}
      <section className="hero h-dvh md:min-h-[600px] md:h-auto relative">
        <div className="intro text-center absolute flex flex-col items-center justify-center gap-4 md:gap-6 text-white w-max max-w-full px-4">
          <h2 className="text-3xl font-medium md:text-4xl lg:text-5xl xl:text-6xl max-w-60 sm:max-w-fit">
            <span className="text-abad-gold whitespace-nowrap">دوراتي</span>
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
      <section className="my-courses flex flex-col gap-4 sm:gap-6 max-w-screen-xl mx-auto px-4">
        {items}
      </section>
      {/* main content end */}
    </main>
  );
};

export default MyCourses;