import React from 'react'
import ReactDOM from 'react-dom'

const Ground = () => {
  const groundColorList = ['#111', '#211', '#633', '#433', '#544', '#433', '#633',' #211'];
  const time = new Date();
  const colorIndex = Math.round(time.getHours() / 3) % 8;
  const groundColor = groundColorList[colorIndex];
  return (
    <div class="ground" style = {
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