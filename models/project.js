var mongoose = require('mongoose');

var projectSchema = new mongoose.Schema({
  title: String,
  text: String,
  image: String,
  link: String
});


module.exports = mongoose.model('Project', projectSchema);
