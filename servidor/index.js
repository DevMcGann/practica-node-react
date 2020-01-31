const express = require('express');
require('dotenv').config()
const routes = require ('./routes/index');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const cors = require('cors');

mongoose.Promise = global.Promise;
/*mongoose.connect('mongodb://localhost/pruebaApi', {
    useNewUrlParser:true,
    useUnifiedTopology: true
});*/
mongoose.connect('mongodb+srv://devMcgann:prueba123@pruebaapi-btfhp.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser:true,
    useUnifiedTopology: true
});

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.use('/', routes());

app.use(express.static('uploads'));

app.listen(5000, ()=>{
    console.log("Servidor Andando en puerto 3000")
});