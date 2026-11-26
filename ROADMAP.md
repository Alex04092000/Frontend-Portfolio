# Ruta de aprendizaje: 8 proyectos de JavaScript a React

Esta ruta va de lo más simple (JavaScript puro en el navegador) a lo más completo (una aplicación React con TypeScript, base de datos y usuarios). Cada proyecto se apoya en el anterior, así que conviene hacerlos en orden.

El hilo conductor es el aprendizaje de idiomas. Tengo experiencia real como profesor de inglés, y eso es lo que hace distinto a este portafolio: no son proyectos genéricos de tutorial, son herramientas que yo mismo usaría con mis estudiantes. Un reclutador ve que entiendo un problema real y lo resuelvo con código.

## Supuestos de tiempo

- Disponibilidad: lunes a jueves por la tarde, después de clases. Calculo unas **8 horas por semana** (2 horas por tarde). Viernes a domingo trabajo, así que no cuento esos días.
- Las semanas de exámenes del DAW cuentan como semanas perdidas. Por eso cada estimación tiene margen.
- Total aproximado: **50 a 60 semanas de trabajo efectivo**, es decir, entre 15 y 18 meses. Queda margen dentro de la meta de dos años.

| # | Proyecto | Tecnologías nuevas | Semanas |
|---|----------|--------------------|---------|
| 1 | Tarjetas de vocabulario | JavaScript, DOM, eventos, localStorage | 3 a 4 |
| 2 | Quiz de gramática con temporizador | Módulos, JSON, temporizadores, lógica de estado | 4 |
| 3 | Diccionario bilingüe | fetch, async/await, APIs públicas, manejo de errores | 4 |
| 4 | Planificador de clases (Kanban) | TypeScript, Vite, arrastrar y soltar | 6 |
| 5 | Panel de progreso de estudio | TypeScript avanzado, gráficos, pruebas con Vitest | 5 |
| 6 | Entrenador de verbos irregulares | React, componentes, props, useState, useEffect | 6 |
| 7 | Agenda de tutorías | React + TypeScript, React Router, formularios, Testing Library | 8 |
| 8 | LinguaLab (proyecto final) | Supabase (PostgreSQL), autenticación, CI, accesibilidad | 12 a 14 |

---

## Proyecto 1: Tarjetas de vocabulario

**Carpeta:** `01-flashcards-vocabulario/`

Una aplicación de tarjetas (flashcards) para estudiar vocabulario inglés y español. Se ve la palabra en un idioma, se hace clic y la tarjeta se voltea para mostrar la traducción y un ejemplo.

**Qué demuestra:** que sé manipular el DOM con JavaScript sin librerías, reaccionar a eventos del usuario y guardar datos en el navegador. Es la base de todo lo demás.

**Tecnologías:** HTML, CSS (variables, transiciones, flexbox), JavaScript (variables, arrays, objetos, funciones, eventos, localStorage).

**Tiempo estimado:** 3 a 4 semanas (24 a 32 horas).

**Funcionalidades mínimas:**
- Mostrar una tarjeta con una palabra y voltearla al hacer clic.
- Botones de anterior y siguiente, con contador ("3 de 20").
- Atajos de teclado (flechas y barra espaciadora).

**Extras (para que destaque):**
- Barajar las tarjetas.
- Marcar cada palabra como "la sé" o "repasar" y guardar el progreso en localStorage.
- Formulario para añadir palabras propias.
- Filtrar por categoría (verbos, comida, viajes...).
- Modo oscuro.
- Botón para escuchar la pronunciación con la Web Speech API (gratis, ya viene en el navegador).

**Presentación:** despliegue en Netlify o Vercel, GIF corto de la tarjeta volteándose en el README.

---

## Proyecto 2: Quiz de gramática con temporizador

**Carpeta:** `02-quiz-gramatica/`

Un cuestionario de opción múltiple sobre gramática inglesa (tiempos verbales, preposiciones, phrasal verbs) con niveles A2 a C1, temporizador por pregunta y pantalla de resultados.

**Qué demuestra:** organizar el código en módulos, separar los datos (archivo JSON) de la lógica, y manejar el "estado" de una aplicación (en qué pregunta voy, cuántos aciertos llevo, cuánto tiempo queda).

**Tecnologías:** JavaScript con módulos ES (`import` / `export`), JSON, `setInterval`, CSS Grid.

**Tiempo estimado:** 4 semanas.

**Funcionalidades mínimas:**
- Elegir nivel, responder 10 preguntas al azar, ver puntaje final.
- Retroalimentación inmediata: si fallo, mostrar la respuesta correcta y una explicación corta.
- Temporizador visible por pregunta.

**Extras:**
- Guardar el mejor puntaje por nivel.
- Revisión al final de las preguntas falladas.
- Compartir el resultado (copiar texto al portapapeles).
- Diseño accesible: se puede usar solo con teclado.

