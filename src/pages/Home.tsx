import React from 'react'
import ReactDOM from 'react-dom'

import '../assets/css/main.scss'
import PageTemplate from '../components/PageTemplate'
import MainText from '../components/MainText'

import {motion} from 'framer-motion'

const Home = () => {
  return (
  <>
    <PageTemplate contents='Home' />
    <MainText contents='Welcome to my website' />
  </>
  );
};

export default Home;
