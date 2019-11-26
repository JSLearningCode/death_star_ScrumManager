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

module.exports = {store, show};