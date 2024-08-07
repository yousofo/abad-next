"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { fetchWithCheck } from "@/helperFunctions/dataFetching";
import { useDispatch } from "react-redux";
import { toggleLoader } from "@/components/GlobalState/Features/popUpsSlice";
// import fetchCoursesWithTypes from "@/helperFunctions/fetchCoursesWithTypes";
async function fetchCheckCourse(courseToken) {
  try {
    const data = await fetchWithCheck(
      `/api/reservations/checkCourse?token=${courseToken}&timestamp=${new Date().getTime()}`
    );

    console.log(data);
    return data;
  } catch (e) {
    console.log(e);
  }
}
const NavListItem = ({ data, handleNavListItem, index }) => {
  return (
    <li className="w-full">
      <button
        className="w-full justify-between"
        onClick={(e) => handleNavListItem(e, data.courses)}
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

//3ab6540e-b68a-474a-8e3c-5218c3a6e280
const CoursesNav = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [current, setCurrent] = useState([]);
  const router = useRouter();
  console.log("courses nav");
  function handleNavListItem(e, categoryCourses) {
    e.stopPropagation();
    setCurrent(categoryCourses);
  }

  async function handleCourseClicked(courseToken) {
    dispatch(toggleLoader("جاري التنفيذ"));
    const result = await fetchCheckCourse(courseToken);
    if (result.courseExists) {
      router.push(`/courses/${result.courseToken}`);
    } else {
      router.push(`/courses/register/${result.courseToken}`);
    }
    dispatch(toggleLoader(""));
  }
  useEffect(() => {
    fetchWithCheck("/api/categories/coursesWithTypes", true, null, [])
      .then((e) => {
        setData(e);
        console.log(e);
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <div className="mini-nav">
      <ul className={`no-top-left courses-nav courses-nav-1`}>
        {data.map((course, i) => (
          <NavListItem
            key={i}
            handleNavListItem={(e) => handleNavListItem(e, course.courses)}
            data={course}
            index={i}
          />
        ))}
      </ul>

      <ul
        className={`no-top-right abad-drop-shadow courses-nav courses-nav-1 no-padding overflow-auto`}
      >
        {current.map((e, i) => (
          <li key={i} onClick={() => handleCourseClicked(e.courseToken)}>
            <button>{e.courseName}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CoursesNav;
