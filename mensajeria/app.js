const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); // Agrega la importación para usar 'path'
const userRoutes = require('./routes/userRoutes');
const conversationsRoutes = require('./routes/conversationsRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Configura la carpeta 'public' para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
app.use('/users', userRoutes);
app.use('/conversations', conversationsRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor en marcha en el puerto ${PORT}`);
});
