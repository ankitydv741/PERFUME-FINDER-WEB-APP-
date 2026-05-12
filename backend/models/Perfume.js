const mongoose = require("mongoose");

const perfumeSchema = new mongoose.Schema({
  name: String,
  brand: String,
  gender: String,
  age: [String],
  occasions: [String],
  notes: [String],
  weather: [String],
  image: String
});

module.exports = mongoose.model("Perfume", perfumeSchema);