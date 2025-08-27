// Contact form functionality
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;
      
      // Basic validation
      if (!name || !email || !message) {
        showNotification('Please fill all required fields', 'error');
        return;
      }
      
      if (!isValidEmail(email)) {
        showNotification('Please enter a valid email address', 'error');
        return;
      }
      
      // In a real application, you would send this data to a server
      // For this demo, we'll just show a success message
      showNotification('Your message has been sent successfully!', 'success');
      
      // Reset form
      contactForm.reset();
    });
  }
  
  // Validate email format
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  // Show notification
  function showNotification(message, type = 'success') {
    // Check if a notification exists already and remove it
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
      existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
      <div class="notification-content">
        <span>${message}</span>
        <button class="notification-close">&times;</button>
      </div>
    `;
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Style the notification
    Object.assign(notification.style, {
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      zIndex: '1000',
      padding: '15px 20px',
      borderRadius: '5px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
      backgroundColor: type === 'success' ? 'var(--success-color)' : 'var(--error-color)',
      color: 'white',
      transition: 'all 0.3s ease',
      maxWidth: '300px'
    });
    
    // Add close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
      notification.remove();
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
      if (document.body.contains(notification)) {
        notification.style.opacity = '0';
        setTimeout(() => {
          if (document.body.contains(notification)) {
            notification.remove();
          }
        }, 300);
      }
    }, 5000);
    
    // Animate in
    setTimeout(() => {
      notification.style.transform = 'translateY(-10px)';
    }, 10);
  }
  
  // Newsletter subscription
  const footerForm = document.querySelector('.footer-form');
  if (footerForm) {
    footerForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = this.querySelector('input[type="email"]').value;
      
      if (!email || !isValidEmail(email)) {
        showNotification('Please enter a valid email address', 'error');
        return;
      }
      
      showNotification('You have successfully subscribed to our newsletter!', 'success');
      this.reset();
    });
  }
});