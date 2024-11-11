const sectionSelecionarAtaque = document.getElementById("selecionar-ataque");
const botonMascotaJugador = document.getElementById("boton-mascota");
const sectionReiniciar = document.getElementById("reiniciar");
const btnReiniciar = document.getElementById("boton-reiniciar");

const sectionSelecionarMascota = document.getElementById("selecionar-mascota");

const spanMascotaJugador = document.getElementById("Mascota-Jugador");
const spanMascotaEnemigo = document.getElementById("Mascota-Enemigo");

const spanVidasJugador = document.getElementById("vidas-Jugador");
const spanVidasEnemigo = document.getElementById("vidas-Enemigo");

const sectionMensajes = document.getElementById("resultado");
const ataquedeljugador = document.getElementById("ataque-del-jugador");
const ataquedelenemigo = document.getElementById("ataque-del-enemigo");

const contenedorTarjetas = document.getElementById("contenedor-tarjetas");
const contenedorAtaques = document.getElementById("contenedor-ataques");

let mokepones = [];
let ataquejugador;
let ataqueEnemigo;
let ataquesMokepon;
let inputHipodoge;
let inputCapipepo;
let inputRatigueya;
let mascotaJugador;
let vidaJugador = 3;
let vidaEnemigo = 3;
let opciondemokepones;

let btnFuego;
let btnAwa;
let btnTierra;
let botones = [];
let ataquesJugador = [];
class Mokepon {
  constructor(nombre, foto, vida) {
    this.nombre = nombre;
    this.foto = foto;
    this.vida = vida;
    this.ataques = [];
  }
}

let hipodoge = new Mokepon(
  "Hipodoge",
  "./Assets/mokepons_mokepon_hipodoge_attack.png",
  5
);
let capipepo = new Mokepon(
  "Capipepo",
  "./Assets/mokepons_mokepon_capipepo_attack.png",
  5
);
let ratigueya = new Mokepon(
  "Ratigueya",
  "./Assets/mokepons_mokepon_ratigueya_attack.png",
  5
);

hipodoge.ataques.push(
  { nombre: "💧", id: "boton-awa" },
  { nombre: "💧", id: "boton-awa" },
  { nombre: "💧", id: "boton-awa" },
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "🌱", id: "boton-tierra" }
);
ratigueya.ataques.push(
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "💧", id: "boton-awa" },
  { nombre: "🌱", id: "boton-tierra" }
);
capipepo.ataques.push(
  { nombre: "🌱", id: "boton-tierra" },
  { nombre: "🌱", id: "boton-tierra" },
  { nombre: "🌱", id: "boton-tierra" },
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "💧", id: "boton-awa" }
);
mokepones.push(hipodoge, ratigueya, capipepo);

function iniciarJuego() {
  sectionSelecionarAtaque.style.display = "none";

  mokepones.forEach((mokepon) => {
    opciondemokepones = ` <input type="radio" name="mascota" id=${mokepon.nombre} />
        <label for=${mokepon.nombre} class="tarjeta-de-mokepon">
          <p>${mokepon.nombre} </p>
          <img
            src=${mokepon.foto}
            alt=${mokepon.nombre}/>
        </label>`;

    contenedorTarjetas.innerHTML += opciondemokepones;

    inputHipodoge = document.getElementById("Hipodoge");
    inputCapipepo = document.getElementById("Capipepo");
    inputRatigueya = document.getElementById("Ratigueya");
  });

  botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);
  sectionReiniciar.style.display = "none";
  btnReiniciar.addEventListener("click", reiniciarJuego);
}
function seleccionarMascotaJugador() {
  sectionSelecionarMascota.style.display = "none";
  sectionSelecionarAtaque.style.display = "flex";

  if (inputHipodoge.checked == true) {
    spanMascotaJugador.innerHTML = inputHipodoge.id;
    mascotaJugador = inputHipodoge.id;
  } else if (inputCapipepo.checked == true) {
    spanMascotaJugador.innerHTML = inputCapipepo.id;
    mascotaJugador = inputCapipepo.id;
  } else if (inputRatigueya.checked == true) {
    spanMascotaJugador.innerHTML = inputRatigueya.id;
    mascotaJugador = inputRatigueya.id;
  } else {
    alert("No has seleccionado una Mascota \n Por favor selecciona una ");
  }

  extraerAtaques(mascotaJugador);
  seleccionarMascotaEnemigo();
}
function extraerAtaques(mascotaJugador) {
  let ataques;
  for (let i = 0; i < mokepones.length; i++) {
    if (mascotaJugador === mokepones[i].nombre) {
      ataques = mokepones[i].ataques;
    }
  }
  mostrarAtaques(ataques);
}

