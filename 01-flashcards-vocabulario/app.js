// =====================================================================
// Tarjetas de vocabulario · versión 1
//
// Este archivo tiene cuatro partes, en este orden:
//   1. Los DATOS: la lista de palabras.
//   2. El ESTADO: lo que cambia mientras se usa la app.
//   3. Las REFERENCIAS al HTML: los elementos que vamos a modificar.
//   4. Las FUNCIONES y los EVENTOS: qué pasa cuando el usuario hace algo.
//
// Lee los comentarios con calma. La guía paso a paso está en GUIA.md.
// =====================================================================


// ---------------------------------------------------------------------
// 1. DATOS
// ---------------------------------------------------------------------
// Un "array" (lista) de "objetos". Cada objeto es una tarjeta con tres
// propiedades. Es parecido a un ArrayList de objetos en Java, pero sin
// necesidad de crear una clase: escribimos el objeto directamente
// entre llaves { }.
const tarjetas = [
  { ingles: "bookshelf", espanol: "estantería", ejemplo: "The bookshelf is full of novels." },
  { ingles: "to borrow", espanol: "pedir prestado", ejemplo: "Can I borrow your pen?" },
  { ingles: "homework", espanol: "deberes", ejemplo: "I do my homework after class." },
  { ingles: "to improve", espanol: "mejorar", ejemplo: "I want to improve my English." },
  { ingles: "schedule", espanol: "horario", ejemplo: "My schedule is busy on Fridays." },
  { ingles: "to look forward to", espanol: "tener ganas de", ejemplo: "I look forward to the weekend." },
  { ingles: "skill", espanol: "habilidad", ejemplo: "Listening is a key skill." },
  { ingles: "to get along", espanol: "llevarse bien", ejemplo: "I get along with my classmates." },
];


// ---------------------------------------------------------------------
// 2. ESTADO
// ---------------------------------------------------------------------
// "let" se usa para variables que van a cambiar. "const" para las que no.
// indiceActual dice qué tarjeta estamos viendo. Empieza en 0 porque,
// igual que en Java, la primera posición de una lista es la 0.
let indiceActual = 0;


// ---------------------------------------------------------------------
// 3. REFERENCIAS AL HTML
// ---------------------------------------------------------------------
// document.getElementById busca en la página el elemento con ese id
// y nos lo devuelve para poder leerlo o cambiarlo.
const elTarjeta = document.getElementById("tarjeta");
const elPalabra = document.getElementById("palabra");
const elTraduccion = document.getElementById("traduccion");
const elEjemplo = document.getElementById("ejemplo");
const elContador = document.getElementById("contador");
const btnAnterior = document.getElementById("btn-anterior");
const btnSiguiente = document.getElementById("btn-siguiente");


// ---------------------------------------------------------------------
// 4. FUNCIONES
// ---------------------------------------------------------------------

// mostrarTarjeta pinta en pantalla la tarjeta que indica indiceActual.
// Idea clave: los datos y el estado mandan; esta función solo
// "copia" lo que dicen al HTML. Cada vez que algo cambie,
// la volvemos a llamar.
function mostrarTarjeta() {
  const tarjeta = tarjetas[indiceActual];

  // textContent cambia el texto dentro de un elemento.
  elPalabra.textContent = tarjeta.ingles;
  elTraduccion.textContent = tarjeta.espanol;
  elEjemplo.textContent = tarjeta.ejemplo;

  // Las comillas invertidas ` ` permiten meter variables dentro del
  // texto con ${ }. Sumamos 1 porque para una persona la primera
  // tarjeta es la "1", no la "0".
  elContador.textContent = `${indiceActual + 1} de ${tarjetas.length}`;

  // Al cambiar de tarjeta, siempre la mostramos por el lado del inglés.
  elTarjeta.classList.remove("volteada");
}

// voltearTarjeta añade la clase "volteada" si no la tiene, y la quita
// si ya la tiene. El giro lo hace el CSS (mira .tarjeta.volteada en
// styles.css). JavaScript solo decide CUÁNDO; CSS decide CÓMO se ve.
function voltearTarjeta() {
  elTarjeta.classList.toggle("volteada");
}

function siguienteTarjeta() {
  indiceActual = indiceActual + 1;

  // Si nos pasamos del final, volvemos al principio.
  if (indiceActual >= tarjetas.length) {
    indiceActual = 0;
  }
  mostrarTarjeta();
}

function anteriorTarjeta() {
  indiceActual = indiceActual - 1;

  // Si bajamos de 0, saltamos a la última tarjeta.
  if (indiceActual < 0) {
    indiceActual = tarjetas.length - 1;
  }
  mostrarTarjeta();
}


// ---------------------------------------------------------------------
// EVENTOS: conectar las acciones del usuario con las funciones
// ---------------------------------------------------------------------
// addEventListener("click", funcion) significa: "cuando hagan clic
// aquí, ejecuta esta función". Fíjate que escribimos voltearTarjeta
// SIN paréntesis: le pasamos la función para que la ejecute después,
// no la ejecutamos ahora.
elTarjeta.addEventListener("click", voltearTarjeta);
btnSiguiente.addEventListener("click", siguienteTarjeta);
btnAnterior.addEventListener("click", anteriorTarjeta);

// Atajos de teclado para toda la página.
// "evento" trae información de lo que pasó; evento.key dice qué tecla.
document.addEventListener("keydown", function (evento) {
  if (evento.key === "ArrowRight") {
    siguienteTarjeta();
  } else if (evento.key === "ArrowLeft") {
    anteriorTarjeta();
  } else if (evento.key === " " && document.activeElement.tagName !== "BUTTON") {
    // Si un botón tiene el foco (la tarjeta también es un botón), el
    // navegador ya lo activa con la barra espaciadora. Por eso aquí
    // solo actuamos cuando el foco NO está en un botón, para no
    // hacer la acción dos veces.
    evento.preventDefault(); // evita que la página haga scroll
    voltearTarjeta();
  }
});


// ---------------------------------------------------------------------
// ARRANQUE
// ---------------------------------------------------------------------
// Al cargar la página, mostramos la primera tarjeta.
mostrarTarjeta();
