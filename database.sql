-- Base de datos para gestión de consultoría

-- Tabla: solicitudes_consultoria
CREATE TABLE IF NOT EXISTS solicitudes_consultoria (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    empresa VARCHAR(100),
    email VARCHAR(100) NOT NULL,
    telefono VARCHAR(20),
    pais VARCHAR(50),
    tipo_proyecto VARCHAR(100),
    descripcion TEXT,
    estado ENUM('Pendiente', 'Contactado', 'Cerrado') DEFAULT 'Pendiente',
    fecha_solicitud TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla: testimonios
CREATE TABLE IF NOT EXISTS testimonios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    empresa VARCHAR(100),
    comentario TEXT NOT NULL,
    puntuacion INT CHECK (puntuacion >= 1 AND puntuacion <= 5),
    estado ENUM('Pendiente', 'Aprobado', 'Rechazado') DEFAULT 'Pendiente',
    fecha_testimonio TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla: suscriptores
CREATE TABLE IF NOT EXISTS suscriptores (
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(100) UNIQUE NOT NULL,
    fecha_suscripcion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    temas SET('Agricultura regenerativa', 'Nuevos proyectos', 'Eventos', 'Artículos del blog') DEFAULT 'Agricultura regenerativa,Nuevos proyectos,Eventos,Artículos del blog'
);

-- Tabla: candidatos
CREATE TABLE IF NOT EXISTS candidatos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    telefono VARCHAR(30),
    pais VARCHAR(80),
    ciudad VARCHAR(100),
    especialidad VARCHAR(100),
    experiencia TEXT,
    linkedin VARCHAR(255),
    descripcion TEXT,
    cv_path VARCHAR(255),
    carta_path VARCHAR(255),
    fecha_candidatura TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla: proyectos_potenciales
CREATE TABLE IF NOT EXISTS proyectos_potenciales (
    id INT PRIMARY KEY AUTO_INCREMENT,
    empresa VARCHAR(100) NOT NULL,
    sector VARCHAR(100),
    tamaño_proyecto VARCHAR(100),
    ubicacion VARCHAR(150),
    objetivos TEXT,
    presupuesto VARCHAR(50),
    estado ENUM('Nuevo', 'En revisión', 'Contactado', 'Cerrado') DEFAULT 'Nuevo',
    fecha_solicitud TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla: usuarios_admin
CREATE TABLE IF NOT EXISTS usuarios_admin (
    id INT PRIMARY KEY AUTO_INCREMENT,
    usuario VARCHAR(50) UNIQUE NOT NULL,
    contraseña VARCHAR(255) NOT NULL,
    email VARCHAR(100),
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
