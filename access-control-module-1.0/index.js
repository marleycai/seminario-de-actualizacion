
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const cors = require('cors');
const port = 5000;
const mysql = require('mysql');

app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

// Ruta para la página de inicio
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
 
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '987654',
  database: 'user_management'
});

connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
  } else {
    console.log('Conexión exitosa a la base de datos');
  }
});
app.post('/api/users', (req, res) => {
  const { username, password } = req.body;

  if (username && password) {
    const sql = 'INSERT INTO users (username, password) VALUES (?, ?)';
    const values = [username, password];

    connection.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error al crear el usuario:', err);
        res.status(500).json({ status: 'error', description: 'Error en el servidor' });
      } else {
        console.log('Usuario creado exitosamente');
        res.json({ status: 'ok', description: 'Usuario creado exitosamente' });
      }
    });
  } else {
    res.status(400).json({ status: 'error', description: 'Datos incompletos' });
  }
});
app.use(express.static('C:\\UniServerZ\\www\\seminario-de-actualizacion\\access-control-module\\public'));

// Configurar el middleware body-parser
app.use(bodyParser.json());

// Definir las rutas de la WebAPI
app.post('/api/users', (req, res) => {
  // Obtener los datos del cuerpo de la solicitud
  const { username, password } = req.body;

  // Realizar la lógica para crear el usuario y enviar la respuesta correspondiente
  if (username && password) {
    // Lógica para crear el usuario en la base de datos o cualquier otra acción necesaria
    res.json({ status: 'ok', description: 'Usuario creado exitosamente' });
  } else {
    res.status(400).json({ status: 'error', description: 'Datos incompletos' });
  }
});

app.delete('/api/users/:id', (req, res) => {
  // Obtener el ID del usuario a eliminar
  const userId = req.params.id;

  // Realizar la lógica para eliminar el usuario y enviar la respuesta correspondiente
  if (userId) {
    // Lógica para eliminar el usuario de la base de datos o cualquier otra acción necesaria
    res.json({ status: 'ok', description: 'Usuario eliminado exitosamente' });
  } else {
    res.status(400).json({ status: 'error', description: 'ID de usuario inválido' });
  }
});

// Iniciar el servidor
app.get('/', (req, res) => {
  res.send('¡Bienvenido a la API!');
});
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});

