import { FASTElement, customElement, html } from "@microsoft/fast-element";
import styles from "./Contact.scss";

@customElement({
  name: "mathieu-contact",
  template: html`<mathieu-window>
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
    </p>
  </mathieu-window>`,
  styles,
})
export default class ContactComponent extends FASTElement {}
