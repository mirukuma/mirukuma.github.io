import React from 'react'
import ReactDOM from 'react-dom'

import SunCalc from "suncalc";

const Sun = () => {
  const sunColorList = ['#EE8', '#EE8', '#E64', '#EEE', '#EEE', '#EEE', '#E64',' #EE8'];
  const time = new Date();
  const colorIndex = Math.round(time.getHours() / 3) % 8;
  const sunColor = sunColorList[colorIndex];
  const sunTime = SunCalc.getTimes(time, 35.0302644, 135.7858041);
  const sunrise = sunTime.sunrise;
  const sunset = sunTime.sunset;
  const sunPosition = (time.getTime() - sunrise.getTime()) / (sunset.getTime() - sunrise.getTime())
  const x = 50 - 40 * Math.cos(Math.PI * sunPosition);
  const y = 80 - 75 * Math.sin(Math.PI * sunPosition);
  return (
    <div class="sun" style ={
      { 
        position: "fixed",
        borderRadius: "50%",
        left: `${x}%`,
        top: `${y}%`,
        width: "7vh",
        height: "7vh",
        background: `${sunColor}`,
        boxShadow: `0px 0px 30px ${sunColor}`
      }
    }/>
  );
}

export default Sun