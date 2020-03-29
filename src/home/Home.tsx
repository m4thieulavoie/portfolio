import React from "react";
import "./Home.scss";
import Avatar from "../avatar/Avatar";
import { useHistory } from "react-router";
import { navigateToPage } from "../utils";
import { rightArrow } from "./right-arrow";

function Home() {
  const history = useHistory();

  const navigate = (e: any) => {
    navigateToPage(e, "/about", history);
  };

  return (
    <>
      <Avatar size={250} url="/images/me.png" className="home-avatar"></Avatar>
      <div className="home-content">
        <h1>Welcome to my online resume!</h1>
        <h4>
          My name is Mathieu Lavoie, let me walk you through this tiny website
        </h4>
        <div className="button-container" onClick={navigate}>
          <button>
            <img src={rightArrow} alt="Right arrow" height={25} />
          </button>
          <label>Get started</label>
        </div>
      </div>
    </>
  );
}

export default Home;
