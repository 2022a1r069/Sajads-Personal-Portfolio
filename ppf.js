// Sticky Navbar + Scroll Button Logic
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  const scrollBtn = document.querySelector(".scroll-button a");

  if (window.scrollY > 20) {
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  } else {
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
});

// Responsive Menu Toggle
const menuBtn = document.querySelector(".menu-btn i");
const cancelBtn = document.querySelector(".cancel-btn i");
const navBar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {
  navBar.classList.add("active");
});

cancelBtn.addEventListener("click", () => {
  navBar.classList.remove("active");
});

// Close mobile menu on link click
const menuLinks = document.querySelectorAll(".menu a");

menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    navBar.classList.remove("active");
  });
});

// Optional: Smooth scroll (native behavior on modern browsers)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});
