import { FASTElement, customElement, html } from "@microsoft/fast-element";
import { Router } from "@vaadin/router";
import styles from "./App.scss";

const template = html`
  <mathieu-header></mathieu-header
  ><mathieu-window
    ><h2 slot="title">Terminal</h2>
    <mathieu-terminal></mathieu-terminal
  ></mathieu-window>
  <article></article>
  <mathieu-footer></mathieu-footer>
`;

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
      { path: "/about", component: "mathieu-about" },
      { path: "/cv", component: "mathieu-cv" },
      { path: "/contact", component: "mathieu-contact" },
      { path: "/history", component: "mathieu-history" },
      { path: "/skillz", component: "mathieu-skillz" },
      { path: "/portfolio", component: "mathieu-portfolio" },
      { path: "/publications", component: "mathieu-publications" },
      { path: "(.*)", component: "mathieu-home" },
    ]);
  }
}
