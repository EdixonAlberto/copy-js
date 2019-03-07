var text = document.getElementById('txt');

text.addEventListener('click', function (event) {
   var auxField = document.createElement("input"); // Crea un campo de texto "oculto"
   auxField.setAttribute("value", text.innerHTML); // Asigna el contenido del elemento especificado al valor del campo
   document.body.appendChild(auxField); // Añade el campo a la página
   auxField.select(); // Selecciona el contenido del campo

   document.execCommand("copy"); // Copia el texto seleccionado
   document.body.removeChild(auxField); // Elimina el campo de la página
});

document.addEventListener('copy', function (event) {
   // We need to prevent the default copy functionality,
   // otherwise it would just copy the selection as usual.
   event.preventDefault();
   console.log(event.target.defaultValue);
   // var selection = window.getSelection().toString();
   // var escaped = escapeHTML(selection);
   // e.clipboardData.setData('text/plain', escaped);
});