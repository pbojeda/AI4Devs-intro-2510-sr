// ==============================
// 1. LÓGICA PURA (sin DOM)
// ==============================

/**
 * Invierte una cadena de texto.
 * @param {string} text
 * @returns {string}
 */
function reverseString(text) {
  return text.split("").reverse().join("");
}

/**
 * Devuelve las instrucciones adecuadas según la longitud.
 * Esta parte es lógica, no toca el DOM.
 * @param {number} length
 * @returns {string}
 */
function getInstructionMessage(length) {
  if (length < 2) {
    return "Escribe al menos 2 caracteres para ver el resultado.";
  }
  if (length < 4) {
    return "Puedes pulsar el botón o seguir escribiendo.";
  }
  return "Inversión automática activada.";
}

/**
 * Determina si el botón debe estar habilitado.
 * @param {number} length
 * @returns {boolean}
 */
function isButtonEnabled(length) {
  return length >= 2;
}

/**
 * Determina si debemos mostrar el resultado en el cuadro.
 * En este ejercicio hemos decidido que:
 * - con 2 o más caracteres, siempre mostramos el resultado actual
 *   (así se arregla el problema al pasar de 4 → 3 → 2)
 * @param {number} length
 * @returns {boolean}
 */
function shouldShowResult(length) {
  return length >= 2;
}

// ==============================
// 2. TESTS SENCILLOS DE LA LÓGICA
// (esto lo puedes quitar en producción)
// ==============================
(function runTests() {
  console.assert(reverseString("Pablo") === "olbaP", "reverseString debería invertir 'Pablo'");
  console.assert(reverseString("") === "", "reverseString debería soportar cadena vacía");
  console.assert(getInstructionMessage(0).includes("2 caracteres"), "mensaje para <2");
  console.assert(isButtonEnabled(2) === true, "botón debe activarse con 2");
  console.assert(shouldShowResult(2) === true, "debe mostrar resultado con 2");
  console.log("✅ Tests de lógica ejecutados.");
})();

// ==============================
// 3. VISTA / DOM
// ==============================

const textInput = document.getElementById("textInput");
const reverseBtn = document.getElementById("reverseBtn");
const resultBox = document.getElementById("result");
const instructions = document.getElementById("instructions");

/**
 * Pinta el resultado invertido en el DOM.
 * @param {string} original
 */
function renderReversed(original) {
  resultBox.textContent = reverseString(original);
}

/**
 * Limpia el resultado en el DOM.
 */
function clearResult() {
  resultBox.textContent = "";
}

/**
 * Sincroniza la UI en función del valor actual del input.
 */
function updateUIFromInput() {
  const value = textInput.value;
  const length = value.length;

  // 1. instrucciones
  instructions.textContent = getInstructionMessage(length);

  // 2. botón habilitado o no
  reverseBtn.disabled = !isButtonEnabled(length);

  // 3. resultado
  if (shouldShowResult(length)) {
    // Aquí está el arreglo clave:
    // aunque bajemos de 4 a 3 o 2, seguimos mostrando el texto invertido actual.
    renderReversed(value);
  } else {
    clearResult();
  }
}

// Evento de escritura
textInput.addEventListener("input", updateUIFromInput);

// Evento del botón (sigue teniendo sentido si el usuario no quiere auto)
reverseBtn.addEventListener("click", function () {
  const value = textInput.value;
  if (shouldShowResult(value.length)) {
    renderReversed(value);
  }
});
