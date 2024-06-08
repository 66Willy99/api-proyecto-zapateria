const express = require("express");
const cors = require("cors");
const app = express();
const puerto = 2006;
const multer = require('multer');
const upload = multer({ dest: './uploads/' });

const { getZapatos , getZapatoById, addZapato } = require("./controllers/zapatos.controller")

app.use(cors());

app.use(express.json());

app.get("/", getZapatos)

app.get("/zapatos/:id", getZapatoById)

app.post("/zapatos", addZapato)
app.post('/zapatos', upload.single('imagen'), addZapato); // 'imagen' es el nombre del campo en el que se enviará la imagen


app.get(/a/, function(req, res) {
    res.send('/a/');
  });


app.listen(puerto , ()=> {
    console.log(`Servidor ta bn ${puerto}`);

});


