import { FASTElement, customElement, html } from "@microsoft/fast-element";
import { Router } from "@vaadin/router";
import styles from "./App.scss";

const template = html`<mathieu-header></mathieu-header
  ><mathieu-window><mathieu-console></mathieu-console></mathieu-window>
  <main></main>`;

@customElement({
  name: "mathieu-app",
  template,
  styles,
})
export default class AppComponent extends FASTElement {
  connectedCallback() {
    super.connectedCallback();

    const router = new Router(this.shadowRoot.querySelector("main"));
    router.setRoutes([
      { path: "/", component: "mathieu-home" },
      { path: "/about", component: "mathieu-about" },
      { path: "(.*)", component: "mathieu-not-found" },
    ]);
  }
}
