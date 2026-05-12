const express = require("express");
const router = express.Router();
const Perfume = require("../models/Perfume");

router.post("/", async (req, res) => {
  try {
    const { gender, age, occasion, note, weather } = req.body;

    // 🔥 FILTER LOGIC
    const perfumes = await Perfume.find({
      gender: gender,
      age: age,
      occasions: occasion,
      notes: note,
      weather: weather
    });

    res.json(perfumes);

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;