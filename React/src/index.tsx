import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from "react-router-dom";

// 基本的に index はページのルーティングを設定する
import Top from './pages/Top'

const App = () => (
  <>
    <Top />
  </>
)

ReactDOM.render(<App />, document.getElementById('app'))

