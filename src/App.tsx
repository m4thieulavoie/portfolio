import React from "react";
import "./App.scss";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./home/Home";
import Posts from "./posts/Posts";
import { contactPosts } from "./_models/ContactPosts";
import { historyPosts } from "./_models/HistoryPosts";
import { aboutPosts } from "./_models/AboutPosts";
import { skillzPosts } from "./_models/SkillzPosts";
import Console from "./console/Console";
import Window from "./window/Window";
import Header from "./header/Header";
import { protfolioPosts } from "./_models/PortfolioPosts";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Window title="Terminal">
          <Console></Console>
        </Window>
        <Window title="Browser">
          <Switch>
            <Route path="/about">
              <Posts posts={aboutPosts} title="About me"></Posts>
            </Route>
            <Route path="/history">
              <Posts posts={historyPosts} title="My career history"></Posts>
            </Route>
            <Route path="/skillz">
              <Posts posts={skillzPosts}></Posts>
            </Route>
            <Route path="/contact">
              <Posts posts={contactPosts} title="Contact me!"></Posts>
            </Route>
            <Route path="/portfolio">
              <Posts posts={protfolioPosts}></Posts>
            </Route>
            <Route path="/">
              <Home></Home>
            </Route>
          </Switch>
        </Window>
      </BrowserRouter>
    </div>
  );
}

export default App;
