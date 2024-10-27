"use client";
import Navbar from '@/app/components/navbar/Navbar'
import React from 'react'
import Lottie from "lottie-react";
import JB2G from "../../../assets/lottie/JB2G_Lottie.json";

const ResultPage = () => {
    const name = new URLSearchParams(window.location.search).get('name');
  return (
    <div className="formpage-layout">
      <Navbar></Navbar>
      <section className="result-text-section">
        <Lottie animationData={JB2G} className="lottie-animation" />
        <h5 className="result-text" style={{ color:'white' }}>
            Thanks, {name ? name : ""}! Now, it’s time to get a reality check. 
        </h5>
        <h5>
            This will take 2-3 minutes. 
        </h5>
      </section>
      
    </div>
  )
}

export default ResultPage
