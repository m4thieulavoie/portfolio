import React, { useState } from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import "./Window.scss";

interface WindowProps extends RouteComponentProps {
  title?: string;
  children: React.ReactNode;
  hiddenOnMobile?: boolean;
}

function Window({ history, hiddenOnMobile, title, children }: WindowProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // On route change, never stay expanded
  history.listen(() => {
    setIsExpanded(false);
  });

  return (
    <div
      className={`window-container ${hiddenOnMobile ? "hiddable" : ""} ${
        isExpanded ? "expanded" : ""
      }`}
    >
      <header>
        <div className="buttons">
          <div className="button disabled button-red"></div>
          <div className="button disabled button-yellow"></div>
          <div
            className="button button-green"
            onClick={() => {
              const { innerWidth } = window;
              if (innerWidth > 550) {
                setIsExpanded(!isExpanded);
              }
            }}
          ></div>
        </div>
        <div className="title">{title}</div>
      </header>
      <div className="content">{children}</div>
    </div>
  );
}

export default withRouter(Window);
