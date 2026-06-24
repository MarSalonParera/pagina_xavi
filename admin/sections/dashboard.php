<?php
// sections/dashboard.php
?>

<h2>Dashboard</h2>

<div class="stats-grid">
    <div class="stat-card">
        <h3><?php echo $stats['consultoria']; ?></h3>
        <p>Solicitudes de Consultoría</p>
    </div>
    <div class="stat-card">
        <h3><?php echo $stats['proyectos']; ?></h3>
        <p>Proyectos Potenciales</p>
    </div>
    <div class="stat-card">
        <h3><?php echo $stats['testimonios']; ?></h3>
        <p>Testimonios Pendientes</p>
    </div>
    <div class="stat-card">
        <h3><?php echo $stats['suscriptores']; ?></h3>
        <p>Suscriptores</p>
    </div>
    <div class="stat-card">
        <h3><?php echo $stats['candidatos']; ?></h3>
        <p>Candidatos</p>
    </div>
</div>

<h3 style="margin-top: 30px; color: #667eea;">Resumen Rápido</h3>

<div style="background: #f9f9f9; padding: 20px; border-radius: 5px; margin-top: 15px;">
    <p><strong>Solicitudes recientes de consultoría:</strong></p>
    <?php
    $consultorias = $conn->query("SELECT nombre, empresa, email, fecha_solicitud FROM solicitudes_consultoria ORDER BY fecha_solicitud DESC LIMIT 5");
    if ($consultorias->num_rows > 0) {
        echo "<ul style='margin-top: 10px;'>";
        while ($row = $consultorias->fetch_assoc()) {
            echo "<li>" . htmlspecialchars($row['nombre']) . " (" . htmlspecialchars($row['empresa'] ?? 'Sin empresa') . ") - " . $row['fecha_solicitud'] . "</li>";
        }
        echo "</ul>";
    } else {
        echo "<p style='color: #999; font-style: italic;'>No hay solicitudes recientes</p>";
    }
    ?>
</div>

<div style="background: #f9f9f9; padding: 20px; border-radius: 5px; margin-top: 15px;">
    <p><strong>Suscriptores nuevos:</strong></p>
    <?php
    $suscriptores = $conn->query("SELECT email, fecha_suscripcion FROM suscriptores ORDER BY fecha_suscripcion DESC LIMIT 5");
    if ($suscriptores->num_rows > 0) {
        echo "<ul style='margin-top: 10px;'>";
        while ($row = $suscriptores->fetch_assoc()) {
            echo "<li>" . htmlspecialchars($row['email']) . " - " . $row['fecha_suscripcion'] . "</li>";
        }
        echo "</ul>";
    } else {
        echo "<p style='color: #999; font-style: italic;'>No hay suscriptores</p>";
    }
    ?>
</div>
