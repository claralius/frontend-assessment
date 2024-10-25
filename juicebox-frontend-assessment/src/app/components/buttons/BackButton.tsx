'use client';
import React from 'react';
import Image from 'next/image';
import { BackButton } from "../../../assets/icons/back-button.png";

const BackButton = () => {
  return (
    <div>
      <button>
        <img src={BackButton}></img>
      </button>
    </div>
  )
}

export default BackButton
