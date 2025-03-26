<?php
include('Conexion.php');

if (isset($_POST['id'])) {
    $id = $_POST['id'];
    $descripcion = $_POST['descripcion'];
    $prioridad = $_POST['prioridad'];
    $fecha = $_POST['fecha'];
    $notas = $_POST['notas'];

    $sql = "UPDATE tareas SET descripcion='$descripcion', prioridad='$prioridad', fecha='$fecha', notas='$notas' WHERE id=$id";

    if ($conn->query($sql) === TRUE) {
        echo "Tarea actualizada";
    } else {
        echo "Error: " . $conn->error;
    }
}
?>
