// JavaScript code to toggle the dropdown submenu
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

// Search

const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

searchButton.addEventListener('click', searchGitHub);

function searchGitHub() {
  const query = searchInput.value;

  // Clear previous search results
  searchResults.innerHTML = '';

  // Make the API request
  fetch(`https://api.github.com/search/repositories?q=${query}`)
    .then(response => response.json())
    .then(data => {
      // Display the search results
      data.items.forEach(item => {
        const repoName = item.full_name;
        const repoUrl = item.html_url;

        const resultItem = document.createElement('div');
        resultItem.innerHTML = `<a href="${repoUrl}" target="_blank">${repoName}</a>`;
        searchResults.appendChild(resultItem);
      });
    })
    .catch(error => {
      console.log('An error occurred while searching GitHub:', error);
    });
}

// Change Chapter

function navigateToLink(dropdownId) {
  var dropdown = document.getElementById(dropdownId);
  var selectedOption = dropdown.value;
  if (selectedOption) {
    window.location.href = selectedOption;
  }
}

// Back to top btn

var backToTopButton = document.getElementById("backToTopBtn");

window.onscroll = function() {
  if (document.documentElement.scrollTop > 20 || document.body.scrollTop > 20) {
    backToTopButton.classList.add("show"); // Add the "show" class to make the button visible
  } else {
    backToTopButton.classList.remove("show"); // Remove the "show" class to hide the button
  }
};

backToTopButton.onclick = function() {
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
};
