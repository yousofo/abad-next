"use client";
import React from "react";
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

    >
      {(function () {
        let partnerCards = [];
        let imagesX2 = [...images,...images]
        for (let image of imagesX2) {
          partnerCards.push(
            <SwiperSlide key={image[1]+Math.floor(Math.random()*1000)}>
              <img className="mx-auto" src={`/media/${image}`} alt="" />
            </SwiperSlide>
          );
        }
        return  partnerCards;
      })()}
    </Swiper>
  );
};

export default PartnersSwiper;
