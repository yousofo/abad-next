"use client";
import React, { useEffect, useRef, useState } from "react";
import "./basket.dev.css";
import { useDispatch, useSelector } from "react-redux";
import // toggleUpdateBasket,
// toggleUpdateBasketCount,
"@/components/GlobalState/Features/authSlice";
import { fetchUserBasket } from "@/components/GlobalState/Features/userData";
import { useParams, useRouter } from "next/navigation";
import { fetchWithCheck } from "@/helperFunctions/dataFetching";
import {
  closeLoader,
  openLoader,
  toggleSelectPaymentOptions,
} from "@/components/GlobalState/Features/popUpsSlice";
import Hero from "@/components/shared/hero/Hero";
import {
  handleValidateToken,
  isUserSignedIn,
} from "@/helperFunctions/signedInActions";
import { toast } from "react-toastify";
import { handlePayment } from "@/helperFunctions/payment";
import { checkDiscount } from "@/helperFunctions/payment";
import Link from "next/link";
async function fetchDeletetFromBasket(basketCourseToken) {
  try {
    const data = await fetchWithCheck(
      `/api/reservations/removeFromBasket?tokenBasket=${basketCourseToken}`,
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
    dispatch(openLoader("جاري الحذف"));

    await fetchDeletetFromBasket(basketCourseToken)
      .then(() => {
        dispatch(fetchUserBasket(userToken));
      })
      .catch((error) => console.log(error));

    dispatch(closeLoader(""));
  }

  return (
    <tr
      className={`text-[#212529] bg-white p-2.5 rounded-[10px] abad-drop-shadow sm:shadow-none font-medium flex flex-col sm:table-row`}
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

const PaymentMethod = ({ paymentOption, setSelected }) => {
  return (
    <div className="flex gap-2 items-center py-2">
      <input
        type="radio"
        name="paymentOptionSelection"
        id={`paymentOptionSelection-${paymentOption.name}`}
        onClick={() => setSelected(paymentOption.name)}
      />
      <label
        htmlFor={`paymentOptionSelection-${paymentOption.name}`}
        className="flex gap-1 items-center"
      >
        <img src={paymentOption.image} className="max-h-10 " alt="" />
        <span className="text-[#212529]">{paymentOption.text}</span>
      </label>
    </div>
  );
};

const DiscountAccordion = ({
  discountCode,
  checkDiscount,
  setCodeDiscount,
}) => {
  const [active, setActive] = useState(false);
  async function checkDiscountCode(e) {
    const result = await checkDiscount();
    if (result.isDiscountApplicable) {
      setCodeDiscount(result.codeDiscountPercentage);
    }
  }
  return (
    <div className="w-full flex flex-col ">
      <div
        className="w-full flex justify-between cursor-pointer"
        onClick={() => setActive(!active)}
      >
        <span className="text-[#212529] text-sm">هل لديك كود خصم؟</span>
        <svg
          width={20}
          height={20}
          viewBox="0 0 20 20"
          fill="none"
          className={`${active ? "rotate-0" : "rotate-180"} transition-all`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.25 12.5L10 6.25L3.75 12.5"
            stroke="#212529"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div
        className={`w-full ${
          active ? "max-h-36" : "max-h-0"
        } transition-all overflow-hidden flex items-end gap-3`}
      >
        <div className="input discount-input flex-1 ">
          <input
            ref={discountCode}
            type="text"
            name=""
            required
            placeholder="اكتب كود الخصم"
          />
        </div>
        <button
          onClick={checkDiscountCode}
          className="text-xs sm:text-sm  rounded-lg h-fit py-[11px] md:py-[16px] px-4 md:px-6 border border-green-500 text-green-500"
        >
          تطبيق
        </button>
      </div>
    </div>
  );
};

const Basket = () => {
  // all basket data
  const userBasket = useSelector((store) => store.userData.basket.data);
  const dispatch = useDispatch();
  const [toggleReFetch, setToggleReFetch] = useState(false);
  const agreeTerms = useRef(null);
  const [selected, setSelected] = useState(null);
  const { token } = useParams(); //course token
  const discountCode = useRef(null);
  const currentCourseToken = useSelector(
    (store) => store.popUps.currentCourseToken
  );

  const userInfo = useSelector((store) => store.userData.info);

  const [codeDiscount, setCodeDiscount] = useState(0);
  const [discount, setDiscount] = useState(0);

  const router = useRouter();
  console.log(userBasket);
  async function handleFetchBasket() {
    dispatch(openLoader("جاري التحميل"));

    await dispatch(fetchUserBasket()).unwrap();

    dispatch(closeLoader());
  }
  const allPaymentOptions = [
    {
      image: "/media/logos/payment/tamara.png",
      name: "Tamara",
      text: "ادفع باستخدام تمارا",
    },
    {
      image: "/media/logos/payment/master-card.png",
      name: "Mastercard",
      text: "الدفع المباشر عن طريق ماستر كارد",
    },
    {
      image: "/media/logos/payment/apple-pay.png",
      name: "Apple Pay",
      text: "ادفع عن طريق آبل باي ",
    },
    {
      image: "/media/logos/payment/mada-pay.jpg",
      name: "mada Pay",
      text: "الدفع المباشر عن طريق مدي",
    },
    {
      image: "/media/logos/payment/tabby-pay.png",
      name: "Tabby",
      text: "قسّمها على 4. بدون أي فوائد، أو رسوم",
    },
  ];
  //calculate all courses prices in basket
  let accumulatedBasketPrice = userBasket?.reduce((pre, cur) => {
    return +pre + +cur.coursePrice;
  }, 0);

  let discountedBasketPrice =
    accumulatedBasketPrice - (discount * accumulatedBasketPrice) / 100;

  async function handleBasketPayment() {
    if (userBasket.length === 0) {
      toast.error("لا يوجد دورات في السلة");
      return;
    }
    if (!agreeTerms.current) {
      toast.error("يجب عليك الموافقة على الشروط");
      return;
    }

    await handlePayment(
      selected,
      userBasket,
      token,
      currentCourseToken,
      userInfo.token,
      discountCode
    );

    return;
  }

  useEffect(() => {
    if (isUserSignedIn()) {
      handleFetchBasket();
    } else {
      router.replace("/");
      return;
    }
    // fetch discount
    fetchWithCheck(
      `/api/views/compareCourses?courseNumber=${userBasket.length}`,
      null,
      0
    ).then((result) => {
      setDiscount(result.discount);
      if (result.discount > 0) {
        toast.success(`تم تخفيض السعر بنسبة ${result.discount}%`);
      }
    });

    handleValidateToken().then((e) => {
      if (!e) {
        router.replace("/");
        return;
      }
    });
  }, [toggleReFetch]);

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
      <section className="basket relative z-[100] max-w-screen-xl mx-auto px-4 flex flex-col gap-3 sm:gap-4 -mt-40 sm:mt-0">
        {/* content & summary */}
        <div className="flex flex-col md:flex-row w-full gap-4">
          {/* basket contents */}
          <div className="hidden md:flex flex-1 sm:p-10 sm:py-2 drop-shadow-abad  items-center justify-center max-h-[598px] overflow-y-auto">
            {userBasket.length > 0 ? (
              <table className="text-[#212529] self-start">
                <thead className="hidden sm:table-header-group w-full py-4 item-title justify-between">
                  <tr className="w-full flex sm:table-row">
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
            ) : (
              <div className="text-center text-[#212529]">
                لا يوجد دورات في السلة
              </div>
            )}
          </div>
          {/* basket summary & payment options */}
          <div className="flex-1 flex flex-col gap-3 md:gap-4">
            {/* summary */}
            <div className="px-4 py-2 bg-white rounded sm:p-6 sm:py-2 drop-shadow-abad">
              <table className="text-[#212529]">
                {/* <thead className="item-title">
                  <tr>
                    <th>
                      <span>المنتج</span>
                    </th>
                    <th>
                      <span style={{ paddingInlineStart: "0px" }}>المجموع</span>
                    </th>
                  </tr>
                </thead> */}
                <tbody>
                  <tr>
                    <td>المجموع</td>
                    <td className="!text-center">
                      {accumulatedBasketPrice} ريال
                    </td>
                  </tr>
                  {discount > 0 && (
                    <tr>
                      <td>قيمة الخصم</td>
                      <td className="!text-center">
                        - {discount * accumulatedBasketPrice} ريال
                      </td>
                    </tr>
                  )}
                  {codeDiscount > 0 && (
                    <tr>
                      <td>قيمة كود الخصم</td>
                      <td className="!text-center">
                        - {codeDiscount * accumulatedBasketPrice} ريال
                      </td>
                    </tr>
                  )}
                  <tr>
                    <td>ضريبة القيمة المضافة</td>
                    <td className="!text-center">+ 0 ريال</td>
                  </tr>

                  <tr>
                    <td>الإجمالي</td>
                    <td className="!text-center">
                      {discountedBasketPrice} ريال
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* payment options */}
            <div className="flex flex-col gap-1 px-4 py-2 bg-white rounded sm:p-6 sm:py-2 drop-shadow-abad">
              {allPaymentOptions.map((paymentOption, index) => (
                <PaymentMethod
                  setSelected={setSelected}
                  key={index}
                  paymentOption={paymentOption}
                />
              ))}
            </div>
            {/* discount */}
            <div className="px-4 py-3 bg-white rounded sm:p-6 drop-shadow-abad">
              <DiscountAccordion
                discountCode={discountCode}
                checkDiscount={() => checkDiscount(userBasket, discountCode)}
                setCodeDiscount={setCodeDiscount}
              />
            </div>
          </div>
        </div>
        {/* content - mobile view only */}
        <div className="block md:hidden flex-1 py-3 px-4 drop-shadow-abad">
          {userBasket.length > 0 ? (
            <table className="text-[#212529]">
              <thead className="table-header-group w-full py-4 item-title justify-between">
                <tr className="w-full flex sm:table-row ">
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
          ) : (
            <p className="text-[#212529]">لا توجد دورات في السلة</p>
          )}
        </div>
        {/* terms & conditions */}
        <div className="flex items-center gap-2 sm:p-6 py-3 px-4 drop-shadow-abad">
          <input
            onChange={(e) => (agreeTerms.current = e.target.checked)}
            type="checkbox"
            name="agreeTerms"
            id=""
          />
          <p className="text-[#212529]">
            لقد قرأتُ<Link href="/privacy"> الشروط والأحكام </Link>وأوافق عليها
            لهذا الموقع
          </p>
        </div>
        {/* total value */}
        <div className="purchase p-2.5 py-4 rounded-lg sm:p-10 drop-shadow-abad-2  bg-white flex gap-3 sm:gap-6 flex-wrap justify-between items-center font-bold">
          <h3 className="text-[#221638] md:text-xl">الاجمالي</h3>
          <h3 className="text-[#1B45B4] text-xs md:text-xl">
            <bdi>
              {discountedBasketPrice}
              &nbsp; ريال سعودي
            </bdi>
          </h3>
          <button
            className="w-full p-4 rounded-[10px] text-white text-xs sm:text-lg"
            onClick={handleBasketPayment}
          >
            شراء الان
          </button>
        </div>
      </section>
      {/* main content end */}
    </main>
  );
};

export default Basket;
