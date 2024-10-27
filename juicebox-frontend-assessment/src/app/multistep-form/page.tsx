"use client";
import React from 'react';
import { useEffect, useRef } from 'react';
import "./form.scss";
import Navbar from '../components/navbar/Navbar';
import Lottie from 'lottie-react';
import JB2G from "../../assets/lottie/JB2G_Lottie.json";

const MultiStepFormPage = () => {
  // const hexagonAnimation = useRef(null);

  // useEffect(() => {
  //   lottie.loadAnimation({
  //     container: hexagonAnimation.current,
  //     renderer: 'svg',
  //     loop: true,
  //     autoplay: true,
  //     path: '/animation.json'
  //   });
  // }, []);

  return (
    <>
      <Navbar></Navbar>
      <section className='question-section'>
        <Lottie animationData={JB2G}/>
      </section>
      <h1 style={{ color:'white' }}>multi step form</h1>
    </>
  )
}

export default MultiStepFormPage
