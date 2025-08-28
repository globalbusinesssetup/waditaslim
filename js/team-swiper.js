import { teamMembers } from './team-data.js';

export class TeamSwiper {
  constructor() {
    this.swiperContainer = document.querySelector('.teams-swiper');
    this.swiperWrapper = document.querySelector('.swiper-wrapper');

    if (!this.swiperContainer) return;

    this.init();
  }

  init() {
    this.renderTeamMembers();
    this.initSwiper();
  }

  renderTeamMembers() {
    if (!this.swiperWrapper) return;

    const teamHTML = teamMembers
      .map((member) => this.createTeamCard(member))
      .join('');
    this.swiperWrapper.innerHTML = teamHTML;
  }

  createTeamCard(member) {
    if (member.isPlaceholder) {
      return `
        <div class="swiper-slide">
          <div class="flip-card placeholder">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <div class="placeholder-content">
                  <i class="${member.icon}"></i>
                  <h3>${member.name}</h3>
                  <p>${member.role}</p>
                </div>
              </div>
              <div class="flip-card-back">
                <p>${member.description}</p>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    return `
      <div class="swiper-slide">
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img src="${member.image}" alt="${member.name}" />
              <div class="overlay">
                <div class="name">${member.name}</div>
                <div class="role">${member.role}</div>
              </div>
            </div>
            <div class="flip-card-back">
              <p>${member.description}</p>
              <div class="social-links-back">
                ${this.renderSocialLinks(member.social)}
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  renderSocialLinks(social) {
    if (!social) return '';

    let links = '';
    if (social.linkedin) {
      links += `<a href="${social.linkedin}" target="_blank" class="social-link"><i class="fab fa-linkedin-in"></i></a>`;
    }
    if (social.github) {
      links += `<a href="${social.github}" target="_blank" class="social-link"><i class="fab fa-github"></i></a>`;
    }
    if (social.twitter) {
      links += `<a href="${social.twitter}" target="_blank" class="social-link"><i class="fab fa-twitter"></i></a>`;
    }

    return links;
  }

  initSwiper() {
    this.swiper = new Swiper('.teams-swiper', {
      // Enable responsive breakpoints
      breakpoints: {
        // Mobile first
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        // Tablet
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        // Desktop
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        // Large Desktop
        1200: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },

      // Navigation arrows
      navigation: {
        nextEl: '.teams-swiper-button-next',
        prevEl: '.teams-swiper-button-prev',
      },

      // Pagination dots
      pagination: {
        el: '.teams-swiper-pagination',
        clickable: true,
        dynamicBullets: true,
      },

      // Auto-play (optional)
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },

      // Loop
      loop: true,

      // Smooth transitions
      effect: 'slide',
      speed: 600,

      // Touch and mouse events
      grabCursor: true,

      // Responsive behavior
      watchOverflow: true,
      watchSlidesProgress: true,

      // Accessibility
      a11y: {
        enabled: true,
        prevSlideMessage: 'Previous team member',
        nextSlideMessage: 'Next team member',
        firstSlideMessage: 'This is the first team member',
        lastSlideMessage: 'This is the last team member',
      },
    });
  }

  // Method to add new team member dynamically
  addTeamMember(member) {
    teamMembers.push(member);
    this.renderTeamMembers();
    this.swiper.update();
  }

  // Method to remove team member
  removeTeamMember(memberId) {
    const index = teamMembers.findIndex((member) => member.id === memberId);
    if (index > -1) {
      teamMembers.splice(index, 1);
      this.renderTeamMembers();
      this.swiper.update();
    }
  }

  // Method to update team member
  updateTeamMember(memberId, updates) {
    const member = teamMembers.find((member) => member.id === memberId);
    if (member) {
      Object.assign(member, updates);
      this.renderTeamMembers();
      this.swiper.update();
    }
  }
}
