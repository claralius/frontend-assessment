import React from "react";
import "./ContinueButton.scss";

type ContinueButtonProp = {
  placeholder: string;
  className?: string;
};

const ContinueButton = ({ placeholder, className }: ContinueButtonProp) => {
  return (
    <div>
      <button className={`continue-button ${className}`}>{placeholder}</button>
    </div>
  );
};

export default ContinueButton;
