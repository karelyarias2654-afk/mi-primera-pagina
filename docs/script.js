// ===== MENSAJES =====
const mensajes = [
    "✨ Estoy programando mi primera página web ✨",
    "💖 Amo aprender desarrollo web",
    "🚀 Voy a ser desarrolladora de software",
    "🧠 Programar es como resolver acertijos",
    "🌈 Cada día aprendo algo nuevo"
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
