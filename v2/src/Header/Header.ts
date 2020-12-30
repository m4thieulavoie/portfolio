import { FASTElement, customElement, html } from "@microsoft/fast-element";
import { menu } from "../common/menu";
import { navigateToPage } from "../common/utils";
import styles from "./Header.scss";

const firstLetterUppercase = (word: string) =>
  `${word.charAt(0).toUpperCase()}${word.slice(1)}`;

const template = html<HeaderComponent>`
  <ul></ul>
  <div class="main-avatar" @click=${(e: any) => navigateToPage(e, "/contact")}>
    <mathieu-avatar size="1"></mathieu-avatar>
    <span class="name">Mathieu Lavoie</span>
    <span class="role"> - Tech Lead</span>
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
    [{ name: "Reset", emoji: "🔄" }, , ...menu].forEach(
      ({ emoji, name }, i) => {
        const listItem = document.createElement("li");
        const pageUrl = i === 0 ? "/" : name === "home" ? "/" : name;
        listItem.onclick = (e) => navigateToPage(e, pageUrl);
        listItem.innerHTML = `${firstLetterUppercase(name)} ${
          i === 0 ? emoji : `<span class="emoji">${emoji}</span>`
        }`;
        list.append(listItem);
      }
    );
  }
}
