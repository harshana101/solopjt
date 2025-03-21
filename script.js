document.addEventListener('DOMContentLoaded', function () {
  // All translations organized by section
  const translations = {
    // Navigation
    navigation: {
      homeNav: "මුල් පිටුව",
      principalNav: "විදුහල්පති",
      teachersNav: "ගුරුවරු",
      historyNav: "ඉතිහාසය",
      programsNav: "වැඩසටහන්",
      officeNav: "කාර්යාල වේලාවන්",
      contactNav: "සම්බන්ධ වන්න"
    },

    // Hero Section
    hero: {
      title: "",
      subtitle: "",
      learnMoreBtn: "තව දැනගන්න"
    },

    // Principal Section
    principal: {
      sectionTitle: "විදුහල්පතිතුමියගේ පණිවිඩය",
      name: "ඩබ්.ඩී.ඩී.එම්.ප්‍රේමතිලක මිය",
      message: "බප/ හො/ පොලේගොඩ මහා විද්‍යාලයේ වෙබ් අඩවියට ඔබව සාදරයෙන් පිළිගැනීමට ලැබීම මහත් සතුටකි. අපගේ පාසල සිසුන්ට ඔවුන්ගේ පූර්ණ විභවතාවයන් ළඟා කර ගත හැකි සහායක හා පොහොසත් පරිසරයක් සැපයීමට කැපවී සිටී. අපි අධ්‍යාපනික විශිෂ්ටත්වය පමණක් නොව, චරිතය, නිර්මාණශීලීත්වය සහ සමාජ වගකීම ද පෝෂණය කිරීමට විශ්වාස කරමු.",
      message2: "අපගේ කැපවූ ගුරුවරුන් හා කාර්ය මණ්ඩලය සෑම සිසුවෙකුටම ඔවුන්ට සාර්ථක වීමට අවශ්‍ය මඟ පෙන්වීම හා සහාය ලැබෙන බවට සහතික කිරීම සඳහා නොපසුබට වෙහෙසක් දරයි. අධ්‍යාපනය සහයෝගීතා ක්‍රියාවලියක් බව අප විශ්වාස කරන බැවින් දෙමාපියන් සහ පුළුල් ප්‍රජාව සමඟ අපගේ ශක්තිමත් හවුල්කාරිත්වය ගැන අපි ආඩම්බර වෙමු.",
      quote: "\"අධ්‍යාපනය යනු ලෝකය වෙනස් කිරීමට ඔබට භාවිතා කළ හැකි බලවත්ම ආයුධයයි.\" - නෙල්සන් මැන්ඩෙලා"
    },

    // Teachers Section
    teachers: {
      sectionTitle: "නියෝජ්‍ය විදුහල්පතිවරුන්",
      viewAllBtn: "සියලුම ගුරුවරුන් බලන්න",
      deputyPrincipals: [
        {
          name: "රුවන් පී. කුමාර මයා",
          role: "නියෝජ්‍ය විදුහල්පති - අධ්‍යාපන සංවර්ධන"
        },
        {
          name: "දුශාන්ති දුලීකා මිය",
          role: "නියෝජ්‍ය විදුහල්පති - අධ්‍යාපන පරිපාලන"
        },
      ]
    },

    // History Section
    history: {
      sectionTitle: "අපගේ ඉතිහාසය",
      excerpt: "නිදර්ශන ඡේද යනු යම් ලියවිල්ලක හෝ පාඨයක ස්වභාවය පෙන්වීමට භාවිතා කරන ලියවිලි කොටස් වේ. මෙම නිදර්ශන ඡේද මගින් ලේඛකයාට තම ලිවීමේ විලාසය, භාෂා භාවිතය, සහ අදහස් සංවිධානය කිරීමේ ක්‍රමය පෙන්විය හැකිය.",
      excerpt2: "නිදර්ශන ඡේද වල විවිධ ආකාර ඇති අතර, ඒවා විස්තරාත්මක, කථනාත්මක, තර්කානුකූල, හෝ සංසන්දනාත්මක විය හැකිය. මෙම ඡේද මගින් පාඨකයාට ලේඛකයාගේ ලිවීමේ හැකියාව සහ අදහස් ප්‍රකාශ කිරීමේ ක්‍රමය පිළිබඳ යම් අවබෝධයක් ලබා ගත හැකිය. නිදර්ශන ඡේද නිර්මාණය කිරීම සඳහා හොඳ අවබෝධයක් සහ භාෂාව පිළිබඳ ගැඹුරු දැනුමක් අවශ්‍ය වේ.",
      readMoreBtn: "තවත් කියවන්න",
      listenTitle: "අපගේ ඉතිහාසය අසන්න"
    },

    // Programs & Events Section
    programs: {
      sectionTitle: "වැඩසටහන් සහ උත්සව",
      pastEventsTab: "පසුගිය උත්සව",
      upcomingEventsTab: "ඉදිරි උත්සව",
      events: [
        {
          title: "වට්'ස් නිව්",
          description: "ඹබේ දැක්ම යාවත්කාලීන කරන්න."
        },
        {
          title: "වට්'ස් නිව්",
          description: "ඹබේ දැක්ම යාවත්කාලීන කරන්න."
        },
        {
          title: "වට්'ස් නිව්",
          description: "ඹබේ දැක්ම යාවත්කාලීන කරන්න."
        }
      ]
    },

    // Office Hours Section
    officeHours: {
      title: "කාර්යාල වේලාවන්",
      servicesTitle: "පරිපාලන සේවා",
      days: {
        monday: "සඳුදා",
        tuesday: "අඟහරුවාදා",
        wednesday: "බදාදා",
        thursday: "බ්‍රහස්පතින්දා",
        friday: "සිකුරාදා",
        weekend: "සති අන්ත සහ නිවාඩු දින"
      },
      times: {
        weekday: "පෙ.ව 7:30 - ප.ව 1:30",
        friday: "පෙ.ව 7:30 - ප.ව 1:30",
        weekend: "වසා ඇත"
      }
    },

    // Footer Section
    footer: {
      contactTitle: "අප අමතන්න",
      address: "කුරුඳුවත්ත පාර, පොලේගොඩ, මහගම.",
      phone: "+94 123 456 789",
      email: "info@polegodamv.edu.lk",
      quickLinksTitle: "ඉක්මන් සබැඳි",
      home: "මුල් පිටුව",
      about: "අප ගැන",
      faculty: "ගුරු මණ්ඩලය",
      events: "උත්සව",
      fullHistory: "සම්පූර්ණ ඉතිහාසය",
      connectTitle: "අප සමඟ සම්බන්ධ වන්න",
      copyright: "© 2025 බප/ හො/ පොලේගොඩ මහා විද්‍යාලය. සියලුම හිමිකම් ඇවිරිණි."
    }
  };

  // English translations - adding basic translations that were in the complete-script.js
  const englishTranslations = {
    hero: {
      title: '',
      subtitle: ''
    }
  };

  // Function to apply Sinhala translations
  function applySinhalaTranslations() {

    // Navigation
    document.getElementById('home-nav').textContent = translations.navigation.homeNav;
    document.getElementById('principal-nav').textContent = translations.navigation.principalNav;
    document.getElementById('teachers-nav').textContent = translations.navigation.teachersNav;
    document.getElementById('history-nav').textContent = translations.navigation.historyNav;
    document.getElementById('programs-nav').textContent = translations.navigation.programsNav;
    document.getElementById('office-nav').textContent = translations.navigation.officeNav;
    document.getElementById('contact-nav').textContent = translations.navigation.contactNav;

    // Hero Section
    document.getElementById('hero-title').textContent = translations.hero.title;
    document.getElementById('hero-subtitle').textContent = translations.hero.subtitle;
    document.getElementById('learn-more-btn').textContent = translations.hero.learnMoreBtn;

    // Principal Section
    document.getElementById('principal-section-title').textContent = translations.principal.sectionTitle;
    document.getElementById('principal-name').textContent = translations.principal.name;
    document.getElementById('principal-message').textContent = translations.principal.message;
    document.getElementById('principal-message-2').textContent = translations.principal.message2;
    document.getElementById('principal-quote').textContent = translations.principal.quote;

    // Teachers Section
    document.getElementById('teachers-section-title').textContent = translations.teachers.sectionTitle;
    document.getElementById('view-all-teachers-btn').textContent = translations.teachers.viewAllBtn;

    // Apply translations to deputy principals
    const teacherInfoElements = document.querySelectorAll('.teacher-info');
    if (teacherInfoElements.length >= 1) {
      for (let i = 0; i < Math.min(teacherInfoElements.length, translations.teachers.deputyPrincipals.length); i++) {
        const teacherInfo = teacherInfoElements[i];
        const h3 = teacherInfo.querySelector('h3');
        const p = teacherInfo.querySelector('p');

        if (h3) h3.textContent = translations.teachers.deputyPrincipals[i].name;
        if (p) p.textContent = translations.teachers.deputyPrincipals[i].role;
      }
    }

    // History Section
    document.getElementById('history-section-title').textContent = translations.history.sectionTitle;
    document.getElementById('history-excerpt').textContent = translations.history.excerpt;
    document.getElementById('history-excerpt-2').textContent = translations.history.excerpt2;
    document.getElementById('read-more-history-btn').textContent = translations.history.readMoreBtn;
    document.getElementById('listen-history-title').textContent = translations.history.listenTitle;

    // Programs & Events Section
    document.getElementById('programs-section-title').textContent = translations.programs.sectionTitle;
    document.getElementById('past-events-tab').textContent = translations.programs.pastEventsTab;
    document.getElementById('upcoming-events-tab').textContent = translations.programs.upcomingEventsTab;

    // Apply translations to carousel items
    const carouselCaptions = document.querySelectorAll('.carousel-caption');
    if (carouselCaptions.length >= 3) {
      for (let i = 0; i < Math.min(carouselCaptions.length, translations.programs.events.length); i++) {
        const caption = carouselCaptions[i];
        const h3 = caption.querySelector('h3');
        const p = caption.querySelector('p');

        if (h3) h3.textContent = translations.programs.events[i].title;
        if (p) p.textContent = translations.programs.events[i].description;
      }
    }

    // Office Hours Section
    document.getElementById('office-hours-title').textContent = translations.officeHours.title;
    document.getElementById('office-services-title').textContent = translations.officeHours.servicesTitle;
    document.getElementById('monday').textContent = translations.officeHours.days.monday;
    document.getElementById('tuesday').textContent = translations.officeHours.days.tuesday;
    document.getElementById('wednesday').textContent = translations.officeHours.days.wednesday;
    document.getElementById('thursday').textContent = translations.officeHours.days.thursday;
    document.getElementById('friday').textContent = translations.officeHours.days.friday;
    document.getElementById('weekend').textContent = translations.officeHours.days.weekend;

    // Update office hours times
    const timeElements = document.querySelectorAll('.hours-list li .time');
    if (timeElements.length >= 6) {
      for (let i = 0; i < 4; i++) { // Monday to Thursday
        timeElements[i].textContent = translations.officeHours.times.weekday;
      }
      timeElements[4].textContent = translations.officeHours.times.friday; // Friday
      timeElements[5].textContent = translations.officeHours.times.weekend; // Weekend
    }

    // Footer Section
    document.getElementById('contact-us-title').textContent = translations.footer.contactTitle;
    document.getElementById('address').textContent = translations.footer.address;
    document.getElementById('phone').textContent = translations.footer.phone;
    document.getElementById('email').textContent = translations.footer.email;
    document.getElementById('quick-links-title').textContent = translations.footer.quickLinksTitle;
    document.getElementById('home-link').textContent = translations.footer.home;
    document.getElementById('about-link').textContent = translations.footer.about;
    document.getElementById('faculty-link').textContent = translations.footer.faculty;
    document.getElementById('events-link').textContent = translations.footer.events;
    document.getElementById('full-history-link').textContent = translations.footer.fullHistory;
    document.getElementById('connect-title').textContent = translations.footer.connectTitle;
    document.getElementById('copyright-text').textContent = translations.footer.copyright;
  }

  // Function to apply English translations
  function applyEnglishTranslations() {
    // This would be more comprehensive in a real application
    // For now, just handling the elements explicitly mentioned in complete-script.js
    document.getElementById('hero-title').textContent = englishTranslations.hero.title;
    document.getElementById('hero-subtitle').textContent = englishTranslations.hero.subtitle;
    // Additional English translations would be applied here
  }

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
    }, 5000);

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
          // This would require additional HTML elements for different content
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

  // Language switcher
  const enBtn = document.getElementById('en-btn');
  const siBtn = document.getElementById('si-btn');

  if (enBtn && siBtn) {
    // English button functionality
    enBtn.addEventListener('click', function () {
      enBtn.classList.add('active');
      siBtn.classList.remove('active');

      // Apply English translations
      applyEnglishTranslations();
    });

    // Sinhala button functionality
    siBtn.addEventListener('click', function () {
      siBtn.classList.add('active');
      enBtn.classList.remove('active');

      // Apply Sinhala translations
      applySinhalaTranslations();
    });
  }
});

