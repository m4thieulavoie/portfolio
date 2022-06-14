import {
  FASTElement,
  customElement,
  html,
  repeat,
  when,
} from "@microsoft/fast-element";
import styles from "./Footer.scss";

const contributions: ReadonlyArray<unknown> = [];

const template = html<FooterComponent>`
  <fieldset>
    <legend>Some of my code runs on</legend>
    <ul tabindex="0">
      ${repeat(
        () => contributions,
        html` <li>
          ${when(
            (x) => x.link,
            html`<a
              href="${(x) => x.link}"
              target="_blank"
              id="footer-link-${(x) => x.name}"
            >
              <img src="${(x) => x.icon}" alt="${(x) => x.name}"
            /></a>`
          )}
          ${when(
            (x) => !x.link,
            html`<img
              tabindex="0"
              src="${(x) => x.icon}"
              alt="${(x) => x.name}"
              id="footer-link-${(x) => x.name}"
            />`
          )}
        </li>`
      )}
    </ul>
  </fieldset>
  ${repeat(
    () => contributions,
    html`<matt-tooltip position="top" anchor="footer-link-${(x) => x.name}"
      >${(x) => x.description}</matt-tooltip
    >`
  )}
`;

@customElement({
  name: "mathieu-footer",
  template,
  styles,
})
export default class FooterComponent extends FASTElement {}
