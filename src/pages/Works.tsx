import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import ModalVideo from 'react-modal-video'

import PageTemplate from '../components/PageTemplate'
import MainText from '../components/MainText'

import CGGImage from '../assets/img/works/CuteGirlsGenerator_blur.png'
import CGGVideo from '../assets/img/works/CGGdemo.mp4'

const Works = () => {
  const [isOpen, setOpen] = useState(false);
  return (
  <>
    <PageTemplate contents='Works' />
    <ModalVideo channel='custom' autoplay isOpen={isOpen} url={CGGVideo} onClose={() => setOpen(false)} />
    <MainText
      contents={(
        <div class="works" onClick={()=> setOpen(true)}>
          <img src={CGGImage} />
          <h1>Cute Girls Generator</h1>
          <p>Cute Girls Generator(CGG) is a service that generates cute and erotic girls with machine learning. 
          To make it, I teamed up with the most talented people I've ever met(The origin of DEXUS!).  
          It is still working progress. <br/>
          CLICK TO SEE DEMO MOVIE.</p>
        </div>
      )}
    />
  </>
  )
}

export default Works;