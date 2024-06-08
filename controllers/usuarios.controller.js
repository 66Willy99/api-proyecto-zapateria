const { request, response } = require("express");
const { usuarios } = require("../usuarios");

const getUsuarios =  ( req, res )=> {
    return res.json({
        ok:true,
        statusCode:200,
        usuarios
    });
}


module.exports = {
    getUsuarios
}