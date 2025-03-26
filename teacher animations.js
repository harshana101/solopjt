// Animations.js - Handles animations and theme switching

// Initialize theme preference
let darkTheme = localStorage.getItem('darkTheme') === 'true';

// Function to toggle theme
function toggleTheme() {
  darkTheme = !darkTheme;
  localStorage.setItem('darkTheme', darkTheme);

  // Toggle body class
  document.body.classList.toggle('dark-theme', darkTheme);

  // Update icon
  const themeIcon = document.querySelector('#themeToggle i');
  themeIcon.className = darkTheme ? 'fas fa-sun' : 'fas fa-moon';
}

// Function to apply fade-in animation to elements
function applyFadeInAnimation(elements, staggerDelay = 0.1) {
  if (!elements || elements.length === 0) return;
  
  Array.from(elements).forEach((element, index) => {
    // Reset animation
    element.style.animation = "none";
    
    // Trigger reflow
    void element.offsetWidth;
    
    // Apply animation with staggered delay
    setTimeout(() => {
      element.style.animation = `fadeIn 0.5s forwards`;
      element.style.animationDelay = (index * staggerDelay) + "s";
    }, 10);
  });
}

// Initialize theme settings
function initializeTheme() {
  // Apply theme preference
  document.body.classList.toggle('dark-theme', darkTheme);
  
  // Add theme toggle button and event listener
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    const themeIcon = themeToggle.querySelector('i');
    if (themeIcon) {
      themeIcon.className = darkTheme ? 'fas fa-sun' : 'fas fa-moon';
    }
    themeToggle.addEventListener('click', toggleTheme);
  }
}

// Expose functions for external use
window.toggleTheme = toggleTheme;
window.applyFadeInAnimation = applyFadeInAnimation;
window.initializeTheme = initializeTheme;
