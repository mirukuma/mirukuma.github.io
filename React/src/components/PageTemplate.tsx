import React from 'react'
import ReactDOM from 'react-dom'
import Menu from '../components/Menu'
import Ground from '../components/Ground'
import Sun from '../components/Sun'

import {motion} from 'framer-motion'

interface TitleProps {
  contents: string,
}

const PageTemplate = (props:TitleProps) => (
  <>
    <Sun />
    <Menu contents={['home', 'about', 'works', 'donate', 'contact']} />
    <motion.h1
      exit={{ opacity:0 }}
      transition={{ duration: 0.4}}
    >
    <h1  class = 'title'> {props.contents} </h1>
    </motion.h1>
    <Ground />
  </>
);

export default PageTemplate;