const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  text: { type: String, required: true },
  
  
});
module.exports = mongoose.model('ToDo', taskSchema)