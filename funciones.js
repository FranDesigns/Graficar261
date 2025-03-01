let index = 0;
const items = document.querySelectorAll(".carousel-item");
const totalItems = items.length;
function showSlide(i) {
  index = (i + totalItems) % totalItems;
  document.querySelector(".carousel").style.transform = `translateX(${
    -index * 100
  }%)`;
}
document
  .getElementById("prev")
  .addEventListener("click", () => showSlide(index - 1));
document
  .getElementById("next")
  .addEventListener("click", () => showSlide(index + 1));

let lastScroll = 0; // Para suavizar el movimiento

function parallaxEffect() {
  let scrollPosition = window.scrollY;
  let targetPosition = scrollPosition * 0.1; // Ajusta la velocidad del efecto

  // Aplica suavizado progresivo
  lastScroll += (targetPosition - lastScroll) * 0.3;

  document.querySelector(
    ".fotoLocal"
  ).style.transform = `translateY(${lastScroll}px)`;

  requestAnimationFrame(parallaxEffect); // Vuelve a ejecutar suavemente
}

parallaxEffect(); // Iniciar la animación

document.addEventListener("DOMContentLoaded", function () {
  let observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible"); // Agregar animación cuando aparece
        }
      });
    },
    { threshold: 0.2 }
  ); // Se activa cuando el 20% del elemento está visible

  // Seleccionamos todas las imágenes
  let images = document.querySelectorAll(
    ".imagen-tarj-pres, .imagen-tarjetones, .imagen-postal"
  );
  images.forEach((img) => observer.observe(img));
});

let lastScrollTop = 0;
const navbar = document.querySelector(".navbar");
let isNavbarHidden = false; // Estado de la navbar

window.addEventListener("scroll", function () {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop + 10) {
    // Si el usuario scrollea hacia abajo más de 10px, oculta la navbar
    if (!isNavbarHidden) {
      navbar.classList.add("navbar-hidden");
      isNavbarHidden = true;
    }
  } else if (currentScroll < lastScrollTop - 10) {
    // Si el usuario scrollea hacia arriba más de 10px, muestra la navbar
    if (isNavbarHidden) {
      navbar.classList.remove("navbar-hidden");
      isNavbarHidden = false;
    }
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Evita valores negativos
});

const menuBoton = document.getElementById("boton-menu");

const navbarLinks = document.querySelector(".navbar-links");

menuBoton.addEventListener("click", () => {
  navbarLinks.classList.toggle("open");
  menuBoton.classList.toggle("open");
});

const allNavLinks = document.querySelectorAll(".navbar-links li");

allNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navbarLinks.classList.remove("open");
    menuBoton.classList.remove("open");
  });
});
