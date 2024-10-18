function iniciarJuego() {
  let botonMascotaJugador = document.getElementById("boton-mascota");
  botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);
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
  let AtaqueAleatorio = aleatorio(1, 3);
  if (AtaqueAleatorio == 1) {
    spanMascotaEnemigo.innerHTML = "Hipodoge";
  } else if (AtaqueAleatorio == 2) {
    spanMascotaEnemigo.innerHTML = "Capipepo";
  } else if (AtaqueAleatorio == 3) {
    spanMascotaEnemigo.innerHTML = "Ratigueya";
  }
}
function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
window.addEventListener("load", iniciarJuego);
