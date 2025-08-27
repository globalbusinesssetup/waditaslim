// Animations
document.addEventListener('DOMContentLoaded', () => {
  // Initialize AOS (Animate on Scroll)
  initAOS();
  
  // Animate stats when in viewport
  animateStats();
});

// Custom implementation of AOS (Animate on Scroll)
function initAOS() {
  const elements = document.querySelectorAll('[data-aos]');
  
  const checkVisibility = () => {
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // If element is in viewport
      if (elementPosition.top < viewportHeight * 0.85) {
        element.classList.add('aos-animate');
      }
    });
  };
  
  // Add delay attribute based on data-aos-delay
  elements.forEach(element => {
    const delay = element.getAttribute('data-aos-delay');
    if (delay) {
      element.style.transitionDelay = `${delay}ms`;
    }
  });
  
  // Check visibility initially and on scroll
  window.addEventListener('scroll', checkVisibility);
  window.addEventListener('resize', checkVisibility);
  window.addEventListener('orientationchange', checkVisibility);
  
  // Initial check
  setTimeout(checkVisibility, 100);
}

// Animate stat counters when they come into view
function animateStats() {
  const stats = document.querySelectorAll('.stat-number');
  let animated = false;
  
  const isInViewport = element => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= window.innerHeight * 0.8 &&
      rect.bottom >= 0
    );
  };
  
  const animateCounter = stat => {
    const target = parseInt(stat.textContent);
    let count = 0;
    const duration = 2000; // ms
    const frameDuration = 1000 / 60; // 60fps
    const totalFrames = duration / frameDuration;
    let frame = 0;
    
    stat.textContent = '0';
    stat.classList.add('counting');
    
    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      count = Math.floor(progress * target);
      
      if (count >= target || frame >= totalFrames) {
        clearInterval(counter);
        stat.textContent = target + "+";
      } else {
        stat.textContent = count + "+";
      }
    }, frameDuration);
  };
  
  const checkStats = () => {
    if (!animated && isInViewport(stats[0])) {
      stats.forEach(animateCounter);
      animated = true;
    }
  };
  
  window.addEventListener('scroll', checkStats);
  
  // Initial check
  setTimeout(checkStats, 100);
}