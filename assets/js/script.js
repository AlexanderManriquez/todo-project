const form = document.getElementById('agregar-tareas'); //Formulario para agregar tareas
const listaTareas = document.getElementById('lista-tareas'); //Div para mostrar las tareas
let tareaEnEdicion = null; // Variable para almacenar la tarea que se está editando

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const titulo = document.getElementById('tarea-titulo').value;
    const descripcion = document.getElementById('tarea-descripcion').value;

    const tarea = document.createElement('div');
    tarea.classList.add('tarea');
    tarea.innerHTML = `
    <div class="tarea-card">
        <h3>${titulo}</h3>
        <p>${descripcion}</p>
        <p>Fecha de creación: ${new Date().toLocaleDateString()}</p>
        <div class="tarea-acciones">
            <button class="btn-completar">Completar</button>
            <button class="btn-editar">Editar</button>
            <button class="btn-eliminar">Eliminar</button>
        </div>
    </div>`;
    listaTareas.appendChild(tarea);

    form.reset();
});

//Función para eliminar una tarea
listaTareas.addEventListener('click', function(event) {
    if (event.target.classList.contains('btn-eliminar')) {
        const tarea = event.target.closest('.tarea');
        tarea.remove();
    }
});

//Función para completar una tarea
listaTareas.addEventListener('click', function(event) {
    if (event.target.classList.contains('btn-completar')) {
        const tarea = event.target.closest('.tarea');
        tarea.classList.toggle('completada');
        event.target.textContent = tarea.classList.contains('completada') ? 'Deshacer' : 'Completar';
    }
});

//Función para editar una tarea
listaTareas.addEventListener('click', function(event) {
    if (event.target.classList.contains('btn-editar')) {
        const tarea = event.target.closest('.tarea');
        const titulo = tarea.querySelector('h3').textContent;
        const descripcion = tarea.querySelector('p').textContent;

        document.getElementById('tarea-titulo').value = titulo;
        document.getElementById('tarea-descripcion').value = descripcion;

        tarea.remove();
    }
});
