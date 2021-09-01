import React from 'react'
import ReactDOM from 'react-dom'
import Menu from '../components/Menu'
import Ground from '../components/Ground'
import Sun from '../components/Sun'

interface TitleProps {
  contents: string,
}

const PageTemplate = (props:TitleProps) => (
  <>
    <Sun />
    <Menu contents={['home', 'about', 'works', 'donate', 'contact']} />
    <h1  class = 'title'> {props.contents} </h1>
    <Ground />
  </>
);

export default PageTemplate;