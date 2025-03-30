 // Function to simulate and update loading progress
 function simulateLoading() {
  const loadingBar = document.getElementById('loading-bar');
  const loadingPercentage = document.getElementById('loading-percentage');
  let progress = 0;
  
  // Simulate loading progress
  const interval = setInterval(() => {
      // Calculate new progress - faster at beginning, slower near end
      if (progress < 70) {
          progress += Math.random() * 10;
      } else {
          progress += Math.random() * 3;
      }
      
      // Cap at 99% until fully loaded
      if (progress > 99) {
          progress = 99;
          clearInterval(interval);
          
          // Wait for actual page load to complete
          if (document.readyState === 'complete') {
              completeLoading();
          } else {
              window.addEventListener('load', completeLoading);
          }
      }
      
      // Update loading bar and percentage
      const currentProgress = Math.floor(progress);
      loadingBar.style.width = currentProgress + '%';
      loadingPercentage.textContent = currentProgress + '%';
  }, 150);
}

// Function to complete loading animation and show content
function completeLoading() {
  const loadingBar = document.getElementById('loading-bar');
  const loadingPercentage = document.getElementById('loading-percentage');
  const loadingScreen = document.getElementById('loading-screen');
  const content = document.getElementById('content');
  
  // Set to 100%
  loadingBar.style.width = '100%';
  loadingPercentage.textContent = '100%';
  
  // Small delay to show 100% before hiding
  setTimeout(() => {
      // Fade out loading screen
      loadingScreen.style.opacity = '0';
      
      // Show content
      content.style.opacity = '1';
      
      // Remove loading screen from DOM after transition
      setTimeout(() => {
          loadingScreen.style.display = 'none';
      }, 500);
  }, 300);
}

// Start the loading simulation when the DOM is ready
document.addEventListener('DOMContentLoaded', simulateLoading);