// Alert Messesage
// Function to show the alert
function showAlert() {
  document.getElementById('alertBox').style.display = 'block';
  document.getElementById('overlay').style.display = 'block';
}

// Function to close the alert
function closeAlert() {
  document.getElementById('alertBox').style.display = 'none';
  document.getElementById('overlay').style.display = 'none';
}

// Close alert when clicking outside
document.getElementById('overlay').addEventListener('click', closeAlert);


// Programs Section - Added website launch as first item
const programsData = [
  {
    id: 0,
    name: "Website Launch",
    role: "A New Digital Experience Coming Soon",
    description: "Experience our innovative school programs in an interactive digital showcase. Join us for the official launch event and explore our educational excellence online.",
    details: [
      "Interactive Program Showcases",
      "Modern, Responsive Design",
      "Immersive Educational Content",
      "Launch Event with Special Presentations"
    ],
    isLaunchAnnouncement: true
  },
  {
    id: 1,
    name: "STEM Excellence Program",
    role: "Science & Technology",
    description: "Our STEM Excellence Program provides students with hands-on experience in science, technology, engineering, and mathematics through innovative projects and real-world applications.",
    details: [
      "Advanced robotics and coding workshops",
      "Annual science fair with industry partnerships",
      "Field trips to research facilities and tech companies",
      "College-level laboratory experiences"
    ]
  },
  {
    id: 2,
    name: "Creative Arts Initiative",
    role: "Visual & Performing Arts",
    description: "The Creative Arts Initiative nurtures artistic talent through comprehensive visual arts, music, theater, and dance programs that encourage self-expression and cultural appreciation.",
    details: [
      "Professional-grade art studio and gallery space",
      "Seasonal performances and community showcases",
      "Artist-in-residence mentorship opportunities",
      "Digital media and production courses"
    ]
  },
  {
    id: 3,
    name: "Global Citizens Program",
    role: "Languages & Cultural Studies",
    description: "Students in our Global Citizens Program develop multilingual proficiency and cultural competence through immersive experiences, exchange programs, and internationally-focused curriculum.",
    details: [
      "Five language options including Mandarin and Arabic",
      "International exchange partnerships with 12 countries",
      "Model UN and global affairs competitions",
      "Cultural celebration events throughout the year"
    ]
  },
  {
    id: 4,
    name: "Leadership Academy",
    role: "Character & Community Development",
    description: "The Leadership Academy builds tomorrow's leaders through service learning, ethical development, and practical leadership experiences that prepare students for civic engagement.",
    details: [
      "Student government and peer mentoring programs",
      "Community service requirements with reflection",
      "Annual leadership retreat and workshops",
      "Partnerships with local businesses and organizations"
    ]
  },
  {
    id: 5,
    name: "College & Career Pathways",
    role: "Academic & Professional Preparation",
    description: "Our College & Career Pathways program offers specialized tracks with industry certifications, internships, and college-level coursework to prepare students for their future careers.",
    details: [
      "Dual enrollment options with local universities",
      "Career shadowing and internship placements",
      "Industry certification opportunities",
      "Comprehensive college counseling services"
    ]
  }
];

