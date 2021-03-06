const jwt = require('jsonwebtoken');
const config = require('../config/config');

const createUserToken = (userId) => {  
    return jwt.sign({ id: userId }, config.jwt_pass, { expiresIn: config.jwt_expires_in });
}

module.exports = createUserToken;


