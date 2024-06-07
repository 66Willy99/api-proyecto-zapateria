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
    const newZapato = req.body;
  
    // Validar que los datos no estén vacíos
    if (!newZapato || Object.keys(newZapato).length === 0) {
      return res.status(400).json({ message: 'Los datos del zapato son requeridos' });
    }
  
    // Generar un nuevo ID basado en el último ID del array zapatos
    const nuevoId = zapatos.length > 0 ? zapatos[zapatos.length - 1].id + 1 : 1;
    newZapato.id = nuevoId;
  
    // Agregar los nuevos datos al array zapatos
    zapatos.push(newZapato);
  
    // Responder con un mensaje de éxito
    return res.status(201).json({
      ok: true,
      statusCode: 201,
      zapato: newZapato,
      message: 'Zapato agregado exitosamente'
    });
  };

module.exports = {
    getZapatos,
    getZapatoById,
    addZapato
}