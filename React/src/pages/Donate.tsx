import React from 'react'
import ReactDOM from 'react-dom'

import Menu from '../components/Menu'
import StyledSpan from '../components/Span'

const Donate = () => (
  <>
    <Menu contents={['home', 'about', 'works', 'donate', 'contact']} />
    <center> 
      <h1  class = 'title'> Donate </h1>
    </center>
  </>
);

export default Donate;