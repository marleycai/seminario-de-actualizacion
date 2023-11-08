// userModel.js

const db = require('../db');

const createUser = (nombre, username, contrasena, callback) => {
  const sql = 'INSERT INTO usuarios (nombre, username, contrasena) VALUES (?, ?, ?)';
  db.query(sql, [nombre, username, contrasena], (err, result) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, result);
  });
};

const getUserByUsername = (username, callback) => {
  const sql = 'SELECT * FROM usuarios WHERE username = ?';
  db.query(sql, [username], (err, result) => {
    if (err) {
      return callback(err, null);
    }
    if (result.length === 1) {
      callback(null, result[0]);
    } else {
      callback(null, null);
    }
  });
};

module.exports = {
  createUser,
  getUserByUsername,
};


