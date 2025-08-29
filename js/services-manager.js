import { servicesData } from './services-data.js';

export function renderServices() {
  const servicesGrid = document.getElementById('services-grid');
  if (!servicesGrid) return;

  const servicesHTML = servicesData
    .map(
      (service, index) => `
      <div class="service-card" style="animation-delay: ${index * 0.1}s">
        <div class="service-icon">
          <i class="${service.icon}"></i>
        </div>
        <h3 class="service-title">${service.title}</h3>
        <p class="service-description">
          ${service.description}
        </p>
        <a href="${service.link}" class="service-link"
          >Learn more <i class="fas fa-arrow-right"></i
        ></a>
      </div>
    `
    )
    .join('');

  servicesGrid.innerHTML = servicesHTML;
}
