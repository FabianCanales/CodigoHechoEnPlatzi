function iniciarJuego() {
  let botonMascotaJugador = document.getElementById("boton-mascota");
  botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);
}

function seleccionarMascotaJugador() {
  if (document.getElementById("hipodoge").checked == true) {
    alert("Seleccionaste Como Mascota A HIPODOGE ");
  } else if (document.getElementById("capipepo").checked == true) {
    alert("Seleccionaste Como Mascota A CAPIPEPO");
  } else if (document.getElementById("ratigueya").checked == true) {
    alert("Has Seleccionado Como  Mascota A RATIGUEYA ");
  }
}
window.addEventListener("load", iniciarJuego);
