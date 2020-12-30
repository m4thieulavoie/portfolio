import { FASTElement, customElement, html } from "@microsoft/fast-element";
import { navigateToPage } from "../common/utils";
import styles from "./Home.scss";
import { rightArrow } from "./rightArrow";

const template = html`<mathieu-window
  ><h2 slot="title">Browser</h2>
  <h2 slot="name">Home</h2>
  <mathieu-avatar></mathieu-avatar>
  <div class="home-content">
    <h1>Welcome to my online resume!</h1>
    <h2>
      My name is Mathieu Lavoie, let me walk you through this tiny website
    </h2>
    <div class="button-container" @click=${() => navigateToPage("/about")}>
      <button>
        <img src="${rightArrow}" alt="Right arrow" />
      </button>
      <label>Get started</label>
    </div>
  </div></mathieu-window
>`;

@customElement({
  name: "mathieu-home",
  template,
  styles,
})
export default class HomeComponent extends FASTElement {}
