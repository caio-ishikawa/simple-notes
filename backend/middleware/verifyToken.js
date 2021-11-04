const cookieParser      = require('cookie-parser');
const jwt               = require('jsonwebtoken');
const { rawListeners }  = require('../models/User');

module.exports = async function(req, res, next) {
    const token = req.cookies['jwtCookie'];
    console.log('Verifying token: ' + token);
    if (!token) {
        return res.status(401).send('Access denied.');
    }

    try {
        const verified = jwt.verify(token, 'testKey');
        req.user = verified;
        next();
    } catch {
        res.status(400).send('Invalid token.');
    }
};