// conversationsRoutes.js

const express = require('express');
const router = express.Router();
const conversationsController = require('../controllers/conversationsController');

// Endpoint para crear una nueva conversación
router.post('/create', conversationsController.createConversation);

// Endpoint para enviar un mensaje en una conversación
router.post('/:id/mensaje', conversationsController.sendMessage);

module.exports = router;
