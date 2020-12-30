import { FASTElement, customElement, html } from "@microsoft/fast-element";
import styles from "./Post.scss";

const template = html`<div class="header">
    <mathieu-avatar size="4"></mathieu-avatar>
    <div class="infos">
      <strong>Mathieu Lavoie</strong>
      <p>@m4thieulavoie</p>
    </div>
  </div>
  <slot></slot>
  <footer>
    <small>⏱ <slot name="date"></slot></small>
  </footer>`;

@customElement({
  name: "mathieu-post",
  template,
  styles,
})
export default class PostComponent extends FASTElement {}
