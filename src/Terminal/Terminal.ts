import {
  FASTElement,
  customElement,
  html,
  attr,
  repeat,
  ViewTemplate,
} from "@microsoft/fast-element";
import { menu } from "../common/menu";
import { navigateToPage } from "../common/utils";
import styles from "./Terminal.scss";

const template = html<TerminalComponent>`<div class="previous-messages">
    ${repeat(
      (x) => x.commands,
      html<ViewTemplate, TerminalComponent>`<div>
        visitor-PC: <span class="machine-name">matmobile.co </span>
        root$ ${(x) => x}
      </div>`
    )}
  </div>
  <div class="text-container">
    <label for="console-input"
      >visitor-PC: <span class="machine-name">matmobile.co </span> root$</label
    >
    <input
      id="console-input"
      class="console-input"
      type="text"
      @keydown=${(x, c) => {
        if ((c.event as any).key === "Enter") {
          x.navigate();
        }

        return true;
      }}
      autofocus
    />
  </div> `;

@customElement({
  name: "mathieu-terminal",
  template,
  styles,
})
export default class TerminalComponent extends FASTElement {
  menuItems = menu;

  private helpCommand = html`
    help
    <p>Valid commands are</p>
    <ul class="commands-menu">
      ${repeat(
        () => menu,
        html`<li
          class="command"
          @click=${(x) =>
            navigateToPage(undefined, x.name === "home" ? "/" : x.name)}
        >
          ${(menuItem) => menuItem.name}
        </li>`
      )}
    </ul>
  `;

  private initialCommands = [
    html`<span> Hi, I'm Mathieu Lavoie 👋 </span>`,
    html`I'm a Senior Software developer`,
  ];

  @attr commands: ViewTemplate[] = [];

  private spiceCommand(command: string) {
    if (command.startsWith("sudo")) {
      return html`<p>
        Why so rude? No need to use <strong>sudo</strong> here!
      </p>`;
    }

    return html`${command}`;
  }

  navigate() {
    const input = this.shadowRoot.querySelector("input");
    const command = input.value;

    if (menu.find(({ name }) => name === command)) {
      navigateToPage(undefined, `/${command}`);
    }

    if (command === "clear") {
      this.commands = [];
    } else {
      this.commands = [
        ...this.commands,
        command === "help" ? this.helpCommand : this.spiceCommand(command),
      ];
    }

    input.value = "";
  }

  connectedCallback() {
    super.connectedCallback();

    this.commands = [...this.initialCommands, this.helpCommand];
  }
}
