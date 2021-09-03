import React from 'react'
import ReactDOM from 'react-dom'

import PageTemplate from '../components/PageTemplate'

import MainText from '../components/MainText'

const Contact = () => (
  <>
    <PageTemplate contents='Contact' />
    <MainText contents={(
      <>
        <p>Twitter account:
        <a href="https://twitter.com/mirukuma__" target="_blank">@mirukuma__</a></p>
        <p>mail address: mirukuma_tech@icloud.com</p>
        <p>
        I recommend Twitter because I'm addicted to Twitter.
        </p>
      </>
      )}
    />
  </>
);

export default Contact;