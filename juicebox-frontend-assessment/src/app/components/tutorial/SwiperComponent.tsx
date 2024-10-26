"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import type SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import "./SwiperComponent.scss";
import "../../../styles/modules/typography.scss";
import Image from "next/image";
import RoundedHexagon from "../../../assets/icons/rounded-hexagon.png";
import { useEffect, useImperativeHandle, useRef } from "react";
import React from "react";


const SwiperComponent = React.forwardRef((props, ref) => {
  const swiperRef = useRef<SwiperCore | null>(null);

  // Expose swiperRef methods to parent component
  useImperativeHandle(ref, () => swiperRef.current);
  return (
    <Swiper
      onSwiper={(swiper) => (swiperRef.current = swiper)}
      spaceBetween={10}
      slidesPerView={1}
      pagination={{ clickable: true }}
      navigation={false}
      scrollbar={{ draggable: true }}
      className="swiper-container"
      loop={false}
      modules={[Pagination, Navigation]}
    >
      <SwiperSlide className="first-slide">
        <Image
          className="hexagon-image"
          src={RoundedHexagon}
          alt="rounded-hexagon"
        />
        <h4 className="tutorial-text">
          <span className="tutorial-text-span">
            Professionals around the world shared how they feel abo
          </span>
          ut technology and I’ve listened. Now it’s your turn.
        </h4>
      </SwiperSlide>
      <SwiperSlide className="second-slide">
        <Image
          className="hexagon-image"
          src={RoundedHexagon}
          alt="rounded-hexagon"
        />
        <h4 className="tutorial-text">
          <span className="tutorial-text-span">
            I’ll ask you a handful of meaningful questions
          </span>
          &nbsp; and compare your responses with people in your industry. 
        </h4>
      </SwiperSlide>
      <SwiperSlide className="third-slide">
        <Image
          className="hexagon-image"
          src={RoundedHexagon}
          alt="rounded-hexagon"
        />
        <h4 className="tutorial-text">
          <span className="tutorial-text-span">
            You’ll get insights into current industry sentiments an
          </span>
          d a reality check about technology in a few minutes. Deal? Great!
        </h4>
      </SwiperSlide>
    </Swiper>
  );
});

export default SwiperComponent;
