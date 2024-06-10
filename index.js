const express = require("express");
const cors = require("cors");
const app = express();
const puerto = 2006;
// const multer = require('multer'); *Se comento por que no funcionaba*
// const upload = multer({ dest: './uploads/' }); *Se comento por que no funcionaba*

const { getZapatos , getZapatoById, addZapato } = require("./controllers/zapatos.controller")
const { getUsuarios} = require("./controllers/usuarios.controller")

app.use(cors());

app.use(express.json());

app.get("/api/zapatos", getZapatos)

app.get("/api/zapatos/:id", getZapatoById)

app.post("/api/zapatos/add", addZapato) // --> Agregar Zapato 
// app.post('/zapatos', upload.single('imagen'), addZapato); // 'imagen' es el nombre del campo en el que se enviará la imagen *Se comento por que no funcionaba*

// app.post("/api/zapatos/del", delZapato) --> Borar Zapato
// app.post("/api/zapatos/mod", modZapato) --> Modificar Zapato

app.get("/api/usuarios", getUsuarios)


app.listen(puerto , ()=> {
    console.log(`Servidor ta bn ${puerto}`);

});


