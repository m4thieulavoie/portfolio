import { FASTElement, customElement, html } from "@microsoft/fast-element";
import { fullName } from "../common/metadata";
import styles from "./Post.scss";

const template = html`<div class="header">
    <mathieu-avatar size="4"></mathieu-avatar>
    <div class="infos">
      <strong>${fullName}</strong>
      <p>@m4thieulavoie</p>
    </div>
  </div>
  <slot name="title"></slot>
  <slot name="cover"></slot>
  <slot></slot>
  <footer>
    <small>⏱ <slot name="date"></slot></small>
  </footer>`;

@customElement({
  name: "mathieu-post",
  template,
  styles,
})
export default class PostComponent extends FASTElement {
  connectedCallback() {
    super.connectedCallback();

    this.setAttribute("role", "listitem");
  }
}
