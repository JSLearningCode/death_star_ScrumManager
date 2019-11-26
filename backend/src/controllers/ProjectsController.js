const Projects = require('../models/Projects');

module.exports = {
    async store(req, res) {
        try {
            const project = await Projects.create(req.body);
            return res.send({ project });
        }

        catch(err) {
        return res.status(400).send({ error: 'failed to create project'});
        }
    },

    async show(req, res) {
        const { proj } = req.headers;
        const projects = await Projects.find({ proj });
        return res.json(projects);
    }
};