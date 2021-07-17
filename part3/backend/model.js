const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean
})

module.export = mongoose.model('note', noteSchema);