// Variables
let currentSlideIndex = 0;
let isPlaying = false;
let slideInterval;
const slideIntervalTime = 5000; // 5 seconds between slides

// DOM Elements
const slideTitle = document.getElementById('slideTitle');
const slideRole = document.getElementById('slideRole');
const slideDescription = document.getElementById('slideDescription');
const slideDetails = document.getElementById('slideDetails');
const slideOverlay = document.getElementById('slideOverlay');
const websiteLaunchBadge = document.getElementById('websiteLaunchBadge');
const countdownContainer = document.getElementById('countdownContainer');
const thumbnailsContainer = document.getElementById('thumbnailsContainer');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const playPauseButton = document.getElementById('playPauseButton');
const playPauseIcon = document.getElementById('playPauseIcon');

// Function to show a specific slide
function showSlide(index) {
  // Update active slide index
  currentSlideIndex = index;

  // Remove active class from all backgrounds
  document.querySelectorAll('.slide-background').forEach(bg => {
    bg.classList.remove('active');
  });

  // Add active class to current background
  document.getElementById(`slide-bg-${index}`).classList.add('active');

  // Update slide content
  const program = programsData[index];
  slideTitle.textContent = program.name;
  slideTitle.style.animation = 'none';
  slideRole.style.animation = 'none';
  slideDescription.style.animation = 'none';

  // Force reflow to restart animations
  void slideTitle.offsetWidth;
  void slideRole.offsetWidth;
  void slideDescription.offsetWidth;

  slideTitle.style.animation = 'fadeIn 0.8s ease-in-out';
  slideRole.style.animation = 'fadeIn 0.8s ease-in-out 0.2s forwards';
  slideDescription.style.animation = 'fadeIn 0.8s ease-in-out 0.3s forwards';

  slideRole.textContent = program.role;
  slideDescription.textContent = program.description;

  // Show/hide special website launch elements
  if (program.isLaunchAnnouncement) {
    websiteLaunchBadge.style.display = 'inline-block';
    countdownContainer.style.display = 'flex';
    slideOverlay.classList.add('launch-overlay');
  } else {
    websiteLaunchBadge.style.display = 'none';
    countdownContainer.style.display = 'none';
    slideOverlay.classList.remove('launch-overlay');
  }

  // Clear previous details
  slideDetails.innerHTML = '';

  // Add new details with staggered animation
  program.details.forEach((detail, i) => {
    const detailItem = document.createElement('div');
    detailItem.className = 'detail-item';
    detailItem.style.animationDelay = `${0.4 + (i * 0.1)}s`;

    const marker = document.createElement('div');
    marker.className = 'detail-marker';

    const text = document.createElement('div');
    text.className = 'detail-text';
    text.textContent = detail;

    detailItem.appendChild(marker);
    detailItem.appendChild(text);
    slideDetails.appendChild(detailItem);
  });

  // Update active thumbnail
  document.querySelectorAll('.thumbnail').forEach((thumb, i) => {
    if (i === index) {
      thumb.classList.add('active');
    } else {
      thumb.classList.remove('active');
    }
  });
}

