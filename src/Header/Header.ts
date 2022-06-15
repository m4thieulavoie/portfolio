import {
  FASTElement,
  customElement,
  html,
  repeat,
} from "@microsoft/fast-element";
import { menu } from "../common/menu";
import type { MenuItem } from "../common/menu";
import { firstName, lastName } from "../common/metadata";
import { navigateToPage } from "../common/utils";
import styles from "./Header.scss";

const firstLetterUppercase = (word: string) =>
  `${word.charAt(0).toUpperCase()}${word.slice(1)}`;

const template = html<HeaderComponent>`
  <div class="main-avatar" @click=${() => navigateToPage("/")}>
    <mathieu-avatar size="2"></mathieu-avatar>
    <span class="first-name">${firstName}</span>
    <span class="last-name">${lastName}</span>
  </div>
  <ul tabindex="0">
    ${repeat(
      () => menu,
      html<MenuItem>`<li
        tabindex="0"
        @click=${({ name }) => {
          navigateToPage(name === "home" ? "/" : name);
        }}
      >
        ${({ name }) => firstLetterUppercase(name)}
        <span class="emoji">${({ emoji }) => emoji}</span>
      </li>`
    )}
  </ul>
`;

@customElement({
  name: "mathieu-header",
  template,
  styles,
})
export default class HeaderComponent extends FASTElement {}
