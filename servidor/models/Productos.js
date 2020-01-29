const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productosSchema = new Schema({
    nombre:{
        type:String,
    },
    precio:{
        type:String
    },
    desc:{
        type:String
    },
    imagen:{
        type:String
    }
});

module.exports = mongoose.model('Productos', productosSchema);