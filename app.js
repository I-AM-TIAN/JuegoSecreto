let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSortedos = [];
let numeroMaximo = 10;

function asignarTextoElement(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
  if (listaNumerosSortedos.length == numeroMaximo) {
    asignarTextoElement('p', 'Ya se sortearion todos los números posibles');
  } else {
    if (listaNumerosSortedos.includes(numeroGenerado)) {
      return generarNumeroSecreto();
    } else {
      listaNumerosSortedos.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

  if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElement(
      "p",
      `¡Felicidades! Has adivinado el número en ${intentos} ${
        intentos === 1 ? "intento" : "intentos"
      }`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (numeroDeUsuario > numeroSecreto) {
      asignarTextoElement("p", "El número secreto es menor");
    } else {
      asignarTextoElement("p", "El número secreto es mayor");
    }
    intentos++;
    limpiarCaja();
  }
}

function limpiarCaja() {
  document.querySelector("#valorUsuario").value = "";
}

function condicionesIniciales() {
  asignarTextoElement("h1", "Juego del número secreto");

  asignarTextoElement("p", `Indica un número del uno al ${numeroMaximo}`);

  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}

function reiniciarJuego() {
  limpiarCaja();
  condicionesIniciales();
  document.querySelector("#reiniciar").setAttribute("disabled", true);
}

condicionesIniciales();
