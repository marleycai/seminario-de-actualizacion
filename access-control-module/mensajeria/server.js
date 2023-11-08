const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/db');  // Importa la conexión a la base de datos

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Rutas de la aplicación
const userRoutes = require('./routes/userRoutes');
app.use('/users', userRoutes);

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
