console.log("Hola desde Script.js");

const preguntas = [
  { 
    pregunta: "¿Cuál es la capital de Francia?", 
    opciones: ["Madrid", "París", "Roma", "Berlín"], 
    correcta: "París" 
  },
  { 
    pregunta: "¿Cuál es el planeta más grande del sistema solar?", 
    opciones: ["Tierra", "Marte", "Júpiter", "Venus"], 
    correcta: "Júpiter" 
  },
  { 
    pregunta: "¿Quién escribió 'Cien años de soledad'?", 
    opciones: ["Gabriel García Márquez", "Mario Vargas Llosa", "Pablo Neruda", "Julio Cortázar"], 
    correcta: "Gabriel García Márquez" 
  },
  { 
    pregunta: "¿Cuál es el metal más ligero?", 
    opciones: ["Hierro", "Aluminio", "Litio", "Cobre"], 
    correcta: "Litio" 
  },
  { 
    pregunta: "¿En qué año llegó el hombre a la Luna?", 
    opciones: ["1965", "1969", "1972", "1959"], 
    correcta: "1969" 
  },
  { pregunta: "¿Cuál es el río más largo del mundo?", opciones: ["Nilo", "Amazonas", "Yangtsé", "Misisipi"], correcta: "Amazonas" },
  { pregunta: "¿Qué órgano produce la insulina?", opciones: ["Hígado", "Páncreas", "Riñón", "Corazón"], correcta: "Páncreas" },
  { pregunta: "¿Cuál es la capital de Japón?", opciones: ["Seúl", "Beijing", "Tokio", "Bangkok"], correcta: "Tokio" },
  { pregunta: "¿Qué gas es esencial para la respiración?", opciones: ["Nitrógeno", "Oxígeno", "Dióxido de carbono", "Helio"], correcta: "Oxígeno" },
  { pregunta: "¿Quién pintó la Mona Lisa?", opciones: ["Leonardo da Vinci", "Miguel Ángel", "Picasso", "Van Gogh"], correcta: "Leonardo da Vinci" },
  { pregunta: "¿Cuál es el océano más grande?", opciones: ["Atlántico", "Índico", "Pacífico", "Ártico"], correcta: "Pacífico" },
  { pregunta: "¿Qué instrumento mide la presión atmosférica?", opciones: ["Termómetro", "Barómetro", "Higrómetro", "Anemómetro"], correcta: "Barómetro" },
  { pregunta: "¿Qué país tiene la mayor población?", opciones: ["India", "EE.UU.", "China", "Rusia"], correcta: "China" },
  { pregunta: "¿Cuál es el símbolo químico del oro?", opciones: ["Ag", "Au", "Gd", "Go"], correcta: "Au" },
  { pregunta: "¿Quién es el autor de 'Hamlet'?", opciones: ["Shakespeare", "Dante", "Goethe", "Cervantes"], correcta: "Shakespeare" },
  { pregunta: "¿Cuál es el deporte más popular del mundo?", opciones: ["Baloncesto", "Fútbol", "Tenis", "Cricket"], correcta: "Fútbol" },
  { pregunta: "¿Qué planeta es conocido como el planeta rojo?", opciones: ["Marte", "Mercurio", "Júpiter", "Venus"], correcta: "Marte" },
  { pregunta: "¿Cuál es el país más grande del mundo?", opciones: ["Canadá", "China", "Rusia", "Estados Unidos"], correcta: "Rusia" },
  { pregunta: "¿Qué órgano bombea sangre al cuerpo?", opciones: ["Pulmones", "Cerebro", "Hígado", "Corazón"], correcta: "Corazón" },
  { pregunta: "¿En qué continente está Egipto?", opciones: ["Asia", "África", "Europa", "Oceanía"], correcta: "África" },
  { pregunta: "¿Cuál es el animal terrestre más rápido?", opciones: ["León", "Guepardo", "Tigre", "Caballo"], correcta: "Guepardo" },
  { pregunta: "¿Qué idioma se habla en Brasil?", opciones: ["Español", "Portugués", "Inglés", "Francés"], correcta: "Portugués" },
  { pregunta: "¿Quién descubrió la gravedad?", opciones: ["Einstein", "Newton", "Galileo", "Tesla"], correcta: "Newton" },
  { pregunta: "¿Cuál es el símbolo químico del agua?", opciones: ["H2O", "CO2", "O2", "NaCl"], correcta: "H2O" },
  { pregunta: "¿Cuál es el continente más pequeño?", opciones: ["Europa", "Oceanía", "Antártida", "América"], correcta: "Oceanía" },
  { pregunta: "¿Qué planeta tiene los anillos más visibles?", opciones: ["Saturno", "Júpiter", "Urano", "Neptuno"], correcta: "Saturno" },
  { pregunta: "¿Cuál es el ave más grande?", opciones: ["Águila", "Avestruz", "Condor", "Cóndor"], correcta: "Avestruz" },
  { pregunta: "¿Qué instrumento se usa para escuchar el corazón?", opciones: ["Estetoscopio", "Termómetro", "Microscopio", "Barómetro"], correcta: "Estetoscopio" },
  { pregunta: "¿Quién escribió 'Don Quijote'?", opciones: ["Miguel de Cervantes", "Lope de Vega", "García Lorca", "Borges"], correcta: "Miguel de Cervantes" },
  { pregunta: "¿Cuál es la montaña más alta del mundo?", opciones: ["K2", "Everest", "Kangchenjunga", "Lhotse"], correcta: "Everest" },
  { pregunta: "¿Cuál es el océano más profundo?", opciones: ["Atlántico", "Pacífico", "Índico", "Ártico"], correcta: "Pacífico" },
  { pregunta: "¿Qué país inventó la pizza?", opciones: ["España", "Italia", "Francia", "Grecia"], correcta: "Italia" },
  { pregunta: "¿Cuál es la unidad básica de la vida?", opciones: ["Tejido", "Célula", "Órgano", "Molécula"], correcta: "Célula" },
  { pregunta: "¿Quién pintó 'La última cena'?", opciones: ["Leonardo da Vinci", "Miguel Ángel", "Rafael", "Van Gogh"], correcta: "Leonardo da Vinci" },
  { pregunta: "¿Cuál es el planeta más cercano al sol?", opciones: ["Mercurio", "Venus", "Tierra", "Marte"], correcta: "Mercurio" },
  { pregunta: "¿Qué elemento tiene el símbolo 'O'?", opciones: ["Oro", "Oxígeno", "Osmio", "Oganesón"], correcta: "Oxígeno" },
  { pregunta: "¿Qué continente tiene más países?", opciones: ["África", "Europa", "Asia", "América"], correcta: "África" },
  { pregunta: "¿Cuál es el instrumento musical de cuerdas más pequeño?", opciones: ["Viola", "Violín", "Guitarra", "Contrabajo"], correcta: "Violín" },
  { pregunta: "¿Quién fue el primer presidente de EE.UU.?", opciones: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"], correcta: "George Washington" },
  { pregunta: "¿Qué gas utilizan las plantas en la fotosíntesis?", opciones: ["Oxígeno", "Nitrógeno", "Dióxido de carbono", "Hidrógeno"], correcta: "Dióxido de carbono" },
  { pregunta: "¿Cuál es el desierto más grande del mundo?", opciones: ["Sahara", "Gobi", "Kalahari", "Antártico"], correcta: "Antártico" },
  { pregunta: "¿Qué país tiene forma de bota?", opciones: ["Italia", "España", "Grecia", "Portugal"], correcta: "Italia" },
  { pregunta: "¿Qué metal es líquido a temperatura ambiente?", opciones: ["Mercurio", "Plomo", "Oro", "Aluminio"], correcta: "Mercurio" },
  { pregunta: "¿Quién escribió '1984'?", opciones: ["Orwell", "Huxley", "Bradbury", "Camus"], correcta: "Orwell" },
  { pregunta: "¿Qué planeta es el más frío del sistema solar?", opciones: ["Neptuno", "Urano", "Saturno", "Júpiter"], correcta: "Neptuno" },
  { pregunta: "¿Cuál es la lengua más hablada del mundo?", opciones: ["Inglés", "Mandarín", "Español", "Hindi"], correcta: "Mandarín" },
  { pregunta: "¿Qué animal tiene la lengua más larga?", opciones: ["Camaleón", "Jirafa", "Elefante", "Canguro"], correcta: "Camaleón" },
  { pregunta: "¿Cuál es la capital de Canadá?", opciones: ["Toronto", "Ottawa", "Montreal", "Vancouver"], correcta: "Ottawa" },
  { pregunta: "¿Quién pintó 'El Grito'?", opciones: ["Edvard Munch", "Van Gogh", "Picasso", "Monet"], correcta: "Edvard Munch" },
  { pregunta: "¿Cuál es el número de planetas en el sistema solar?", opciones: ["8", "9", "7", "10"], correcta: "8" },
  { pregunta: "¿Qué país ganó la Copa Mundial de Fútbol 2018?", opciones: ["Brasil", "Francia", "Alemania", "Argentina"], correcta: "Francia" },
  { pregunta: "¿Cuál es el mineral más duro?", opciones: ["Cuarzo", "Diamante", "Oro", "Hierro"], correcta: "Diamante" },
  { pregunta: "¿Qué vitamina se obtiene del sol?", opciones: ["Vitamina A", "Vitamina B", "Vitamina C", "Vitamina D"], correcta: "Vitamina D" },
  { pregunta: "¿Cuál es el continente más grande?", opciones: ["Asia", "África", "América", "Europa"], correcta: "Asia" },
  { pregunta: "¿Qué país es famoso por los tulipanes?", opciones: ["Bélgica", "Países Bajos", "Alemania", "Francia"], correcta: "Países Bajos" }
];

console.log(preguntas);




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
accionesCasillas[1]  = { tipo: "saltar", destino: 20 }; // casilla 2 - índice 1
accionesCasillas[4]  = { tipo: "pierdeTurno" };         // casilla 5 - índice 4
accionesCasillas[6]  = { tipo: "saltar", destino: 10 }; // casilla 7 - índice 6
accionesCasillas[11] = { tipo: "reiniciar" };           // casilla 12 - índice 11
accionesCasillas[13] = { tipo: "saltar", destino: 28 }; // casilla 14 - índice 13
accionesCasillas[17] = { tipo: "pierdeTurno" };         // casilla 18 - índice 17
accionesCasillas[21] = { tipo: "avanzar", pasos: 2 };   // casilla 22 - índice 21
accionesCasillas[24] = { tipo: "saltar", destino: 8 };  // casilla 25 - índice 24
accionesCasillas[29] = { tipo: "saltar", destino: 26 }; // casilla 30 - índice 29
accionesCasillas[30] = { tipo: "tirarOtraVez" };       // casilla 31 - índice 30
accionesCasillas[32] = { tipo: "saltar", destino: 19 }; // casilla 33 - índice 32
accionesCasillas[35] = { tipo: "final" };               // casilla 36 - índice 35

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
            mensajes.textContent += ` - Saltar a casilla ${accion.destino + 1}`;
            if (jugador === 1) posicionJ1 = accion.destino;
            else posicionJ2 = accion.destino;
            moverFicha(jugador, 0);
            break;
        case "pierdeTurno":
            mensajes.textContent += " - Pierde el siguiente turno!";
            if (jugador === 1) jugador1PierdeTurno = true;
            else jugador2PierdeTurno = true;
            break;
        case "reiniciar":
            mensajes.textContent += " - Vuelves al inicio!";
            if (jugador === 1) posicionJ1 = 0;
            else posicionJ2 = 0;
            moverFicha(jugador, 0);
            break;
        case "avanzar":
            mensajes.textContent += ` - Avanza ${accion.pasos} casillas!`;
            moverFicha(jugador, accion.pasos);
            break;
        case "tirarOtraVez":
            mensajes.textContent += " - Puedes tirar otra vez!";
            break;
        case "final":
            mensajes.textContent += " - ¡Has llegado al final!";
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
    mensajes.textContent += ` - Turno del Jugador ${turnoJugador}`;
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
