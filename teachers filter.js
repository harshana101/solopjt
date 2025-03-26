// Filter-search.js - Handles dropdown filtering and search functionality

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

// Filter teachers by category
function filterTeachers(category) {
  // Get current language
  const currentLang = window.getCurrentLang ? window.getCurrentLang() : 'en';
  const translations = window.getTranslations ? window.getTranslations() : {};

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
  if (originalCategory === "All" || category === (translations[currentLang] ? translations[currentLang].all : "සියලුම")) {
    for (var i = 0; i < cards.length; i++) {
      cards[i].classList.remove("hidden");
    }
    
    // Apply fade-in animation with staggered delay
    if (window.applyFadeInAnimation) {
      window.applyFadeInAnimation(cards);
    } else {
      // Fallback if animation function is not available
      for (var i = 0; i < cards.length; i++) {
        cards[i].style.animation = "none";
        setTimeout(function(index) {
          return function() {
            cards[index].style.animation = "fadeIn 0.5s forwards";
            cards[index].style.animationDelay = (index * 0.1) + "s";
          }
        }(i), 10);
      }
    }
    return;
  }

  // Otherwise, filter based on original category name (English)
  for (var i = 0; i < cards.length; i++) {
    var categories = cards[i].getAttribute("data-categories").split(",");

    if (categories.includes(originalCategory)) {
      cards[i].classList.remove("hidden");
    } else {
      cards[i].classList.add("hidden");
    }
  }

  // Apply animation only to visible cards
  const visibleCards = document.querySelectorAll('.teacher-card:not(.hidden)');
  if (window.applyFadeInAnimation) {
    window.applyFadeInAnimation(visibleCards);
  } else {
    // Fallback if animation function is not available
    Array.from(visibleCards).forEach((card, index) => {
      card.style.animation = "none";
      setTimeout(() => {
        card.style.animation = "fadeIn 0.5s forwards";
        card.style.animationDelay = (index * 0.1) + "s";
      }, 10);
    });
  }
}

// Initialize search functionality
function initializeSearch() {
  // DOM Elements for search
  const searchInput = document.getElementById('teacherSearch');
  const searchBtn = document.getElementById('searchBtn');
  const recentSearches = document.getElementById('recentSearches');
  
  // Store recent searches in localStorage
  let recentSearchList = JSON.parse(localStorage.getItem('teacherRecentSearches')) || [];
  
  // Display recent searches function
  function displayRecentSearches() {
    // Add title if it doesn't exist
    if (!document.getElementById('recentSearchesTitle') && recentSearches) {
      const titleDiv = document.createElement('div');
      titleDiv.className = 'recent-title';
      titleDiv.id = 'recentSearchesTitle';
      
      const currentLang = window.getCurrentLang ? window.getCurrentLang() : 'en';
      const translations = window.getTranslations ? window.getTranslations() : {};
      titleDiv.textContent = translations[currentLang] ? 
        translations[currentLang].recentSearches : 
        "Recent Searches:";
        
      recentSearches.appendChild(titleDiv);
    }
    
    // Clear previous recent searches (except the title)
    if (recentSearches) {
      Array.from(recentSearches.children)
        .filter(child => child.id !== 'recentSearchesTitle')
        .forEach(child => recentSearches.removeChild(child));
      
      // Add recent searches
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
  
  // Search functionality
  function performSearch() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    const currentLang = document.body.getAttribute('lang') || 'en';
    const translations = window.getTranslations ? window.getTranslations() : {};
    
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
      const visibleCards = [];
      
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
          visibleCards.push(card);
        } else {
          card.classList.add('hidden');
        }
      });
      
      // Apply animation to visible cards
      if (window.applyFadeInAnimation && visibleCards.length > 0) {
        window.applyFadeInAnimation(visibleCards);
      }
      
      // Update filter dropdown text with translated "Search Results"
      if (hasResults) {
        document.getElementById("current-filter").textContent = 
          translations[currentLang] ? translations[currentLang].searchResults : "Search Results";
      }
    } else {
      // If search is empty, show all teachers
      const teacherCards = document.querySelectorAll('.teacher-card');
      teacherCards.forEach(card => {
        card.classList.remove('hidden');
      });
      
      // Apply animation to all cards
      if (window.applyFadeInAnimation) {
        window.applyFadeInAnimation(teacherCards);
      }
      
      // Reset filter to "All" with translation
      document.getElementById("current-filter").textContent = 
        translations[currentLang] ? translations[currentLang].all : "All";
    }
  }
  
  // Initialize event listeners
  if (searchBtn) {
    searchBtn.addEventListener('click', performSearch);
  }
  
  if (searchInput) {
    searchInput.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') {
        performSearch();
      }
    });
  }
  
  // Initialize recent searches display
  displayRecentSearches();
  
  // Return the search function for external use
  return performSearch;
}

// Initialize dropdown options data attributes
function initializeDropdownOptions() {
  const dropdownLinks = document.querySelectorAll('#filterDropdown a');
  dropdownLinks.forEach(link => {
    const categoryKey = window.getCategoryKey ? window.getCategoryKey(link.textContent) : null;
    if (categoryKey && !link.hasAttribute('data-original-category')) {
      link.setAttribute('data-original-category', link.textContent);
    }
  });
}

// Expose functions for external use
window.toggleDropdown = toggleDropdown;
window.filterTeachers = filterTeachers;
window.initializeSearch = initializeSearch;
window.initializeDropdownOptions = initializeDropdownOptions;
