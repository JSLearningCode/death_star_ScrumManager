const Sprint = require('../models/Sprints');

module.exports = {
    async store(req, res) {
        try {
            const sprint = await Sprint.create(req.body);
            return res.send({ sprint });
        }

        catch(err) {
            return res.status(400).send({ error: 'failed to create sprint'});
        }

    },
    
    async show(req, res) {
        const { sprt } = req.headers;
        const sprints = await Sprint.find({ sprt });
        return res.json(sprints);
    },

    async update(req, res) {
        try {
            const id = req.body.id;
            const update = {
                name: req.body.name,
                begin: req.body.begin,
                duration: req.body.duration
            }
            await Sprint.updateOne(id, update);
            return res.status(200).send('UPDATED');
        }
        catch(err) {
            return res.status(400).send({error: 'update error'});
        }
    },

    async delete(req,res) {
        try {
            const id = req.body.id;
            await Sprint.deleteOne(id);
            return res.status(200).send('DELETED');
        }
        catch(err) {
            return res.status(400).send({ error: 'delete error' });
        }
    }
};