// Import all JavaScript modules
import './navigation.js';
import './animations.js';
import { ProjectsManager } from './projects-manager.js';
import './testimonials.js';
import './contact.js';
import './utils.js';
import { TeamSwiper } from './team-swiper.js';
import { renderServices } from './services-manager.js';
// Initialize modules when DOM is loaded

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded, initializing modules...');

  // Initialize projects manager
  const projectsManager = new ProjectsManager();
  renderServices();

  // Initialize team swiper
  new TeamSwiper();
});
