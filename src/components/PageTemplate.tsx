import React from 'react'
import ReactDOM from 'react-dom'
import Menu from '../components/Menu'
import Ground from '../components/Ground'
import Sun from '../components/Sun'
import Moon from '../components/Moon'
import Sky from '../components/Sky'

import {motion} from 'framer-motion'

import nowTextColor from '../assets/js/textColor'

interface TitleProps {
  contents: string,
}

const PageTemplate = (props:TitleProps) => {
  const date = new Date();
  return (
  <>
    <Sky  date = {date}/>
    <Sun  date = {date}/>
    <Moon date = {date}/>
    <Menu contents={['home', 'about', 'works', 'donate', 'contact']} />
    <motion.h1
      exit={{ opacity:0 }}
      transition={{ duration: 0.4}}
    >
    <h1  className = 'title' style={{color: `${nowTextColor()}`}}> {props.contents} </h1>
    </motion.h1>
    <Ground />
  </>
  )
};

export default PageTemplate;