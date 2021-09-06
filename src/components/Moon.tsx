import React from 'react'
import ReactDOM from 'react-dom'

import SunCalc from "suncalc";

interface DateProps {
  date: Date,
}

const Moon = (props:DateProps) => {
  const time = props.date;
  const sunTime = SunCalc.getTimes(time, 35.0302644, 135.7858041);
  const moonColor = time.getTime() - sunTime.sunrise.getTime() > 0 ? "#EEE" : "#EEB";
  const opacity = time.getTime() - sunTime.sunrise.getTime() > 0 ? "0.2" : "1";
  const moonTime = SunCalc.getMoonTimes(time, 35.0302644, 135.7858041);
  if (moonTime.alwaysDown || moonTime.alwaysUp) return null;
  const moonrise = moonTime.rise;
  const moonset = moonTime.set;
  const moonPosition = (time.getTime() - moonrise.getTime()) / (moonset.getTime() - moonrise.getTime())
  const x = 50 - 40 * Math.cos(Math.PI * moonPosition);
  const y = 80 - 75 * Math.sin(Math.PI * moonPosition);
  const angle = SunCalc.getMoonIllumination(time, 35.0302644, 135.7858041).angle;
  const phase = SunCalc.getMoonIllumination(time, 35.0302644, 135.7858041).phase;
  const maskFill = 0.5 < (phase + 0.25) % 1 ? "white" : "black";
  const angleCorrection = 0.5 < phase % 1 ? 90 : 270;
  const ellipseWidth = `${3.5 * Math.abs((phase % 0.5) - 0.25) * 4}vh`
  return (
      <svg class="moon" style ={
      { 
        position: "fixed",
        left: `${x}%`,
        top: `${y}%`,
        width: "7vh",
        height: "7vh",
        opacity: `${opacity}`,
        backgroundColor: "transparent",
        filter: `drop-shadow(0px 0px 30px ${moonColor})`,
        transform: `rotate(${angle * 180 / Math.PI + angleCorrection}deg)`
      }}>
        <mask id="semicircle">
          <rect x="0" y="0" width="3.5vh" height="7vh" fill="white" />
          <ellipse cx="3.5vh" cy="3.5vh" rx={ellipseWidth} ry="3.5vh" fill={maskFill} />
        </mask>
        <circle cx="3.5vh" cy="3.5vh" r="3.5vh" fill={`${moonColor}`} mask="url(#semicircle)"/>
      </svg>
  );
}

export default Moon