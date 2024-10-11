const express = require('express');
const router = express.Router();
const experienceController = require('../controllers/experienceController');

// Rute untuk pengalaman
router.get('/experiences', experienceController.getExperiences);
router.post('/experiences', experienceController.createExperience);
router.put('/experiences/:id', experienceController.updateExperience);
router.delete('/experiences/:id', experienceController.deleteExperience);

module.exports = router;
