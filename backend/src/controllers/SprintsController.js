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
    }
};