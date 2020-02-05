const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sliderSchema = new Schema({
    
    titulo:{
        type:String
    },
    desc:{
        type:String
    },
    imagen:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Slider', sliderSchema);