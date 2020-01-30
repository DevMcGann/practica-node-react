import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return ( 
        <header className="header">
            <Link to={'/productos/nuevo'}><h3>Nuevo Producto</h3></Link>
            <Link to={'/'}><h3>Productos</h3></Link>
            <Link to={'/'}><h3>Iniciar Sesión (Aun no anda)</h3></Link>
        </header>
     );
}
 
export default Navbar;