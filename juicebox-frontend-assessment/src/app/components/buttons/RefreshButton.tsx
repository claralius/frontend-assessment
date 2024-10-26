'use client';
import React from 'react';
import Image from 'next/image';
import RefresButtonIcon from "../../../assets/icons/refresh.png";

const RefreshButton = () => {
  return (
    <div>
      <button>
        <Image src={RefresButtonIcon} alt="refresh-button" style={{ padding:0, margin:0 }}/>
      </button>
    </div>
  )
}

export default RefreshButton
