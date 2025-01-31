const express = require('express');
const router = express.Router();
const Score = require('../models/Score');


router.get('/', async (req, res) => {
  try {
    const scores = await Score.find().sort({ score: -1 }).limit(1000);
    res.json(scores);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Save new score
router.post('/', async (req, res) => {
  const newScore = new Score({
    username: req.body.username,
    score: req.body.score
  });

  try {
    const savedScore = await newScore.save();
    res.status(201).json(savedScore);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;