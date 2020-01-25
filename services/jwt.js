'use strict';
import jwt from 'jsonwebtoken';
const {config} = require('../config/index');
const SECRET = config.SECRET;

import moment from 'moment';

//Token Creation
exports.createToken = function(user){
    var payload = {
        sub:user._id,
        nombre:user.nombre,
        email:user.email,
        state:user.state,
        role:user.role,
        iat:moment().unix(),//date the token is created
        exp:moment().add(4, 'hours').unix()//Token expiration in 4 hours
    }
    var token = jwt.sign(payload, SECRET);
    return token;
}