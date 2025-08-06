// main.js

document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const navMenu = document.querySelector(".nav-menu");

  // Función para abrir/cerrar el menú
  const toggleMenu = () => {
    hamburgerMenu.classList.toggle("active");
    navMenu.classList.toggle("active");
  };

  // 1. Añadimos el listener al botón de hamburguesa
  if (hamburgerMenu && navMenu) {
    hamburgerMenu.addEventListener("click", toggleMenu);
  }

  // 2. AÑADIDO: Hacemos que el menú se cierre al hacer clic en un enlace
  const navLinks = document.querySelectorAll(".nav-menu a");

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      // Si el menú está abierto, lo cerramos
      if (navMenu.classList.contains("active")) {
        toggleMenu();
      }
    });
  });
});