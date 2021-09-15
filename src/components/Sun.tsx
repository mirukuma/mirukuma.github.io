import React from 'react'
import ReactDOM from 'react-dom'

import {useRef, useState, useEffect} from 'react'

import SunCalc from "suncalc";

interface SunProps {
  date: Date,
}

const Sun = (props:SunProps) => {
  const calcSunState = (time) => {
    const sunColorList = ['#EE8', '#EE8', '#E64', '#EEE', '#EEE', '#EEE', '#E64',' #EE8'];
    const colorIndex = Math.round(time.getHours() / 3) % 8;
    const sunColor = sunColorList[colorIndex];

    const position = SunCalc.getPosition(time, 35.0302644, 135.7858041);
    const altitude = position.altitude;
    const azimuth = position.azimuth;
    const x = 50 + 40 * azimuth / (Math.PI / 2);
    const y = 80 - 75 * altitude / (Math.PI / 2);

    return {x, y, sunColor};
  }

  const time = props.date;
  const [sunStateToDraw, setSunStateToDraw] = useState(calcSunState(time));

  useEffect(()=>{
    setInterval(() => {
      const time = new Date()
      setSunStateToDraw(calcSunState(time));
    }, 1000 * 30);
  },[]);

  return (
    <div className="sun" style ={
      { 
        position: "fixed",
        borderRadius: "50%",
        left: `${sunStateToDraw.x}%`,
        top: `${sunStateToDraw.y}%`,
        width: "7vh",
        height: "7vh",
        background: `${sunStateToDraw.sunColor}`,
        boxShadow: `0px 0px 30px ${sunStateToDraw.sunColor}`
      }
    }/>
  );
}

export default Sun