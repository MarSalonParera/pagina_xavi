<?php
// sections/testimonios.php

// Procesar aprobación/rechazo
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['action'])) {
    $id = intval($_POST['id']);
    $nuevo_estado = ($_POST['action'] == 'aprobar') ? 'Aprobado' : 'Rechazado';

    $sql = "UPDATE testimonios SET estado = ? WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("si", $nuevo_estado, $id);
    $stmt->execute();
    $stmt->close();
}
?>

<h2>Testimonios</h2>

<div class="table-container">
    <table>
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Empresa</th>
                <th>Comentario</th>
                <th>Puntuación</th>
                <th>Estado</th>
                <th>Fecha</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            <?php
            $result = $conn->query("SELECT * FROM testimonios ORDER BY fecha_testimonio DESC");
            
            if ($result->num_rows > 0) {
                while ($row = $result->fetch_assoc()) {
                    $estado_class = strtolower($row['estado']);
                    $puntuacion = str_repeat('★', $row['puntuacion']) . str_repeat('☆', 5 - $row['puntuacion']);
                    echo "<tr>";
                    echo "<td>" . htmlspecialchars($row['nombre']) . "</td>";
                    echo "<td>" . htmlspecialchars($row['empresa'] ?? '-') . "</td>";
                    echo "<td>" . htmlspecialchars(substr($row['comentario'], 0, 50)) . "...</td>";
                    echo "<td>" . $puntuacion . "</td>";
                    echo "<td><span class='status " . $estado_class . "'>" . $row['estado'] . "</span></td>";
                    echo "<td>" . date('d/m/Y', strtotime($row['fecha_testimonio'])) . "</td>";
                    echo "<td class='action-buttons'>";
                    if ($row['estado'] == 'Pendiente') {
                        echo "<form method='POST' style='display: inline;'>";
                        echo "<input type='hidden' name='id' value='" . $row['id'] . "'>";
                        echo "<input type='hidden' name='action' value='aprobar'>";
                        echo "<button type='submit' class='btn-action btn-aprobar'>Aprobar</button>";
                        echo "</form>";
                        echo "<form method='POST' style='display: inline;'>";
                        echo "<input type='hidden' name='id' value='" . $row['id'] . "'>";
                        echo "<input type='hidden' name='action' value='rechazar'>";
                        echo "<button type='submit' class='btn-action btn-rechazar'>Rechazar</button>";
                        echo "</form>";
                    } else {
                        echo "<span style='color: #999; font-size: 0.9em;'>Ya procesado</span>";
                    }
                    echo "</td>";
                    echo "</tr>";
                }
            } else {
                echo "<tr><td colspan='7' style='text-align: center; color: #999;'>No hay testimonios</td></tr>";
            }
            ?>
        </tbody>
    </table>
</div>
