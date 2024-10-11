const db = require('../db');

// Ambil semua pengalaman
const getAllExperiences = (callback) => {
  const query = 'SELECT * FROM experiences';
  db.query(query, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

// Buat pengalaman baru
const createExperience = (experienceData, callback) => {
  const query = 'INSERT INTO experiences (year, title, description) VALUES (?, ?, ?)';
  const { year, title, description } = experienceData;
  db.query(query, [year, title, description], (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

// Perbarui pengalaman
const updateExperience = (id, experienceData, callback) => {
  const query = 'UPDATE experiences SET year = ?, title = ?, description = ? WHERE id = ?';
  const { year, title, description } = experienceData;
  db.query(query, [year, title, description, id], (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

// Hapus pengalaman
const deleteExperience = (id, callback) => {
  const query = 'DELETE FROM experiences WHERE id = ?';
  db.query(query, [id], (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

module.exports = {
  getAllExperiences,
  createExperience,
  updateExperience,
  deleteExperience,
};
