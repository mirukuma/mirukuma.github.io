import React from 'react'
import ReactDOM from 'react-dom'
import Menu from '../components/Menu'

interface TitleProps {
  contents: string,
}

const PageTemplate = (props:TitleProps) => (
  <>
    <Menu contents={['home', 'about', 'works', 'donate', 'contact']} />
    <center> 
      <h1  class = 'title'> {props.contents} </h1>
    </center>
  </>
);

export default PageTemplate;