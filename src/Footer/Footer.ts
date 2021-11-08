import { FASTElement, customElement, html } from "@microsoft/fast-element";
import contributions from "../common/contributions";
import { navigateToPage } from "../common/utils";
import styles from "./Footer.scss";

const template = html<FooterComponent>`
  <template role="footer">
    <fieldset>
      <legend>My code runs on</legend>
      <ul tabindex="0"></ul>
    </fieldset>
  </template>
`;

@customElement({
  name: "mathieu-footer",
  template,
  styles,
})
export default class FooterComponent extends FASTElement {
  connectedCallback() {
    super.connectedCallback();

    const list = this.shadowRoot.querySelector("ul");
    contributions.forEach(({ icon, name }) => {
      const listItem = document.createElement("li");
      listItem.setAttribute("tabindex", "0");
      const computedName = name === "home" ? "/" : name;
      listItem.onclick = () => navigateToPage(computedName);
      listItem.innerHTML = `<img class="emoji" src="${icon}" />`;
      list.append(listItem);
    });
  }
}
