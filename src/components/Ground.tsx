import React from 'react'
import ReactDOM from 'react-dom'

import {useRef, useState, useEffect} from 'react'

const Ground = () => {
  const calcGroundState = (time) => {
    const groundColorList = ['#111', '#211', '#633', '#433', '#544', '#433', '#633',' #211'];
    const colorIndex = Math.round(time.getHours() / 3) % 8;
    const groundColor = groundColorList[colorIndex];

    return groundColor
  }

  const time = new Date();
  const [groundColor, setGroundColor] = useState(calcGroundState(time));

  useEffect(()=>{
    setInterval(() => {
      const time = new Date()
      setGroundColor(calcGroundState(time));
    }, 1000 * 30);
  },[]);

  return (
    <div className="ground" style = {
      {
        position: "fixed",
        right: "0",
        left: "0",
        bottom: "0",
        height: "10vh",
        background: `${groundColor}`,
      }
    }/>
  );
}

export default Ground