**Presentación:** captura de la pantalla de pregunta y de resultados. En el README, explicar cómo están estructurados los datos.

---

## Proyecto 3: Diccionario bilingüe

**Carpeta:** `03-diccionario-bilingue/`

Un buscador de palabras que consulta una API pública de diccionario y muestra definiciones, fonética, audio de pronunciación, sinónimos y ejemplos.

**Qué demuestra:** consumir APIs reales, que es lo que se hace en cualquier trabajo frontend. Manejar tiempos de espera (estado de carga), errores (palabra no encontrada, sin internet) y datos que vienen con formas inesperadas.

**Tecnologías:** `fetch`, `async` / `await`, promesas, manejo de errores con `try` / `catch`, API Free Dictionary (gratis, sin registro).

**Tiempo estimado:** 4 semanas.

**Funcionalidades mínimas:**
- Buscar una palabra y mostrar sus significados agrupados por tipo (sustantivo, verbo...).
- Reproducir el audio de pronunciación si existe.
- Mensajes claros de "cargando" y de error.

**Extras:**
- Historial de búsquedas recientes.
- Lista de palabras favoritas que se puede exportar a las tarjetas del proyecto 1.
- Búsqueda con "debounce" (no consulta la API en cada tecla).
- Diseño responsive pensado primero para móvil.

**Presentación:** GIF de una búsqueda completa. En el README, mencionar qué API se usa y cómo se manejan los errores.

---

## Proyecto 4: Planificador de clases (Kanban)

**Carpeta:** `04-planificador-clases/`

Un tablero tipo Kanban para que un profesor organice sus clases: columnas "Por preparar", "Lista", "Dada", con tarjetas que se arrastran entre columnas. Cada tarjeta tiene alumno, nivel, tema y fecha.

**Qué demuestra:** el salto a **TypeScript**, que hoy piden la mayoría de ofertas. También uso de una herramienta de construcción moderna (Vite) y una interacción compleja (arrastrar y soltar).

**Tecnologías:** TypeScript (tipos, interfaces, uniones), Vite, API de Drag and Drop de HTML5, localStorage.

**Tiempo estimado:** 6 semanas (incluye 1 o 2 semanas solo para aprender lo básico de TypeScript).

**Funcionalidades mínimas:**
- Crear, editar y borrar tarjetas.
- Arrastrar tarjetas entre columnas.
- Todo se guarda y se recupera al recargar.

**Extras:**
- Filtrar por alumno o por nivel.
- Exportar e importar el tablero en JSON.
- Funciona también en pantallas táctiles.

**Presentación:** GIF arrastrando tarjetas. En el README, una sección "Por qué TypeScript" con un ejemplo de error que TypeScript me evitó.

---

## Proyecto 5: Panel de progreso de estudio

**Carpeta:** `05-panel-progreso/`

Un panel (dashboard) donde un estudiante registra sus sesiones de estudio (minutos, habilidad practicada, palabras nuevas) y ve gráficos de su progreso semanal y mensual, con rachas de días seguidos.

**Qué demuestra:** trabajar con datos (agrupar, sumar, calcular rachas), visualizarlos y, sobre todo, **escribir pruebas automáticas**. Las pruebas son lo que separa a un junior que "hace que funcione" de uno en quien se puede confiar.

**Tecnologías:** TypeScript, Chart.js, Vitest, manejo de fechas.

**Tiempo estimado:** 5 semanas.

**Funcionalidades mínimas:**
- Registrar sesiones con un formulario validado.
- Al menos dos gráficos (minutos por día, reparto por habilidad).
- Pruebas para las funciones que calculan totales y rachas.

**Extras:**
- Metas semanales con barra de progreso.
- Exportar los datos a CSV.
- GitHub Actions que ejecuta las pruebas en cada push.

**Presentación:** captura del panel, insignia de "tests passing" en el README.

---

## Proyecto 6: Entrenador de verbos irregulares (primer proyecto React)

**Carpeta:** `06-verbos-irregulares-react/`

Una aplicación para practicar los verbos irregulares en inglés (infinitivo, pasado, participio) con varios modos: práctica libre, examen y repaso de errores.

**Qué demuestra:** dominio de los fundamentos de **React**: dividir la interfaz en componentes, pasar datos con props, manejar estado con `useState`, efectos con `useEffect`, y crear un hook propio.

**Tecnologías:** React, Vite, CSS Modules, hooks.

**Tiempo estimado:** 6 semanas (incluye aprender React desde cero).

**Funcionalidades mínimas:**
- Modo práctica: se muestra el infinitivo y escribo las otras dos formas.
- Corrección inmediata, aceptando mayúsculas o espacios de más.
- Puntaje de la sesión.

**Extras:**
- Modo examen con tiempo límite.
- Repaso espaciado: los verbos que fallo aparecen más seguido.
- Hook propio `useLocalStorage`.
- Animaciones suaves al acertar o fallar.

