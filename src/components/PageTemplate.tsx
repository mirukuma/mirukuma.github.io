import React from 'react'
import ReactDOM from 'react-dom'

import {useRef, useState, useEffect} from 'react'

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
  const [textColor, setTextColor] = useState(nowTextColor());

  useEffect(()=>{
    setInterval(() => {
      setTextColor(nowTextColor());
    }, 1000 * 30);
  },[]);
  
  return (
  <>
    <motion.h1
      exit={{ opacity:0 }}
      transition={{ duration: 0.4}}
    >
    <h1  className = 'title' style={{color: `${textColor}`}}> {props.contents} </h1>
    </motion.h1>
  </>
  )
};

export default PageTemplate;