const User =  require('../models/Users');

async function create(req,res) {
    try {
        const user = await User.create(req.body);

        return res.send({ user });
        
        }
    catch (err) {
        return res.status(400).send({ error: 'Registration failed' });
    }
};

module.exports = {create};