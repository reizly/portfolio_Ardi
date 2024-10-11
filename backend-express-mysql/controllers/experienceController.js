const Experience = require('../models/experienceModel');

// Ambil semua pengalaman
const getExperiences = (req, res) => {
  Experience.getAllExperiences((err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json(results);
  });
};

// Buat pengalaman baru
const createExperience = (req, res) => {
  const experienceData = req.body;
  Experience.createExperience(experienceData, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ message: 'Experience created', data: result });
  });
};

// Perbarui pengalaman
const updateExperience = (req, res) => {
  const id = req.params.id;
  const experienceData = req.body;
  Experience.updateExperience(id, experienceData, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json({ message: 'Experience updated', data: result });
  });
};

// Hapus pengalaman
const deleteExperience = (req, res) => {
  const id = req.params.id;
  Experience.deleteExperience(id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json({ message: 'Experience deleted' });
  });
};

module.exports = {
  getExperiences,
  createExperience,
  updateExperience,
  deleteExperience,
};
