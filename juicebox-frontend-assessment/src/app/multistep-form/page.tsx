"use client";
import React, { useState } from "react";
import "./form.scss";
import Navbar from "../components/navbar/Navbar";
import Lottie from "lottie-react";
import JB2G from "../../assets/lottie/JB2G_Lottie.json";
import InputField from "../components/form/InputField";
import { useRouter } from "next/navigation";

const SendButtonSVG = () => (
  <svg width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.5">
      <rect y="0.5" width="31" height="31" rx="15.5" fill="currentColor" fillOpacity="0.6" />
      <path d="M10.75 14.5L16 9.25M16 9.25L21.25 14.5M16 9.25V22.75" stroke="currentColor" />
    </g>
  </svg>
);

const MultiStepFormPage = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const nameRegex = /^[^\s][A-Za-z\s]*$/;

    if(step == 1){
      setName(value);
      console.log("name", value);
      setIsValid(nameRegex.test(value) || value === '');
    }else if(step == 2){
      setEmail(value);
      console.log("email", value);
      setIsValid(value.includes('@'));
    }
  };

  const handleNextStep = (e: React.MouseEvent<HTMLFormElement>) =>{
    e.preventDefault();
    if (step === 1 && isValid) {
      setStep(2); 
    }else if(step === 2 && isValid){
      router.push(`/multistep-form/result?name=${encodeURIComponent(name)}`);
    }
  }

  return (
    <div className="formpage-layout">
      <Navbar></Navbar>
      <section className="question-section">
        <Lottie animationData={JB2G} className="lottie-animation" />
        <h5 className="form-question">
        {step === 1
            ? "Let&apos;s start with the basics. Type in your first name."
            : "How should we contact you? Type in your email address."}
        </h5>
      </section>
      <section className="form-section">
        <form onSubmit={handleNextStep} action="" className={`input-form ${!isValid ? 'invalid' : ''}`}>
          { step === 1?(
            <InputField
              type="text"
              name="name"
              placeholder="First name"
              value={name}
              onChange={handleInputChange}
              isValid={isValid}
            />
          ):(
            <InputField
              type="email"
              name="email"
              placeholder="Email address"
              value={email}
              onChange={handleInputChange}
              isValid={isValid}
            />
          )}
          <button type="submit">
            <div className={`send-button ${name ? 'active' : ''}`} style={{ color: name ? 'white' : 'gray' }}>
              <SendButtonSVG />
            </div>
          </button>
        </form>
        {!isValid && <p className='error-message'>Invalid input. Only letters are allowed and doesn&apos;t start with whitespace.</p>}
      </section>
    </div>
  );
};

export default MultiStepFormPage;
