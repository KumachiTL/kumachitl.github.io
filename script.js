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

const searchInput = document.getElementById("searchInput");
const searchIcon = document.querySelector(".search-icon");

searchIcon.addEventListener("click", () => {
  searchInput.focus();
});

searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    performSearch();
  }
});

function performSearch() {
  const searchTerm = searchInput.value;

  // Perform search logic here
  // You can replace the following code with your actual search logic
  const searchResults = [
    {
      title: "Result 1",
      description: "This is the first search result",
    },
    {
      title: "Result 2",
      description: "This is the second search result",
    },
    {
      title: "Result 3",
      description: "This is the third search result",
    },
  ];

  displaySearchResults(searchResults);
}

function displaySearchResults(results) {
  const searchResultsContainer = document.getElementById("searchResults");
  searchResultsContainer.innerHTML = "";

  if (results.length === 0) {
    searchResultsContainer.innerHTML = "No results found.";
    return;
  }

  results.forEach((result) => {
    const resultItem = document.createElement("div");
    resultItem.innerHTML = `
      <h3>${result.title}</h3>
      <p>${result.description}</p>
    `;
    searchResultsContainer.appendChild(resultItem);
  });
}


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

