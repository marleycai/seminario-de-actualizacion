const mysql = require('mysql');

const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root2',
  password: 'asd123',
  database: 'mensajeria'  // Nombre de tu base de datos
});

module.exports = {
  query: (sql, values, callback) => {
    return pool.query(sql, values, callback);
  }
};
