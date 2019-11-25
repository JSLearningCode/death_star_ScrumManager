const mongoose = require('mongoose');

const SprintSchema = new mongoose.Schema({
    name: String,
    begin: Date,
    duration: String
});

module.exports = mongoose.model('Sprints', SprintSchema);