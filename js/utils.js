// Utility functions
document.addEventListener('DOMContentLoaded', () => {
  // Preload images for smoother transitions
  preloadImages();
  
  // Set current year in footer
  setCurrentYear();
});

// Preload images
function preloadImages() {
  const imageSources = [
    document.querySelectorAll('img[src]'),
    document.querySelectorAll('[style*="background-image"]')
  ];
  
  imageSources.forEach(sources => {
    sources.forEach(source => {
      const img = new Image();
      if (source.tagName === 'IMG') {
        img.src = source.src;
      } else {
        const style = window.getComputedStyle(source);
        const backgroundImage = style.backgroundImage;
        if (backgroundImage && backgroundImage !== 'none') {
          const urlMatch = backgroundImage.match(/url\(['"]?([^'"]+)['"]?\)/);
          if (urlMatch && urlMatch[1]) {
            img.src = urlMatch[1];
          }
        }
      }
    });
  });
}

// Set current year in copyright text
function setCurrentYear() {
  const yearElements = document.querySelectorAll('.copyright');
  const currentYear = new Date().getFullYear();
  
  yearElements.forEach(element => {
    element.innerHTML = element.innerHTML.replace(/\d{4}/, currentYear);
  });
}

// Debounce function to limit function calls
function debounce(func, wait = 20, immediate = true) {
  let timeout;
  return function() {
    const context = this, args = arguments;
    const later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

// Check if element is in viewport
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
    rect.bottom >= 0 &&
    rect.left <= (window.innerWidth || document.documentElement.clientWidth) &&
    rect.right >= 0
  );
}

// Utility to generate random number between min and max
function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Export utility functions
export {
  debounce,
  isElementInViewport,
  randomBetween
};