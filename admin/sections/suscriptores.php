<?php
// sections/suscriptores.php
?>

<h2>Suscriptores</h2>

<div class="table-container">
    <table>
        <thead>
            <tr>
                <th>Email</th>
                <th>Temas</th>
                <th>Fecha</th>
            </tr>
        </thead>
        <tbody>
            <?php
            $result = $conn->query("SELECT * FROM suscriptores ORDER BY fecha_suscripcion DESC");

            if ($result && $result->num_rows > 0) {
                while ($row = $result->fetch_assoc()) {
                    echo "<tr>";
                    echo "<td>" . htmlspecialchars($row['email']) . "</td>";
                    echo "<td>" . htmlspecialchars($row['temas'] ?? '-') . "</td>";
                    echo "<td>" . date('d/m/Y', strtotime($row['fecha_suscripcion'])) . "</td>";
                    echo "</tr>";
                }
            } else {
                echo "<tr><td colspan='3' style='text-align: center; color: #999;'>No hay suscriptores</td></tr>";
            }
            ?>
        </tbody>
    </table>
</div>
