const mongoose = require('mongoose');

const SprintSchema = new mongoose.Schema({
    name: String,
    begin: String,
    duration: String
});

module.exports = mongoose.model('Sprints', SprintSchema);