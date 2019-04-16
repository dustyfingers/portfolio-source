var mongoose = require('mongoose');

var skillSchema = new mongoose.Schema({
  title: String,
  text: String,
  icon: String,
});


module.exports = mongoose.model('Skill', skillSchema);
