import React from 'react'
import "./articles.css"
import Link from 'next/link';
import ArticlesComp from '@/components/dataFetching/articles/ArticlesComp';

const Articles = () => {

  return (
    <main>
      {/* HERO start  */}
      <section className="hero h-dvh md:min-h-[600px] md:h-auto relative">
        <div className="intro text-center absolute flex flex-col items-center h-full justify-center gap-5 md:gap-7 text-white w-full max-w-full px-4">
          <h2 className="text-2xl font-medium md:text-4xl lg:text-5xl xl:text-6xl max-w-72 sm:max-w-fit">
            <span className="text-abad-gold whitespace-nowrap my-3 block">
              المقالات
            </span>
            <p className="text-sm md:text-2xl max-w-2xl font-normal leading-loose md:leading-[2]">
              معهد شبكة آباد للتدريب من المعاهد الرائدة في تقديم الدورات التطويرية
              المتخصصة في تقنية المعلومات.
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
      {/* main secion start */}
      <section className="p-8 w-full max-w-screen-lg mx-auto h-auto">
        {/* search bar start */}
        <div className="flex rounded p-3 gap-2.5 border border-[#D8D1E2] bg-white w-full">
          <input
            className="flex-1 text-[#A79FB3] focus:outline-none min-w-48"
            type="text"
            placeholder="بحث في المقالات"
          />
          <svg
            className="rounded min-w-8"
            width={32}
            height={32}
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              width={32}
              height={32}
              rx={3}
              fill="url(#paint0_linear_15_4921)"
            />
            <path
              d="M21.6185 19.9816C21.2438 19.6227 20.8791 19.2535 20.5249 18.8744C20.2273 18.572 20.0481 18.352 20.0481 18.352L17.8081 17.2824C18.7049 16.2653 19.1998 14.956 19.2001 13.6C19.2001 10.5128 16.6881 8 13.6001 8C10.5121 8 8.00006 10.5128 8.00006 13.6C8.00006 16.6872 10.5121 19.2 13.6001 19.2C15.0105 19.2 16.2961 18.672 17.2825 17.8088L18.3521 20.0488C18.3521 20.0488 18.5721 20.228 18.8745 20.5256C19.1841 20.816 19.5913 21.2088 19.9817 21.6192L21.0681 22.7328L21.5513 23.2496L23.2481 21.5528L22.7313 21.0696C22.4281 20.772 22.0233 20.3768 21.6185 19.9816ZM13.6001 17.6C11.3945 17.6 9.60006 15.8056 9.60006 13.6C9.60006 11.3944 11.3945 9.6 13.6001 9.6C15.8057 9.6 17.6001 11.3944 17.6001 13.6C17.6001 15.8056 15.8057 17.6 13.6001 17.6Z"
              fill="white"
            />
            <defs>
              <linearGradient
                id="paint0_linear_15_4921"
                x1="8.2424e-07"
                y1="21.3995"
                x2="32.8211"
                y2="17.8274"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#1B45B4" />
                <stop offset={1} stopColor="#1C2792" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        {/* search bar end */}
        {/* ARTICLES start */}
        <div className="articles relative mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:pb-[5%] pt-10 ">
          <ArticlesComp/>
        </div>
        {/* ARTICLES end */}
      </section>
    </main>
  )
}

export default Articles