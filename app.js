'use strict';
import express from 'express';
const app = express();
import mongoose from 'mongoose';
import  bodyParser from 'body-parser';
const {config} = require('./config/index');
const PORT = config.PORT;
const URL_DB = config.URL_DB;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

//parse application/json
app.use(bodyParser.json());


//Cors configuration
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


//Route configuration
app.use(require('./routes/index'));

 //Connection to the server and database
app.listen(PORT, () => {
  console.log(`Server ${PORT}`);
  mongoose.connect(URL_DB, {useNewUrlParser: true, useUnifiedTopology: true},  (err, res)=>{
    console.log('Conected mongoDB')
  })
})