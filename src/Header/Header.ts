import { FASTElement, customElement, html } from "@microsoft/fast-element";
import { menu } from "../common/menu";
import { fullName, roleName } from "../common/metadata";
import { navigateToPage } from "../common/utils";
import styles from "./Header.scss";

const firstLetterUppercase = (word: string) =>
  `${word.charAt(0).toUpperCase()}${word.slice(1)}`;

const template = html<HeaderComponent>`
  <ul tabindex="0"></ul>
  <div class="main-avatar" @click=${() => navigateToPage("/contact")}>
    <mathieu-avatar size="1"></mathieu-avatar>
    <span class="name">${fullName}</span>
    <span class="role"> - ${roleName}</span>
  </div>
`;

@customElement({
  name: "mathieu-header",
  template,
  styles,
})
export default class HeaderComponent extends FASTElement {
  connectedCallback() {
    super.connectedCallback();

    const list = this.shadowRoot.querySelector("ul");
    menu.forEach(({ emoji, name }) => {
      const listItem = document.createElement("li");
      listItem.setAttribute("tabindex", "0");
      const computedName = name === "home" ? "/" : name;
      listItem.onclick = () => navigateToPage(computedName);
      listItem.innerHTML = `${firstLetterUppercase(
        name
      )} <span class="emoji">${emoji}</span>`;
      list.append(listItem);
    });
  }
}
