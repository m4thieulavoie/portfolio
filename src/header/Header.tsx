import React from "react";
import Avatar from "../avatar/Avatar";
import "./Header.scss";
import Emoji from "../emoji/Emoji";
import { navigateToPage } from "../utils";
import { useHistory } from "react-router";
import { menu } from "../_models/Menu";

function Header() {
  const history = useHistory();

  const firstLetterUppercase = (word: string) =>
    `${word.charAt(0).toUpperCase()}${word.slice(1)}`;

  return (
    <>
      <header className="app-header">
        <ul>
          <li onClick={(e: any) => navigateToPage(e, "/", history)}>
            Reset <Emoji emoji="🔄" />
          </li>
          {menu.map(item => (
            <li
              key={item}
              onClick={(e: any) => navigateToPage(e, `/${item}`, history)}
            >
              {firstLetterUppercase(item)}
            </li>
          ))}
        </ul>
        <div
          className="main-avatar"
          onClick={(e: any) => navigateToPage(e, "/contact", history)}
        >
          <Avatar size={20} className="image"></Avatar>
          <span className="name">Mathieu Lavoie</span>
          <span className="role"> - Senior Software Engineer</span>
        </div>
      </header>
    </>
  );
}

export default Header;
