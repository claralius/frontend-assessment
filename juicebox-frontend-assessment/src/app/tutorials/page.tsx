"use client";
import React, { useRef } from "react";
import SwiperComponent from "../components/tutorial/SwiperComponent";
import Navbar from "../components/navbar/Navbar";
import "./tutorial.scss";
import Link from "next/link";
import ContinueButton from "../components/buttons/ContinueButton";
import { useRouter } from 'next/navigation'
import Swiper from "swiper";

const TutorialPage = () => {
  const swiperRef = useRef<Swiper | null>(null); // Ref for the Swiper instance
  const router = useRouter(); // Get router instance
  const handleNextSlide = () => {
    if (swiperRef.current) {
      const currentIndex = swiperRef.current.activeIndex; // Get current slide index
      const totalSlides = swiperRef.current.slides ? swiperRef.current.slides.length : 0; // Get total number of slides
      
      if (currentIndex < totalSlides - 1) {
        swiperRef.current.slideNext(); // Navigate to the next slide
      } else {
        router.push("/tutorials"); // Navigate to tutorials page if it's the last slide
      }
    }
  };
  return (
    <>
      <Navbar></Navbar>
      <section className="tutorial-mid-section">
        <SwiperComponent ref={swiperRef} />
      </section>
      <section className="bottom-section">
        <Link href="/tutorials">
          <ContinueButton
            placeholder={"Continue"}
            className="continue-btn"
            onClick={handleNextSlide}
          ></ContinueButton>
        </Link>
      </section>
    </>
  );
};

export default TutorialPage;
