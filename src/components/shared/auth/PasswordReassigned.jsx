import { toggleSignIn } from "@/components/GlobalState/Features/authSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const PasswordReassigned = () => {
  const isPasswordReassigned = useSelector((state) => state.auth.newPassword);
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(toggleSignIn());
  }
  return (
    <div
      className={`${
        !isPasswordReassigned && "hidden"
      } flex flex-col items-center justify-center gap-6 sm:gap-10 `}
    >
      {/* success logo */}
      <div
        style={{
          background:
            "linear-gradient(83.79deg, #1B45B4 3.25%, #1C2792 96.85%)",
        }}
        className="rounded-full w-fit p-6"
      >
        <svg
          width="81"
          height="81"
          viewBox="0 0 81 81"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.5 40.2165L29.2165 61.9331L72.7263 18.5"
            stroke="white"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="flex flex-col gap-3 text-center">
        <h2 className="text-[11px] sm:text-3xl font-bold text-[#03133D]">
          تم تعيين كلمة السر بنجاح
        </h2>
        <p className="text-xs sm:text-lg text-[#68718B]">
          شكرا لثقتكم في اباد للتدريب
        </p>
      </div>
      {/* to sign up */}
      <button
        onClick={handleClick}
        className="py-3 sm:py-3.5 cursor-pointer px-14 rounded-2xl bg-[#FDB614] text-[#282828] font-medium w-full sm:w-fit"
      >
        دخول
      </button>
    </div>
  );
};

export default PasswordReassigned;
