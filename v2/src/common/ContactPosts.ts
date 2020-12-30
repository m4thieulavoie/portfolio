import { html } from "@microsoft/fast-element";
import { SocialPost } from "./SocialPost";

export const contactPosts = [
  {
    text: html`<h3>Like what I'm doing?</h3>
      <p>I love coffee!</p>
      <mathieu-coffee-button></mathieu-coffee-button>`,
    date: "2021",
  },
  {
    text: html`<p class="status">
      ✉️
      <a href="mailto:mathieulavoie94@gmail.com">mathieulavoie94@gmail.com</a>
    </p>`,
    date: "2021",
  },
  {
    date: "2015 - now",
    text: html`<div class="status">
      <ul>
        <li>
          <a href="https://codepen.io/matmobile">Codepen</a>
        </li>
        <li>
          <a href="https://github.com/m4thieulavoie">GitHub</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/mathieu-lavoie-4a2a99122/">
            Linkedin
          </a>
        </li>
        <li>
          <a href="https://twitter.com/matmobile_js">Twitter</a>
        </li>
        <li>
          <a href="https://instagram.com/matmobile">Instagram</a>
        </li>
      </ul>
    </div>`,
  },
] as SocialPost[];
