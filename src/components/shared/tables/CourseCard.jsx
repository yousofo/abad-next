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
        <div className="course-date">
          <div>
            <img src="/media/calendar.png" alt="" />
            <p>{data.courseStartData}</p>
          </div>
          <div>
            <img src="/media/combo sape.png" alt="" />
            <p>{data.courseTime}</p>
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
