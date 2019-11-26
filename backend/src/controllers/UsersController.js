const User =  require('../models/Users');

async function store(req,res) {
    try {
        const user = await User.create(req.body);

        return res.send({ user });
        
        }
    catch (err) {
        return res.status(400).send({ error: 'Registration failed' });
    }
};

async function show(req, res) {
    const { us } = req.headers;
    const users = await User.find({ us });
    return res.json(users);
}

async function update(req, res) {
    try {
        const id = req.body.id;
        const update = {
            name: req.body.name
        }
        await User.updateOne(id, update);
        return res.status(200).send('UPDATED');
    }
    catch(err) {
        return res.status(400).send({ error: 'failed to update user' });
    }
}

async function deleted(req,res) {
    try {
        const id = req.body.id;
        await User.deleteOne(id);
        return res.status(200).send('DELETED');
    }
    catch(err) {
        return res.status(400).send({ error: 'failed to delete user' });
    }
}

module.exports = {store, show, update, deleted };