'use client';
import React from 'react';
import Image from 'next/image';
import BackButtonIcon from "../../../assets/icons/back-button.png"
import { useRouter } from 'next/navigation';

const BackButton = () => {
  const router = useRouter();
  const handleClickBack = () =>{
    router.back();
  };

  return (
    <div>
      <button onClick={handleClickBack}>
        <Image src={BackButtonIcon} alt="back-button" style={{ padding:0, margin:0 }}/>
      </button>
    </div>
  )
}

export default BackButton
