'use strict';
const express = require('express');

var controllers = {
    prueba:(req, res)=>{
        return res.status(200).json({message:'Hello new world'});
    }
}


module.exports = controllers;
