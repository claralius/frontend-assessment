"use client";
import React, { useState } from "react";
import "./form.scss";
import Navbar from "../components/navbar/Navbar";
import Lottie from "lottie-react";
import JB2G from "../../assets/lottie/JB2G_Lottie.json";

const SendButtonSVG = () => (
  <svg width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.5">
      <rect y="0.5" width="31" height="31" rx="15.5" fill="currentColor" fillOpacity="0.6" />
      <path d="M10.75 14.5L16 9.25M16 9.25L21.25 14.5M16 9.25V22.75" stroke="currentColor" />
    </g>
  </svg>
);

const MultiStepFormPage = () => {
  const [name, setName] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleInputChange = (e) => {
    const { value } = e.target;
    const nameRegex = /^[A-Za-z]+$/;

    setName(value);
    setIsValid(nameRegex.test(value) || value === '');
  };

  return (
    <div className="formpage-layout">
      <Navbar></Navbar>
      <section className="question-section">
        <Lottie animationData={JB2G} className="lottie-animation" />
        <h5 className="form-question">
          Let's start with the basics. Type in your first name.
        </h5>
      </section>
      <section className="form-section">
        <form action="" className={`input-form ${!isValid ? 'invalid' : ''}`}>
          <input
            type="text"
            name="name"
            placeholder="First name"
            value={name}
            onChange={handleInputChange}
          />
          <div className={`send-button ${name ? 'active' : ''}`} style={{ color: name ? 'white' : 'gray' }}>
            <SendButtonSVG />
          </div>
        </form>
        {!isValid && <p className='error-message'>Invalid input. Only letters are allowed.</p>}
      </section>
    </div>
  );
};

export default MultiStepFormPage;
