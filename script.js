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

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
  var backToTopBtn = document.getElementById("backToTopBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
}
