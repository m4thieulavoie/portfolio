import { html } from "@microsoft/fast-element";
import type { SocialPost } from "./SocialPost";

export const contactPosts: ReadonlyArray<SocialPost> = [
  {
    text: html`<h3>Like what I'm doing?</h3>
      <p
        style="margin: 0.25rem 0;display: flex; align-items: center;gap: 0.5rem;"
      >
        I love coffee! <mathieu-coffee-button></mathieu-coffee-button>
      </p>
      <p
        style="margin: 0.25rem 0;display: flex; align-items: center;gap: 0.5rem;"
      >
        Or sponsor me!
        <iframe
          src="https://github.com/sponsors/m4thieulavoie/button"
          title="Sponsor m4thieulavoie"
          height="35"
          width="116"
          style="border: 0;"
        ></iframe>
      </p>`,
    date: "2021",
  },
  {
    date: "2021",
    text: html`<div class="status">
      <ul>
        <li>
          <a href="mailto:mathieulavoie94@gmail.com">Email ✉️</a>
        </li>
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
] as any;
