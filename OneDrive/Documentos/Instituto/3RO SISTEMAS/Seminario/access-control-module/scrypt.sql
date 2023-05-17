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
