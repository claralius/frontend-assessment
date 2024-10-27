"use client";
import React, { useEffect, useRef, useState } from "react";
import SwiperComponent from "../components/tutorial/SwiperComponent";
import Navbar from "../components/navbar/Navbar";
import "./tutorial.scss";
import ContinueButton from "../components/buttons/ContinueButton";
import { useRouter } from 'next/navigation'
import Swiper from "swiper";

const TutorialPage = () => {
  const swiperRef = useRef<Swiper | null>(null);
  const router = useRouter();
  const[isLastSlide, setIsLastSlide] = useState(false);

  const handleNextSlide = () => {
    if (swiperRef.current) {
      const currentIndex = swiperRef.current.activeIndex; 
      const totalSlides = swiperRef.current.slides ? swiperRef.current.slides.length : 0; 
      
      if (currentIndex < totalSlides - 1) {
        swiperRef.current.slideNext();
      } else {
        router.push("/multistep-form"); 
      }
    }
  };

  const handleSlideChange = () =>{
    if(swiperRef.current){
      const currentIndex = swiperRef.current.activeIndex;
      const totalSlides = swiperRef.current.slides? swiperRef.current.slides.length : 0;
      console.log(currentIndex);
      setIsLastSlide(currentIndex === totalSlides - 1);
    }
  };

  return (
    <>
      <Navbar></Navbar>
      <section className="tutorial-mid-section">
        <SwiperComponent ref={swiperRef} onSlideChange={handleSlideChange} />
      </section>
      <section className="bottom-section">
        <ContinueButton
          placeholder={isLastSlide ? "Get Started" : "Continue"}
          className={isLastSlide? "get-started-btn" : "continue-btn"}
          onClick={handleNextSlide}
        ></ContinueButton>
      </section>
    </>
  );
};

export default TutorialPage;
