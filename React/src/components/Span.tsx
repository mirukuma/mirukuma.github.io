import React from 'react'
import ReactDOM from 'react-dom'

interface SpanProps {
  contents: string,
}

const StyledSpan = (props: SpanProps) => (
  <span style={{
    fontSize: '2rem'
  }}>
    {props.contents}
  </span>
);

export default StyledSpan;