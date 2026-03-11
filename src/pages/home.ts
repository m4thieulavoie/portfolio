import { fullName, roleName, currentCompany, firstName, careerOverview } from '../common/metadata';

export function renderHome(container: HTMLElement): void {
  container.innerHTML = `
    <section class="home-page">
      <h1>Hi, I'm ${firstName}! 👋</h1>

      <p class="intro">
        ${fullName}, ${roleName} at ${currentCompany}
      </p>

      <div class="content">
        <div class="expanded-content">
          <p>${careerOverview}</p>

          <div class="skills-highlight">
            <p><strong>Core expertise:</strong></p>
            <ul>
              <li>TypeScript, JavaScript, HTML, CSS/SASS</li>
              <li>React, Web Components</li>
              <li>Design Systems & Component Libraries</li>
              <li>Web Accessibility (a11y)</li>
              <li>Frontend Architecture</li>
            </ul>
          </div>

          <p>I'm passionate about building scalable, accessible, and maintainable web applications. I love contributing to open source and sharing knowledge with the community.</p>
        </div>
      </div>
    </section>
  `;
}
