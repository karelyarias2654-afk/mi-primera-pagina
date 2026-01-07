// ===== MENSAJES =====
const mensajes = [
    "🚗 Carritos de juguete de excelente calidad",
    "🎁 Ideales para regalo y colección",
    "✨ Modelos llamativos y resistentes",
    "👦👧 Diversión garantizada para niños",
    "📲 Pregunta por precio y disponibilidad"
];

let indice = 0;

// Cambia el mensaje
function saludar() {
    const texto = document.getElementById("mensaje");
    texto.innerText = mensajes[indice];

    indice++;
    if (indice === mensajes.length) {
        indice = 0;
    }
}

// Modo oscuro
function modoOscuro() {
    document.body.classList.toggle("dark");
}

// Cambiar color de fondo
function cambiarColor() {
    const contenedor = document.querySelector(".contenedor");
    contenedor.classList.toggle("color-magico");
}
// Reinicia animación de galería
window.addEventListener("load", () => {
    const imgs = document.querySelectorAll(".galeria img");
    imgs.forEach(img => {
        img.style.animation = "none";
        img.offsetHeight; // truco para reiniciar
        img.style.animation = "";
    });
});

// ===== EFECTO SCROLL =====
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

// ===== AUDIO AL HACER CLICK EN LA PÁGINA =====
let audioReproducido = false;

document.addEventListener("click", () => {
    if (!audioReproducido) {
        const audio = document.getElementById("audioCarro");
        audio.play();
        audioReproducido = true;
    }
});








