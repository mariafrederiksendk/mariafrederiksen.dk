// Function to hide the animation once it's finished, allowing the links to become functional again
window.addEventListener("load", () => {
  const animationScreen = document.querySelector(".animation-screen");
  const animate = document.querySelector(".animate-up");

  animate.addEventListener("animationend", () => {
    animationScreen.style.display = "none";
  });
});

// Function to change the navigation bar based on scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  const navBar = document.querySelector(".nav-bar");

  if (window.scrollY > header.offsetHeight) {
    navBar.classList.add("scrolled");
  } else {
    navBar.classList.remove("scrolled");
  }
});

