"use client";
import "./popUps.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import EnlistInCourse from "./EnlistInCourse";
import { reset } from "../GlobalState/Features/popUpsSlice";
import SelectPaymentOption from "./SelectPaymentOption";

const PopUps = () => {
  const isHidden = useSelector((e) => e.popUps.isHidden);
  const paymentOptionState = useSelector((e) => e.popUps.selectPaymentOptions);
  const enlistInCourseState = useSelector((e) => e.popUps.EnlistInCourse);

  const dispatch = useDispatch();
  function handleAuthClose() {
    dispatch(reset());
    console.log(isHidden);
  }
  return (
    <div
      onClick={handleAuthClose}
      className={`${isHidden ? "hidden" : "flex"} auth popups`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="auth-container bg-white py-7 px-6 md:py-12 md:px-10 rounded-2xl h-fit w-max max-w-[800px]"
      >
        {enlistInCourseState && <EnlistInCourse />}
        {!paymentOptionState && <SelectPaymentOption />}
      </div>
    </div>
  );
};

export default PopUps;
