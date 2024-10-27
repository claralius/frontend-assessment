import React from "react";
import "./ContinueButton.scss";

type ContinueButtonProp = {
  placeholder: string;
  className?: string;
  onClick?: () => void;
};

const ContinueButton = ({ placeholder, className, onClick }: ContinueButtonProp) => {
  return (
    <div>
      <button className= {`continue-button ${className}`} onClick={onClick}>{placeholder}</button>
    </div>
  );
};

export default ContinueButton;
