// JavaScript code to toggle the dropdown submenu
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  const menu = dropdown.querySelector('.menu');
  const submenu = dropdown.querySelector('.dropdown-content');

  menu.addEventListener('click', (event) => {
    event.preventDefault();
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
