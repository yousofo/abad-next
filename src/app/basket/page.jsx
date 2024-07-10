import React from "react";
import "./basket.css";
const Basket = () => {
  let items = new Array(2).fill(
    <div>
      <div>
        <img src="/media/placeholders/basket-item.png" alt="" />
      </div>
      <p>CCNA 200-301 شهادة سيسكو المعتمدة</p>
      <span>1500 ريال سعودي</span>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M18 19C18 19.551 17.552 20 17 20H7C6.448 20 6 19.551 6 19V8H18V19ZM10 4.328C10 4.173 10.214 4 10.5 4H13.5C13.786 4 14 4.173 14 4.328V6H10V4.328ZM21 6H20H16V4.328C16 3.044 14.879 2 13.5 2H10.5C9.121 2 8 3.044 8 4.328V6H4H3C2.45 6 2 6.45 2 7C2 7.55 2.45 8 3 8H4V19C4 20.654 5.346 22 7 22H17C18.654 22 20 20.654 20 19V8H21C21.55 8 22 7.55 22 7C22 6.45 21.55 6 21 6Z"
          fill="#CDD0D8"
        />
        <mask
          id="mask0_402_76375"
          style={{ maskType: "luminance" }}
          maskUnits="userSpaceOnUse"
          x="2"
          y="2"
          width="20"
          height="20"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M18 19C18 19.551 17.552 20 17 20H7C6.448 20 6 19.551 6 19V8H18V19ZM10 4.328C10 4.173 10.214 4 10.5 4H13.5C13.786 4 14 4.173 14 4.328V6H10V4.328ZM21 6H20H16V4.328C16 3.044 14.879 2 13.5 2H10.5C9.121 2 8 3.044 8 4.328V6H4H3C2.45 6 2 6.45 2 7C2 7.55 2.45 8 3 8H4V19C4 20.654 5.346 22 7 22H17C18.654 22 20 20.654 20 19V8H21C21.55 8 22 7.55 22 7C22 6.45 21.55 6 21 6Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask0_402_76375)">
          <rect width="24" height="24" fill="#CDD0D8" />
        </g>
      </svg>
    </div>
  );
  return (
    <main className="pb-10 sm:pb-24">
      {/* HERO start  */}
      <section className="hero h-dvh md:min-h-[600px] md:h-auto relative">
        <div className="intro text-center absolute flex flex-col items-center h-full justify-center gap-5 md:gap-7 text-white w-full max-w-full px-4">
          <h2 className="text-2xl font-medium md:text-4xl lg:text-5xl xl:text-6xl max-w-72 sm:max-w-fit">
            <span className="text-abad-gold whitespace-nowrap my-3 block">
              السلة
            </span>
            <p className="text-sm md:text-2xl font-normal leading-loose">
              معهد شبكة آباد للتدريب من المعاهد الرائدة في تقديم الدورات
              التطويرية المتخصصة في تقنية المعلومات.
            </p>
          </h2>
        </div>
        <div className="back-shape overflow-hidden w-full relative -z-10 h-full md:h-auto">
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
      <section className="basket max-w-screen-xl mx-auto px-4 flex flex-col gap-2 sm:gap-8 -mt-40 sm:mt-0">
        <div className="sm:p-10 sm:pb-6 sm:drop-shadow-abad">
          <h3 className="w-full hidden sm:flex item-title  justify-between">
            <span>الصورة</span>
            <span>اسم الدورة</span>
            <span>السعر</span>
          </h3>
          <section className="items">{items}</section>
        </div>
        <div className="purchase p-2.5 sm:p-10 drop-shadow-abad-2 flex gap-6 flex-wrap justify-between items-center font-bold">
          <h3 className="text-[#221638] md:text-xl">الاجمالي</h3>
          <h3 className="text-[#1B45B4] text-xs md:text-xl">3000 ريال سعودي</h3>
          <button className="w-full p-4 rounded-[10px] text-white text-xs sm:text-lg">شراء الان</button>
        </div>
      </section>
      {/* main content end */}
    </main>
  );
};

export default Basket;
