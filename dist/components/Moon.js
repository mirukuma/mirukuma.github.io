import React from "../../_snowpack/pkg/react.js";
import {useState, useEffect} from "../../_snowpack/pkg/react.js";
import SunCalc from "../../_snowpack/pkg/suncalc.js";
const Moon = (props) => {
  const calcMoonState = (time2) => {
    const sunAltitude = SunCalc.getPosition(time2, 35.0302644, 135.7858041).altitude;
    const moonColor = sunAltitude > 0 ? "#EEE" : "#EEB";
    const opacity = sunAltitude > 0 ? "0.2" : "1";
    const position = SunCalc.getMoonPosition(time2, 35.0302644, 135.7858041);
    const altitude = position.altitude;
    const azimuth = position.azimuth;
    const x = 50 + 40 * azimuth / (Math.PI / 2);
    const y = 80 - 75 * altitude / (Math.PI / 2);
    const angle = SunCalc.getMoonIllumination(time2, 35.0302644, 135.7858041).angle;
    const phase = SunCalc.getMoonIllumination(time2, 35.0302644, 135.7858041).phase;
    const maskFill = 0.5 < (phase + 0.25) % 1 ? "white" : "black";
    const angleCorrection = 0.5 < phase % 1 ? 90 : 270;
    const ellipseWidth = `${3.5 * Math.abs(phase % 0.5 - 0.25) * 4}vh`;
    return {x, y, opacity, moonColor, angle, angleCorrection, ellipseWidth, maskFill};
  };
  const time = props.date;
  const [moonStateToDraw, setMoonStateToDraw] = useState(calcMoonState(time));
  useEffect(() => {
    setInterval(() => {
      const time2 = new Date();
      setMoonStateToDraw(calcMoonState(time2));
    }, 1e3 * 30);
  }, []);
  return /* @__PURE__ */ React.createElement("svg", {
    className: "moon",
    style: {
      position: "fixed",
      left: `${moonStateToDraw.x}%`,
      top: `${moonStateToDraw.y}%`,
      width: "7vh",
      height: "7vh",
      opacity: `${moonStateToDraw.opacity}`,
      backgroundColor: "transparent",
      filter: `drop-shadow(0px 0px 30px ${moonStateToDraw.moonColor})`,
      transform: `rotate(${moonStateToDraw.angle * 180 / Math.PI + moonStateToDraw.angleCorrection}deg)`
    }
  }, /* @__PURE__ */ React.createElement("mask", {
    id: "semicircle"
  }, /* @__PURE__ */ React.createElement("rect", {
    x: "0",
    y: "0",
    width: "3.5vh",
    height: "7vh",
    fill: "white"
  }), /* @__PURE__ */ React.createElement("ellipse", {
    cx: "3.5vh",
    cy: "3.5vh",
    rx: moonStateToDraw.ellipseWidth,
    ry: "3.5vh",
    fill: moonStateToDraw.maskFill
  })), /* @__PURE__ */ React.createElement("circle", {
    cx: "3.5vh",
    cy: "3.5vh",
    r: "3.5vh",
    fill: `${moonStateToDraw.moonColor}`,
    mask: "url(#semicircle)"
  }));
};
export default Moon;
