// conversationsController.js

const db = require('../utils/db');



// Función para crear una nueva conversación
const createConversation = (req, res) => {
  const { usuario1, usuario2 } = req.body;

  const sql = 'INSERT INTO conversaciones (usuario1, usuario2) VALUES (?, ?)';
  db.query(sql, [usuario1, usuario2], (err, result) => {
    if (err) {
      console.error('Error al crear la conversación: ' + err.stack);
      res.status(500).json({ message: 'Error interno del servidor.' });
    } else {
      res.status(201).json({ message: 'Conversación creada correctamente.' });
    }
  });
};

// Función para enviar un mensaje en una conversación
const sendMessage = (req, res) => {
  const { conversacionId, emisor, receptor, contenido } = req.body;

  const sql = 'INSERT INTO mensajes (conversacion_id, emisor, receptor, contenido) VALUES (?, ?, ?, ?)';
  db.query(sql, [conversacionId, emisor, receptor, contenido], (err, result) => {
    if (err) {
      console.error('Error al enviar el mensaje: ' + err.stack);
      res.status(500).json({ message: 'Error interno del servidor.' });
    } else {
      res.status(201).json({ message: 'Mensaje enviado correctamente.' });
    }
  });
};

module.exports = {
  createConversation,
  sendMessage,
};
