// ===== JAVASCRIPT =====

// Recupera el tema guardado al cargar la página
window.onload = function () {
    if (localStorage.getItem("modoOscuro") === "true") {
        document.body.classList.add("dark");
    }

    if (localStorage.getItem("temaAzul") === "true") {
        document.body.classList.add("tema-azul");
        document.getElementById("botonTema").innerText = "Tema rosa 💖";
    }
};

// Cambia el texto cuando se presiona el botón
function saludar() {
    const texto = document.getElementById("mensaje");
    texto.innerText = "✨ Estoy programando mi primera página web ✨";
    texto.style.color = "#ad1457";
    texto.style.fontSize = "22px";
}

// Activa o desactiva el modo oscuro
function modoOscuro() {
    document.body.classList.toggle("dark");

    // Guarda el estado
    localStorage.setItem(
        "modoOscuro",
        document.body.classList.contains("dark")
    );
}

// ===== MENSAJE DINÁMICO =====
let cambiado = false;

function cambiarMensaje() {
    const texto = document.getElementById("mensaje");
    const boton = document.getElementById("botonMensaje");

    if (!cambiado) {
        texto.innerText = "🚀 Estoy creando cosas increíbles con código";
        boton.innerText = "Volver al mensaje 💖";
    } else {
        texto.innerText = "Estoy aprendiendo desarrollo web y me encanta 💖";
        boton.innerText = "Cambiar mensaje ✨";
    }

    cambiado = !cambiado;
}

// ===== CAMBIO DE TEMA =====
let temaAzul = false;

function cambiarTema() {
    const boton = document.getElementById("botonTema");

    document.body.classList.toggle("tema-azul");

    if (!temaAzul) {
        boton.innerText = "Tema rosa 💖";
    } else {
        boton.innerText = "Cambiar tema 🌈";
    }

    // Guarda el estado
    localStorage.setItem(
        "temaAzul",
        document.body.classList.contains("tema-azul")
    );

    temaAzul = !temaAzul;
}
// Aplica animación al mensaje
function animarMensaje() {
    const texto = document.getElementById("mensaje");
    texto.classList.remove("animar");
    void texto.offsetWidth; // reinicia animación
    texto.classList.add("animar");
}

// Ajusta tus funciones para usar la animación
function saludar() {
    const texto = document.getElementById("mensaje");
    texto.innerText = "✨ Estoy programando mi primera página web ✨";
    texto.style.color = "#ad1457";
    texto.style.fontSize = "22px";
    animarMensaje();
}

function cambiarMensaje() {
    const texto = document.getElementById("mensaje");
    const boton = document.getElementById("botonMensaje");

    if (!cambiado) {
        texto.innerText = "🚀 Estoy creando cosas increíbles con código";
        boton.innerText = "Volver al mensaje 💖";
    } else {
        texto.innerText = "Estoy aprendiendo desarrollo web y me encanta 💖";
        boton.innerText = "Cambiar mensaje ✨";
    }

    cambiado = !cambiado;
    animarMensaje();
}
