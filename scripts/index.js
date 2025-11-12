console.log("Hola desde Script.js")


// Referencias a los botones
let botonDado = document.querySelector("#botonDado");
let botonNuevoJuego = document.querySelector("#botonNuevoJuego");

// Referencias a otros elementos
let resultadoDado = document.querySelector("#resultadoDado");
let mensajes = document.querySelector("#mensajes");

let jugador1Panel = document.querySelector("#jugador1-panel");
let jugador2Panel = document.querySelector("#jugador2-panel");

// Función para lanzar el dado
function lanzarDado() {
    let numero = Math.floor(Math.random() * 6) + 1; // Número aleatorio 1-6
    resultadoDado.textContent = "🎲 " + numero;
    mensajes.textContent = "Has sacado un " + numero;
    cambiarTurno();
}

// Asignar la función al botón
botonDado.addEventListener("click", lanzarDado);

function nuevaPartida() {
    resultadoDado.textContent = "🎲";
    mensajes.textContent = "Nueva partida iniciada.";

}

botonNuevoJuego.addEventListener("click", nuevaPartida);

//Alternar turnos entre jugadores

let turnoJugador = 1; // Empieza el jugador 1

function cambiarTurno() {
    if (turnoJugador === 1) {
        turnoJugador = 2;
        jugador1Panel.classList.remove("activo");
        jugador2Panel.classList.add("activo");
        mensajes.textContent = "Turno del Jugador 2 (Rojo)";
    } else {
        turnoJugador = 1;
        jugador2Panel.classList.remove("activo");
        jugador1Panel.classList.add("activo");
        mensajes.textContent = "Turno del Jugador 1 (Azul)";
    }
}