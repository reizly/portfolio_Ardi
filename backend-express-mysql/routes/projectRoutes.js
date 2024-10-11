const express = require('express');
const {
    createExperience,
    getExperiences,
    getExperienceById,
    updateExperience,
    deleteExperience,
} = require('../controllers/experienceController');

const router = express.Router();

router.post('/', createExperience); // Endpoint untuk membuat pengalaman
router.get('/', getExperiences); // Endpoint untuk mendapatkan semua pengalaman
router.get('/:id', getExperienceById); // Endpoint untuk mendapatkan pengalaman berdasarkan ID
router.put('/:id', updateExperience); // Endpoint untuk memperbarui pengalaman
router.delete('/:id', deleteExperience); // Endpoint untuk menghapus pengalaman

module.exports = router;
