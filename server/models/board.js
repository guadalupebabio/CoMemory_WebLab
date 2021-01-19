const mongoose = require("mongoose");

const BoardSchema = new mongoose.Schema({
  honoree_name: String,
  date: Date,
  place: String,
  message: String
});

// compile model from schema
module.exports = mongoose.model("board", BoardSchema);