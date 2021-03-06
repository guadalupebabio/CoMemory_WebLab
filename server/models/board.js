const mongoose = require("mongoose");

const BoardSchema = new mongoose.Schema({
  imageName: String,
  isPublic: Boolean,
  creator_id: String,
  honoree_name: String,
  date: String,
  place: String,
  msg: String
});

// compile model from schema
module.exports = mongoose.model("board", BoardSchema);