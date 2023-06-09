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

// Change Chapter

function navigateToLink(dropdownId) {
  var dropdown = document.getElementById(dropdownId);
  var selectedOption = dropdown.value;
  if (selectedOption) {
    window.location.href = selectedOption;
  }
}

// Back to top btn

window.addEventListener('scroll', function() {
  var backToTopButton = document.getElementById('backToTopBtn');
  if (window.pageYOffset > 20) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

