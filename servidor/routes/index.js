const express = require('express');
const router = express.Router();

const productosController = require('../controllers/productosController.js');

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
router.delete('productos/:idProducto', productosController.eliminarProducto);
router.post('/productos/busqueda/:query', productosController.buscarProducto);

return router;

}