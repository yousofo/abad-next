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
  ];
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
        let imagesX2 = [...images, ...images];

        imagesX2.forEach((e, i) =>
          partnerCards.push(
            <SwiperSlide key={"partnerCard-" + i}>
              <img style={{ margin: "0 auto" }} src={`/media/${e}`} alt="" />
            </SwiperSlide>
          )
        );

        return partnerCards;
      })()}
    </Swiper>
  );
};

export default PartnersSwiper;
