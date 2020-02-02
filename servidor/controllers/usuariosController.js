const Usuarios = require('../models/Usuarios');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.registrarUsuario = async (req, res) => {

    // leer los datos del usuario y colocarlos en Usuarios
    const usuario = new Usuarios(req.body);
    usuario.dni = await bcrypt.hash(req.body.dni, 12);
    try {
        await usuario.save();
        res.json({mensaje : 'Usuario Creado Correctamente'});
    } catch (error) {
        console.log(error);
        res.json({mensaje : 'Hubo un error'});
    }
    
}

exports.autenticarUsuario = async (req,res,next) => {
    //buscar el user por mail
    const {email,dni} = req.body;
    const usuario = await Usuarios.findOne({email});

     if (!usuario) {
         await res.status(401).json({mensaje: 'Usuario o pass incorrecto'});
         next();
     }else{
         //si el user existe pero el pass esta incorrecto
         if (!bcrypt.compareSync(dni, usuario.dni)) {
            await res.status(401).json({mensaje: 'Usuario o pass incorrecto'});
            next();
         }else{
             //psw correcto, firmar token
             const token = jwt.sign(
                {
                    email:usuario.email,
                    dni:usuario.dni,
                    id:usuario._id
                },
                'LLAVESECRETA',  /* ESTO DEBE IR EN ENV */
                {
                    expiresIn:'2h'
                }
            );

            res.json({token});
         }
     }   
}

