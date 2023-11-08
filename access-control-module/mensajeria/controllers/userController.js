const db = require('../db');
const bcrypt = require('bcryptjs');

// Función para registrar un nuevo usuario
const registerUser = async (req, res) => {
  const { nombre, username, contrasena } = req.body;

  // Verifica si todos los datos necesarios están presentes
  if (!nombre || !username || !contrasena) {
    res.status(400).json({ message: 'Por favor, proporciona todos los datos necesarios.' });
    return;
  }

  try {
    // Hash de la contraseña antes de almacenarla en la base de datos
    const hashedPassword = await bcrypt.hash(contrasena, 10);

    const sql = 'INSERT INTO usuarios (nombre, username, contrasena) VALUES (?, ?, ?)';
    db.query(sql, [nombre, username, hashedPassword], (err, result) => {
      if (err) {
        console.error('Error al registrar usuario: ' + err.stack);
        res.status(500).json({ message: 'Error interno del servidor.' });
      } else {
        res.status(201).json({ message: 'Usuario registrado correctamente.' });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error interno del servidor.' });
  }
};

// Función para iniciar sesión
const loginUser = async (req, res) => {
  const { username, contrasena } = req.body;

  try {
    const sql = 'SELECT * FROM usuarios WHERE username = ?';
    db.query(sql, [username], async (err, result) => {
      if (err) {
        console.error('Error al iniciar sesión: ' + err.stack);
        res.status(500).json({ message: 'Error interno del servidor.' });
      } else {
        if (result.length === 1) {
          const user = result[0];
          const isPasswordValid = await bcrypt.compare(contrasena, user.contrasena);

          if (isPasswordValid) {
            res.status(200).json({ message: 'Inicio de sesión exitoso.' });
          } else {
            res.status(401).json({ message: 'Credenciales inválidas.' });
          }
        } else {
          res.status(401).json({ message: 'Credenciales inválidas.' });
        }
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error interno del servidor.' });
  }
};

module.exports = {
  registerUser,
  loginUser,
};
