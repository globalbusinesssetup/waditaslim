import { projectsData, projectCategories } from './projects-data.js';

export class ProjectsManager {
  constructor() {
    this.projects = projectsData;
    this.categories = projectCategories;
    this.currentFilter = 'all';
    this.filteredProjects = [...this.projects]; // Initialize with all projects

    this.projectsGrid = document.querySelector('.projects-grid');
    this.filterButtons = document.querySelector('.project-filters');

    if (!this.projectsGrid || !this.filterButtons) {
      console.log('Projects elements not found');
      return;
    }

    this.init();
  }

  init() {
    console.log('Initializing projects manager...');
    console.log('Total projects:', this.projects.length);
    console.log('Filtered projects:', this.filteredProjects.length);

    this.renderCategories();
    this.renderProjects(); // This should show all projects by default
    this.bindEvents();
  }

  renderCategories() {
    const categoriesHTML = this.categories
      .map(
        (category) => `
      <button class="filter-btn ${category.id === 'all' ? 'active' : ''}" 
              data-filter="${category.id}">
        <i class="${category.icon}"></i>
        <span>${category.name}</span>
      </button>
    `
      )
      .join('');

    this.filterButtons.innerHTML = categoriesHTML;
  }

  renderProjects() {
    console.log('Rendering projects:', this.filteredProjects.length);

    if (this.filteredProjects.length === 0) {
      this.projectsGrid.innerHTML =
        '<p class="no-projects">No projects found</p>';
      return;
    }

    const projectsHTML = this.filteredProjects
      .map((project) => this.createProjectCard(project))
      .join('');
    this.projectsGrid.innerHTML = projectsHTML;

    // Add animation delay to each card
    const cards = this.projectsGrid.querySelectorAll('.project-card');
    cards.forEach((card, index) => {
      card.style.animationDelay = `${index * 0.1}s`;
    });
  }

  createProjectCard(project) {
    const featuredBadge = project.featured
      ? '<span class="featured-badge">Featured</span>'
      : '';

    return `
      <div class="project-card" data-category="${
        project.category
      }" data-aos="fade-up">
        <div class="project-image">
          <img src="${project.image}" alt="${project.title}" />
          <div class="project-overlay">
            <a target="_blank" href="${
              project.link
            }" class="project-link" title="View Project">
              <i class="fas fa-link"></i>
            </a>
            <button class="project-info-btn" title="Project Details" onclick="showProjectDetails(${
              project.id
            })">
              <i class="fas fa-info-circle"></i>
            </button>
          </div>
        </div>
        <div class="project-info">
          <div class="project-header">
            <h3 class="project-title">${project.title}</h3>
            <span class="project-category">${this.getCategoryName(
              project.category
            )}</span>
          </div>
          <div class="project-meta">
            <span class="project-duration"><i class="fas fa-clock"></i> ${
              project.duration
            }</span>
            <span class="project-client"><i class="fas fa-user"></i> ${
              project.client
            }</span>
          </div>
          <div class="project-technologies">
            ${project.technologies
              .slice(0, 3)
              .map((tech) => `<span class="tech-tag">${tech}</span>`)
              .join('')}
            ${
              project.technologies.length > 3
                ? `<span class="tech-tag more">+${
                    project.technologies.length - 3
                  }</span>`
                : ''
            }
          </div>
        </div>
      </div>
    `;
  }

  getCategoryName(categoryId) {
    const category = this.categories.find((cat) => cat.id === categoryId);
    return category ? category.name : categoryId;
  }

