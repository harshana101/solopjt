// Translator.js - Handles language translations and switching

// Language translations
const translations = {
  en: {
    title: "Teachers",
    all: "All",
    backToHome: "Back To Home",
    searchPlaceholder: "Search for teachers by name or subject...",
    moreInfo: "Profile",
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
    counselling: "Student Counselling",
    inChargeOfSections: "In charge of sections",
    dramaClub: "Drama Club",
    aestheticsDepartment: "Aesthetics Department",
    studentCounselling: "Student Counselling"
  },
  si: {
    title: "ගුරුවරුන්",
    all: "සියලුම",
    backToHome: "මුල් පිටුවට",
    searchPlaceholder: "නම හෝ විෂය අනුව ගුරුවරුන් සොයන්න...",
    moreInfo: "පැතිකඩ",
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
    counselling: "ශිෂ්‍ය උපදේශන",
    inChargeOfSections: "අංශ භාර",
    dramaClub: "නාට්‍ය සමාජය",
    aestheticsDepartment: "සෞන්දර්ය අංශය",
    studentCounselling: "ශිෂ්‍ය උපදේශන"
  }
};

// Initialize language
let currentLang = localStorage.getItem('preferredLanguage') || 'en';

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
    case "Student Counselling": case "ශිෂ්‍ය උපදේශන": return "studentCounselling";
    case "Aesthetics Department": case "සෞන්දර්ය අංශය": return "aestheticsDepartment";
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

  // Update recent searches text
  const recentSearchesTitle = document.getElementById('recentSearchesTitle');
  if (recentSearchesTitle) {
    recentSearchesTitle.textContent = translations[lang].recentSearches;
  }
}

// Initialize the language switcher UI
function initializeLanguageSwitcher() {
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
}

// Expose functions for external use
window.switchLanguage = switchLanguage;
window.getCategoryKey = getCategoryKey;
window.initializeLanguageSwitcher = initializeLanguageSwitcher;
window.getTranslations = () => translations;
window.getCurrentLang = () => currentLang;
