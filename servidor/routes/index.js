const express = require('express');
const router = express.Router();

const productosController = require('../controllers/productosController.js');
const usuariosController = require('../controllers/usuariosController');
const sliderController = require('../controllers/sliderController.js');
const usadosController = require('../controllers/usadosController.js');

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

//slider
router.get('/slider', sliderController.mostrarSliders);
router.post('/slider', sliderController.subirArchivo,sliderController.nuevoSlider);
router.delete('/slider/:idSlider', sliderController.eliminarSlider);

//usados
router.get('/usados', usadosController.mostrarUsados);
router.post('/usados', usadosController.subirArchivo,usadosController.nuevoUsado);
router.delete('/usados/:idUsado', usadosController.eliminarUsado);

return router;

}