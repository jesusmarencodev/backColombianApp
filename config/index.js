'use strict';
require('dotenv').config();
//Enviroment Variables
const config = {
    PORT : process.env.PORT,
    SECRET : process.env.SECRET,
    URL_DB: process.env.URL_DB
}
module.exports = {config};
