import React from 'react';
import Avatar from '../avatar/Avatar';
import Console from '../console/Console';
import Menu from '../menu/Menu';
import './Header.scss';
import Emoji from '../emoji/Emoji';

function Header() {
  return <>
    <header>
        <Console></Console>
        <Avatar size={300}></Avatar>
        <div className="greeting">
        <h1>
                Hi, I'm Mathieu Lavoie <Emoji emoji="👋"></Emoji>
            </h1>
            <h2>
                I'm a Web developer
            </h2>
        </div>
        <Menu></Menu>
    </header>
  </>;
}

export default Header;
