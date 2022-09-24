// toggle-button
// navbar-links

const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];
const navbar = document.getElementsByClassName("navbar")[0];
const logo = document.getElementsByClassName("logo")[0];

toggleButton.addEventListener("click", function () {
  navbarLinks.classList.toggle("active");
  navbar.classList.toggle("active");
});

window.addEventListener("scroll", function () {
  navbar.classList.toggle("sticky", window.scrollY > 0);
});
