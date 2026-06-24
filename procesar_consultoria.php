<?php
include 'config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nombre = sanitizar($_POST['nombre']);
    $empresa = sanitizar($_POST['empresa'] ?? '');
    $email = sanitizar($_POST['email']);
    $telefono = sanitizar($_POST['telefono'] ?? '');
    $pais = sanitizar($_POST['pais'] ?? '');
    $tipo_proyecto = sanitizar($_POST['tipo_proyecto'] ?? '');
    $descripcion = sanitizar($_POST['descripcion']);

    // Validar email
    if (!validar_email($email)) {
        $mensaje = "Error: Email inválido";
        $tipo = "error";
    } else {
        // Insertar en base de datos
        $sql = "INSERT INTO solicitudes_consultoria 
                (nombre, empresa, email, telefono, pais, tipo_proyecto, descripcion) 
                VALUES (?, ?, ?, ?, ?, ?, ?)";
        
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("sssssss", $nombre, $empresa, $email, $telefono, $pais, $tipo_proyecto, $descripcion);
        
        if ($stmt->execute()) {
            $mensaje = "¡Solicitud enviada correctamente! Nos pondremos en contacto pronto.";
            $tipo = "success";
        } else {
            $mensaje = "Error al enviar la solicitud: " . $conn->error;
            $tipo = "error";
        }
        $stmt->close();
    }
    
    // Redirigir de vuelta con mensaje
    header("Location: index.html?mensaje=" . urlencode($mensaje) . "&tipo=" . $tipo);
    exit();
}
?>
