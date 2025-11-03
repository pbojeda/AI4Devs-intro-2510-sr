// script.js

// Referencias a elementos del DOM
const textInput = document.getElementById("textInput");
const reverseBtn = document.getElementById("reverseBtn");
const resultBox = document.getElementById("result");
const instructions = document.getElementById("instructions");

/**
 * Invierte una cadena de texto.
 * @param {string} text
 * @returns {string}
 */
function reverseString(text) {
  return text.split("").reverse().join("");
}

/**
 * Actualiza las instrucciones que ve el usuario según la longitud.
 * @param {number} length
 */
function updateInstructions(length) {
  if (length < 2) {
    instructions.textContent = "Escribe al menos 2 caracteres para activar el botón.";
  } else if (length < 4) {
    instructions.textContent = "Ahora puedes pulsar el botón para invertir la cadena.";
  } else {
    instructions.textContent = "Inversión automática activada.";
  }
}

/**
 * Controla la activación/desactivación del botón.
 * @param {number} length
 */
function toggleButton(length) {
  reverseBtn.disabled = length < 2;
}

/**
 * Muestra el resultado invertido en pantalla.
 * @param {string} original
 */
function renderReversed(original) {
  resultBox.textContent = reverseString(original);
}

// Escuchar lo que escribe el usuario
textInput.addEventListener("input", function () {
  const value = textInput.value;
  const length = value.length;

  // Actualizar instrucciones y botón
  updateInstructions(length);
  toggleButton(length);

  // Si hay 4 o más caracteres, invertir automáticamente
  if (length >= 4) {
    renderReversed(value);
  } else if (length === 0) {
    // limpiar si se borra todo
    resultBox.textContent = "";
  }
});

// Acción del botón
reverseBtn.addEventListener("click", function () {
  const value = textInput.value;
  if (value.length >= 2) {
    renderReversed(value);
  }
});
