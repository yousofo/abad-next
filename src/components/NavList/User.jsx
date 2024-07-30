import Link from "next/link";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reset as toggleResetNavList } from "../GlobalState/Features/navListSlice";

const User = () => {
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();
  const userInfo = useSelector((store) => store.userData.info);

  function handleCloseNavList() {
    dispatch(toggleResetNavList());
  }
  return (
    <div
      suppressHydrationWarning={true}
      className={`  items-center ${
        active ? "gap-2" : ""
      } relative z-20  cursor-pointer flex flex-col`}
      onClick={() => setActive(!active)}
    >
      <div className="flex items-center w-full gap-2">
        <img
          src="/media/placeholders/user-image.png"
          className="max-w-12"
          alt=""
        />
        <p>{userInfo.arabicName}</p>
        <svg
          width="6"
          height="9"
          viewBox="0 0 6 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`angle-down ms-auto ${active ? "active" : ""}`}
        >
          <path
            d="M5 1L2 4.5L5 8"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <ul
        className={`mini-nav [&>li>a]:flex [&>li>a]:py-2 [&>li>a]:text-xs [&>li>a]:items-center [&>li>a]:gap-1 [&>li>a]:w-full w-full overflow-hidden z-10 ${
          active ? " max-h-40 " : " max-h-0 "
        } transition-all`}
      >
        <li>
          <Link onClick={handleCloseNavList} href="/my-courses">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse
                cx="12"
                cy="17.5"
                rx="7"
                ry="3.5"
                stroke="#28303F"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <circle
                cx="12"
                cy="7"
                r="4"
                stroke="#28303F"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
            <span>دوراتي</span>
          </Link>
        </li>
        <li>
          <Link onClick={handleCloseNavList} href="/profile">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse
                cx="12"
                cy="17.5"
                rx="7"
                ry="3.5"
                stroke="#28303F"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <circle
                cx="12"
                cy="7"
                r="4"
                stroke="#28303F"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
            <span>الملف الشخصي</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default User;
