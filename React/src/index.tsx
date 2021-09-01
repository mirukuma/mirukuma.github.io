import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './pages/Home'
import About from './pages/About'
import Works from './pages/Works'
import Donate from './pages/Donate'
import Contact from './pages/Contact'

ReactDOM.render(
  <Router>
    <Route exact path="/" component={Home}></Route>
    <Route path="/home" component={Home}></Route>
    <Route path="/about" component={About}></Route>
    <Route path="/works" component={Works}></Route>
    <Route path="/donate" component={Donate}></Route>
    <Route path="/contact" component={Contact}></Route>
  </Router>,
document.getElementById('app'));

