// コンポーネント（部品）を定義する
// 基本的には最小の構成要素となる

import React from 'react'
import ReactDOM from 'react-dom'

interface Props {
  contents: string[],
}

const Menu = (props: Props) => {
  const menuNames = props.contents;
  const menuItems = menuNames.map((name) => 
    <li key={name}>
        <a href= {name}>
            {name.toUpperCase()}
        </a>
    </li>
  );
  return (
    <ul class="menu">{menuItems}</ul>
  );
}

export default Menu
