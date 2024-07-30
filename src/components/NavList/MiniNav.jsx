"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

async function fetchCoursesWithTypes() {
  try {
    const request = await fetch("/api/categories/coursesWithTypes", {
      method: "GET",
      headers: {
        "Cache-Control":
          "no-store, no-cache, must-revalidate, proxy-revalidate",
        Pragma: "no-cache",
        Expires: "0",
        "Surrogate-Control": "no-store",
        "Content-Type": "application/json",
      },
    });
    const data = await request.json();
    console.log(data);
    return data;
  } catch (e) {
    console.log(e);
  }
}

//helper component
const MiniNavItem = ({ data }) => {
  const [innerList, setInnerList] = useState(false);
  function handleClick(e) {
    e.stopPropagation();
    setInnerList(!innerList);
  }

  return (
    <li
      suppressHydrationWarning={true}
      className={`flex flex-col text-sm ${
        innerList ? " gap-2" : "gap-0"
      } w-full`}
      onClick={handleClick}
    >
      <div className={`flex justify-between w-full gap-2 `}>
        <span className="w-fit">{data.typeName}</span>
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
          innerList ? "max-h-60" : "max-h-0"
        } overflow-hidden transition-all font-light flex flex-col gap-2`}
      >
        {data.courses.map((e, i) => (
          <li key={i}>
            <Link href={`/courses/${e.courseToken}`}>{e.courseName}</Link>
          </li>
        ))}
      </ul>
    </li>
  );
};

//main component
const MiniNav = () => {
  const [outerList, setOuterList] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchCoursesWithTypes()
      .then((e) => setData(e))
      .catch((e) => console.log(e));
  }, []);
  return (
    <button
      suppressHydrationWarning={true}
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
          outerList ? "max-h-96" : "max-h-0"
        } overflow-hidden transition-all flex flex-col gap-2 w-full`}
      >
        {data.map((e, i) => (
          <MiniNavItem data={e} key={i} />
        ))}
      </ul>
    </button>
  );
};

export default MiniNav;
