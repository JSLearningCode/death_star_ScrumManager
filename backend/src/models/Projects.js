const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    name: String,
    productOwner: String,
    scrumMaster: String,
    team: String
});

module.exports = mongoose.model('Projects', ProjectSchema);