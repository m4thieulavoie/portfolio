import React from "react";
import { SocialPost } from "./SocialPost";
import Emoji from "../emoji/Emoji";

export const skillzPosts = [
  {
    date: "November 2018 - undefined",
    text: (
      <>
        <h2>Soft skillz</h2>
        <p className="status">
          <table>
            <thead>
              <tr>
                <th>
                  <Emoji emoji="➕"></Emoji>
                </th>
                <th>
                  <Emoji emoji="➖"></Emoji>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Great communicator</td>
                <td>I like Comic Sans MS</td>
              </tr>
              <tr>
                <td>I love teamwork</td>
                <td></td>
              </tr>
              <tr>
                <td>I work hard</td>
                <td></td>
              </tr>
              <tr>
                <td>UI details matter to me</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </p>
      </>
    )
  },
  {
    date: "November 2018 - undefined",
    text: (
      <>
        <p className="status">Big defender of the DRY principles</p>
      </>
    )
  },
  {
    date: "2017 - now",
    text: (
      <>
        <p className="status">
          <ul>
            <li>Huge fan of SASS</li>
            <li>I know quite a bit on Web Components</li>
            <li>Not bad at all in Typescript</li>
            <li>Solid experience with Angular 2+</li>
            <li>Pretty good with React</li>
          </ul>
        </p>
      </>
    )
  },
  {
    date: "2008 - 2017",
    text: (
      <>
        <p className="status">
          I loved PHP for way longer than I'd like to admit.
        </p>
      </>
    )
  },
  {
    date: "2007 - now",
    text: (
      <>
        <p className="status">
          I am in love with HTML and CSS <Emoji emoji="❤️"></Emoji>
        </p>
      </>
    )
  }
] as SocialPost[];
