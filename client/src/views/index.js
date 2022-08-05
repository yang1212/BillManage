import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()
  function goHome() {
    navigate(`/home`)
  }
  return (
    <div>
       index
       <div onClick={goHome}>enter</div>
    </div>
  );
}
