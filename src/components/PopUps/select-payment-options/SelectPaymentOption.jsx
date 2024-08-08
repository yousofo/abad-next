import { toggleLoader } from "@/components/GlobalState/Features/popUpsSlice";
import { fetchWithCheck } from "@/helperFunctions/dataFetching";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

/**
 * Renders a payment method button with the given image, text, and isTamara flag.
 * When clicked, it makes a request to the server to pay without saving data.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.image - The image URL for the payment method.
 * @param {string} props.text - The text to display for the payment method.
 * @param {boolean} props.isTamara - Flag indicating if the payment method is Tamara.
 * @return {JSX.Element} The payment method button component.
 */
const PaymentMethod = ({ image, text, isTamara = false }) => {
  const { token } = useParams(); //course token
  const userInfo = useSelector((store) => store.userData.info);
  const dispatch = useDispatch();
  const router = useRouter();

  async function handleClick() {
    dispatch(toggleLoader("جاري الدفع"));
    try {
      const result = await fetchWithCheck(
        `/api/reservations/payWithoutSaveData?tokenCourse=${token}&TokenStudent=${userInfo.token}&IsTamar=${isTamara}`,
        true,
        {
          method: "POST",
        }
      );
      router.push(result.redirect_url);
      console.log(result);
      toast.success(result.message);
    } catch (error) {
      toast.error(error.error);
      console.log(error);
    } finally {
      dispatch(toggleLoader(""));
    }
  }

  return (
    <button
      onClick={handleClick}
      className="flex gap-3 items-center border hover:border-abad-gold group drop-shadow-sm px-4 py-3 rounded-sm"
    >
      <div className="p-1 w-20 h-[53px] rounded-sm group-hover:border-abad-gold border">
        <img src={image} className="w-full h-full object-cover" alt="" />
      </div>
      <p className="whitespace-nowrap text-sm">
        <span>ادفع عن طريق</span>
        &nbsp;
        <span>{text}</span>
      </p>
    </button>
  );
};

const SelectPaymentOption = () => {
  return (
    <div className="payment-options w-fit flex flex-col gap-10">
      <div>
        <h2 className="text-xl mb-2">اختر وسيلة الدفع</h2>
        <p className="text-gray-600 text-sm">
          الوسائل المفضلة مع المعاملات الآمنة
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <PaymentMethod image="/media/logos/payment/paypal.png" text="Paypal" />
        <PaymentMethod
          image="/media/logos/payment/tamara.png"
          isTamara={true}
          text="Tamara"
        />
        <PaymentMethod
          image="/media/logos/payment/master-card.png"
          text="Mastercard"
        />
        <PaymentMethod
          image="/media/logos/payment/apple-pay.png"
          text="Apple Pay"
        />
        <PaymentMethod
          image="/media/logos/payment/mada-pay.jpg"
          text="mada Pay"
        />
        <PaymentMethod
          image="/media/logos/payment/tabby-pay.png"
          text="Tabby"
        />
      </div>
    </div>
  );
};

export default SelectPaymentOption;
