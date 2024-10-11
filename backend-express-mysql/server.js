const express = require('express');
const bodyParser = require('body-parser'); // Menggunakan body-parser untuk menangani data yang masuk
const experienceRoutes = require('./routes/experienceRoutes'); // Mengimpor rute pengalaman
const dotenv = require('dotenv');
const db = require('./db');

dotenv.config();

const app = express();
app.use(express.json()); // Middleware untuk parsing body JSON
app.use(bodyParser.urlencoded({ extended: true })); // Middleware untuk parsing form URL-encoded

// Menggunakan rute pengalaman
app.use('/api', experienceRoutes);

// Mulai server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
