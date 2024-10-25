'use client';
import React from 'react';
import Image from 'next/image';
import BackButtonIcon from "../../../assets/icons/back-button.png"

const BackButton = () => {
  return (
    <div>
      <button>
      <Image src={BackButtonIcon} alt="back-button" width={20} height={20} />
      </button>
    </div>
  )
}

export default BackButton