**Presentación:** GIF jugando una ronda. En el README, diagrama simple del árbol de componentes.

---

## Proyecto 7: Agenda de tutorías

**Carpeta:** `07-agenda-tutorias/`

Una aplicación para que un tutor publique su disponibilidad y los alumnos reserven clases: calendario semanal, formulario de reserva, página de "mis reservas" y panel del tutor.

**Qué demuestra:** una aplicación React **de varias páginas**, con TypeScript, navegación, formularios con validación seria, estado compartido entre páginas y pruebas de componentes. Es el tipo de aplicación que se construye en una empresa.

**Tecnologías:** React + TypeScript, React Router, React Hook Form + Zod, Context API, Vitest + Testing Library.

**Tiempo estimado:** 8 semanas.

**Funcionalidades mínimas:**
- Calendario semanal con horas libres y ocupadas.
- Reservar una hora con nombre, correo, nivel y objetivo de la clase.
- Ver y cancelar mis reservas.
- Rutas: inicio, reservar, mis reservas, panel del tutor.

**Extras:**
- Zonas horarias (alumno en Ecuador, tutor en Madrid): muy útil y muy vistoso.
- Simular una API con MSW (Mock Service Worker).
- Pruebas del flujo completo de reserva.
- Puntuación de accesibilidad de 90 o más en Lighthouse.

**Presentación:** demo desplegada con datos de ejemplo, capturas de cada página, sección del README con las decisiones técnicas.

---

## Proyecto 8: LinguaLab (proyecto final)

**Carpeta:** `08-lingualab/` (o repositorio propio, porque es la pieza principal del portafolio)

Una plataforma completa de práctica de idiomas que une lo aprendido: usuarios con cuenta, mazos de tarjetas propios, quizzes, diccionario integrado y panel de progreso. Un profesor puede crear una clase y asignar mazos a sus alumnos.

**Qué demuestra:** que puedo construir un producto completo de principio a fin: frontend, base de datos, autenticación, despliegue, pruebas e integración continua. Aquí aprovecho lo que ya sé de **SQL y PostgreSQL** del DAW, porque Supabase usa PostgreSQL por debajo.

**Tecnologías:** React + TypeScript, Supabase (PostgreSQL, autenticación, seguridad por filas), TanStack Query, Tailwind CSS, Vitest, Playwright, GitHub Actions.

**Tiempo estimado:** 12 a 14 semanas.

**Funcionalidades mínimas:**
- Registro e inicio de sesión.
- Crear, editar y estudiar mazos de tarjetas guardados en la base de datos.
- Roles de profesor y alumno.
- Desplegado y funcionando con una cuenta de prueba para reclutadores.

**Extras:**
- Repaso espaciado con algoritmo tipo SM-2.
- Modo sin conexión (PWA).
- Interfaz en español e inglés (internacionalización).
- Pruebas de extremo a extremo con Playwright en el pipeline.

**Presentación:** README completo con diagrama de la base de datos, video de 1 a 2 minutos mostrando la aplicación, y un artículo en LinkedIn contando cómo la construí.

---

## Cómo presento cada proyecto en GitHub

Cada carpeta lleva su propio `README.md` con esta estructura (ver [docs/plantilla-readme.md](docs/plantilla-readme.md)):

1. **Nombre y una frase** que diga qué hace y para quién.
2. **Enlace a la demo en vivo** (lo primero que mira un reclutador).
3. **Captura o GIF** de la aplicación funcionando.
4. **Funcionalidades** en una lista corta.
5. **Tecnologías** usadas.
6. **Qué aprendí y qué fue difícil**: dos o tres párrafos honestos. Esto es lo que más valoran.
7. **Cómo ejecutarlo en local.**

**Despliegue:** Netlify o Vercel, ambos gratis. Los dos permiten desplegar cada carpeta de este repositorio como un sitio distinto, indicando la carpeta como "directorio base" (Netlify) o "Root Directory" (Vercel). Cada push a la rama principal actualiza la demo automáticamente.

**Capturas y GIF:** capturas con la herramienta del sistema; GIF con ScreenToGif (Windows) o Kap (Mac). Guardarlas en una carpeta `capturas/` dentro de cada proyecto.

**Commits:** pequeños y con mensajes claros en inglés o español, por ejemplo `feat: add shuffle button` o `fix: counter shows wrong total`. Un historial ordenado también se nota.

## Hitos para LinkedIn

- Al terminar cada proyecto: publicación corta con el GIF, el enlace y una cosa que aprendí.
- Al terminar el proyecto 3: actualizar el titular de LinkedIn añadiendo "JavaScript".
- Al terminar el proyecto 6: añadir "React" al titular y al CV.
- Al terminar el proyecto 8: portafolio listo para buscar prácticas o un primer empleo junior.
