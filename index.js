const express = require("express");
const cors = require("cors");
const app = express();
const puerto = 2006;
const multer = require('multer');
const upload = multer({ dest: './uploads/' });

const { getZapatos , getZapatoById, addZapato } = require("./controllers/zapatos.controller")
const { getUsuarios} = require("./controllers/usuarios.controller")

app.use(cors());

app.use(express.json());

app.get("/api/zapatos", getZapatos)

app.get("/api/zapatos/:id", getZapatoById)

app.post("/zapatos", addZapato)
app.post('/zapatos', upload.single('imagen'), addZapato); // 'imagen' es el nombre del campo en el que se enviará la imagen


app.get("/api/usuarios", getUsuarios)


app.listen(puerto , ()=> {
    console.log(`Servidor ta bn ${puerto}`);

});


