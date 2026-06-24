<?php
include 'config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $empresa = sanitizar($_POST['empresa']);
    $sector = sanitizar($_POST['sector'] ?? '');
    $tamaño_proyecto = sanitizar($_POST['tamaño_proyecto'] ?? '');
    $ubicacion = sanitizar($_POST['ubicacion'] ?? '');
    $objetivos = sanitizar($_POST['objetivos']);
    $presupuesto = sanitizar($_POST['presupuesto'] ?? '');

    $sql = "INSERT INTO proyectos_potenciales 
            (empresa, sector, tamaño_proyecto, ubicacion, objetivos, presupuesto) 
            VALUES (?, ?, ?, ?, ?, ?)";
    
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssssss", $empresa, $sector, $tamaño_proyecto, $ubicacion, $objetivos, $presupuesto);
    
    if ($stmt->execute()) {
        $mensaje = "¡Solicitud de proyecto enviada! Revisaremos tu propuesta.";
        $tipo = "success";
    } else {
        $mensaje = "Error al enviar la solicitud: " . $conn->error;
        $tipo = "error";
    }
    $stmt->close();
    
    header("Location: index.html?mensaje=" . urlencode($mensaje) . "&tipo=" . $tipo);
    exit();
}
?>
