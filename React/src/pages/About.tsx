import React from 'react'
import ReactDOM from 'react-dom'

import PageTemplate from '../components/PageTemplate'
import Emphasize from '../components/Emphasize'

const About = () => (
  <>
    <PageTemplate contents='About' />
    <div class='main'> 
      <p> 
        Hi! I'm mirukuma! I'm a member of DEXUS. 
        DEXUS is the group that focus on state-of-the-art technology such as machine learning, blockchain and AGI.
        The name DEXUS stands for  <Emphasize contents='D' />igital to <Emphasize contents='EX' />pand <Emphasize contents='U' />niver<Emphasize contents='S' />e.
      </p>
      <p>Anyway, I'm a nerd who is interested in technology, math and science. Thanks!</p>
    </div>
  </>
);

export default About;
