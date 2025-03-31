// translator.js
document.addEventListener('DOMContentLoaded', function () {
  // All translations organized by section
  const translations = {
    // ... (paste the entire translations object from the original script)
    // Navigation
    navigation: {
      homeNav: "මුල් පිටුව",
      mvNav: "මෙහෙවර හා දැක්ම",
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

    // Mission-Vision Section
    mv: {
      sectionTitle: "මෙහෙවර හා දැක්ම",
      titlem: "අපගේ මෙහෙවර",
      textm: "නැණ නුවණින් යුත්, ආධ්‍යාත්මයෙන් පිරිපුන්, ස්ව ශක්තියෙන් නැගීසිටිය හැකි උදාර දරු පරපුරක් බිහිනිරීම අපගේ යුග මෙහෙවරයි.",
      titlev: "අපගේ දැක්ම",
      textv: "යහපත් කළමනාකරණය තුළින් ගුණාත්මක දරුවෙක්.."
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
      excerpt: "පොලේගොඩ මහා විද්‍යාලයේ දැනට පවතින වාර්තා අනුව පොලේගොඩ මහා විද්‍යාලය 1926 වසරේ ආරම්භ වී ඇත. ආරම්භ වන විට සිසුන් අට දෙනෙක් සහ ගුරුවරුන් තිදෙනෙකුගෙන් සමන්විත වූ අතර ආරම්භක විදුහල්පතිවරයා පී. සී. එම්. කුලරත්න මහතා විය. එතුමා දීර්ඝ කාලයක් මෙහි විදුහල්පතිවරයා ලෙස සේවය කර ඇත. ආරම්භක ශිෂ්‍යයා එතුමාගේ පුතු වූ සෝමපාල කුලරත්න මහතාය.",
      excerpt2: "අප පාසල ආරම්භයේ කුරුඳුවත්ත ප්‍රදේශයේ නිවසක පැවැති බවද 1929 වසරේ දී වර්තමාන පාසල පවතින ස්ථානයට රැගෙන ආ බවද පොතපතෙහි සඳහන් වේ. 1929 වසරේ වත්මන් පොලේගොඩ මහා විද්‍යාලය පවතින ස්ථානයේ සියක් නමකට සංඝගත දක්ෂිණාවක් ප්‍රධානය කොට ඉන් අනතුරුව පාසල ආරම්භ කර බව පැරණි වාර්තාවල ඇතුළත් වේ. ආරම්භයේ පොල් අතු මඩු තුනක් ඉගැන්වීම් සඳහා භාවිත කර ඇත.",
      readMoreBtn: "තවත් කියවන්න",
      listenTitle: "අපගේ ඉතිහාසය අසන්න"
    },

    // Programs
    programs: {
      sectionTitle: "වැඩසටහන් සහ උත්සව",
      slides: [
        {
          badge: "අලුත් දේ",
          title: "වෙබ් අඩවිය විවෘත කිරීම",
          subtitle: "නව ඩිජිටල් අත්දැකීමක් ඉක්මනින්",
          description: "අපගේ නවීන පාසල් වැඩසටහන් අන්තර්ක්‍රීය ඩිජිටල් ප්‍රදර්ශනයක් තුළින් අත්විඳින්න. නිල විවෘත කිරීමේ උත්සවයට සහභාගී වී අපගේ අධ්‍යාපනික සාර්ථකත්වය මාරු මාර්ගයෙන් තොරව අන්තර්ජාලයෙන් අන්තර්ක්‍රීයව බලා සිටින්න.",
          details: [
            "අන්තර්ක්‍රීය වැඩසටහන් ප්‍රදර්ශන",
            "නවීන, ප්‍රතිචාරාත්මක මෙවලම",
            "යාවත්කාලීන අධ්‍යාපනික අන්තර්ගත",
            "විශේෂ ඉදිරිපත් කිරීම් සහිත විවෘත කිරීමේ උත්සවය"
          ]
        },
        {
          badge: "ළඟ එන උත්සවය",
          title: "පොයා දින සංගීත වැඩසටහන",
          subtitle: "සංස්කෘතික උරුමය සංගීතය මඟින් සැමරීම",
          description: "පොයා දිනය සැමරීම සඳහා අපගේ බුද්ධිමත් සිසුන් විසින් සාරධර්ම සහ සමකාලීන සංගීත ප්‍රදර්ශනයට සහභාගී වන්න. පොදු සම්ප්‍රදායික මෙන්ම නවීන තාලයන් හරහා අපගේ සංස්කෘතික උරුමය අත්විදින්න.",
          details: [
            "සම්ප්‍රදායික වාද්‍ය ප්‍රදර්ශන",
            "බෞද්ධ ගී කොරස් ඉදිරිපත් කිරීම්",
            "සිසු තනි ප්‍රදර්ශන",
            "විශේෂ සඳු එළිය යටදී පැවැත්වෙන මාලිගාව"
          ]
        },
        {
          badge: "අධ්‍යාපනික සාර්ථකත්වය",
          title: "වාර්ෂික විද්‍යා ප්‍රදර්ශනය",
          subtitle: "සොයා දැනුම, නව්‍යකරණය, නිර්මාණය",
          description: "අපගේ වාර්ෂික විද්‍යා ප්‍රදර්ශනය සිසුන්ගේ රොෙබෝටික්, පරිසර විද්‍යාව, ජීව විද්‍යාව සහ භෞතික විද්‍යාව යන ක්ෂේත්‍රයන්හි වැඩ සටහන් පෙන්වයි. අනාගතයේ දැවැන්ත මනස් විසින් යම් සැබෑ ලෝක ගැටලු සඳහා නවෝත්පාදන විසඳුම් මෙම ප්‍රදර්ශනයේ දී දකින්න.",
          details: [
            "අන්තර්ක්‍රීය ප්‍රදර්ශන",
            "සිසුන් විසින් මෙහෙයවන පර්යේෂණ වැඩ සටහන්",
            "තාක්ෂණ නවෝත්පාදන",
            "විශ්ව විද්‍යාල නායකයන් විසින් විශේෂ කථා"
          ]
        },
        {
          badge: "ක්‍රීඩා",
          title: "අන්තර් නිවාස ක්‍රීඩා තරඟය",
          subtitle: "ශක්තිය, ආත්ම වීර්යය, ක්‍රීඩා සාරධර්ම",
          description: "අවුරුදු පාරම්පරික අන්තර් නිවාස ක්‍රීඩා තරඟය සියලුම පන්තිවල සිසුන් එක් රැස් කොට විවිධ ක්‍රීඩා තරඟයන්ට සහභාගි කරවයි. පිදුම් සහ පිටවුම් ව්‍යායාම සිට කණ්ඩායම් ක්‍රීඩා දක්වා, අපේ තරුණ ක්‍රීඩකයන්ගේ දැඩි අධිෂ්ඨානය සහ කණ්ඩායම් ආත්ම වීර්යය දකින්න.",
          details: [
            "පිදුම් සහ පිටවුම් ඉවන්",
            "කණ්ඩායම් ක්‍රීඩා තරඟ",
            "සüයිම් තරඟය",
            "සම්මාන ලැබීම් සහ සැමරුම්"
          ]
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

  // Function to apply Sinhala translations
  function applySinhalaTranslations() {
    // ... (paste the entire applySinhalaTranslations function from the original script)
    // Navigation
    document.getElementById('home-nav').textContent = translations.navigation.homeNav;
    document.getElementById('mv-nav').textContent = translations.navigation.mvNav;
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

    // Mission-Vision Section
    document.getElementById('mv-section-title').textContent = translations.mv.sectionTitle;
    document.getElementById('mv-titlem').textContent = translations.mv.titlem;
    document.getElementById('mv-textm').textContent = translations.mv.textm;
    document.getElementById('mv-titlev').textContent = translations.mv.titlev;
    document.getElementById('mv-textv').textContent = translations.mv.textv;

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

    // Update the Programs & Events section slides
    const programSlides = document.querySelectorAll('.slide');
    if (programSlides.length >= 4) {
      translations.programs.slides.forEach((slide, index) => {
        const currentSlide = programSlides[index];

        // Update badge
        const badge = currentSlide.querySelector('.badge');
        if (badge) badge.textContent = slide.badge;

        // Update title
        const title = currentSlide.querySelector('.slide-title');
        if (title) title.textContent = slide.title;

        // Update subtitle
        const subtitle = currentSlide.querySelector('.slide-subtitle');
        if (subtitle) subtitle.textContent = slide.subtitle;

        // Update description
        const description = currentSlide.querySelector('.slide-description');
        if (description) description.textContent = slide.description;

        // Update details
        const detailItems = currentSlide.querySelectorAll('.detail-text');
        if (detailItems.length >= slide.details.length) {
          slide.details.forEach((detail, detailIndex) => {
            detailItems[detailIndex].textContent = detail;
          });
        }
      });
    }
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
    // ... (paste the entire applyEnglishTranslations function from the original script)
    // Office Hours Section
    document.getElementById('office-hours-title').textContent = applyEnglishTranslations.officeHours.title;
    document.getElementById('office-services-title').textContent = applyEnglishTranslations.officeHours.servicesTitle;

    // Update days
    document.getElementById('monday').textContent = applyEnglishTranslations.officeHours.days.monday;
    document.getElementById('tuesday').textContent = applyEnglishTranslations.officeHours.days.tuesday;
    document.getElementById('wednesday').textContent = applyEnglishTranslations.officeHours.days.wednesday;
    document.getElementById('thursday').textContent = applyEnglishTranslations.officeHours.days.thursday;
    document.getElementById('friday').textContent = applyEnglishTranslations.officeHours.days.friday;
    document.getElementById('weekend').textContent = applyEnglishTranslations.officeHours.days.weekend;

    // Update office hours times
    const timeElements = document.querySelectorAll('.hours-list li .time');
    if (timeElements.length >= 6) {
      for (let i = 0; i < 4; i++) { // Monday to Thursday
        timeElements[i].textContent = applyEnglishTranslations.officeHours.times.weekday;
      }
      timeElements[4].textContent = applyEnglishTranslations.officeHours.times.friday; // Friday
      timeElements[5].textContent = englishTranslations.officeHours.times.weekend; // Weekend
    }

    // Footer Section
    document.getElementById('contact-us-title').textContent = englishTranslations.footer.contactTitle;
    document.getElementById('address').textContent = englishTranslations.footer.address;
    document.getElementById('phone').textContent = englishTranslations.footer.phone;
    document.getElementById('email').textContent = englishTranslations.footer.email;
    document.getElementById('quick-links-title').textContent = englishTranslations.footer.quickLinksTitle;

    // Update footer links
    document.getElementById('home-link').textContent = englishTranslations.footer.home;
    document.getElementById('about-link').textContent = englishTranslations.footer.about;
    document.getElementById('faculty-link').textContent = englishTranslations.footer.faculty;
    document.getElementById('events-link').textContent = englishTranslations.footer.events;
    document.getElementById('full-history-link').textContent = englishTranslations.footer.fullHistory;

    // Update footer connect title and copyright
    document.getElementById('connect-title').textContent = englishTranslations.footer.connectTitle;
    document.getElementById('copyright-text').textContent = englishTranslations.footer.copyright;

  }

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

  // Programs & Events tab handling
  const pastEventsTab = document.getElementById('past-events-tab');
  const upcomingEventsTab = document.getElementById('upcoming-events-tab');
  const pastEventsContent = document.getElementById('past-events-content');
  const upcomingEventsContent = document.getElementById('upcoming-events-content');

  if (pastEventsTab && upcomingEventsTab && pastEventsContent && upcomingEventsContent) {
    pastEventsTab.addEventListener('click', function () {
      // Switch to "Past Events" tab
      pastEventsTab.classList.add('active');
      upcomingEventsTab.classList.remove('active');
      pastEventsContent.style.display = 'block';
      upcomingEventsContent.style.display = 'none';
    });

    upcomingEventsTab.addEventListener('click', function () {
      // Switch to "Upcoming Events" tab
      upcomingEventsTab.classList.add('active');
      pastEventsTab.classList.remove('active');
      upcomingEventsContent.style.display = 'block';
      pastEventsContent.style.display = 'none';
    });
  }

  // Ensure the correct tab is displayed on language switch
  function updateProgramsSection() {
    if (pastEventsTab.classList.contains('active')) {
      pastEventsContent.style.display = 'block';
      upcomingEventsContent.style.display = 'none';
    } else if (upcomingEventsTab.classList.contains('active')) {
      upcomingEventsContent.style.display = 'block';
      pastEventsContent.style.display = 'none';
    }
  }
  updateProgramsSection();
});
