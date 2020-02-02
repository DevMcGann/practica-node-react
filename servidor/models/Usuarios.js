const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuariosSchema = new Schema({
    email:{
        type:String,
        required:true,
    },
    dni:{
        type:String,
        required:true,
        
    }
   

});

module.exports = mongoose.model('Usuarios', usuariosSchema);