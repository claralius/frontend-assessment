import React from "react";
import "./home.scss";
import '../../styles/modules/typography.scss';
import Link from "next/link";
import Image from "next/image";
import RoundedHexagon from "../../assets/icons/rounded-hexagon.png";
import Navbar from "../components/navbar/Navbar";

const PublicHomepage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <section className="mid-section">
        <div className="mid-text-left">
          <p className="caption-text">WA businesses feel confident about future growth </p>
          <p className="caption-text">Sales measure true success</p>
          <p className="caption-text">The primary barrier to digital transformation is financial investment</p>
        </div>
        <Image className="hexagon-image" src={RoundedHexagon} alt="rounded-hexagon" />
        <div className="mid-text-right">
          <p className="caption-text">AI cant replace creativity</p>
          <p className="caption-text">Human connection drives WA business</p>
        </div>
      </section>
      <section className="text-section">
        <h2>Compare your thoughts on technology with current industry opinions.</h2>
      </section>  
      <Link href="/tutorial" style={{ color: "white" }}>
        rEDIRECT TO TUTORIALS
      </Link>
    </div>
  );
};

export default PublicHomepage;
