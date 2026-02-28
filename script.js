/* ============================
   SATICI SERVICES - SAFE GLOBAL SCRIPT
   Works on: index.html + about.html
============================ */

/* ===== Sticky CTA (only if exists) ===== */
const stickyCta = document.getElementById("stickyCta");
function updateStickyCta() {
  if (!stickyCta) return;
  if (window.scrollY > 600 && window.innerWidth < 769) {
    stickyCta.style.display = "block";
  } else {
    stickyCta.style.display = "none";
  }
}

/* ===== Navbar shadow (only if exists) ===== */
const navbar = document.querySelector(".navbar");
function updateNavbarShadow() {
  if (!navbar) return;
  if (window.scrollY > 50) navbar.classList.add("scrolled");
  else navbar.classList.remove("scrolled");
}

/* ===== Active link highlight for section links (homepage only-ish) ===== */
const navAnchors = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("section[id]");

function updateActiveNavLink() {
  if (!navAnchors.length || !sections.length) return;

  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120; // slightly larger offset for sticky nav
    if (window.scrollY >= sectionTop) current = section.getAttribute("id");
  });

  navAnchors.forEach((link) => {
    link.classList.remove("active");
    const href = link.getAttribute("href") || "";
    // only set active for hash-links like "#services"
    if (current && href.startsWith("#") && href.slice(1) === current) {
      link.classList.add("active");
    }
  });
}

/* ===== Smooth scroll only for same-page hash links ===== */
navAnchors.forEach((link) => {
  link.addEventListener("click", (e) => {
    const href = link.getAttribute("href") || "";
    if (!href.startsWith("#")) return; // ignore /about.html etc.

    const target = document.querySelector(href);
    if (!target) return;

    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

/* ===== Fade-in sections (only if exists) ===== */
const faders = document.querySelectorAll(".fade-section");
if (faders.length) {
  const appearOnScroll = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
  );

  faders.forEach((fader) => appearOnScroll.observe(fader));
}

/* ===== Mobile Burger Menu (only if exists) ===== */
const burger = document.querySelector(".burger-menu");
const navMenu = document.querySelector(".nav-links");

function closeMobileMenu() {
  if (!burger || !navMenu) return;
  navMenu.classList.remove("active");
  burger.classList.remove("toggle");
}

if (burger && navMenu) {
  burger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    burger.classList.toggle("toggle");
  });

  // close menu after clicking any link (mobile)
  navAnchors.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 769) closeMobileMenu();
    });
  });

  // close menu on resize to desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 769) closeMobileMenu();
  });
}

/* ===== One scroll listener for all scroll-based updates ===== */
window.addEventListener("scroll", () => {
  updateStickyCta();
  updateNavbarShadow();
  updateActiveNavLink();
});

// run once on load
updateStickyCta();
updateNavbarShadow();
updateActiveNavLink();
