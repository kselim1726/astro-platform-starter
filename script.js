// Leichtes Pulsieren der CTA beim Scrollen
window.addEventListener('scroll', () => {
  const cta = document.querySelectorAll('.cta');
  cta.forEach(btn => {
    if(window.scrollY > 50){
      btn.style.transform = 'scale(1.05)';
    } else {
      btn.style.transform = 'scale(1)';
    }
  });
});