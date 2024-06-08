const express = require("express");
const cors = require("cors");
const app = express();
const puerto = 2006;

const { getZapatos , getZapatoById, addZapato } = require("./controllers/zapatos.controller")
const { getUsuarios} = require("./controllers/usuarios.controller")

app.use(cors());

app.get("/api/zapatos", getZapatos)

app.get("/api/zapatos/:id", getZapatoById)

app.post("/zapatos", addZapato)

app.get("/api/usuarios", getUsuarios)


app.listen(puerto , ()=> {
    console.log(`Servidor ta bn ${puerto}`);

});


