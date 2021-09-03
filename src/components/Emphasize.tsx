import React from 'react'
import ReactDOM from 'react-dom'

interface EmphasizeProps {
  contents: string,
}

const Emphasize = (props: EmphasizeProps) => (
  <span style={{
    fontWeight: "400",
  }}>
    {props.contents}
  </span>
);

export default Emphasize;