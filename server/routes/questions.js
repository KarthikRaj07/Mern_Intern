const express = require('express');
const router = express.Router();
const Question = require('../models/Question');

// Get 10 random questions
router.get('/', async (req, res) => {
  try {
    const questions = await Question.aggregate([{ $sample: { size: 10 } }]);
    res.json(questions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;