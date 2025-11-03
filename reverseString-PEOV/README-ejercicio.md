# Reverse String Web App

Una pequeña aplicación web que invierte el orden de una cadena de texto usando **HTML** y **JavaScript** sin frameworks.

## Desarrollador
Pablo Eduardo Ojeda Vasco

## 📁 Estructura del proyecto

```text
.
├── index.html      # Estructura de la página
├── script.js       # Lógica de inversión y control de eventos
└── reversestring-example.png  # Imagen de ejemplo (opcional)
```

## ✅ Funcionalidades

1. **Campo de texto** donde el usuario escribe la palabra o frase.
2. **Botón** para invertir la cadena cuando hay **al menos 2 caracteres**.
3. A partir de **4 caracteres**, la inversión se hace **automáticamente sin pulsar** el botón.
4. Mensajes en pantalla indicando cómo usar la aplicación.

## 🚦Reglas de validación

- Si el usuario introduce **menos de 2 caracteres**, el botón se **desactiva**.
- Si el usuario introduce **2 o 3 caracteres**, el botón se **activa** y se debe pulsar para invertir.
- Si el usuario introduce **4 o más caracteres**, el texto se invierte **en tiempo real**.

## 🧠 Lógica principal

La lógica está en `script.js` y hace lo siguiente:

1. Escucha los cambios del campo de texto.
2. Según la longitud del texto:
   - Desactiva o activa el botón.
   - Llama a la función de inversión.
3. La función de inversión usa:
   ```js
   function reverseString(text) {
     return text.split("").reverse().join("");
   }
   ```

## 🛠 Instalación y uso

1. Coloca los archivos `index.html` y `script.js` en la misma carpeta.
2. Abre `index.html` en tu navegador.
3. Escribe un texto y:
   - Si es corto (2-3 letras), pulsa el botón.
   - Si es más largo (4+ letras), verás el resultado automáticamente.

## 🧪 Ejemplo

- Entrada: `Pablo`
- Salida: `olbaP`

## 📸 Imagen de ejemplo

Si tienes el archivo `reversestring-example.png`, puedes referenciarlo en el HTML o en la documentación.

## ✨ Mejoras posibles

- Añadir estilos con CSS.
- Permitir copiar el resultado.
- Mostrar un contador de caracteres.
- Añadir tests unitarios sobre la función `reverseString`.

---

© 2025 - Ejemplo de app simple en JavaScript.
