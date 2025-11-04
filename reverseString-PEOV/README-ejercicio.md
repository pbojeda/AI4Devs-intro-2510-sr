# 🪞 Reverse String Web App

Una aplicación web sencilla en **HTML + JavaScript** que invierte el orden de una cadena de texto de forma dinámica, con buena accesibilidad, separación de lógica y vista, y tests básicos integrados.

---

## 📁 Estructura del proyecto

```
.
├── index.html                # Interfaz principal (HTML + accesibilidad)
├── script.js                 # Lógica, control de eventos y tests
├── reversestring-example.png # Imagen opcional de ejemplo
└── README.md                 # Este documento
```

---

## 🚀 Funcionalidades

1. **Campo de texto interactivo**: el usuario puede escribir libremente una cadena.
2. **Botón de inversión**: se activa automáticamente a partir de **2 caracteres**.
3. **Modo automático**: a partir de **4 caracteres**, el texto se invierte en tiempo real.
4. **Mensajes de ayuda**: guían al usuario según la longitud del texto.
5. **Accesibilidad mejorada**: con etiqueta `<label>` oculta pero legible por lectores de pantalla.
6. **Tests básicos** en JavaScript usando `console.assert`.

---

## 🧩 Lógica de funcionamiento

La lógica se ha separado del DOM para facilitar pruebas y mantener un código limpio.

### Funciones puras (sin acceso al DOM)

```js
function reverseString(text) {
  return text.split("").reverse().join("");
}

function getInstructionMessage(length) {
  if (length < 2) return "Escribe al menos 2 caracteres para ver el resultado.";
  if (length < 4) return "Puedes pulsar el botón o seguir escribiendo.";
  return "Inversión automática activada.";
}

function isButtonEnabled(length) {
  return length >= 2;
}

function shouldShowResult(length) {
  return length >= 2; // Muestra resultado si hay 2 o más caracteres
}
```

### Funciones de vista (DOM)

- **renderReversed(original)** → muestra la cadena invertida en pantalla.  
- **clearResult()** → limpia el cuadro de resultado.  
- **updateUIFromInput()** → sincroniza instrucciones, botón y resultado con el estado actual del input.

---

## 🧠 Lógica de interacción

| Caso | Acción del usuario | Resultado esperado |
|------|--------------------|--------------------|
| 0-1 caracteres | Escribe poco texto | Botón desactivado, sin resultado |
| 2-3 caracteres | Escribe texto corto | Botón activado, muestra texto invertido al pulsarlo |
| 4+ caracteres | Escribe texto largo | Texto invertido automáticamente en tiempo real |
| Borrar de 4 → 3 o 2 | Reduce el texto | Resultado se actualiza sin quedarse vacío |

---

## ✅ Tests incluidos

Ejecutados automáticamente al cargar la página (en consola):

```js
console.assert(reverseString("Pablo") === "olbaP", "Debe invertir correctamente 'Pablo'");
console.assert(reverseString("") === "", "Debe soportar cadena vacía");
console.assert(getInstructionMessage(0).includes("2 caracteres"), "Mensaje correcto para <2 caracteres");
console.assert(isButtonEnabled(2) === true, "El botón debe activarse con 2 caracteres");
console.assert(shouldShowResult(2) === true, "Debe mostrar resultado con 2 caracteres");
```

En la consola del navegador se mostrará:

```
✅ Tests de lógica ejecutados.
```

---

## 🧱 Accesibilidad

Se incluye un `<label>` oculto visualmente pero accesible:

```html
<label for="textInput" class="sr-only">Texto a invertir</label>
```

Y el estilo asociado:

```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```

---

## 🖥️ Cómo usar

1. Abre `index.html` en tu navegador.  
2. Escribe cualquier texto.  
3. Observa cómo el resultado se invierte automáticamente (o pulsa el botón si hay 2-3 caracteres).

---

## 🧪 Ejemplo

| Entrada | Salida |
|----------|---------|
| `Pablo`  | `olbaP` |
| `Hola`   | `aloH`  |
| `AI`     | `IA`    |

---

## 🧰 Tecnologías utilizadas

- **HTML5**
- **JavaScript (ES6+)**
- **CSS básico**
- Sin frameworks ni librerías externas

---

## 🔍 Posibles mejoras futuras

- Estilos CSS personalizados o modo oscuro.
- Copiar resultado con un clic.
- Mostrar contador de caracteres.
- Exportar los tests a un entorno tipo Jest.

---

## 🪄 Créditos

Proyecto educativo desarrollado como ejemplo de buenas prácticas en **desarrollo web frontend**:
- Accesibilidad
- Separación de responsabilidades
- Código limpio y comentado
- Pruebas básicas integradas

---

© 2025 — Ejemplo didáctico de inversión de cadenas en JavaScript.
