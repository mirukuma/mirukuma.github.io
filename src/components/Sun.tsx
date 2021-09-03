import React from 'react'
import ReactDOM from 'react-dom'

const Sun = () => {
  const sunColorList = ['#EE8', '#EE8', '#E64', '#EEE', '#EEE', '#EEE', '#E64',' #EE8'];
  const time = new Date();
  const colorIndex = Math.round(time.getHours() / 3) % 8;
  const sunColor = sunColorList[colorIndex];
  return (
    <div class="sun" style ={
      { 
        position: "fixed",
        borderRadius: "50%",
        left: "80%",
        top: "20%",
        width: "7vh",
        height: "7vh",
        background: `${sunColor}`,
        boxShadow: `0px 0px 30px ${sunColor}`
      }
    }/>
  );
}

export default Sun