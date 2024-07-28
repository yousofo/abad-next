"use client";
import React from "react";

const CourseCard = ({ index, data }) => {
  const isOnline =
    data.isOnline == "اونلاين" ||
    data.isOnline == "أون لاين" ||
    data.isOnline == "أونلاين";
  return (
    <figure data-type={data} className="course-card h-full flex flex-col">
      <div className="img flex-1 flex items-center justify-center">
        <img  src={data.imageUrl} alt="" />
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
              <span>
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
        <div className="course-attend">
          <span className={`${isOnline ? "online" : "in-person"}`}>
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.99996 8.33341C6.84091 8.33341 8.33329 6.84103 8.33329 5.00008C8.33329 3.15913 6.84091 1.66675 4.99996 1.66675C3.15901 1.66675 1.66663 3.15913 1.66663 5.00008C1.66663 6.84103 3.15901 8.33341 4.99996 8.33341Z"
                fill="currentColor"
              />
            </svg>
            {data.isOnline}
          </span>
          <span style={{ display: !data.hadaf ? "none" : "flex" }}>
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.99996 8.33341C6.84091 8.33341 8.33329 6.84103 8.33329 5.00008C8.33329 3.15913 6.84091 1.66675 4.99996 1.66675C3.15901 1.66675 1.66663 3.15913 1.66663 5.00008C1.66663 6.84103 3.15901 8.33341 4.99996 8.33341Z"
                fill="currentColor"
              />
            </svg>
            {data.hadaf}
          </span>
        </div>
        <p>
          هنا يكتب تفاصيل المحتوي للدورة هنا يكتب تفاصيل المحتوي للدورة هنا يكتب
          تفاصيل المحتوي للدورة
        </p>
        <div className="course-info">
          <p>البرمجة</p>
          <p>{data.price} ريال سعودي</p>
        </div>
      </figcaption>
    </figure>
  );
};

export default CourseCard;
