<?php
include 'config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = sanitizar($_POST['email']);

    // Validar email
    if (!validar_email($email)) {
        $mensaje = "Error: Email inválido";
        $tipo = "error";
        header("Location: index.html?mensaje=" . urlencode($mensaje) . "&tipo=" . $tipo);
        exit();
    }

    // Obtener temas seleccionados
    $temas = isset($_POST['temas']) ? implode(',', array_map('sanitizar', $_POST['temas'])) : '';
    if (empty($temas)) {
        $temas = 'Agricultura regenerativa,Nuevos proyectos,Eventos,Artículos del blog';
    }

    // Verificar si el email ya está suscrito
    $check = "SELECT id FROM suscriptores WHERE email = ?";
    $stmt = $conn->prepare($check);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $mensaje = "Este email ya está suscrito al boletín.";
        $tipo = "error";
    } else {
        $sql = "INSERT INTO suscriptores (email, temas) VALUES (?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ss", $email, $temas);
        
        if ($stmt->execute()) {
            $mensaje = "¡Suscripción confirmada! Recibirás nuestras novedades pronto.";
            $tipo = "success";
        } else {
            $mensaje = "Error al suscribirse: " . $conn->error;
            $tipo = "error";
        }
    }
    $stmt->close();
    
    header("Location: index.html?mensaje=" . urlencode($mensaje) . "&tipo=" . $tipo);
    exit();
}
?>
