"use client";
import React, { useEffect, useState } from "react";
import "./basket.css";
import { useDispatch, useSelector } from "react-redux";
import Loader from "@/components/shared/Loader/Loader";
import // toggleUpdateBasket,
// toggleUpdateBasketCount,
"@/components/GlobalState/Features/authSlice";
import { fetchUserBasket } from "@/components/GlobalState/Features/userData";
import { useRouter } from "next/navigation";
import { fetchWithCheck } from "@/helperFunctions/dataFetching";
import { toggleLoader } from "@/components/GlobalState/Features/popUpsSlice";
import Hero from "@/components/shared/hero/Hero";

async function fetchDeletetFromBasket(basketCourseToken) {
  try {
    const data = await fetchWithCheck(
      `/api/reservations/removeFromBasket?tokenBasket=${basketCourseToken}`,
      true,
      {
        method: "DELETE",
      }
    );
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

const BasketItem = ({ data, userToken }) => {
  const dispatch = useDispatch();

  async function handleDelete(basketCourseToken) {
    dispatch(toggleLoader("جاري الحذف"));

    await fetchDeletetFromBasket(basketCourseToken)
      .then(() => {
        dispatch(fetchUserBasket(userToken));
      })
      .catch((error) => console.log(error));

    dispatch(toggleLoader(""));
  }
  return (
    <tr
      className={`text-[#626262] bg-white p-2.5 rounded-[10px] abad-drop-shadow sm:shadow-none font-medium flex flex-col sm:table-row`}
    >
      <td>
        <div className="flex justify-between pe-4">
          <img
            className="max-w-20 max-h-20 object-cover"
            src="/media/placeholders/basket-item.png"
            alt=""
          />
          {/* remove from basket */}
          <button
            className={`text-[#CDD0D8] hover:text-red-400 sm:hidden`}
            onClick={() => handleDelete(data.basketToken)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18 19C18 19.551 17.552 20 17 20H7C6.448 20 6 19.551 6 19V8H18V19ZM10 4.328C10 4.173 10.214 4 10.5 4H13.5C13.786 4 14 4.173 14 4.328V6H10V4.328ZM21 6H20H16V4.328C16 3.044 14.879 2 13.5 2H10.5C9.121 2 8 3.044 8 4.328V6H4H3C2.45 6 2 6.45 2 7C2 7.55 2.45 8 3 8H4V19C4 20.654 5.346 22 7 22H17C18.654 22 20 20.654 20 19V8H21C21.55 8 22 7.55 22 7C22 6.45 21.55 6 21 6Z"
              />
              <mask
                id="mask0_402_763752"
                style={{ maskType: "luminance" }}
                maskUnits="userSpaceOnUse"
                x="2"
                y="2"
                width="20"
                height="20"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18 19C18 19.551 17.552 20 17 20H7C6.448 20 6 19.551 6 19V8H18V19ZM10 4.328C10 4.173 10.214 4 10.5 4H13.5C13.786 4 14 4.173 14 4.328V6H10V4.328ZM21 6H20H16V4.328C16 3.044 14.879 2 13.5 2H10.5C9.121 2 8 3.044 8 4.328V6H4H3C2.45 6 2 6.45 2 7C2 7.55 2.45 8 3 8H4V19C4 20.654 5.346 22 7 22H17C18.654 22 20 20.654 20 19V8H21C21.55 8 22 7.55 22 7C22 6.45 21.55 6 21 6Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask0_402_763752)">
                <rect width="24" height="24" />
              </g>
            </svg>
          </button>
        </div>
      </td>
      <td>
        <p className="text-[13px] text-[#3F3E43] sm:text-inherit">
          <bdi>{data.courseName}</bdi>
        </p>
      </td>
      <td>
        <div className="flex justify-between pe-4">
          <span className="text-[15px] ">
            <bdi>{data.coursePrice} ريال سعودي</bdi>
          </span>

          {/* remove from basket */}
          <button
            className={`text-[#CDD0D8] hover:text-red-400 hidden sm:block`}
            onClick={() => handleDelete(data.basketToken)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18 19C18 19.551 17.552 20 17 20H7C6.448 20 6 19.551 6 19V8H18V19ZM10 4.328C10 4.173 10.214 4 10.5 4H13.5C13.786 4 14 4.173 14 4.328V6H10V4.328ZM21 6H20H16V4.328C16 3.044 14.879 2 13.5 2H10.5C9.121 2 8 3.044 8 4.328V6H4H3C2.45 6 2 6.45 2 7C2 7.55 2.45 8 3 8H4V19C4 20.654 5.346 22 7 22H17C18.654 22 20 20.654 20 19V8H21C21.55 8 22 7.55 22 7C22 6.45 21.55 6 21 6Z"
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
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18 19C18 19.551 17.552 20 17 20H7C6.448 20 6 19.551 6 19V8H18V19ZM10 4.328C10 4.173 10.214 4 10.5 4H13.5C13.786 4 14 4.173 14 4.328V6H10V4.328ZM21 6H20H16V4.328C16 3.044 14.879 2 13.5 2H10.5C9.121 2 8 3.044 8 4.328V6H4H3C2.45 6 2 6.45 2 7C2 7.55 2.45 8 3 8H4V19C4 20.654 5.346 22 7 22H17C18.654 22 20 20.654 20 19V8H21C21.55 8 22 7.55 22 7C22 6.45 21.55 6 21 6Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask0_402_76375)">
                <rect width="24" height="24" />
              </g>
            </svg>
          </button>
        </div>
      </td>
    </tr>
  );
};

const Basket = () => {
  // all basket data
  const userBasket = useSelector((store) => store.userData.basket.data);
  const dispatch = useDispatch();

  const [toggleReFetch, setToggleReFetch] = useState(false);

  //loading state
  const [deleteLoading, setDeleteLoading] = useState(false);

  // get user JSON string then extract user's token
  const userInfo = useSelector((store) => store.userData.info);

  const router = useRouter();

  async function handleFetchBasket() {
    dispatch(toggleLoader("جاري التحميل"));

    await dispatch(fetchUserBasket()).unwrap();

    dispatch(toggleLoader(""));
  }

  useEffect(() => {
    if (userInfo) handleFetchBasket();
    else router.replace("/");
  }, [toggleReFetch]);

  //calculate all courses prices in basket
  let totalPrice = userBasket?.reduce((pre, cur) => {
    return +pre + +cur.coursePrice;
  }, 0);

  return (
    <main className="pb-10 sm:pb-24 relative">
      {/* HERO start  */}
      <Hero>
        <h2 className="text-2xl font-medium md:text-4xl lg:text-5xl xl:text-6xl max-w-72 sm:max-w-fit">
          <span className="text-abad-gold whitespace-nowrap my-3 block">
            السلة
          </span>
          <p className="text-sm md:text-2xl font-normal leading-loose md:leading-10 lg:leading-[48px]">
            معهد شبكة آباد للتدريب من المعاهد الرائدة في تقديم الدورات التطويرية
            المتخصصة في تقنية المعلومات.
          </p>
        </h2>
      </Hero>
      {/* HERO end  */}
      {/* main content start */}
      <section className="basket relative z-[100] max-w-screen-xl mx-auto px-4 flex flex-col gap-2 sm:gap-8 -mt-40 sm:mt-0">
        {/* basket contents */}
        <div className=" sm:p-10 sm:py-2 sm:drop-shadow-abad">
          <table className="w-full">
            <thead className="hidden sm:table-header-group w-full py-4 item-title justify-between">
              <tr className="[&>th]:text-start w-full flex sm:table-row">
                <th>
                  <span>الصورة</span>
                </th>
                <th>
                  <span>اسم الدورة</span>
                </th>
                <th>
                  <span>السعر</span>
                </th>
              </tr>
            </thead>
            <tbody className="flex flex-col gap-2 sm:table-row-group">
              {userBasket?.map((e, i) => (
                <BasketItem
                  reFetchBasket={setToggleReFetch}
                  data={e}
                  userToken={userInfo?.token}
                  key={i}
                />
              ))}
            </tbody>
          </table>
        </div>

        {/* total value */}
        <div className="purchase p-2.5 py-4 rounded-lg sm:p-10 drop-shadow-abad-2  bg-white flex gap-3 sm:gap-6 flex-wrap justify-between items-center font-bold">
          <h3 className="text-[#221638] md:text-xl">الاجمالي</h3>
          <h3 className="text-[#1B45B4] text-xs md:text-xl">
            <bdi>
              {totalPrice}
              &nbsp; ريال سعودي
            </bdi>
          </h3>
          <button className="w-full p-4 rounded-[10px] text-white text-xs sm:text-lg">
            شراء الان
          </button>
        </div>
      </section>
      {/* main content end */}
    </main>
  );
};

export default Basket;
