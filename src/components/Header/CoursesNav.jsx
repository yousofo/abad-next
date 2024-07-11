import React, { act, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const NavListItem = ({ handleNavListItem, index }) => {
  return (
    <>
      <li className="relative">
        <button
          className="flex items-center gap-16"
          onClick={(e) => handleNavListItem(e, index)}
        >
          <span>دورات سيسكو</span>
          <AngleBottom fill={"#000000"} />
        </button>
      </li>
    </>
  );
};
const AngleBottom = ({ fill }) => (
  <svg
    width="9"
    height="6"
    viewBox="0 0 9 6"
    fill={fill}
    className={`h-fit pt-1`}
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

const CoursesNav = () => {
  const [active, setActive] = useState(false);
  const [current, setCurrent] = useState(0);
  const isCoursesNav = useSelector((state) => state.coursesNav.active);
  const dispatch = useDispatch();

  function handleNavListItem(e, i) {
    e.stopPropagation();
    setActive(true);
    setCurrent(i);
  }
  function handleCoursesNav() {
    dispatch(toggleCoursesNav());
  }
  return (
    <div className={`absolute text-sm right-0 -bottom-4 flex  h-fit translate-y-full`}>
      <ul
        className={`relative w-max h-fit left-corner overflow-hidden drop-shadow mini-nav courses-nav courses-nav-1 z-10  ${
          isCoursesNav ? "max-h-[300px]" : "max-h-0"
        } transition-all gap-1`}
      >
        <NavListItem handleNavListItem={handleNavListItem} index={0} />
        <NavListItem handleNavListItem={handleNavListItem} index={1} />
        <NavListItem handleNavListItem={handleNavListItem} index={2} />
        <NavListItem handleNavListItem={handleNavListItem} index={3} />
      </ul>

      <ul
        className={`  text-black right-corner relative h-fit w-max drop-shadow bg-white overflow-hidden flex flex-col  mini-nav courses-nav z-10`}
      >
        <li
          className={`${
            active && isCoursesNav && current % 2 == 0 ? "max-h-[280px]" : "max-h-0"
          } transition-all !border-0 overflow-hidden no-padding`}
        >
          <ul>
            <li>شهادة سيسكو المعتمدة CCNA 200-301</li>
            <li>شهادة سيسكو المعتمدة CCNA 200-301</li>
            <li>شهادة سيسكو المعتمدة CCNA 200-301</li>
            <li>شهادة سيسكو المعتمدة CCNA 200-301</li>
            <li>شهادة سيسكو المعتمدة CCNA 200-301</li>
          </ul>
        </li>
        <li
          className={`${
            active && isCoursesNav && current % 2 != 0 ? "max-h-[280px]" : "max-h-0"
          } transition-all overflow-hidden no-padding`}
        >
          <ul>
            <li>شهادة سيسكو المعتمدة CCNA 200-301</li>
            <li>شهادة سيسكو المعتمدة CCNA 200-301</li>
            <li>شهادة سيسكو المعتمدة CCNA 200-301</li>
            <li>شهادة سيسكو المعتمدة CCNA 200-301</li>
            <li>شهادة سيسكو المعتمدة CCNA 200-301</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default CoursesNav;
