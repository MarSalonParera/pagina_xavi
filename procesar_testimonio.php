<?php
include 'config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nombre = sanitizar($_POST['nombre']);
    $empresa = sanitizar($_POST['empresa'] ?? '');
    $comentario = sanitizar($_POST['comentario']);
    $puntuacion = intval($_POST['puntuacion']);

    // Validar puntuación
    if ($puntuacion < 1 || $puntuacion > 5) {
        $puntuacion = 0;
    }

    $sql = "INSERT INTO testimonios 
            (nombre, empresa, comentario, puntuacion) 
            VALUES (?, ?, ?, ?)";
    
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sssi", $nombre, $empresa, $comentario, $puntuacion);
    
    if ($stmt->execute()) {
        $mensaje = "¡Gracias por tu opinión! Tu testimonio será revisado antes de publicarse.";
        $tipo = "success";
    } else {
        $mensaje = "Error al enviar el testimonio: " . $conn->error;
        $tipo = "error";
    }
    $stmt->close();
    
    header("Location: index.html?mensaje=" . urlencode($mensaje) . "&tipo=" . $tipo);
    exit();
}
?>
