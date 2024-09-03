"use client";
import React, { useEffect, useRef, useState } from "react";
import "./basket.css";
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
                className="mask0_402_76375"
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
              <g mask="url(.mask0_402_763752)">
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
                className="mask0_402_76375"
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
              <g mask="url(.mask0_402_76375)">
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
  const [isApplicable, setIsApplicable] = useState(false);
  async function checkDiscountCode(e) {
    try {
      const result = await checkDiscount();
      if (result?.isDiscountApplicable) {
        setIsApplicable(result.isDiscountApplicabl);
        setCodeDiscount(result.codeDiscountPercentage);
      }
    } catch {
      toast.error("حدث خطأ في التحقق من الكود");
    }
  }
  return (
    <div className={`w-full transition-all overflow-hidden flex items-end`}>
      <div className="input discount-input flex-1 relative">
        <svg
          width="23"
          height="23"
          viewBox="0 0 23 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${
            !isApplicable && " hidden "
          } absolute top-1/2 -translate-y-1/2 left-2`}
        >
          <path
            d="M11.5 0C5.14894 0 0 5.14715 0 11.5C0 17.8529 5.14894 23 11.5 23C17.8511 23 23 17.8497 23 11.5C23 5.15029 17.8511 0 11.5 0Z"
            fill="#2AD352"
          />
          <path
            d="M1.06798e-05 11.5C-0.00258532 13.4009 0.468128 15.2724 1.36968 16.9459C2.51828 17.2831 3.7093 17.4539 4.90638 17.4531C11.8199 17.4531 17.4243 11.8486 17.4243 4.93513C17.4253 3.71907 17.2492 2.50935 16.9014 1.34408C15.2389 0.458543 13.3836 -0.00312088 11.5 1.58781e-05C5.14896 1.58781e-05 1.06798e-05 5.14716 1.06798e-05 11.5Z"
            fill="#74DA7F"
          />
          <path
            d="M18.0596 9.59447L11.1474 16.8534C10.9591 17.051 10.7328 17.2086 10.482 17.3166C10.2313 17.4247 9.96139 17.481 9.68839 17.4823H9.6794C9.40791 17.4824 9.13918 17.4279 8.88915 17.3221C8.63913 17.2163 8.41291 17.0613 8.22393 16.8664L4.55606 13.0885C4.36655 12.8983 4.2167 12.6723 4.11522 12.4237C4.01374 12.1751 3.96265 11.9088 3.96492 11.6403C3.96718 11.3718 4.02275 11.1064 4.1284 10.8595C4.23405 10.6126 4.38768 10.3892 4.58038 10.2022C4.77307 10.0152 5.00099 9.86832 5.2509 9.7701C5.50082 9.67188 5.76775 9.62428 6.03621 9.63005C6.30467 9.63582 6.56931 9.69486 6.81477 9.80373C7.06023 9.9126 7.28162 10.0691 7.4661 10.2643L9.66503 12.5292L15.1226 6.79809C15.3054 6.60205 15.5253 6.44421 15.7695 6.33369C16.0137 6.22317 16.2774 6.16217 16.5453 6.15421C16.8133 6.14626 17.0801 6.1915 17.3305 6.28733C17.5808 6.38316 17.8097 6.52768 18.0038 6.71252C18.1979 6.89736 18.3535 7.11886 18.4615 7.3642C18.5695 7.60954 18.6277 7.87386 18.6329 8.14186C18.6381 8.40987 18.5901 8.67624 18.4917 8.92558C18.3933 9.17491 18.2464 9.40226 18.0596 9.59447Z"
            fill="white"
          />
        </svg>

        <input
          ref={discountCode}
          type="text"
          name=""
          required
          className="py-6 md:py-8 px-5 md:px-6 font-medium text-xs sm:text-base"
          placeholder="ادخل كوبون الخصم "
        />
      </div>
      <button
        onClick={checkDiscountCode}
        disabled={isApplicable}
        className="discount-btn  text-white font-medium rounded-lg h-fit py-6 md:py-8 px-5 md:px-6 text-xs sm:text-base"
      >
        تفعيل
      </button>
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

  let priceAfterCode =
    discountedBasketPrice - (codeDiscount * discountedBasketPrice) / 100;
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
          {/* basket contents & discount*/}
          <div className="hidden md:flex flex-col flex-1 gap-4">
            {/* contents */}
            <div className="hidden md:flex  flex-1  drop-shadow-abad  items-center justify-center overflow-y-auto relative">
              {userBasket.length > 0 ? (
                <div className="self-start absolute w-full h-full overflow-y-auto max-h-full sm:p-10 sm:py-2">
                  <table className="text-[#212529] ">
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
                </div>
              ) : (
                <div className="text-center text-[#212529] ">
                  لا يوجد دورات في السلة
                </div>
              )}
            </div>
            {/* discount */}
            <div className=" bg-white rounded  drop-shadow-abad w-full">
              <DiscountAccordion
                discountCode={discountCode}
                checkDiscount={() => checkDiscount(userBasket, discountCode)}
                setCodeDiscount={setCodeDiscount}
              />
            </div>
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
                        - {(codeDiscount / 100) * accumulatedBasketPrice} ريال
                      </td>
                    </tr>
                  )}
                  <tr>
                    <td>ضريبة القيمة المضافة</td>
                    <td className="!text-center">+ 0 ريال</td>
                  </tr>

                  <tr>
                    <td>الإجمالي</td>
                    <td className="!text-center">{priceAfterCode} ريال</td>
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
          </div>
        </div>
        {/* content - mobile view only */}
        <div className="block md:hidden flex-1">
          {userBasket.length > 0 ? (
            <table className="text-[#212529]">
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
        {/* discount - mobile view only*/}
        <div className="block md:hidden  bg-white rounded  drop-shadow-abad w-full">
          <DiscountAccordion
            discountCode={discountCode}
            checkDiscount={() => checkDiscount(userBasket, discountCode)}
            setCodeDiscount={setCodeDiscount}
          />
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
