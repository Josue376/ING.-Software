<?php
include('Conexion.php');

if (isset($_GET['id'])) {
    $id = $_GET['id'];

    $sql = "DELETE FROM tareas WHERE id=$id";

    if ($conn->query($sql) === TRUE) {
        echo "Tarea eliminada";
    } else {
        echo "Error: " . $conn->error;
    }
}
?>
