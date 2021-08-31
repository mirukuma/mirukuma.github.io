// コンポーネント（部品）を定義する
// 基本的には最小の構成要素となる

import React from 'react'
import ReactDOM from 'react-dom'

interface Props {
  contents: string[],
}

const Ground = () => {
  return (
    <div class="ground"></div>
  );
}

export default Ground