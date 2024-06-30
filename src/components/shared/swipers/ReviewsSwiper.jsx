"use client";
import React from "react";
import ReviewCard from "../cards/ReviewCard";
//swiper
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

const ReviewsSwiper = () => {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      slidesPerView={1}
      navigation={{
        nextEl: ".swiper1-next",
        prevEl: ".swiper1-prev",
      }}
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
        let reviewCards = [];
        for (let i = 0; i < 6; i++) {
          reviewCards.push(
            <SwiperSlide key={"reviewCard-"+i}>
              <ReviewCard />
            </SwiperSlide>
          );
        }
        return reviewCards;
      })()}
    </Swiper>
  );
};

export default ReviewsSwiper;
