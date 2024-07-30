"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const LatestArticles = () => {
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    fetch("/api/articles/getLatestArticles")
      .then((e) => e.json())
      .then((e) => setData(e));
  }, []);
  return (
    <div className="container lg:max-w-screen-lg mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-[1.5%] sm:pb-[6%] pt-10">
      {data.map((e, i) => (
        <Link href={`/articles/${e.token}`} key={i}>
          <article>
            <div className="article-wrapper">
              <div className="img relative">
                <img src="/media/Iamge.png" alt="" />
                <span className="abosulute article-tag article-tag-blue">
                  {e.coursesTypeCode}
                </span>
              </div>
              <div>
                <p>{e.formattedDate}</p>
                <h3>{e.test}</h3>
              </div>
            </div>
          </article>
        </Link>
      ))}
    </div>
  );
};

export default LatestArticles;
