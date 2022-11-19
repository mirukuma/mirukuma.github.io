import React from "../../_snowpack/pkg/react.js";
import {useState, useEffect} from "../../_snowpack/pkg/react.js";
import {motion} from "../../_snowpack/pkg/framer-motion.js";
import nowTextColor from "../assets/js/textColor.js";
const PageTemplate = (props) => {
  const [textColor, setTextColor] = useState(nowTextColor());
  useEffect(() => {
    setInterval(() => {
      setTextColor(nowTextColor());
    }, 1e3 * 30);
  }, []);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(motion.h1, {
    exit: {opacity: 0},
    transition: {duration: 0.4}
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "title",
    style: {color: `${textColor}`}
  }, " ", props.contents, " ")));
};
export default PageTemplate;
