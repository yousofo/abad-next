import React from "react";

const PaymentMethod = ({ image, text }) => {
  return (
    <button className="flex gap-3 items-center border hover:border-abad-gold group drop-shadow-sm px-4 py-3 rounded-sm">
      <div className="w-20 h-12 p-1 rounded-sm group-hover:border-abad-gold border">
        <img
          src={image}
          className="w-full h-full object-cover"
          alt=""
        />
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
        <PaymentMethod
          image="/media/logos/payment/paypal.png"
          text="Apple Pay"
        />
        <PaymentMethod image="/media/logos/payment/tamara.png" text="Tamara" />
        <PaymentMethod
          image="/media/logos/payment/master-card.png"
          text="Mastercard"
        />
      </div>
    </div>
  );
};

export default SelectPaymentOption;