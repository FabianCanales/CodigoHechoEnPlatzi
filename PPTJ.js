function aleatorio(minimo, maximo) {
  return Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
}

function eleccion(jugada) {
  let resultado = "";
  if (jugada == 1) {
    resultado = "Piedra 🥌";
  } else if (jugada == 2) {
    resultado = "Papel  🧻";
  } else if (jugada == 3) {
    resultado = "Tijeras ✂ ";
  } else {
    alert("WRONG CHOICE");
  }
  return resultado;
}
// 1- piedra   2- papel  3- tijeras
let nombre = "";
let jugador = 0;
let minimo = 1;
let maximo = 3;
let triunfos = 0;
let perdidas = 0;
nombre = prompt("cual es tu nombre ?");
alert("Bienvenido " + nombre);

while (triunfos < 3 && perdidas < 3) {
  let pc = aleatorio(1, 3);
  jugador = prompt("Elije  1 - piedra  2 - papel  3- tijera ");
  alert(
    "TU ELIGES :" + eleccion(jugador) + "'\n'" + "PC Elige :" + eleccion(pc)
  );

  //combate

  if (pc == jugador) {
    alert("⚠ Empate ⚠");
  } else if (
    (jugador == 1 && pc == 3) ||
    (jugador == 2 && pc == 1) ||
    (jugador == 3 && pc == 2)
  ) {
    alert("✅GANASTE✅");
    triunfos = triunfos + 1;
  } else {
    alert("❌ PERDISTE ❌");
    perdidas = perdidas + 1;
  }
  alert(
    "Has ganado: " +
      triunfos +
      " Veces ✅ " +
      "'\n'" +
      "Has Perdido : " +
      perdidas +
      "Veces ❌"
  );
}
