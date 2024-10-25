import React from "react";
import "./home.scss";
import Link from "next/link";
import Navbar from "../components/navbar/Navbar";

const PublicHomepage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <h2 className="general">Homepage</h2>
      <Link href="/tutorial">rEDIRECT TO TUTORIALS</Link>
    </div>
  );
};

export default PublicHomepage;
