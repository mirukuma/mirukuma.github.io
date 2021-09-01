import React from 'react'
import ReactDOM from 'react-dom'

import '../assets/css/main.css'
import PageTemplate from '../components/PageTemplate'

const Home = () => {
  return (
  <>
    <PageTemplate contents='Home' />
    <div class='main'> 
      Welcome to my website.
    </div>
  </>
  );
};

export default Home;
