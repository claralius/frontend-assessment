import React from 'react';
import "./home.scss";
import Link from 'next/link';
import Navbar from '../components/Navbar';

const PublicHomepage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <h1 className='general'>Homepage</h1>
      <Link href="/tutorial">rEDIRECT TO TUTORIALS</Link>
    </div>
  )
}

export default PublicHomepage
