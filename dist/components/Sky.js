import React from "../../_snowpack/pkg/react.js";
import {useRef, useState, useEffect} from "../../_snowpack/pkg/react.js";
import SunCalc from "../../_snowpack/pkg/suncalc.js";
const Sky = (props) => {
  const calcSkyState = (time2) => {
    const skyColorList = [
      "linear-gradient(#003, #003)",
      "linear-gradient(#223, #003)",
      "linear-gradient(#EB9, #979)",
      "linear-gradient(#EEE, #9BE)",
      "linear-gradient(#9BE, #79F)",
      "linear-gradient(#EEE, #9BE)",
      "linear-gradient(#EB9, #979)",
      "linear-gradient(#223, #003)"
    ];
    const colorIndex = Math.round(time2.getHours() / 3) % 8;
    const skyColor2 = skyColorList[colorIndex];
    return skyColor2;
  };
  const time = props.date;
  const [skyColor, setSkyStateToDraw] = useState(calcSkyState(time));
  const canvasRef = useRef(null);
  const [ctx, setCtx] = useState(null);
  useEffect(() => {
    setCtx(canvasRef.current.getContext("2d"));
    setInterval(() => {
      const time2 = new Date();
      setSkyStateToDraw(calcSkyState(time2));
    }, 1e3 * 30);
  }, []);
  useEffect(() => {
    const time2 = new Date();
    if (ctx !== null) {
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
      const position = SunCalc.getPosition(time2, 35.0302644, 135.7858041);
      if (position.altitude < -0.2) {
        const ctx2 = canvasRef.current.getContext("2d");
        const drawStar = (x, y, brightness) => {
          ctx2.fillStyle = "#FFF";
          ctx2.beginPath();
          ctx2.arc(x, y, 1, 0, 2 * Math.PI);
          ctx2.closePath();
          ctx2.fill();
          ctx2.fillStyle = "#FFF3";
          ctx2.beginPath();
          ctx2.arc(x, y, brightness, 0, 2 * Math.PI);
          ctx2.closePath();
          ctx2.fill();
        };
        const max_width = window.innerWidth;
        const max_height = window.innerHeight;
        for (let i = 0; i < 250; i++) {
          drawStar(max_width * Math.random(), max_height * Math.random(), 5 * Math.random());
        }
      }
    }
  }, [ctx, skyColor]);
  return /* @__PURE__ */ React.createElement("canvas", {
    width: `${window.innerWidth}`,
    height: `${window.innerHeight}`,
    style: {
      position: "fixed",
      top: "0",
      left: "0",
      background: `${skyColor}`
    },
    ref: canvasRef
  });
};
export default Sky;