function mostrarAtaques(ataques) {
  ataques.forEach((ataque) => {
    ataquesMokepon = `<button id=${ataque.id} class="btn-ataque btataque">${ataque.nombre}</button>`;
    contenedorAtaques.innerHTML += ataquesMokepon;
  });
  btnFuego = document.getElementById("boton-tierra");
  btnAwa = document.getElementById("boton-awa");
  btnTierra = document.getElementById("boton-fuego");

  btnFuego.addEventListener("click", ataqueJugadorFuego);
  btnAwa.addEventListener("click", ataqueJugadorawa);
  btnTierra.addEventListener("click", ataqueJugadortierra);

  botones = document.querySelectorAll(".btataque");
}
function secuenciaAtaque() {
  botones.forEach((boton) => {
    boton.addEventListener("click", (e) => {
      if (e.target.text.content === "🔥") {
        ataquesjugador.push("FUEGO");
        console.log(ataquesjugador);
        boton.style.background = "#112f58";
      } else if (e.target.text.content === "🔥") {
      }
    });
  });
}

function seleccionarMascotaEnemigo() {
  let mascotaAleatorio = aleatorio(0, mokepones.length - 1);
  spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatorio].nombre;
  secuenciaAtaque();
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
  } else if (ataqueAleatorio == 2) {
    ataqueEnemigo = "Awa";
  } else if (ataqueAleatorio == 3) {
    ataqueEnemigo = "Tierra";
  }
  combateMokepon();
}
function combateMokepon() {
  if (ataquejugador == ataqueEnemigo) {
    crearMensaje("EMPATE");
  } else if (
    (ataquejugador == "Fuego" && ataqueEnemigo == "Tierra") ||
    (ataquejugador == "Tierra" && ataqueEnemigo == "Awa") ||
    (ataquejugador == "Awa" && ataqueEnemigo == "Fuego")
  ) {
    crearMensaje("ganaste");
    vidaEnemigo--;
    spanVidasEnemigo.innerHTML = vidaEnemigo;
  } else {
    crearMensaje("Perdiste");
    vidaJugador--;
    spanVidasJugador.innerHTML = vidaJugador;
  }
  revisarVidas();
}

function revisarVidas() {
  if (vidaEnemigo == 0) {
    crearMensajeFinal("FELICITACIONES HAS GANADO EL COMBATE");
  } else if (vidaJugador == 0) {
    crearMensajeFinal("LO SIENTO , PERDISTE :C");
  }
}

function crearMensaje(resultado) {
  let nuevoAtaqueDelJugador = document.createElement("p");
  let nuevoAtaqueDelEnemigo = document.createElement("p");

  sectionMensajes.innerHTML = resultado;
  nuevoAtaqueDelJugador.innerHTML = ataquejugador;
  nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo;

  ataquedeljugador.appendChild(nuevoAtaqueDelJugador);
  ataquedelenemigo.appendChild(nuevoAtaqueDelEnemigo);
}
function crearMensajeFinal(resultadoFinal) {
  sectionReiniciar.style.display = "block";
  sectionMensajes.innerHTML = resultadoFinal;
  btnFuego.disabled = true;
  btnAwa.disabled = true;
  btnTierra.disabled = true;
}
function reiniciarJuego() {
  location.reload();
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener("load", iniciarJuego);
