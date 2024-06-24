"use client";
import React from "react";
import ReviewCard from "../cards/ReviewCard";
//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const PartnersSwiper = () => {
  const images = [
    "gitlab-logo-svg-150px.png",
    "lattice-logo-svg-150px.png",
    "sendgrid-logo-svg-150px.png",
    "pendo-logo-svg-150px.png",
    "pingdom-dark.png",
  ]
  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView={1}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
      loop
      autoplay={{ delay: 1000 }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {(function () {
        let partnerCards = [];
        for (let image of images) {
          partnerCards.push(
            <SwiperSlide>
              <img className="mx-auto" src={`/media/${image}`} alt="" />
            </SwiperSlide>
          );
        }
        return [...partnerCards,...partnerCards];
      })()}
    </Swiper>
  );
};

export default PartnersSwiper;
