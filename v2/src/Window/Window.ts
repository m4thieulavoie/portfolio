import {
  FASTElement,
  customElement,
  html,
  attr,
} from "@microsoft/fast-element";
import styles from "./Window.scss";

const template = html`<header>
    <ul>
      <li class="button disabled button-red"></li>
      <li class="button disabled button-yellow"></li>
      <li class="button button-green"></li>
    </ul>

    <slot name="title"></slot>
  </header>
  <div class="posts-header">
    <button>
      <i class="arrow left"></i>
      Home
    </button>
    <slot name="name"></slot>
    <button>Contact me</button>
  </div>
  <div class="content" tabindex="0">
    <slot></slot>
  </div>`;

@customElement({
  name: "mathieu-window",
  template,
  styles,
})
export default class WindowComponent extends FASTElement {
  title = "";
  @attr expanded = false;

  connectedCallback() {
    super.connectedCallback();

    const fullScreenButton = this.shadowRoot.querySelector<HTMLLIElement>(
      ".button-green"
    );
    fullScreenButton.onclick = () => {
      const { innerWidth } = window;
      if (innerWidth > 550) {
        this.expanded = !this.expanded;
      }
    };
  }
}
