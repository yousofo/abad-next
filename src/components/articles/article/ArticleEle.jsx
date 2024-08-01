"use client";
import React, { useEffect, useState } from "react";

const ArticleEle = ({ data }) => {
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
  const [autherImg, setAutherImg] = useState(
    "/media/placeholders/user-image.png"
  );
  const [articleImg, setArticleImg] = useState(
    "/media/placeholders/articles-placeholder.png"
  );
  //
  useEffect(() => {
    if (data.autherImage) {
      setAutherImg(data.autherImage);
    }
    if (data.articleImage) {
      setArticleImg(data.articleImage);
    }
  }, [data.articleImage, data.autherImage]);

  return (
    <article className="w-full mx-auto px-4 max-w-screen-lg flex flex-col gap-10">
      <div className="flex flex-col gap-3.5 sm:flex-row justify-between items-center">
        <div className="flex w-full max-w-[260px] gap-3 items-center">
          {/* user image */}
          <img
            className={` w-14 h-14 object-cover rounded-full`}
            src={autherImg}
            onError={(event) => {
              event.target.src = "/media/placeholders/user-image.png";
            }}
          />
          <div>
            <h2 className="text-[#151318] text-sm">{data?.author}</h2>
            <p className="text-[#8A8394] text-xs">{data?.authorJob}</p>
          </div>
        </div>
        <nav className="social-share-links w-full max-w-[260px] sm:w-fit justify-between flex sm:gap-3 items-center">
          <p className="text-[#151318] font-medium">شارك عبر:</p>
          <a
            target="_blank"
            href={`https://www.instagram.com/?url=${baseURL}/articles/${data.token}`}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.99884 6.14746C8.97687 6.14746 7.99676 6.55344 7.27412 7.27608C6.55148 7.99872 6.14551 8.97883 6.14551 10.0008C6.14551 11.0228 6.55148 12.0029 7.27412 12.7255C7.99676 13.4482 8.97687 13.8541 9.99884 13.8541C11.0208 13.8541 12.0009 13.4482 12.7236 12.7255C13.4462 12.0029 13.8522 11.0228 13.8522 10.0008C13.8522 8.97883 13.4462 7.99872 12.7236 7.27608C12.0009 6.55344 11.0208 6.14746 9.99884 6.14746ZM9.99884 12.5033C9.33492 12.5033 8.69818 12.2396 8.22872 11.7701C7.75925 11.3006 7.49551 10.6639 7.49551 9.99996C7.49551 9.33604 7.75925 8.6993 8.22872 8.22984C8.69818 7.76037 9.33492 7.49663 9.99884 7.49663C10.6628 7.49663 11.2995 7.76037 11.769 8.22984C12.2384 8.6993 12.5022 9.33604 12.5022 9.99996C12.5022 10.6639 12.2384 11.3006 11.769 11.7701C11.2995 12.2396 10.6628 12.5033 9.99884 12.5033Z"
                fill="#151318"
              />
              <path
                d="M14.0048 6.90409C14.5009 6.90409 14.9031 6.50189 14.9031 6.00575C14.9031 5.50962 14.5009 5.10742 14.0048 5.10742C13.5086 5.10742 13.1064 5.50962 13.1064 6.00575C13.1064 6.50189 13.5086 6.90409 14.0048 6.90409Z"
                fill="#151318"
              />
              <path
                d="M17.1111 5.09224C16.9182 4.59406 16.6234 4.14164 16.2456 3.76396C15.8677 3.38627 15.4152 3.09163 14.917 2.89891C14.3339 2.68004 13.7179 2.56169 13.0953 2.54891C12.2928 2.51391 12.0386 2.50391 10.0036 2.50391C7.96862 2.50391 7.70779 2.50391 6.91195 2.54891C6.28978 2.56104 5.67425 2.67941 5.09195 2.89891C4.59357 3.09141 4.14092 3.38596 3.76306 3.76368C3.38521 4.14139 3.09048 4.59393 2.89779 5.09224C2.67887 5.67525 2.5608 6.29127 2.54862 6.91391C2.51279 7.71557 2.50195 7.96974 2.50195 10.0056C2.50195 12.0406 2.50195 12.2997 2.54862 13.0972C2.56112 13.7206 2.67862 14.3356 2.89779 14.9197C3.09102 15.4179 3.38603 15.8702 3.76398 16.2479C4.14193 16.6255 4.59451 16.9202 5.09279 17.1131C5.67398 17.3407 6.28976 17.4676 6.91362 17.4881C7.71612 17.5231 7.97029 17.5339 10.0053 17.5339C12.0403 17.5339 12.3011 17.5339 13.097 17.4881C13.7195 17.4754 14.3355 17.3574 14.9186 17.1389C15.4167 16.9457 15.8691 16.6508 16.2469 16.2731C16.6247 15.8953 16.9196 15.4429 17.1128 14.9447C17.332 14.3614 17.4495 13.7464 17.462 13.1231C17.4978 12.3214 17.5086 12.0672 17.5086 10.0314C17.5086 7.99557 17.5086 7.73724 17.462 6.93974C17.4523 6.3083 17.3336 5.68328 17.1111 5.09224ZM16.0961 13.0356C16.0907 13.5158 16.0031 13.9916 15.837 14.4422C15.7118 14.7663 15.5202 15.0606 15.2745 15.3061C15.0288 15.5517 14.7344 15.7431 14.4103 15.8681C13.9646 16.0334 13.4939 16.1211 13.0186 16.1272C12.227 16.1639 12.0036 16.1731 9.97362 16.1731C7.94195 16.1731 7.73445 16.1731 6.92779 16.1272C6.45273 16.1214 5.98222 16.0338 5.53695 15.8681C5.21169 15.7439 4.91612 15.5528 4.66936 15.3072C4.4226 15.0616 4.23015 14.7669 4.10445 14.4422C3.94066 13.9964 3.85305 13.5263 3.84529 13.0514C3.80945 12.2597 3.80112 12.0364 3.80112 10.0064C3.80112 7.97557 3.80112 7.76807 3.84529 6.96057C3.85067 6.48059 3.93833 6.00509 4.10445 5.55474C4.35862 4.89724 4.87945 4.37974 5.53695 4.12807C5.98244 3.96319 6.45281 3.87554 6.92779 3.86891C7.72029 3.83307 7.94279 3.82307 9.97362 3.82307C12.0045 3.82307 12.2128 3.82307 13.0186 3.86891C13.494 3.87462 13.9648 3.9623 14.4103 4.12807C14.7344 4.2533 15.0287 4.44491 15.2744 4.6906C15.5201 4.93629 15.7117 5.23063 15.837 5.55474C16.0007 6.00053 16.0884 6.47071 16.0961 6.94557C16.132 7.73807 16.1411 7.96057 16.1411 9.99141C16.1411 12.0214 16.1411 12.2397 16.1053 13.0364H16.0961V13.0356Z"
                fill="#151318"
              />
            </svg>
          </a>
          <a
            target="_blank"
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${baseURL}/articles/${data.token}`}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.15243 5.99725C5.15943 5.99725 5.97577 5.18092 5.97577 4.17392C5.97577 3.16692 5.15943 2.35059 4.15243 2.35059C3.14544 2.35059 2.3291 3.16692 2.3291 4.17392C2.3291 5.18092 3.14544 5.99725 4.15243 5.99725Z"
                fill="#151318"
              />
              <path
                d="M7.69743 7.37891V17.4947H10.8383V12.4922C10.8383 11.1722 11.0866 9.89391 12.7233 9.89391C14.3374 9.89391 14.3574 11.4031 14.3574 12.5756V17.4956H17.4999V11.9481C17.4999 9.22307 16.9133 7.12891 13.7283 7.12891C12.1991 7.12891 11.1741 7.96807 10.7549 8.76224H10.7124V7.37891H7.69743ZM2.5791 7.37891H5.72493V17.4947H2.5791V7.37891Z"
                fill="#151318"
              />
            </svg>
          </a>
          <a
            target="_blank"
            href={`https://www.facebook.com/sharer/sharer.php?u=${baseURL}/articles/${data.token}`}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.1645 17.4974V10.6674H13.4687L13.8112 7.99323H11.1645V6.2899C11.1645 5.51823 11.3795 4.9899 12.487 4.9899H13.8904V2.60573C13.2076 2.53256 12.5212 2.49722 11.8345 2.4999C9.79785 2.4999 8.39952 3.74323 8.39952 6.02573V7.98823H6.11035V10.6624H8.40452V17.4974H11.1645Z"
                fill="#151318"
              />
            </svg>
          </a>
        </nav>
      </div>
      {/* <img className={`${articleImg && "hidden"} w-full`} src="/media/article-image.png" alt="" /> */}
      {/* onLoad={() => setArticleImg(true)} */}
      <img
        className={`w-full`}
        src={articleImg}
        onError={(event) => {
          event.target.src = "/media/placeholders/abad-placeholder.png";
        }}
        alt="article img"
      />
      <div
        className="flex flex-col gap-8 text-[#151318]"
        dangerouslySetInnerHTML={{ __html: `${data?.content}` }}
      />
    </article>
  );
};

export default ArticleEle;
