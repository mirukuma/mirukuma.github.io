import React from 'react'
import ReactDOM from 'react-dom'

import PageTemplate from '../components/PageTemplate'

import MainText from '../components/MainText'

import CGGImage from '../assets/img/works/CuteGirlsGenerator_blur.png'

const Works = () => (
  <>
    <PageTemplate contents='Works' />
    <MainText
      contents={(
        <div class="works">
          <a href="https://drive.google.com/file/d/1h84AgKdarTTg6dSXYdphnQ7xncjr-h9p/view" target="_blank">
              <img src={CGGImage} />
              <h1>Cute Girls Generator</h1>
              <p>Cute Girls Generator(CGG) is a service that generates cute and erotic girls with machine learning. 
              To make it, I teamed up with the most talented people I've ever met(The origin of DEXUS!).  
              It is still working progress. <br/>
              CLICK TO SEE DEMO MOVIE.</p>> 
          </a>
        </div>
      )}
    />
  </>
);

export default Works;