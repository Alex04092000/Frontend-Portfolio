# Guía del proyecto 1: Tarjetas de vocabulario

Esta guía es para aprender, no para copiar. La versión 1 ya funciona y está comentada línea por línea. Tu trabajo es entenderla y luego añadir las mejoras tú mismo, una por una, con pistas pero sin la solución completa.

**Ritmo sugerido:** una sesión = una tarde de 2 horas. En total, unas 12 a 16 sesiones.

---

## Antes de empezar (sesión 1)

1. Instala en VS Code la extensión **Live Server** (de Ritwick Dey). Te abre la página en el navegador y la recarga sola cada vez que guardas.
2. Clona el repositorio y abre la carpeta `01-flashcards-vocabulario` en VS Code.
3. Clic derecho en `index.html` y elige "Open with Live Server".
4. Abre las **herramientas de desarrollador** del navegador (F12) y ve a la pestaña **Console**. Ahí verás los errores de JavaScript. Va a ser tu mejor amiga.

**Prueba rápida:** en la consola escribe `tarjetas` y pulsa Enter. Verás la lista de palabras. Escribe `indiceActual = 3` y luego `mostrarTarjeta()`. La tarjeta cambia. Acabas de controlar la app desde la consola.

---

## Parte A: entender la versión 1 (sesiones 2 a 4)

Lee `app.js` de arriba abajo. Después responde estas preguntas por escrito (en un papel o en un archivo `notas.md`). Si no sabes alguna, vuelve a leer el comentario correspondiente.

1. ¿Qué diferencia hay entre `const` y `let`? ¿Por qué `indiceActual` usa `let`?
2. ¿Qué devuelve `document.getElementById("palabra")`?
3. ¿Por qué escribimos `addEventListener("click", voltearTarjeta)` y no `voltearTarjeta()`?
4. ¿Quién hace el giro de la tarjeta: JavaScript o CSS? ¿Qué hace cada uno?
5. ¿Qué pasa si estás en la última tarjeta y pulsas "Siguiente"? Encuentra la línea que lo decide.

### Comparación con Java

| Java | JavaScript |
|------|------------|
| `int x = 5;` | `let x = 5;` (no se declara el tipo) |
| `final int X = 5;` | `const X = 5;` |
| `ArrayList<Tarjeta> lista` | `const lista = [ ... ]` |
| `new Tarjeta("hi", "hola")` | `{ ingles: "hi", espanol: "hola" }` |
| `lista.size()` | `lista.length` |
| `lista.get(0)` | `lista[0]` |
| `System.out.println(x)` | `console.log(x)` |
| `x.equals(y)` | `x === y` (usa siempre tres iguales) |

### Ejercicios para soltar la mano

Haz cada uno, comprueba que funciona y luego deshazlo (o hazlo en una copia):

- Añade 5 palabras más al array `tarjetas`. El contador debería actualizarse solo. ¿Por qué no tuviste que tocar nada más?
- Cambia los colores en las variables de `styles.css` (`:root`).
- Añade `console.log(indiceActual)` dentro de `siguienteTarjeta` y mira la consola mientras pulsas el botón.

**Primer commit:** cuando termines la parte A, guarda tus notas y haz commit:

```bash
git add .
git commit -m "docs: add my notes on version 1"
git push
```

---

## Parte B: mejoras guiadas (sesiones 5 a 14)

Haz una mejora por vez y un commit por mejora. Si te atascas más de 30 minutos, pregúntame y lo vemos juntos: explícame qué intentaste y qué error ves en la consola.

### Mejora 1: botón "Barajar"

**Objetivo:** un botón que mezcla las tarjetas en orden aleatorio y vuelve a la primera.

**Pistas:**
- Añade un `<button id="btn-barajar">` en el HTML y búscalo con `getElementById`.
- `Math.random()` da un número decimal entre 0 y 1. `Math.floor(Math.random() * n)` da un entero entre 0 y n - 1.
- Busca "algoritmo Fisher-Yates" e impleméntalo con un bucle `for` que recorra el array de atrás hacia adelante. Para intercambiar dos posiciones puedes usar una variable temporal, igual que en Java.
- Después de barajar: `indiceActual = 0;` y `mostrarTarjeta();`.

**Commit:** `feat: add shuffle button`

### Mejora 2: botón para escuchar la pronunciación

**Objetivo:** un botón con un altavoz que lee la palabra en inglés en voz alta.

