const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    name: String,
    owner: String,
    team: String
});

module.exports = mongoose.model('Projects', ProjectSchema);