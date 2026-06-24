<?php
include 'config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nombre = sanitizar($_POST['nombre']);
    $email = sanitizar($_POST['email']);
    $especialidad = sanitizar($_POST['especialidad'] ?? '');
    $experiencia = sanitizar($_POST['experiencia']);

    // Validar email
    if (!validar_email($email)) {
        $mensaje = "Error: Email inválido";
        $tipo = "error";
        header("Location: index.html?mensaje=" . urlencode($mensaje) . "&tipo=" . $tipo);
        exit();
    }

    // Procesar archivo
    $cv_path = '';
    if (isset($_FILES['cv']) && $_FILES['cv']['error'] === UPLOAD_ERR_OK) {
        $file = $_FILES['cv'];
        
        // Validar que sea PDF
        $finfo = finfo_open(FILEINFO_MIME_TYPE);
        $mime_type = finfo_file($finfo, $file['tmp_name']);
        finfo_close($finfo);

        if ($mime_type !== 'application/pdf') {
            $mensaje = "Error: Solo se aceptan archivos PDF";
            $tipo = "error";
            header("Location: index.html?mensaje=" . urlencode($mensaje) . "&tipo=" . $tipo);
            exit();
        }

        // Validar tamaño (máx 5MB)
        if ($file['size'] > 5 * 1024 * 1024) {
            $mensaje = "Error: El archivo no debe superar 5MB";
            $tipo = "error";
            header("Location: index.html?mensaje=" . urlencode($mensaje) . "&tipo=" . $tipo);
            exit();
        }

        // Crear carpeta si no existe
        if (!is_dir('uploads/cv')) {
            mkdir('uploads/cv', 0755, true);
        }

        // Guardar archivo con nombre único
        $filename = 'cv_' . time() . '_' . basename($file['name']);
        $filepath = 'uploads/cv/' . $filename;

        if (move_uploaded_file($file['tmp_name'], $filepath)) {
            $cv_path = $filepath;
        } else {
            $mensaje = "Error al subir el archivo";
            $tipo = "error";
            header("Location: index.html?mensaje=" . urlencode($mensaje) . "&tipo=" . $tipo);
            exit();
        }
    }

    // Insertar en base de datos
    $sql = "INSERT INTO candidatos (nombre, email, especialidad, experiencia, cv_path) 
            VALUES (?, ?, ?, ?, ?)";
    
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sssss", $nombre, $email, $especialidad, $experiencia, $cv_path);
    
    if ($stmt->execute()) {
        $mensaje = "¡Candidatura enviada! Revisaremos tu perfil pronto.";
        $tipo = "success";
    } else {
        $mensaje = "Error al enviar candidatura: " . $conn->error;
        $tipo = "error";
    }
    $stmt->close();
    
    header("Location: index.html?mensaje=" . urlencode($mensaje) . "&tipo=" . $tipo);
    exit();
}
?>