**Pistas:**
- El navegador trae una voz incorporada: la Web Speech API.
- `const voz = new SpeechSynthesisUtterance("hello");` crea lo que se va a decir.
- `voz.lang = "en-US";` elige el idioma.
- `speechSynthesis.speak(voz);` lo reproduce.
- Cuidado: si el botón está dentro de la tarjeta, al hacer clic también se voltea. Busca qué hace `evento.stopPropagation()`.

**Commit:** `feat: add pronunciation button`

### Mejora 3: "La sé" y "Repasar"

**Objetivo:** dos botones para marcar cada tarjeta. El contador muestra cuántas sabes ("5 de 8 aprendidas").

**Pistas:**
- Añade una propiedad nueva a cada objeto, por ejemplo `aprendida: false`.
- Al pulsar "La sé": `tarjetas[indiceActual].aprendida = true;` y vuelve a llamar a `mostrarTarjeta()`.
- Para contar: recorre el array con un `for` y suma las que tengan `aprendida === true`. Cuando funcione, busca el método `filter` y reescríbelo en una línea.
- Bonus: muestra un borde verde en las tarjetas aprendidas añadiendo una clase CSS.

**Commit:** `feat: mark cards as learned`

### Mejora 4: guardar el progreso con localStorage

**Objetivo:** si recargo la página, no pierdo lo que marqué.

**Pistas:**
- `localStorage` guarda texto en el navegador, incluso si cierras la pestaña.
- Solo guarda texto, así que hay que convertir el array: `JSON.stringify(tarjetas)` lo pasa a texto y `JSON.parse(texto)` lo devuelve a array.
- Crea una función `guardar()` que haga `localStorage.setItem("tarjetas", JSON.stringify(tarjetas));` y llámala cada vez que algo cambie.
- Al arrancar, lee `localStorage.getItem("tarjetas")`. Si no es `null`, úsalo en lugar de la lista original. Para eso tendrás que cambiar `const tarjetas` por `let tarjetas`. ¿Por qué?

**Commit:** `feat: save progress in localStorage`

### Mejora 5: añadir palabras propias

**Objetivo:** un formulario con tres campos (inglés, español, ejemplo) que añade una tarjeta nueva.

**Pistas:**
- Usa `<form>` con `<input required>`. Escucha el evento `"submit"` del formulario, no el clic del botón.
- Lo primero dentro de la función: `evento.preventDefault();` para que la página no se recargue.
- Lee los valores con `input.value`, usa `.trim()` para quitar espacios sobrantes.
- `tarjetas.push({ ... })` añade al final, como `add()` en un ArrayList.
- No olvides llamar a `guardar()` y a `mostrarTarjeta()`.

**Commit:** `feat: add form to create cards`

### Mejoras opcionales (elige una o dos)

- **Categorías:** añade `categoria: "verbos"` a cada tarjeta y un `<select>` para filtrar.
- **Modo oscuro:** un botón que añade la clase `oscuro` al `<body>` y redefine las variables de color en CSS. Guarda la preferencia en localStorage.
- **Invertir idioma:** estudiar de español a inglés.
- **Borrar una tarjeta** con confirmación.

---

## Parte C: publicar (sesiones 15 y 16)

1. **Despliegue en Netlify:** crea una cuenta con tu GitHub, "Add new site", "Import an existing project", elige este repositorio y en **Base directory** escribe `01-flashcards-vocabulario`. Deja vacío el comando de build. En un minuto tendrás un enlace público.
2. **GIF:** graba 10 segundos usando la app (volteo, barajar, marcar como aprendida) con ScreenToGif o similar, y guárdalo en `capturas/demo.gif`.
3. **README:** completa el `README.md` de esta carpeta: enlace de la demo, el GIF y, sobre todo, la sección "Qué aprendí" con tus propias palabras.
4. **README principal:** cambia el estado del proyecto 1 a "Terminado" y pon el enlace de la demo.
5. **LinkedIn:** publica el GIF con el enlace y una frase sobre lo que aprendiste. Te ayudo a redactarla.

---

## Conceptos que habrás aprendido al terminar

Variables (`let`, `const`), tipos básicos, arrays y objetos, funciones, condicionales, bucles, el DOM (`getElementById`, `textContent`, `classList`), eventos (`click`, `keydown`, `submit`), `preventDefault` y `stopPropagation`, plantillas de texto, `localStorage` y JSON, métodos de array (`push`, `filter`), y la Web Speech API.

Eso es el núcleo de JavaScript en el navegador. Con esto, el proyecto 2 se va a sentir mucho más fácil.
