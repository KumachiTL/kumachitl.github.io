// SUBMENU

const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  const menu = dropdown.querySelector('.menu');
  const submenu = dropdown.querySelector('.dropdown-content');

  menu.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default link behavior
    submenu.classList.toggle('show');
  });

  // Close the dropdown if clicked outside
  document.addEventListener('click', event => {
    if (!dropdown.contains(event.target)) {
      submenu.classList.remove('show');
    }
  });
});

// SEARCH

// Assuming you have the JSON data stored in a file called 'data.json'

// Load the JSON data
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Store the loaded data
    const contentData = data.contents;

    // Get references to the HTML elements
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');

    // Add event listener to the search button
    searchButton.addEventListener('click', performSearch);

    function performSearch() {
      const searchTerm = searchInput.value.trim().toLowerCase();
      const searchResults = contentData.filter(item => item.toLowerCase().includes(searchTerm));

      // Redirect to search results page if there are matching results
      if (searchResults.length > 0) {
        const url = `results.html?search=${encodeURIComponent(searchTerm)}`;
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

