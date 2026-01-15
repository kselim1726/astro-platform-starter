// ===== Sticky CTA Scroll Trigger =====
const stickyCta = document.getElementById("stickyCta");

window.addEventListener("scroll", () => {
  if (window.scrollY > 600 && window.innerWidth < 769) {
    stickyCta.style.display = "block";
  } else {
    stickyCta.style.display = "none";
  }
});
// ===== Navbar Scroll Effect =====
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {
  // Navbar Shadow
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  // Active Link Highlight
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});
// ===== Smooth Scroll for Nav Links =====
navLinks.forEach(link => {
  link.addEventListener("click", e => {
    if (link.hash !== "") {
      e.preventDefault();
      const target = document.querySelector(link.hash);
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});
// ===== Fade-In Sections on Scroll =====
const faders = document.querySelectorAll(".fade-section");

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    appearOnScroll.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
// ===== Mobile Burger Menu =====

const navMenu = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  burger.classList.toggle("toggle");
});

/* CSS für .burger-menu und .nav-links.active muss noch in style.css stehen */
