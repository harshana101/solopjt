    // Add some dynamic cloud movement
    document.addEventListener('DOMContentLoaded', function() {
      const clouds = document.querySelectorAll('.cloud');
      
      clouds.forEach(cloud => {
        // Randomize initial positions slightly
        const randomOffset = Math.random() * 10;
        cloud.style.transform = `translateY(${randomOffset}px)`;
        
        // Add slight random horizontal movement on hover
        cloud.addEventListener('mouseover', function() {
          const randomX = Math.random() * 10 - 5;
          this.style.transform = `translateX(${randomX}px)`;
        });
        
        cloud.addEventListener('mouseout', function() {
          this.style.transform = '';
        });
      });
      
      // Make dragon interactive
      const dragon = document.querySelector('.dragon');
      dragon.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.1)';
      });
      
      dragon.addEventListener('mouseout', function() {
        this.style.transform = '';
      });
    });