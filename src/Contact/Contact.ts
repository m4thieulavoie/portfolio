import { FASTElement, customElement, html } from "@microsoft/fast-element";
import { email } from "../common/metadata";

@customElement({
  name: "mathieu-contact",
  template: html`<mathieu-window>
    <h2 slot="title">Contact</h2>
    <h2>Get in touch with me</h2>
    <p>
      I still have to get around to make a proper contact page. In the
      meanwhile, feel free to stop by my
      <matt-anchor href="https://github.com/m4thieulavoie" target="_blank"
        >GitHub profile</matt-anchor
      >, or <matt-anchor href="mailto:${email}">shoot me an email</matt-anchor>!
    </p>
    <h2>Sponsor me</h2>
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
})
export default class ContactComponent extends FASTElement {}
