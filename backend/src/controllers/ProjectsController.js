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
    },

    async update(req, res) {
        try {
            const id = req.body.id;
            const update = {
                name: req.body.name,
                productOwner: req.body.productOwner,
                scrumMaster: req.body.scrumMaster,
                team: req.body.team,
            };
            await Projects.updateOne(id, update);
                
            return res.send('UPDATED');
        }
        catch(err) {
            return res.status(400).send({ error: 'operation failed' });
        }
   
    },

    async delete(req, res) {
        try {
            const id = req.body.id;
            await Projects.deleteOne(id);
            return res.status(200).send('DELETED');
        }
        catch(err) {
            return res.status(400).send({ error: 'failed to match project'});
            }
    }
};