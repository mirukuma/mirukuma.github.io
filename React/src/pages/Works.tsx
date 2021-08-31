import React from 'react'
import ReactDOM from 'react-dom'

import Menu from '../components/Menu'
import StyledSpan from '../components/Span'

const Works = () => (
  <>
    <Menu contents={['home', 'about', 'works', 'donate', 'contact']} />
    <StyledSpan contents={'works'} />
  </>
);

export default Works;