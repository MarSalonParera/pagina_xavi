<?php
// sections/consultoria.php

// Procesar cambios de estado
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['action'])) {
    $id = intval($_POST['id']);
    $nuevo_estado = sanitizar($_POST['estado']);

    $sql = "UPDATE solicitudes_consultoria SET estado = ? WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("si", $nuevo_estado, $id);
    $stmt->execute();
    $stmt->close();
}
?>

<h2>Solicitudes de Consultoría</h2>

<div class="table-container">
    <table>
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Empresa</th>
                <th>Email</th>
                <th>Teléfono</th>
                <th>País</th>
                <th>Tipo de Proyecto</th>
                <th>Estado</th>
                <th>Fecha</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            <?php
            $result = $conn->query("SELECT * FROM solicitudes_consultoria ORDER BY fecha_solicitud DESC");
            
            if ($result->num_rows > 0) {
                while ($row = $result->fetch_assoc()) {
                    $estado_class = strtolower($row['estado']);
                    echo "<tr>";
                    echo "<td>" . htmlspecialchars($row['nombre']) . "</td>";
                    echo "<td>" . htmlspecialchars($row['empresa'] ?? '-') . "</td>";
                    echo "<td>" . htmlspecialchars($row['email']) . "</td>";
                    echo "<td>" . htmlspecialchars($row['telefono'] ?? '-') . "</td>";
                    echo "<td>" . htmlspecialchars($row['pais'] ?? '-') . "</td>";
                    echo "<td>" . htmlspecialchars($row['tipo_proyecto'] ?? '-') . "</td>";
                    echo "<td><span class='status " . $estado_class . "'>" . $row['estado'] . "</span></td>";
                    echo "<td>" . date('d/m/Y', strtotime($row['fecha_solicitud'])) . "</td>";
                    echo "<td>";
                    echo "<form method='POST' style='display: inline;'>";
                    echo "<input type='hidden' name='id' value='" . $row['id'] . "'>";
                    echo "<select name='estado' onchange='this.form.submit()' style='padding: 5px;'>";
                    echo "<option value='Pendiente' " . ($row['estado'] == 'Pendiente' ? 'selected' : '') . ">Pendiente</option>";
                    echo "<option value='Contactado' " . ($row['estado'] == 'Contactado' ? 'selected' : '') . ">Contactado</option>";
                    echo "<option value='Cerrado' " . ($row['estado'] == 'Cerrado' ? 'selected' : '') . ">Cerrado</option>";
                    echo "</select>";
                    echo "<input type='hidden' name='action' value='cambiar_estado'>";
                    echo "</form>";
                    echo "</td>";
                    echo "</tr>";
                }
            } else {
                echo "<tr><td colspan='9' style='text-align: center; color: #999;'>No hay solicitudes</td></tr>";
            }
            ?>
        </tbody>
    </table>
</div>

<style>
    form select {
        margin: 0;
    }
</style>
