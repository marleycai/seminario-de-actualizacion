const express = require('express');
const router = express.Router();
const db = require('./../utils/db');
const bcrypt = require('bcryptjs');

// Endpoint para iniciar sesión
router.post('/login', (req, res) => {
  const username = req.body.username;
  const contrasena = req.body.contrasena;

  if (!username || !contrasena) {
    res.status(400).json({ message: 'Por favor, proporciona un nombre de usuario y una contraseña.' });
    return;
  }

  const sql = 'SELECT * FROM usuarios WHERE username = ?';
  db.query(sql, [username], (err, result) => {
    if (err) {
      console.error('Error al iniciar sesión: ' + err.stack);
      res.status(500).json({ message: 'Error interno del servidor.' });
    } else {
      if (result.length === 1) {
        const user = result[0];
        
        // Compara la contraseña ingresada con la contraseña almacenada en la base de datos
        bcrypt.compare(contrasena, user.contrasena, (err, isPasswordValid) => {
          if (isPasswordValid) {
            // Las credenciales son válidas, puedes responder con un mensaje de éxito
            res.status(200).json({ message: 'Inicio de sesión exitoso.' });
          } else {
            res.status(401).json({ message: 'Credenciales inválidas.' });
          }
        });
      } else {
        res.status(401).json({ message: 'Credenciales inválidas.' });
      }
    }
  });
});

// Endpoint para registrar un nuevo usuario
router.post('/register', (req, res) => {
  const { nombre, username, contrasena } = req.body;

  // Verifica si todos los datos necesarios están presentes
  if (!nombre || !username || !contrasena) {
    res.status(400).json({ message: 'Por favor, proporciona todos los datos necesarios.' });
    return;
  }

  // Hash de la contraseña antes de almacenarla en la base de datos
  bcrypt.hash(contrasena, 10, (err, hashedPassword) => {
    if (err) {
      console.error('Error al hashear la contraseña: ' + err.stack);
      res.status(500).json({ message: 'Error interno del servidor.' });
      return;
    }

    // Realiza la inserción en la base de datos
    const sql = 'INSERT INTO usuarios (nombre, username, contrasena) VALUES (?, ?, ?)';
    db.query(sql, [nombre, username, hashedPassword], (err, result) => {
      if (err) {
        console.error('Error al registrar usuario: ' + err.stack);
        res.status(500).json({ message: 'Error interno del servidor.' });
      } else {
        res.status(201).json({ message: 'Usuario registrado correctamente.' });
      }
    });
  });
});

module.exports = router;
