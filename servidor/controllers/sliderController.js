const Slider = require('../models/Slider.js');

//subir imagen
const multer = require('multer');
const shortid = require('shortid');
const fs = require('fs');

const configuracionMulter = {
    storage: fileStorage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, __dirname+'../../uploads/sliders/');
        },
        filename: (req, file, cb) => {
            const extension = file.mimetype.split('/')[1];
            cb(null, `${shortid.generate()}.${extension}`);
        }
    }),
    fileFilter(req, file, cb) {
        if ( file.mimetype === 'image/jpeg' ||  file.mimetype ==='image/png' ) {
            cb(null, true);
        } else {
            cb(new Error('Formato No válido'))
        }
    },
}
// pasar la configuración y el campo
const upload = multer(configuracionMulter).single('imagen');

exports.subirArchivo = (req,res,next)=> {
    upload(req,res, function(error){
        if(error){
            res.json({mensaje:"error"})
        }
        return next();
    })
}
////////////////////////////////////////////////////////////////////////////////////////////////////

exports.nuevoSlider = async (req,res,next) => {
    const slider = new Slider(req.body);
    try {
        if(req.file.filename){
            slider.imagen = req.file.filename;
        }
        await slider.save();
        res.json({mensaje:"Slider agregado"})
    } catch (error) {
        console.log(error);
        res.json({mensaje:"Error en controlador de Slider"})
        next();
    }
}


exports.mostrarSliders = async (req,res,next) => {
    try {
        const sliders = await Slider.find({});
        res.json(sliders)
    } catch (error) {
        console.log(error);
        next();
    }
}



exports.eliminarSlider = async (req,res,next) => {

    try {
        
        const producto = await Productos.findById({_id:req.params.idProducto})
        fs.unlink(__dirname + '../../uploads/' + producto.imagen, function (err) {
        if (err) throw err;
        // if no error, file has been deleted successfully
        console.log('File deleted!');
        });

        await Slider.findOneAndDelete({_id: req.params.idSlider});
        res.json({mensaje:"Slider Eliminado"})
    } catch (error) {
        console.log(error);
        next();
    }
}
