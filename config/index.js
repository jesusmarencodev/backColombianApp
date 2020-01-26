'use strict';
require('dotenv').config();
//Enviroment Variables
const config = {
    PORT : process.env.PORT || 3001,
    SECRET : process.env.SECRET || 'secret_development_key',
    URL_DB: process.env.URL_DB
}
module.exports = {config};
