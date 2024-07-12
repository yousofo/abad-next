"use client";
import { toggleEnlistInCourse } from "@/components/GlobalState/Features/popUpsSlice";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";

const CourseCard = ({ index, data }) => {
  const dispatch = useDispatch();
  return (
    <figure data-type={data} className="course-card">
      <div className="img">
        <img src="/media/abad-course-card.png" alt="" />
      </div>
      <figcaption>
        <h4>{data.courseName}</h4>
        <div className="course-date noto">
          <div>
            <img src="/media/calendar.png" alt="" />
            <p>{data.startDate}</p>
          </div>
          <div>
            <img src="/media/combo sape.png" alt="" />
            <p>
              <span className="">
                <span>من</span>
                <span>
                  {data.formattedTimeStart.substring(1) +
                    " " +
                    data.formattedTimeStart[0]}
                </span>
                &nbsp;
                <span>حتي</span>
                {/* &nbsp; */}
                <span>
                  {data.formattedTimeEnd.substring(1) +
                    " " +
                    data.formattedTimeEnd[0]}
                </span>
              </span>
            </p>
          </div>
        </div>
        <p>
          هنا يكتب تفاصيل المحتوي للدورة هنا يكتب تفاصيل المحتوي للدورة هنا يكتب
          تفاصيل المحتوي للدورة
        </p>
        <div className="course-info">
          <p>البرمجة</p>
          <p>1500 ريال سعودي</p>
        </div>
      </figcaption>
    </figure>
  );
};

export default CourseCard;
