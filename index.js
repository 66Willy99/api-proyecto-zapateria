const express = require("express");
const cors = require("cors");
const app = express();
const puerto = 2006;

const { getZapatos , getZapatoById, addZapato } = require("./controllers/zapatos.controller")

app.use(cors());

app.get("/", getZapatos)

app.get("/zapatos/:id", getZapatoById)

app.post("/zapatos", addZapato)


app.listen(puerto , ()=> {
    console.log(`Servidor ta bn ${puerto}`);

});