// Function to go to the next slide
function nextSlide() {
  let nextIndex = currentSlideIndex + 1;
  if (nextIndex >= programsData.length) {
    nextIndex = 0;
  }
  showSlide(nextIndex);
}

// Function to go to the previous slide
function prevSlide() {
  let prevIndex = currentSlideIndex - 1;
  if (prevIndex < 0) {
    prevIndex = programsData.length - 1;
  }
  showSlide(prevIndex);
}

// Function to toggle autoplay
function toggleAutoplay() {
  if (isPlaying) {
    clearInterval(slideInterval);
    playPauseIcon.innerHTML = `
                  <polygon points="5,3 19,12 5,21"></polygon>
              `;
  } else {
    slideInterval = setInterval(nextSlide, slideIntervalTime);
    playPauseIcon.innerHTML = `
                  <rect x="6" y="4" width="4" height="16"></rect>
                  <rect x="14" y="4" width="4" height="16"></rect>
              `;
  }
  isPlaying = !isPlaying;
}

// Initialize thumbnails
function initThumbnails() {
  programsData.forEach((program, index) => {
    const thumbnail = document.createElement('div');
    thumbnail.className = `thumbnail thumbnail-${index}`;
    if (index === currentSlideIndex) {
      thumbnail.classList.add('active');
    }

    const thumbnailImage = document.createElement('div');
    thumbnailImage.className = 'thumbnail-image';

    const overlay = document.createElement('div');
    overlay.className = 'thumbnail-overlay';

    const title = document.createElement('div');
    title.className = 'thumbnail-title';
    title.textContent = program.name;

    overlay.appendChild(title);
    thumbnail.appendChild(thumbnailImage);
    thumbnail.appendChild(overlay);

    // Add click event
    thumbnail.addEventListener('click', () => {
      showSlide(index);
      if (isPlaying) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, slideIntervalTime);
      }
    });

    thumbnailsContainer.appendChild(thumbnail);
  });
}

