    // Create twinkling stars
    document.addEventListener('DOMContentLoaded', function() {
      const headerContainer = document.querySelector('.header-container');
      
      // Create stars
      for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        // Random position
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        
        // Random size
        const size = Math.random() * 3 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        // Random animation delay
        star.style.animationDelay = `${Math.random() * 4}s`;
        
        headerContainer.appendChild(star);
      }
      
      // Make lanterns interactive
      const lanterns = document.querySelectorAll('.lantern');
      lanterns.forEach(lantern => {
        // Add slight swing effect on hover
        lantern.addEventListener('mouseover', function() {
          this.style.animation = 'none';
          this.style.transform = 'rotate(5deg)';
          setTimeout(() => {
            this.style.transform = 'rotate(-5deg)';
          }, 300);
          setTimeout(() => {
            this.style.transform = '';
            this.style.animation = '';
          }, 600);
        });
      });
      
      // Make Buddha element interactive
      const buddha = document.querySelector('.buddha');
      buddha.addEventListener('mouseover', function() {
        this.style.filter = 'drop-shadow(0 0 15px rgba(255, 215, 0, 1))';
        document.querySelector('.buddha-circle').style.opacity = '0.9';
        document.querySelector('.buddha-circle').style.transform = 'scale(1.5)';
      });
      
      buddha.addEventListener('mouseout', function() {
        this.style.filter = '';
        document.querySelector('.buddha-circle').style.opacity = '';
        document.querySelector('.buddha-circle').style.transform = '';
      });
      
      // Make moon interactive
      const moon = document.querySelector('.moon');
      moon.addEventListener('mouseover', function() {
        this.style.filter = 'drop-shadow(0 0 15px rgba(255, 255, 200, 1))';
        document.querySelector('.moon-shine').style.opacity = '0.9';
        document.querySelector('.moon-shine').style.transform = 'scale(1.5)';
      });
      
      moon.addEventListener('mouseout', function() {
        this.style.filter = '';
        document.querySelector('.moon-shine').style.opacity = '';
        document.querySelector('.moon-shine').style.transform = '';
      });
    });
