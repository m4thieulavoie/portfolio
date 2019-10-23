import React from 'react';
import './App.scss';
import Header from './header/Header';
import {
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from './home/Home';
import Posts from './posts/Posts';
import { contactPosts } from './_models/ContactPosts';
import { historyPosts } from './_models/HistoryPosts';
import { aboutPosts } from './_models/AboutPosts';
import Skillz from './skillz/Skillz';
import { skillzPosts } from './_models/SkillzPosts';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      <Switch>
      <Route path="/about">
          <Posts posts={aboutPosts}></Posts>
        </Route>
        <Route path="/history">
          <Posts posts={historyPosts}></Posts>
        </Route>
        <Route path="/skillz">
          <Posts posts={skillzPosts}></Posts>
        </Route>
        <Route path="/contact">
          <Posts posts={contactPosts}></Posts>
        </Route>
        <Route path="/">
          <Home></Home>
        </Route>
      </Switch>
      </BrowserRouter>
      <footer>
        This website's stack
        <ul>
          <li>
            React (create-react-app)
          </li>
          <li>
            Typescript
          </li>
          <li>
            SASS
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
