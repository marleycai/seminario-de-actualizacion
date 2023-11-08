// conversationsModel.js

const db = require('../db');

const createConversation = (usuario1, usuario2, callback) => {
  const sql = 'INSERT INTO conversaciones (usuario1, usuario2) VALUES (?, ?)';
  db.query(sql, [usuario1, usuario2], (err, result) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, result);
  });
};

const sendMessage = (conversacionId, emisor, receptor, contenido, callback) => {
  const sql = 'INSERT INTO mensajes (conversacion_id, emisor, receptor, contenido) VALUES (?, ?, ?, ?)';
  db.query(sql, [conversacionId, emisor, receptor, contenido], (err, result) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, result);
  });
};

module.exports = {
  createConversation,
  sendMessage,
};
