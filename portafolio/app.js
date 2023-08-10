const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('#navbar a');
const profileLink = document.getElementById('profile-link');
const mobileNavToggle = document.getElementById('mobile-nav-toggle');

// Mostrar/ocultar barra de navegación en dispositivos móviles
mobileNavToggle.addEventListener('click', () => {
  navbar.classList.toggle('show');
});

// Cerrar barra de navegación al hacer clic en un enlace
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('show');
  });
});

// Abrir enlace de perfil en una nueva pestaña
profileLink.addEventListener('click', (event) => {
  event.preventDefault();
  window.open(event.target.href, '_blank');
});
