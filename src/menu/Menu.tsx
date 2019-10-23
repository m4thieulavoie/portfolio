import React from 'react';
import './Menu.scss';
import { Link } from 'react-router-dom';

function Menu() {
  return (
        <nav>
            <ul>
                <li>
                    <Link to="/">#all</Link>
                </li>
                <li>
                    <Link to="/about">#about</Link>
                </li>
                <li>
                    <Link to="/history">#history</Link>
                </li>
                <li>
                    <Link to="/skillz">#skillz</Link>
                </li>
                <li>
                    <Link to="/portfolio">#madeByMe</Link>
                </li>
                <li>
                    <Link to="/contact">#contact</Link>
                </li>
            </ul>
        </nav>
  );
}

export default Menu;
