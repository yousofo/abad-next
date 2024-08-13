"use client";
import React, { useRef, useState } from "react";

const VideoSection = ({
  titleVideo,
  lVideoURL = "/media/Blank Video Placeholder.mp4",
}) => {
  const videoRef = useRef(null);
  const [videoState, setVideoState] = useState(false);
  const devURL = "/media/placeholders/Blank-Video-Placeholder.mp4";
  return (
    <>
      <img
        src="/media/Trust company & Play section.png"
        className="absolute min-h-96 left-0 hidden md:block top-0 w-full object-cover -z-10"
        alt=""
      />
      <img
        src="/media/Trust company & Play section-small.png"
        className="absolute min-h-96 left-0 top-0 block md:hidden w-full object-cover -z-10"
        alt=""
      />
      <div className="container flex flex-col items-center gap-14 mx-auto">
        <h2 className="font-bold max-w-[220px] text-2xl md:text-4xl text-center text-white md:max-w-2xl leading-normal">
          {titleVideo || (
            <span>
              اعرف اكثر عن
              <span className="text-abad-gold">اباد للتدريب</span> عن طريق
              مشاهدتك لهذا الفيديو!
            </span>
          )}
        </h2>
        <div className="video relative w-full max-w-[792px]">
          <video
            ref={videoRef}
            onPlay={() => {
              setVideoState(true);
            }}
            onPause={() => {
              setVideoState(false);
            }}
            onEnded={() => {
              setVideoState(false);
            }}
            id="homeVideo"
            poster="/media/arab-work-laptop.png"
            className="w-full "
            loop
          >
            <source src={devURL} type="video/mp4" />
            <source src="movie.ogg" type="video/ogg" />
            Your browser does not support the video tag.
          </video>
          <img
            id="playHomeVideo"
            onClick={() => videoRef.current.play()}
            src="/media/media Icon.png"
            className={`${
              videoState && "hidden"
            } absolute w-8 md:w-fit cursor-pointer left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default VideoSection;
