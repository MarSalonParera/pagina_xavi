<?php
// sections/proyectos.php

// Procesar cambios de estado
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['action'])) {
    $id = intval($_POST['id']);
    $nuevo_estado = sanitizar($_POST['estado']);

    $sql = "UPDATE proyectos_potenciales SET estado = ? WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("si", $nuevo_estado, $id);
    $stmt->execute();
    $stmt->close();
}
?>

<h2>Proyectos Potenciales</h2>

<div class="table-container">
    <table>
        <thead>
            <tr>
                <th>Empresa</th>
                <th>Sector</th>
                <th>Tamaño del Proyecto</th>
                <th>Ubicación</th>
                <th>Presupuesto</th>
                <th>Estado</th>
                <th>Fecha</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            <?php
            $result = $conn->query("SELECT * FROM proyectos_potenciales ORDER BY fecha_solicitud DESC");
            
            if ($result->num_rows > 0) {
                while ($row = $result->fetch_assoc()) {
                    $estado_class = strtolower($row['estado']);
                    echo "<tr>";
                    echo "<td>" . htmlspecialchars($row['empresa']) . "</td>";
                    echo "<td>" . htmlspecialchars($row['sector'] ?? '-') . "</td>";
                    echo "<td>" . htmlspecialchars($row['tamaño_proyecto'] ?? '-') . "</td>";
                    echo "<td>" . htmlspecialchars($row['ubicacion'] ?? '-') . "</td>";
                    echo "<td>" . htmlspecialchars($row['presupuesto'] ?? '-') . "</td>";
                    echo "<td><span class='status " . $estado_class . "'>" . $row['estado'] . "</span></td>";
                    echo "<td>" . date('d/m/Y', strtotime($row['fecha_solicitud'])) . "</td>";
                    echo "<td>";
                    echo "<form method='POST' style='display: inline;'>";
                    echo "<input type='hidden' name='id' value='" . $row['id'] . "'>";
                    echo "<select name='estado' onchange='this.form.submit()' style='padding: 5px;'>";
                    echo "<option value='Nuevo' " . ($row['estado'] == 'Nuevo' ? 'selected' : '') . ">Nuevo</option>";
                    echo "<option value='En revisión' " . ($row['estado'] == 'En revisión' ? 'selected' : '') . ">En revisión</option>";
                    echo "<option value='Contactado' " . ($row['estado'] == 'Contactado' ? 'selected' : '') . ">Contactado</option>";
                    echo "<option value='Cerrado' " . ($row['estado'] == 'Cerrado' ? 'selected' : '') . ">Cerrado</option>";
                    echo "</select>";
                    echo "<input type='hidden' name='action' value='cambiar_estado'>";
                    echo "</form>";
                    echo "</td>";
                    echo "</tr>";
                }
            } else {
                echo "<tr><td colspan='8' style='text-align: center; color: #999;'>No hay proyectos</td></tr>";
            }
            ?>
        </tbody>
    </table>
</div>
