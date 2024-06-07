const { request, response } = require("express");
const { zapatos } = require("../zapatos");

const getZapatos =  ( req, res )=> {
    return res.json({
        ok:true,
        statusCode:200,
        zapatos
    });
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
    let nuevoZapato = {
        id: zapatos.length + 1, // Generar automáticamente el ID
        nombre: req.params.nombre,
        descripcion: String(req.params.descripcion),
        modelo: String(req.params.modelo),
        precioReferencial: parseInt(req.params.precioReferencial),
        detalles:{
            material: String(req.params.material),
            suela: String(req.params.suela),
            plantilla: String(req.params.plantilla)
        } // Ejemplo para generar automáticamente el nombre
    };
    zapatos.push(nuevoZapato); 
    return res.json({
        ok:true,
        statusCode:200,
        msg:"zapato agregado correctamente"
    })
};

module.exports = {
    getZapatos,
    getZapatoById,
    addZapato
}