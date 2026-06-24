<?php
// Configuración de la base de datos
define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASS', '');
define('DB_NAME', 'consultoria');

// Crear conexión
$conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

$conn->set_charset("utf8");

// Función para validar email
function validar_email($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}

// Función para sanitizar entrada
function sanitizar($data) {
    return htmlspecialchars(stripslashes(trim($data)));
}

// Función para redirigir
function redirigir($url) {
    header("Location: " . $url);
    exit();
}
?>
