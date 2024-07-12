"use client"
import React, { useEffect, useState } from "react";
import CourseRow from "../shared/tables/CourseRow";

const HomeCoursesData = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://myserverhost-001-site2.dtempurl.com/api/Home/latest", {
      // mode: 'no-cors'
    }).then(e=>e.json()).then(e=>setData(e));
  }, []);
  return (
    <>
      {
        data.map((e,i)=><CourseRow data={e} key={i} index={i} />)
      }
    </>
  );
};

export default HomeCoursesData;
