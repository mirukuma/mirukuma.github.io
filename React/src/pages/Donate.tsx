import React from 'react'
import ReactDOM from 'react-dom'

import Menu from '../components/Menu'
import StyledSpan from '../components/Span'

const Donate = () => (
  <>
    <Menu contents={['home', 'about', 'works', 'donate', 'contact']} />
    <StyledSpan contents={'donate'} />
  </>
);

export default Donate;