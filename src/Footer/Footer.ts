import { FASTElement, customElement, html } from "@microsoft/fast-element";
import styles from "./Footer.scss";

const template = html<FooterComponent>`
  <ul>
    <li>
      <matt-link href="https://codepen.io/matmobile" target="_blank"
        >Codepen</matt-link
      >
    </li>
    <li>
      <matt-link href="https://github.com/m4thieulavoie" target="_blank"
        >GitHub</matt-link
      >
    </li>
    <li>
      <matt-link
        href="https://www.linkedin.com/in/mathieu-lavoie-4a2a99122/"
        target="_blank"
      >
        Linkedin
      </matt-link>
    </li>
    <li>
      <matt-link href="https://twitter.com/matmobile_js" target="_blank"
        >Twitter</matt-link
      >
    </li>
  </ul>
`;

@customElement({
  name: "mathieu-footer",
  template,
  styles,
})
export default class FooterComponent extends FASTElement {}
