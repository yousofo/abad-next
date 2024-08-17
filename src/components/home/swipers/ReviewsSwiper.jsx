"use client";
import React, { useEffect, useState } from "react";
import ReviewCard from "../../shared/cards/ReviewCard";
//swiper
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { fetchComments } from "@/helperFunctions/dataFetching";

const ReviewsSwiper = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchComments().then((data) => setComments(data));
  }, []);
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
      autoplay={{ delay: 2000 }}
    >
      {comments?.map((comment, i) => (
        <SwiperSlide key={"reviewCard-" + i}>
          <ReviewCard data={comment} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ReviewsSwiper;
