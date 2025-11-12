console.log("Hola desde Script.js");

// Referencias a botones y elementos
let botonDado = document.querySelector("#botonDado");
let botonNuevoJuego = document.querySelector("#botonNuevoJuego");
let resultadoDado = document.querySelector("#resultadoDado");
let mensajes = document.querySelector("#mensajes");
let jugador1Panel = document.querySelector("#jugador1-panel");
let jugador2Panel = document.querySelector("#jugador2-panel");
let ficha1 = document.querySelector("#ficha1");
let ficha2 = document.querySelector("#ficha2");

// Variables de turno y perder turno
let turnoJugador = 1;
let jugador1PierdeTurno = false;
let jugador2PierdeTurno = false;

// Tamaño de fichas (para centrar) 
let fichaAncho = ficha1.offsetWidth || 40; 
let fichaAlto  = ficha1.offsetHeight || 40;

// Coordenadas de las casillas
let casillas = [
    { x: 196, y: 661 }, { x: 206, y: 564 }, { x: 212, y: 471 },
    { x: 220, y: 393 }, { x: 226, y: 289 }, { x: 233, y: 210 },
    { x: 314, y: 201 }, { x: 389, y: 206 }, { x: 456, y: 205 },
    { x: 516, y: 203 }, { x: 588, y: 205 }, { x: 663, y: 206 },
    { x: 675, y: 307 }, { x: 688, y: 394 }, { x: 693, y: 519 },
    { x: 698, y: 647 }, { x: 602, y: 648 }, { x: 510, y: 644 },
    { x: 410, y: 641 }, { x: 321, y: 642 }, { x: 294, y: 551 },
    { x: 302, y: 424 }, { x: 303, y: 325 }, { x: 373, y: 299 },
    { x: 444, y: 297 }, { x: 513, y: 298 }, { x: 593, y: 296 },
    { x: 597, y: 373 }, { x: 598, y: 437 }, { x: 596, y: 518 },
    { x: 514, y: 518 }, { x: 445, y: 518 }, { x: 375, y: 496 },
    { x: 374, y: 410 }, { x: 440, y: 412 }, { x: 514, y: 410 }
];

// Acciones especiales (usa índices de array, no número visual de casilla) 
let accionesCasillas = Array(36).fill(null);
accionesCasillas[1]  = { tipo: "saltar", destino: 20 }; // casilla 2 → índice 1
accionesCasillas[4]  = { tipo: "pierdeTurno" };         // casilla 5 → índice 4
accionesCasillas[6]  = { tipo: "saltar", destino: 10 }; // casilla 7 → índice 6
accionesCasillas[11] = { tipo: "reiniciar" };           // casilla 12 → índice 11
accionesCasillas[13] = { tipo: "saltar", destino: 28 }; // casilla 14 → índice 13
accionesCasillas[17] = { tipo: "pierdeTurno" };         // casilla 18 → índice 17
accionesCasillas[21] = { tipo: "avanzar", pasos: 2 };   // casilla 22 → índice 21
accionesCasillas[24] = { tipo: "saltar", destino: 8 };  // casilla 25 → índice 24
accionesCasillas[29] = { tipo: "saltar", destino: 26 }; // casilla 30 → índice 29
accionesCasillas[30] = { tipo: "tirarOtraVez" };       // casilla 31 → índice 30
accionesCasillas[32] = { tipo: "saltar", destino: 19 }; // casilla 33 → índice 32
accionesCasillas[35] = { tipo: "final" };               // casilla 36 → índice 35

// Posiciones de jugadores (índice en array)
let posicionJ1 = 0;
let posicionJ2 = 0;

