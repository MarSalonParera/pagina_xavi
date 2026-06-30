<?php
// sections/candidatos.php
?>

<h2>Candidatos</h2>

<div class="table-container">
    <table>
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Email</th>
                <th>Telefono</th>
                <th>Ubicacion</th>
                <th>Especialidad</th>
                <th>Experiencia</th>
                <th>CV</th>
                <th>Carta</th>
                <th>Fecha</th>
            </tr>
        </thead>
        <tbody>
            <?php
            $result = $conn->query("SELECT * FROM candidatos ORDER BY fecha_candidatura DESC");

            if ($result && $result->num_rows > 0) {
                while ($row = $result->fetch_assoc()) {
                    $cv = trim($row['cv_path'] ?? '');
                    $carta = trim($row['carta_path'] ?? '');
                    $ubicacion = trim(($row['ciudad'] ?? '') . ' ' . ($row['pais'] ?? ''));

                    echo "<tr>";
                    echo "<td>" . htmlspecialchars($row['nombre']) . "</td>";
                    echo "<td>" . htmlspecialchars($row['email']) . "</td>";
                    echo "<td>" . htmlspecialchars($row['telefono'] ?? '-') . "</td>";
                    echo "<td>" . htmlspecialchars($ubicacion !== '' ? $ubicacion : '-') . "</td>";
                    echo "<td>" . htmlspecialchars($row['especialidad'] ?? '-') . "</td>";
                    echo "<td>" . htmlspecialchars($row['experiencia'] ?? '-') . "</td>";

                    if ($cv !== '') {
                        echo "<td><a class='btn-action btn-descargar' href='../" . htmlspecialchars($cv) . "' target='_blank' rel='noopener'>Ver CV</a></td>";
                    } else {
                        echo "<td>-</td>";
                    }

                    if ($carta !== '') {
                        echo "<td><a class='btn-action btn-descargar' href='../" . htmlspecialchars($carta) . "' target='_blank' rel='noopener'>Ver carta</a></td>";
                    } else {
                        echo "<td>-</td>";
                    }

                    echo "<td>" . date('d/m/Y', strtotime($row['fecha_candidatura'])) . "</td>";
                    echo "</tr>";
                }
            } else {
                echo "<tr><td colspan='9' style='text-align: center; color: #999;'>No hay candidatos</td></tr>";
            }
            ?>
        </tbody>
    </table>
</div>
