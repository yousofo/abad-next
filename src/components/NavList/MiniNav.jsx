"use client";
import React, { useState } from "react";

const MiniNavItem = () => {
  const [innerList, setInnerList] = useState(false);

  return (
    <li>
      <span>ttttttt</span>
      <ul>
        <li>ssssss</li>
        <li>ssssss</li>
      </ul>
    </li>
  );
};

const MiniNav = () => {
  const [outerList, setOuterList] = useState(false);
  return (
    <button onClick={()=>setOuterList(!outerList)} className="flex justify-between items-center w-full">
      <span>الدورات</span>
      <svg
        width="6"
        height="9"
        viewBox="0 0 6 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 1L2 4.5L5 8"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <ul className={`${outerList? "max-h-56":"max-h-0"} overflow-hidden transition-all`}>
        <MiniNavItem />
        <MiniNavItem />
        <MiniNavItem />
      </ul>
    </button>
  );
};

export default MiniNav;
