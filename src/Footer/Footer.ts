import { FASTElement, customElement, html } from "@microsoft/fast-element";
import styles from "./Footer.scss";

const template = html<FooterComponent>`
  <section>
    <ul>
      <li>
        <matt-anchor
          href="https://2021--gallant-goodall-8c025a.netlify.app/"
          target="_blank"
          >2021</matt-anchor
        >
      </li>
      <li>
        <matt-anchor href="https://m4thieulavoie.dev">Now</matt-anchor>
      </li>
    </ul>
  </section>
  <ul>
    <li>
      <matt-anchor href="https://codepen.io/matmobile" target="_blank"
        >Codepen</matt-anchor
      >
    </li>
    <li>
      <matt-anchor href="https://github.com/m4thieulavoie" target="_blank"
        >GitHub</matt-anchor
      >
    </li>
    <li>
      <matt-anchor
        href="https://www.linkedin.com/in/mathieu-lavoie-4a2a99122/"
        target="_blank"
      >
        Linkedin
      </matt-anchor>
    </li>
    <li>
      <matt-anchor href="https://twitter.com/matmobile_js" target="_blank"
        >Twitter</matt-anchor
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
