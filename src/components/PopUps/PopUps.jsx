"use client";
import "./popUps.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {  resetPopUps } from "../GlobalState/Features/popUpsSlice";
import EnlistInCourse from "./enlist-in-course.jsx/EnlistInCourse";
import SelectPaymentOption from "./select-payment-options/SelectPaymentOption";
import PaymentConfirmation from "./payment-confirmation/PaymentConfirmation";

const PopUps = () => {
  const dispatch = useDispatch();
  const isHidden = useSelector((e) => e.popUps.isHidden);
  const paymentOptionState = useSelector((e) => e.popUps.selectPaymentOptions);
  const enlistInCourseState = useSelector((e) => e.popUps.EnlistInCourse);
  const paymentConfirmationState = useSelector((e) => e.popUps.paymentConfirmation);

  function handleAuthClose() {
    dispatch(resetPopUps());
  }
  return (
    <div
      onClick={handleAuthClose}
      className={`${isHidden ? "hidden" : "flex"} auth popups z-[199]`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`${paymentOptionState?"!rounded-sm !p-0":"!rounded-2xl py-7 px-6 md:py-12 md:px-10"} auth-container bg-white h-fit w-max max-w-[800px]`}
      >
        {enlistInCourseState && <EnlistInCourse />}
        {paymentOptionState && <SelectPaymentOption />}
        {paymentConfirmationState.active && <PaymentConfirmation />}
      </div>
    </div>
  );
};

export default PopUps;
