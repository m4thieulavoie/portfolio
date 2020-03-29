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
import { SocialPost } from "./_models/SocialPost";

function App() {
  const postPage = (posts: readonly SocialPost[], title: string) => (
    <Window title={`Browser - ${title}`}>
      <Posts posts={posts} title={title}></Posts>
    </Window>
  );

  return (
    <div className="app">
      <BrowserRouter>
        <Header></Header>
        <Window title="Terminal">
          <Console></Console>
        </Window>

        <Switch>
          <Route path="/about">{postPage(aboutPosts, "About me")}</Route>
          <Route path="/history">
            {postPage(historyPosts, "My career history")}
          </Route>
          <Route path="/skillz">{postPage(skillzPosts, "My skillz")}</Route>
          <Route path="/contact">{postPage(contactPosts, "Contact me!")}</Route>
          <Route path="/portfolio">
            {postPage(protfolioPosts, "Portfolio")}
          </Route>
          <Route path="/">
            <Window title="Browser">
              <Home></Home>
            </Window>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
