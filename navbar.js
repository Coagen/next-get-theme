const navbar = document.getElementById("navbar");
const backToTopBtn = document.getElementById("backToTop");
const hamburger = document.getElementById("hamburger");
const menuOverlay = document.getElementById("menuOverlay");
const closeOverlay = document.getElementById("closeOverlay");
const overlayLinks = document.querySelectorAll(".overlay-link");

// Show/hide navbar on scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("show");
  } else {
    navbar.classList.remove("show");
  }
});

// Show/hide back to top button
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

// Smooth scroll to top
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Toggle overlay menu
hamburger.addEventListener("click", () => {
  menuOverlay.classList.add("show");
});

closeOverlay.addEventListener("click", () => {
  menuOverlay.classList.remove("show");
});

// Active link toggle
overlayLinks.forEach((link) => {
  link.addEventListener("click", () => {
    overlayLinks.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");
  });
});
