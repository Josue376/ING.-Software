<?php
include('Conexion.php');

$sql = "SELECT * FROM tareas";
$result = $conn->query($sql);

$tareas = array();
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $tareas[] = $row;
    }
} else {
    echo "0 resultados";
}
echo json_encode($tareas);
?>
