// Main.js - Main entry point that initializes all components

// Initialize the application when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize language switcher
  if (window.initializeLanguageSwitcher) {
    window.initializeLanguageSwitcher();
  }
  
  // Initialize theme
  if (window.initializeTheme) {
    window.initializeTheme();
  }
  
  // Initialize dropdown options
  if (window.initializeDropdownOptions) {
    window.initializeDropdownOptions();
  }
  
  // Initialize search functionality
  if (window.initializeSearch) {
    window.initializeSearch();
  }
  
  // Apply initial fade-in animation to all teacher cards
  const teacherCards = document.querySelectorAll('.teacher-card');
  if (window.applyFadeInAnimation && teacherCards.length > 0) {
    window.applyFadeInAnimation(teacherCards);
  }
});
