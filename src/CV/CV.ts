import {
  FASTElement,
  customElement,
  html,
  repeat,
} from "@microsoft/fast-element";
import type { Skill, JobHistory } from "../common/metadata";
import {
  fullName,
  roleName,
  careerOverview,
  email,
  website,
  jobHistory,
  phoneNumer,
} from "../common/metadata";
import styles from "./CV.scss";

const skillz: readonly Skill[] = [
  "HTML",
  "CSS/SASS",
  "Git",
  "JavaScript",
  "TypeScript",
  "Web Accessibility",
  "Web Components",
  "React",
];

const template = html<CVComponent>`<div>
  <header>
    <div>
      <h1>${fullName}</h1>
      <h1 class="role">${roleName}</h1>
    </div>
    <p>
      ✉️ ${email}<br />
      📞 ${phoneNumer}<br />
      🖱 ${website}<br />
      🎓 Computer Science, Cégep de<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Rimouski
    </p>
  </header>
  <h2>Career Overview</h2>
  <p>${careerOverview}</p>
  <h2>Relevant Skills</h2>
  <ul class="skills">
    ${repeat(() => skillz, html<Skill>`<li>${(x) => x}</li>`)}
  </ul>
  <h2>Work Experience</h2>
  <ul class="jobs">
    ${repeat(
      () => jobHistory,
      html<JobHistory>`<li class="job">
        <div class="job-header">
          <strong class="time">${(x) => x.dates}</strong>
          <ul class="job-skills">
            ${repeat((x) => x.skills, html<Skill>`<li>${(x) => x}</li>`)}
          </ul>
        </div>
        <div>
          <strong>${(x) => x.company} -</strong> <i>${(x) => x.title}</i>
          <ul>
            ${repeat((x) => x.tasks, html`<li>${(x) => x}</li>`)}
          </ul>
        </div>
      </li>`
    )}
  </ul>
</div>`;

@customElement({
  name: "mathieu-cv",
  template,
  styles,
})
export default class CVComponent extends FASTElement {}
