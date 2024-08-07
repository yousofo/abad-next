import "./main.css"
import ReviewsSwiper from "@/components/shared/swipers/ReviewsSwiper";
import "swiper/css";
import PartnersSwiper from "@/components/shared/swipers/PartnersSwiper";
import HomeCourses from "@/components/home/courses/HomeCourses";
import SubscriptionWithEmail from "@/components/home/SubscriptionWithEmail/SubscriptionWithEmail";
import LatestArticles from "@/components/home/articles/LatestArticles";
import { fetchWithCheck } from "@/helperFunctions/dataFetching";
import Hero from "@/components/shared/hero/Hero";
import Link from "next/link";

export const fetchCache = 'force-no-store';

export default async function Home() {
  const latestArticles = await fetchWithCheck(`${process.env.NEXT_PUBLIC_ROOT_URL}/api/articles/getLatestArticles`, true, null, [])
  console.log(latestArticles)

  return (
    <main className="home home-page">
      {/* HERO start  */}

      <Hero>
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-[55px] xl:leading-[1.5] font-medium">
          <span>تعلم بكل سهولة مع</span>
          &nbsp;
          <span className="text-abad-gold whitespace-nowrap">اباد للتدريب</span>
        </h2>
        <h4 className="text-sm md:text-lg leading-[28px] md:leading-[2] max-w-[650px]">
          معهد شبكة آباد للتدريب من المعاهد الرائدة في تقديم الدورات التطويرية
          المتخصصة في تقنية المعلومات.
        </h4>
        <Link href="/courses" className="flex items-center bg-abad-gold py-2 px-4 gap-5 text-sm rounded-xl text-black">
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
      {/* HERO end  */}
      {/* COURSES start */}
      <section className="courses-sec  mb-8">
        <img
          className=""
          src="/media/Animation - 1717986646627.gif"
          alt=""
        />
        <HomeCourses />
      </section>
      {/* COURSES end   */}
      {/* PLAN start */}
      <section className="plan">
        <img
          src="/media/Share Section.png"
          className=""
          alt=""
        />
        <div className="flex">
          <div className="cards-title">
            <div className="about text-center md:text-start text-white flex flex-col gap-4 pt-16">
              <img
                className="absolute w-32 top-5 right-5 lg:right-10"
                src="/media/Animation - 1717986646627.gif"
                alt=""
              />
              <img
                className="w-fit mx-auto md:mx-0"
                src="/media/ft-logo 3.png"
                alt=""
              />
              <h3 className="font-bold text-2xl md:text-4xl">
                ماهي خطة <span className="text-abad-gold">اباد للتدريب؟</span>
              </h3>
              <p className="text-sm md:text-base noto">
                معهد شبكة آباد للتدريب من المعاهد الرائدة في تقديم الدورات التطويرية
                المتخصصة في تقنية المعلومات. معهد شبكة آباد للتدريب من المعاهد
                الرائدة في تقديم الدورات التطويرية المتخصصة في تقنية المعلومات.
              </p>
              <button className="bg-abad-gold mx-auto md:mx-0 w-fit text-black flex items-center gap-6 p-2 px-3 rounded-xl">
                <span className="font-bold">اعرف المزيد</span>
                <svg
                  className="text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
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
              </button>
            </div>
          </div>
          <div className="cards">
            {new Array(4).fill(
              <figure className="card">
                <div className="img">
                  <img src="/media/twitch.png" className="" alt="" />
                </div>
                <figcaption>
                  <h4 className="font-bold">من اباد؟</h4>
                  <p className="noto">
                    معهد شبكة آباد للتدريب من المعاهد الرائدة في تقديم الدورات
                    التطويرية المتخصصة في تقنية..
                  </p>
                </figcaption>
              </figure>)}
          </div>
        </div>
      </section>
      {/* PLAN end */}
      {/* REVIEWS start */}
      <section className="reviews">
        <img
          src="/media/Review Section.png"
          alt=""
        />
        <div>
          <h3>
            لماذا طلاب <span>اباد للتدريب</span>
            <br />
            <span>يحبون التعلم معنا؟</span>
          </h3>
          {/* Slider main container */}
          <div className="cards">
            <div className="swiper-wrapper cards-wrapper">
              <ReviewsSwiper />
            </div>
            <div className="swiper-btns">
              <div className="swiper1-btn reviewsBtn swiper1-prev">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={8}
                  height={14}
                  viewBox="0 0 8 14"
                  fill="none"
                >
                  <path
                    d="M1 0.999999L7 7L1 13"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="swiper1-btn reviewsBtn swiper1-next">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={8}
                  height={14}
                  viewBox="0 0 8 14"
                  fill="none"
                >
                  <path
                    d="M7 13L1 7L7 1"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* REVIEWS end */}
      {/* TRUST start */}
      <section className="relative p-8 md:p-14 overflow-hidden select-none">
        <img
          src="/media/Trust company & Play section.png"
          className="absolute min-h-96 left-0 hidden md:block top-0 w-full object-cover -z-10"
          alt=""
        />
        <img
          src="/media/Trust company & Play section-small.png"
          className="absolute min-h-96 left-0 top-0 block md:hidden w-full object-cover -z-10"
          alt=""
        />
        <div className="container flex flex-col items-center gap-14 mx-auto">
          <h2 className="font-bold max-w-[220px] text-2xl md:text-4xl text-center text-white md:max-w-2xl leading-normal">
            اعرف اكثر عن <span className="text-abad-gold">اباد للتدريب</span> عن
            طريق مشاهدتك لهذا الفيديو!
          </h2>
          <div className="video relative">
            <video id="homeVideo" poster="/media/arab-work-laptop.png">
              <source src="/media/Blank Video Placeholder.mp4" type="video/mp4" />
              <source src="movie.ogg" type="video/ogg" />
              Your browser does not support the video tag.
            </video>
            <img
              id="playHomeVideo"
              src="/media/media Icon.png"
              className="absolute w-8 md:w-fit cursor-pointer left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              alt=""
            />
          </div>
        </div>
      </section>
      {/* TRUST end */}
      {/* PARTNERS start */}
      <section className="partners py-10 px-8">
        <h2 className="text-4xl text-center font-bold my-8 text-[#1E1E1E]">
          شركاء النجاح
        </h2>
        <div className="swiper2 container max-w-full lg:max-w-screen-lg w-full mx-auto">
          <PartnersSwiper />
        </div>
        {/* <div class="md:flex  justify-between  "></div> */}
      </section>
      {/* PARTNERS end */}
      {/* ARTICLES start */}
      <section className="articles p-8 md:p-14">
        <h6 className="bg-[#F9F5F2] rounded-lg w-fit m-auto p-2">مدونة ومقالة</h6>
        <h2 className="text-2xl md:text-4xl text-center font-bold mx-auto my-7 w-fit text-[#1E1E1E]">
          ألقِ نظرة على أحدث المقالات
        </h2>
        <LatestArticles data={latestArticles} />
      </section>
      {/* ARTICLES end */}
      {/* CONTACT start */}
      <section className="contact w-full relative max-w-screen-lg mx-auto p-5 mb-10">
        <div className="container relative flex py-7 px-4 mx-auto md:p-10 gap-8 md:gap-[5%] flex-col md:flex-row rounded-xl overflow-hidden">
          <img
            src="/media/Submit section.png"
            className="absolute left-0 top-0 w-full h-full object-cover -z-10"
            alt=""
          />
          <div className="info text-white md:w-[45%] text-center md:text-start noto">
            <h3 className="noto-bold text-2xl md:text-3xl mb-4">
              اشترك في نشرة اباد للتدريب
            </h3>
            <p className="noto-regular text-xs px-3 md:px-0 md:text-base">
              ومعهد شبكة آباد للتدريب من المعاهد الرائدة في تقديم الدورات التطويرية
              المتخصصة في تقنية المعلومات. معهد شبكة آباد للتدريب من المعاهد الرائدة
              في تقديم الدورات التطويرية المتخصصة في تقنية المعلومات.
            </p>
          </div>
          <SubscriptionWithEmail />
        </div>
      </section>
      {/* CONTACT end */}
    </main>
  );
}
