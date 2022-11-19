import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch, useLocation} from "react-router-dom";

import { AnimatePresence, motion } from "framer-motion";

import Menu from './components/Menu'
import Ground from './components/Ground'
import Sun from './components/Sun'
import Moon from './components/Moon'
import Sky from './components/Sky'

import Home from './pages/Home'
import About from './pages/About'
import Works from './pages/Works'
import Donate from './pages/Donate'
import Contact from './pages/Contact'

const date = new Date();

ReactDOM.render(
  <Router>
    <Sky  date = {date}/>
    <Sun  date = {date}/>
    <Moon date = {date}/>
    <Menu contents={['home', 'about', 'works', 'donate', 'contact']} />
    <Ground />
    <Route render={({ location }) => (
        <AnimatePresence exitBeforeEnter initial={false}>  
          <Switch location={location} key={location.pathname} initial={false}>
            <Route exact path="/mirukuma.github.io/" component={Home}></Route>
            <Route path="/mirukuma.github.io/home" component={Home}></Route>
            <Route path="/mirukuma.github.io/about" component={About}></Route>
            <Route path="/mirukuma.github.io/works" component={Works}></Route>
            <Route path="/mirukuma.github.io/donate" component={Donate}></Route>
            <Route path="/mirukuma.github.io/contact" component={Contact}></Route>
          </Switch>
        </AnimatePresence>
      )}
    />
  </Router>,
document.getElementById('app'));

