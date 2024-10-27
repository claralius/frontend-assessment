"use client";
import React from "react";
import BackButton from "../buttons/BackButton";
import Image from "next/image";
import JuiceboxLogo from "../../../assets/icons/juicebox-logo.png";
import RefreshButton from "../buttons/RefreshButton";
import "./Navbar.scss";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="navbar-section">
      {pathname !== "/home" ? <BackButton /> : <div className="back-button-placeholder" />}
      <span className="company-logo-section">
        <Image src={JuiceboxLogo} alt={"juicebox-logo"} />
      </span>
      <div>
       <RefreshButton/>
      </div>
    </div>
  );
};

export default Navbar;
