import React, { act, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const NavListItem = ({ handleNavListItem, index }) => {
  return (
    <li>
      <button onClick={(e) => handleNavListItem(e, index)}>
        <span>دورات سيسكو</span>
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
    <div>
      <ul
        className={`left-corner mini-nav courses-nav courses-nav-1  ${
          isCoursesNav ? "max-h-[300px]" : "max-h-0"
        }`}
      >
        <NavListItem handleNavListItem={handleNavListItem} index={0} />
        <NavListItem handleNavListItem={handleNavListItem} index={1} />
        <NavListItem handleNavListItem={handleNavListItem} index={2} />
        <NavListItem handleNavListItem={handleNavListItem} index={3} />
      </ul>

      <ul className={`right-corner mini-nav courses-nav `}>
        <li
          className={`no-padding`}
          style={{
            maxHeight:
              active && isCoursesNav && current % 2 == 0 ? "280px" : "0",
          }}
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
          className={`transition-all overflow-hidden no-padding`}
          style={{
            maxHeight:
              active && isCoursesNav && current % 2 == 0 ? "280px" : "0",
          }}
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
