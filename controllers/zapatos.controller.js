const { request, response } = require("express");
const { zapatos } = require("../zapatos");

const getZapatos =  ( req, res )=> {
    return res.json(zapatos);
}

const getZapatoById =  ( req=request, res=response )=> {
    let id = parseInt(req.params.id);

    let zapatoABuscar = "";

    zapatoABuscar = zapatos.find((zapato)=>{
        return zapato.id === id;

    });

    if(zapatoABuscar){
        return res.json({
            ok:true,
            statusCode:200,
            zapatoABuscar
        });
    }else{
        return res.json({
            ok:true,
            statusCode:404,
            msg:"No hay zapatos con ese ID"
        });}
}



const addZapato = (req, res) => {
    let body= req.body;
    let nuevoZapato = {
      id: zapatos.length + 1, // Generar automáticamente el ID
      ...body} // Guardar el nombre del archivo en la propiedad 'imagen' del objeto 'nuevoZapato'
    
    zapatos.push(nuevoZapato);
    return console.log(req.body);
    };
    

module.exports = {
    getZapatos,
    getZapatoById,
    addZapato
}