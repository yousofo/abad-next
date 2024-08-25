import Hero from "@/components/shared/hero/Hero";
import React from "react";

const HomeHero = () => {
  
  return (
    <>

      <Hero>
        {

        }
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-[55px] xl:leading-[1.5] font-medium">
          <span>تعلم بكل سهولة مع</span>
          &nbsp;
          <span className="text-abad-gold whitespace-nowrap">اباد للتدريب</span>
        </h2>
        <h4 className="text-sm md:text-lg leading-[28px] md:leading-[2] max-w-[650px]">
          معهد شبكة آباد للتدريب من المعاهد الرائدة في تقديم الدورات التطويرية
          المتخصصة في تقنية المعلومات.
        </h4>
        <Link
          href="/courses"
          className="flex items-center bg-abad-gold py-2 px-4 gap-5 text-sm rounded-xl text-black"
        >
          <span className="font-medium">ابدأ التعلم</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            className=" rotate-180"
          >
            <path
              d="M19 12H5"
              stroke="black"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 5L5 12L12 19"
              stroke="black"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </Hero>
    </>
  );
};

export default HomeHero;
