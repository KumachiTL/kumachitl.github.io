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

  // Animation for media query
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

// Load the JSON data
fetch('../data.json')
  .then(response => response.json())
  .then(data => {
    // Store the loaded data
    const contentData = data.contents;

    // Get references to the HTML elements
    const searchInput = document.getElementById('searchInput');

// Add event listener to the Enter key press on the search input field
searchInput.addEventListener('keydown', function(event) {
  if (event.keyCode === 13) {
    handleSearch();
  }
});

function handleSearch() {
  const searchTerm = searchInput.value.trim().toLowerCase();
  const searchResults = contentData.filter(item => item.toLowerCase().includes(searchTerm));

      // Redirect to search results page if there are matching results
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

// Store the default font size
const defaultFontSize = parseInt(window.getComputedStyle(content).fontSize);

// Event listener for the decrease button
decreaseBtn.addEventListener('click', () => {
  // Get the current font size
  const currentFontSize = parseInt(window.getComputedStyle(content).fontSize);
  // Decrease the font size by 2 pixels
  content.style.fontSize = `${currentFontSize - 2}px`;
});

// Event listener for the reset button
resetBtn.addEventListener('click', () => {
  // Set the font size back to the default
  content.style.fontSize = `${defaultFontSize}px`;
});

// Event listener for the increase button
increaseBtn.addEventListener('click', () => {
  // Get the current font size
  const currentFontSize = parseInt(window.getComputedStyle(content).fontSize);
  // Increase the font size by 2 pixels
  content.style.fontSize = `${currentFontSize + 2}px`;
});

// PREV AND NEXT BY KBD

document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowLeft') {
    var prevButton = document.querySelector('.prev-btn');
    if (prevButton) {
      prevButton.click(); // Trigger the click event of the previous button
    }
  }
  if (event.key === 'ArrowRight') {
    var nextButton = document.querySelector('.next-btn');
    if (nextButton) {
      nextButton.click(); // Trigger the click event of the next button
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

// DARK MODE

function toggleDarkMode() {
  const body = document.querySelector('body');
  const nav = document.querySelector('nav');

  // Store the preference in local storage
  const isDarkMode = body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", isDarkMode);
  
  const icon = document.getElementById('icon');
  icon.classList.toggle('fa-moon');
  icon.classList.toggle('fa-sun');
}

// Check if dark mode preference is stored in local storage
const storedDarkMode = localStorage.getItem("darkMode");

if (storedDarkMode === "true") {
  body.classList.add("dark-mode");
  nav.classList.add('dark-mode');
} else {
  body.classList.remove("dark-mode");
  nav.classList.remove('dark-mode');
}
