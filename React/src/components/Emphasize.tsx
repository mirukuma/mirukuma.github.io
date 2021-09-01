import React from 'react'
import ReactDOM from 'react-dom'

interface EmphasizeProps {
  contents: string,
}

const Emphasize = (props: EmphasizeProps) => (
  <span style={{
    color: "#22A",
  }}>
    {props.contents}
  </span>
);

export default Emphasize;