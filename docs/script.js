/* ===================================================== */
/*              MENSAJES ROTATIVOS PRINCIPALES           */
/* ===================================================== */

// Lista de mensajes que se van mostrando
const mensajes = [
  "🚗 Carritos de juguete de excelente calidad",
  "🎁 Ideales para regalo y colección",
  "✨ Modelos llamativos y resistentes",
  "👦👧 Diversión garantizada para niños",
  "📲 Pregunta por precio y disponibilidad"
];

let indice = 0;

/* Cambia el mensaje cada vez que se presiona el botón */
function saludar() {
  const texto = document.getElementById("mensaje");
  texto.innerText = mensajes[indice];

  indice++;
  if (indice >= mensajes.length) {
    indice = 0; // vuelve al inicio
  }
}

/* ===================================================== */
/*                  MODO OSCURO 🌙                        */
/* ===================================================== */

function modoOscuro() {
  document.body.classList.toggle("dark");
}

/* ===================================================== */
/*            CAMBIO DE COLOR MÁGICO 🎨                  */
/* ===================================================== */

function cambiarColor() {
  const contenedor = document.querySelector(".contenedor");
  contenedor.classList.toggle("color-magico");
}

/* ===================================================== */
/*        EFECTO APARECER AL HACER SCROLL ⬇️             */
/* ===================================================== */

const elementosScroll = document.querySelectorAll(".scroll");

function mostrarAlScroll() {
  elementosScroll.forEach(elemento => {
    const posicion = elemento.getBoundingClientRect().top;
    const alturaPantalla = window.innerHeight;

    if (posicion < alturaPantalla - 100) {
      elemento.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", mostrarAlScroll);
window.addEventListener("load", mostrarAlScroll);

/* ===================================================== */
/*       REINICIAR ANIMACIÓN DE IMÁGENES (GALERÍA)        */
/* ===================================================== */

window.addEventListener("load", () => {
  const imgs = document.querySelectorAll(".galeria img");

  imgs.forEach(img => {
    img.style.animation = "none";
    img.offsetHeight; // truco para reiniciar animación
    img.style.animation = "";
  });
});

/* ===================================================== */
/*          AUDIO MOTOR AL HACER CLICK 🔊🚗              */
/* ===================================================== */

window.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("audioMotor");

  document.addEventListener("click", () => {
    audio.currentTime = 0; // reinicia el sonido
    audio.play();
  });
});

/* =============================== */
/* ANIMACIÓN AL HACER SCROLL ✨ */
/* =============================== */

const elementosScroll = document.querySelectorAll('.scroll');

const mostrarScroll = () => {
    const trigger = window.innerHeight * 0.85;

    elementosScroll.forEach(el => {
        const top = el.getBoundingClientRect().top;

        if (top < trigger) {
            el.classList.add('activo');
        }
    });
};

window.addEventListener('scroll', mostrarScroll);
window.addEventListener('load', mostrarScroll);

/* ========================================= */
/*   ANIMACIÓN AL SCROLL – CARRITOS UNO A UNO */
/* ========================================= */
const elementos = document.querySelectorAll('.scroll');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {

      // Delay solo para los carritos
      if (entry.target.classList.contains('card')) {
        entry.target.style.transitionDelay = `${index * 0.15}s`;
      }

      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15
});

elementos.forEach(el => observer.observe(el));
