import { skillz, jobHistory } from '../common/metadata';

export function renderResume(container: HTMLElement): void {
  container.innerHTML = `
    <section class="resume-page">
      <h1>Resume</h1>

      <section class="skills">
        <h2>Skills</h2>
        <ul class="skills-list">
          ${skillz.map(s => `
            <li>
              <span class="skill-name">${s.skill}</span>
              <div class="skill-bar">
                <div class="skill-level" style="width: ${s.awesome}%"></div>
              </div>
            </li>
          `).join('')}
        </ul>
      </section>

      <section class="job-history">
        <h2>Experience</h2>
        ${jobHistory.map(job => `
          <article class="job">
            <h3>${job.title} at ${job.company}</h3>
            <p class="job-dates">${job.dates}</p>
            <ul class="job-tasks">
              ${job.tasks.map(task => `<li>${task}</li>`).join('')}
            </ul>
            <div class="job-skills">
              ${job.skills.map(skill => `<span class="tag">${skill}</span>`).join('')}
            </div>
          </article>
        `).join('')}
      </section>
    </section>
  `;
}
