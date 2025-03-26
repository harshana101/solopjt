// animator.js
document.addEventListener('DOMContentLoaded', function () {
  // Animation on scroll
  const animatedElements = document.querySelectorAll('.animate-fade-up, .animate-fade-right, .animate-fade-left');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.2 });

  animatedElements.forEach(el => {
    observer.observe(el);
  });

  // Slideshow functionality
  let slideIndex = 1;
  let isEnglish = true;
  const totalSlides = 4;

  // Show the initial slide
  showSlide(slideIndex);

  // Next/previous controls
  function changeSlide(n) {
    showSlide(slideIndex += n);
  }

  // Thumbnail image controls
  function currentSlide(n) {
    showSlide(slideIndex = n);
  }

  function showSlide(n) {
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");

    // Loop handling logic
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove("active");
    }

    // Remove active class from all dots
    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove("active");
    }

    // Show the current slide and activate the dot
    slides[slideIndex - 1].classList.add("active");
    dots[slideIndex - 1].classList.add("active");

    // Reset animations for the current slide
    resetAnimations(slides[slideIndex - 1]);
  }

  // Reset the animations when changing slides
  function resetAnimations(slide) {
    const animatedElements = slide.querySelectorAll(".slide-subtitle, .slide-description, .detail-item, .countdown-container");

    animatedElements.forEach(element => {
      element.style.animation = 'none';
      element.offsetHeight; // Trigger reflow

      if (element.classList.contains('slide-subtitle')) {
        element.style.animation = 'fadeIn 0.8s ease-in-out 0.2s forwards';
      } else if (element.classList.contains('slide-description')) {
        element.style.animation = 'fadeIn 0.8s ease-in-out 0.3s forwards';
      } else if (element.classList.contains('countdown-container')) {
        element.style.animation = 'fadeIn 0.8s ease-in-out 0.5s forwards';
      }
    });

    // Apply staggered animation to detail items
    const detailItems = slide.querySelectorAll('.detail-item');
    detailItems.forEach((item, index) => {
      item.style.animation = `slideUp 0.5s ease-out ${0.4 + (index * 0.1)}s forwards`;
    });
  }

  // Auto slide functionality
  let slideInterval = setInterval(() => {
    changeSlide(1);
  }, 4000);

  // Pause auto slide on hover
  document.querySelector('.slideshow-container').addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
  });

  // Resume auto slide on mouse leave
  document.querySelector('.slideshow-container').addEventListener('mouseleave', () => {
    slideInterval = setInterval(() => {
      changeSlide(1);
    }, 4000);
  });

  // Countdown timer functionality for website launch
const launchDate = new Date('2025-04-04T08:30:00').getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = launchDate - now;

  // Time calculations
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Update elements
  document.getElementById('daysEl').textContent = days < 10 ? '0' + days : days;
  document.getElementById('hoursEl').textContent = hours < 10 ? '0' + hours : hours;
  document.getElementById('minsEl').textContent = minutes < 10 ? '0' + minutes : minutes;
  document.getElementById('secsEl').textContent = seconds < 10 ? '0' + seconds : seconds;

  // If countdown is finished
  if (distance < 0) {
    clearInterval(countdownTimer);
    document.getElementById('daysEl').textContent = '00';
    document.getElementById('hoursEl').textContent = '00';
    document.getElementById('minsEl').textContent = '00';
    document.getElementById('secsEl').textContent = '00';
  }
}

// Update countdown every second
const countdownTimer = setInterval(updateCountdown, 1000);

// Initialize countdown
updateCountdown();



  // Mobile detection and adjustments
  function checkMobile() {
    if (window.innerWidth <= 768) {
      // Adjust for mobile view
      const slideContents = document.querySelectorAll('.slide-content');
      slideContents.forEach(content => {
        content.style.paddingTop = '80px';
      });
    } else {
      // Reset for desktop view
      const slideContents = document.querySelectorAll('.slide-content');
      slideContents.forEach(content => {
        content.style.paddingTop = '0';
      });
    }
  }

  // Check on load and resize
  window.addEventListener('load', checkMobile);
  window.addEventListener('resize', checkMobile);

  // Handle touch events for mobile swiping
  let touchStartX = 0;
  let touchEndX = 0;

  document.querySelector('.slideshow-container').addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
  });

  document.querySelector('.slideshow-container').addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });

  function handleSwipe() {
    const threshold = 50; // Minimum distance to be considered a swipe

    if (touchEndX < touchStartX - threshold) {
      // Swipe left - show next slide
      changeSlide(1);
    }

    if (touchEndX > touchStartX + threshold) {
      // Swipe right - show previous slide
      changeSlide(-1);
    }
  }

  // Initialize
  showSlide(1);
});
