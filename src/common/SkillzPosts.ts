import { html } from "@microsoft/fast-element";
import type { SocialPost } from "./SocialPost";

export const skillzPosts = [
  {
    date: "November 2018 - undefined",
    text: html`<h2>Front-end skills</h2>
      <div class="status">
        <p>
          For the past 10+ years, I've sharpened my front-end skills with
          different technologies. Lately, I've been exposed to a <i>lot</i> of
          JavaScript, SASS, HTML, React and Web Components. I also know about
          Web Accessibility.
        </p>
      </div>`,
  },
  {
    date: "November 2018 - undefined",
    text: html`<h2>Soft skills</h2>
      <div class="status">
        <table>
          <thead>
            <tr>
              <th>➕</th>
              <th>➖</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Great communicator</td>
              <td>I overuse emojis 😬</td>
            </tr>
            <tr>
              <td>I love teamwork</td>
              <td></td>
            </tr>
            <tr>
              <td>Hard worker</td>
              <td></td>
            </tr>
            <tr>
              <td>UI details matter to me</td>
              <td></td>
            </tr>
            <tr>
              <td>Big defender of the DRY principles</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>`,
  },
  {
    date: "2017 - now",
    text: html`<div class="status">
      <ul>
        <li>Huge fan of SASS</li>
        <li>I know quite a bit on Web Components</li>
        <li>Not bad at all in Typescript</li>
        <li>Solid experience with Angular 2+</li>
        <li>Pretty good with React</li>
      </ul>
    </div>`,
  },
] as readonly SocialPost[];
