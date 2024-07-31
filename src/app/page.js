import "./main.css"
import ReviewsSwiper from "@/components/shared/swipers/ReviewsSwiper";
import "swiper/css";
import PartnersSwiper from "@/components/shared/swipers/PartnersSwiper";
import HomeCourses from "@/components/dataFetching/home/HomeCourses";
import LatestArticles from "@/components/dataFetching/home/articles/LatestArticles";
import Toast from "@/components/shared/toasts/Toast";

export default function Home() {
  // console.log(document.querySelectorAll("link[rel='preload'][as='style']"));
  // document.querySelectorAll("link[rel='preload'][as='style']").forEach(link => link.rel = "stylesheet")

  return (
    <main className="home home-page">
      {/* HERO start  */}
      <section className="hero">
        <div className="intro">
          <h2>
            <span>تعلم بكل سهولة مع</span>
            &nbsp;
            <span >اباد للتدريب</span>
          </h2>
          <h4>
            معهد شبكة آباد للتدريب من المعاهد الرائدة في تقديم الدورات التطويرية
            المتخصصة في تقنية المعلومات.
          </h4>
          <a
            href="#"
          >
            <span>ابدأ التعلم</span>
            <svg
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
          </a>
        </div>
        <div className="back-shape">
          <img
            className="first"
            src="/media/BackgroundHero_rect.png"
            alt=""
          />
          <img
            className="second"
            src="/media/hero-rectangle.png"
            alt=""
          />
        </div>
      </section>
      {/* HERO end  */}
      {/* COURSES start */}
      <section className="courses-sec">
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
              <p className="text-sm md:text-base">
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
            <figure className="card">
              <div className="img">
                <img src="/media/twitch.png" className="" alt="" />
              </div>
              <figcaption>
                <h4 className="font-bold">من اباد؟</h4>
                <p>
                  معهد شبكة آباد للتدريب من المعاهد الرائدة في تقديم الدورات
                  التطويرية المتخصصة في تقنية..
                </p>
              </figcaption>
            </figure>
            <figure className="card">
              <div className="img">
                <img src="/media/twitch.png" className="" alt="" />
              </div>
              <figcaption>
                <h4 className="font-bold">من اباد؟</h4>
                <p>
                  معهد شبكة آباد للتدريب من المعاهد الرائدة في تقديم الدورات
                  التطويرية المتخصصة في تقنية..
                </p>
              </figcaption>
            </figure>
            <figure className="card">
              <div className="img">
                <img src="/media/twitch.png" className="" alt="" />
              </div>
              <figcaption>
                <h4 className="font-bold">من اباد؟</h4>
                <p>
                  معهد شبكة آباد للتدريب من المعاهد الرائدة في تقديم الدورات
                  التطويرية المتخصصة في تقنية..
                </p>
              </figcaption>
            </figure>
            <figure className="card">
              <div className="img">
                <img src="/media/twitch.png" className="" alt="" />
              </div>
              <figcaption>
                <h4 className="font-bold">من اباد؟</h4>
                <p>
                  معهد شبكة آباد للتدريب من المعاهد الرائدة في تقديم الدورات
                  التطويرية المتخصصة في تقنية..
                </p>
              </figcaption>
            </figure>
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
        <LatestArticles />
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
          <form action="" className="flex flex-col gap-6">
            <div className="input-name input rounded-3xl px-3 flex items-center bg-[#D9D9D9] bg-opacity-20 relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                  stroke="#E1E1E1"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                  stroke="#E1E1E1"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <input
                placeholder=""
                className="focus:outline-none caret-white p-3.5 bg-transparent"
                type="text"
                name=""
                id=""
              />
              <span className="placeholder text-white">اسمك</span>
            </div>
            <div className="input-email input rounded-3xl px-3 flex items-center bg-[#D9D9D9] bg-opacity-20 relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={22}
                viewBox="0 0 24 22"
                fill="none"
              >
                <path
                  d="M4 3.66663H20C21.1 3.66663 22 4.49163 22 5.49996V16.5C22 17.5083 21.1 18.3333 20 18.3333H4C2.9 18.3333 2 17.5083 2 16.5V5.49996C2 4.49163 2.9 3.66663 4 3.66663Z"
                  stroke="#E1E1E1"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 5.5L12 11.9167L2 5.5"
                  stroke="#E1E1E1"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <input
                placeholder=""
                className="focus:outline-none caret-white p-3.5 bg-transparent"
                type="email"
                name=""
                id=""
              />
              <span className="placeholder text-white">
                عنوان البريد الإلكتروني
              </span>
            </div>
            <button
              type="submit"
              className="bg-abad-gold rounded-xl py-2 font-bold px-7 md:w-fit"
            >
              ارسال
            </button>
          </form>
        </div>
      </section>
      {/* CONTACT end */}
    </main>
  );
}
