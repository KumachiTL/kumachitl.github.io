// DARK MODE

const darkModeToggle = document.getElementById('darkModeToggle');
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
const savedDarkModePreference = localStorage.getItem('darkMode');

  if (savedDarkModePreference === 'true' || (savedDarkModePreference === null && prefersDarkMode)) {
    enableDarkMode();
  }
  darkModeToggle.addEventListener('click', () => {
  if (darkModeToggle.classList.contains('dark-mode')) {
    disableDarkMode();
    localStorage.setItem('darkMode', 'false');
  } else {
      enableDarkMode();
      localStorage.setItem('darkMode', 'true');
  }
  });

function enableDarkMode() {
  document.body.classList.add('dark-mode');
  darkModeToggle.classList.add('dark-mode');
}

function disableDarkMode() {
  document.body.classList.remove('dark-mode');
  darkModeToggle.classList.remove('dark-mode');
}

// SIDEBAR MENU

$(document).ready(function () {
  $('.navbar .fas.fa-bars').click(function () {
    $('.navbar .nav-links').toggleClass('show');
    $('.navbar .nav-links').animate({ 'left': '0' });
  });

  $('.navbar .menu .dropdown-toggle').click(function () {
    $(this).next('.submenu').slideToggle();
    $(this).toggleClass('collapsed');
  });

  $('.navbar .sidebar-logo .fas.fa-times').click(function () {
    $('.navbar .nav-links').animate({ 'left': '-100%' }, function () {
      $('.navbar .nav-links').removeClass('show');
    });
  });

  $(window).resize(function () {
    if ($(window).width() > 768) {
      $('.navbar .nav-links').css({ 'display': 'block', 'left': '0' });
    } else {
      if (!$('.navbar .nav-links').hasClass('show')) {
        $('.navbar .nav-links').css({ 'display': 'none', 'left': '-100%' });
      }
    }
  });
});

// SEARCH

// -Search Box

let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .fa-search");
let searchBoxCancel = document.querySelector(".search-box .fa-times");

searchBox.addEventListener("click", ()=>{
  navbar.classList.toggle("showInput");
  if(navbar.classList.contains("showInput")){
    searchBox.classList.replace("fa-search" ,"fa-times");
  }else {
    searchBox.classList.replace("fa-times" ,"fa-search");
  }
});

// -Search Results

fetch('../data.json')
  .then(response => response.json())
  .then(data => {
    
const contentData = data.contents;
const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('keydown', function(event) {
  if (event.keyCode === 13) {
    handleSearch();
  }
});

function handleSearch() {
  const searchTerm = searchInput.value.trim().toLowerCase();
  const searchResults = contentData.filter(item => item.toLowerCase().includes(searchTerm));

      if (searchResults.length > 0) {
        const url = `../results.html?search=${encodeURIComponent(searchTerm)}`;
        window.location.href = url;
      } else {
          alert('No results found.');
      }
    }
  })
  .catch(error => {
    console.error('Error loading JSON data:', error);
  });

// CHANGE CHAPTER

function navigateToLink(dropdownId) {
  var dropdown = document.getElementById(dropdownId);
  var selectedOption = dropdown.value;
  if (selectedOption) {
    window.location.href = selectedOption;
  }
}

// FONT SIZE

const content = document.getElementById('content');
const decreaseBtn = document.getElementById('decreaseBtn');
const resetBtn = document.getElementById('resetBtn');
const increaseBtn = document.getElementById('increaseBtn');
const defaultFontSize = parseInt(window.getComputedStyle(content).fontSize);
const savedFontSize = localStorage.getItem('fontSize');

if (savedFontSize) {
  content.style.fontSize = savedFontSize;
}

decreaseBtn.addEventListener('click', () => {
  const currentFontSize = parseInt(window.getComputedStyle(content).fontSize);
  const newFontSize = `${currentFontSize - 2}px`;
  content.style.fontSize = newFontSize;
  localStorage.setItem('fontSize', newFontSize);
});

resetBtn.addEventListener('click', () => {
  content.style.fontSize = `${defaultFontSize}px`;
  localStorage.removeItem('fontSize');
});

increaseBtn.addEventListener('click', () => {
  const currentFontSize = parseInt(window.getComputedStyle(content).fontSize);
  const newFontSize = `${currentFontSize + 2}px`;
  content.style.fontSize = newFontSize;
  localStorage.setItem('fontSize', newFontSize);
});

// PREV AND NEXT BY KBD

document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowLeft') {
    var prevButton = document.querySelector('.prev-btn');
    if (prevButton) {
      prevButton.click();
    }
  }
  if (event.key === 'ArrowRight') {
    var nextButton = document.querySelector('.next-btn');
    if (nextButton) {
      nextButton.click();
    }
  }
});

// B2TOP BTN

var backToTopButton = document.getElementById("backToTopBtn");

window.onscroll = function() {
  if (document.documentElement.scrollTop > 20 || document.body.scrollTop > 20) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
};

backToTopButton.onclick = function() {
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
};
