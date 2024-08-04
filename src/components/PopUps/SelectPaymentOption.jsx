import React from "react";

const SelectPaymentOption = () => {
  return (
    <div className="payment-options w-fit flex flex-col gap-10">
      <div>
        <h2 className="text-xl">اختر طريقة الدفع</h2>
      </div>
      <div className="flex gap-4">
        <button className="abad-shadow">
          <img src="/media/logos/paypal.png" alt="" />
        </button>
        <button className="abad-shadow">
          <img src="/media/logos/tamara.png" alt="" />
        </button>
      </div>
    </div>
  );
};

export default SelectPaymentOption;
