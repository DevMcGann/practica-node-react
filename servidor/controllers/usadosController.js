const Usados = require('../models/Usados.js');

//subir imagen
const multer = require('multer');
const shortid = require('shortid');
const fs = require('fs')

const configuracionMulter = {
    storage: fileStorage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, __dirname+'../../uploads/usados/');
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

exports.nuevoUsado = async (req,res,next) => {
    const usado = new Usados(req.body);
    try {
        if(req.file.filename){
            usado.imagen = req.file.filename;
        }
        await usado.save();
        res.json({mensaje:"Usado agregado"})
    } catch (error) {
        console.log(error);
        res.json({mensaje:"Error en controlador de Usados - Metodo Nuevo Usado. "})
        next();
    }
}


exports.mostrarUsados = async (req,res,next) => {
    try {
        const usados = await Usados.find({});
        res.json(usados)
    } catch (error) {
        console.log(error);
        next();
    }
}

exports.eliminarUsado = async (req,res,next) => {
    try {
         const producto = await Usados.findById({_id:req.params.idUsado})
        fs.unlink(__dirname + '../../uploads/usados/' + producto.imagen, function (err) {
        if (err) throw err;
        // if no error, file has been deleted successfully
        console.log('File deleted!');
        });

        await Usados.findOneAndDelete({_id: req.params.idUsado});
        res.json({mensaje:"Producto Eliminado"})
    } catch (error) {
        console.log(error);
        next();
    }
}


/*
exports.mostrarUsado = async (req,res,next) => {
    const usados = await Usados.findById(req.params.idUsado);
    if(!usados){
        res.json({mensaje:"Ese Usado no existe"});
        return next();
    }
    res.json(usados);
}

*/
/*exports.actualizarProducto=async(req,res,next) => {
    try {
        let productoAnterior = await Productos.findById(req.params.idProducto);
        let nuevoProducto = req.body;
        if(req.file){
            nuevoProducto.imagen=req.file.filename;
        }else{
            nuevoProducto.imagen=productoAnterior.imagen;
        }
    let producto = await Productos.findOneAndUpdate({_id:req.params.idProducto}, nuevoProducto, {new:true});
    res.json(producto)

    } catch (error) {
        console.log(error);
        next();
    }
}

*/


/*
exports.buscarUsado = async (req,res,next) => {
    try {
        const {query} = req.params;
        const usado = await Usados.find({nombre: new RegExp(query,'i')});
        res.json(usado);
    } catch (error) {
        console.log(error);
        next();
    }
}
*/