// Testimonial slider functionality
document.addEventListener('DOMContentLoaded', () => {
  const testimonialSlides = document.querySelectorAll('.testimonial-slide');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.getElementById('prev-testimonial');
  const nextBtn = document.getElementById('next-testimonial');
  
  let currentSlide = 0;
  const slidesCount = testimonialSlides.length;
  
  // Initialize autoplay
  let autoplayInterval = setInterval(nextSlide, 5000);
  
  // Show slide by index
  function showSlide(index) {
    // Reset active class
    testimonialSlides.forEach(slide => {
      slide.classList.remove('active');
    });
    
    dots.forEach(dot => {
      dot.classList.remove('active');
    });
    
    // Add active class to current slide and dot
    testimonialSlides[index].classList.add('active');
    dots[index].classList.add('active');
    
    // Reset autoplay
    clearInterval(autoplayInterval);
    autoplayInterval = setInterval(nextSlide, 5000);
  }
  
  // Next slide
  function nextSlide() {
    currentSlide = (currentSlide + 1) % slidesCount;
    showSlide(currentSlide);
  }
  
  // Previous slide
  function prevSlide() {
    currentSlide = (currentSlide - 1 + slidesCount) % slidesCount;
    showSlide(currentSlide);
  }
  
  // Event listeners
  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);
  
  // Dot navigation
  dots.forEach(dot => {
    dot.addEventListener('click', function() {
      const slideIndex = parseInt(this.getAttribute('data-index'));
      currentSlide = slideIndex;
      showSlide(currentSlide);
    });
  });
  
  // Pause autoplay on hover
  const testimonialSlider = document.getElementById('testimonial-slider');
  testimonialSlider.addEventListener('mouseenter', () => {
    clearInterval(autoplayInterval);
  });
  
  testimonialSlider.addEventListener('mouseleave', () => {
    autoplayInterval = setInterval(nextSlide, 5000);
  });
  
  // Initialize
  showSlide(currentSlide);
});