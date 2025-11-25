// scroll suave para cualquier link interno
document.querySelectorAll('#nav a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});


const observador = new IntersectionObserver((entradas) => {
  entradas.forEach(entrada => {
    if (entrada.isIntersecting) entrada.target.classList.add('visible');
  });
}, { threshold: 0.05 }); // 5 % para pantallas chicas



function activarScroll() {
  // limpia listeners viejos
  document.querySelectorAll('#nav a[href^="#"]').forEach(a => {
    a.replaceWith(a.cloneNode(true)); // clona sin listeners
  });

  // engancha nuevo listener
  document.querySelectorAll('#nav a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      target.classList.add('visible'); // fuerza visible
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

// primera carga + cada cambio de tamaño
activarScroll();
window.addEventListener('resize', activarScroll);