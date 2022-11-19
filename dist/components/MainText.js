import React from "../../_snowpack/pkg/react.js";
import {useState, useEffect} from "../../_snowpack/pkg/react.js";
import {motion} from "../../_snowpack/pkg/framer-motion.js";
import nowTextColor from "../assets/js/textColor.js";
const MainTextProps = (props) => {
  const [textColor, setTextColor] = useState(nowTextColor());
  const shadowColor = textColor == "#DDD" ? "#222" : "#DDD";
  useEffect(() => {
    setInterval(() => {
      setTextColor(nowTextColor());
    }, 1e3 * 30);
  }, []);
  return /* @__PURE__ */ React.createElement("div", {
    className: "main",
    style: {color: `${textColor}`, textShadow: `0.2vw 0.2vw 0.3vw ${shadowColor}`}
  }, /* @__PURE__ */ React.createElement(motion.div, {
    exit: {opacity: 0},
    transition: {duration: 0.4}
  }, props.contents));
};
export default MainTextProps;
