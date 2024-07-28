import Link from "next/link";
import React, { act, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const NavListItem = ({ data, handleNavListItem, index }) => {
  return (
    <li className="w-full">
      <button
        className="w-full justify-between"
        onClick={(e) => handleNavListItem(e, data.courses)}
        // onMouseEnter={(e) => handleNavListItem(e, data.courses)}
      >
        <span>{data.typeName}</span>
        <AngleBottom fill={"#000000"} />
      </button>
    </li>
  );
};
const AngleBottom = ({ fill }) => (
  <svg
    width="9"
    height="6"
    viewBox="0 0 9 6"
    fill={fill}
    style={{ height: "fit-content", borderTop: "0.25rem" }}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 1L4.5 4L8 1"
      stroke="fill"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

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
      },
    });
    const data = await request.json();
    console.log(data);
    return data;
  } catch (e) {
    console.log(e);
  }
}

const CoursesNav = () => {
  const [active, setActive] = useState(true);
  const [data, setData] = useState([]);
  const [current, setCurrent] = useState([]);
  const isCoursesNav = useSelector((state) => state.coursesNav.active);
  const dispatch = useDispatch();

  function handleNavListItem(e, cur) {
    e.stopPropagation();
    setCurrent(cur);
  }
  function handleCoursesNav() {
    dispatch(toggleCoursesNav());
  }
  useEffect(() => {
    fetchCoursesWithTypes()
      .then((e) => setData(e))
      .catch((e) => console.log(e));
  }, []);
  return (
    <div>
      <ul
        className={`left-corner mini-nav courses-nav courses-nav-1  ${
          isCoursesNav ? "max-h-[300px]" : "max-h-0"
        }`}
      >
        {data.map((e, i) => (
          <NavListItem
            key={i}
            handleNavListItem={handleNavListItem}
            data={e}
            index={i}
          />
        ))}
      </ul>

      <ul
        className={`right-corner mini-nav courses-nav `}
        style={{
          maxHeight: isCoursesNav && active ? "280px" : "0",
        }}
      >
        <li
          className={`no-padding`}
          style={{
            maxHeight:
              active && isCoursesNav ? "280px" : "0",
          }}
        >
          <ul>
            {current.map((e, i) => (
              <li key={i}><Link href={`/courses/${e.courseToken}`}>{e.courseName}</Link></li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default CoursesNav;
