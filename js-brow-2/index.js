

const button = document.querySelector ('.btn');/* Esta línea de código obtiene una referencia al botón "Agregar" utilizando el método "querySelector". La clase ".btn" se utiliza para seleccionar el botón.*/
const input = document.querySelector ("#texto");/*tiene una referencia al elemento de input "querySelector".       El ID "#texto" se utiliza para seleccionar el input.*/
const resultado =document.querySelector ('#resultado');/*  Esta línea de código obtiene una referencia al elemento de lista en el HTML utilizando el método "querySelector". El ID "#lista-tareas" se utiliza para seleccionar la lista.*/
let id = 0;

button.addEventListener ('click' ,function (){
/* Esta línea de código agrega un "listener" de evento al botón "Agregar". El evento "click" es escuchado por el botón. 
Cuando se hace clic en el botón, se ejecuta una función anónima. */
      
        const texto = input.value.toUpperCase();
        if (texto !=='') {
         const tarea = document.createElement('li');
/* Esta línea de código crea un nuevo elemento de lista ("li") utilizando el método "createElement()". 
El nuevo elemento se almacena en una variable llamada "tarea".*/

        const checkbox =document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = false;
        checkbox.id = 'checkbox-' + id++;

        checkbox.addEventListener('click', function() { // Agregar listener al checkbox
if (this.checked) { // Si está marcado, agrega la clase
  tarea.classList.add('is-completed');
} else { // Si está desmarcado, remueve la clase
  tarea.classList.remove('is-completed');
}
});

        tarea.appendChild(checkbox);
        tarea.appendChild(document.createTextNode(texto));
        resultado.appendChild(tarea);
        input.value = '';         
    
  }
  } );

  

// Selecciona el botón que se usará para eliminar las tareas
const eliminarTareasButton = document.querySelector('#clear-button');

// Agrega un evento 'click' al botón para eliminar las tareas
eliminarTareasButton.addEventListener('click', function() {
  // Selecciona todas las tareas de la lista
  const tareas = document.querySelectorAll('#resultado li');
  
  // Recorre cada tarea y verifica si cumple con la condición
  for (let i = 0; i < tareas.length; i++) {
    const tarea = tareas[i];
    
    // Si la tarea cumple con la condición, elimínala
    if (tarea.classList.contains('is-completed')) {
      tarea.remove();
    }
  }
});




