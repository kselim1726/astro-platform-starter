// Pulsierender CTA beim Scrollen
window.addEventListener('scroll', () => {
  const ctas = document.querySelectorAll('.cta');
  ctas.forEach(btn => {
    if(window.scrollY > 50){
      btn.style.transform = 'scale(1.05)';
    } else {
      btn.style.transform = 'scale(1)';
    }
  });
});

// Fade-In Effekt für Boxen
const boxes = document.querySelectorAll('.box');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('fade-in');
    }
  });
}, { threshold: 0.2 });

boxes.forEach(box => observer.observe(box));
