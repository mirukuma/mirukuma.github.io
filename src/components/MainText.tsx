import React from 'react'
import ReactDOM from 'react-dom'

import {motion} from 'framer-motion'

import nowTextColor from '../assets/js/textColor'

interface MainTextProps {
  contents: JSX.Element,
}

const MainTextProps = (props: MainTextProps) => (
  <div class='main' style={{color: `${nowTextColor()}`}}> 
  <motion.div
    exit={{ opacity:0 }}
    transition={{ duration: 0.4}}
  >
    {props.contents}
  </motion.div>
  </div>
);

export default MainTextProps;