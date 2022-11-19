import React from "../../_snowpack/pkg/react.js";
import {useState, useEffect} from "../../_snowpack/pkg/react.js";
import SunCalc from "../../_snowpack/pkg/suncalc.js";
const Sun = (props) => {
  const calcSunState = (time2) => {
    const sunColorList = ["#EE8", "#EE8", "#E64", "#EEE", "#EEE", "#EEE", "#E64", " #EE8"];
    const colorIndex = Math.round(time2.getHours() / 3) % 8;
    const sunColor = sunColorList[colorIndex];
    const position = SunCalc.getPosition(time2, 35.0302644, 135.7858041);
    const altitude = position.altitude;
    const azimuth = position.azimuth;
    const x = 50 + 40 * azimuth / (Math.PI / 2);
    const y = 80 - 75 * altitude / (Math.PI / 2);
    return {x, y, sunColor};
  };
  const time = props.date;
  const [sunStateToDraw, setSunStateToDraw] = useState(calcSunState(time));
  useEffect(() => {
    setInterval(() => {
      const time2 = new Date();
      setSunStateToDraw(calcSunState(time2));
    }, 1e3 * 30);
  }, []);
  return /* @__PURE__ */ React.createElement("div", {
    className: "sun",
    style: {
      position: "fixed",
      borderRadius: "50%",
      left: `${sunStateToDraw.x}%`,
      top: `${sunStateToDraw.y}%`,
      width: "7vh",
      height: "7vh",
      background: `${sunStateToDraw.sunColor}`,
      boxShadow: `0px 0px 30px ${sunStateToDraw.sunColor}`
    }
  });
};
export default Sun;
