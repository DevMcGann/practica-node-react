import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return ( 
        <React.Fragment>
        <header className="header">
            <Link to={'/productos/nuevo'}><h3>Nuevo Producto</h3></Link>
            <Link to={'/'}><h3>Productos</h3></Link>
            <Link to={'/'}><h3>Slider</h3></Link>
            <Link to={'/'}><h3>Cerrar Sesion</h3></Link>
        </header>
        </React.Fragment>
     );
}
 
export default Navbar;