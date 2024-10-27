"use client";
import Navbar from '@/app/components/navbar/Navbar'
import React, { useEffect, useState } from 'react'
import Lottie from "lottie-react";
import JB2G from "../../../assets/lottie/JB2G_Lottie.json";
import "./result.scss";
import ContinueButton from '@/app/components/buttons/ContinueButton';

const ResultPage = () => {
    const [name, setName] = useState<string | null>(null);

    useEffect(()=>{
        const nameParam = new URLSearchParams(window.location.search).get('name');
        setName(nameParam);
    },[]);
  return (
    <div className="resultpage-layout">
      <Navbar></Navbar>
      <section className="result-text-section">
        <Lottie animationData={JB2G} className="lottie-animation" />
        <h5 className="result-text">
            Thanks, {name ? name : ""}! Now, it’s time to get a reality check. 
        </h5>
        <h5 className='result-text'>
            This will take 2-3 minutes. 
        </h5>
      </section>
      <section className='result-bottom-section'>
        <ContinueButton placeholder={'Continue'} className='result-continue-btn'></ContinueButton>
      </section>
      
    </div>
  )
}

export default ResultPage
