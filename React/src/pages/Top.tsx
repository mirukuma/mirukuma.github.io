import React from 'react'
import ReactDOM from 'react-dom'

// 作ったコンポーネントを読み込んで、それらを組み合わせてページを作る
// 厳密にはページも本質的にはコンポーネント（コンポーネントの集合）なので
// 他のページを読み込んで組み込んだり導線を作ることもできる
import Menu from '../components/Menu'
import '../assets/css/main.css'

interface SpanProps {
  contents: string,
}

// 同じスタイルを適用した要素を使いまわしたいときは、即席でコンポーネントを作っても良い
// Styled-components と呼ばれるライブラリを使ったり
// Material-UI の theme provider を用いる方法などもある
const StyledSpan = (props: SpanProps) => (
  <span style={{
    fontSize: '2rem'
  }}>
    {props.contents}
  </span>
)

const Top = () => (
  <>
    <Menu contents={['home', 'about', 'works', 'donate', 'contact']} />
  </>
)

export default Top