  filterProjects(category) {
    console.log('Filtering projects by:', category);

    this.currentFilter = category;

    // Update active filter button
    document.querySelectorAll('.filter-btn').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.filter === category);
    });

    // Filter projects
    if (category === 'all') {
      this.filteredProjects = [...this.projects];
    } else {
      this.filteredProjects = this.projects.filter(
        (project) => project.category === category
      );
    }

    console.log('Filtered projects count:', this.filteredProjects.length);

    // Re-render with animation
    this.animateFilterChange();
  }

  animateFilterChange() {
    const cards = this.projectsGrid.querySelectorAll('.project-card');

    // Fade out current cards
    cards.forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
    });

    // After fade out, update content and fade in
    setTimeout(() => {
      this.renderProjects();

      const newCards = this.projectsGrid.querySelectorAll('.project-card');
      newCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';

        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, index * 50);
      });
    }, 300);
  }

  bindEvents() {
    // Filter button clicks
    this.filterButtons.addEventListener('click', (e) => {
      if (e.target.closest('.filter-btn')) {
        const filterBtn = e.target.closest('.filter-btn');
        const category = filterBtn.dataset.filter;
        this.filterProjects(category);
      }
    });

    // Project card hover effects
    this.projectsGrid.addEventListener('mouseenter', (e) => {
      const card = e.target.closest('.project-card');
      if (card) {
        card.style.transform = 'translateY(-5px)';
      }
    });

    this.projectsGrid.addEventListener('mouseleave', (e) => {
      const card = e.target.closest('.project-card');
      if (card) {
        card.style.transform = 'translateY(0)';
      }
    });
  }

  // Method to add new project
  addProject(project) {
    this.projects.push(project);
    if (
      this.currentFilter === 'all' ||
      this.currentFilter === project.category
    ) {
      this.filteredProjects.push(project);
      this.renderProjects();
    }
  }

  // Method to remove project
  removeProject(projectId) {
    this.projects = this.projects.filter((p) => p.id !== projectId);
    this.filteredProjects = this.filteredProjects.filter(
      (p) => p.id !== projectId
    );
    this.renderProjects();
  }

  // Method to update project
  updateProject(projectId, updates) {
    const projectIndex = this.projects.findIndex((p) => p.id === projectId);
    if (projectIndex !== -1) {
      this.projects[projectIndex] = {
        ...this.projects[projectIndex],
        ...updates,
      };
      this.renderProjects();
    }
  }
}

// Global function for project details modal
window.showProjectDetails = function (projectId) {
  const project = projectsData.find((p) => p.id === projectId);
  if (!project) return;

  const modal = document.createElement('div');
  modal.className = 'project-modal';
  modal.innerHTML = `
    <div class="project-modal-content">
      <span class="close-modal">&times;</span>
      <div class="project-modal-header">
        <img src="${project.image}" alt="${project.title}" />
        <div class="project-modal-info">
          <h2>${project.title}</h2>
          <p class="project-category">${project.category}</p>
          <div class="project-meta">
            <span><i class="fas fa-clock"></i> ${project.duration}</span>
            <span><i class="fas fa-user"></i> ${project.client}</span>
          </div>
        </div>
      </div>
      <div class="project-modal-body">
        <p>${project.description}</p>
        <div class="project-technologies">
          <h4>Technologies Used:</h4>
          <div class="tech-tags">
            ${project.technologies
              .map((tech) => `<span class="tech-tag">${tech}</span>`)
              .join('')}
          </div>
        </div>
        <a href="${project.link}" class="btn btn-primary">View Project</a>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  // Close modal functionality
  modal.querySelector('.close-modal').onclick = () => modal.remove();
  modal.onclick = (e) => {
    if (e.target === modal) modal.remove();
  };

  // Add modal styles
  if (!document.getElementById('project-modal-styles')) {
    const styles = document.createElement('style');
    styles.id = 'project-modal-styles';
    styles.textContent = `
      .project-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        padding: 20px;
      }
      
      .project-modal-content {
        background: var(--dark-bg);
        border-radius: 12px;
        max-width: 600px;
        width: 100%;
        max-height: 90vh;
        overflow-y: auto;
        position: relative;
      }
      
      .close-modal {
        position: absolute;
        top: 15px;
        right: 20px;
        font-size: 28px;
        cursor: pointer;
        color: var(--text-secondary);
        z-index: 1;
      }
      
      .close-modal:hover {
        color: var(--text-primary);
      }
      
      .project-modal-header {
        position: relative;
      }
      
      .project-modal-header img {
        width: 100%;
        height: 200px;
        object-fit: cover;
        border-radius: 12px 12px 0 0;
      }
      
      .project-modal-info {
        padding: 20px;
        background: linear-gradient(to top, var(--dark-bg), transparent);
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        color: white;
      }
      
      .project-modal-body {
        padding: 20px;
      }
      
      .tech-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin-top: 10px;
      }
    `;
    document.head.appendChild(styles);
  }
};
