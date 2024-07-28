"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

async function fetchArticles() {
  try {
    const result = await fetch("/api/articles/getArticles", {
      method: "GET",
      headers: {
        "Cache-Control":
          "no-store, no-cache, must-revalidate, proxy-revalidate",
        Pragma: "no-cache",
        Expires: "0",
        "Surrogate-Control": "no-store",
      },
    });
    const data = await result.json();
    return data;
  } catch (e) {
    console.log("fetch e");
    console.log(e);
  }
}

const Article = ({ data }) => {
  const [image, setImage] = useState(true);
  console.log("article");
  return (
    <Link href={`/articles/${data?.token}`} className="h-full">
      <article className="h-full">
        <div className="article-wrapper overflow-hidden h-full flex flex-col gap-3 rounded-xl">
          <div className="img relative flex-1">
            <img
              className={`${
                !image && "hidden"
              } h-full max-h-[188px] object-cover w-full`}
              src="/media/Iamge.png"
              alt=""
            />
            <img
              className={`${
                image && "hidden"
              } h-full max-h-[188px] object-cover w-full`}
              src={data?.image}
              alt=""
              onLoad={() => setImage(false)}
            />
            <span className="abosulute article-tag article-tag-yellow">
              القصص
            </span>
          </div>
          <div>
            <p>{data?.formattedDate}</p>
            <h3>{data?.title}</h3>
          </div>
        </div>
      </article>
    </Link>
  );
};

const ArticlesComp = () => {
  const [data, setData] = useState([]);
  console.log("article com");
  useEffect(() => {
    fetchArticles()
      .then((e) => setData(e))
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      {data.map((e,i) => (
        <Article key={i} data={e} />
      ))}
    </>
  );
};

export default ArticlesComp;
