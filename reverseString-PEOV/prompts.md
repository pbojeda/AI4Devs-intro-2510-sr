## **Contexto inicial**
Quiero montar una **Aplicación web** que tiene como finalidad **invertir el orden de una cadena de texto** utilizando **HTML y JavaScript puro**, sin frameworks ni librerías externas.

Dispongo de los siguientes ficheros base:

- `index.html` → fichero HTML principal  
- `script.js` → fichero JS donde irá la lógica  
- `reversestring-example.png` → imagen opcional de ejemplo del resultado

---

## **Objetivo principal**

1. Crear el código necesario en `index.html` para mostrar:
   - Un campo de texto donde el usuario escriba una palabra o frase.  
   - Un botón que invierta la cadena cuando haya **al menos 2 caracteres**.  
   - Instrucciones visibles para guiar al usuario.

2. Crear el código necesario en `script.js` con la **lógica completa**:
   - Invertir la cadena introducida.
   - Detectar cuando se pulsa el botón para mostrar el texto invertido.
   - Detectar automáticamente la inversión a partir de 4 caracteres escritos.
   - No permitir pulsar el botón si hay menos de 2 caracteres.

3. Mostrar el resultado invertido dinámicamente en pantalla.

---

## **Mejoras obligatorias**

### 🟢 Accesibilidad
- Añadir un `<label>` asociado al campo de texto con una clase `.sr-only` que lo oculte visualmente pero lo mantenga accesible para lectores de pantalla.

### 🟢 Corrección del comportamiento
- Solucionar el problema existente:  
  Cuando el usuario escribe 4+ caracteres (inversión automática) y luego borra hasta dejar 3 o 2, **el resultado no debe quedar vacío**.  
  Debe actualizarse siempre mostrando la cadena actual invertida mientras haya **2 o más caracteres**.

### 🟢 Separación de lógica y vista
- Separar la parte de **lógica pura** (funciones que no acceden al DOM) de la parte de **interacción con el DOM**.  
  Ejemplo: tener funciones como `reverseString()`, `getInstructionMessage()`, `isButtonEnabled()`, etc., antes de las funciones que manipulan la interfaz.

### 🟢 Incluir tests básicos
- Añadir un bloque de **tests automáticos simples** en JavaScript usando `console.assert()` para validar el correcto funcionamiento de las funciones puras.  
  Ejemplo:  
  ```js
  console.assert(reverseString("Pablo") === "olbaP", "Debe invertir correctamente 'Pablo'");
  ```

---

## **Requisitos técnicos**

- Utilizar **HTML5 semántico** y buenas prácticas de **Clean Code**.
- Código JavaScript **modular y comentado**.
- Mostrar mensajes claros al usuario:
  - “Escribe al menos 2 caracteres para ver el resultado.”
  - “Puedes pulsar el botón o seguir escribiendo.”
  - “Inversión automática activada.”

---

## **Estructura esperada del proyecto**

```
.
├── index.html                # Estructura principal de la app
├── script.js                 # Lógica separada + interacción DOM + tests
├── reversestring-example.png # Imagen opcional
└── README.md                 # Documentación generada automáticamente
```

---

## **Entrega final esperada**

El asistente debe generar:

1. **index.html**  
   - Con el campo de entrada, botón, etiquetas e instrucciones.  
   - Con `<label>` accesible y `.sr-only` en el CSS.

2. **script.js**  
   - Con la lógica corregida del comportamiento.  
   - Con separación clara de lógica y vista.  
   - Con tests automáticos usando `console.assert`.

3. **README.md**  
   - En formato **Markdown**, bien documentado para integrarse en GitHub o Confluence.  
   - Debe incluir:
     - Descripción del proyecto  
     - Estructura de ficheros  
     - Requisitos de uso  
     - Lógica de funcionamiento  
     - Ejemplo de entrada/salida  
     - Posibles mejoras futuras  
   - Y debe ser descargable directamente como fichero.

---

## **Instrucción final al asistente**

> Actúa como **experto en desarrollo web** y genera:
> - El contenido completo de `index.html`  
> - El contenido completo de `script.js`  
> - El fichero `README.md` listo para descargar en formato Markdown  
>
> Asegúrate de cumplir todas las reglas de accesibilidad, las correcciones de comportamiento y la separación entre lógica y vista.
