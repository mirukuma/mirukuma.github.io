import React from 'react'
import ReactDOM from 'react-dom'

import Menu from '../components/Menu'
import '../assets/css/main.css'
import StyledSpan from '../components/Span'

const Home = () => {
  return (
  <>
    <Menu contents={['home', 'about', 'works', 'donate', 'contact']} />
    <center> 
      <h1  class = 'title'> Home </h1>
    </center>
  </>
  );
};

export default Home;
