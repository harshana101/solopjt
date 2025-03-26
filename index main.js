// main.js
document.addEventListener('DOMContentLoaded', function () {
  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', function () {
      navLinks.classList.toggle('active');

      if (navLinks.classList.contains('active')) {
        mobileMenuBtn.innerHTML = '<i class="fas fa-times"></i>';
      } else {
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
      }
    });
  }

  // Smooth scrolling for navigation links
  const navScrollLinks = document.querySelectorAll('a[href^="#"]');

  navScrollLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');

      if (targetId !== '#') {
        e.preventDefault();

        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          // Close mobile menu if open
          if (navLinks && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
          }

          // Scroll to the target element
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Accounting for fixed header
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // Carousel functionality
  const carousel = document.getElementById('eventsCarousel');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  if (carousel && prevBtn && nextBtn) {
    const carouselItems = carousel.querySelectorAll('.carousel-item');
    let currentIndex = 0;
    const totalItems = carouselItems.length;

    function updateCarousel() {
      carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    prevBtn.addEventListener('click', function () {
      currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalItems - 1;
      updateCarousel();
    });

    nextBtn.addEventListener('click', function () {
      currentIndex = (currentIndex < totalItems - 1) ? currentIndex + 1 : 0;
      updateCarousel();
    });

    // Auto slide every 5 seconds
    let autoSlide = setInterval(function () {
      currentIndex = (currentIndex < totalItems - 1) ? currentIndex + 1 : 0;
      updateCarousel();
    }, 4000);

    // Stop auto slide on hover
    carousel.addEventListener('mouseenter', function () {
      clearInterval(autoSlide);
    });

    // Resume auto slide when mouse leaves
    carousel.addEventListener('mouseleave', function () {
      autoSlide = setInterval(function () {
        currentIndex = (currentIndex < totalItems - 1) ? currentIndex + 1 : 0;
        updateCarousel();
      }, 5000);
    });
  }

  // Tab functionality for Programs & Events section
  const tabBtns = document.querySelectorAll('.tab-btn');

  if (tabBtns.length > 0) {
    tabBtns.forEach(btn => {
      btn.addEventListener('click', function () {
        // Remove active class from all tabs
        tabBtns.forEach(tab => tab.classList.remove('active'));

        // Add active class to clicked tab
        this.classList.add('active');

        // You can add content switching logic here
        const tabType = this.dataset.tab;

        // Example: If you have different content for past and upcoming events
        if (tabType === 'past') {
          // Show past events content
        } else if (tabType === 'upcoming') {
          // Show upcoming events content
        }
      });
    });
  }

  // Audio player functionality
  const playBtn = document.getElementById('playBtn');
  const pauseBtn = document.getElementById('pauseBtn');
  const stopBtn = document.getElementById('stopBtn');

  // Create an audio element
  const audioElement = new Audio('');

  if (playBtn && pauseBtn && stopBtn) {
    playBtn.addEventListener('click', function () {
      audioElement.play();
    });

    pauseBtn.addEventListener('click', function () {
      audioElement.pause();
    });

    stopBtn.addEventListener('click', function () {
      audioElement.pause();
      audioElement.currentTime = 0;
    });
  }

  // Alert functionality
  function showAlert() {
    document.getElementById('alertBox').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
  }

  function closeAlert() {
    document.getElementById('alertBox').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
  }

  // Close alert when clicking outside
  document.getElementById('overlay').addEventListener('click', closeAlert);
});
