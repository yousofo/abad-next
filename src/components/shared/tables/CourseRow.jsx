"use client"
import { toggleEnlistInCourse } from "@/components/GlobalState/Features/popUpsSlice";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";

const CourseRow = () => {
  const dispatch = useDispatch()
  return (
    <tr
      data-type="programming"
      data-name="شهادة سيسكو المعتمدة CCNA 200-301"
      data-date="16 مارس 2024"
      data-time="من 06:00 م حتى 10:00 م"
      data-price="1500 ريال سعودي"
      className="shadow row rounded-lg"
    >
      <td className="course-name">
        <p>شهادة سيسكو المعتمدة CCNA 200-301</p>
        <div>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={12}
              height={12}
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z"
                fill="currentColor"
              />
            </svg>
            اونلاين
          </span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={12}
              height={12}
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z"
                fill="currentColor"
              />
            </svg>
            مدعومة من هدف
          </span>
        </div>
      </td>
      <td className="course-start-date">16 مارس 2024</td>
      <td>من 06:00 م حتى 10:00 م</td>
      <td>
        <div className="btns">
          <Link href="/courses/1">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={17}
                height={16}
                viewBox="0 0 17 16"
                fill="none"
              >
                <path
                  d="M10.8866 7.99995C10.8866 9.31995 9.81995 10.3866 8.49995 10.3866C7.17995 10.3866 6.11328 9.31995 6.11328 7.99995C6.11328 6.67995 7.17995 5.61328 8.49995 5.61328C9.81995 5.61328 10.8866 6.67995 10.8866 7.99995Z"
                  fill="#3F3E43"
                  stroke="#3F3E43"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.4999 13.5131C10.8532 13.5131 13.0466 12.1264 14.5732 9.7264C15.1732 8.7864 15.1732 7.2064 14.5732 6.2664C13.0466 3.8664 10.8532 2.47974 8.4999 2.47974C6.14656 2.47974 3.95323 3.8664 2.42656 6.2664C1.82656 7.2064 1.82656 8.7864 2.42656 9.7264C3.95323 12.1264 6.14656 13.5131 8.4999 13.5131Z"
                  stroke="#3F3E43"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              التفاصيل
            </button>
          </Link>
          <div onClick={()=>dispatch(toggleEnlistInCourse())}>
            <button>
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
            </button>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default CourseRow;
