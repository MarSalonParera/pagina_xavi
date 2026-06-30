<?php
include 'config.php';

function asegurar_columna($conn, $tabla, $columna, $definicion) {
    $tabla_segura = preg_replace('/[^a-zA-Z0-9_]/', '', $tabla);
    $columna_segura = preg_replace('/[^a-zA-Z0-9_]/', '', $columna);
    $result = $conn->query("SHOW COLUMNS FROM `$tabla_segura` LIKE '$columna_segura'");

    if ($result && $result->num_rows === 0) {
        $conn->query("ALTER TABLE `$tabla_segura` ADD `$columna_segura` $definicion");
    }
}

function procesar_pdf($campo, $directorio, $prefijo) {
    if (!isset($_FILES[$campo]) || $_FILES[$campo]['error'] === UPLOAD_ERR_NO_FILE) {
        return ["path" => "", "error" => ""];
    }

    if ($_FILES[$campo]['error'] !== UPLOAD_ERR_OK) {
        return ["path" => "", "error" => "Error al subir el archivo"];
    }

    $file = $_FILES[$campo];
    $finfo = finfo_open(FILEINFO_MIME_TYPE);
    $mime_type = finfo_file($finfo, $file['tmp_name']);
    finfo_close($finfo);

    if ($mime_type !== 'application/pdf') {
        return ["path" => "", "error" => "Error: Solo se aceptan archivos PDF"];
    }

    if ($file['size'] > 5 * 1024 * 1024) {
        return ["path" => "", "error" => "Error: El archivo no debe superar 5MB"];
    }

    if (!is_dir($directorio)) {
        mkdir($directorio, 0755, true);
    }

    $nombre_original = preg_replace('/[^a-zA-Z0-9._-]/', '_', basename($file['name']));
    $filename = $prefijo . '_' . time() . '_' . $nombre_original;
    $filepath = rtrim($directorio, '/') . '/' . $filename;

    if (!move_uploaded_file($file['tmp_name'], $filepath)) {
        return ["path" => "", "error" => "Error al subir el archivo"];
    }

    return ["path" => $filepath, "error" => ""];
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nombre = sanitizar($_POST['nombre'] ?? '');
    $email = sanitizar($_POST['email'] ?? '');
    $telefono = sanitizar($_POST['telefono'] ?? '');
    $pais = sanitizar($_POST['pais'] ?? '');
    $ciudad = sanitizar($_POST['ciudad'] ?? '');
    $especialidad = sanitizar($_POST['especialidad'] ?? '');
    $experiencia = sanitizar($_POST['experiencia'] ?? '');
    $linkedin = sanitizar($_POST['linkedin'] ?? '');
    $descripcion = sanitizar($_POST['descripcion'] ?? '');

    if ($nombre === '' || !validar_email($email)) {
        $mensaje = "Error: revisa el nombre y el email";
        $tipo = "error";
        header("Location: contacto.html?mensaje=" . urlencode($mensaje) . "&tipo=" . $tipo);
        exit();
    }

    $cv = procesar_pdf('cv', 'uploads/cv', 'cv');
    if ($cv['error'] !== '') {
        header("Location: contacto.html?mensaje=" . urlencode($cv['error']) . "&tipo=error");
        exit();
    }

    $carta = procesar_pdf('carta', 'uploads/cartas', 'carta');
    if ($carta['error'] !== '') {
        header("Location: contacto.html?mensaje=" . urlencode($carta['error']) . "&tipo=error");
        exit();
    }

    asegurar_columna($conn, 'candidatos', 'telefono', 'VARCHAR(30) NULL');
    asegurar_columna($conn, 'candidatos', 'pais', 'VARCHAR(80) NULL');
    asegurar_columna($conn, 'candidatos', 'ciudad', 'VARCHAR(100) NULL');
    asegurar_columna($conn, 'candidatos', 'linkedin', 'VARCHAR(255) NULL');
    asegurar_columna($conn, 'candidatos', 'descripcion', 'TEXT NULL');
    asegurar_columna($conn, 'candidatos', 'carta_path', 'VARCHAR(255) NULL');

    $sql = "INSERT INTO candidatos
            (nombre, email, telefono, pais, ciudad, especialidad, experiencia, linkedin, descripcion, cv_path, carta_path)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

    $stmt = $conn->prepare($sql);
    $stmt->bind_param(
        "sssssssssss",
        $nombre,
        $email,
        $telefono,
        $pais,
        $ciudad,
        $especialidad,
        $experiencia,
        $linkedin,
        $descripcion,
        $cv['path'],
        $carta['path']
    );

    if ($stmt->execute()) {
        $mensaje = "Candidatura enviada. Revisaremos tu perfil pronto.";
        $tipo = "success";
    } else {
        $mensaje = "Error al enviar candidatura: " . $conn->error;
        $tipo = "error";
    }

    $stmt->close();
    header("Location: contacto.html?mensaje=" . urlencode($mensaje) . "&tipo=" . $tipo);
    exit();
}
?>
