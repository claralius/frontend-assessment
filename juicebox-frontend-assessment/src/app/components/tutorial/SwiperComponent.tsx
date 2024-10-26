"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
//modules
import { Pagination, Navigation } from "swiper/modules";
import "./SwiperComponent.scss";

const SwiperComponent = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      pagination={{ clickable: true }}
      scrollbar= {{ draggable:true }}
      className='swiper-container'
      loop = {true}
      modules= {[Pagination, Navigation]}
    >
        <SwiperSlide>
            <h1>jalan</h1>          
        </SwiperSlide>
        <SwiperSlide>
            <h1>jalan2</h1>
        </SwiperSlide>
        <SwiperSlide>
            <h1>jalan3</h1>
        </SwiperSlide>
        <SwiperSlide>
            <h1>jalan4</h1>
        </SwiperSlide>
        <SwiperSlide>
            <h1>jalan5</h1>
        </SwiperSlide>
    </Swiper>
  );
};

export default SwiperComponent;
