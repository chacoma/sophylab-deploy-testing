
// scroll suave para el menú
document.querySelectorAll('#nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const destino = document.querySelector(this.getAttribute('href'));
    destino.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// mostrar secciones al entrar
const observador = new IntersectionObserver((entradas) => {
  entradas.forEach(entrada => {
    if (entrada.isIntersecting) entrada.target.classList.add('visible');
  });
}, { threshold: 0.25 });

document.querySelectorAll('.seccion').forEach(sec => observador.observe(sec));



