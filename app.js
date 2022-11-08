const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');

const linkRoute = require('./MONGOOSE/routes/linkroutes');

mongoose.connect('mongodb://localhost/blog',{useUnifiedTopology: true})

let db = mongoose.connection;

db.on("error", ()=>{console.log("Houve um erro")});
db.once("open", () =>{console.log("Banco carregado");})

app.use('/',linkRoute)



app.listen(port, () => console.log(`Example app Listening on port ${port}!`))