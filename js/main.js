// navbar settings
const togglerIcon = document.querySelector(".navbar-toggler");
const navbarLinks = document.querySelector(".nav-links");
togglerIcon.addEventListener("click", () => {
  togglerIcon.classList.toggle("active");
  navbarLinks.classList.toggle("active");
});
