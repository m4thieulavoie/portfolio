import { menu } from "../common/menu";
import { fullName } from "../common/metadata";

export function renderHeader(container: HTMLElement): void {
  const currentPath = window.location.pathname.replace("/", "") || "home";

  container.innerHTML = `
    <header class="site-header">
      <div class="terminal-banner">
        <div class="banner-line">╔═══════════════════════════════════════════════════════════════════╗</div>
        <div class="banner-line">║  ${fullName}'s Portfolio                                          ║</div>
        <div class="banner-line">║  Staff Frontend Developer @ Shopify                               ║</div>
        <div class="banner-line">╚═══════════════════════════════════════════════════════════════════╝</div>
      </div>
      <nav class="main-nav">
        <div class="terminal-prompt">
          <span class="prompt-user">visitor</span><span class="prompt-at">@</span><span class="prompt-host">m4thieulavoie.dev</span><span class="prompt-colon">:</span><span class="prompt-path">~/${currentPath}</span><span class="prompt-symbol">$</span>
        </div>
        <ul class="nav-list">
          ${menu
            .map(
              (item) => `
            <li>
              <a href="/${item.name === "home" ? "" : item.name}" class="nav-link" data-command="${item.name}">
                <span class="command-prefix">./</span><span class="command-name">${item.name}</span>
              </a>
            </li>
          `,
            )
            .join("")}
        </ul>
      </nav>
    </header>
  `;
}
