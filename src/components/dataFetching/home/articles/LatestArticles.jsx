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
      {data.map((article, i) => (
        <Link
          key={i}
          href={`/articles/${article?.token}`}
          className="h-full relative"
        >
          <article className="h-full">
            <div className="article-wrapper overflow-hidden h-full flex flex-col gap-3 rounded-xl">
              <div className="img ">
                <div className="relative">
                  <img
                    className={`h-full max-h-[188px] object-cover w-full`}
                    src={article?.image}
                    alt=""
                    onError={(event) => (event.target.src = "/media/Iamge.png")}
                  />
                  <span className="abosulute article-tag article-tag-yellow">
                    القصص
                  </span>
                </div>
              </div>
              <div className=" flex-1">
                <p>{article?.formattedDate}</p>
                <h3 className="max-h-20 overflow-auto">{article?.title}</h3>
              </div>
            </div>
          </article>
        </Link>
      ))}
    </div>
  );
};

export default LatestArticles;
