import React from 'react'
import {useRef, useState, useEffect} from 'react'
import ReactDOM from 'react-dom'

import SunCalc from "suncalc";


interface SkyProps {
  date: Date,
}

const Sky = (props:SkyProps) => {
  const calcSkyState = (time) => {
    const skyColorList = [
      'linear-gradient(#003, #003)',
      'linear-gradient(#223, #003)',
      'linear-gradient(#EB9, #979)',
      'linear-gradient(#EEE, #9BE)',
      'linear-gradient(#9BE, #79F)', 
      'linear-gradient(#EEE, #9BE)',
      'linear-gradient(#EB9, #979)',
      'linear-gradient(#223, #003)',
    ];
    const colorIndex = Math.round(time.getHours() / 3) % 8;
    const skyColor = skyColorList[colorIndex];

    return skyColor;
  }

  const time = props.date;
  const [skyColor, setSkyStateToDraw] = useState(calcSkyState(time));

  const canvasRef = useRef(null);
  const [ctx, setCtx] = useState(null);

  useEffect(() => {
    setCtx(canvasRef.current.getContext('2d'));
    setInterval(() => {
      const time = new Date()
      setSkyStateToDraw(calcSkyState(time));
    }, 1000 * 30);
  }, [])

  useEffect(() => {
    const time = new Date();
    if (ctx !== null) {
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
      const position = SunCalc.getPosition(time, 35.0302644, 135.7858041);
      if (position.altitude < -0.2) {
        const ctx = canvasRef.current.getContext("2d"); 
        const drawStar = (x, y, brightness) => {
          ctx.fillStyle = '#FFF';

          ctx.beginPath();
          ctx.arc(x, y, 1, 0, 2 * Math.PI);
          ctx.closePath();
          ctx.fill();

          ctx.fillStyle = '#FFF3';

          ctx.beginPath();
          ctx.arc(x, y, brightness, 0, 2 * Math.PI);
          ctx.closePath();
          ctx.fill();
        }
        const max_width = window.innerWidth;
        const max_height = window.innerHeight;
        for (let i = 0; i < 250; i++) {
          drawStar(max_width * Math.random(), max_height * Math.random(), 5 * Math.random());
        }
      }
    }
  }, [ctx, skyColor])
  return (
    <canvas width = {`${window.innerWidth}`} height = {`${window.innerHeight}`} style = {{
        position:"fixed",
        top:"0",
        left:"0",
        background: `${skyColor}`,
      }} ref={canvasRef}
    />
  );
}

export default Sky