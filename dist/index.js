import React from "../_snowpack/pkg/react.js";
import ReactDOM from "../_snowpack/pkg/react-dom.js";
import {BrowserRouter as Router, Route, Switch} from "../_snowpack/pkg/react-router-dom.js";
import {AnimatePresence} from "../_snowpack/pkg/framer-motion.js";
import Menu from "./components/Menu.js";
import Ground from "./components/Ground.js";
import Sun from "./components/Sun.js";
import Moon from "./components/Moon.js";
import Sky from "./components/Sky.js";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Works from "./pages/Works.js";
import Donate from "./pages/Donate.js";
import Contact from "./pages/Contact.js";
const date = new Date();
ReactDOM.render(/* @__PURE__ */ React.createElement(Router, null, /* @__PURE__ */ React.createElement(Sky, {
  date
}), /* @__PURE__ */ React.createElement(Sun, {
  date
}), /* @__PURE__ */ React.createElement(Moon, {
  date
}), /* @__PURE__ */ React.createElement(Menu, {
  contents: ["home", "about", "works", "donate", "contact"]
}), /* @__PURE__ */ React.createElement(Ground, null), /* @__PURE__ */ React.createElement(Route, {
  render: ({location}) => /* @__PURE__ */ React.createElement(AnimatePresence, {
    exitBeforeEnter: true,
    initial: false
  }, /* @__PURE__ */ React.createElement(Switch, {
    location,
    key: location.pathname,
    initial: false
  }, /* @__PURE__ */ React.createElement(Route, {
    exact: true,
    path: "/mirukuma.github.io/",
    component: Home
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "/mirukuma.github.io/home",
    component: Home
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "/mirukuma.github.io/about",
    component: About
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "/mirukuma.github.io/works",
    component: Works
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "/mirukuma.github.io/donate",
    component: Donate
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "/mirukuma.github.io/contact",
    component: Contact
  })))
})), document.getElementById("app"));