import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../animation_lnv0pj00.json'; // Reemplaza con la ubicación de tu archivo Lottie descargado
import '../styles/AnimationIcon.css'

const AnimatedIcon = () => {
  return (
    <div className='icon_animated'>
      <h1 >MY WALLET</h1>
      <Lottie animationData={animationData} style={{ height:"200px"}}/>
    </div>
  );
}

export default AnimatedIcon ;
