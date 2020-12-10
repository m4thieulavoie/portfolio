import React from "react";
import Avatar from "../avatar/Avatar";
import "./Header.scss";
import Emoji from "../emoji/Emoji";
import { navigateToPage } from "../utils";
import { useHistory, useLocation } from "react-router";
import { menu } from "../_models/Menu";
import classNames from "classnames";

function Header() {
  const history = useHistory();
  const location = useLocation();

  const firstLetterUppercase = (word: string) =>
    `${word.charAt(0).toUpperCase()}${word.slice(1)}`;

  return (
    <>
      <header className="app-header">
        <ul>
          <li onClick={(e: any) => navigateToPage(e, "/", history)}>
            Reset <Emoji emoji="🔄" />
          </li>
          {menu.map(({ name, emoji }) => (
            <li
              key={name}
              onClick={(e: any) => navigateToPage(e, `/${name}`, history)}
              className={classNames({
                active: location.pathname === `/${name}`,
              })}
            >
              <Emoji emoji={emoji} className={"emoji"} />
              {firstLetterUppercase(name)}
            </li>
          ))}
        </ul>
        <div
          className="main-avatar"
          onClick={(e: any) => navigateToPage(e, "/contact", history)}
        >
          <Avatar size={20} className="image"></Avatar>
          <span className="name">Mathieu Lavoie</span>
          <span className="role"> - Tech Lead</span>
        </div>
      </header>
    </>
  );
}

export default Header;
