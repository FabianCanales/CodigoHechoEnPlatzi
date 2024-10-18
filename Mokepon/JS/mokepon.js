let ataquejugador;
let ataqueEnemigo;

function iniciarJuego() {
  let botonMascotaJugador = document.getElementById("boton-mascota");
  botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);

  let btnFuego = document.getElementById("boton-fuego");
  btnFuego.addEventListener("click", ataqueJugadorFuego);

  let btnAwa = document.getElementById("boton-awa");
  btnAwa.addEventListener("click", ataqueJugadorawa);

  let btnTierra = document.getElementById("boton-tierra");
  btnTierra.addEventListener("click", ataqueJugadortierra);
}
function seleccionarMascotaJugador() {
  let inputHipodoge = document.getElementById("hipodoge");
  let inputCapipepo = document.getElementById("capipepo");
  let inputRatigueya = document.getElementById("ratigueya");
  let spanMascotaJugador = document.getElementById("Mascota-Jugador");

  if (inputHipodoge.checked == true) {
    spanMascotaJugador.innerHTML = "Hipodoge";
  } else if (inputCapipepo.checked == true) {
    spanMascotaJugador.innerHTML = "Capipepo";
  } else if (inputRatigueya.checked == true) {
    spanMascotaJugador.innerHTML = "Ratigueya";
  } else {
    alert("No has seleccionado una Mascota \n Por favor selecciona una ");
  }

  seleccionarMascotaEnemigo();
}
function seleccionarMascotaEnemigo() {
  let spanMascotaEnemigo = document.getElementById("Mascota-Enemigo");
  let mascotaAleatorio = aleatorio(1, 3);
  if (mascotaAleatorio == 1) {
    spanMascotaEnemigo.innerHTML = "Hipodoge";
  } else if (mascotaAleatorio == 2) {
    spanMascotaEnemigo.innerHTML = "Capipepo";
  } else if (mascotaAleatorio == 3) {
    spanMascotaEnemigo.innerHTML = "Ratigueya";
  }
}
function ataqueJugadorFuego() {
  ataquejugador = "Fuego";
  ataqueAleatorioEnemigo();
}
function ataqueJugadorawa() {
  ataquejugador = "Awa";
  ataqueAleatorioEnemigo();
}
function ataqueJugadortierra() {
  ataquejugador = "Tierra";
  ataqueAleatorioEnemigo();
}
function ataqueAleatorioEnemigo() {
  let ataqueAleatorio = aleatorio(1, 3);
  if (ataqueAleatorio == 1) {
    ataqueEnemigo = "Fuego";
    alert("El enemigo te ha atacado con Fuego");
  } else if (ataqueAleatorio == 2) {
    ataqueEnemigo = "Awa";
    alert("El enemigo te ha atacado con Awa");
  } else if (ataqueAleatorio == 3) {
    ataqueEnemigo = "Tierra";
    alert("El enemigo te ha atacado con Tierra");
  }
}
function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
window.addEventListener("load", iniciarJuego);
