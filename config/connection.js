// Required packages.
const mysql = require('mysql2');

// Creates a connection pool for efficiency.
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'employeeTracker',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Exports the pool so that it can be used in other files.
module.exports = pool.promise();
