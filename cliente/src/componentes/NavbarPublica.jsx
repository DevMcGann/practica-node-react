import React from 'react';
import logo from '../logo.png'

const NavbarPublica = () => {
    return ( 
        <div className="nav-publica">
            <div className="logo">
                <img src={logo} alt="lgo"/>
            </div>
            <div className="navegacion">
                <a href="#productos">Productos</a>
                <a href="#contacto">Contacto</a>
            </div>
        </div>
     );
}
 
export default NavbarPublica;