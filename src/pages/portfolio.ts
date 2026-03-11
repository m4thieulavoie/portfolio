import { protfolioPosts } from '../common/PortfolioPosts';

export function renderPortfolio(container: HTMLElement): void {
  let filter: 'all' | 'publications' | 'contributions' | 'projects' = 'all';

  const render = () => {
    const filteredPosts = filter === 'all'
      ? protfolioPosts
      : protfolioPosts.filter(post => {
          if (filter === 'publications') return post.type === 'publication';
          if (filter === 'contributions') return post.type === 'contribution';
          if (filter === 'projects') return post.type === 'project';
          return true;
        });

    container.innerHTML = `
      <section class="portfolio-page">
        <h1>Portfolio</h1>

        <div class="filter-buttons">
          <button class="filter-btn ${filter === 'all' ? 'active' : ''}" data-filter="all">
            All
          </button>
          <button class="filter-btn ${filter === 'publications' ? 'active' : ''}" data-filter="publications">
            Publications
          </button>
          <button class="filter-btn ${filter === 'contributions' ? 'active' : ''}" data-filter="contributions">
            Contributions
          </button>
          <button class="filter-btn ${filter === 'projects' ? 'active' : ''}" data-filter="projects">
            Projects
          </button>
        </div>

        <div class="portfolio-grid">
          ${filteredPosts.map(post => `
            <article class="portfolio-item" data-type="${post.type}">
              ${post.image ? `
                <img src="${post.image}" alt="${post.name}" class="portfolio-image" />
              ` : post.emoji ? `
                <div class="portfolio-emoji">${post.emoji}</div>
              ` : ''}

              <h3>
                ${post.link ? `<a href="${post.link}" target="_blank" rel="noopener">${post.name}</a>` : post.name}
              </h3>

              <div class="portfolio-text">
                ${post.text}
              </div>

              <span class="portfolio-type">${post.type}</span>
            </article>
          `).join('')}
        </div>
      </section>
    `;

    attachHandlers();
  };

  const attachHandlers = () => {
    const filterBtns = container.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const target = e.target as HTMLButtonElement;
        const newFilter = target.dataset.filter as typeof filter;
        if (newFilter) {
          filter = newFilter;
          render();
        }
      });
    });
  };

  render();
}
