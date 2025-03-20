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