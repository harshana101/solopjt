// Language translations
const translations = {
    en: {
      title: "Teachers",
      all: "All",
      backToHome: "Back To Home",
      searchPlaceholder: "Search for teachers by name or subject...",
      moreInfo: "More Info..",
      recentSearches: "Recent Searches:",
      searchResults: "Search Results",
      // Categories
      al: "A/L",
      ol: "O/L",
      prefectBoard: "Prefect Board",
      scout: "Scout",
      ecogroup: "Ecogroup",
      saukydana: "Saukydana",
      disciplinaryCommittee: "Disciplinary committee",
      mediaAssociation: "Media Association",
      counselling: "Student counselling and Career guide",
      inChargeOfSections: "In charge of sections",
      dramaClub: "Drama Club"
    },
    si: {
      title: "ගුරුවරුන්",
      all: "සියලුම",
      backToHome: "මුල් පිටුවට",
      searchPlaceholder: "නම හෝ විෂය අනුව ගුරුවරුන් සොයන්න...",
      moreInfo: "වැඩි විස්තර..",
      recentSearches: "මෑත සෙවීම්:",
      searchResults: "සෙවීම් ප්‍රතිඵල",
      // Categories
      al: "උ/පෙළ",
      ol: "සා/පෙළ",
      prefectBoard: "ශිෂ්‍ය නායක මණ්ඩලය",
      scout: "බාලදක්ෂ",
      ecogroup: "පරිසර කණ්ඩායම",
      saukydana: "සෞඛ්‍යදාන",
      disciplinaryCommittee: "විනය කමිටුව",
      mediaAssociation: "මාධ්‍ය සංගමය",
      counselling: "ශිෂ්‍ය උපදේශන හා වෘත්තීය මාර්ගෝපදේශ",
      inChargeOfSections: "අංශ භාර",
      dramaClub: "නාට්‍ය සමාජය"
    }
  };
  
  // Initialize language
  let currentLang = localStorage.getItem('preferredLanguage') || 'en';
  
  // Initialize theme preference
  let darkTheme = localStorage.getItem('darkTheme') === 'true';
  
  // Toggle dropdown menu
  function toggleDropdown() {
    document.getElementById("filterDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if clicked outside
  window.onclick = function(event) {
    if (!event.target.matches('.dropdown-btn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  
  // Helper function to get category key from text
  function getCategoryKey(text) {
    const normalized = text.trim();
    switch (normalized) {
      case "All": case "සියලුම": return "all";
      case "A/L": case "උ/පෙළ": return "al";
      case "O/L": case "සා/පෙළ": return "ol";
      case "Prefect Board": case "ශිෂ්‍ය නායක මණ්ඩලය": case "ශිෂයනායක මණ්ඩලය භාර": return "prefectBoard";
      case "Scout": case "බාලදක්ෂ": return "scout";
      case "Ecogroup": case "පරිසර කණ්ඩායම": return "ecogroup";
      case "Saukydana": case "සෞඛ්‍යදාන": return "saukydana";
      case "Disciplinary committee": case "විනය කමිටුව": return "disciplinaryCommittee";
      case "Media Association": case "මාධ්‍ය සංගමය": return "mediaAssociation";
      case "Student counselling and Career guide": case "ශිෂ්‍ය උපදේශන හා වෘත්තීය මාර්ගෝපදේශ": case "ශිෂ්‍ය උපදේශන හා මාර්ගෝපදේශ": return "counselling";
      case "In charge of sections": case "අංශ භාර": return "inChargeOfSections";
      case "Drama Club": case "නාට්‍ය සමාජය": return "dramaClub";
      default: return null;
    }
  }
  
  // Function to switch language
  function switchLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('preferredLanguage', lang);
    
    // Set language attribute on the body for font adjustments
    document.body.setAttribute('lang', lang);
  
    // Update UI elements with translations
    document.querySelector('h1').textContent = translations[lang].title;
    
    // Update filter dropdown button text
    const currentFilter = document.getElementById('current-filter');
    if (currentFilter.textContent === translations[currentLang === 'si' ? 'en' : 'si'].all || 
        currentFilter.textContent === translations[currentLang].all) {
      currentFilter.textContent = translations[lang].all;
    } else if (currentFilter.textContent === translations[currentLang === 'si' ? 'en' : 'si'].searchResults ||
              currentFilter.textContent === translations[currentLang].searchResults) {
      currentFilter.textContent = translations[lang].searchResults;
    }
  
    document.querySelector('.view-all-btn').innerHTML =
      `<i class="fas fa-home"></i> ${translations[lang].backToHome}`;
  
    document.querySelector('.search-input').placeholder = translations[lang].searchPlaceholder;
  
    // Update category tags
    document.querySelectorAll('.category-tag').forEach(tag => {
      const categoryKey = getCategoryKey(tag.textContent);
      if (categoryKey && translations[lang][categoryKey]) {
        tag.textContent = translations[lang][categoryKey];
      }
    });
  
    // Update dropdown options
    const dropdownLinks = document.querySelectorAll('#filterDropdown a');
    dropdownLinks.forEach(link => {
      const categoryKey = getCategoryKey(link.textContent);
      if (categoryKey && translations[lang][categoryKey]) {
        // Store original English category as data attribute for filter function
        if (!link.hasAttribute('data-original-category')) {
          link.setAttribute('data-original-category', link.textContent);
        }
        link.textContent = translations[lang][categoryKey];
      }
    });
  
    // Update More Info buttons
    document.querySelectorAll('.about-btn').forEach(btn => {
      btn.textContent = translations[lang].moreInfo;
    });
    
    // Update teacher names and subjects based on language
    document.querySelectorAll('.teacher-card').forEach(card => {
      const nameElement = card.querySelector('.teacher-name');
      const positionElement = card.querySelector('.teacher-position');
      
      if (lang === 'si') {
        const nameSi = card.getAttribute('data-name-si');
        const subjectSi = card.getAttribute('data-subject-si');
        
        if (nameSi) nameElement.textContent = nameSi;
        if (subjectSi) positionElement.textContent = subjectSi;
      } else {
        // Switch back to English
        nameElement.textContent = card.getAttribute('data-name');
        positionElement.textContent = card.getAttribute('data-subject');
      }
    });
    
    // Update language button active state
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.remove('active');
    });
    document.querySelector(`.lang-${lang}`).classList.add('active');
  }
  
  // Function to toggle theme
  function toggleTheme() {
    darkTheme = !darkTheme;
    localStorage.setItem('darkTheme', darkTheme);
    
    // Toggle body class
    document.body.classList.toggle('dark-theme', darkTheme);
    
    // Update icon
    const themeIcon = document.querySelector('#themeToggle i');
    themeIcon.className = darkTheme ? 'fas fa-sun' : 'fas fa-moon';
  }
  
  // Modified filter function to work with translations
  function filterTeachers(category) {
    // Get original category if we're in Sinhala mode
    let originalCategory = category;
  
    // Find the link with the displayed text that matches the category
    const links = document.querySelectorAll('#filterDropdown a');
    for (let i = 0; i < links.length; i++) {
      if (links[i].textContent === category && links[i].hasAttribute('data-original-category')) {
        originalCategory = links[i].getAttribute('data-original-category');
        break;
      }
    }
  
    // Update dropdown button text with translated category
    document.getElementById("current-filter").textContent = category;
  
    // Hide dropdown
    document.getElementById("filterDropdown").classList.remove("show");
  
    // Get all teacher cards
    var cards = document.getElementsByClassName("teacher-card");
  
    // If "All" or "සියලුම" is selected, show all cards
    if (originalCategory === "All" || category === translations.si.all) {
      for (var i = 0; i < cards.length; i++) {
        cards[i].classList.remove("hidden");
        // Reset animation for fade-in effect
        cards[i].style.animation = "none";
        setTimeout(function(index) {
          return function() {
            cards[index].style.animation = "fadeIn 0.5s forwards";
            cards[index].style.animationDelay = (index * 0.1) + "s";
          }
        }(i), 11);
      }
      return;
    }
  
    // Otherwise, filter based on original category name (English)
    for (var i = 0; i < cards.length; i++) {
      var categories = cards[i].getAttribute("data-categories").split(",");
  
      if (categories.includes(originalCategory)) {
        cards[i].classList.remove("hidden");
        // Reset animation for fade-in effect
        cards[i].style.animation = "none";
        setTimeout(function(index) {
          return function() {
            cards[index].style.animation = "fadeIn 0.5s forwards";
            cards[index].style.animationDelay = (index * 0.1) + "s";
          }
        }(i), 11);
      } else {
        cards[i].classList.add("hidden");
      }
    }
  }
  
  // Initialize the page with saved preferences
  document.addEventListener('DOMContentLoaded', function() {
    // Add language switcher HTML
    const controlsContainer = document.querySelector('.controls-container');
    const langSwitcher = document.createElement('div');
    langSwitcher.className = 'lang-switcher';
    langSwitcher.innerHTML = `
      <button class="lang-btn lang-en ${currentLang === 'en' ? 'active' : ''}" onclick="switchLanguage('en')">EN</button>
      <button class="lang-btn lang-si ${currentLang === 'si' ? 'active' : ''}" onclick="switchLanguage('si')">සිං</button>
    `;
    controlsContainer.appendChild(langSwitcher);
    
    // Apply current language
    switchLanguage(currentLang);
    
    // Apply theme preference
    document.body.classList.toggle('dark-theme', darkTheme);
    
    // Add theme toggle button and event listener
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
      const themeIcon = themeToggle.querySelector('i');
      if (themeIcon) {
        themeIcon.className = darkTheme ? 'fas fa-sun' : 'fas fa-moon';
      }
      themeToggle.addEventListener('click', toggleTheme);
    }
    
    // DOM Elements for search
    const searchInput = document.getElementById('teacherSearch');
    const searchBtn = document.getElementById('searchBtn');
    const recentSearches = document.getElementById('recentSearches');
    
    // Store recent searches in localStorage
    let recentSearchList = JSON.parse(localStorage.getItem('teacherRecentSearches')) || [];
    
    // Display recent searches function
    function displayRecentSearches() {
      // Clear previous recent searches (except the title)
      while (recentSearches && recentSearches.childNodes.length > 1) {
        recentSearches.removeChild(recentSearches.lastChild);
      }
      
      // Add recent searches
      if (recentSearches) {
        recentSearchList.forEach(search => {
          const item = document.createElement('div');
          item.className = 'recent-item';
          item.textContent = search;
          item.addEventListener('click', function() {
            searchInput.value = search;
            performSearch();
          });
          recentSearches.appendChild(item);
        });
      }
    }
    
    // Initialize recent searches
    displayRecentSearches();
    
    // Search functionality
    function performSearch() {
      const searchTerm = searchInput.value.trim().toLowerCase();
      const currentLang = document.body.getAttribute('lang') || 'en';
      
      if (searchTerm) {
        // Add search term to recent searches
        if (!recentSearchList.includes(searchTerm)) {
          recentSearchList.unshift(searchTerm);
          recentSearchList = recentSearchList.slice(0, 5); // Keep only 5 recent searches
          localStorage.setItem('teacherRecentSearches', JSON.stringify(recentSearchList));
          displayRecentSearches();
        }
        
        let hasResults = false;
        const teacherCards = document.querySelectorAll('.teacher-card');
        
        teacherCards.forEach(card => {
          let name, subject;
          
          if (currentLang === 'si') {
            name = (card.getAttribute('data-name-si') || card.getAttribute('data-name')).toLowerCase();
            subject = (card.getAttribute('data-subject-si') || card.getAttribute('data-subject')).toLowerCase();
          } else {
            name = card.getAttribute('data-name').toLowerCase();
            subject = card.getAttribute('data-subject').toLowerCase();
          }
          
          if (name.includes(searchTerm) || subject.includes(searchTerm)) {
            card.classList.remove('hidden');
            hasResults = true;
            
            // Reset animation for fade-in effect
            card.style.animation = "none";
            setTimeout(function() {
              card.style.animation = "fadeIn 0.5s forwards";
            }, 10);
          } else {
            card.classList.add('hidden');
          }
        });
        
        // Update filter dropdown text with translated "Search Results"
        if (hasResults) {
          document.getElementById("current-filter").textContent = translations[currentLang].searchResults;
        }
      } else {
        // If search is empty, show all teachers
        const teacherCards = document.querySelectorAll('.teacher-card');
        teacherCards.forEach(card => {
          card.classList.remove('hidden');
          
          // Reset animation for fade-in effect
          card.style.animation = "none";
          setTimeout(function() {
            card.style.animation = "fadeIn 0.5s forwards";
          }, 10);
        });
        
        // Reset filter to "All" with translation
        document.getElementById("current-filter").textContent = translations[currentLang].all;
      }
    }
    
    // Handle search button click
    if (searchBtn) {
      searchBtn.addEventListener('click', performSearch);
    }
    
    // Handle Enter key press
    if (searchInput) {
      searchInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
          performSearch();
        }
      });
    }
  });