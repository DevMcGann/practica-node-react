const express = require('express');
const router = express.Router();

const productosController = require('../controllers/productosController.js');
const usuariosController = require('../controllers/usuariosController');

module.exports = function(){

router.post('/productos',
    productosController.subirArchivo,
    productosController.nuevoProducto
);

router.get('/productos', productosController.mostrarProductos);
router.get('/productos/:idProducto', productosController.mostrarProducto);
router.put('productos/:idProducto', 
    productosController.subirArchivo,
    productosController.actualizarProducto
);
router.delete('/productos/:idProducto', productosController.eliminarProducto);
router.post('/productos/busqueda/:query', productosController.buscarProducto);

//crear usuario
router.post('/admin/nuevo', usuariosController.registrarUsuario);
//iniciar sesion
router.post('/admin', usuariosController.autenticarUsuario);



return router;

}