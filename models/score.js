const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ScoreSchema = new Schema({
  username: String,
  time: Number,
  Date: { type: Date, default: Date.now },
  gameID: Number,
});

module.exports = mongoose.model('Score', ScoreSchema);
