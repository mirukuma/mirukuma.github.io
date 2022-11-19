import React from 'react'
import ReactDOM from 'react-dom'

import PageTemplate from '../components/PageTemplate'

import MainText from '../components/MainText'

const Donate = () => (
  <>
    <PageTemplate contents='Donate' />
    <MainText contents={(
    <>
      <p>MONA: MBJ3ySTgg3cdif42PaGPh3FQe8z1VCXnxp</p>
      <p>BTC: 1KTQitpWdXxy1wwi4dpMY7S95A4b3hb1Mk</p>
      <p>I look forward to future of cryptocurrency, especially MONA and BTC.
      So I collect donations by them.</p>
    </>
    )} 
    /> 
  </>
);

export default Donate;