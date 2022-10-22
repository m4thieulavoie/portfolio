import {
  FASTElement,
  customElement,
  html,
  attr,
} from "@microsoft/fast-element";
import styles from "./Window.scss";

const template = html<WindowComponent>`<header>
    ${(x) =>
      x.hasAttribute("home")
        ? html`<span class="emoji-wrapper"><span class="emoji">🐱</span></span
            ><span class="emoji-wrapper"><span class="emoji">☕️</span></span
            ><span class="emoji-wrapper"><span class="emoji">⌨️</span></span>
            <span class="emoji-wrapper"><span class="emoji">🚵‍♂️</span></span>`
        : ``}
    <slot name="title"></slot>
  </header>
  <content><slot></slot></content>`;

@customElement({
  name: "mathieu-window",
  template,
  styles,
})
export default class WindowComponent extends FASTElement {
  @attr home = false;
}
