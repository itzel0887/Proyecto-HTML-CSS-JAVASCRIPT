# Proyecto de Programación Web - Curso de HTML, CSS y JavaScript

## Descripción

Este proyecto fue realizado como parte de mi aprendizaje en el **Curso de Programación Web**. Como principiante en el tema, mi objetivo fue crear una página web utilizando todo lo aprendido en HTML, CSS y JavaScript. Durante el proceso, utilicé una variedad de técnicas para hacer la página lo más funcional y estética posible, y aunque fue un desafío, logré crear una página web completamente funcional, empleando herramientas y técnicas modernas de desarrollo web.

## Tecnologías utilizadas

- **HTML**: Para la estructura básica de la página web.
- **CSS**: Para el diseño y estilización de los elementos de la página.
- **JavaScript**: Para agregar funcionalidades interactivas y dinámicas.
- **Bootstrap**: Para crear una estructura responsive utilizando el sistema de columnas.
  
## Objetivos del Proyecto

Como parte de este proyecto, mi objetivo principal fue demostrar que una persona, incluso como principiante, puede aprender algo totalmente nuevo y crear algo funcional. Durante el desarrollo, me enfrenté a varios retos, pero logré aplicar lo aprendido de manera efectiva.

### Principales características del proyecto:

- **HTML**: Reproducción de una página web existente (cara de página web) para practicar la estructura y semántica.
- **CSS**: Aplicación de estilos a través de **Flexbox**, **position relative** y **absolute**, con la finalidad de controlar la disposición de los elementos en la página.
- **Bootstrap**: Implementación del sistema de 12 columnas para la estructura del layout, incluyendo el uso de `cards` y técnicas de diseño responsive.
- **Media Queries**: Intenté hacer la página más responsiva con media queries, aunque todavía estoy aprendiendo a perfeccionar esta técnica.
- **JavaScript**: Se añadieron interacciones, como un **carrusel** en el header, un **botón "Leer más"** para mostrar texto adicional, y una **ventana emergente (popup)** para mostrar mensajes o alertas.

## Funcionalidades Implementadas

### 1. Carrusel en el Header
Utilicé JavaScript para implementar un carrusel en el encabezado de la página. El carrusel cambia de imagen de forma automática mediante el uso de `setInterval`, y también permite la interacción del usuario con los botones (usando **EventListener** en el click).

**Código relevante**:
```javascript
let index = 0;
const images = document.querySelectorAll('.carousel-images');

function changeImage() {
  images.forEach((img, i) => {
    img.classList.remove('active');
    if (i === index) img.classList.add('active');
  });
  index = (index + 1) % images.length;
}

setInterval(changeImage, 3000); // Cambiar imagen cada 3 segundos
2. Botón "Leer Más"
El botón "Leer más" se diseñó para mostrar texto adicional al hacer clic, utilizando EventListener para detectar el clic del usuario y condicionales if/else para mostrar u ocultar el contenido.

Código relevante:

javascript
Copy code
const readMoreButton = document.querySelector('.read-more-button');
const extraText = document.querySelector('.extra-text');

readMoreButton.addEventListener('click', function() {
  if (extraText.style.display === 'none') {
    extraText.style.display = 'block';
    readMoreButton.innerText = 'Leer menos';
  } else {
    extraText.style.display = 'none';
    readMoreButton.innerText = 'Leer más';
  }
});
3. Ventana Emergente (Popup)
Utilicé setTimeout para mostrar una ventana emergente (popup) después de un tiempo determinado, lo que permite al usuario ver un mensaje o alerta después de unos segundos.

Código relevante:

javascript
Copy code
setTimeout(function() {
  alert('¡Bienvenido a mi página!');
}, 5000); // Muestra el popup después de 5 segundos
Estructura del Proyecto
El proyecto sigue la siguiente estructura:

bash
Copy code
/project-directory
│
├── index.html           # Archivo principal HTML
├── styles.css           # Archivo de estilos CSS
├── script.js            # Archivo de JavaScript para interactividad
├── /images              # Carpeta para las imágenes del carrusel
├── README.md            # Este archivo con la documentación
Desafíos y Aprendizajes
Desafíos:
Hacer la página responsive: Aunque utilicé Bootstrap para crear una estructura de columnas, tuve dificultades con el uso de media queries. No siempre logré que la página se adaptara perfectamente a diferentes tamaños de pantalla, pero estoy trabajando en mejorar mi comprensión de este tema.

Uso de JavaScript para interactividad: Aprendí mucho sobre cómo manejar eventos, manipular clases y crear interacciones dinámicas con JavaScript. Sin embargo, algunos aspectos, como el manejo de eventos y la manipulación de DOM, siguen siendo complicados para mí, pero cada vez me siento más cómodo con ellos.

Estilización con Flexbox: Logré utilizar Flexbox para organizar varios elementos de la página, como las tarjetas (cards), pero aún me falta practicar para dominarlo por completo.

Lo que aprendí:
HTML: Mejoré mis habilidades en la creación de una estructura semántica sólida para una página web.
CSS: Aprendí técnicas de diseño como Flexbox y el uso de position relative y absolute para posicionar elementos. También, entendí cómo aplicar el sistema de columnas de Bootstrap para hacer la página más flexible y responsive.
JavaScript: Gané experiencia práctica trabajando con event listeners, setInterval, setTimeout y manipulación del DOM, que me permitió añadir interactividad a la página.
Próximos Pasos
A medida que sigo practicando y aprendiendo más sobre desarrollo web, mis próximos pasos incluyen:

Mejorar la parte de responsive design utilizando media queries de manera más eficiente.
Aprender sobre frameworks de JavaScript como React para crear interfaces más dinámicas y complejas.
Continuar perfeccionando mis habilidades con CSS para lograr diseños más complejos y visualmente atractivos.
Conclusión
Este proyecto fue una excelente oportunidad para poner en práctica lo que he aprendido hasta ahora en HTML, CSS y JavaScript. Como principiante, me siento muy orgulloso de lo que he logrado y espero seguir aprendiendo y mejorando mis habilidades en el desarrollo web.

Gracias por visitar mi proyecto y leer este README. ¡Espero seguir creciendo como desarrollador web!

¡Gracias por ver mi proyecto!


