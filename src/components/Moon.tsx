import React from 'react'
import ReactDOM from 'react-dom'

import SunCalc from "suncalc";

const Moon = () => {
  const time = new Date();
  const sunTime = SunCalc.getTimes(time, 35.0302644, 135.7858041);
  const moonColor = time.getTime() - sunTime.sunrise.getTime() > 0 ? "#EEE" : "#EEB";
  const opacity = time.getTime() - sunTime.sunrise.getTime() > 0 ? "0.2" : "1";
  const moonTime = SunCalc.getMoonTimes(time, 35.0302644, 135.7858041);
  const moonrise = moonTime.rise;
  const moonset = moonTime.set;
  const moonPosition = (time.getTime() - moonrise.getTime()) / (moonset.getTime() - moonrise.getTime())
  const x = 50 - 40 * Math.cos(Math.PI * moonPosition);
  const y = 80 - 75 * Math.sin(Math.PI * moonPosition);
  return (
    <div class="moon" style ={
      { 
        position: "fixed",
        borderRadius: "50%",
        left: `${x}%`,
        top: `${y}%`,
        width: "7vh",
        height: "7vh",
        background: `${moonColor}`,
        opacity: `${opacity}`,
        boxShadow: `0px 0px 30px ${moonColor}`
      }
    }/>
  );
}

export default Moon