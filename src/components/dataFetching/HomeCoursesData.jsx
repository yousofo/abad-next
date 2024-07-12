"use client"
import React, { useEffect, useState } from "react";
import CourseRow from "../shared/tables/CourseRow";

const HomeCoursesData = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('/api/proxy')
      .then((response) => response.json())
      .then((data) => setData(data))
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
