/* ===================================================== */
/*              MENSAJES ROTATIVOS                       */
/* ===================================================== */

const mensajes = [
  "🚗 Carritos de juguete de excelente calidad",
  "🎁 Ideales para regalo y colección",
  "✨ Modelos llamativos y resistentes",
  "👦👧 Diversión garantizada para niños",
  "📲 Pregunta por precio y disponibilidad"
];

let indice = 0;

function saludar() {
  const texto = document.getElementById("mensaje");
  texto.innerText = mensajes[indice];
  indice = (indice + 1) % mensajes.length;
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
  document.querySelector(".contenedor")
    .classList.toggle("color-magico");
}

/* ===================================================== */
/*      SCROLL ANIMATION – UNO POR UNO ✨                */
/* ===================================================== */

const elementos = document.querySelectorAll(".scroll");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {

      // Delay especial para tarjetas
      if (entry.target.classList.contains("card")) {
        entry.target.style.transitionDelay = `${index * 0.15}s`;
      }

      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2
});

elementos.forEach(el => observer.observe(el));

/* ===================================================== */
/*              AUDIO MOTOR 🔊🚗                          */
/* ===================================================== */

window.addEventListener("click", () => {
  const audio = document.getElementById("audioMotor");
  if (audio) {
    audio.currentTime = 0;
    audio.play();
  }
});
