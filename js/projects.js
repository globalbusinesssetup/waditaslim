// Project filtering functionality
document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      const filterValue = button.getAttribute('data-filter');
      
      // Filter projects
      projectCards.forEach(card => {
        card.style.display = 'none';
        
        if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
          // Use a short timeout to enable a smooth transition
          setTimeout(() => {
            card.style.display = 'block';
            // Force repaint to enable animation
            void card.offsetWidth;
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 100);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
        }
      });
    });
  });
});