SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

DROP DATABASE IF EXISTS `user_management`;
CREATE DATABASE user_management;

USE user_management;

CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  password VARCHAR(50) NOT NULL
);
USE  user_management;
INSERT INTO users (name, email, password)
VALUES
('Luis González', 'luis.gonzalez1987@example.com', 'P@ssw0rd17Chars'),
('Martina Rodríguez', 'martina.rodriguez@example.com', 'Ch1n4Passw0rd!17'),
('Lucas Fernández', 'lucas_fernandez.2023@example.com', 'Ar9ent1n4&Ch1n4!'),
('Sofía Liu', 'sofia_liu2010@example.com', 'L1u@Ch1n4P@ss!17'),
('Diego Costa', 'diego_costa88ar@example.com', 'C0st@Ric4Argentin4'),
('Xiao Li', 'xiaoli.1995@example.com', 'Ch1n@P@ssw0rd!2023'),
('Valentina Medina', 'valentina_medina@example.com', 'V4l3nt1n4_M3d1n4'),
('Wei Chen', 'weichen88@example.com', 'W31Ch3n_1988!2023'),
('Lautaro Morales', 'lautaro.morales@example.com', 'L4ut4r0M0r4l3s!2023'),
('Yuan Zhang', 'yuan.zhang@example.com', 'Yu4nZhangP@ssw0rd'),
('Camila Herrera', 'camila.herrera2023@example.com', 'C@m1l4H3rr3r@17'),
('Ming Liu', 'mingliu_1990@example.com', 'L1uM1ng@1990!17'),
('Agustín Sánchez', 'agustin.sanchez@example.com', '4gust1n_2023_S4nch3z'),
('Lin Yang', 'lin.yang2023@example.com', 'L1n_Y@ng_2023!17'),
('Luciana Rodríguez', 'luciana.rodriguez@example.com', 'L4r0dr1gu3z!17'),
('Jing Wei', 'jingwei1995@example.com', 'J1ngW31_1995!2023'),
('Tomás Gómez', 'tomasgomez.example@example.com', 'T0m45G0m3z@2023!'),
('Xinyi Wang', 'xinyiwang@example.com', 'X1ny1W4ng_P@ssw0rd!'),
('Federico López', 'federico_lopez2023@example.com', 'F3d3r1c0_L0p3z_2023'),
('Yi Chen', 'yichen@example.com', 'Y1Ch3n_P@ssw0rd!2023'),
('Maia Rodríguez', 'maia_rodriguez2023@example.com', 'M4i4_R0dr1gu3z_2023'),
('Hao Liu', 'haoliu_1990@example.com', 'H40L1u_P@ssw0rd!17'),
('Isabella Pérez', 'isabella.perez@example.com', '1s4b3ll4P3r3z@2023');
CREATE TABLE workgroups (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL
);


USE  user_management;
INSERT INTO workgroups (name)
VALUES
('Development Team'),
('Infrastructure Team'),
('Security Team');


CREATE TABLE sessions (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,
  start_date DATETIME,
  end_date DATETIME,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

USE  user_management;
INSERT INTO sessions (user_id, start_date, end_date)
VALUES
  (1, '2023-06-01 10:00:00', '2023-06-01 12:00:00'),
  (1, '2023-06-02 09:30:00', '2023-06-02 11:30:00'),
  (2, '2023-06-03 14:00:00', '2023-06-03 16:00:00'),
  (2, '2023-06-04 11:00:00', '2023-06-04 13:00:00'),
  (3, '2023-06-05 13:30:00', '2023-06-05 15:30:00'),
  (3, '2023-06-06 16:00:00', '2023-06-06 18:00:00'),
  (4, '2023-06-07 08:30:00', '2023-06-07 10:30:00'),
  (4, '2023-06-08 11:30:00', '2023-06-08 13:30:00'),
  (5, '2023-06-09 14:30:00', '2023-06-09 16:30:00'),
  (5, '2023-06-10 09:00:00', '2023-06-10 11:00:00');

CREATE TABLE audit (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,
  date_time DATETIME,
  action ENUM('login', 'logout'),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE resources (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  description VARCHAR(100)
);

USE  user_management;
INSERT INTO resources (name, description)
VALUES
('Laptop', 'Mobile device for personal computing'),
('Printer', 'Device for printing documents on paper'),
('Server', 'Computing equipment for providing network services'),
('Router', 'Network device for addressing and routing'),
('Database', 'System for storing and managing structured information'),
('Network cable', 'Cable used to connect devices in a network'),
('Monitor', 'Display screen for visualizing data'),
('Mouse', 'Input device for controlling the cursor on the screen'),
('Keyboard', 'Input device for typing characters'),
('Hard drive', 'Storage device for storing data'),
('Switch', 'Network device for interconnecting devices in a local network'),
('Webcam', 'Device for capturing real-time video or images'),
('USB flash drive', 'Portable device for data storage'),
('Projector', 'Device for projecting images or video onto a surface'),
('Speakers', 'Sound output devices');

CREATE TABLE permissions (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,
  resource_id INT,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (resource_id) REFERENCES resources(id)
);
USE  user_management;
INSERT INTO permissions (user_id, resource_id)
VALUES
(1, 1), -- User 1 has permission for Resource 1
(1, 2), -- User 1 has permission for Resource 2
(2, 2), -- User 2 has permission for Resource 2
(3, 3); -- User 3 has permission for Resource 3




CREATE TABLE user_groups (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,
  group_id INT,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (group_id) REFERENCES user_groups(id)
);
USE  user_management;
INSERT INTO user_groups (user_id, group_id)
VALUES
(1, 1), -- User 1 belongs to Group 1
(2, 1), -- User 2 belongs to Group 1
(3, 2), -- User 3 belongs to Group 2
(4, 2), -- User 4 belongs to Group 2
(5, 3); -- User 5 belongs to Group 3

SELECT *  FROM audit;
SELECT *  FROM permissions;
SELECT *  FROM resources;
SELECT *  FROM sessions;
SELECT *  FROM user_groups;
SELECT *  FROM users;
SELECT *  FROM workgroups;

-- es un procemiento almacenado y su llamada 

DELIMITER //

CREATE PROCEDURE usp_GetUserCount()
BEGIN
    SELECT COUNT(*) AS UserCount FROM users;
END //

DELIMITER ;

CALL usp_GetUserCount();


DROP PROCEDURE IF EXISTS `usp_authorize_user`;

DELIMITER //

CREATE PROCEDURE `usp_authorize_user`(IN `p_username` varchar(50))
BEGIN
  SELECT * FROM users WHERE name = p_username;
END //

DELIMITER ;

CALL usp_authorize_user();


USE user_management;

DROP PROCEDURE IF EXISTS `usp_authenticate_user`;

DELIMITER //

CREATE PROCEDURE `usp_authenticate_user`(IN `p_username` varchar(50))
BEGIN
  SELECT * FROM users WHERE name = p_username;
END //

DELIMITER ;
