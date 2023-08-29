function enviarFormulario() {
   // Esto define una función llamada enviarFormulario. Una función es como un bloque de código que se puede llamar en cualquier momento para realizar ciertas acciones.
   // En este caso, la función se ejecuta cuando se hace clic en el botón de envío del formulario.
   const nombre = document.getElementById("nombre").value;
   // Aquí, const es una forma de declarar una constante, que es un valor que no cambia después de su inicialización.
   // nombre es el nombre de la constante. document.getElementById("nombre") es una manera de seleccionar un elemento del documento HTML por su "id", que es un identificador único.
   // .value recupera el valor ingresado en ese elemento (en este caso, el campo de entrada "nombre").
   const email = document.getElementById("email").value;
   const edad = document.getElementById("edad").value;

   if (nombre && email && edad) {
       // El if es una estructura de control que permite tomar decisiones en función de una condición.
       // En este caso, verifica si los campos "nombre", "email" y "edad" tienen algún valor (no están vacíos).
       const mensajePersonalizado = `¡Hola ${nombre}! Agradecemos tu interés en participar. Hemos registrado tus datos (Nombre: ${nombre}, Email: ${email}, Edad: ${edad}). Pronto te contactaremos.`;

       // alert es una función incorporada en JavaScript que muestra una ventana emergente en el navegador con un mensaje.
       // En este caso, se muestra el mensajePersonalizado que se creó anteriormente.
       alert(mensajePersonalizado);

       // Esta línea busca el formulario por su "id" ("miFormulario") y utiliza el método reset() para restablecer todos los campos del formulario a sus valores iniciales.
       document.getElementById("miFormulario").reset();
   } else {
       // Si no se cumplió la condición del if (es decir, si algún campo obligatorio está vacío),
       // se ejecuta el bloque de código dentro del else. En este caso, se muestra una alerta indicando que es necesario completar todos los campos obligatorios.
       alert("Por favor, asegúrate de completar todos los campos obligatorios.");
   }
}

// Declaración de Constante (const scrollButton = document.getElementById("scrollButton");):
// En esta línea, estamos utilizando la declaración const para crear una constante llamada scrollButton.
// Esta constante se utilizará para hacer referencia al botón de scroll en el HTML.
// Para obtener el botón, estamos utilizando document.getElementById("scrollButton"),
// que busca en el documento HTML un elemento con el atributo id igual a "scrollButton".
// Esto nos permite interactuar con el botón desde JavaScript.
const scrollButton = document.getElementById("scrollButton");

// Evento de Clic (scrollButton.addEventListener("click", () => { ... });):
// Aquí estamos agregando un "escuchador de eventos" al botón de scroll.
// En otras palabras, estamos diciendo que queremos detectar cuando el botón sea clicado.
// El evento que estamos escuchando es el evento de clic, que se activa cuando el usuario hace clic en el botón.
scrollButton.addEventListener("click", () => {
    // Función Anónima (() => { ... }):
    // Dentro del escuchador de eventos de clic, estamos definiendo una función anónima
    // utilizando la sintaxis de función flecha (() => { ... }).
    // Esta función se ejecutará cada vez que el botón sea clicado.

    // Scroll Suave (window.scrollTo({ top: 0, behavior: "smooth" });):
    // Dentro de la función anónima, estamos utilizando window.scrollTo para realizar un scroll suave
    // hacia la parte superior de la página. Esto se hace proporcionando un objeto con dos propiedades:
    // top: Establecemos esta propiedad en 0, lo que significa que queremos desplazarnos hasta la parte superior de la página.
    // El valor 0 representa la posición superior de la página.
    // behavior: Aquí establecemos "smooth" como valor. Esto indica que queremos que el scroll sea suave
    // y animado en lugar de un desplazamiento brusco.
    window.scrollTo({
        top: 0, // Desplazarse hasta la parte superior de la página
        behavior: "smooth" // Hacer que el scroll sea suave y animado
    });
});
