"use client";
import React, { useEffect, useState } from "react";
import "./myCourse.css";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import RegisteredCourseAccordion from "@/components/shared/Accordion/RegisteredCourseAccordion";

async function fetchUserCourseDetails(token) {
  try {
    const request = await fetch(`/api/student/userCourseDetails/${token}`, {
      method: "GET",
      headers: {
        "Cache-Control":
          "no-store, no-cache, must-revalidate, proxy-revalidate",
        Pragma: "no-cache",
        Expires: "0",
        "Surrogate-Control": "no-store",
      },
    });
    const data = await request.json();
    console.log(data);
    return data;
  } catch (e) {
    console.log(e);
  }
}

const MyCourse = ({ params }) => {
  const isSignedIn = useSelector((store) => store.auth.isSignedIn);
  let router = useRouter();
  const [data, setData] = useState([]);
  // if (!isSignedIn) {
  //   router.replace("/");
  // }
  useEffect(() => {
    fetchUserCourseDetails(params.courseId)
      .then((e) => setData(e))
      .catch((e) => console.log(e));
  }, []);
  return (
    <main className="pb-10 sm:pb-24 relative">
      {/* HERO start  */}
      <div className="back-shape overflow-hidden w-full absolute top-0 left-0 -z-10 h-[600px] min-h-[600px] md:h-auto">
        <img
          className="w-full h-full md:h-auto object-cover min-h-[600px]"
          src="/media/BackgroundHero_rect.png"
          alt=""
        />
        <img
          className="md:w-36 w-20 absolute top-[8vh] md:top-[10vh] right-0"
          src="/media/hero-rectangle.png"
          alt=""
        />
      </div>
      {/* HERO end  */}
      {/* main content start */}
      <section className="my-course flex flex-col gap-4 mt-52  sm:gap-6 max-w-screen-lg mx-auto px-4">
        <div className="intro flex flex-col gap-6 p-6 shadow bg-white rounded-xl">
          <img
            className="w-fit mx-auto h-full max-h-[165px] md:max-h-[183px] object-cover rounded-md"
            src={data?.imageUrl}
            alt=""
          />
          <div className="flex flex-col gap-2 sm:flex-row items-center justify-between">
            <h2 className="font-medium text-lg md:text-xl">
              <bdi>{data.courseName}</bdi>
            </h2>
            <div className="font-bold btns text-center flex flex-col sm:flex-row gap-3">
              <a
                className="text-white py-3 px-7 md:py-4 md:px-8 rounded-full"
                style={{
                  background:
                    "linear-gradient(83.79deg, #1B45B4 3.25%, #1C2792 96.85%)",
                }}
                href={data.whatsAppLink}
              >
                قروب واتس آب الدورة
              </a>
              <a
                download={`course${
                  data.downloadLink?.split("/")[
                    data.downloadLink?.split("/").length - 1
                  ]
                }`}
                href={data.downloadLink}
                className="bg-[#FDB614] py-3 px-7 md:py-4 md:px-8 rounded-full"
              >
                تحميل الحزمة التدريبية
              </a>
            </div>
          </div>
          <div className="border border-b-[#E0E0E0]"></div>
          <div className="flex gap-4 flex-col">
            <h3 className="font-medium text-lg md:text-xl">وصف الدورة</h3>
            <p
              className="text-[#252525] leading-6 text-sm md:text-base"
              dangerouslySetInnerHTML={{ __html: data.description }}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-[#252525] text-sm md:text-2xl font-medium mb-2 mr-3 sm:mr-0">
            مواعيد الدورة
          </h2>
          <div className="flex flex-col gap-2">
            {data.sessions?.map((e, i) => (
              <RegisteredCourseAccordion key={i} title={e.weekName} data={e.sessions} />
            ))}
          </div>
        </div>
      </section>
      {/* main content end */}
    </main>
  );
};

export default MyCourse;
