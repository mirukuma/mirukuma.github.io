import React from "../../_snowpack/pkg/react.js";
import {useState, useEffect} from "../../_snowpack/pkg/react.js";
const Ground = () => {
  const calcGroundState = (time2) => {
    const groundColorList = ["#111", "#211", "#633", "#433", "#544", "#433", "#633", " #211"];
    const colorIndex = Math.round(time2.getHours() / 3) % 8;
    const groundColor2 = groundColorList[colorIndex];
    return groundColor2;
  };
  const time = new Date();
  const [groundColor, setGroundColor] = useState(calcGroundState(time));
  useEffect(() => {
    setInterval(() => {
      const time2 = new Date();
      setGroundColor(calcGroundState(time2));
    }, 1e3 * 30);
  }, []);
  return /* @__PURE__ */ React.createElement("div", {
    className: "ground",
    style: {
      position: "fixed",
      right: "0",
      left: "0",
      bottom: "0",
      height: "10vh",
      background: `${groundColor}`
    }
  });
};
export default Ground;
