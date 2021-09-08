import React from 'react'
import ReactDOM from 'react-dom'

interface MoonProps {
  date: Date,
}

const Sky = (props:MoonProps) => {
  const time = props.date;

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
  const sunColor = skyColorList[colorIndex];
  document.body.style.background = sunColor;
  return (
    <></>
  );
}

export default Sky