// Set up the countdown timer for the website launch
function setupCountdown() {
  // Set the countdown date (30 days from now for demo purposes)
  const countdownDate = new Date();
  countdownDate.setDate(countdownDate.getDate() + 30);

  // Update the countdown every 1 second
  const countdownTimer = setInterval(function () {
    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the countdown date
    const distance = countdownDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result
    document.getElementById("daysEl").textContent = days.toString().padStart(2, '0');
    document.getElementById("hoursEl").textContent = hours.toString().padStart(2, '0');
    document.getElementById("minsEl").textContent = minutes.toString().padStart(2, '0');
    document.getElementById("secsEl").textContent = seconds.toString().padStart(2, '0');

    // If the countdown is finished, display expired message
    if (distance < 0) {
      clearInterval(countdownTimer);
      document.getElementById("daysEl").textContent = "00";
      document.getElementById("hoursEl").textContent = "00";
      document.getElementById("minsEl").textContent = "00";
      document.getElementById("secsEl").textContent = "00";
    }
  }, 1000);
}

// Set up event listeners
prevButton.addEventListener('click', () => {
  prevSlide();
  if (isPlaying) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, slideIntervalTime);
  }
});

nextButton.addEventListener('click', () => {
  nextSlide();
  if (isPlaying) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, slideIntervalTime);
  }
});

playPauseButton.addEventListener('click', toggleAutoplay);

// Initialize slideshow
function init() {
  initThumbnails();
  setupCountdown();
  showSlide(0); // Start with the Website Launch slide
  // Start autoplay by default
  toggleAutoplay();
}

// Start the slideshow when the page loads
window.addEventListener('load', init);