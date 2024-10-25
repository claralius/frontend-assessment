import React from "react";
import BackButton from "../buttons/BackButton";
import Image from "next/image";
import JuiceboxLogo from "../../../assets/icons/juicebox-logo.png";
import RefreshButton from "../buttons/RefreshButton";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar-section">
      <BackButton></BackButton>
      <span className="company-logo-section">
        <Image src={JuiceboxLogo} alt={"juicebox-logo"} />
      </span>
      <RefreshButton></RefreshButton>
    </div>
  );
};

export default Navbar;
