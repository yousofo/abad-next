"use client";
import React, { useState } from "react";

const MiniNavItem = () => {
  const [innerList, setInnerList] = useState(false);
  function handleClick(e) {
    e.stopPropagation();
    setInnerList(!innerList);
  }

  return (
    <li className={`flex flex-col text-sm ${innerList ? " gap-2" : "gap-0"} w-full`} onClick={handleClick}>
      <div className={`flex justify-between w-full gap-2 `}>
        <span className="w-fit">دورات سيسكو</span>
        <svg
          width="6"
          height="9"
          viewBox="0 0 6 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`angle-down  ${innerList ? "active" : ""}`}
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
        className={`${
          innerList ? "max-h-56" : "max-h-0"
        } overflow-hidden transition-all font-light flex flex-col gap-2`}
      >
        <li>شهادة سيسكو المعتمدة CCNA 200-301</li>
        <li>شهادة سيسكو المعتمدة CCNA 200-301</li>
      </ul>
    </li>
  );
};

const MiniNav = () => {
  const [outerList, setOuterList] = useState(false);
  return (
    <button
      onClick={() => setOuterList(!outerList)}
      className={`flex flex-col  w-full ${outerList ? "gap-4" : "gap-0"}`}
    >
      <div className="flex justify-between items-center  w-full">
        <span>الدورات</span>
        <svg
          width="6"
          height="9"
          viewBox="0 0 6 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`angle-down  ${outerList ? "active" : ""}`}
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
        className={`${
          outerList ? "max-h-56" : "max-h-0"
        } overflow-hidden transition-all flex flex-col gap-2 w-full`}
      >
        <MiniNavItem />
        <MiniNavItem />
        <MiniNavItem />
      </ul>
    </button>
  );
};

export default MiniNav;
