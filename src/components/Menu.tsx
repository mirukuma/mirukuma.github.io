// コンポーネント（部品）を定義する
// 基本的には最小の構成要素となる

import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'

import {useRef, useState, useEffect} from 'react'

import nowTextColor from '../assets/js/textColor'

interface Props {
  contents: string[],
}

const Menu = (props: Props) => {
  const [textColor, setTextColor] = useState(nowTextColor());

  useEffect(()=>{
    setInterval(() => {
      setTextColor(nowTextColor());
    }, 1000 * 30);
  },[]);

  const menuNames = props.contents;
  const menuItems = menuNames.map((name) => 
    <li key={name}>
        <Link to= {name} style={{color: textColor}}>
            {name.toUpperCase()}
        </Link>
    </li>
  );
  return (
    <ul className="menu">{menuItems}</ul>
  );
}

export default Menu
