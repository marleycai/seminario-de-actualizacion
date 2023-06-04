CREATE DATABASE gestion_usuarios;

USE gestion_usuarios;

CREATE TABLE usuarios (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  contraseña VARCHAR(50) NOT NULL
);

CREATE TABLE grupos (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(50) NOT NULL
);

CREATE TABLE usuarios_grupos (
  id INT PRIMARY KEY AUTO_INCREMENT,
  usuario_id INT,
  grupo_id INT,
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
  FOREIGN KEY (grupo_id) REFERENCES grupos(id)
);

CREATE TABLE sesiones (
  id INT PRIMARY KEY AUTO_INCREMENT,
  usuario_id INT,
  fecha_inicio DATETIME,
  fecha_fin DATETIME,
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);


CREATE TABLE auditoria (
  id INT PRIMARY KEY AUTO_INCREMENT,
  usuario_id INT,
  fecha_hora DATETIME,
  accion ENUM('login', 'logout'),
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

CREATE TABLE recursos (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(50) NOT NULL,
  descripcion VARCHAR(100)
  -- Otros campos relevantes para tus recursos
);

CREATE TABLE permisos (
  id INT PRIMARY KEY AUTO_INCREMENT,
  usuario_id INT,
  recurso_id INT,
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
  FOREIGN KEY (recurso_id) REFERENCES recursos(id)
);
INSERT INTO permisos (usuario_id, recurso_id) VALUES (1, 2);
SELECT COUNT(*) FROM permisos WHERE usuario_id = 1 AND recurso_id = 2;
DELETE FROM permisos WHERE usuario_id = 1 AND recurso_id = 2;
