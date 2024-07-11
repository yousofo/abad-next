import Image from "next/image";
import "./main.css"
import CourseRow from "@/components/shared/tables/CourseRow";
import Link from "next/link";
import ReviewsSwiper from "@/components/shared/swipers/ReviewsSwiper";
import "swiper/css";
import PartnersSwiper from "@/components/shared/swipers/PartnersSwiper";

export default function Home() {
  return (
    <main>
      {/* HERO start  */}
      <section className="hero h-dvh md:min-h-[600px] md:h-auto relative">
        <div className="intro text-center absolute flex flex-col items-center justify-center gap-4 md:gap-6 text-white w-max max-w-full px-4">
          <h2 className="text-2xl font-medium md:text-3xl lg:text-4xl xl:text-5xl max-w-60 sm:max-w-fit">
            <span>تعلم بكل سهولة مع</span>
            &nbsp;
            <span className="text-abad-gold whitespace-nowrap">اباد للتدريب</span>
          </h2>
          <h4 className="text-sm md:text-md max-w-lg leading-loose">
            معهد شبكة آباد للتدريب من المعاهد الرائدة في تقديم الدورات التطويرية
            المتخصصة في تقنية المعلومات.
          </h4>
          <a
            href="#"
            className="bg-abad-gold flex items-center gap-5 rounded-xl p-2 px-4 text-black text-sm md:text-base"
          >
            <span className="font-medium">ابدأ التعلم</span>
            <svg
              className="text-black rotate-180"
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
      {/* COURSES start */}
      <section className="w-full h-fit relative -mt-20 sm:-mt-0">
        <img
          className="hidden xl:block absolute top-0 right-0 translate-x-[45%] w-64"
          src="/media/Animation - 1717986646627.gif"
          alt=""
        />
        <div className="flex flex-col items-center gap-8 home-courses container px-4 max-w-screen-xl py-10 mx-auto min-h-[450px]">
          {/* courses preview mode options */}
          <div className="flex md:px-6 justify-between items-center w-full">
            <h3 className="text-lg md:text-4xl font-bold text-[#1E1E1E] noto">
              دورات أباد للتدريب
            </h3>
            <ul className="flex justify-center items-center gap-2">
              <li
                data-mode="rows"
                className="active courses-preview-mode courses-preview-rows p-2 rounded-lg cursor-pointer"
              >
                <svg
                  className="  "
                  width={22}
                  height={14}
                  viewBox="0 0 22 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 1H15M9 9H15M9 5H21M9 13H21M3 5C1.89543 5 1 4.10457 1 3C1 1.89543 1.89543 1 3 1C4.10457 1 5 1.89543 5 3C5 4.10457 4.10457 5 3 5ZM3 13C1.89543 13 1 12.1046 1 11C1 9.89543 1.89543 9 3 9C4.10457 9 5 9.89543 5 11C5 12.1046 4.10457 13 3 13Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </li>
              <li
                data-mode="cards"
                className="courses-preview-mode courses-preview-cards p-2 rounded-lg cursor-pointer"
              >
                <svg
                  className="  "
                  width={22}
                  height={22}
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 3C1 1.89543 1.89543 1 3 1H7C8.10457 1 9 1.89543 9 3V7C9 8.10457 8.10457 9 7 9H3C1.89543 9 1 8.10457 1 7V3Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13 3C13 1.89543 13.8954 1 15 1H19C20.1046 1 21 1.89543 21 3V7C21 8.10457 20.1046 9 19 9H15C13.8954 9 13 8.10457 13 7V3Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M1 15C1 13.8954 1.89543 13 3 13H7C8.10457 13 9 13.8954 9 15V19C9 20.1046 8.10457 21 7 21H3C1.89543 21 1 20.1046 1 19V15Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13 15C13 13.8954 13.8954 13 15 13H19C20.1046 13 21 13.8954 21 15V19C21 20.1046 20.1046 21 19 21H15C13.8954 21 13 20.1046 13 19V15Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
              </li>
            </ul>
          </div>
          {/* courses filter */}
          <nav className="courses-filter text-[11px] md:text-sm abad-shadow w-fit rounded-full py-3 px-4">
            <ul className="flex gap-1 md:gap-4 font-bold items-center">
              <li className="active" data-filter="all">
                <button>
                  <span>الكل</span>
                </button>
              </li>
              <li data-filter="design">
                <button>
                  <div className="p-1 bg-black bg-opacity-5 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={25}
                      height={26}
                      viewBox="0 0 25 26"
                      fill="currentColor"
                    >
                      <path
                        d="M22.4106 3.38114H22.1021C22.6902 2.42378 22.473 1.13848 21.5293 0.438269C20.5124 -0.316123 19.0674 -0.0732916 18.3577 0.987203L16.7558 3.38119H2.99449C1.86336 3.38119 0.943115 4.30143 0.943115 5.43256V18.5478C0.943115 19.6789 1.86336 20.5991 2.99449 20.5991H10.9626L10.3606 23.1279H9.06115C8.21429 23.1279 7.5253 23.8168 7.5253 24.6636V24.9843H5.92344C5.64298 24.9843 5.41564 25.2117 5.41564 25.4921C5.41564 25.7725 5.64298 25.9999 5.92344 25.9999H19.4817C19.7622 25.9999 19.9895 25.7725 19.9895 25.4921C19.9895 25.2117 19.7622 24.9843 19.4817 24.9843H17.8799V24.6636C17.8799 23.8168 17.1909 23.1279 16.344 23.1279H15.0446L14.4425 20.5991H22.4107C23.5418 20.5991 24.462 19.6789 24.462 18.5478V15.6619V5.43251C24.462 4.30138 23.5418 3.38114 22.4106 3.38114ZM15.1347 12.3083C14.3408 12.864 12.8534 12.1086 11.4329 12.8665C11.0864 11.0661 11.3049 9.37285 13.1088 8.99911C13.342 8.95051 13.593 8.92852 13.8067 8.93279C14.4172 9.3858 15.0348 9.84399 15.6437 10.2958C15.9102 11.0711 15.8102 11.8354 15.1347 12.3083ZM15.6465 6.86522L17.0839 7.93171L15.9785 9.27947C15.5234 8.94183 15.1322 8.65157 14.6771 8.31388C14.7716 8.17266 15.5601 6.99425 15.6465 6.86522ZM19.2018 1.55203C19.5864 0.977149 20.3708 0.843394 20.9241 1.25395C21.4776 1.66456 21.5768 2.45399 21.1382 2.98876C20.36 3.93748 18.5098 6.19319 17.7287 7.14558L16.2119 6.02019L19.2018 1.55203ZM16.8642 24.6636V24.9843H8.54091V24.6636C8.54091 24.3768 8.77429 24.1435 9.06115 24.1435H16.344C16.6308 24.1435 16.8642 24.3768 16.8642 24.6636ZM14.0005 23.1279H11.4046L12.0066 20.5991H13.3985L14.0005 23.1279ZM23.4464 18.5478C23.4464 19.1189 22.9818 19.5835 22.4107 19.5835C21.6046 19.5835 3.90086 19.5835 2.99454 19.5835C2.42341 19.5835 1.95877 19.1189 1.95877 18.5478V16.1697H3.40987C3.69033 16.1697 3.91767 15.9423 3.91767 15.6619C3.91767 15.3815 3.69033 15.1541 3.40987 15.1541H1.95867V5.43251C1.95867 4.86138 2.42331 4.39674 2.99443 4.39674H16.0762C15.5897 5.12376 14.1705 7.24475 13.7209 7.91652C12.7258 7.92551 11.7322 8.27219 11.0819 9.03146C10.1968 10.0646 10.0413 11.6879 10.6197 13.8563C10.7186 14.2271 11.1812 14.36 11.4612 14.0926C12.7742 12.8379 14.4095 14.2065 15.874 13.0212C16.7679 12.2975 16.9795 11.1472 16.6424 10.0714C17.098 9.5159 20.8401 4.9536 21.2968 4.39674H22.4106C22.9817 4.39674 23.4463 4.86138 23.4463 5.43251V15.1541H7.47219C7.19173 15.1541 6.96438 15.3815 6.96438 15.6619C6.96438 15.9423 7.19173 16.1697 7.47219 16.1697H23.4464V18.5478Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <span>التصميم</span>
                </button>
              </li>
              <li data-filter="programming">
                <button>
                  <div className="p-1 bg-black bg-opacity-5 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={25}
                      height={26}
                      viewBox="0 0 25 26"
                      fill="currentColor"
                    >
                      <path
                        d="M22.4106 3.38114H22.1021C22.6902 2.42378 22.473 1.13848 21.5293 0.438269C20.5124 -0.316123 19.0674 -0.0732916 18.3577 0.987203L16.7558 3.38119H2.99449C1.86336 3.38119 0.943115 4.30143 0.943115 5.43256V18.5478C0.943115 19.6789 1.86336 20.5991 2.99449 20.5991H10.9626L10.3606 23.1279H9.06115C8.21429 23.1279 7.5253 23.8168 7.5253 24.6636V24.9843H5.92344C5.64298 24.9843 5.41564 25.2117 5.41564 25.4921C5.41564 25.7725 5.64298 25.9999 5.92344 25.9999H19.4817C19.7622 25.9999 19.9895 25.7725 19.9895 25.4921C19.9895 25.2117 19.7622 24.9843 19.4817 24.9843H17.8799V24.6636C17.8799 23.8168 17.1909 23.1279 16.344 23.1279H15.0446L14.4425 20.5991H22.4107C23.5418 20.5991 24.462 19.6789 24.462 18.5478V15.6619V5.43251C24.462 4.30138 23.5418 3.38114 22.4106 3.38114ZM15.1347 12.3083C14.3408 12.864 12.8534 12.1086 11.4329 12.8665C11.0864 11.0661 11.3049 9.37285 13.1088 8.99911C13.342 8.95051 13.593 8.92852 13.8067 8.93279C14.4172 9.3858 15.0348 9.84399 15.6437 10.2958C15.9102 11.0711 15.8102 11.8354 15.1347 12.3083ZM15.6465 6.86522L17.0839 7.93171L15.9785 9.27947C15.5234 8.94183 15.1322 8.65157 14.6771 8.31388C14.7716 8.17266 15.5601 6.99425 15.6465 6.86522ZM19.2018 1.55203C19.5864 0.977149 20.3708 0.843394 20.9241 1.25395C21.4776 1.66456 21.5768 2.45399 21.1382 2.98876C20.36 3.93748 18.5098 6.19319 17.7287 7.14558L16.2119 6.02019L19.2018 1.55203ZM16.8642 24.6636V24.9843H8.54091V24.6636C8.54091 24.3768 8.77429 24.1435 9.06115 24.1435H16.344C16.6308 24.1435 16.8642 24.3768 16.8642 24.6636ZM14.0005 23.1279H11.4046L12.0066 20.5991H13.3985L14.0005 23.1279ZM23.4464 18.5478C23.4464 19.1189 22.9818 19.5835 22.4107 19.5835C21.6046 19.5835 3.90086 19.5835 2.99454 19.5835C2.42341 19.5835 1.95877 19.1189 1.95877 18.5478V16.1697H3.40987C3.69033 16.1697 3.91767 15.9423 3.91767 15.6619C3.91767 15.3815 3.69033 15.1541 3.40987 15.1541H1.95867V5.43251C1.95867 4.86138 2.42331 4.39674 2.99443 4.39674H16.0762C15.5897 5.12376 14.1705 7.24475 13.7209 7.91652C12.7258 7.92551 11.7322 8.27219 11.0819 9.03146C10.1968 10.0646 10.0413 11.6879 10.6197 13.8563C10.7186 14.2271 11.1812 14.36 11.4612 14.0926C12.7742 12.8379 14.4095 14.2065 15.874 13.0212C16.7679 12.2975 16.9795 11.1472 16.6424 10.0714C17.098 9.5159 20.8401 4.9536 21.2968 4.39674H22.4106C22.9817 4.39674 23.4463 4.86138 23.4463 5.43251V15.1541H7.47219C7.19173 15.1541 6.96438 15.3815 6.96438 15.6619C6.96438 15.9423 7.19173 16.1697 7.47219 16.1697H23.4464V18.5478Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <span>البرمجة</span>
                </button>
              </li>
              <li data-filter="finance">
                <button>
                  <div className="p-1 bg-black bg-opacity-5 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={25}
                      height={26}
                      viewBox="0 0 25 26"
                      fill="currentColor"
                    >
                      <path
                        d="M22.4106 3.38114H22.1021C22.6902 2.42378 22.473 1.13848 21.5293 0.438269C20.5124 -0.316123 19.0674 -0.0732916 18.3577 0.987203L16.7558 3.38119H2.99449C1.86336 3.38119 0.943115 4.30143 0.943115 5.43256V18.5478C0.943115 19.6789 1.86336 20.5991 2.99449 20.5991H10.9626L10.3606 23.1279H9.06115C8.21429 23.1279 7.5253 23.8168 7.5253 24.6636V24.9843H5.92344C5.64298 24.9843 5.41564 25.2117 5.41564 25.4921C5.41564 25.7725 5.64298 25.9999 5.92344 25.9999H19.4817C19.7622 25.9999 19.9895 25.7725 19.9895 25.4921C19.9895 25.2117 19.7622 24.9843 19.4817 24.9843H17.8799V24.6636C17.8799 23.8168 17.1909 23.1279 16.344 23.1279H15.0446L14.4425 20.5991H22.4107C23.5418 20.5991 24.462 19.6789 24.462 18.5478V15.6619V5.43251C24.462 4.30138 23.5418 3.38114 22.4106 3.38114ZM15.1347 12.3083C14.3408 12.864 12.8534 12.1086 11.4329 12.8665C11.0864 11.0661 11.3049 9.37285 13.1088 8.99911C13.342 8.95051 13.593 8.92852 13.8067 8.93279C14.4172 9.3858 15.0348 9.84399 15.6437 10.2958C15.9102 11.0711 15.8102 11.8354 15.1347 12.3083ZM15.6465 6.86522L17.0839 7.93171L15.9785 9.27947C15.5234 8.94183 15.1322 8.65157 14.6771 8.31388C14.7716 8.17266 15.5601 6.99425 15.6465 6.86522ZM19.2018 1.55203C19.5864 0.977149 20.3708 0.843394 20.9241 1.25395C21.4776 1.66456 21.5768 2.45399 21.1382 2.98876C20.36 3.93748 18.5098 6.19319 17.7287 7.14558L16.2119 6.02019L19.2018 1.55203ZM16.8642 24.6636V24.9843H8.54091V24.6636C8.54091 24.3768 8.77429 24.1435 9.06115 24.1435H16.344C16.6308 24.1435 16.8642 24.3768 16.8642 24.6636ZM14.0005 23.1279H11.4046L12.0066 20.5991H13.3985L14.0005 23.1279ZM23.4464 18.5478C23.4464 19.1189 22.9818 19.5835 22.4107 19.5835C21.6046 19.5835 3.90086 19.5835 2.99454 19.5835C2.42341 19.5835 1.95877 19.1189 1.95877 18.5478V16.1697H3.40987C3.69033 16.1697 3.91767 15.9423 3.91767 15.6619C3.91767 15.3815 3.69033 15.1541 3.40987 15.1541H1.95867V5.43251C1.95867 4.86138 2.42331 4.39674 2.99443 4.39674H16.0762C15.5897 5.12376 14.1705 7.24475 13.7209 7.91652C12.7258 7.92551 11.7322 8.27219 11.0819 9.03146C10.1968 10.0646 10.0413 11.6879 10.6197 13.8563C10.7186 14.2271 11.1812 14.36 11.4612 14.0926C12.7742 12.8379 14.4095 14.2065 15.874 13.0212C16.7679 12.2975 16.9795 11.1472 16.6424 10.0714C17.098 9.5159 20.8401 4.9536 21.2968 4.39674H22.4106C22.9817 4.39674 23.4463 4.86138 23.4463 5.43251V15.1541H7.47219C7.19173 15.1541 6.96438 15.3815 6.96438 15.6619C6.96438 15.9423 7.19173 16.1697 7.47219 16.1697H23.4464V18.5478Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <span>المالية</span>
                </button>
              </li>
              <li className="hidden md:list-item" data-filter="art">
                <button>
                  <div className="p-1 bg-black bg-opacity-5 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={25}
                      height={26}
                      viewBox="0 0 25 26"
                      fill="currentColor"
                    >
                      <path
                        d="M22.4106 3.38114H22.1021C22.6902 2.42378 22.473 1.13848 21.5293 0.438269C20.5124 -0.316123 19.0674 -0.0732916 18.3577 0.987203L16.7558 3.38119H2.99449C1.86336 3.38119 0.943115 4.30143 0.943115 5.43256V18.5478C0.943115 19.6789 1.86336 20.5991 2.99449 20.5991H10.9626L10.3606 23.1279H9.06115C8.21429 23.1279 7.5253 23.8168 7.5253 24.6636V24.9843H5.92344C5.64298 24.9843 5.41564 25.2117 5.41564 25.4921C5.41564 25.7725 5.64298 25.9999 5.92344 25.9999H19.4817C19.7622 25.9999 19.9895 25.7725 19.9895 25.4921C19.9895 25.2117 19.7622 24.9843 19.4817 24.9843H17.8799V24.6636C17.8799 23.8168 17.1909 23.1279 16.344 23.1279H15.0446L14.4425 20.5991H22.4107C23.5418 20.5991 24.462 19.6789 24.462 18.5478V15.6619V5.43251C24.462 4.30138 23.5418 3.38114 22.4106 3.38114ZM15.1347 12.3083C14.3408 12.864 12.8534 12.1086 11.4329 12.8665C11.0864 11.0661 11.3049 9.37285 13.1088 8.99911C13.342 8.95051 13.593 8.92852 13.8067 8.93279C14.4172 9.3858 15.0348 9.84399 15.6437 10.2958C15.9102 11.0711 15.8102 11.8354 15.1347 12.3083ZM15.6465 6.86522L17.0839 7.93171L15.9785 9.27947C15.5234 8.94183 15.1322 8.65157 14.6771 8.31388C14.7716 8.17266 15.5601 6.99425 15.6465 6.86522ZM19.2018 1.55203C19.5864 0.977149 20.3708 0.843394 20.9241 1.25395C21.4776 1.66456 21.5768 2.45399 21.1382 2.98876C20.36 3.93748 18.5098 6.19319 17.7287 7.14558L16.2119 6.02019L19.2018 1.55203ZM16.8642 24.6636V24.9843H8.54091V24.6636C8.54091 24.3768 8.77429 24.1435 9.06115 24.1435H16.344C16.6308 24.1435 16.8642 24.3768 16.8642 24.6636ZM14.0005 23.1279H11.4046L12.0066 20.5991H13.3985L14.0005 23.1279ZM23.4464 18.5478C23.4464 19.1189 22.9818 19.5835 22.4107 19.5835C21.6046 19.5835 3.90086 19.5835 2.99454 19.5835C2.42341 19.5835 1.95877 19.1189 1.95877 18.5478V16.1697H3.40987C3.69033 16.1697 3.91767 15.9423 3.91767 15.6619C3.91767 15.3815 3.69033 15.1541 3.40987 15.1541H1.95867V5.43251C1.95867 4.86138 2.42331 4.39674 2.99443 4.39674H16.0762C15.5897 5.12376 14.1705 7.24475 13.7209 7.91652C12.7258 7.92551 11.7322 8.27219 11.0819 9.03146C10.1968 10.0646 10.0413 11.6879 10.6197 13.8563C10.7186 14.2271 11.1812 14.36 11.4612 14.0926C12.7742 12.8379 14.4095 14.2065 15.874 13.0212C16.7679 12.2975 16.9795 11.1472 16.6424 10.0714C17.098 9.5159 20.8401 4.9536 21.2968 4.39674H22.4106C22.9817 4.39674 23.4463 4.86138 23.4463 5.43251V15.1541H7.47219C7.19173 15.1541 6.96438 15.3815 6.96438 15.6619C6.96438 15.9423 7.19173 16.1697 7.47219 16.1697H23.4464V18.5478Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <span>الفن</span>
                </button>
              </li>
              <li className="hidden md:list-item" data-filter="science">
                <button>
                  <div className="p-1 bg-black bg-opacity-5 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={25}
                      height={26}
                      viewBox="0 0 25 26"
                      fill="currentColor"
                    >
                      <path
                        d="M22.4106 3.38114H22.1021C22.6902 2.42378 22.473 1.13848 21.5293 0.438269C20.5124 -0.316123 19.0674 -0.0732916 18.3577 0.987203L16.7558 3.38119H2.99449C1.86336 3.38119 0.943115 4.30143 0.943115 5.43256V18.5478C0.943115 19.6789 1.86336 20.5991 2.99449 20.5991H10.9626L10.3606 23.1279H9.06115C8.21429 23.1279 7.5253 23.8168 7.5253 24.6636V24.9843H5.92344C5.64298 24.9843 5.41564 25.2117 5.41564 25.4921C5.41564 25.7725 5.64298 25.9999 5.92344 25.9999H19.4817C19.7622 25.9999 19.9895 25.7725 19.9895 25.4921C19.9895 25.2117 19.7622 24.9843 19.4817 24.9843H17.8799V24.6636C17.8799 23.8168 17.1909 23.1279 16.344 23.1279H15.0446L14.4425 20.5991H22.4107C23.5418 20.5991 24.462 19.6789 24.462 18.5478V15.6619V5.43251C24.462 4.30138 23.5418 3.38114 22.4106 3.38114ZM15.1347 12.3083C14.3408 12.864 12.8534 12.1086 11.4329 12.8665C11.0864 11.0661 11.3049 9.37285 13.1088 8.99911C13.342 8.95051 13.593 8.92852 13.8067 8.93279C14.4172 9.3858 15.0348 9.84399 15.6437 10.2958C15.9102 11.0711 15.8102 11.8354 15.1347 12.3083ZM15.6465 6.86522L17.0839 7.93171L15.9785 9.27947C15.5234 8.94183 15.1322 8.65157 14.6771 8.31388C14.7716 8.17266 15.5601 6.99425 15.6465 6.86522ZM19.2018 1.55203C19.5864 0.977149 20.3708 0.843394 20.9241 1.25395C21.4776 1.66456 21.5768 2.45399 21.1382 2.98876C20.36 3.93748 18.5098 6.19319 17.7287 7.14558L16.2119 6.02019L19.2018 1.55203ZM16.8642 24.6636V24.9843H8.54091V24.6636C8.54091 24.3768 8.77429 24.1435 9.06115 24.1435H16.344C16.6308 24.1435 16.8642 24.3768 16.8642 24.6636ZM14.0005 23.1279H11.4046L12.0066 20.5991H13.3985L14.0005 23.1279ZM23.4464 18.5478C23.4464 19.1189 22.9818 19.5835 22.4107 19.5835C21.6046 19.5835 3.90086 19.5835 2.99454 19.5835C2.42341 19.5835 1.95877 19.1189 1.95877 18.5478V16.1697H3.40987C3.69033 16.1697 3.91767 15.9423 3.91767 15.6619C3.91767 15.3815 3.69033 15.1541 3.40987 15.1541H1.95867V5.43251C1.95867 4.86138 2.42331 4.39674 2.99443 4.39674H16.0762C15.5897 5.12376 14.1705 7.24475 13.7209 7.91652C12.7258 7.92551 11.7322 8.27219 11.0819 9.03146C10.1968 10.0646 10.0413 11.6879 10.6197 13.8563C10.7186 14.2271 11.1812 14.36 11.4612 14.0926C12.7742 12.8379 14.4095 14.2065 15.874 13.0212C16.7679 12.2975 16.9795 11.1472 16.6424 10.0714C17.098 9.5159 20.8401 4.9536 21.2968 4.39674H22.4106C22.9817 4.39674 23.4463 4.86138 23.4463 5.43251V15.1541H7.47219C7.19173 15.1541 6.96438 15.3815 6.96438 15.6619C6.96438 15.9423 7.19173 16.1697 7.47219 16.1697H23.4464V18.5478Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <span>العلوم</span>
                </button>
              </li>
              <li className="hidden md:list-item" data-filter="big-data">
                <button>
                  <div className="p-1 bg-black bg-opacity-5 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={25}
                      height={26}
                      viewBox="0 0 25 26"
                      fill="currentColor"
                    >
                      <path
                        d="M22.4106 3.38114H22.1021C22.6902 2.42378 22.473 1.13848 21.5293 0.438269C20.5124 -0.316123 19.0674 -0.0732916 18.3577 0.987203L16.7558 3.38119H2.99449C1.86336 3.38119 0.943115 4.30143 0.943115 5.43256V18.5478C0.943115 19.6789 1.86336 20.5991 2.99449 20.5991H10.9626L10.3606 23.1279H9.06115C8.21429 23.1279 7.5253 23.8168 7.5253 24.6636V24.9843H5.92344C5.64298 24.9843 5.41564 25.2117 5.41564 25.4921C5.41564 25.7725 5.64298 25.9999 5.92344 25.9999H19.4817C19.7622 25.9999 19.9895 25.7725 19.9895 25.4921C19.9895 25.2117 19.7622 24.9843 19.4817 24.9843H17.8799V24.6636C17.8799 23.8168 17.1909 23.1279 16.344 23.1279H15.0446L14.4425 20.5991H22.4107C23.5418 20.5991 24.462 19.6789 24.462 18.5478V15.6619V5.43251C24.462 4.30138 23.5418 3.38114 22.4106 3.38114ZM15.1347 12.3083C14.3408 12.864 12.8534 12.1086 11.4329 12.8665C11.0864 11.0661 11.3049 9.37285 13.1088 8.99911C13.342 8.95051 13.593 8.92852 13.8067 8.93279C14.4172 9.3858 15.0348 9.84399 15.6437 10.2958C15.9102 11.0711 15.8102 11.8354 15.1347 12.3083ZM15.6465 6.86522L17.0839 7.93171L15.9785 9.27947C15.5234 8.94183 15.1322 8.65157 14.6771 8.31388C14.7716 8.17266 15.5601 6.99425 15.6465 6.86522ZM19.2018 1.55203C19.5864 0.977149 20.3708 0.843394 20.9241 1.25395C21.4776 1.66456 21.5768 2.45399 21.1382 2.98876C20.36 3.93748 18.5098 6.19319 17.7287 7.14558L16.2119 6.02019L19.2018 1.55203ZM16.8642 24.6636V24.9843H8.54091V24.6636C8.54091 24.3768 8.77429 24.1435 9.06115 24.1435H16.344C16.6308 24.1435 16.8642 24.3768 16.8642 24.6636ZM14.0005 23.1279H11.4046L12.0066 20.5991H13.3985L14.0005 23.1279ZM23.4464 18.5478C23.4464 19.1189 22.9818 19.5835 22.4107 19.5835C21.6046 19.5835 3.90086 19.5835 2.99454 19.5835C2.42341 19.5835 1.95877 19.1189 1.95877 18.5478V16.1697H3.40987C3.69033 16.1697 3.91767 15.9423 3.91767 15.6619C3.91767 15.3815 3.69033 15.1541 3.40987 15.1541H1.95867V5.43251C1.95867 4.86138 2.42331 4.39674 2.99443 4.39674H16.0762C15.5897 5.12376 14.1705 7.24475 13.7209 7.91652C12.7258 7.92551 11.7322 8.27219 11.0819 9.03146C10.1968 10.0646 10.0413 11.6879 10.6197 13.8563C10.7186 14.2271 11.1812 14.36 11.4612 14.0926C12.7742 12.8379 14.4095 14.2065 15.874 13.0212C16.7679 12.2975 16.9795 11.1472 16.6424 10.0714C17.098 9.5159 20.8401 4.9536 21.2968 4.39674H22.4106C22.9817 4.39674 23.4463 4.86138 23.4463 5.43251V15.1541H7.47219C7.19173 15.1541 6.96438 15.3815 6.96438 15.6619C6.96438 15.9423 7.19173 16.1697 7.47219 16.1697H23.4464V18.5478Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <span>البيانات الكبيرة</span>
                </button>
              </li>
            </ul>
          </nav>
          {/* courses table ROWS MODE */}
          <table className="courses-rows w-full px-3 md:px-6">
            <thead className="bg-[#1D2A96]">
              <tr className="abad-shadow rounded-lg hidden md:table-row">
                <th className="text-start">اسم الدورة</th>
                <th className="text-start">تاريخ بداية الدورة</th>
                <th className="text-start">وقت بداية الدورة</th>
                <th className="text-start">الاجراءات</th>
              </tr>
            </thead>
            {/* rows data */}
            <tbody>
              {
                (function () {
                  let rows = []
                  for (let i = 0; i < 6; i++) {
                    rows.push(<CourseRow key={i} index={i} />)
                  }
                  console.log("================================== " + rows.length)
                  return rows
                })()
              }
            </tbody>
          </table>
          {/* courses table CARDS MODE */}
          <div
            className="courses-cards min-h-[400px]"
            style={{ display: "none" }}
          />
          {/* link to all courses page */}
          <Link
            href="/courses"
            className="text-white cursor-pointer font-medium px-10 py-4 show-all flex items-center gap-5 rounded-xl"
          >
            <span>عرض الكل</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M19 12H5"
                stroke="white"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 5L5 12L12 19"
                stroke="white"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </section>
      {/* COURSES end   */}
      {/* PLAN start */}
      <section className="plan relative p-10 overflow-hidden">
        <img
          src="/media/Share Section.png"
          className="absolute left-0 top-0 w-full h-full object-cover -z-10"
          alt=""
        />
        <div className="flex flex-col gap-6 md:flex-row container justify-between max-w-screen-lg mx-auto pt-6 md:pt-0">
          <div className="flex items-center md:w-[45%]">
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
          <div className="cards flex flex-wrap mx-auto flex-row gap-6 max-w-[500px]">
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
      <section className="reviews relative p-10 overflow-hidden">
        <img
          src="/media/Review Section.png"
          className="absolute left-0 top-0 w-full h-full object-cover -z-10"
          alt=""
        />
        <div className="container max-w-screen-lg mx-auto flex flex-col gap-5">
          <h3 className="font-bold text-2xl md:text-4xl text-center text-[#172327]">
            لماذا طلاب <span className="text-abad-gold">اباد للتدريب</span>
            <br />
            <span className="inline-block py-2">يحبون التعلم معنا؟</span>
          </h3>
          {/* Slider main container */}
          <div className="cards w-full">
            <div className="swiper-wrapper cards-wrapper">
              <ReviewsSwiper />
            </div>
            <div className="flex justify-center gap-8 mt-8">
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
        <div className="container lg:max-w-screen-lg mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-[1.5%] sm:pb-[6%] pt-10">
          <article>
            <div className="article-wrapper">
              <div className="img relative">
                <img src="/media/Iamge.png" alt="" />
                <span className="abosulute article-tag article-tag-yellow">
                  القصص
                </span>
              </div>
              <div>
                <p>5 مايو 2022 | ,قراءة 4 دقائق</p>
                <h3>كيف يمكن أن يساعد التسويق عملك أكثر من أي شيء آخر.</h3>
              </div>
            </div>
          </article>
          <article>
            <div className="article-wrapper">
              <div className="img relative">
                <img src="/media/Iamge.png" alt="" />
                <span className="abosulute article-tag article-tag-blue">
                  القصص
                </span>
              </div>
              <div>
                <p>5 مايو 2022 | ,قراءة 4 دقائق</p>
                <h3>كيف يمكن أن يساعد التسويق عملك أكثر من أي شيء آخر.</h3>
              </div>
            </div>
          </article>
          <article>
            <div className="article-wrapper">
              <div className="img relative">
                <img src="/media/Iamge.png" alt="" />
                <span className="abosulute article-tag article-tag-black">
                  القصص
                </span>
              </div>
              <div>
                <p>5 مايو 2022 | ,قراءة 4 دقائق</p>
                <h3>كيف يمكن أن يساعد التسويق عملك أكثر من أي شيء آخر.</h3>
              </div>
            </div>
          </article>
          <article>
            <div className="article-wrapper">
              <div className="img relative">
                <img src="/media/Iamge.png" alt="" />
                <span className="abosulute article-tag article-tag-black">
                  القصص
                </span>
              </div>
              <div>
                <p>5 مايو 2022 | ,قراءة 4 دقائق</p>
                <h3>كيف يمكن أن يساعد التسويق عملك أكثر من أي شيء آخر.</h3>
              </div>
            </div>
          </article>
          <article>
            <div className="article-wrapper">
              <div className="img relative">
                <img src="/media/Iamge.png" alt="" />
                <span className="abosulute article-tag article-tag-blue">
                  القصص
                </span>
              </div>
              <div>
                <p>5 مايو 2022 | ,قراءة 4 دقائق</p>
                <h3>كيف يمكن أن يساعد التسويق عملك أكثر من أي شيء آخر.</h3>
              </div>
            </div>
          </article>
          <article>
            <div className="article-wrapper">
              <div className="img relative">
                <img src="/media/Iamge.png" alt="" />
                <span className="abosulute article-tag article-tag-yellow">
                  القصص
                </span>
              </div>
              <div>
                <p>5 مايو 2022 | ,قراءة 4 دقائق</p>
                <h3>كيف يمكن أن يساعد التسويق عملك أكثر من أي شيء آخر.</h3>
              </div>
            </div>
          </article>
        </div>
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
