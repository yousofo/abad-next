import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import fetchCheckCourse from "@/helperFunctions/fetchCheckCourse";
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

//3ab6540e-b68a-474a-8e3c-5218c3a6e280
const CoursesNav = () => {
  const [active, setActive] = useState(true);
  const [data, setData] = useState([]);
  const [current, setCurrent] = useState([]);
  const isCoursesNav = useSelector((state) => state.coursesNav.active);
  const router = useRouter();
  console.log("courses nav");
  function handleNavListItem(e, categoryCourses) {
    e.stopPropagation();
    setCurrent(categoryCourses);
  }

  async function handleCourseClicked(courseToken) {
    const result = await fetchCheckCourse(courseToken);
    if (result.courseExists) {
      router.push(`/courses/${result.courseToken}`);
    } else {
      router.push(`/courses/register/${result.courseToken}`);
    }
  }
  useEffect(() => {
    fetchCoursesWithTypes()
      .then((e) => {
        setData(e);
        console.log(e);
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <div className="mini-nav">
      <ul
        className={`no-top-left courses-nav courses-nav-1`}
        // ${
        //   isCoursesNav ? "max-h-[300px]" : "max-h-0"
        // }
      >
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
        className={`no-top-right courses-nav courses-nav-1 no-padding overflow-auto`}
        style={{
          maxHeight:  active ? "280px" : "0",
        }}
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
