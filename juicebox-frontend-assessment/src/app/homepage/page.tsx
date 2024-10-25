import React from 'react';
import "./home.scss";
import Link from 'next/link';

const PublicHomepage = () => {
  return (
    <div>
      <h1>Homepage</h1>
      <Link href="/tutorial">rEDIRECT TO TUTORIALS</Link>
    </div>
  )
}

export default PublicHomepage
