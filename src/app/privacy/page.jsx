"use client";
import React, { useEffect, useState } from "react";
import "./privacy.css";
import Hero from "@/components/shared/hero/Hero";
import { fetchWithCheck } from "@/helperFunctions/dataFetching";
import { useDispatch } from "react-redux";
import { closeLoader, openLoader } from "@/components/GlobalState/Features/popUpsSlice";
const page = () => {
  const [privacyData, setPrivacyData] = useState(null);
  const [current, setCurrent] = useState("يا هلا");
  const dispatch = useDispatch();
  console.log(privacyData);
  function handleClick(event, name) {
    setCurrent(privacyData[`${name}`]);
  }
  useEffect(() => {
    dispatch(openLoader(""));
    fetchWithCheck(
      `${process.env.NEXT_PUBLIC_ROOT_URL}/api/GetDataHome/GetPrivacy`,
      null,
      null
    )
      .then((result) => {
        setCurrent(result.termsofService);
        setPrivacyData(result);
      })
      .finally(() => dispatch(closeLoader()));
  }, []);
  return (
    <main>
      {/* HERO start  */}
      <Hero>
        <h2 className="text-2xl font-medium md:text-3xl lg:text-4xl xl:text-5xl max-w-60 sm:max-w-fit">
          <span className="text-abad-gold whitespace-nowrap"> الخصوصية</span>
          <span>والاستخدام</span>
        </h2>
      </Hero>
      {/* HERO end  */}
      <section className="flex flex-col md:flex-row  gap-16 w-full px-8 max-w-screen-xl -mt-8 sm:mt-10 md:mt-16 lg:mt-20 xl:mt-28 mx-auto mb-8">
        <nav
          className="flex flex-col p-6 gap-8 w-max h-fit mx-auto text-[#8A8394]"
          style={{ boxShadow: "5px 4px 25px 0px #00000014" }}
        >
          <button
            onClick={(event) => handleClick(event, "termsofService")}
            href=""
            className="text-[#260E3F]"
          >
            شروط الخدمة
          </button>
          <button
            onClick={(event) => handleClick(event, "privacyPolicy")}
            href=""
          >
            سياسة الخصوصية
          </button>
          <button
            onClick={(event) =>
              handleClick(event, "intellectualPropertyPolicy")
            }
            href=""
          >
            سياسة الملكية الفكرية
          </button>
          <button
            onClick={(event) => handleClick(event, "mainServicesAgreement")}
            href=""
          >
            اتفاقية الخدمات الرئيسية
          </button>
          <button
            onClick={(event) => handleClick(event, "promotionsPolicy")}
            href=""
          >
            سياسة العروض الترويجية
          </button>
        </nav>
        <article className="flex-1 flex flex-col gap-8 text-[#151318] font-medium md:text-lg">
          <h2 className="font-bold text-2xl md:text-[42px]">شروط الخدمة</h2>
          <div dangerouslySetInnerHTML={{ __html: current }} />
        </article>
      </section>
    </main>
  );
};

export default page;
