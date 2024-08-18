import {
  closeLoader,
  openLoader,
} from "@/components/GlobalState/Features/popUpsSlice";
import { fetchWithCheck } from "@/helperFunctions/dataFetching";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { resetPopUps } from "@/components/GlobalState/Features/popUpsSlice";

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
const PaymentMethod = ({ image, text,setSelected}) => {
  
  
  return (
    <div className="flex gap-2 items-center">
      <input
        type="radio"
        name="paymentOptionSelection"
        id={`paymentOptionSelection-${text}`}
        onClick={() => setSelected(text)}
      />
      <label htmlFor={`paymentOptionSelection-${text}`} className="flex gap-1 items-center">
        <img src={image} className="max-h-10 " alt="" />
        <span className="text-sm">{text}</span>
      </label>
    </div>
  );
};

const SelectPaymentOption = () => {
  const [selected,setSelected] = useState(null)
  const { token } = useParams(); //course token
  const userInfo = useSelector((store) => store.userData.info);
  const dispatch = useDispatch();
  const router = useRouter();
  const currentCourseToken = useSelector(
    (store) => store.popUps.currentCourseToken
  );

  const allPaymentOptions = [
    {
      image: "/media/logos/payment/tamara.png",
      text: "Tamara",
    },
    {
      image: "/media/logos/payment/master-card.png",
      text: "Mastercard",
    },
    {
      image: "/media/logos/payment/apple-pay.png",
      text: "Apple Pay",
    },
    {
      image: "/media/logos/payment/mada-pay.jpg",
      text: "mada Pay",
    },
    {
      image: "/media/logos/payment/tabby-pay.png",
      text: "Tabby",
    },
  ];
  function handleClose() {
    dispatch(resetPopUps())
  }
  async function handleSubmit() {
    if(!selected){
      toast.error("يرجى تحديد طريقة الدفع");
      return;
    }

    dispatch(openLoader("جاري الدفع"));

    const courseToken = token || currentCourseToken;
    const isTamara = selected === "Tamara" ? true : false;
    try {
      console.log(courseToken, userInfo.token);
      const result = await fetchWithCheck(
        `/api/reservations/payWithoutSaveData?tokenCourse=${courseToken}&TokenStudent=${userInfo.token}&IsTamar=${isTamara}`,
        {
          method: "POST",
        }
      );
      console.log(result);
      toast.success(result.message);
      if(isTamara){
        router.push(result.checkout_url);
      }else{
        router.push(result.redirect_url);
      }
    } catch (error) {
      toast.error(error.error);
      console.log(error);
    } finally {
      dispatch(closeLoader());
    }
  }
  
  return (
    <div className="payment-options min-w-80 md:w-[400px] flex flex-col gap-4 relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#FFFFFF"
        width="20px"
        height="20px"
        viewBox="0 0 256 256"
        className="absolute top-1 right-1 z-10 cursor-pointer"
        onClick={handleClose}
      >
        <path d="M202.82861,197.17188a3.99991,3.99991,0,1,1-5.65722,5.65624L128,133.65723,58.82861,202.82812a3.99991,3.99991,0,0,1-5.65722-5.65624L122.343,128,53.17139,58.82812a3.99991,3.99991,0,0,1,5.65722-5.65624L128,122.34277l69.17139-69.17089a3.99991,3.99991,0,0,1,5.65722,5.65624L133.657,128Z" />
      </svg>
      <div
        style={{
          background:
            "linear-gradient(83.79deg, #1B45B4 3.25%, #1C3899 96.85%)",
        }}
      >
        <h2 className="text-2xl font-bold text-white cairo-font md:text-3xl mb-2 p-4">
          وسلية الدفع
        </h2>
      </div>
      <div className="flex flex-col gap-4 p-4 pt-0">
        {/* <PaymentMethod image="/media/logos/payment/paypal.png" text="Paypal" /> */}

        <div className="flex flex-col gap-1">
          {allPaymentOptions.map((paymentOption, index) => (
            <PaymentMethod
              setSelected={setSelected}
              key={index}
              image={paymentOption.image}
              text={paymentOption.text}
            />
          ))}
        </div>

        <div className="input">
          <label htmlFor="" className="text-xs">
            كود الخصم
          </label>
          <input type="text" name="" required placeholder="اكتب كود الخصم" />
        </div>

        <button className="bg-abad-gold rounded-lg text-[#282828] font-medium p-3 drop-shadow-lg" onClick={handleSubmit}>
          شراء الان
        </button>
      </div>
    </div>
  );
};

export default SelectPaymentOption;
