import React from 'react'
import ReactDOM from 'react-dom'

import {useRef, useState, useEffect} from 'react'

import {motion} from 'framer-motion'

import nowTextColor from '../assets/js/textColor'

interface MainTextProps {
  contents: JSX.Element,
}

const MainTextProps = (props: MainTextProps) => {
  const [textColor, setTextColor] = useState(nowTextColor());

  useEffect(()=>{
    setInterval(() => {
      setTextColor(nowTextColor());
    }, 1000 * 30);
  },[]);

  return (
    <div className='main' style={{color: `${textColor}`}}> 
    <motion.div
      exit={{ opacity:0 }}
      transition={{ duration: 0.4}}
    >
      {props.contents}
    </motion.div>
    </div>
  );
}


export default MainTextProps;