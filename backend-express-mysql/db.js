const mysql = require('mysql2');
require('dotenv').config();

// Buat koneksi ke database
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Koneksi ke database
db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.code);
    return;
  }
  console.log('Connected to the database.');
});

module.exports = db;
