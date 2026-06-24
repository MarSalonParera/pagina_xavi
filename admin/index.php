<?php
session_start();
include '../config.php';

// Verificar autenticación
if (!isset($_SESSION['admin_logged_in'])) {
    header("Location: login.php");
    exit();
}

// Obtener estadísticas
$stats = [];
$stats['consultoria'] = $conn->query("SELECT COUNT(*) as count FROM solicitudes_consultoria")->fetch_assoc()['count'];
$stats['proyectos'] = $conn->query("SELECT COUNT(*) as count FROM proyectos_potenciales")->fetch_assoc()['count'];
$stats['testimonios'] = $conn->query("SELECT COUNT(*) as count FROM testimonios WHERE estado='Pendiente'")->fetch_assoc()['count'];
$stats['suscriptores'] = $conn->query("SELECT COUNT(*) as count FROM suscriptores")->fetch_assoc()['count'];
$stats['candidatos'] = $conn->query("SELECT COUNT(*) as count FROM candidatos")->fetch_assoc()['count'];
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Panel de Administración</title>
    <link rel="stylesheet" href="../css/admin.css">
</head>
<body>
    <div class="admin-container">
        <aside class="sidebar">
            <div class="logo">
                <h2>Admin</h2>
            </div>
            <nav class="admin-menu">
                <a href="?section=dashboard" class="menu-item <?php echo (!isset($_GET['section']) || $_GET['section'] == 'dashboard') ? 'active' : ''; ?>">
                    📊 Dashboard
                </a>
                <a href="?section=consultoria" class="menu-item <?php echo ($_GET['section'] ?? '') == 'consultoria' ? 'active' : ''; ?>">
                    📞 Solicitudes de Consultoría
                </a>
                <a href="?section=proyectos" class="menu-item <?php echo ($_GET['section'] ?? '') == 'proyectos' ? 'active' : ''; ?>">
                    🌍 Proyectos Potenciales
                </a>
                <a href="?section=testimonios" class="menu-item <?php echo ($_GET['section'] ?? '') == 'testimonios' ? 'active' : ''; ?>">
                    ⭐ Testimonios
                </a>
                <a href="?section=suscriptores" class="menu-item <?php echo ($_GET['section'] ?? '') == 'suscriptores' ? 'active' : ''; ?>">
                    📧 Suscriptores
                </a>
                <a href="?section=candidatos" class="menu-item <?php echo ($_GET['section'] ?? '') == 'candidatos' ? 'active' : ''; ?>">
                    🤝 Candidatos
                </a>
            </nav>
            <div class="logout">
                <a href="logout.php">Cerrar Sesión</a>
            </div>
        </aside>

        <main class="main-content">
            <header class="admin-header">
                <h1>Panel de Administración</h1>
                <div class="user-info">
                    <?php echo "Bienvenido, " . htmlspecialchars($_SESSION['admin_user']); ?>
                </div>
            </header>

            <div class="content">
                <?php
                $section = $_GET['section'] ?? 'dashboard';

                switch ($section) {
                    case 'dashboard':
                        include 'sections/dashboard.php';
                        break;
                    case 'consultoria':
                        include 'sections/consultoria.php';
                        break;
                    case 'proyectos':
                        include 'sections/proyectos.php';
                        break;
                    case 'testimonios':
                        include 'sections/testimonios.php';
                        break;
                    case 'suscriptores':
                        include 'sections/suscriptores.php';
                        break;
                    case 'candidatos':
                        include 'sections/candidatos.php';
                        break;
                    default:
                        include 'sections/dashboard.php';
                }
                ?>
            </div>
        </main>
    </div>
</body>
</html>
