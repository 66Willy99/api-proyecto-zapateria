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
      nombre: req.body.nombre,  // Acceder a la propiedad "nombre" del JSON
      descripcion: String(req.body.descripcion),
      modelo: String(req.body.modelo),
      precioReferencial: parseInt(req.body.precioReferencial),
      detalles: {
        material: String(req.body.detalles.material),
        suela: String(req.body.detalles.suela),
        plantilla: String(req.body.detalles.plantilla)
      }
    };
    zapatos.push(nuevoZapato); 
    return console.log(req.body)
    }

module.exports = {
    getZapatos,
    getZapatoById,
    addZapato
}