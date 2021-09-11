import React from 'react'
import ReactDOM from 'react-dom'

import SunCalc from "suncalc";

interface SunProps {
  date: Date,
}

const Sun = (props:SunProps) => {
  const time = props.date;

  const sunColorList = ['#EE8', '#EE8', '#E64', '#EEE', '#EEE', '#EEE', '#E64',' #EE8'];
  const colorIndex = Math.round(time.getHours() / 3) % 8;
  const sunColor = sunColorList[colorIndex];

  const position = SunCalc.getPosition(time, 35.0302644, 135.7858041);
  const altitude = position.altitude;
  const azimuth = position.azimuth;
  const x = 50 + 40 * azimuth / (Math.PI / 2);
  const y = 80 - 75 * altitude / (Math.PI / 2);

  return (
    <div className="sun" style ={
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