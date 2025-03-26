$(document).ready(function() {
    // Cargar tareas desde la base de datos
    function loadTasks() {
        $.ajax({
            url: "PHP/obtener_tareas.php", // El archivo PHP que obtiene las tareas
            method: "GET",
            success: function(data) {
                const tareas = JSON.parse(data);
                $('#taskList').html('');
                tareas.forEach(task => {
                    $('#taskList').append(`
                        <tr>
                            <td>${task.descripcion}</td>
                            <td>${task.prioridad}</td>
                            <td>${task.fecha}</td>
                            <td>${task.notas}</td>
                            <td>
                                <button class="btn btn-warning btn-sm" onclick="editTask(${task.id})">Editar</button>
                                <button class="btn btn-danger btn-sm" onclick="deleteTask(${task.id})">Eliminar</button>
                            </td>
                        </tr>
                    `);
                });
            }
        });
    }

    // Agregar tarea
    $('#taskForm').submit(function(e) {
        e.preventDefault();

        const descripcion = $('#descripcion').val();
        const prioridad = $('#prioridad').val();
        const fecha = $('#fecha').val();
        const notas = $('#notas').val();

        $.ajax({
            url: "PHP/agregar_tareas.php",
            method: "POST",
            data: { descripcion, prioridad, fecha, notas },
            success: function(response) {
                alert(response);
                loadTasks();
            }
        });
    });

    // Eliminar tarea
    window.deleteTask = function(id) {
        if (confirm('¿Estás seguro de eliminar esta tarea?')) {
            $.ajax({
                url: `PHP/eliminar_tareas.php?id=${id}`,
                method: "GET",
                success: function(response) {
                    alert(response);
                    loadTasks();
                }
            });
        }
    }

    // Editar tarea
    window.editTask = function(id) {
        // Aquí se puede implementar la funcionalidad de edición si se desea
        alert(`Editar tarea con ID ${id}`);
    }

    // Cargar las tareas cuando cargue la página
    loadTasks();
});
