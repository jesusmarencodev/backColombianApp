'use strict';
import jwt from 'jsonwebtoken';
const {config} = require('../config/index');
const SECRET = config.SECRET;



exports.ensureAuth = (req, res, next) => {
    if( !req.headers.authorization){//si el token no viene el los headers
        return res.status(403).send({message:"La peticion no tiene cabecera de autenticacion"});
    }else{      
        var token =  req.headers.authorization;
        //verificamos que el toquen sea  valido(el decoded contiene la informacion del usuario)
        jwt.verify(token, SECRET, (err, decoded)=>{
            if(err) return res.status(401).json({message:'Token no valido', ok:false, error:err});
            req.user = decoded;//agregando al req el decoded
            next();//se usa para que siga la operacion despues del middleware
        })
    }
}
exports.verifySuperSu = (req, res, next) => {
    var user = req.user;

    if(user.role === 'SUPERSU'){
        next();//sigue
    }else{
        return res.status(500).json({message:'El usuario no es SuperUsuario', ok:false});
    }
}

