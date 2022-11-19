import React from "../../_snowpack/pkg/react.js";
import "../assets/css/main.css.proxy.js";
import PageTemplate from "../components/PageTemplate.js";
import MainText from "../components/MainText.js";
const Home = () => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(PageTemplate, {
    contents: "Home"
  }), /* @__PURE__ */ React.createElement(MainText, {
    contents: "Welcome to my website"
  }));
};
export default Home;
