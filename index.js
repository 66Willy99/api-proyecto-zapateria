const express = require("express");

const cors = require("cors");

const app = express();

const puerto = 2006;


app.use(cors());

app.get("/", ( req, res )=> {

});


app.listen(puerto , ()=> {
    console.log(`Servidor ta bn ${puerto}`);

});


