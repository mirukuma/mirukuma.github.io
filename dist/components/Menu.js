import React from "../../_snowpack/pkg/react.js";
import {Link} from "../../_snowpack/pkg/react-router-dom.js";
import {useState, useEffect} from "../../_snowpack/pkg/react.js";
import nowTextColor from "../assets/js/textColor.js";
const Menu = (props) => {
  const [textColor, setTextColor] = useState(nowTextColor());
  useEffect(() => {
    setInterval(() => {
      setTextColor(nowTextColor());
    }, 1e3 * 30);
  }, []);
  const menuNames = props.contents;
  const menuItems = menuNames.map((name) => /* @__PURE__ */ React.createElement("li", {
    key: name
  }, /* @__PURE__ */ React.createElement(Link, {
    to: name,
    style: {color: textColor}
  }, name.toUpperCase())));
  return /* @__PURE__ */ React.createElement("ul", {
    className: "menu"
  }, menuItems);
};
export default Menu;
