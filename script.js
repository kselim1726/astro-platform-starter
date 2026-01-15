// ===== STICKY CTA SCROLL TRIGGER =====
const stickyCta = document.getElementById("stickyCta");

window.addEventListener("scroll", () => {
  if (window.scrollY > 600 && window.innerWidth < 769) {
    stickyCta.style.display = "block";
  } else {
    stickyCta.style.display = "none";
  }
});

// ===== NAVBAR SCROLL EFFECT & ACTIVE LINKS =====
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

// ===== SMOOTH SCROLL FOR NAV LINKS =====
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
// ===== FADE-IN SECTIONS ON SCROLL =====
const faders = document.querySelectorAll(".fade-section");

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// ===== MOBILE BURGER MENU =====
const burger = document.querySelector(".burger-menu");
const navMenu = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  burger.classList.toggle("toggle");
});

// Optional: Schließen des Menüs beim Klick auf einen Link (Mobile)
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    if (window.innerWidth < 769) {
      navMenu.classList.remove("active");
      burger.classList.remove("toggle");
    }
  });
});
