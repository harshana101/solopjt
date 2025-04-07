document.addEventListener('DOMContentLoaded', function() {
    const scene = document.querySelector('.poson-scene');
    const sceneWidth = scene.offsetWidth;
    const sceneHeight = scene.offsetHeight;
    
    // Create fireflies
    const firefliesCount = 30; // More fireflies as requested
    for (let i = 0; i < firefliesCount; i++) {
      const firefly = document.createElement('div');
      firefly.className = 'firefly';
      
      // Random position
      const randomX = Math.floor(Math.random() * sceneWidth);
      const randomY = Math.floor(Math.random() * sceneHeight);
      firefly.style.left = randomX + 'px';
      firefly.style.top = randomY + 'px';
      
      // Random animation delay
      const randomDelay = Math.random() * 5;
      firefly.style.animationDelay = randomDelay + 's';
      
      // Random size
      const randomSize = Math.random() * 3 + 2;
      firefly.style.width = randomSize + 'px';
      firefly.style.height = randomSize + 'px';
      
      // Random brightness
      const randomBrightness = Math.random() * 0.5 + 0.5;
      firefly.style.opacity = randomBrightness;
      
      scene.appendChild(firefly);
    }
    
    // Interactive elements
    const monksRock = document.querySelector('.monks-rock');
    monksRock.addEventListener('mouseover', function() {
      this.style.filter = 'drop-shadow(0 0 15px rgba(255, 255, 255, 0.5))';
    });
    
    monksRock.addEventListener('mouseout', function() {
      this.style.filter = '';
    });
    
    const king = document.querySelector('.king');
    king.addEventListener('mouseover', function() {
      this.style.filter = 'drop-shadow(0 0 15px rgba(255, 215, 0, 0.5))';
    });
    
    king.addEventListener('mouseout', function() {
      this.style.filter = '';
    });
    
    const deer = document.querySelector('.deer');
    deer.addEventListener('click', function() {
      this.style.animationPlayState = 
        (this.style.animationPlayState === 'paused') ? 'running' : 'paused';
    });
    
    // Add subtle parallax effect
    scene.addEventListener('mousemove', function(e) {
      const mouseX = e.clientX / sceneWidth;
      const mouseY = e.clientY / sceneHeight;
      
      const monks = document.querySelector('.monks-rock');
      const kingElement = document.querySelector('.king');
      const deerElement = document.querySelector('.deer');
      const mangoElement = document.querySelector('.mango');
      
      const moveX = (mouseX - 0.5) * 10;
      const moveY = (mouseY - 0.5) * 5;
      
      monks.style.transform = `translateX(${moveX * -0.5}px)`;
      kingElement.style.transform = `translateX(${moveX * 0.3}px)`;
      deerElement.style.transform = `translateX(${moveX * 0.5}px)`;
      mangoElement.style.transform = `translate(${moveX * 0.2}px, ${moveY * 0.2 - 5}px)`;
    });
  });
