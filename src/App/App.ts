import { FASTElement, customElement, html } from "@microsoft/fast-element";
import { Router } from "@vaadin/router";
import styles from "./App.scss";

const template = html`
  <mathieu-header></mathieu-header
  ><article></article>
`;

// <mathieu-footer></mathieu-footer>

@customElement({
  name: "mathieu-app",
  template,
  styles,
})
export default class AppComponent extends FASTElement {
  connectedCallback() {
    super.connectedCallback();

    const router = new Router(this.shadowRoot.querySelector("article"));
    router.setRoutes([
      { path: "/", component: "mathieu-home" },
      { path: "/resume", component: "mathieu-resume" },
      { path: "/contact", component: "mathieu-contact" },
      { path: "/portfolio", component: "mathieu-portfolio" },
      { path: "(.*)", component: "mathieu-home" },
    ]);
  }
}
