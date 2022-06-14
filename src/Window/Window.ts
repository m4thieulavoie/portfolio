import {
  FASTElement,
  customElement,
  html,
} from "@microsoft/fast-element";
import styles from "./Window.scss";

const template = html`<header><slot name="title"></slot></header><content><slot></slot></content>`;

@customElement({
  name: "mathieu-window",
  template,
  styles,
})
export default class WindowComponent extends FASTElement {
}
