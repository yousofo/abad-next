"use client";
import "./accordion.css";
import React, { useState } from "react";

const Accordion = ({ title, data, children }) => {
  const [active, setActive] = useState(false);
  console.log(data);
  return (
    <div className={`accordion-item  ${active && "active"}`}>
      <button className="accordion-header" onClick={() => setActive(!active)}>
        <span className="text-lg font-medium text-[#252525]">{title}</span>
        <svg
          width={20}
          height={20}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.25 12.5L10 6.25L3.75 12.5"
            stroke="#1C1C1C"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div className="accordion-content">
        <div className="wrapper">
          <table className="w-full">
            <thead className="shadow-md abad-shadow">
              <tr>
                <th>موعد الدورة</th>
                <th>وقت الدورة</th>
                <th>الاجراءات</th>
              </tr>
            </thead>
            <tbody>
              {data?.openCourses.map((e, i) => (
                <tr className="shadow" key={i}>
                  <td>{data?.startDate}</td>
                  <td>{data?.formattedTimeStart}</td>
                  <td>
                    <a href="/courses/1" className="w-fit enlist">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={14}
                        height={11}
                        viewBox="0 0 14 11"
                        fill="none"
                      >
                        <path
                          d="M6.66667 7.33333H5.33333C4.23973 7.33292 3.16682 7.63143 2.23058 8.1966C1.29435 8.76178 0.530401 9.57211 0.0213343 10.54C0.00702532 10.3604 -9.15218e-05 10.1802 8.88408e-07 10C8.88408e-07 6.318 2.98467 3.33333 6.66667 3.33333V0L13.3333 5.33333L6.66667 10.6667V7.33333Z"
                          fill="#71A23F"
                        />
                      </svg>
                      تسجيل
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
