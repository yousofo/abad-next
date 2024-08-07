"use client";
import React, { useEffect, useRef, useState } from "react";
import "./newPassword.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleNewPassword } from "@/components/GlobalState/Features/authSlice";
import { useRouter } from "next/navigation";
import Hero from "@/components/shared/hero/Hero";
async function fetchNewPassword(data) {
  try {
    const result = await fetch("/api/newPassword", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const jsonResult = await result.json();
    console.log("jsonResult");
    console.log(jsonResult);
    return jsonResult;
  } catch (error) {
    console.log(error);
    return error;
  }
}

const NewPassword = () => {
  let password = useRef(null);
  let confirmPassword = useRef(null);
  const isSignedIn = useSelector((store) => store.auth.isSignedIn);
  const router = useRouter();
  const [token, setToken] = useState(null);
  // if(isSignedIn) router.push("/")

  const dispatch = useDispatch();

  async function handleSubmit(e) {
    e.preventDefault();
    if (password.current.value == confirmPassword.current.value) {
      try {
        const result = await fetchNewPassword({
          token: token,
          password: password.current.value,
        });
        console.log("result from new password");
        console.log(result);
        dispatch(toggleNewPassword());
      } catch (e) {}
    } else {
      console.log("failed");
    }
  }

  useEffect(() => {
    if (isSignedIn) router.replace("/");

    const url = new URL(window.location.href);
    const tokenFromUrl = url.pathname.split("/").pop();
    setToken(tokenFromUrl);
  }, []);
  return (
    <main className="pb-10">
      {/* HERO start  */}
      <Hero>
        <h2 className="text-2xl font-medium md:text-4xl lg:text-5xl xl:text-6xl sm:max-w-fit">
          <span className="text-abad-gold whitespace-nowrap">تعيين</span>
          &nbsp;
          <span>كلمة سر جديدة</span>
        </h2>
      </Hero>
      {/* HERO end  */}
      {/* main content start */}
      <form
        onSubmit={handleSubmit}
        className="newPassword w-full mx-auto px-4 max-w-screen-lg flex flex-wrap gap-4  "
        id=""
      >
        <div>
          <label htmlFor="newPasswordPass">الرقم السري الجديد*</label>
          <input
            type="password"
            ref={password}
            name=""
            placeholder="اكتب الرقم السري الجديد"
            id="newPasswordPass"
          />
        </div>
        <div>
          <label htmlFor="newPasswordRePass">إعادة الرقم السري الجديد*</label>
          <input
            type="password"
            ref={confirmPassword}
            name=""
            placeholder="اكتب الرقم السري الجديد"
            id="newPasswordRePass"
          />
        </div>
        <input
          type="submit"
          defaultValue="ارسال"
          className="py-3 cursor-pointer px-6 mt-4 md:mt-8 rounded-2xl bg-[#FDB614] text-[#282828] font-medium w-fit ms-auto"
        />
      </form>
      {/* main content end */}
    </main>
  );
};

export default NewPassword;
