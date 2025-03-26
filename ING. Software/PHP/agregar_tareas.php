<?php
include('Conexion.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $descripcion = $_POST['descripcion'];
    $prioridad = $_POST['prioridad'];
    $fecha = $_POST['fecha'];
    $notas = $_POST['notas'];

    $sql = "INSERT INTO tareas (descripcion, prioridad, fecha, notas) VALUES ('$descripcion', '$prioridad', '$fecha', '$notas')";

    if ($conn->query($sql) === TRUE) {
        echo "Nueva tarea agregada";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}
?>
