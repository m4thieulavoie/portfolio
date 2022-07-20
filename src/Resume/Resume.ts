import type { ViewTemplate } from "@microsoft/fast-element";
import {
  FASTElement,
  customElement,
  html,
  repeat,
} from "@microsoft/fast-element";
import {
  fullName,
  roleName,
  jobHistory,
  careerOverview,
  email,
  phoneNumber,
  address,
  website,
  skillz,
} from "../common/metadata";
import type { JobHistory, SkillProp } from "../common/metadata";
import styles from "./Resume.scss";

interface Contribution {
  readonly name: string;
  readonly description: string | ViewTemplate;
  readonly link?: string;
}

const contributions: ReadonlyArray<Contribution> = [
  {
    name: "VSCode",
    link: "https://github.com/m4thieulavoie?org=microsoft",
    description: "Contributed to FAST, used for VSCode's Design System.",
  },
  {
    name: "MDN Web Docs",
    link: "https://github.com/m4thieulavoie?org=mdn",
    description: "Contributed some bug fixes",
  },
  {
    name: "Brave Browser",
    link: "https://github.com/m4thieulavoie?org=brave",
    description: "Helped with a few contributions",
  },
  {
    name: "Shopify",
    link: "https://github.com/m4thieulavoie?org=shopify",
    description: "Contributed to Polaris Design System",
  },
];

const projects: ReadonlyArray<Contribution> = [
  {
    name: "sass-to-string",
    link: "https://github.com/m4thieulavoie/sass-to-string",
    description: html`<p>
        Utility resolving sass modules into JavaScript strings.
      </p>
      <ul>
        <li>7.5k+ downloads per month</li>
        <li>75+ projects using it</li>
      </ul>`,
  },
];

@customElement({
  name: "mathieu-resume",
  template: html<ResumeComponent>`<mathieu-window>
    <h2 slot="title">Resume</h2>
    <header>
      <section>
        <h1>${fullName}</h1>
        <h2>${roleName}</h2>
      </section>
      <section class="infos">
        ✉️ ${email}<br />📱 ${phoneNumber}<br />⌨️ ${website}<br />📍 ${address}
      </section>
    </header>

    <p>${careerOverview}</p>

    <content>
      <section>
        <h3>Skills</h3>
        <ul class="skills">
          ${repeat(
            () => skillz,
            html<SkillProp>`<li>
              <strong>${(x) => x.skill}</strong
              ><meter min="0" max="100" value="${(x) => x.awesome}" />
            </li>`
          )}
        </ul>
        <h3>I contributed to</h3>
        <ul class="contributions">
          ${repeat(
            () => contributions,
            html<Contribution>`<li>
              <h4>${(x) => x.name}</h4>
              ${(x) => x.description}
            </li>`
          )}
        </ul>
        <h3>Projects</h3>
        <ul class="contributions">
          ${repeat(
            () => projects,
            html<Contribution>`<li>
              <h4>${(x) => x.name}</h4>
              ${(x) => x.description}
            </li>`
          )}
        </ul>
      </section>
      <section>
        <h3>Experience</h3>
        <ul class="history">
          ${repeat(
            () => jobHistory,
            html<JobHistory>`<li>
              <h4>${(x) => x.title}</h4>
              <p>
                <span class="date">${(x) => x.dates}</span> | <span
                  class="company"
                  >${(x) => x.company}</span
                >
              </p>
              <ul>
                ${repeat((x) => x.tasks, html`<li>${(x) => x}</li>`)}
              </ul>
              <hr />
              <footer>
                <ul class="skills">
                  ${repeat((x) => x.skills, html`<li>${(x) => x}</li>`)}
                </ul>
              </footer>
            </li>`
          )}
        </ul>
      </section>
    </content>
    <footer>
      <matt-button size="large" @click=${() => window.print()}
        >Print</matt-button
      >
    </footer>
  </mathieu-window>`,
  styles,
})
export default class ResumeComponent extends FASTElement {}