// Función para mover ficha
function moverFicha(jugador, pasos) {
    if (jugador === 1) {
        posicionJ1 += pasos;
        if (posicionJ1 >= casillas.length) posicionJ1 = casillas.length - 1;
        ficha1.style.left = (casillas[posicionJ1].x - fichaAncho / 2) + "px";
        ficha1.style.top  = (casillas[posicionJ1].y - fichaAlto / 2) + "px";
        mensajes.textContent = `Jugador 1 avanza a la casilla ${posicionJ1 + 1}`;
        aplicarAccion(1, posicionJ1);
    } else {
        posicionJ2 += pasos;
        if (posicionJ2 >= casillas.length) posicionJ2 = casillas.length - 1;
        ficha2.style.left = (casillas[posicionJ2].x - fichaAncho / 2) + "px";
        ficha2.style.top  = (casillas[posicionJ2].y - fichaAlto / 2) + "px";
        mensajes.textContent = `Jugador 2 avanza a la casilla ${posicionJ2 + 1}`;
        aplicarAccion(2, posicionJ2);
    }
}

// Aplicar acciones especiales
function aplicarAccion(jugador, posicion) {
    let accion = accionesCasillas[posicion];
    if (!accion) return;

    switch (accion.tipo) {
        case "saltar":
            mensajes.textContent += ` → Saltar a casilla ${accion.destino + 1}`;
            if (jugador === 1) posicionJ1 = accion.destino;
            else posicionJ2 = accion.destino;
            moverFicha(jugador, 0);
            break;
        case "pierdeTurno":
            mensajes.textContent += " → Pierde el siguiente turno!";
            if (jugador === 1) jugador1PierdeTurno = true;
            else jugador2PierdeTurno = true;
            break;
        case "reiniciar":
            mensajes.textContent += " → Vuelves al inicio!";
            if (jugador === 1) posicionJ1 = 0;
            else posicionJ2 = 0;
            moverFicha(jugador, 0);
            break;
        case "avanzar":
            mensajes.textContent += ` → Avanza ${accion.pasos} casillas!`;
            moverFicha(jugador, accion.pasos);
            break;
        case "tirarOtraVez":
            mensajes.textContent += " → Puedes tirar otra vez!";
            break;
        case "final":
            mensajes.textContent += " → ¡Has llegado al final! 🎉";
            botonDado.disabled = true;
            break;
    }
}

// Función lanzar dado
function lanzarDado() {
    let numero = Math.floor(Math.random() * 6) + 1;
    resultadoDado.textContent = "🎲 " + numero;

    if ((turnoJugador === 1 && jugador1PierdeTurno) || (turnoJugador === 2 && jugador2PierdeTurno)) {
        mensajes.textContent = `Jugador ${turnoJugador} pierde turno.`;
        if (turnoJugador === 1) jugador1PierdeTurno = false;
        else jugador2PierdeTurno = false;
        cambiarTurno();
        return;
    }

    moverFicha(turnoJugador, numero);

    // Si la acción no es "tirarOtraVez", cambiar turno
    let pos = turnoJugador === 1 ? posicionJ1 : posicionJ2;
    if (!(accionesCasillas[pos] && accionesCasillas[pos].tipo === "tirarOtraVez")) {
        cambiarTurno();
    }
}

//  Cambiar turno 
function cambiarTurno() {
    turnoJugador = turnoJugador === 1 ? 2 : 1;
    jugador1Panel.classList.toggle("activo");
    jugador2Panel.classList.toggle("activo");
    mensajes.textContent += ` Turno del Jugador ${turnoJugador}`;
}

//  Nueva partida
function nuevaPartida() {
    posicionJ1 = 0;
    posicionJ2 = 0;
    ficha1.style.left = (casillas[0].x - fichaAncho / 2) + "px";
    ficha1.style.top  = (casillas[0].y - fichaAlto / 2) + "px";
    ficha2.style.left = (casillas[0].x - fichaAncho / 2 + 25) + "px";
    ficha2.style.top  = (casillas[0].y - fichaAlto / 2) + "px";

    turnoJugador = 1;
    jugador1PierdeTurno = false;
    jugador2PierdeTurno = false;
    botonDado.disabled = false;

    jugador1Panel.classList.add("activo");
    jugador2Panel.classList.remove("activo");
    resultadoDado.textContent = "🎲";
    mensajes.textContent = "Nueva partida iniciada";
}

// Eventos 
botonDado.addEventListener("click", lanzarDado);
botonNuevoJuego.addEventListener("click", nuevaPartida);

// Inicialización
nuevaPartida();
