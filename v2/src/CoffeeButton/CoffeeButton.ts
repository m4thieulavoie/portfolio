import { FASTElement, customElement, html } from "@microsoft/fast-element";
import styles from "./CoffeeButton.scss";

const template = html`<a
  class="bmc-button"
  target="_blank"
  href="https://www.buymeacoffee.com/mathieulavoie"
  rel="noopener noreferrer"
>
  <img
    src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
    alt="Buy me a coffee!"
  />
  <span>Buy me one!</span>
</a>`;

@customElement({
  name: "mathieu-coffee-button",
  template,
  styles,
})
export default class CoffeeButtonComponent extends FASTElement {}
